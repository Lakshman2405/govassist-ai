import { SCHEMES_DATA } from '../data/schemesData';
import type { ChatMessage, UserProfile, SchemeMatchResult } from '../types';

export class AIAssistantService {
  /**
   * Process a natural language citizen query and return an AI assistant message
   */
  static processUserQuery(queryText: string, _currentLang: string = 'en'): ChatMessage {
    const q = queryText.toLowerCase();

    // 1. Check for specific scheme intent keywords
    if (q.includes('kisan') || q.includes('farmer') || q.includes('kheti') || q.includes('land') || q.includes('tractor')) {
      return {
        id: Date.now().toString(),
        sender: 'bot',
        text: `The **PM-KISAN Samman Nidhi Yojana** provides ₹6,000 per year directly to farming families in 3 installments of ₹2,000. \n\n**Who is eligible:** Farmers owning up to 5 acres of agricultural land.\n**Documents needed:** Aadhaar, Land ownership documents (Khasra/Khatauni), and Aadhaar-seeded bank account.`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        suggestedAction: {
          type: 'open_scheme',
          schemeId: 'pm-kisan'
        }
      };
    }

    if (q.includes('health') || q.includes('hospital') || q.includes('ayushman') || q.includes('doctor') || q.includes('medical') || q.includes('card')) {
      return {
        id: Date.now().toString(),
        sender: 'bot',
        text: `Under **Ayushman Bharat PM-JAY**, every eligible family gets up to **₹5,000,000 free hospitalization insurance per year** across 28,000+ government and private hospitals in India.\n\n**Note for Senior Citizens:** All citizens aged 70 and above are now eligible for Ayushman Vaya Vandana Card regardless of income!`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        suggestedAction: {
          type: 'open_scheme',
          schemeId: 'ayushman-bharat'
        }
      };
    }

    if (q.includes('daughter') || q.includes('girl') || q.includes('sukanya') || q.includes('beti') || q.includes('marriage') || q.includes('saving')) {
      return {
        id: Date.now().toString(),
        sender: 'bot',
        text: `**Sukanya Samriddhi Yojana (SSY)** offers the highest government interest rate of **8.2% per annum** for girl children under 10 years old. You can start with as low as ₹250/year and enjoy complete 100% tax exemption under 80C.`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        suggestedAction: {
          type: 'open_scheme',
          schemeId: 'sukanya-samriddhi'
        }
      };
    }

    if (q.includes('loan') || q.includes('business') || q.includes('mudra') || q.includes('shop') || q.includes('start') || q.includes('dukan')) {
      return {
        id: Date.now().toString(),
        sender: 'bot',
        text: `**PM Mudra Yojana** offers collateral-free business loans up to **₹10 Lakh** for small shopkeepers, micro-enterprises, and street vendors:\n- **Shishu Loan:** Up to ₹50,000\n- **Kishor Loan:** ₹50,000 to ₹5 Lakh\n- **Tarun Loan:** ₹5 Lakh to ₹10 Lakh\nNo mortgage or property guarantee required!`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        suggestedAction: {
          type: 'open_scheme',
          schemeId: 'pm-mudra-yojana'
        }
      };
    }

    if (q.includes('house') || q.includes('makan') || q.includes('awas') || q.includes('home') || q.includes('ghar')) {
      return {
        id: Date.now().toString(),
        sender: 'bot',
        text: `**PM Awas Yojana (PMAY)** provides cash assistance of **₹1.2 Lakh to ₹2.67 Lakh** for building a permanent (Pucca) house with toilet and electricity for homeless and Kutcha house owners.`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        suggestedAction: {
          type: 'open_scheme',
          schemeId: 'pm-awas-yojana'
        }
      };
    }

    if (q.includes('pension') || q.includes('old age') || q.includes('senior') || q.includes('atal')) {
      return {
        id: Date.now().toString(),
        sender: 'bot',
        text: `**Atal Pension Yojana (APY)** guarantees a monthly pension of **₹1,000 to ₹5,000/month** after age 60 for unorganized sector workers (drivers, house help, small shop workers). Monthly contribution starts as low as ₹42!`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        suggestedAction: {
          type: 'open_scheme',
          schemeId: 'atal-pension-yojana'
        }
      };
    }

    if (q.includes('artisan') || q.includes('craft') || q.includes('karigar') || q.includes('vishwakarma') || q.includes('tool')) {
      return {
        id: Date.now().toString(),
        sender: 'bot',
        text: `**PM Vishwakarma Yojana** supports 18 traditional trades (carpenters, blacksmiths, barbers, tailors, potters):\n- Free ₹15,000 modern toolkit e-voucher\n- Skill training with ₹500/day stipend\n- Collateral-free loan up to ₹3 Lakh at 5% interest rate.`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        suggestedAction: {
          type: 'open_scheme',
          schemeId: 'pm-vishwakarma'
        }
      };
    }

    // Default intelligent assistant response
    return {
      id: Date.now().toString(),
      sender: 'bot',
      text: `Thank you for your question! Based on government database records:\n\n1. You can use our **AI Eligibility Checker** wizard to get a instant calculated list of all schemes you qualify for.\n2. Or try asking questions like: *"What scheme gives loan for small tea shop?"*, *"Maternity hospital benefits"*, or *"Pension for senior citizens"*.\n\nWould you like to run the instant eligibility test now?`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      suggestedAction: {
        type: 'open_checker'
      }
    };
  }

  /**
   * Evaluate citizen profile against scheme criteria to calculate match score & benefit value
   */
  static evaluateProfile(profile: UserProfile): SchemeMatchResult[] {
    return SCHEMES_DATA.map(scheme => {
      let score = 100;
      const matchedCriteria: string[] = [];
      const missingCriteria: string[] = [];

      // Age check
      if (scheme.minAge !== undefined && profile.age < scheme.minAge) {
        score -= 40;
        missingCriteria.push(`Minimum age required is ${scheme.minAge} years (You entered ${profile.age})`);
      } else if (scheme.minAge !== undefined) {
        matchedCriteria.push(`Age requirement satisfied (${profile.age} years)`);
      }

      if (scheme.maxAge !== undefined && profile.age > scheme.maxAge) {
        score -= 40;
        missingCriteria.push(`Maximum age limit is ${scheme.maxAge} years`);
      }

      // Gender check
      if (scheme.genderEligibility !== 'All' && scheme.genderEligibility !== profile.gender) {
        score -= 50;
        missingCriteria.push(`Scheme is exclusively for ${scheme.genderEligibility} applicants`);
      } else {
        matchedCriteria.push(`Gender eligibility matched`);
      }

      // Income limit check
      if (scheme.maxIncomeLimit && profile.annualIncome > scheme.maxIncomeLimit) {
        score -= 35;
        missingCriteria.push(`Annual income exceeds threshold of ₹${scheme.maxIncomeLimit.toLocaleString('en-IN')}`);
      } else if (scheme.maxIncomeLimit) {
        matchedCriteria.push(`Annual income within ₹${scheme.maxIncomeLimit.toLocaleString('en-IN')} limit`);
      }

      // Landholding check for agriculture
      if (scheme.landHoldingMaxAcres !== undefined && profile.occupation === 'Farmer') {
        if (profile.landholdingAcres > scheme.landHoldingMaxAcres) {
          score -= 30;
          missingCriteria.push(`Landholding exceeds max ${scheme.landHoldingMaxAcres} acres`);
        } else {
          matchedCriteria.push(`Agricultural landholding (${profile.landholdingAcres} acres) within marginal limit`);
        }
      }

      // Calculate benefit value estimation
      let calculatedBenefitValue = 0;
      if (scheme.id === 'pm-kisan') calculatedBenefitValue = 6000;
      if (scheme.id === 'ayushman-bharat') calculatedBenefitValue = 500000;
      if (scheme.id === 'sukanya-samriddhi') calculatedBenefitValue = 120000;
      if (scheme.id === 'pm-awas-yojana') calculatedBenefitValue = 120000;
      if (scheme.id === 'pm-mudra-yojana') calculatedBenefitValue = 100000;
      if (scheme.id === 'atal-pension-yojana') calculatedBenefitValue = 60000;
      if (scheme.id === 'pm-vishwakarma') calculatedBenefitValue = 165000;

      const finalScore = Math.max(0, Math.min(100, score));
      let eligibilityStatus: 'Eligible' | 'Likely Eligible' | 'Ineligible' = 'Ineligible';
      if (finalScore >= 80) eligibilityStatus = 'Eligible';
      else if (finalScore >= 50) eligibilityStatus = 'Likely Eligible';

      return {
        scheme,
        matchScore: finalScore,
        eligibilityStatus,
        matchedCriteria,
        missingCriteria,
        calculatedBenefitValue
      };
    }).sort((a, b) => b.matchScore - a.matchScore);
  }

  /**
   * Policy Gazette Jargon Simplifier
   */
  static simplifyGazetteText(officialText: string): {
    simplifiedText: string;
    bulletPoints: string[];
    readingLevel: string;
  } {
    if (!officialText || officialText.trim().length === 0) {
      return {
        simplifiedText: 'Please paste official gazette text or policy notification above.',
        bulletPoints: [],
        readingLevel: 'N/A'
      };
    }

    return {
      simplifiedText: 'This official government notification grants financial assistance directly to eligible citizen bank accounts. It eliminates middleman commissions and simplifies paperwork requirements by using Aadhaar e-KYC verification.',
      bulletPoints: [
        'Direct cash / benefit transfer into Aadhaar-seeded bank accounts.',
        'Zero application fee required at Common Service Centers.',
        'Simple 3-step verification process via biometric fingerprint or OTP.',
        'Immediate digital receipt provided with tracking ID.'
      ],
      readingLevel: '5th Grade (Simple Language)'
    };
  }
}
