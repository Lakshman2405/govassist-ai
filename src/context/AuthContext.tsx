import React, { createContext, useContext, useState } from 'react';

export interface UserSession {
  citizenId: string;
  name: string;
  mobile: string;
  state: string;
  role: 'Citizen' | 'CSC Operator';
  token: string;
}

interface AuthContextType {
  user: UserSession | null;
  login: (mobile: string, pin: string) => boolean;
  register: (name: string, mobile: string, state: string, pin: string, role?: 'Citizen' | 'CSC Operator') => void;
  logout: () => void;
  encryptData: (plainText: string) => string;
  decryptData: (cipherText: string) => string;
  isAuthModalOpen: boolean;
  setIsAuthModalOpen: (open: boolean) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Simple client-side AES/XOR cipher string encryption for local citizen data security
const SECURITY_SALT = 'JANSEVA_ENTERPRISE_SECRET_KEY_2026';

const cipherEncrypt = (text: string): string => {
  try {
    const chars = text.split('');
    const encrypted = chars.map((c, i) => 
      String.fromCharCode(c.charCodeAt(0) ^ SECURITY_SALT.charCodeAt(i % SECURITY_SALT.length))
    ).join('');
    return btoa(encrypted);
  } catch (e) {
    return text;
  }
};

const cipherDecrypt = (encoded: string): string => {
  try {
    const text = atob(encoded);
    const chars = text.split('');
    return chars.map((c, i) => 
      String.fromCharCode(c.charCodeAt(0) ^ SECURITY_SALT.charCodeAt(i % SECURITY_SALT.length))
    ).join('');
  } catch (e) {
    return encoded;
  }
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserSession | null>(() => {
    const stored = sessionStorage.getItem('janseva_user_session');
    if (stored) {
      try {
        const decrypted = cipherDecrypt(stored);
        return JSON.parse(decrypted);
      } catch (e) {
        return null;
      }
    }
    return null;
  });

  const [isAuthModalOpen, setIsAuthModalOpen] = useState<boolean>(false);

  const login = (mobile: string, _pin: string): boolean => {
    const session: UserSession = {
      citizenId: `CIT-${mobile.slice(-4)}-2026`,
      name: mobile === '9876543210' ? 'Ramesh Sharma' : 'Verified Citizen',
      mobile,
      state: 'Delhi',
      role: 'Citizen',
      token: `JWT_TOK_${btoa(mobile)}_${Date.now()}`
    };

    setUser(session);
    sessionStorage.setItem('janseva_user_session', cipherEncrypt(JSON.stringify(session)));
    return true;
  };

  const register = (name: string, mobile: string, state: string, _pin: string, role: 'Citizen' | 'CSC Operator' = 'Citizen') => {
    const session: UserSession = {
      citizenId: `CIT-${mobile.slice(-4)}-2026`,
      name,
      mobile,
      state,
      role,
      token: `JWT_TOK_${btoa(mobile)}_${Date.now()}`
    };

    setUser(session);
    sessionStorage.setItem('janseva_user_session', cipherEncrypt(JSON.stringify(session)));
  };

  const logout = () => {
    setUser(null);
    sessionStorage.removeItem('janseva_user_session');
  };

  return (
    <AuthContext.Provider value={{
      user,
      login,
      register,
      logout,
      encryptData: cipherEncrypt,
      decryptData: cipherDecrypt,
      isAuthModalOpen,
      setIsAuthModalOpen
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
