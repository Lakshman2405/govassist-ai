import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Volume2, VolumeX, Eye, Contrast } from 'lucide-react';

export const AccessibilityBar: React.FC = () => {
  const { 
    highContrast, 
    setHighContrast, 
    fontSize, 
    setFontSize, 
    speechEnabled, 
    setSpeechEnabled, 
    isSpeaking, 
    stopSpeaking, 
    t 
  } = useLanguage();

  return (
    <div className="bg-slate-900 text-slate-200 text-xs py-1.5 px-4 flex flex-wrap items-center justify-between border-b border-slate-800">
      <div className="flex items-center gap-4">
        <span className="font-semibold text-amber-400 flex items-center gap-1">
          <Eye className="w-3.5 h-3.5" /> Citizen Accessibility Hub
        </span>
        <span className="hidden md:inline text-slate-400">
          Tailored for all citizens including low-literacy & visually impaired users
        </span>
      </div>

      <div className="flex items-center gap-3">
        {/* High Contrast Toggle */}
        <button
          onClick={() => setHighContrast(!highContrast)}
          className={`px-2 py-1 rounded flex items-center gap-1 transition ${
            highContrast ? 'bg-amber-400 text-slate-950 font-bold' : 'bg-slate-800 hover:bg-slate-700 text-slate-300'
          }`}
          title="Toggle High Contrast Mode for Low Vision"
        >
          <Contrast className="w-3.5 h-3.5" />
          <span>{t('accessContrast')}</span>
        </button>

        {/* Font Size Scaler */}
        <div className="flex items-center bg-slate-800 rounded p-0.5 border border-slate-700">
          <span className="px-1.5 text-slate-400 text-[10px] uppercase font-bold">{t('accessFont')}:</span>
          <button
            onClick={() => setFontSize('sm')}
            className={`px-1.5 py-0.5 rounded text-[11px] font-bold ${fontSize === 'sm' ? 'bg-indigo-600 text-white' : 'text-slate-300 hover:bg-slate-700'}`}
          >
            A-
          </button>
          <button
            onClick={() => setFontSize('md')}
            className={`px-1.5 py-0.5 rounded text-[11px] font-bold ${fontSize === 'md' ? 'bg-indigo-600 text-white' : 'text-slate-300 hover:bg-slate-700'}`}
          >
            A
          </button>
          <button
            onClick={() => setFontSize('lg')}
            className={`px-1.5 py-0.5 rounded text-[11px] font-bold ${fontSize === 'lg' ? 'bg-indigo-600 text-white' : 'text-slate-300 hover:bg-slate-700'}`}
          >
            A+
          </button>
        </div>

        {/* Audio Reader Toggle */}
        <button
          onClick={() => {
            if (isSpeaking) stopSpeaking();
            setSpeechEnabled(!speechEnabled);
          }}
          className={`px-2 py-1 rounded flex items-center gap-1 transition ${
            speechEnabled || isSpeaking ? 'bg-emerald-500 text-slate-950 font-bold animate-pulse' : 'bg-slate-800 hover:bg-slate-700 text-slate-300'
          }`}
          title="Enable Screen & Scheme Audio Voice Reader"
        >
          {speechEnabled || isSpeaking ? <Volume2 className="w-3.5 h-3.5 text-slate-950" /> : <VolumeX className="w-3.5 h-3.5" />}
          <span>{t('accessSpeech')}</span>
        </button>
      </div>
    </div>
  );
};
