import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SCHEMES_DATA } from '../data/schemesData';
import { SchemeCard } from './SchemeCard';
import type { Scheme } from '../types';
import { Bookmark, Printer, Award } from 'lucide-react';

interface SavedSchemesProps {
  onSelectScheme: (scheme: Scheme) => void;
}

export const SavedSchemes: React.FC<SavedSchemesProps> = ({ onSelectScheme }) => {
  const { savedSchemeIds, t } = useLanguage();

  const savedSchemes = SCHEMES_DATA.filter(s => savedSchemeIds.includes(s.id));

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-8">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-2">
        <div className="inline-flex items-center gap-2 bg-amber-400/20 border border-amber-400/30 text-amber-300 text-xs px-3 py-1 rounded-full font-bold">
          <Bookmark className="w-4 h-4 text-amber-400" />
          <span>Citizen Bookmark Hub</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-white">{t('navBookmarks')}</h2>
        <p className="text-slate-300 text-sm">
          Review your shortlisted government welfare schemes and export your personalized application packet.
        </p>
      </div>

      {savedSchemes.length > 0 ? (
        <div className="space-y-6">
          
          {/* Top Summary Banner */}
          <div className="bg-gradient-to-r from-indigo-950 via-slate-900 to-slate-900 border border-indigo-500/40 rounded-3xl p-6 flex flex-wrap items-center justify-between gap-4 shadow-xl">
            <div>
              <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest flex items-center gap-1.5">
                <Award className="w-4 h-4" /> Bookmarked Schemes Count
              </span>
              <p className="text-3xl font-black text-white mt-1">
                {savedSchemes.length} Schemes Shortlisted
              </p>
            </div>

            <button
              onClick={handlePrint}
              className="bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-300 hover:to-orange-400 text-slate-950 font-black text-xs px-6 py-3 rounded-xl shadow-lg flex items-center gap-2"
            >
              <Printer className="w-4 h-4" /> Print Application Packet
            </button>
          </div>

          {/* Grid of Saved Schemes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {savedSchemes.map((scheme) => (
              <SchemeCard
                key={scheme.id}
                scheme={scheme}
                onSelect={onSelectScheme}
              />
            ))}
          </div>

        </div>
      ) : (
        /* Empty State */
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-12 text-center space-y-4 max-w-md mx-auto">
          <div className="w-16 h-16 rounded-full bg-slate-800 text-slate-500 mx-auto flex items-center justify-center">
            <Bookmark className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-white">No Schemes Bookmarked Yet</h3>
          <p className="text-xs text-slate-400">
            Browse through schemes on the discovery page or run the eligibility checker to save schemes here.
          </p>
        </div>
      )}

    </div>
  );
};
