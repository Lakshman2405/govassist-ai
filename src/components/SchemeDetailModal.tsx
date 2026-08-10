import React, { useState } from 'react';
import type { Scheme } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { 
  X, 
  Volume2, 
  Bookmark, 
  ExternalLink, 
  Phone, 
  CheckSquare, 
  Square, 
  FileText, 
  Sparkles, 
  Printer, 
  Share2, 
  Building2
} from 'lucide-react';

interface SchemeDetailModalProps {
  scheme: Scheme | null;
  onClose: () => void;
}

export const SchemeDetailModal: React.FC<SchemeDetailModalProps> = ({ scheme, onClose }) => {
  const { lang, t, speakText, isBookmarked, toggleBookmark } = useLanguage();
  const [activeTab, setActiveTab] = useState<'simplified' | 'official'>('simplified');
  const [checkedDocs, setCheckedDocs] = useState<Record<string, boolean>>({});

  if (!scheme) return null;

  const titleText = scheme.title[lang] || scheme.title.en;
  const descText = scheme.shortDescription[lang] || scheme.shortDescription.en;
  const simplified = scheme.simplifiedExplanation[lang] || scheme.simplifiedExplanation.en;
  const bookmarked = isBookmarked(scheme.id);

  const toggleDoc = (docName: string) => {
    setCheckedDocs(prev => ({ ...prev, [docName]: !prev[docName] }));
  };

  const handlePrint = () => {
    window.print();
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: titleText,
        text: `${titleText} - ${descText}`,
        url: window.location.href
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(`${titleText}: ${scheme.officialPortalUrl}`);
      alert('Scheme details link copied to clipboard!');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6">
      <div className="bg-slate-900 border border-slate-800 w-full max-w-4xl rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] my-auto animate-in fade-in zoom-in duration-200">
        
        {/* Header Bar */}
        <div className="bg-slate-950 p-6 border-b border-slate-800 flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-indigo-900/60 text-indigo-300 text-xs font-bold px-3 py-1 rounded-lg border border-indigo-700/50">
                {scheme.category}
              </span>
              <span className="text-xs text-slate-400">
                {scheme.department}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight">
              {titleText}
            </h2>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => speakText(`${titleText}. ${simplified.whatIsIt}. ${simplified.whoGetsIt}`, lang)}
              className="p-2.5 rounded-xl bg-slate-800 hover:bg-indigo-600 text-amber-400 hover:text-white transition"
              title="Listen to Scheme Audio Summary"
            >
              <Volume2 className="w-5 h-5" />
            </button>

            <button
              onClick={() => toggleBookmark(scheme.id)}
              className={`p-2.5 rounded-xl transition ${
                bookmarked ? 'bg-amber-400 text-slate-950 font-bold' : 'bg-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              <Bookmark className={`w-5 h-5 ${bookmarked ? 'fill-slate-950' : ''}`} />
            </button>

            <button
              onClick={onClose}
              className="p-2.5 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-rose-600 transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Dual Mode Switcher (5th-Grade Simplified vs Official Gazette) */}
        <div className="bg-slate-950/60 px-6 py-3 border-b border-slate-800 flex items-center justify-between">
          <div className="flex bg-slate-900 p-1 rounded-xl border border-slate-800">
            <button
              onClick={() => setActiveTab('simplified')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition flex items-center gap-2 ${
                activeTab === 'simplified' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>{t('simplifiedTab')}</span>
            </button>
            <button
              onClick={() => setActiveTab('official')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition flex items-center gap-2 ${
                activeTab === 'official' ? 'bg-slate-800 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              <FileText className="w-3.5 h-3.5 text-slate-400" />
              <span>{t('officialTab')}</span>
            </button>
          </div>

          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={handleShare}
              className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white text-xs font-semibold flex items-center gap-1.5"
            >
              <Share2 className="w-4 h-4" /> Share
            </button>
            <button
              onClick={handlePrint}
              className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white text-xs font-semibold flex items-center gap-1.5"
            >
              <Printer className="w-4 h-4" /> Print Guide
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          
          {/* Main Financial Benefit Banner */}
          <div className="bg-gradient-to-r from-indigo-950/80 via-slate-900 to-slate-900 border border-indigo-500/30 rounded-2xl p-5 flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider">Total Financial Benefit</span>
              <p className="text-2xl sm:text-3xl font-black text-amber-300">{scheme.maxBenefit}</p>
              <p className="text-xs text-slate-400 mt-0.5">Transferred via {scheme.benefitType}</p>
            </div>
            <div className="flex items-center gap-4 text-xs text-slate-300 bg-slate-950/80 px-4 py-3 rounded-xl border border-slate-800">
              <div>
                <span className="text-slate-500 block">Processing Time</span>
                <span className="font-bold text-white">{scheme.processingTimeDays} Days</span>
              </div>
              <div className="h-6 w-px bg-slate-800" />
              <div>
                <span className="text-slate-500 block">Helpline</span>
                <a href={`tel:${scheme.helplineNumber}`} className="font-bold text-amber-400 hover:underline flex items-center gap-1">
                  <Phone className="w-3 h-3" /> {scheme.helplineNumber}
                </a>
              </div>
            </div>
          </div>

          {activeTab === 'simplified' ? (
            /* SIMPLIFIED VIEW */
            <div className="space-y-6">
              
              {/* What is it & Who gets it */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-950/60 border border-slate-800 rounded-2xl p-5">
                  <h4 className="text-sm font-bold text-amber-300 mb-2 flex items-center gap-2">
                    <Sparkles className="w-4 h-4" /> What is this scheme?
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {simplified.whatIsIt}
                  </p>
                </div>

                <div className="bg-slate-950/60 border border-slate-800 rounded-2xl p-5">
                  <h4 className="text-sm font-bold text-emerald-400 mb-2 flex items-center gap-2">
                    <CheckSquare className="w-4 h-4" /> Who gets this benefit?
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {simplified.whoGetsIt}
                  </p>
                </div>
              </div>

              {/* Key Benefits List */}
              <div className="bg-slate-950/60 border border-slate-800 rounded-2xl p-5">
                <h4 className="text-sm font-bold text-white mb-3">Key Benefits You Get:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {simplified.keyBenefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300 bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                      <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold shrink-0 text-xs">
                        ✓
                      </span>
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Step-by-Step Application Guide */}
              <div className="bg-slate-950/60 border border-slate-800 rounded-2xl p-5">
                <h4 className="text-sm font-bold text-white mb-3">Step-by-Step Application Roadmap:</h4>
                <div className="space-y-3">
                  {simplified.howToApply.map((step, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-slate-900 p-3.5 rounded-xl border border-slate-800">
                      <span className="w-7 h-7 rounded-xl bg-indigo-600 text-white font-black flex items-center justify-center text-xs shrink-0">
                        {idx + 1}
                      </span>
                      <span className="text-xs sm:text-sm text-slate-200">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Required Documents Checklist */}
              <div className="bg-slate-950/60 border border-slate-800 rounded-2xl p-5">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-sm font-bold text-white">Required Document Checklist:</h4>
                  <span className="text-xs text-amber-400 font-semibold">
                    {Object.values(checkedDocs).filter(Boolean).length} / {scheme.requiredDocuments.length} Ready
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {scheme.requiredDocuments.map((doc, idx) => {
                    const isChecked = !!checkedDocs[doc];
                    return (
                      <div
                        key={idx}
                        onClick={() => toggleDoc(doc)}
                        className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition ${
                          isChecked
                            ? 'bg-emerald-950/40 border-emerald-500/50 text-emerald-200'
                            : 'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800'
                        }`}
                      >
                        {isChecked ? (
                          <CheckSquare className="w-5 h-5 text-emerald-400 shrink-0" />
                        ) : (
                          <Square className="w-5 h-5 text-slate-500 shrink-0" />
                        )}
                        <span className="text-xs sm:text-sm">{doc}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>
          ) : (
            /* OFFICIAL GAZETTE VIEW */
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider">
                <FileText className="w-4 h-4 text-amber-400" />
                <span>Official Legal Notification Excerpt</span>
              </div>
              <blockquote className="text-sm text-slate-300 italic bg-slate-900 p-4 rounded-xl border-l-4 border-amber-400 font-mono leading-relaxed">
                "{scheme.officialGazetteExcerpt}"
              </blockquote>
              <p className="text-xs text-slate-400">
                Official Ministry Reference Code: <code className="bg-slate-900 px-2 py-1 rounded text-amber-300">{scheme.id.toUpperCase()}-GOV-2026</code>
              </p>
            </div>
          )}

        </div>

        {/* Footer Actions Bar */}
        <div className="bg-slate-950 p-4 sm:p-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <Building2 className="w-4 h-4 text-slate-500" />
            <span>Ministry: {scheme.ministry}</span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={scheme.officialPortalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-extrabold text-xs px-6 py-3 rounded-xl shadow-lg shadow-emerald-500/20 flex items-center gap-2 transition"
            >
              <span>Apply on Official Portal</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
