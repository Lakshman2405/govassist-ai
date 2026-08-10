import React from 'react';
import type { Scheme } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { 
  Volume2, 
  Bookmark, 
  Clock, 
  Sparkles, 
  ChevronRight,
  CheckCircle
} from 'lucide-react';

interface SchemeCardProps {
  scheme: Scheme;
  onSelect: (scheme: Scheme) => void;
  matchScore?: number;
}

export const SchemeCard: React.FC<SchemeCardProps> = ({ scheme, onSelect, matchScore }) => {
  const { lang, t, speakText, isBookmarked, toggleBookmark } = useLanguage();

  const titleText = scheme.title[lang] || scheme.title.en;
  const descText = scheme.shortDescription[lang] || scheme.shortDescription.en;
  const bookmarked = isBookmarked(scheme.id);

  const handleAudioRead = (e: React.MouseEvent) => {
    e.stopPropagation();
    const readPayload = `${titleText}. ${descText}. Maximum Benefit: ${scheme.maxBenefit}. Helpline: ${scheme.helplineNumber}`;
    speakText(readPayload, lang);
  };

  return (
    <div 
      onClick={() => onSelect(scheme)}
      className="bg-slate-900/90 hover:bg-slate-900 border border-slate-800 hover:border-indigo-500/50 rounded-2xl p-6 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-indigo-950/40 cursor-pointer flex flex-col justify-between group relative overflow-hidden"
    >
      {/* Top Category Badge & Bookmark */}
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2">
            <span className="bg-indigo-900/60 text-indigo-300 text-xs font-bold px-3 py-1 rounded-lg border border-indigo-700/50">
              {scheme.category}
            </span>
            {scheme.isPopular && (
              <span className="bg-amber-400/20 text-amber-300 text-[10px] font-bold px-2.5 py-0.5 rounded-full border border-amber-400/30 flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-amber-400" /> High Impact
              </span>
            )}
          </div>

          <div className="flex items-center gap-1">
            {/* Audio Read-Aloud Button */}
            <button
              onClick={handleAudioRead}
              className="p-2 rounded-xl bg-slate-800 hover:bg-indigo-600 text-slate-300 hover:text-white transition"
              title={t('btnReadAloud')}
            >
              <Volume2 className="w-4 h-4 text-amber-400" />
            </button>

            {/* Bookmark Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleBookmark(scheme.id);
              }}
              className={`p-2 rounded-xl transition ${
                bookmarked
                  ? 'bg-amber-400 text-slate-950 font-bold'
                  : 'bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white'
              }`}
              title={bookmarked ? t('btnBookmarked') : t('btnBookmark')}
            >
              <Bookmark className={`w-4 h-4 ${bookmarked ? 'fill-slate-950' : ''}`} />
            </button>
          </div>
        </div>

        {/* Match Score Bar if present */}
        {matchScore !== undefined && (
          <div className="mb-4 bg-slate-950 p-2.5 rounded-xl border border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span className="text-xs font-bold text-slate-200">AI Eligibility Score</span>
            </div>
            <span className={`text-xs font-black px-2 py-0.5 rounded-full ${
              matchScore >= 80 ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' : 'bg-amber-500/20 text-amber-300'
            }`}>
              {matchScore}% Match
            </span>
          </div>
        )}

        {/* Title & Department */}
        <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors leading-snug">
          {titleText}
        </h3>
        <p className="text-xs text-slate-400 mt-1 font-medium">
          {scheme.department} • {scheme.ministry}
        </p>

        {/* Short Description */}
        <p className="text-xs sm:text-sm text-slate-300 mt-3 line-clamp-3 leading-relaxed">
          {descText}
        </p>
      </div>

      {/* Benefits & Meta Footer */}
      <div className="mt-6 pt-4 border-t border-slate-800 space-y-3">
        <div className="flex items-center justify-between bg-slate-950/60 p-3 rounded-xl border border-slate-800/80">
          <div>
            <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Financial Benefit</span>
            <p className="text-sm font-extrabold text-emerald-400">{scheme.maxBenefit}</p>
          </div>
          <div className="text-right">
            <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Benefit Type</span>
            <p className="text-xs font-semibold text-slate-200">{scheme.benefitType}</p>
          </div>
        </div>

        <div className="flex items-center justify-between text-xs text-slate-400 pt-1">
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-slate-500" />
            {scheme.processingTimeDays} Days Processing
          </span>
          
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onSelect(scheme);
            }}
            className="flex items-center gap-1 text-xs font-bold text-indigo-400 group-hover:text-amber-300 transition"
          >
            <span>{t('btnViewDetails')}</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
