import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SCHEMES_DATA } from '../data/schemesData';
import type { Scheme } from '../types';
import { 
  GitCompare, 
  ExternalLink, 
  Building2, 
  Clock, 
  Phone, 
  FileText, 
  Award
} from 'lucide-react';

interface SchemeComparerProps {
  onSelectScheme: (scheme: Scheme) => void;
}

export const SchemeComparer: React.FC<SchemeComparerProps> = ({ onSelectScheme }) => {
  const { lang } = useLanguage();
  const [selectedIds, setSelectedIds] = useState<string[]>(['pm-kisan', 'ayushman-bharat']);

  const toggleSelectScheme = (id: string) => {
    if (selectedIds.includes(id)) {
      if (selectedIds.length > 1) {
        setSelectedIds(prev => prev.filter(item => item !== id));
      }
    } else {
      if (selectedIds.length < 3) {
        setSelectedIds(prev => [...prev, id]);
      } else {
        alert('You can compare up to 3 schemes at a time.');
      }
    }
  };

  const comparedSchemes = SCHEMES_DATA.filter(s => selectedIds.includes(s.id));

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-2">
        <div className="inline-flex items-center gap-2 bg-indigo-950 border border-indigo-500/40 text-indigo-300 text-xs px-3 py-1 rounded-full font-bold">
          <GitCompare className="w-4 h-4 text-indigo-400" />
          <span>Interactive Scheme Comparison Matrix</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-white">Compare Welfare Programs Side-by-Side</h2>
        <p className="text-slate-300 text-sm">
          Compare up to 3 schemes to evaluate max benefits, document requirements, and processing times.
        </p>
      </div>

      {/* Scheme Selector Pills Bar */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-3 shadow-xl">
        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
          Select Schemes to Compare (Choose 2 or 3):
        </span>
        <div className="flex flex-wrap gap-2">
          {SCHEMES_DATA.map((scheme) => {
            const isSelected = selectedIds.includes(scheme.id);
            const titleText = scheme.title[lang] || scheme.title.en;
            return (
              <button
                key={scheme.id}
                onClick={() => toggleSelectScheme(scheme.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 border ${
                  isSelected
                    ? 'bg-amber-400 text-slate-950 border-amber-400 shadow-md'
                    : 'bg-slate-950 text-slate-300 border-slate-800 hover:border-slate-700'
                }`}
              >
                <span>{isSelected ? '✓' : '+'}</span>
                <span>{titleText}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Comparison Matrix Table */}
      {comparedSchemes.length > 0 && (
        <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[700px]">
              
              <thead>
                <tr className="bg-slate-950 border-b border-slate-800">
                  <th className="p-4 sm:p-6 text-xs font-black text-slate-400 uppercase tracking-wider w-1/4">
                    Comparison Metric
                  </th>
                  {comparedSchemes.map((s) => {
                    const titleText = s.title[lang] || s.title.en;
                    return (
                      <th key={s.id} className="p-4 sm:p-6 text-slate-100 font-bold text-base border-l border-slate-800/80">
                        <span className="bg-indigo-900/60 text-indigo-300 text-[10px] font-extrabold px-2.5 py-0.5 rounded border border-indigo-700/50 block w-max mb-1">
                          {s.category}
                        </span>
                        <span className="text-amber-300 block">{titleText}</span>
                      </th>
                    );
                  })}
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-800 text-xs sm:text-sm">
                
                {/* Max Benefit */}
                <tr className="bg-slate-900/50 hover:bg-slate-900">
                  <td className="p-4 sm:p-5 font-bold text-slate-300 flex items-center gap-2">
                    <Award className="w-4 h-4 text-emerald-400" /> Financial Benefit
                  </td>
                  {comparedSchemes.map((s) => (
                    <td key={s.id} className="p-4 sm:p-5 font-black text-emerald-400 text-base border-l border-slate-800/80">
                      {s.maxBenefit}
                    </td>
                  ))}
                </tr>

                {/* Benefit Type */}
                <tr className="bg-slate-900/30 hover:bg-slate-900">
                  <td className="p-4 sm:p-5 font-bold text-slate-300">Benefit Category</td>
                  {comparedSchemes.map((s) => (
                    <td key={s.id} className="p-4 sm:p-5 text-slate-200 border-l border-slate-800/80">
                      <span className="bg-slate-800 px-2.5 py-1 rounded font-semibold text-xs">
                        {s.benefitType}
                      </span>
                    </td>
                  ))}
                </tr>

                {/* Ministry & Dept */}
                <tr className="bg-slate-900/50 hover:bg-slate-900">
                  <td className="p-4 sm:p-5 font-bold text-slate-300 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-indigo-400" /> Nodal Ministry
                  </td>
                  {comparedSchemes.map((s) => (
                    <td key={s.id} className="p-4 sm:p-5 text-slate-300 border-l border-slate-800/80 text-xs">
                      {s.ministry}
                    </td>
                  ))}
                </tr>

                {/* Processing Time */}
                <tr className="bg-slate-900/30 hover:bg-slate-900">
                  <td className="p-4 sm:p-5 font-bold text-slate-300 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-amber-400" /> Avg. Processing Days
                  </td>
                  {comparedSchemes.map((s) => (
                    <td key={s.id} className="p-4 sm:p-5 font-semibold text-white border-l border-slate-800/80">
                      {s.processingTimeDays} Days
                    </td>
                  ))}
                </tr>

                {/* Helpline */}
                <tr className="bg-slate-900/50 hover:bg-slate-900">
                  <td className="p-4 sm:p-5 font-bold text-slate-300 flex items-center gap-2">
                    <Phone className="w-4 h-4 text-emerald-400" /> Helpline Number
                  </td>
                  {comparedSchemes.map((s) => (
                    <td key={s.id} className="p-4 sm:p-5 text-amber-400 font-bold border-l border-slate-800/80">
                      {s.helplineNumber}
                    </td>
                  ))}
                </tr>

                {/* Required Documents */}
                <tr className="bg-slate-900/30 hover:bg-slate-900">
                  <td className="p-4 sm:p-5 font-bold text-slate-300 flex items-start gap-2">
                    <FileText className="w-4 h-4 text-indigo-400 mt-0.5" /> Required Documents
                  </td>
                  {comparedSchemes.map((s) => (
                    <td key={s.id} className="p-4 sm:p-5 border-l border-slate-800/80 space-y-1.5 text-xs text-slate-300">
                      {s.requiredDocuments.map((doc, i) => (
                        <div key={i} className="flex items-center gap-1.5">
                          <span className="text-emerald-400 font-bold">✓</span> <span>{doc}</span>
                        </div>
                      ))}
                    </td>
                  ))}
                </tr>

                {/* Direct Action */}
                <tr className="bg-slate-950">
                  <td className="p-4 sm:p-5 font-bold text-slate-400">Action</td>
                  {comparedSchemes.map((s) => (
                    <td key={s.id} className="p-4 sm:p-5 border-l border-slate-800/80">
                      <button
                        onClick={() => onSelectScheme(s)}
                        className="w-full bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-300 hover:to-orange-400 text-slate-950 font-extrabold text-xs px-4 py-2.5 rounded-xl shadow transition flex items-center justify-center gap-1.5"
                      >
                        <span>View Details</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </button>
                    </td>
                  ))}
                </tr>

              </tbody>
            </table>
          </div>
        </div>
      )}

    </div>
  );
};
