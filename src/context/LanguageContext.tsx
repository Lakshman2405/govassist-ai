import React, { createContext, useContext, useState, useEffect } from 'react';
import type { LanguageCode } from '../types';
import { UI_TRANSLATIONS } from '../data/translations';

interface LanguageContextType {
  lang: LanguageCode;
  setLang: (lang: LanguageCode) => void;
  t: (key: string) => string;
  highContrast: boolean;
  setHighContrast: React.Dispatch<React.SetStateAction<boolean>>;
  fontSize: 'sm' | 'md' | 'lg';
  setFontSize: (size: 'sm' | 'md' | 'lg') => void;
  speechEnabled: boolean;
  setSpeechEnabled: React.Dispatch<React.SetStateAction<boolean>>;
  isSpeaking: boolean;
  speakText: (text: string, customLang?: LanguageCode) => void;
  stopSpeaking: () => void;
  savedSchemeIds: string[];
  toggleBookmark: (schemeId: string) => void;
  isBookmarked: (schemeId: string) => boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<LanguageCode>('en');
  const [highContrast, setHighContrast] = useState<boolean>(false);
  const [fontSize, setFontSize] = useState<'sm' | 'md' | 'lg'>('md');
  const [speechEnabled, setSpeechEnabled] = useState<boolean>(false);
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
  const [savedSchemeIds, setSavedSchemeIds] = useState<string[]>(['pm-kisan', 'ayushman-bharat']);

  const setLang = (newLang: LanguageCode) => {
    setLangState(newLang);
  };

  const t = (key: string): string => {
    return UI_TRANSLATIONS[lang]?.[key] || UI_TRANSLATIONS['en']?.[key] || key;
  };

  const toggleBookmark = (schemeId: string) => {
    setSavedSchemeIds(prev => 
      prev.includes(schemeId) ? prev.filter(id => id !== schemeId) : [...prev, schemeId]
    );
  };

  const isBookmarked = (schemeId: string) => savedSchemeIds.includes(schemeId);

  const speakText = (text: string, customLang?: LanguageCode) => {
    if (!('speechSynthesis' in window)) {
      alert('Text-to-speech is not supported in your browser.');
      return;
    }

    window.speechSynthesis.cancel();
    const targetLang = customLang || lang;
    const utterance = new SpeechSynthesisUtterance(text);
    
    // Map language code to BCP 47 tag
    const langTags: Record<LanguageCode, string> = {
      en: 'en-IN',
      hi: 'hi-IN',
      ta: 'ta-IN',
      te: 'te-IN',
      mr: 'mr-IN',
      bn: 'bn-IN',
      gu: 'gu-IN',
      kn: 'kn-IN'
    };

    utterance.lang = langTags[targetLang] || 'en-IN';
    utterance.rate = 0.9; // Slight slowing for clarity

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    window.speechSynthesis.speak(utterance);
  };

  const stopSpeaking = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setIsSpeaking(false);
  };

  // Sync font size class to html element
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('text-size-sm', 'text-size-md', 'text-size-lg');
    root.classList.add(`text-size-${fontSize}`);

    if (highContrast) {
      root.classList.add('dark', 'high-contrast');
    } else {
      root.classList.remove('dark', 'high-contrast');
    }
  }, [fontSize, highContrast]);

  return (
    <LanguageContext.Provider value={{
      lang,
      setLang,
      t,
      highContrast,
      setHighContrast,
      fontSize,
      setFontSize,
      speechEnabled,
      setSpeechEnabled,
      isSpeaking,
      speakText,
      stopSpeaking,
      savedSchemeIds,
      toggleBookmark,
      isBookmarked
    }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
