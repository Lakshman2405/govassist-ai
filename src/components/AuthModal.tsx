import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { 
  X, 
  Lock, 
  ShieldCheck, 
  ArrowRight
} from 'lucide-react';

export const INDIAN_STATES_AND_UTS = [
  // 28 States
  'Andhra Pradesh',
  'Arunachal Pradesh',
  'Assam',
  'Bihar',
  'Chhattisgarh',
  'Goa',
  'Gujarat',
  'Haryana',
  'Himachal Pradesh',
  'Jharkhand',
  'Karnataka',
  'Kerala',
  'Madhya Pradesh',
  'Maharashtra',
  'Manipur',
  'Meghalaya',
  'Mizoram',
  'Nagaland',
  'Odisha',
  'Punjab',
  'Rajasthan',
  'Sikkim',
  'Tamil Nadu',
  'Telangana',
  'Tripura',
  'Uttar Pradesh',
  'Uttarakhand',
  'West Bengal',

  // 8 Union Territories
  'Andaman and Nicobar Islands',
  'Chandigarh',
  'Dadra and Nagar Haveli and Daman and Diu',
  'Delhi (NCT)',
  'Jammu and Kashmir',
  'Ladakh',
  'Lakshadweep',
  'Puducherry'
].sort();

export const AuthModal: React.FC = () => {
  const { isAuthModalOpen, setIsAuthModalOpen, login, register, user, logout } = useAuth();
  const [mode, setMode] = useState<'login' | 'register'>('login');
  const [mobile, setMobile] = useState('');
  const [pin, setPin] = useState('');
  const [name, setName] = useState('');
  const [state, setState] = useState('Delhi (NCT)');
  const [role, setRole] = useState<'Citizen' | 'CSC Operator'>('Citizen');

  if (!isAuthModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mode === 'login') {
      if (mobile.length >= 10 && pin.length >= 4) {
        login(mobile, pin);
        setIsAuthModalOpen(false);
      } else {
        alert('Please enter a valid 10-digit mobile number and 4-digit PIN.');
      }
    } else {
      if (name && mobile.length >= 10 && pin.length >= 4) {
        register(name, mobile, state, pin, role);
        setIsAuthModalOpen(false);
      } else {
        alert('Please fill out all registration fields correctly.');
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-slate-800 w-full max-w-md rounded-3xl shadow-2xl overflow-hidden p-6 sm:p-8 relative space-y-6 animate-in zoom-in duration-200">
        
        {/* Close Button */}
        <button
          onClick={() => setIsAuthModalOpen(false)}
          className="absolute top-4 right-4 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white transition"
        >
          <X className="w-5 h-5" />
        </button>

        {user ? (
          /* User Profile Logged-in State */
          <div className="text-center space-y-4 pt-2">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 mx-auto flex items-center justify-center">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <div>
              <span className="text-[10px] bg-indigo-900/60 text-indigo-300 font-bold px-2.5 py-0.5 rounded border border-indigo-700/50">
                {user.role} Account Verified
              </span>
              <h3 className="text-xl font-bold text-white mt-1">{user.name}</h3>
              <p className="text-xs text-slate-400 font-mono mt-0.5">ID: {user.citizenId} • {user.mobile}</p>
            </div>

            <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 text-xs text-slate-300 text-left space-y-1.5 font-mono">
              <div className="flex justify-between">
                <span className="text-slate-500">Security Token:</span>
                <span className="text-emerald-400 font-bold">Encrypted (AES-256)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">State Jurisdiction:</span>
                <span className="text-white">{user.state}</span>
              </div>
            </div>

            <button
              onClick={() => {
                logout();
                setIsAuthModalOpen(false);
              }}
              className="w-full bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs py-3 rounded-xl shadow"
            >
              Sign Out Session
            </button>
          </div>
        ) : (
          /* Login / Register Form */
          <div className="space-y-6">
            <div className="text-center space-y-1">
              <div className="w-12 h-12 rounded-2xl bg-indigo-600/20 text-indigo-400 border border-indigo-500/30 mx-auto flex items-center justify-center mb-2">
                <Lock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-white">
                {mode === 'login' ? 'Citizen Secure Login' : 'Register Citizen Account'}
              </h3>
              <p className="text-xs text-slate-400">
                {mode === 'login' ? 'Enter your mobile number & 4-digit PIN' : 'Create a secure account for benefit tracking'}
              </p>
            </div>

            {/* Mode Switcher */}
            <div className="flex bg-slate-950 p-1 rounded-xl border border-slate-800">
              <button
                type="button"
                onClick={() => setMode('login')}
                className={`flex-1 py-2 text-xs font-bold rounded-lg transition ${
                  mode === 'login' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                Sign In
              </button>
              <button
                type="button"
                onClick={() => setMode('register')}
                className={`flex-1 py-2 text-xs font-bold rounded-lg transition ${
                  mode === 'register' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                New Register
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {mode === 'register' && (
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your full name"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white text-xs focus:border-indigo-500 focus:outline-none"
                    required
                  />
                </div>
              )}

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase mb-1">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  placeholder="10-digit mobile number"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white text-xs focus:border-indigo-500 focus:outline-none font-mono"
                  required
                />
              </div>

              {mode === 'register' && (
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase mb-1">
                      State / UT (36 Regions)
                    </label>
                    <select
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-white text-xs focus:border-indigo-500 focus:outline-none"
                    >
                      {INDIAN_STATES_AND_UTS.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase mb-1">
                      User Type
                    </label>
                    <select
                      value={role}
                      onChange={(e) => setRole(e.target.value as any)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-white text-xs focus:border-indigo-500 focus:outline-none"
                    >
                      <option value="Citizen">Citizen</option>
                      <option value="CSC Operator">CSC Operator</option>
                    </select>
                  </div>
                </div>
              )}

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase mb-1">
                  Security PIN (4-Digits)
                </label>
                <input
                  type="password"
                  maxLength={4}
                  value={pin}
                  onChange={(e) => setPin(e.target.value)}
                  placeholder="••••"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white text-xs focus:border-indigo-500 focus:outline-none font-mono tracking-widest"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-300 hover:to-orange-400 text-slate-950 font-black text-xs py-3 rounded-xl shadow-lg flex items-center justify-center gap-2"
              >
                <span>{mode === 'login' ? 'Authenticate Session' : 'Create Citizen Account'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
