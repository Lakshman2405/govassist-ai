export type LanguageCode = 'en' | 'hi' | 'ta' | 'te' | 'mr' | 'bn' | 'gu' | 'kn';

export interface LanguageOption {
  code: LanguageCode;
  name: string;
  nativeName: string;
  flag: string;
}

export type CategoryType = 
  | 'All'
  | 'Agriculture'
  | 'Healthcare'
  | 'Education'
  | 'Women & Child'
  | 'Housing'
  | 'Pensions & Senior'
  | 'MSME & Business'
  | 'Employment & Skills';

export interface Scheme {
  id: string;
  title: Record<LanguageCode, string>;
  shortDescription: Record<LanguageCode, string>;
  category: CategoryType;
  department: string;
  ministry: string;
  targetGroup: string[];
  maxBenefit: string;
  benefitType: 'Direct Transfer' | 'Subsidized Credit' | 'Insurance' | 'Skill Training' | 'Housing Grant';
  minAge?: number;
  maxAge?: number;
  genderEligibility: 'All' | 'Female' | 'Male' | 'Transgender';
  maxIncomeLimit?: number; // in INR / per year
  allowedStates: string[]; // ['All'] or specific states
  landHoldingMaxAcres?: number;
  occupationFilter?: string[];
  
  // Content details
  simplifiedExplanation: Record<LanguageCode, {
    whatIsIt: string;
    whoGetsIt: string;
    keyBenefits: string[];
    howToApply: string[];
  }>;
  officialGazetteExcerpt: string;
  requiredDocuments: string[];
  officialPortalUrl: string;
  helplineNumber: string;
  processingTimeDays: number;
  isPopular?: boolean;
}

export interface UserProfile {
  age: number;
  gender: 'All' | 'Female' | 'Male' | 'Transgender';
  state: string;
  areaType: 'Rural' | 'Urban';
  category: 'General' | 'OBC' | 'SC' | 'ST' | 'EWS';
  annualIncome: number; // in INR
  occupation: string; // e.g. Farmer, Student, Small Business, Unemployed, Salaried, Artisan
  landholdingAcres: number;
  isDifferentlyAbled: boolean;
  hasMinorChildren: boolean;
  hasSeniorCitizens: boolean;
  isBPL: boolean;
}

export interface SchemeMatchResult {
  scheme: Scheme;
  matchScore: number; // 0 - 100%
  eligibilityStatus: 'Eligible' | 'Likely Eligible' | 'Ineligible';
  matchedCriteria: string[];
  missingCriteria: string[];
  calculatedBenefitValue: number; // Estimated yearly value in ₹
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: string;
  suggestedAction?: {
    type: 'open_scheme' | 'open_checker' | 'open_simplifier';
    schemeId?: string;
  };
  audioUrl?: string;
  isVoiceInput?: boolean;
}

export interface CSCCenter {
  id: string;
  name: string;
  district: string;
  state: string;
  pincode: string;
  address: string;
  operatorName: string;
  phone: string;
  operatingHours: string;
  servicesAvailable: string[];
}

export interface ApplicationStatus {
  referenceId: string;
  schemeTitle: string;
  applicantName: string;
  submittedDate: string;
  currentStatus: 'Under Verification' | 'Approved' | 'Disbursed' | 'Action Required';
  remarks: string;
  timeline: {
    stage: string;
    date: string;
    completed: boolean;
  }[];
}
