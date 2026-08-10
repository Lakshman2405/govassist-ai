import React, { useState } from 'react';
import type { UserProfile, SchemeMatchResult, Scheme } from '../types';
import { AIAssistantService } from '../services/aiAssistantService';
import { useLanguage } from '../context/LanguageContext';
import { 
  Sparkles, 
  ArrowRight, 
  ArrowLeft, 
  Calculator,
  Award
} from 'lucide-react';
import { SchemeCard } from './SchemeCard';

interface EligibilityCheckerProps {
  onSelectScheme: (scheme: Scheme) => void;
}

export const EligibilityChecker: React.FC<EligibilityCheckerProps> = ({ onSelectScheme }) => {
  const { t } = useLanguage();
  const [step, setStep] = useState<number>(1);
  const [profile, setProfile] = useState<UserProfile>({
    age: 35,
    gender: 'Male',
    state: 'Delhi',
    areaType: 'Rural',
    category: 'General',
    annualIncome: 120000,
    occupation: 'Farmer',
    landholdingAcres: 2.5,
    isDifferentlyAbled: false,
    hasMinorChildren: true,
    hasSeniorCitizens: false,
    isBPL: true
  });

  const [results, setResults] = useState<SchemeMatchResult[] | null>(null);

  const handleCalculate = () => {
    const matchedResults = AIAssistantService.evaluateProfile(profile);
    setResults(matchedResults);
  };

  const statesList = [
    'All', 'Andhra Pradesh', 'Assam', 'Bihar', 'Delhi', 'Gujarat', 'Haryana', 
    'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Punjab', 
    'Rajasthan', 'Tamil Nadu', 'Telangana', 'Uttar Pradesh', 'West Bengal'
  ];

  const totalCalculatedBenefits = results 
    ? results.filter(r => r.matchScore >= 60).reduce((acc, curr) => acc + curr.calculatedBenefitValue, 0)
    : 0;

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-8">
      
      {/* Title Header */}
      <div className="text-center max-w-3xl mx-auto space-y-2">
        <div className="inline-flex items-center gap-2 bg-indigo-900/60 border border-indigo-700/50 text-indigo-300 text-xs px-3 py-1 rounded-full font-bold">
          <Calculator className="w-4 h-4 text-amber-400" />
          <span>Instant AI Governance Calculator</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-white">{t('checkerTitle')}</h2>
        <p className="text-slate-300 text-sm">{t('checkerSubtitle')}</p>
      </div>

      {/* Wizard Progress Steps */}
      <div className="flex items-center justify-center gap-2 sm:gap-4 max-w-2xl mx-auto">
        {[
          { num: 1, title: t('wizardStep1') },
          { num: 2, title: t('wizardStep2') },
          { num: 3, title: t('wizardStep3') }
        ].map((s) => (
          <div key={s.num} className="flex items-center gap-2">
            <button
              onClick={() => setStep(s.num)}
              className={`w-9 h-9 rounded-xl font-black text-xs transition flex items-center justify-center ${
                step === s.num
                  ? 'bg-amber-400 text-slate-950 shadow-lg shadow-amber-500/20'
                  : step > s.num
                  ? 'bg-indigo-600 text-white'
                  : 'bg-slate-800 text-slate-400'
              }`}
            >
              {step > s.num ? '✓' : s.num}
            </button>
            <span className={`text-xs font-bold hidden sm:inline ${step === s.num ? 'text-amber-300' : 'text-slate-400'}`}>
              {s.title}
            </span>
            {s.num < 3 && <div className="w-8 sm:w-12 h-0.5 bg-slate-800" />}
          </div>
        ))}
      </div>

      {/* Form Wizard Card */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
        
        {step === 1 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-in fade-in duration-200">
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase mb-2">
                {t('labelAge')}
              </label>
              <input
                type="number"
                value={profile.age}
                onChange={(e) => setProfile({ ...profile, age: Number(e.target.value) })}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white text-sm focus:border-indigo-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase mb-2">
                {t('labelGender')}
              </label>
              <select
                value={profile.gender}
                onChange={(e) => setProfile({ ...profile, gender: e.target.value as any })}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white text-sm focus:border-indigo-500 focus:outline-none"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Transgender">Transgender</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase mb-2">
                {t('labelState')}
              </label>
              <select
                value={profile.state}
                onChange={(e) => setProfile({ ...profile, state: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white text-sm focus:border-indigo-500 focus:outline-none"
              >
                {statesList.map(st => <option key={st} value={st}>{st}</option>)}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase mb-2">
                {t('labelRuralUrban')}
              </label>
              <select
                value={profile.areaType}
                onChange={(e) => setProfile({ ...profile, areaType: e.target.value as any })}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white text-sm focus:border-indigo-500 focus:outline-none"
              >
                <option value="Rural">Rural Area</option>
                <option value="Urban">Urban City</option>
              </select>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-in fade-in duration-200">
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase mb-2">
                {t('labelCategory')}
              </label>
              <select
                value={profile.category}
                onChange={(e) => setProfile({ ...profile, category: e.target.value as any })}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white text-sm focus:border-indigo-500 focus:outline-none"
              >
                <option value="General">General</option>
                <option value="OBC">OBC (Other Backward Class)</option>
                <option value="SC">SC (Scheduled Caste)</option>
                <option value="ST">ST (Scheduled Tribe)</option>
                <option value="EWS">EWS (Economically Weaker Section)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase mb-2">
                {t('labelIncome')}
              </label>
              <input
                type="number"
                value={profile.annualIncome}
                onChange={(e) => setProfile({ ...profile, annualIncome: Number(e.target.value) })}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white text-sm focus:border-indigo-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase mb-2">
                {t('labelOccupation')}
              </label>
              <select
                value={profile.occupation}
                onChange={(e) => setProfile({ ...profile, occupation: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white text-sm focus:border-indigo-500 focus:outline-none"
              >
                <option value="Farmer">Farmer / Agriculture Worker</option>
                <option value="Small Business">Small Business / Shopkeeper</option>
                <option value="Artisan">Traditional Artisan / Craftsperson</option>
                <option value="Student">Student</option>
                <option value="Unemployed">Unemployed / Daily Wage Worker</option>
                <option value="Salaried">Private / Government Salaried</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase mb-2">
                {t('labelLand')}
              </label>
              <input
                type="number"
                step="0.5"
                value={profile.landholdingAcres}
                onChange={(e) => setProfile({ ...profile, landholdingAcres: Number(e.target.value) })}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white text-sm focus:border-indigo-500 focus:outline-none"
              />
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4 animate-in fade-in duration-200">
            <h4 className="text-sm font-bold text-amber-300">Special Indicators & Household Details:</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { key: 'isBPL', label: 'Below Poverty Line (BPL Card Holder)' },
                { key: 'hasMinorChildren', label: 'Has Minor Children (< 18 Years)' },
                { key: 'hasSeniorCitizens', label: 'Has Senior Citizens (60+ Years)' },
                { key: 'isDifferentlyAbled', label: 'Differently Abled / Persons with Disability' }
              ].map(item => (
                <label
                  key={item.key}
                  className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition ${
                    (profile as any)[item.key]
                      ? 'bg-indigo-950/60 border-indigo-500/60 text-white font-semibold'
                      : 'bg-slate-950 border-slate-800 text-slate-400'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={(profile as any)[item.key]}
                    onChange={(e) => setProfile({ ...profile, [item.key]: e.target.checked })}
                    className="w-5 h-5 accent-indigo-600 rounded"
                  />
                  <span className="text-xs sm:text-sm">{item.label}</span>
                </label>
              ))}
            </div>
          </div>
        )}

        {/* Wizard Controls */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-800">
          {step > 1 ? (
            <button
              onClick={() => setStep(step - 1)}
              className="bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs px-5 py-3 rounded-xl flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" /> Previous
            </button>
          ) : <div />}

          {step < 3 ? (
            <button
              onClick={() => setStep(step + 1)}
              className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs px-6 py-3 rounded-xl flex items-center gap-2 shadow-lg"
            >
              Next Step <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={handleCalculate}
              className="bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-300 hover:to-orange-400 text-slate-950 font-black text-sm px-8 py-3.5 rounded-xl shadow-xl shadow-amber-500/20 flex items-center gap-2 animate-bounce"
            >
              <Sparkles className="w-5 h-5 text-slate-950" />
              <span>{t('wizardCalculate')}</span>
            </button>
          )}
        </div>

      </div>

      {/* Results Matrix */}
      {results && (
        <div className="space-y-6 pt-6 animate-in slide-in-from-bottom duration-300">
          
          {/* Total Welfare Financial Benefit Banner */}
          <div className="bg-gradient-to-r from-emerald-950 via-slate-900 to-slate-900 border border-emerald-500/40 rounded-3xl p-6 flex flex-wrap items-center justify-between gap-4 shadow-xl">
            <div>
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest flex items-center gap-1.5">
                <Award className="w-4 h-4" /> Calculated Total Welfare Benefits
              </span>
              <p className="text-3xl sm:text-4xl font-black text-white mt-1">
                ₹{totalCalculatedBenefits.toLocaleString('en-IN')} <span className="text-sm font-normal text-slate-400">/ estimated value per year</span>
              </p>
            </div>

            <div className="bg-slate-950/80 px-4 py-3 rounded-2xl border border-slate-800 text-xs text-slate-300">
              <span className="text-slate-400 block font-semibold">Matched Schemes:</span>
              <span className="text-base font-black text-amber-300">
                {results.filter(r => r.matchScore >= 60).length} Schemes Eligible
              </span>
            </div>
          </div>

          {/* Matched Scheme Cards */}
          <h3 className="text-xl font-black text-white">Your Tailored Welfare Scheme Matches:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {results.map((res) => (
              <div key={res.scheme.id} className="space-y-2">
                <SchemeCard
                  scheme={res.scheme}
                  onSelect={onSelectScheme}
                  matchScore={res.matchScore}
                />
                
                {/* Criteria Match Details */}
                <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-3 text-xs space-y-1">
                  {res.matchedCriteria.map((mc, i) => (
                    <div key={i} className="text-emerald-400 flex items-center gap-1.5">
                      <span>✓</span> <span>{mc}</span>
                    </div>
                  ))}
                  {res.missingCriteria.map((mc, i) => (
                    <div key={i} className="text-amber-400 flex items-center gap-1.5">
                      <span>⚠️</span> <span>{mc}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      )}

    </div>
  );
};
