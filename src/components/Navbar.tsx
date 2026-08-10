import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { LANGUAGES } from '../data/translations';
import { 
  Globe, 
  Bookmark, 
  Bot, 
  CheckCircle2, 
  Search, 
  FileText, 
  MapPin, 
  Sparkles,
  Menu,
  X
} from 'lucide-react';
import type { LanguageCode } from '../types';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenChatbot: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab, onOpenChatbot }) => {
  const { lang, setLang, t, savedSchemeIds } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'discover', label: t('navDiscover'), icon: Search },
    { id: 'checker', label: t('navChecker'), icon: CheckCircle2 },
    { id: 'simplifier', label: t('navSimplifier'), icon: FileText },
    { id: 'csc', label: t('navCSC'), icon: MapPin },
    { id: 'bookmarks', label: t('navBookmarks'), icon: Bookmark, badge: savedSchemeIds.length }
  ];

  return (
    <header className="sticky top-0 z-40 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 text-white shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & IBM Alignment */}
          <div 
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => setActiveTab('discover')}
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-indigo-600 via-blue-500 to-amber-400 p-0.5 shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-amber-400 animate-pulse" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-xl tracking-tight bg-gradient-to-r from-white via-slate-100 to-amber-300 bg-clip-text text-transparent">
                  {t('appTitle')}
                </span>
                <span className="bg-amber-400/20 text-amber-300 text-[10px] font-bold px-2 py-0.5 rounded-full border border-amber-400/30 uppercase tracking-wide">
                  IBM Bob AI
                </span>
              </div>
              <p className="text-xs text-slate-400 hidden sm:block">
                SkillUp x IBM SkillsBuild Governance Assistant
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-950/60 p-1.5 rounded-xl border border-slate-800/80">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold transition-all relative ${
                    isActive
                      ? 'bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-md shadow-indigo-500/25'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-amber-300' : 'text-slate-400'}`} />
                  <span>{item.label}</span>
                  {item.badge !== undefined && item.badge > 0 && (
                    <span className="bg-amber-400 text-slate-950 text-[10px] font-black px-1.5 py-0.2 rounded-full ml-0.5">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Actions: Language Switcher & Chatbot */}
          <div className="flex items-center gap-3">
            {/* Multilingual Selector */}
            <div className="relative flex items-center bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 rounded-xl px-2.5 py-1.5 text-xs">
              <Globe className="w-4 h-4 text-indigo-400 mr-1.5" />
              <select
                value={lang}
                onChange={(e) => setLang(e.target.value as LanguageCode)}
                className="bg-transparent text-white font-medium focus:outline-none cursor-pointer pr-1"
              >
                {LANGUAGES.map((l) => (
                  <option key={l.code} value={l.code} className="bg-slate-900 text-slate-100">
                    {l.flag} {l.nativeName} ({l.name})
                  </option>
                ))}
              </select>
            </div>

            {/* Floating AI Chatbot Button */}
            <button
              onClick={onOpenChatbot}
              className="bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-300 hover:to-orange-400 text-slate-950 font-bold text-xs px-4 py-2.5 rounded-xl shadow-lg shadow-amber-500/20 flex items-center gap-2 hover:scale-105 active:scale-95 transition-all"
            >
              <Bot className="w-4 h-4" />
              <span className="hidden sm:inline">Ask AI JanBot</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-900 border-b border-slate-800 px-4 pt-2 pb-6 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold ${
                  isActive ? 'bg-indigo-600 text-white' : 'text-slate-300 bg-slate-800/50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className="w-5 h-5 text-amber-300" />
                  <span>{item.label}</span>
                </div>
                {item.badge !== undefined && item.badge > 0 && (
                  <span className="bg-amber-400 text-slate-950 text-xs font-bold px-2 py-0.5 rounded-full">
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};
