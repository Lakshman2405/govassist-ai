import React, { useState } from 'react';
import { 
  CheckSquare, 
  Square, 
  Printer, 
  ShieldCheck, 
  HelpCircle
} from 'lucide-react';

export const DocumentChecklist: React.FC = () => {
  const [documents, setDocuments] = useState([
    {
      id: 'doc-1',
      name: 'Aadhaar Card (Mobile Number Seeded)',
      category: 'Identity Proof',
      mandatory: true,
      ready: true,
      howToGet: 'Visit nearest Aadhaar Seva Kendra or UIDAI portal (uidai.gov.in) to update biometrics or link mobile number.'
    },
    {
      id: 'doc-2',
      name: 'Active Bank Passbook (Aadhaar Seeded for DBT)',
      category: 'Financial',
      mandatory: true,
      ready: true,
      howToGet: 'Visit your home bank branch and request DBT (Direct Benefit Transfer) NPCI mapping form.'
    },
    {
      id: 'doc-3',
      name: 'Ration Card / BPL Card / SECC Household List',
      category: 'Socio-Economic',
      mandatory: true,
      ready: false,
      howToGet: 'Apply via State Food & Civil Supplies portal or local Tehsil / Food Supply Inspector office.'
    },
    {
      id: 'doc-4',
      name: 'Annual Family Income Certificate (< 1 Year Old)',
      category: 'Income Proof',
      mandatory: true,
      ready: false,
      howToGet: 'Obtain from Revenue Department / Tehsildar via CSC portal with self-declaration form.'
    },
    {
      id: 'doc-5',
      name: 'Landholding Ownership Record (Khasra/Khatauni/Patta)',
      category: 'Property / Land',
      mandatory: false,
      ready: true,
      howToGet: 'Download digitized land record (Bhulekh) from State Land Revenue online portal.'
    },
    {
      id: 'doc-6',
      name: 'Disability Certificate (UDID Card)',
      category: 'Medical / Disability',
      mandatory: false,
      ready: false,
      howToGet: 'Register on Unique Disability ID portal (swavlambancard.gov.in) or District Hospital.'
    }
  ]);

  const toggleDocReady = (id: string) => {
    setDocuments(prev => prev.map(d => d.id === id ? { ...d, ready: !d.ready } : d));
  };

  const mandatoryReadyCount = documents.filter(d => d.mandatory && d.ready).length;
  const mandatoryTotal = documents.filter(d => d.mandatory).length;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-8">
      
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto space-y-2">
        <div className="inline-flex items-center gap-2 bg-emerald-950 border border-emerald-500/40 text-emerald-300 text-xs px-3 py-1 rounded-full font-bold">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>Citizen Document Readiness Hub</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-white">Document Checklist & Readiness Gap</h2>
        <p className="text-slate-300 text-sm">
          Keep your essential documents ready for instant scheme approval without rejection.
        </p>
      </div>

      {/* Progress & Summary Bar */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 flex flex-wrap items-center justify-between gap-4 shadow-xl">
        <div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Mandatory Document Readiness</span>
          <p className="text-2xl font-black text-white mt-1">
            {mandatoryReadyCount} of {mandatoryTotal} Mandatory Documents Ready
          </p>
          <div className="w-full bg-slate-950 h-2.5 rounded-full overflow-hidden mt-3 max-w-md border border-slate-800">
            <div 
              className="bg-gradient-to-r from-amber-400 to-emerald-400 h-full transition-all duration-300"
              style={{ width: `${(mandatoryReadyCount / mandatoryTotal) * 100}%` }}
            />
          </div>
        </div>

        <button
          onClick={handlePrint}
          className="bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs px-5 py-3 rounded-xl border border-slate-700 flex items-center gap-2"
        >
          <Printer className="w-4 h-4" /> Print Document Checklist
        </button>
      </div>

      {/* Documents List */}
      <div className="space-y-4">
        {documents.map((doc) => (
          <div
            key={doc.id}
            onClick={() => toggleDocReady(doc.id)}
            className={`p-5 rounded-2xl border transition cursor-pointer flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-md ${
              doc.ready
                ? 'bg-slate-900/90 border-emerald-500/50 text-slate-200'
                : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700'
            }`}
          >
            <div className="flex items-start gap-4">
              <div className="mt-0.5">
                {doc.ready ? (
                  <CheckSquare className="w-6 h-6 text-emerald-400 shrink-0" />
                ) : (
                  <Square className="w-6 h-6 text-slate-600 shrink-0" />
                )}
              </div>

              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h4 className={`text-base font-bold ${doc.ready ? 'text-white' : 'text-slate-300'}`}>
                    {doc.name}
                  </h4>
                  <span className="text-[10px] bg-slate-800 text-slate-400 px-2 py-0.5 rounded font-semibold">
                    {doc.category}
                  </span>
                  {doc.mandatory && (
                    <span className="text-[10px] bg-rose-500/20 text-rose-300 px-2 py-0.5 rounded font-bold border border-rose-500/30">
                      Mandatory
                    </span>
                  )}
                </div>

                <p className="text-xs text-slate-400 flex items-center gap-1">
                  <HelpCircle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>{doc.howToGet}</span>
                </p>
              </div>
            </div>

            <div className="shrink-0 self-end sm:self-center">
              <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                doc.ready
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                  : 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
              }`}>
                {doc.ready ? 'Ready ✓' : 'Action Needed'}
              </span>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
