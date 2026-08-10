import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { CSC_CENTERS, MOCK_APPLICATIONS } from '../data/cscCentersData';
import type { ApplicationStatus } from '../types';
import { 
  MapPin, 
  Search, 
  Building2, 
  Navigation,
  FileCheck
} from 'lucide-react';

export const CSCLocator: React.FC = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'locator' | 'tracker'>('locator');
  const [searchDistrict, setSearchDistrict] = useState('');
  const [refIdInput, setRefIdInput] = useState('JS-2026-89412');
  const [trackedStatus, setTrackedStatus] = useState<ApplicationStatus | null>(MOCK_APPLICATIONS['JS-2026-89412']);

  const filteredCenters = CSC_CENTERS.filter(center => 
    !searchDistrict || 
    center.district.toLowerCase().includes(searchDistrict.toLowerCase()) ||
    center.state.toLowerCase().includes(searchDistrict.toLowerCase()) ||
    center.pincode.includes(searchDistrict)
  );

  const handleTrack = () => {
    const found = MOCK_APPLICATIONS[refIdInput.trim().toUpperCase()] || MOCK_APPLICATIONS[refIdInput.trim()];
    if (found) {
      setTrackedStatus(found);
    } else {
      setTrackedStatus({
        referenceId: refIdInput,
        schemeTitle: 'Submitted Scheme Application',
        applicantName: 'Citizen Applicant',
        submittedDate: 'Recently Submitted',
        currentStatus: 'Under Verification',
        remarks: 'Application under preliminary verification at Tehsil / Panchayat Office.',
        timeline: [
          { stage: 'Application Submitted at CSC', date: 'Just now', completed: true },
          { stage: 'Aadhaar e-KYC Verification', date: 'In Progress', completed: true },
          { stage: 'District Nodal Officer Approval', date: 'Pending', completed: false },
          { stage: 'Direct Benefit Transfer (DBT)', date: 'Pending', completed: false }
        ]
      });
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-8">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-2">
        <div className="inline-flex items-center gap-2 bg-indigo-950 border border-indigo-500/40 text-indigo-300 text-xs px-3 py-1 rounded-full font-bold">
          <MapPin className="w-4 h-4 text-indigo-400" />
          <span>CSC Kiosk Locator & Status Portal</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-white">{t('cscTitle')}</h2>
        <p className="text-slate-300 text-sm">{t('cscSubtitle')}</p>
      </div>

      {/* Tabs Bar */}
      <div className="flex justify-center">
        <div className="bg-slate-900 p-1.5 rounded-2xl border border-slate-800 flex items-center gap-2">
          <button
            onClick={() => setActiveTab('locator')}
            className={`px-6 py-2.5 rounded-xl text-xs font-bold transition flex items-center gap-2 ${
              activeTab === 'locator'
                ? 'bg-indigo-600 text-white shadow-lg'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Building2 className="w-4 h-4" />
            <span>Find Nearest CSC Center</span>
          </button>

          <button
            onClick={() => setActiveTab('tracker')}
            className={`px-6 py-2.5 rounded-xl text-xs font-bold transition flex items-center gap-2 ${
              activeTab === 'tracker'
                ? 'bg-amber-400 text-slate-950 shadow-lg'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <FileCheck className="w-4 h-4" />
            <span>Track Application Status</span>
          </button>
        </div>
      </div>

      {activeTab === 'locator' ? (
        /* CSC LOCATOR VIEW */
        <div className="space-y-6">
          
          {/* Search Box */}
          <div className="max-w-xl mx-auto relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-3.5" />
            <input
              type="text"
              value={searchDistrict}
              onChange={(e) => setSearchDistrict(e.target.value)}
              placeholder="Search by District, State or Pincode (e.g. Pune, Delhi, 110001)..."
              className="w-full bg-slate-900 border border-slate-800 rounded-2xl pl-12 pr-4 py-3 text-white text-sm focus:border-indigo-500 focus:outline-none shadow-xl"
            />
          </div>

          {/* Grid of CSC Centers */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredCenters.map((center) => (
              <div key={center.id} className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-4 shadow-xl">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="text-[10px] bg-indigo-900/60 text-indigo-300 font-bold px-2.5 py-0.5 rounded border border-indigo-700/50">
                      {center.district}, {center.state} • {center.pincode}
                    </span>
                    <h3 className="text-lg font-bold text-white mt-1">{center.name}</h3>
                  </div>
                  <Navigation className="w-5 h-5 text-amber-400 shrink-0 mt-1" />
                </div>

                <p className="text-xs text-slate-300 flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                  <span>{center.address}</span>
                </p>

                <div className="bg-slate-950 p-3 rounded-xl border border-slate-800/80 text-xs space-y-1.5">
                  <div className="flex items-center justify-between text-slate-300">
                    <span className="text-slate-500">VLE Operator:</span>
                    <span className="font-bold text-white">{center.operatorName}</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-300">
                    <span className="text-slate-500">Phone:</span>
                    <a href={`tel:${center.phone}`} className="font-bold text-amber-400 hover:underline">
                      {center.phone}
                    </a>
                  </div>
                  <div className="flex items-center justify-between text-slate-300">
                    <span className="text-slate-500">Hours:</span>
                    <span className="font-semibold text-emerald-400">{center.operatingHours}</span>
                  </div>
                </div>

                {/* Available Services Pills */}
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase">Available Kiosk Services:</span>
                  <div className="flex flex-wrap gap-1.5 mt-1.5">
                    {center.servicesAvailable.map((srv, idx) => (
                      <span key={idx} className="bg-slate-800 text-slate-300 text-[10px] font-semibold px-2.5 py-1 rounded-lg">
                        ✓ {srv}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      ) : (
        /* APPLICATION TRACKER VIEW */
        <div className="max-w-2xl mx-auto space-y-6">
          
          {/* Tracker Input Box */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-4 shadow-xl">
            <label className="block text-xs font-bold text-slate-300 uppercase">
              Enter Application Reference ID
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={refIdInput}
                onChange={(e) => setRefIdInput(e.target.value)}
                placeholder={t('trackPlaceholder')}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white text-sm font-mono focus:border-amber-400 focus:outline-none"
              />
              <button
                onClick={handleTrack}
                className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs px-6 py-3 rounded-xl shadow-lg shrink-0"
              >
                {t('btnTrack')}
              </button>
            </div>
            <p className="text-xs text-slate-400">
              Try sample Ref IDs: <code className="text-amber-300">JS-2026-89412</code> or <code className="text-amber-300">JS-2026-55109</code>
            </p>
          </div>

          {/* Status Display Card */}
          {trackedStatus && (
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-6 shadow-2xl animate-in fade-in duration-200">
              <div className="flex items-start justify-between gap-4 border-b border-slate-800 pb-4">
                <div>
                  <span className="text-[10px] bg-slate-800 text-slate-400 font-mono px-2 py-0.5 rounded">
                    REF: {trackedStatus.referenceId}
                  </span>
                  <h3 className="text-xl font-black text-white mt-1">{trackedStatus.schemeTitle}</h3>
                  <p className="text-xs text-slate-400">Applicant: {trackedStatus.applicantName} • Submitted: {trackedStatus.submittedDate}</p>
                </div>

                <span className={`text-xs font-black px-3 py-1 rounded-full ${
                  trackedStatus.currentStatus === 'Approved'
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                    : 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                }`}>
                  {trackedStatus.currentStatus}
                </span>
              </div>

              {/* Status Remarks */}
              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 text-xs text-slate-300 leading-relaxed">
                <span className="font-bold text-amber-300 block mb-1">Official Status Remarks:</span>
                {trackedStatus.remarks}
              </div>

              {/* Visual Timeline */}
              <div className="space-y-4">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Application Timeline:</h4>
                <div className="space-y-3">
                  {trackedStatus.timeline.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs shrink-0 ${
                        item.completed ? 'bg-emerald-500 text-slate-950' : 'bg-slate-800 text-slate-500'
                      }`}>
                        {item.completed ? '✓' : idx + 1}
                      </div>
                      <div className="flex-1 flex items-center justify-between text-xs bg-slate-950 p-3 rounded-xl border border-slate-800">
                        <span className={item.completed ? 'text-white font-semibold' : 'text-slate-500'}>
                          {item.stage}
                        </span>
                        <span className="text-[10px] text-slate-400 font-mono">{item.date}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

        </div>
      )}

    </div>
  );
};
