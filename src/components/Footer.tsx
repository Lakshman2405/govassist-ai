import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Sparkles, Heart, Shield, Lock, FileText, Globe } from 'lucide-react';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 py-12 px-4 sm:px-6 lg:px-8 mt-16">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-amber-400 p-0.5 shadow">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-amber-400" />
                </div>
              </div>
              <span className="font-black text-xl text-white tracking-tight">
                {t('appTitle')}
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-md leading-relaxed">
              Democratizing public services and welfare discovery for 1.4 Billion citizens. Built to provide simple 5th-grade language policy explanations and step-by-step guidance in regional languages.
            </p>
          </div>

          {/* Core Pillars */}
          <div className="space-y-2 text-xs">
            <span className="font-bold text-white uppercase tracking-wider block">Platform Pillars</span>
            <ul className="space-y-1.5 text-slate-400">
              <li className="flex items-center gap-1.5"><Shield className="w-3.5 h-3.5 text-emerald-400" /> 100% Free Public Access</li>
              <li className="flex items-center gap-1.5"><Globe className="w-3.5 h-3.5 text-indigo-400" /> 8 Regional Languages</li>
              <li className="flex items-center gap-1.5"><Lock className="w-3.5 h-3.5 text-amber-400" /> Client Data Encryption</li>
              <li className="flex items-center gap-1.5"><FileText className="w-3.5 h-3.5 text-rose-400" /> Simplified Policy Gazette</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-2 text-xs">
            <span className="font-bold text-white uppercase tracking-wider block">Official Portals</span>
            <ul className="space-y-1.5 text-slate-400">
              <li><a href="https://myscheme.gov.in" target="_blank" rel="noreferrer" className="hover:text-amber-300">myScheme India Portal</a></li>
              <li><a href="https://csc.gov.in" target="_blank" rel="noreferrer" className="hover:text-amber-300">Common Service Centers (CSC)</a></li>
              <li><a href="https://pmkisan.gov.in" target="_blank" rel="noreferrer" className="hover:text-amber-300">PM-KISAN Portal</a></li>
              <li><a href="https://pmjay.gov.in" target="_blank" rel="noreferrer" className="hover:text-amber-300">Ayushman Bharat PM-JAY</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-900 pt-6 flex flex-wrap items-center justify-between gap-4 text-xs">
          <p className="text-slate-500">
            © {new Date().getFullYear()} JanSeva AI. Open-source Citizen Empowerment Platform.
          </p>
          
          <div className="flex items-center gap-1 text-slate-400">
            <span>Crafted with</span> <Heart className="w-3 h-3 text-rose-500 fill-rose-500 inline" /> <span>for Citizen Empowerment & Social Impact</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
