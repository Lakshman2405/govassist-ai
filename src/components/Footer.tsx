import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Phone, ShieldCheck, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800 mt-20 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Col 1: App Info */}
          <div className="space-y-3 md:col-span-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-amber-400 flex items-center justify-center font-black text-slate-950">
                JS
              </div>
              <span className="font-extrabold text-lg text-white">JanSeva AI</span>
              <span className="bg-amber-400/20 text-amber-300 text-[10px] font-bold px-2 py-0.5 rounded-full border border-amber-400/30 uppercase">
                IBM Bob Powered
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-md">
              Democratizing public services and welfare discovery for 1.4 Billion citizens. Built under the SkillUp & IBM SkillsBuild initiative to provide simple language policy explanations and step-by-step guidance in regional languages.
            </p>
          </div>

          {/* Col 2: National Helplines */}
          <div className="space-y-2">
            <h4 className="font-bold text-white uppercase text-[11px] tracking-wider flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-amber-400" /> National Helplines
            </h4>
            <ul className="space-y-1.5 text-slate-300">
              <li><strong className="text-slate-400">PM-KISAN:</strong> 155261 / 011-24300606</li>
              <li><strong className="text-slate-400">Ayushman Bharat:</strong> 14555</li>
              <li><strong className="text-slate-400">PM Mudra Loan:</strong> 1800-180-1111</li>
              <li><strong className="text-slate-400">PMAY Housing:</strong> 1800-11-6446</li>
              <li><strong className="text-slate-400">PM Vishwakarma:</strong> 1800-267-7777</li>
            </ul>
          </div>

          {/* Col 3: Principles */}
          <div className="space-y-2">
            <h4 className="font-bold text-white uppercase text-[11px] tracking-wider flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Core Principles
            </h4>
            <ul className="space-y-1 text-slate-400">
              <li>✓ 100% Free & Open Citizen Service</li>
              <li>✓ Zero Middleman Commission</li>
              <li>✓ 5th-Grade Simple Language</li>
              <li>✓ Screen Reader & Voice Accessible</li>
              <li>✓ Direct Benefit Transfer (DBT) Focus</li>
            </ul>
          </div>

        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-6 border-t border-slate-800/80 text-center space-y-2 text-[11px] text-slate-500">
          <p>{t('disclaimer')}</p>
          <p className="flex items-center justify-center gap-1">
            <span>Crafted with</span> <Heart className="w-3 h-3 text-rose-500 fill-rose-500 inline" /> <span>for Citizen Empowerment | SkillUp in collaboration with IBM SkillsBuild</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
