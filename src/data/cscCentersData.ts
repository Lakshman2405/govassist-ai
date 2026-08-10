import type { CSCCenter, ApplicationStatus } from '../types';

export const CSC_CENTERS: CSCCenter[] = [
  {
    id: 'csc-001',
    name: 'Jan Seva Kendra - District Collectorate',
    district: 'Central District',
    state: 'Delhi',
    pincode: '110001',
    address: 'Room No. 12, Ground Floor, District Collectorate Building, Civil Lines',
    operatorName: 'Ramesh Kumar Verma',
    phone: '+91 98765 43210',
    operatingHours: '09:00 AM - 06:00 PM (Mon-Sat)',
    servicesAvailable: ['Aadhaar e-KYC', 'PM-KISAN Registration', 'Ayushman Bharat Card', 'Income Certificate']
  },
  {
    id: 'csc-002',
    name: 'Maha E-Seva Kendra - Shivajinagar',
    district: 'Pune',
    state: 'Maharashtra',
    pincode: '411005',
    address: 'Shop No. 4, Near Bus Stand, Shivajinagar Main Road',
    operatorName: 'Sunita Patil',
    phone: '+91 98123 87654',
    operatingHours: '08:30 AM - 07:00 PM (Mon-Sat)',
    servicesAvailable: ['PMAY Housing Application', 'Mudra Loan Proposal', 'Digital Seva', 'Ration Card KYC']
  },
  {
    id: 'csc-003',
    name: 'Tamil Nadu Arasu e-Sevai Maiyam',
    district: 'Chennai',
    state: 'Tamil Nadu',
    pincode: '600001',
    address: 'Taluk Office Campus, Broadway Main Road, Parrys',
    operatorName: 'K. Subburaj',
    phone: '+91 94440 12345',
    operatingHours: '09:30 AM - 05:30 PM (Mon-Sat)',
    servicesAvailable: ['Sukanya Samriddhi', 'Patta Chitta Land Records', 'Community Certificate', 'Old Age Pension']
  },
  {
    id: 'csc-004',
    name: 'Meeseva Kendra - Begumpet',
    district: 'Hyderabad',
    state: 'Telangana',
    pincode: '500016',
    address: 'Plot 45, Opp. Police Station, Begumpet Main Road',
    operatorName: 'M. Srinivas Rao',
    phone: '+91 98480 99887',
    operatingHours: '09:00 AM - 06:30 PM (Mon-Sat)',
    servicesAvailable: ['PM Vishwakarma Biometric', 'Farmer Passbook', 'Aadhaar Seedings', 'Scholarship Portal']
  }
];

export const MOCK_APPLICATIONS: Record<string, ApplicationStatus> = {
  'JS-2026-89412': {
    referenceId: 'JS-2026-89412',
    schemeTitle: 'PM-KISAN Samman Nidhi Yojana',
    applicantName: 'Suresh Chandra Sharma',
    submittedDate: '02 Aug 2026',
    currentStatus: 'Under Verification',
    remarks: 'Land revenue documents verified by Patwari. Awaiting Bank Aadhaar seeding check.',
    timeline: [
      { stage: 'Application Submitted at CSC', date: '02 Aug 2026', completed: true },
      { stage: 'Aadhaar Biometric e-KYC', date: '02 Aug 2026', completed: true },
      { stage: 'Land Record Verification (Tehsildar)', date: '05 Aug 2026', completed: true },
      { stage: 'DBT Bank Account Mapping', date: 'In Progress', completed: false },
      { stage: 'Installment Disbursement', date: 'Pending', completed: false }
    ]
  },
  'JS-2026-55109': {
    referenceId: 'JS-2026-55109',
    schemeTitle: 'Ayushman Bharat PM-JAY',
    applicantName: 'Pooja Devi',
    submittedDate: '28 Jul 2026',
    currentStatus: 'Approved',
    remarks: 'Ayushman E-Card generated successfully. Download card or collect from CSC.',
    timeline: [
      { stage: 'SECC Database Match', date: '28 Jul 2026', completed: true },
      { stage: 'Family Member Verification', date: '29 Jul 2026', completed: true },
      { stage: 'Card Generation', date: '30 Jul 2026', completed: true },
      { stage: 'Ready for Hospital Admission', date: '30 Jul 2026', completed: true }
    ]
  }
};
