import React from 'react';
import type { SchemeMatchResult, Scheme } from '../types';
import { 
  AlertTriangle, 
  ArrowRight, 
  ShieldAlert
} from 'lucide-react';

interface GapAnalyzerProps {
  matchResults: SchemeMatchResult[];
  onSelectScheme: (scheme: Scheme) => void;
}

export const GapAnalyzer: React.FC<GapAnalyzerProps> = ({ matchResults, onSelectScheme }) => {
  // Partial matches (40% <= matchScore < 80%)
  const partialMatches = matchResults.filter(r => r.matchScore >= 40 && r.matchScore < 80);

  if (partialMatches.length === 0) {
    return (
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 text-center text-slate-400 text-xs">
        No action gaps detected. All evaluated schemes are either 100% matched or ineligible.
      </div>
    );
  }

  return (
    <div className="space-y-6 pt-6">
      
      {/* Title */}
      <div className="bg-slate-900 border border-amber-500/40 rounded-3xl p-6 space-y-2 shadow-xl">
        <div className="flex items-center gap-2 text-amber-300 font-extrabold text-sm">
          <ShieldAlert className="w-5 h-5 text-amber-400" />
          <span>AI Eligibility Gap Roadmap — Action Needed</span>
        </div>
        <p className="text-xs text-slate-300">
          You are partially eligible for <strong>{partialMatches.length} schemes</strong>. Follow these actionable steps to fulfill missing criteria and claim your welfare benefits.
        </p>
      </div>

      {/* Gap Cards */}
      <div className="space-y-4">
        {partialMatches.map((res) => (
          <div key={res.scheme.id} className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-4 shadow-xl">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-4">
              <div>
                <span className="text-[10px] bg-amber-500/20 text-amber-300 font-bold px-2.5 py-0.5 rounded border border-amber-500/40">
                  {res.matchScore}% Match
                </span>
                <h4 className="text-lg font-bold text-white mt-1">{res.scheme.title.en}</h4>
                <p className="text-xs text-slate-400">{res.scheme.department}</p>
              </div>

              <button
                onClick={() => onSelectScheme(res.scheme)}
                className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs px-4 py-2 rounded-xl flex items-center gap-1.5 shadow"
              >
                <span>Fix Eligibility & Apply</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Action Gap List */}
            <div className="space-y-3">
              <span className="text-xs font-bold text-slate-300">Actionable Steps to Bridge Gap:</span>
              {res.missingCriteria.map((mc, idx) => (
                <div key={idx} className="bg-slate-950 p-4 rounded-2xl border border-slate-800/80 flex items-start gap-3 text-xs text-slate-200">
                  <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <p className="font-semibold text-amber-300">{mc}</p>
                    <p className="text-slate-400">
                      Recommendation: Visit your local CSC Center or Tehsil office with your Aadhaar card to update record parameters.
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};
