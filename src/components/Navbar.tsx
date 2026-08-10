import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useAuth } from '../context/AuthContext';
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
  GitCompare,
  ShieldCheck,
  Smartphone,
  Download,
  Lock,
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
  const { user, setIsAuthModalOpen } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);

  useEffect(() => {
    const handleBeforeInstall = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };
    window.addEventListener('beforeinstallprompt', handleBeforeInstall);
    return () => window.removeEventListener('beforeinstallprompt', handleBeforeInstall);
  }, []);

  const handleInstallPwa = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') setDeferredPrompt(null);
    } else {
      alert('To install JanSeva AI on mobile:\n\n1. Tap the 3 dots (⋮) in the top-right corner of Chrome.\n2. Select "Add to Home screen" or "Install app".');
    }
  };

  const handleDownloadApk = () => {
    const apkUrl = '/JanSevaAI.apk';
    window.open(apkUrl, '_blank');
  };

  const navItems = [
    { id: 'discover', label: t('navDiscover'), icon: Search },
    { id: 'checker', label: t('navChecker'), icon: CheckCircle2 },
    { id: 'compare', label: 'Scheme Comparer', icon: GitCompare },
    { id: 'simplifier', label: t('navSimplifier'), icon: FileText },
    { id: 'checklist', label: 'Document Readiness', icon: ShieldCheck },
    { id: 'csc', label: t('navCSC'), icon: MapPin },
    { id: 'bookmarks', label: t('navBookmarks'), icon: Bookmark, badge: savedSchemeIds.length }
  ];

  return (
    <header className="sticky top-0 z-40 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 text-white shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
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
                  Citizen Copilot
                </span>
              </div>
              <p className="text-xs text-slate-400 hidden sm:block">
                National Governance & Citizen Services Platform
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
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-semibold transition-all relative ${
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

          {/* Right Actions: APK Download, Install App, Language, Auth & Chatbot */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Download APK Button */}
            <button
              onClick={handleDownloadApk}
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs px-3 py-2 rounded-xl shadow flex items-center gap-1.5 hover:scale-105 active:scale-95 transition-all"
              title="Download Native Android APK"
            >
              <Download className="w-4 h-4 text-emerald-200" />
              <span className="hidden sm:inline">Download APK</span>
            </button>

            {/* Install App Button */}
            <button
              onClick={handleInstallPwa}
              className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs px-3 py-2 rounded-xl shadow flex items-center gap-1.5 hover:scale-105 active:scale-95 transition-all"
              title="Install Mobile Web App"
            >
              <Smartphone className="w-4 h-4" />
              <span className="hidden sm:inline">Install App</span>
            </button>

            {/* Citizen Auth Button */}
            <button
              onClick={() => setIsAuthModalOpen(true)}
              className={`p-2 sm:px-3 sm:py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 border ${
                user
                  ? 'bg-emerald-950/80 text-emerald-300 border-emerald-500/50'
                  : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700'
              }`}
              title={user ? `Signed in as ${user.name}` : 'Citizen Secure Sign In'}
            >
              {user ? <ShieldCheck className="w-4 h-4 text-emerald-400" /> : <Lock className="w-4 h-4 text-amber-400" />}
              <span className="hidden sm:inline">{user ? user.name.split(' ')[0] : 'Sign In'}</span>
            </button>

            {/* Multilingual Selector */}
            <div className="relative flex items-center bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 rounded-xl px-2 py-1.5 text-xs">
              <Globe className="w-4 h-4 text-indigo-400 mr-1" />
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
              className="bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-300 hover:to-orange-400 text-slate-950 font-bold text-xs px-3.5 py-2.5 rounded-xl shadow-lg shadow-amber-500/20 flex items-center gap-2 hover:scale-105 active:scale-95 transition-all"
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

          <div className="grid grid-cols-2 gap-2 pt-2">
            <button
              onClick={handleDownloadApk}
              className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs py-3 rounded-xl shadow flex items-center justify-center gap-1.5"
            >
              <Download className="w-4 h-4" />
              <span>Download APK</span>
            </button>

            <button
              onClick={handleInstallPwa}
              className="w-full bg-amber-400 text-slate-950 font-extrabold text-xs py-3 rounded-xl shadow flex items-center justify-center gap-1.5"
            >
              <Smartphone className="w-4 h-4" />
              <span>Install App</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
