import React, { useState } from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { AuthProvider } from './context/AuthContext';
import { AccessibilityBar } from './components/AccessibilityBar';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { SchemeCard } from './components/SchemeCard';
import { SchemeDetailModal } from './components/SchemeDetailModal';
import { EligibilityChecker } from './components/EligibilityChecker';
import { SchemeComparer } from './components/SchemeComparer';
import { PolicySimplifier } from './components/PolicySimplifier';
import { DocumentChecklist } from './components/DocumentChecklist';
import { SavedSchemes } from './components/SavedSchemes';
import { CSCLocator } from './components/CSCLocator';
import { AIChatBot } from './components/AIChatBot';
import { AuthModal } from './components/AuthModal';
import { Footer } from './components/Footer';
import { SCHEMES_DATA } from './data/schemesData';
import type { CategoryType, Scheme } from './types';

const MainApp: React.FC = () => {
  const { lang } = useLanguage();
  const [activeTab, setActiveTab] = useState<string>('discover');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('All');
  const [selectedScheme, setSelectedScheme] = useState<Scheme | null>(null);
  const [chatbotOpen, setChatbotOpen] = useState<boolean>(false);

  // Filter schemes
  const filteredSchemes = SCHEMES_DATA.filter((scheme) => {
    const titleText = scheme.title[lang] || scheme.title.en;
    const descText = scheme.shortDescription[lang] || scheme.shortDescription.en;
    const matchesSearch = 
      !searchQuery ||
      titleText.toLowerCase().includes(searchQuery.toLowerCase()) ||
      descText.toLowerCase().includes(searchQuery.toLowerCase()) ||
      scheme.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      scheme.department.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory = selectedCategory === 'All' || scheme.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-amber-400 selection:text-slate-950">
      
      {/* Top Accessibility Bar */}
      <AccessibilityBar />

      {/* Navbar Header */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenChatbot={() => setChatbotOpen(true)}
      />

      {/* Main Content View Switcher */}
      <main className="flex-1">
        {activeTab === 'discover' && (
          <div>
            <HeroSection
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              onOpenChecker={() => setActiveTab('checker')}
            />

            {/* Scheme Discovery Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-black text-white">Government Welfare Schemes</h2>
                  <p className="text-xs text-slate-400">
                    Showing {filteredSchemes.length} verified national & state programs
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActiveTab('compare')}
                    className="hidden sm:inline-flex bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs px-4 py-2.5 rounded-xl border border-slate-700 shadow"
                  >
                    Compare Schemes ⚖️
                  </button>
                  <button
                    onClick={() => setActiveTab('checker')}
                    className="hidden sm:inline-flex bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow"
                  >
                    Run Eligibility Wizard →
                  </button>
                </div>
              </div>

              {filteredSchemes.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredSchemes.map((scheme) => (
                    <SchemeCard
                      key={scheme.id}
                      scheme={scheme}
                      onSelect={setSelectedScheme}
                    />
                  ))}
                </div>
              ) : (
                <div className="bg-slate-900 border border-slate-800 rounded-3xl p-12 text-center space-y-3">
                  <p className="text-slate-400 text-sm">No schemes matched your current search filters.</p>
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedCategory('All');
                    }}
                    className="bg-amber-400 text-slate-950 font-bold text-xs px-4 py-2 rounded-xl"
                  >
                    Reset Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'checker' && (
          <EligibilityChecker onSelectScheme={setSelectedScheme} />
        )}

        {activeTab === 'compare' && (
          <SchemeComparer onSelectScheme={setSelectedScheme} />
        )}

        {activeTab === 'simplifier' && (
          <PolicySimplifier />
        )}

        {activeTab === 'checklist' && (
          <DocumentChecklist />
        )}

        {activeTab === 'csc' && (
          <CSCLocator />
        )}

        {activeTab === 'bookmarks' && (
          <SavedSchemes onSelectScheme={setSelectedScheme} />
        )}
      </main>

      {/* Scheme Detailed Modal View */}
      <SchemeDetailModal
        scheme={selectedScheme}
        onClose={() => setSelectedScheme(null)}
      />

      {/* Floating Interactive AI Assistant */}
      <AIChatBot
        isOpen={chatbotOpen}
        onClose={() => setChatbotOpen(false)}
        onSelectScheme={setSelectedScheme}
        onOpenChecker={() => setActiveTab('checker')}
      />

      {/* Citizen Authentication & Profile Modal */}
      <AuthModal />

      {/* Footer */}
      <Footer />

    </div>
  );
};

export function App() {
  return (
    <AuthProvider>
      <LanguageProvider>
        <MainApp />
      </LanguageProvider>
    </AuthProvider>
  );
}

export default App;
