import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import type { CategoryType } from '../types';
import { 
  Search, 
  Mic, 
  MicOff, 
  Sparkles, 
  Users, 
  ChevronRight,
  TrendingUp,
  Landmark
} from 'lucide-react';

interface HeroSectionProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: CategoryType;
  setSelectedCategory: (cat: CategoryType) => void;
  onOpenChecker: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  onOpenChecker
}) => {
  const { t, lang, speakText } = useLanguage();
  const [isRecording, setIsRecording] = useState(false);

  // Web Speech API Voice Search
  const handleVoiceSearch = () => {
    if (!('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)) {
      alert('Voice search is not supported in your browser. Please type your search query.');
      return;
    }

    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    
    const langMap: Record<string, string> = {
      en: 'en-IN', hi: 'hi-IN', ta: 'ta-IN', te: 'te-IN',
      mr: 'mr-IN', bn: 'bn-IN', gu: 'gu-IN', kn: 'kn-IN'
    };

    recognition.lang = langMap[lang] || 'en-IN';
    recognition.interimResults = false;

    recognition.onstart = () => setIsRecording(true);
    recognition.onend = () => setIsRecording(false);
    recognition.onerror = () => setIsRecording(false);

    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      setSearchQuery(transcript);
      speakText(`Searching schemes for ${transcript}`);
    };

    recognition.start();
  };

  const categories: { id: CategoryType; labelKey: string; icon: string }[] = [
    { id: 'All', labelKey: 'filterAll', icon: '🌟' },
    { id: 'Agriculture', labelKey: 'filterAgri', icon: '🚜' },
    { id: 'Healthcare', labelKey: 'filterHealth', icon: '🏥' },
    { id: 'Women & Child', labelKey: 'filterWomen', icon: '👩‍👧' },
    { id: 'Housing', labelKey: 'filterHousing', icon: '🏠' },
    { id: 'Pensions & Senior', labelKey: 'filterPensions', icon: '👴' },
    { id: 'MSME & Business', labelKey: 'filterMSME', icon: '🏪' },
    { id: 'Employment & Skills', labelKey: 'filterSkills', icon: '🛠️' }
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-indigo-950/40 text-white pt-8 pb-12 border-b border-slate-800">
      {/* Background Decorative Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Tag */}
        <div className="flex justify-center mb-4">
          <div className="inline-flex items-center gap-2 bg-slate-800/90 hover:bg-slate-800 border border-slate-700 rounded-full px-4 py-1.5 text-xs text-amber-300 shadow-inner">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className="font-semibold">{t('badgeText')}</span>
            <span className="bg-indigo-600 text-white text-[10px] px-2 py-0.5 rounded-full font-bold">
              AI Powered
            </span>
          </div>
        </div>

        {/* Hero Title & Subtitle */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight bg-gradient-to-r from-white via-slate-100 to-amber-200 bg-clip-text text-transparent">
            {t('heroTitle')}
          </h1>
          <p className="text-sm sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {t('heroSubtitle')}
          </p>
        </div>

        {/* AI Search Bar & Voice Input */}
        <div className="mt-8 max-w-3xl mx-auto">
          <div className="relative flex items-center bg-slate-950/80 rounded-2xl border-2 border-indigo-500/40 focus-within:border-indigo-400 shadow-2xl shadow-indigo-950/50 transition-all p-2">
            <Search className="w-6 h-6 text-slate-400 ml-3 shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t('searchPlaceholder')}
              className="w-full bg-transparent text-white placeholder-slate-400 text-sm sm:text-base px-3 py-2 focus:outline-none"
            />
            
            {/* Voice Search Mic Button */}
            <button
              onClick={handleVoiceSearch}
              className={`p-3 rounded-xl transition flex items-center justify-center shrink-0 ${
                isRecording
                  ? 'bg-rose-600 text-white animate-bounce'
                  : 'bg-slate-800 hover:bg-slate-700 text-amber-400'
              }`}
              title={t('voiceSearchTooltip')}
            >
              {isRecording ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
            </button>

            {/* Quick Action Button */}
            <button
              onClick={onOpenChecker}
              className="hidden sm:flex ml-2 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white font-bold text-xs px-5 py-3 rounded-xl shadow-lg flex-items-center gap-1.5 transition shrink-0"
            >
              <span>{t('btnCheckEligibility')}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Quick Prompts */}
          <div className="mt-3 flex flex-wrap items-center justify-center gap-2 text-xs text-slate-400">
            <span className="font-semibold text-slate-400">Popular Queries:</span>
            {[
              'PM KISAN ₹6000',
              'Ayushman ₹5 Lakh Health',
              'Sukanya Girl Child',
              'Mudra ₹10 Lakh Loan',
              'PMAY House Subsidy'
            ].map((tag) => (
              <button
                key={tag}
                onClick={() => setSearchQuery(tag)}
                className="bg-slate-800/80 hover:bg-indigo-900/60 text-slate-300 hover:text-amber-300 px-2.5 py-1 rounded-lg border border-slate-700 transition"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Live Governance Ticker Stats */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
          <div className="bg-slate-950/60 border border-slate-800 rounded-2xl p-4 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-400/10 text-amber-400 flex items-center justify-center shrink-0">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xl font-black text-amber-300">{t('statDisbursed')}</p>
              <p className="text-xs text-slate-400">{t('statDisbursedLabel')}</p>
            </div>
          </div>

          <div className="bg-slate-950/60 border border-slate-800 rounded-2xl p-4 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center shrink-0">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xl font-black text-white">{t('statCitizens')}</p>
              <p className="text-xs text-slate-400">{t('statCitizensLabel')}</p>
            </div>
          </div>

          <div className="bg-slate-950/60 border border-slate-800 rounded-2xl p-4 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
              <Landmark className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xl font-black text-emerald-400">{t('statSchemes')}</p>
              <p className="text-xs text-slate-400">{t('statSchemesLabel')}</p>
            </div>
          </div>
        </div>

        {/* Category Filters Bar */}
        <div className="mt-10 overflow-x-auto pb-2 scrollbar-none">
          <div className="flex items-center gap-2 justify-start sm:justify-center min-w-max">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all shadow-sm ${
                    isSelected
                      ? 'bg-gradient-to-r from-amber-400 to-orange-500 text-slate-950 shadow-amber-500/20 scale-105'
                      : 'bg-slate-800/80 hover:bg-slate-700 text-slate-200 border border-slate-700'
                  }`}
                >
                  <span>{cat.icon}</span>
                  <span>{t(cat.labelKey)}</span>
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};
