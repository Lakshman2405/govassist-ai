import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { AIAssistantService } from '../services/aiAssistantService';
import { 
  FileText, 
  Sparkles, 
  Copy, 
  Check, 
  Volume2, 
  CheckCircle2 
} from 'lucide-react';

export const PolicySimplifier: React.FC = () => {
  const { t, lang, speakText } = useLanguage();
  const [inputText, setInputText] = useState<string>(
    'Notification No. 1-1/2019-Credit-I: Under the Pradhan Mantri Kisan Samman Nidhi (PM-KISAN), an amount of ₹6000/- per year is provided to all landholding farmer families across the country, subject to certain exclusion criteria relating to higher income status (e.g. Constitutional post holders, serving/retired officers, doctors, engineers, income tax payees in last assessment year).'
  );

  const [copied, setCopied] = useState(false);
  const simplifiedResult = AIAssistantService.simplifyGazetteText(inputText);

  const sampleTexts = [
    {
      title: 'PM-KISAN Gazette Excerpt',
      text: 'Notification No. 1-1/2019-Credit-I: Under PM-KISAN, ₹6000/year is provided in 3 installments to landholding farmer families subject to tax payee exclusions.'
    },
    {
      title: 'Ayushman Bharat AB-PMJAY Gazette',
      text: 'G.S.R. 402(E): Health cover of ₹5,00,000 per family per year is mandated for secondary and tertiary care hospitalization across public and empaneled private hospitals.'
    },
    {
      title: 'Sukanya Samriddhi Rules',
      text: 'G.S.R. 914(E): An account may be opened by guardians for a girl child under 10 years with notified quarterly compounding interest of 8.2% p.a.'
    }
  ];

  const handleCopy = () => {
    navigator.clipboard.writeText(simplifiedResult.simplifiedText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-8">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-2">
        <div className="inline-flex items-center gap-2 bg-amber-400/20 border border-amber-400/30 text-amber-300 text-xs px-3 py-1 rounded-full font-bold">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>AI Policy Gazette Jargon Simplifier</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-white">{t('simplifierTitle')}</h2>
        <p className="text-slate-300 text-sm">{t('simplifierSubtitle')}</p>
      </div>

      {/* Preset Samples Bar */}
      <div className="flex flex-wrap items-center justify-center gap-2 text-xs">
        <span className="text-slate-400 font-semibold">Try sample gazette text:</span>
        {sampleTexts.map((sample, idx) => (
          <button
            key={idx}
            onClick={() => setInputText(sample.text)}
            className="bg-slate-800 hover:bg-indigo-900/60 text-slate-300 hover:text-amber-300 px-3 py-1.5 rounded-xl border border-slate-700 transition"
          >
            {sample.title}
          </button>
        ))}
      </div>

      {/* Side-by-Side Dual View */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Left: Input Official Gazette Text */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-4 shadow-xl">
          <div className="flex items-center justify-between">
            <span className="text-xs font-extrabold text-slate-400 uppercase tracking-wider flex items-center gap-2">
              <FileText className="w-4 h-4 text-slate-500" /> Official Gazette Text (Complex)
            </span>
            <span className="text-[10px] bg-slate-800 text-slate-400 px-2 py-0.5 rounded font-mono">
              Legal Jargon
            </span>
          </div>

          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            rows={8}
            placeholder="Paste official notification text here..."
            className="w-full bg-slate-950 border border-slate-800 rounded-2xl p-4 text-slate-200 text-sm font-mono focus:border-indigo-500 focus:outline-none resize-none leading-relaxed"
          />

          <p className="text-xs text-slate-500">
            Paste any complex government resolution, circular, or gazette paragraph to convert it instantly.
          </p>
        </div>

        {/* Right: AI Simplified Explanation Output */}
        <div className="bg-gradient-to-br from-indigo-950/90 to-slate-900 border border-indigo-500/40 rounded-3xl p-6 space-y-4 shadow-2xl relative overflow-hidden">
          <div className="flex items-center justify-between">
            <span className="text-xs font-extrabold text-amber-300 uppercase tracking-wider flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400" /> Simplified 5th-Grade Explanation
            </span>

            <div className="flex items-center gap-2">
              <button
                onClick={() => speakText(simplifiedResult.simplifiedText, lang)}
                className="p-2 rounded-xl bg-slate-800 hover:bg-indigo-600 text-amber-400 hover:text-white transition"
                title="Listen to simplified audio readout"
              >
                <Volume2 className="w-4 h-4" />
              </button>

              <button
                onClick={handleCopy}
                className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition"
                title="Copy simplified text"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Reading Level Badge */}
          <div className="inline-block bg-emerald-500/20 text-emerald-300 text-[10px] font-bold px-2.5 py-0.5 rounded-full border border-emerald-500/30">
            Reading Level: {simplifiedResult.readingLevel}
          </div>

          {/* Simplified Text Paragraph */}
          <div className="bg-slate-950/80 p-4 rounded-2xl border border-slate-800/80 text-sm text-slate-200 leading-relaxed font-sans">
            {simplifiedResult.simplifiedText}
          </div>

          {/* Simplified Key Bullet Points */}
          <div className="space-y-2">
            <span className="text-xs font-bold text-slate-300">Key Takeaways in Plain Language:</span>
            <div className="space-y-2">
              {simplifiedResult.bulletPoints.map((bullet, idx) => (
                <div key={idx} className="flex items-start gap-2.5 bg-slate-900/90 p-3 rounded-xl border border-slate-800 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{bullet}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
