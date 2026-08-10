import type { Scheme } from '../types';

export const SCHEMES_DATA: Scheme[] = [
  {
    id: 'pm-kisan',
    category: 'Agriculture',
    department: 'Department of Agriculture & Farmers Welfare',
    ministry: 'Ministry of Agriculture & Farmers Welfare',
    targetGroup: ['Farmers', 'Small Landholders', 'Rural Households'],
    maxBenefit: '₹6,000 / year',
    benefitType: 'Direct Transfer',
    minAge: 18,
    maxAge: 75,
    genderEligibility: 'All',
    maxIncomeLimit: 500000,
    allowedStates: ['All'],
    landHoldingMaxAcres: 5.0,
    occupationFilter: ['Farmer', 'Agriculture Worker', 'Smallholder'],
    isPopular: true,
    processingTimeDays: 14,
    helplineNumber: '155261 / 011-24300606',
    officialPortalUrl: 'https://pmkisan.gov.in',
    requiredDocuments: [
      'Aadhaar Card (Linked with Mobile)',
      'Landholding Ownership Documents (Khasra/Khatauni)',
      'Bank Account Passbook (Aadhaar Seeded)',
      'Valid Indian Residence Certificate'
    ],
    title: {
      en: 'PM-KISAN Samman Nidhi Yojana',
      hi: 'पीएम-किसान सम्मान निधि योजना',
      ta: 'பிரதான் மந்திரி கிசான் சம்மான் நிதி',
      te: 'పిఎం-కిసాన్ సమ్మాన్ నిధి యోజన',
      mr: 'पीएम-किसान सन्मान निधी योजना',
      bn: 'পিএম-কিষাণ সম্মান নিধি যোজনা',
      gu: 'પીએમ-કિસાન સન્માન નિધિ યોજના',
      kn: 'ಪಿಎಂ-ಕಿಸಾನ್ ಸಮ್ಮಾನ್ ನಿಧಿ ಯೋಜನೆ'
    },
    shortDescription: {
      en: 'Provides direct income support of ₹6,000 per year in 3 equal installments of ₹2,000 directly to small and marginal farmer families.',
      hi: 'छोटे और सीमांत किसान परिवारों को सीधे बैंक खाते में ₹2,000 की 3 समान किस्तों में ₹6,000 प्रति वर्ष की प्रत्यक्ष आय सहायता प्रदान करता है।',
      ta: 'சிறு விவசாய குடும்பங்களுக்கு ஆண்டுக்கு ₹6,000 நேரடியாக வங்கி கணக்கில் வழங்கும் திட்டம்.',
      te: 'చిన్న రైతు కుటుంబాలకు ఏడాదికి ₹6,000 నేరుగా బ్యాంక్ ఖాతాలో జమ చేసే పథకం.',
      mr: 'लहान आणि अल्पभूधारक शेतकरी कुटुंबांना दरवर्षी ₹६,००० थेट बँक खात्यात दिले जातात.',
      bn: 'ক্ষুদ্র কৃষক পরিবারকে বছরে ৬,০০০ টাকা সরাসরি ব্যাঙ্ক অ্যাকাউন্টে প্রদান করা হয়।',
      gu: 'નાના ખેડૂતોને વાર્ષિક ₹6,000 ડાયરેક્ટ બેંક ટ્રાન્સફર દ્વારા પૂરા પાડે છે.',
      kn: 'ಸಣ್ಣ ರೈತರಿಗೆ ವರ್ಷಕ್ಕೆ ₹6,000 ನೇರ ಬ್ಯಾಂಕ್ ಖಾತೆಗೆ ನೀಡುವ ಯೋಜನೆ.'
    },
    simplifiedExplanation: {
      en: {
        whatIsIt: 'PM-KISAN is a central government scheme to help farming families buy seeds, fertilizers, and cover farm expenses.',
        whoGetsIt: 'Any farmer who owns cultivable agricultural land up to 5 acres and does not pay Income Tax.',
        keyBenefits: [
          'Direct cash payment of ₹2,000 every 4 months (Total ₹6,000/year)',
          'Money is transferred directly into your Aadhaar-linked bank account',
          'No middlemen involved — transparent DB-Transfer'
        ],
        howToApply: [
          'Visit your nearest Common Service Center (CSC) or PM-KISAN portal',
          'Provide your Aadhaar number and land document details',
          'Complete e-KYC using OTP or biometric fingerprint scanner',
          'Check your status online using your Aadhaar or Mobile Number'
        ]
      },
      hi: {
        whatIsIt: 'पीएम-किसान एक सरकारी योजना है जो किसानों को खाद, बीज और खेती के खर्चों के लिए सीधे पैसे देती है।',
        whoGetsIt: 'जिन किसानों के नाम पर 5 एकड़ तक कृषि भूमि है और जो आयकरदाता नहीं हैं।',
        keyBenefits: [
          'हर 4 महीने में ₹2,000 की सीधी नकद राशि (कुल ₹6,000/वर्ष)',
          'पैसा सीधे आपके आधार से जुड़े बैंक खाते में आता है',
          'बिना किसी बिचौलिये के पारदर्शी ट्रांसफर'
        ],
        howToApply: [
          'निकटतम सीएससी केंद्र पर जाएं या pmkisan.gov.in पर जाएं',
          'अपना आधार कार्ड और खसरा/खतौनी जमीन के कागजात दें',
          'ओटीपी या बायोमेट्रिक फिंगरप्रिंट से ई-केवाईसी पूरी करें',
          'वेबसाइट पर स्टेटस चेक करें'
        ]
      },
      ta: {
        whatIsIt: 'விவசாயிகளுக்கு விதை, உரம் வாங்க உதவும் மத்திய அரசு திட்டம்.',
        whoGetsIt: '5 ஏக்கர் வரை நிலம் வைத்திருக்கும் அனைத்து விவசாய குடும்பங்களும்.',
        keyBenefits: ['ஆண்டுக்கு 3 தவணைகளில் ₹6,000 நேரடி உதவி', 'வங்கி கணக்கிற்கு நேரடி மாற்றம்'],
        howToApply: ['அருகிலுள்ள CSC மையத்தில் Aadhaar & நில பத்திரத்துடன் விண்ணப்பிக்கவும்']
      },
      te: {
        whatIsIt: 'రైతులకు విత్తనాలు, ఎరువుల కొనుగోలుకు సాయం చేసే కేంద్ర ప్రభుత్వ పథకం.',
        whoGetsIt: '5 ఎకరాల వరకు సొంత సాగుభూమి ఉన్న రైతులు.',
        keyBenefits: ['ఏడాదికి ₹6,000 నగదు బదిలీ (మూడు విడతల్లో ₹2,000 చొప్పున)'],
        howToApply: ['మీ సమీప మీ-సేవ / CSC కేంద్రంలో ఆధార్, పట్టాదారు పాస్‌బుక్‌తో దరఖాస్తు చేసుకోండి']
      },
      mr: {
        whatIsIt: 'शेतकऱ्यांना खते व बियाणे खरेदीसाठी आर्थिक मदत देणारी सरकारी योजना.',
        whoGetsIt: '५ एकरांपर्यंत शेतजमीन असलेले शेतकरी कुटुंब.',
        keyBenefits: ['दरवर्षी ₹६,००० थेट खात्यात जमा'],
        howToApply: ['जवळच्या सीएससी केंद्रात आधार व जमिनीच्या उताऱ्यासह अर्ज करा']
      },
      bn: {
        whatIsIt: 'কৃষকদের সার ও বীজ কেনার জন্য সরকারি সাহায্য।',
        whoGetsIt: '৫ একর পর্যন্ত জমি থাকা কৃষক পরিবার।',
        keyBenefits: ['বছরে ৩টি কিস্তিতে মোট ৬,০০০ টাকা সিধা ব্যাংকে'],
        howToApply: ['নিকটস্থ তথ্যমিত্র কেন্দ্রে আধার ও জমির রেকর্ড নিয়ে যোগাযোগ করুন']
      },
      gu: {
        whatIsIt: 'ખેડૂતોને બિયારણ અને ખાતર માટે સહાય આપતી સરકારી યોજના.',
        whoGetsIt: '૫ એકર સુધીની જમીન ધરાવતા ખેડૂતો.',
        keyBenefits: ['વર્ષે ₹6,000 ની સીધી નાણાકીય સહાય'],
        howToApply: ['નજીકના જન સેવા કેન્દ્ર પર આધાર અને જમીનના કાગળો રજૂ કરો']
      },
      kn: {
        whatIsIt: 'ರೈತರಿಗೆ ರಸಗೊಬ್ಬರ ಮತ್ತು ಬೀಜ ಖರೀದಿಸಲು ನೆರವಾಗುವ ಯೋಜನೆ.',
        whoGetsIt: '5 ಎಕರೆವರೆಗೆ ಜಮೀನು ಹೊಂದಿರುವ ರೈತರು.',
        keyBenefits: ['ವರ್ಷಕ್ಕೆ ₹6,000 ನೇರ ಬ್ಯಾಂಕ್ ಖಾತೆಗೆ'],
        howToApply: ['ಸಮೀಪದ ಸಿಎಸ್‌ಸಿ ಕೇಂದ್ರದಲ್ಲಿ ಆಧಾರ್ ಮತ್ತು ಜಮೀನು ದಾಖಲೆಗಳೊಂದಿಗೆ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ']
      }
    },
    officialGazetteExcerpt: 'Notification No. 1-1/2019-Credit-I: Under the Pradhan Mantri Kisan Samman Nidhi (PM-KISAN), an amount of ₹6000/- per year is provided to all landholding farmer families across the country, subject to certain exclusion criteria relating to higher income status (e.g. Constitutional post holders, serving/retired officers, doctors, engineers, income tax payees in last assessment year).'
  },
  {
    id: 'ayushman-bharat',
    category: 'Healthcare',
    department: 'National Health Authority (NHA)',
    ministry: 'Ministry of Health and Family Welfare',
    targetGroup: ['Low Income Families', 'Senior Citizens', 'Rural Poor', 'Urban Workers'],
    maxBenefit: '₹5,000,000 coverage / family / year',
    benefitType: 'Insurance',
    minAge: 0,
    maxAge: 100,
    genderEligibility: 'All',
    maxIncomeLimit: 300000,
    allowedStates: ['All'],
    isPopular: true,
    processingTimeDays: 7,
    helplineNumber: '14555 / 1800-111-565',
    officialPortalUrl: 'https://pmjay.gov.in',
    requiredDocuments: [
      'Aadhaar Card or Ration Card',
      'Proof of Identity / SECC 2011 Data Inclusion',
      'Mobile Number'
    ],
    title: {
      en: 'Ayushman Bharat PM-JAY Health Scheme',
      hi: 'आयुष्मान भारत पीएम-जय स्वास्थ्य योजना',
      ta: 'ஆயுஷ்மான் பாரத் பிரதம மந்திரி ஜன் ஆரோக்கிய திட்டம்',
      te: 'ఆయుష్మాన్ భారత్ పిఎం-జెఎవై ఆరోగ్య పథకం',
      mr: 'आयुष्मान भारत पीएम-जय आरोग्य योजना',
      bn: 'আয়ুষ্মান ভারত পিএম-জয় স্বাস্থ্য যোজના',
      gu: 'આયુષ્માન ભારત પીએમ-જય સ્વાસ્થ્ય યોજના',
      kn: 'ಆಯುಷ್ಮಾನ್ ಭಾರತ್ ಪಿಎಂ-ಜೆಎವೈ ಆರೋಗ್ಯ ಯೋಜನೆ'
    },
    shortDescription: {
      en: 'Provides free hospital health coverage up to ₹5 Lakh per family per year for secondary and tertiary care hospitalization in public & empaneled private hospitals.',
      hi: 'सरकारी और सूचीबद्ध निजी अस्पतालों में द्वितीयक और तृतीयक देखभाल के लिए प्रति परिवार प्रति वर्ष ₹5 लाख तक का मुफ्त अस्पताल इलाज कवर प्रदान करता है।',
      ta: 'குடும்பத்திற்கு ஆண்டுக்கு ₹5 லட்சம் வரை இலவச மருத்துவமனை சிகிச்சை அளிக்கும் சுகாதார காப்பீட்டு திட்டம்.',
      te: 'కుటుంబానికి ఏడాదికి ₹5 లక్షల వరకు ఉచిత ఆసుపత్రి వైద్య చికిత్స అందించే ఆరోగ్య బీమా పథకం.',
      mr: 'कुटुंबाला दरवर्षी ₹५ लाखांपर्यंत मोफत हॉस्पिटलायझेशन आणि वैद्यकीय उपचार देणारी आरोग्य योजना.',
      bn: 'পরিবার প্রতি বছরে ৫ লাখ টাকা পর্যন্ত বিনামূল্যে হাসপাতালে চিকিৎসার কভারেজ।',
      gu: 'પરિવાર દીઠ વાર્ષિક ₹5 લાખ સુધીની મફત હોસ્પિટલ સારવાર પૂરી પાડે છે.',
      kn: 'ಪ್ರತಿ ಕುಟುಂಬಕ್ಕೆ ವರ್ಷಕ್ಕೆ ₹5 ಲಕ್ಷದವರೆಗೆ ಉಚಿತ ಆಸ್ಪತ್ರೆ ಉಚಿತ ಚಿಕಿತ್ಸೆ ನೀಡುವ ಯೋಜನೆ.'
    },
    simplifiedExplanation: {
      en: {
        whatIsIt: 'World\'s largest government healthcare scheme offering cashless treatment up to ₹5 Lakh at any government or top private hospital.',
        whoGetsIt: 'Families listed in SECC data, Ration card holders, and senior citizens aged 70+ (regardless of income).',
        keyBenefits: [
          '₹5 Lakh free medical insurance every year per family',
          'Covers surgeries, ICU, medicines, diagnostic tests & doctor fees',
          '100% Cashless & Paperless treatment using Ayushman Card'
        ],
        howToApply: [
          'Visit pmjay.gov.in or your nearest empaneled hospital / CSC',
          'Verify your name using Aadhaar or Ration Card number',
          'Generate your e-Ayushman Card instantly at zero cost',
          'Show card at hospital admission desk for free treatment'
        ]
      },
      hi: {
        whatIsIt: 'दुनिया की सबसे बड़ी स्वास्थ्य योजना जो किसी भी सरकारी या निजी अस्पताल में ₹5 लाख तक का मुफ्त इलाज देती है।',
        whoGetsIt: 'राशन कार्ड धारक, गरीब परिवार और 70 वर्ष से अधिक आयु के वरिष्ठ नागरिक।',
        keyBenefits: [
          'प्रति परिवार प्रति वर्ष ₹5 लाख का मुफ्त इलाज',
          'ऑपरेशन, दवाइयां, आईसीयू और जांच का पूरा खर्च कवर',
          'आयुष्मान कार्ड दिखाते ही 100% कैशलेस इलाज'
        ],
        howToApply: [
          'pmjay.gov.in पर जाएं या नजदीकी अस्पताल/सीएससी केंद्र जाएं',
          'आधार कार्ड या राशन कार्ड नंबर डालकर अपना नाम चेक करें',
          'मुफ्त में अपना आयुष्मान कार्ड (Ayushman Card) बनवाएं'
        ]
      },
      ta: {
        whatIsIt: 'அரசு மற்றும் தனியார் மருத்துவமனைகளில் ₹5 லட்சம் வரை இலவச சிகிச்சை அளிக்கும் திட்டம்.',
        whoGetsIt: 'ரேஷன் கார்டு வைத்திருப்பவர்கள் மற்றும் 70 வயதிற்கு மேற்பட்ட மூத்த குடிமக்கள்.',
        keyBenefits: ['ஆண்டுக்கு ₹5 லட்சம் இலவச மருத்துவக் காப்பீடு', 'முற்றிலும் ரொக்கமில்லா சிகிச்சை'],
        howToApply: ['ஆதார் அல்லது ரேஷன் கார்டுடன் அருகில் உள்ள மருத்துவமனையை அணுகவும்']
      },
      te: {
        whatIsIt: 'ప్రభుత్వ మరియు ప్రైవేట్ ఆసుపత్రులలో ₹5 లక్షల ఉచిత వైద్య చికిత్స అందించే పథకం.',
        whoGetsIt: 'రేషన్ కార్డు దారులు మరియు 70 ఏళ్లు పైబడిన జ్యేష్ఠ పౌరులు.',
        keyBenefits: ['కుటుంబానికి ఏడాదికి ₹5 లక్షల ఉచిత చికిత్స'],
        howToApply: ['ఆధార్ లేదా రేషన్ కార్డుతో దగ్గరలోని ఆసుపత్రిని సంప్రదించండి']
      },
      mr: {
        whatIsIt: 'सरकारी व खाजगी रुग्णालयात ₹५ लाखांपर्यंत मोफत उपचाराची सुविधा.',
        whoGetsIt: 'रेशन कार्डधारक आणि ७० वर्षांपेक्षा जास्त वयाचे ज्येष्ठ नागरिक.',
        keyBenefits: ['वार्षिक ₹५ लाख मोफत आरोग्य विमा'],
        howToApply: ['आधार कार्ड घेऊन सरकारी दवाखान्यात किंवा सीएससी केंद्रात जा']
      },
      bn: {
        whatIsIt: 'যেকোনো হাসপাতালে ৫ লাখ টাকা পর্যন্ত বিনামূল্যে ক্যাশলেস চিকিৎসার সুবিধা।',
        whoGetsIt: 'রেশন কার্ডধারী এবং ৭০ বছরের উর্ধ্বে জ্যেষ্ঠ নাগরিকগণ।',
        keyBenefits: ['প্রতি বছর ৫ লাখ টাকা পর্যন্ত বিনামূল্যে চিকিৎসা'],
        howToApply: ['আধার ও রেশন কার্ড নিয়ে নিকটস্থ হাসপাতালে যোগ দিন']
      },
      gu: {
        whatIsIt: 'સરકારી અને ખાનગી હોસ્પિટલોમાં ₹5 લાખ સુધીની મફત સારવાર આપતી યોજના.',
        whoGetsIt: 'રાશન કાર્ડ ધારકો અને 70 વર્ષથી વધુ વયના વરિષ્ઠ નાગરિકો.',
        keyBenefits: ['દર વર્ષે ₹5 લાખનું મફત હેલ્થ કવર'],
        howToApply: ['આધાર કાર્ડ સાથે નજીકની હોસ્પિટલનો સંપર્ક કરો']
      },
      kn: {
        whatIsIt: 'ಖಾಸಗಿ ಮತ್ತು ಸರ್ಕಾರಿ ಆಸ್ಪತ್ರೆಗಳಲ್ಲಿ ₹5 ಲಕ್ಷದವರೆಗೆ ಉಚಿತ ಚಿಕಿತ್ಸೆ ನೀಡುವ ಯೋಜನೆ.',
        whoGetsIt: 'ರೇಷನ್ ಕಾರ್ಡ್ ಹೊಂದಿರುವವರು ಮತ್ತು 70 ವರ್ಷ ಮೇಲ್ಪಟ್ಟ ಹಿರಿಯ ನಾಗರಿಕರು.',
        keyBenefits: ['ವರ್ಷಕ್ಕೆ ₹5 ಲಕ್ಷ ಉಚಿತ ವೈದ್ಯಕೀಯ ವಿಮೆ'],
        howToApply: ['ಆಧಾರ್ ಅಥವಾ ರೇಷನ್ ಕಾರ್ಡ್‌ನೊಂದಿಗೆ ಆಸ್ಪತ್ರೆಗೆ ಭೇಟಿ ನೀಡಿ']
      }
    },
    officialGazetteExcerpt: 'AB PM-JAY provides health cover of ₹5,000,000 per family per year for secondary and tertiary care hospitalization across public and private empaneled hospitals in India. It covers up to 3 days of pre-hospitalization and 15 days post-hospitalization expenses such as diagnostics and medicines.'
  },
  {
    id: 'sukanya-samriddhi',
    category: 'Women & Child',
    department: 'Department of Posts / Ministry of Finance',
    ministry: 'Ministry of Women and Child Development',
    targetGroup: ['Girl Child', 'Parents', 'Women Welfare'],
    maxBenefit: '8.2% Interest Rate + Tax Savings u/s 80C',
    benefitType: 'Subsidized Credit',
    minAge: 0,
    maxAge: 10,
    genderEligibility: 'Female',
    allowedStates: ['All'],
    isPopular: true,
    processingTimeDays: 3,
    helplineNumber: '1800-266-6868',
    officialPortalUrl: 'https://www.indiapost.gov.in',
    requiredDocuments: [
      'Birth Certificate of Girl Child',
      'Identity & Address Proof of Parent/Guardian (Aadhaar/PAN)',
      'Passport size photos of Child and Parent'
    ],
    title: {
      en: 'Sukanya Samriddhi Yojana (SSY)',
      hi: 'सुकन्या समृद्धि योजना',
      ta: 'சுகன்யா சம்ரித்தி யோஜனா (செல்வமகள் சேமிப்புத் திட்டம்)',
      te: 'సుకన్య సమృద్ధి యోజన (బాలికల పొదుపు పథకం)',
      mr: 'सुकन्या समृद्धी योजना',
      bn: 'সুকন্যা সমৃদ্ধি যোজনা',
      gu: 'સુકન્યા સમૃદ્ધિ યોજના',
      kn: 'ಸುಕನ್ಯಾ ಸಮೃದ್ಧಿ ಯೋಜನೆ'
    },
    shortDescription: {
      en: 'High-interest government savings scheme for girl children under 10 years to fund higher education and marriage with guaranteed tax-free returns.',
      hi: '10 वर्ष से कम उम्र की बालिकाओं के लिए उच्च ब्याज वाली सरकारी बचत योजना, जो उच्च शिक्षा और विवाह के लिए कर-मुक्त रिटर्न प्रदान करती है।',
      ta: '10 வயதிற்குட்பட்ட பெண் குழந்தைகளுக்கான அதிக வட்டி தரும் சேமிப்பு திட்டம்.',
      te: '10 సంవత్సరాల లోపు ఆడపిల్లల ఉన్నత చదువులు మరియు వివాహ అవసరాల కోసం అత్యధిక వడ్డీ ఇచ్చే ప్రభుత్వం పొదుపు పథకం.',
      mr: '१० वर्षांखालील मुलींच्या उच्च शिक्षण व लग्नासाठी उच्च व्याज देणारी सरकारी बचत योजना.',
      bn: '১০ বছরের কম বয়সী বালিকাদের উচ্চশিক্ষা ও বিবাহের জন্য সর্বোচ্চ সুদের সরকারি সঞ্চয় প্রকল্প।',
      gu: '૧૦ વર્ષથી નાની દીકરીઓ માટે ઊંચું વ્યાજ આપતી સરકારી બચત યોજના.',
      kn: '10 ವರ್ಷದೊಳಗಿನ ಹೆಣ್ಣುಮಕ್ಕಳ ಶಿಕ್ಷಣ ಮತ್ತು ಮದುವೆಗಾಗಿ ಹೆಚ್ಚು ಬಡ್ಡಿ ನೀಡುವ ಸರ್ಕಾರಿ ಉಳಿತಾಯ ಯೋಜನೆ.'
    },
    simplifiedExplanation: {
      en: {
        whatIsIt: 'A special high-return post office savings deposit scheme specifically created for the bright future of girl children.',
        whoGetsIt: 'Parents/guardians of any girl child aged below 10 years (maximum 2 girls per family).',
        keyBenefits: [
          'Highest government interest rate (currently 8.2% per annum)',
          'Deposit minimum ₹250 up to ₹1.5 Lakh per year',
          'Complete Tax Exemption under Section 80C',
          '50% withdrawal allowed at age 18 for higher studies'
        ],
        howToApply: [
          'Visit any Post Office or authorized nationalized Bank branch',
          'Fill SSY opening form with child\'s birth certificate',
          'Deposit initial amount (min ₹250) to activate passbook'
        ]
      },
      hi: {
        whatIsIt: 'बेटी के उज्ज्वल भविष्य और पढ़ाई के लिए डाकघर/बैंक की सबसे ज्यादा ब्याज देने वाली बचत योजना।',
        whoGetsIt: '10 वर्ष से कम उम्र की बेटियों के माता-पिता।',
        keyBenefits: [
          'सरकार की सबसे अधिक ब्याज दर (8.2% प्रति वर्ष)',
          'सालाना न्यूनतम ₹250 और अधिकतम ₹1.5 लाख जमा करें',
          'आयकर धारा 80C के तहत पूरी तरह टैक्स-फ्री'
        ],
        howToApply: [
          'किसी भी पोस्ट ऑफिस या बैंक शाखा में जाएं',
          'बेटी का जन्म प्रमाण पत्र और आधार कार्ड दें',
          '₹250 जमा करके खाता खोलें'
        ]
      },
      ta: {
        whatIsIt: 'பெண் குழந்தைகளின் எதிர்கால படிப்பு மற்றும் திருமணத்துக்கான சிறந்த சேமிப்பு திட்டம்.',
        whoGetsIt: '10 வயதுக்கு உட்பட்ட பெண் குழந்தைகளின் பெற்றோர்கள்.',
        keyBenefits: ['ஆண்டுக்கு 8.2% அதிகபட்ச வட்டி விகிதம்', 'முற்றிலும் வரி விலக்கு பெற்ற சேமிப்பு'],
        howToApply: ['அஞ்சலகம் அல்லது வங்கியில் பிறப்புச் சான்றிதழுடன் கணக்கு தொடங்கவும்']
      },
      te: {
        whatIsIt: 'ఆడపిల్లల భవిష్యత్తు చదువుల కోసం అత్యధిక వడ్డీ ఇచ్చే తపాలా సేవింగ్స్ పథకం.',
        whoGetsIt: '10 సంవత్సరాల లోపు ఆడపిల్లల తల్లిదండ్రులు.',
        keyBenefits: ['సంవత్సరానికి 8.2% ప్రభుత్వ వడ్డీ', 'పూర్తిగా పన్ను మినహాయింపు'],
        howToApply: ['తపాళా కార్యాలయం లేదా బ్యాంకులో జనన ధృవీకరణ పత్రంతో ఖాతా తెరవండి']
      },
      mr: {
        whatIsIt: 'मुलींच्या भविष्यासाठी पोस्टाची सर्वात जास्त व्याज देणारी बचत योजना.',
        whoGetsIt: '१० वर्षांखालील मुलींचे पालक.',
        keyBenefits: ['वार्षिक ८.२% सर्वाधिक व्याजदर', 'पूर्णपणे करमुक्त उत्पन्न'],
        howToApply: ['पोस्टात किंवा बँकेत जाऊन जन्म दाखल्यासह खाते उघडा']
      },
      bn: {
        whatIsIt: 'মেয়েদের ভবিষ্যৎ শিক্ষার জন্য সর্বোচ্চ সুদের সরকারি সঞ্চয় প্রকল্প।',
        whoGetsIt: '১০ বছরের কম বয়সী বালিকাদের অভিভাবকগণ।',
        keyBenefits: ['বার্ষিক ৮.২% সুদের হার', 'সম্পূর্ণ করমুক্ত সঞ্চয়'],
        howToApply: ['ডাকঘর বা ব্যাংকে জন্ম সনদপত্র নিয়ে যোগাযোগ করুন']
      },
      gu: {
        whatIsIt: 'દીકરીના ભવિષ્ય માટે પોસ્ટ ઓફિસની સહુથી વધુ વ્યાજ આપતી યોજના.',
        whoGetsIt: '૧૦ વર્ષથી નાની દીકરીના પિતા અથવા માતા.',
        keyBenefits: ['વાર્ષિક 8.2% ઊંચો વ્યાજદર', 'સંપૂર્ણ ટેક્સ ફ્રી સમૃદ્ધિ'],
        howToApply: ['પોસ્ટ ઓફિસમાં જન્મના દાખલા સાથે ખાતું ખોલાવો']
      },
      kn: {
        whatIsIt: 'ಹೆಣ್ಣುಮಕ್ಕಳ ಭವಿಷ್ಯದ ಶಿಕ್ಷಣಕ್ಕಾಗಿ ಅತ್ಯಧಿಕ ಬಡ್ಡಿ ನೀಡುವ ಅಂಚೆ ಕಚೇರಿ ಉಳಿತಾಯ ಯೋಜನೆ.',
        whoGetsIt: '10 ವರ್ಷದೊಳಗಿನ ಹೆಣ್ಣುಮಕ್ಕಳ ಪೋಷಕರು.',
        keyBenefits: ['ವರ್ಷಕ್ಕೆ 8.2% ಅತ್ಯಧಿಕ ಬಡ್ಡಿ ದರ', 'ಸಂಪೂರ್ಣ ತೆರಿಗೆ ವಿನಾಯಿತಿ'],
        howToApply: ['ಅಂಚೆ ಕಚೇರಿಯಲ್ಲಿ ಮಗುವಿನ ಜನನ ಪ್ರಮಾಣಪತ್ರದೊಂದಿಗೆ ಖಾತೆ ತೆರೆಯಿರಿ']
      }
    },
    officialGazetteExcerpt: 'G.S.R. 914(E): Sukanya Samriddhi Account Rules state that an account may be opened by one of the guardians in the name of a girl child who has not attained the age of ten years. The interest rate is notified quarterly (presently 8.2% p.a.) compounded annually.'
  },
  {
    id: 'pm-awas-yojana',
    category: 'Housing',
    department: 'Ministry of Housing and Urban Affairs / MoRD',
    ministry: 'Ministry of Housing and Urban Affairs',
    targetGroup: ['Homeless', 'Kutcha House Owners', 'EWS/LIG Families', 'Women Household Heads'],
    maxBenefit: '₹1.2 Lakh to ₹2.67 Lakh Grant',
    benefitType: 'Housing Grant',
    minAge: 18,
    maxAge: 70,
    genderEligibility: 'All',
    maxIncomeLimit: 600000,
    allowedStates: ['All'],
    isPopular: true,
    processingTimeDays: 30,
    helplineNumber: '1800-11-6446',
    officialPortalUrl: 'https://pmaymis.gov.in',
    requiredDocuments: [
      'Aadhaar Card of all family members',
      'Job Card (MGNREGA) or Income Certificate',
      'Bank Account Passbook',
      'Proof of No Pucca House ownership anywhere in India'
    ],
    title: {
      en: 'PM Awas Yojana (PMAY Housing Scheme)',
      hi: 'पीएम आवास योजना (प्रधानमंत्री आवास योजना)',
      ta: 'பிரதம மந்திரி ஆவாஸ் யோஜனா (வீட்டு வசதி திட்டம்)',
      te: 'పిఎం ఆవాస్ యోజన (ఇళ్ల నిర్మాణం పథకం)',
      mr: 'पीएम आवास योजना (घरकुल योजना)',
      bn: 'পিএম আবাসন যোজনা (গৃহনির্মাণ প্রকল্প)',
      gu: 'પીએમ આવાસ યોજના (ઘર આપતી સરકારી યોજના)',
      kn: 'ಪಿಎಂ ಆವಾಸ್ ಯೋಜನೆ (ಉಚಿತ/ಸಬ್ಸಿಡಿ ಮನೆ ಯೋಜನೆ)'
    },
    shortDescription: {
      en: 'Provides financial subsidy of ₹1.2 Lakh to ₹2.67 Lakh for building or purchasing a permanent (Pucca) house for homeless and low-income families.',
      hi: 'बेघर और कम आय वाले परिवारों को पक्का मकान बनाने या खरीदने के लिए ₹1.2 लाख से ₹2.67 लाख की वित्तीय सब्सिडी प्रदान करता है।',
      ta: 'வீடற்ற மற்றும் குறைந்த வருவாய் குடும்பங்களுக்கு பக்கா வீடு கட்ட ₹1.2 லட்சம் முதல் ₹2.67 லட்சம் வரை நிதியுதவி.',
      te: 'పక్కా ఇల్లు లేని పేద కుటుంబాలకు కొత్త ఇల్లు కట్టుకోవడానికి ₹1.2 లక్షల నుండి ₹2.67 లక్షల వరకు ఆర్థిక సహాయం.',
      mr: 'घर नसलेल्या व अल्प उत्पन्न कुटुंबांना पक्के घर बांधण्यासाठी ₹१.२ लाख ते ₹२.६७ लाखांपर्यंत सरकारी अनुदान.',
      bn: 'গৃহহীন পরিবারকে পক্কা বাড়ি তৈরির জন্য ১.২ লাখ থেকে ২.৬৭ লাখ টাকার সরকারি অনুদান।',
      gu: 'કાચા ઘરમાં રહેતા નાગરિકોને પક્કું ઘર બનાવવા ₹1.2 લાખથી ₹2.67 લાખની સહાય.',
      kn: 'ಮನೆಯಿಲ್ಲದ ಬಡ ಕುಟುಂಬಗಳಿಗೆ ಪಕ್ಕಾ ಮನೆ ನಿರ್ಮಿಸಲು ₹1.2 ಲಕ್ಷದಿಂದ ₹2.67 ಲಕ್ಷದವರೆಗೆ ಸರ್ಕಾರಿ ಸಬ್ಸಿಡಿ.'
    },
    simplifiedExplanation: {
      en: {
        whatIsIt: 'Government flagship housing program aimed at ensuring every Indian family has a permanent concrete house with toilet and electricity.',
        whoGetsIt: 'Families who do not own a permanent (Pucca) house anywhere in India and have an annual income below ₹6 Lakh.',
        keyBenefits: [
          'Rural (PMAY-G): Direct financial assistance of ₹1.20 Lakh (Plains) / ₹1.30 Lakh (Hilly areas)',
          'Urban (PMAY-U): Home loan interest subsidy up to ₹2.67 Lakh',
          'Additional 90 days paid wages under MGNREGA for constructing house'
        ],
        howToApply: [
          'Apply via Gram Panchayat / Ward member or online at pmaymis.gov.in',
          'Provide Aadhaar card and land/site ownership documents',
          'Verification conducted by geo-tagging photo of current Kutcha house'
        ]
      },
      hi: {
        whatIsIt: 'हर गरीब परिवार को पक्का मकान देने के लिए भारत सरकार की सबसे बड़ी आवास योजना।',
        whoGetsIt: 'वे परिवार जिनके पास पूरे देश में कहीं भी अपना पक्का मकान नहीं है।',
        keyBenefits: [
          'ग्रामीण क्षेत्र: मकान बनाने के लिए ₹1,20,000 की सीधी नकद सहायता',
          'शहरी क्षेत्र: होम लोन पर ₹2.67 लाख तक की ब्याज सब्सिडी',
          'शौचालय निर्माण के लिए ₹12,000 अलग से'
        ],
        howToApply: [
          'ग्राम पंचायत/वार्ड ऑफिस में संपर्क करें या pmaymis.gov.in पर फॉर्म भरें',
          'आधार कार्ड और बैंक खाता विवरण दें',
          'मौजूदा कच्चे मकान की फोटो जिओ-टैग होगी'
        ]
      },
      ta: {
        whatIsIt: 'ஒவ்வொரு குடும்பத்திற்கும் சொந்தமாக பக்கா வீடு வழங்க உதவும் திட்டம்.',
        whoGetsIt: 'சொந்தமாக பக்கா வீடு இல்லாத ஏழை குடும்பங்கள்.',
        keyBenefits: ['வீடு கட்ட ₹1.20 லட்சம் நேரடி மானியம்', 'கழிப்பறை கட்ட கூடுதல் உதவி'],
        howToApply: ['கிராம பஞ்சாயத்து அல்லது வார்டு அலுவலகத்தை அணுகவும்']
      },
      te: {
        whatIsIt: 'ప్రతి పేద కుటుంబానికి పక్కా ఇల్లు నిర్మించి ఇచ్చే ప్రభుత్వ పథకం.',
        whoGetsIt: 'సొంత ఇల్లు లేని పేద కుటుంబాలు.',
        keyBenefits: ['ఇల్లు నిర్మించుకోవడానికి ₹1.20 లక్షల ఆర్థిక సాయం'],
        howToApply: ['గ్రామ పంచాయతీ లేదా వార్డు సచివాలయంలో సంప్రదించండి']
      },
      mr: {
        whatIsIt: 'प्रत्येक बेघर कुटुंबाला हक्काचे पक्के घर देणारी सरकारी घरकुल योजना.',
        whoGetsIt: 'पक्के घर नसलेली अल्प उत्पन्न कुटुंबे.',
        keyBenefits: ['ग्रामीण भागात घर बांधण्यासाठी ₹१,२०,००० थेट मदत'],
        howToApply: ['ग्रामपंचायत कार्यालयात जाऊन अर्जाची पडताळणी करा']
      },
      bn: {
        whatIsIt: 'গৃহহীন পরিবারকে নিজস্ব পক্কা বাড়ি বানিয়ে দেওয়ার সরকারি স্কিম।',
        whoGetsIt: 'যাদের নিজস্ব কোনো পাকা ঘর নেই।',
        keyBenefits: ['ঘর তৈরির জন্য ১.২০ লাখ টাকার সরাসরি অনুদান'],
        howToApply: ['গ্রাম পঞ্চায়েত বা মিউনিসিপ্যালিটি অফিসে যোগাযোগ করুন']
      },
      gu: {
        whatIsIt: 'દરેક ગરીબ પરિવારને પોતાનું પક્કું મકાન આપતી આવાસ યોજના.',
        whoGetsIt: 'પોતાનું પક્કું ઘર ન ધરાવતા તમામ નાગરિકો.',
        keyBenefits: ['મકાન બનાવવા માટે ₹1,20,000 ની નાણાકીય સહાય'],
        howToApply: ['ગ્રામ પંચાયત અથવા વૉર્ડ ઑફિસે સંપર્ક કરો']
      },
      kn: {
        whatIsIt: 'ಪ್ರತಿಯೊಂದು ಬಡ ಕುಟುಂಬಕ್ಕೆ ಸ್ವಂತ ಮನೆ ನಿರ್ಮಿಸಲು ನೆರವಾಗುವ ಯೋಜನೆ.',
        whoGetsIt: 'ಸೊಂತ ಪಕ್ಕಾ ಮನೆ ಇಲ್ಲದ ಬಡ ಕುಟುಂಬಗಳು.',
        keyBenefits: ['ಮನೆ ನಿರ್ಮಾಣಕ್ಕೆ ₹1.20 ಲಕ್ಷ ನೇರ ಧನಸಹಾಯ'],
        howToApply: ['ಗ್ರಾಮ ಪಂಚಾಯತ್ ಅಥವಾ ವಾರ್ಡ್ ಕಚೇರಿಯಲ್ಲಿ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ']
      }
    },
    officialGazetteExcerpt: 'PMAY Guidelines: Under PMAY-G, financial assistance of ₹1.20 lakh in plain areas and ₹1.30 lakh in hilly/difficult areas is provided to eligible BPL households identified through SECC 2011 lists for construction of a 25 sq.m. pucca house.'
  },
  {
    id: 'pm-mudra-yojana',
    category: 'MSME & Business',
    department: 'Department of Financial Services',
    ministry: 'Ministry of Finance',
    targetGroup: ['Small Entrepreneurs', 'Shopkeepers', 'Artisans', 'Street Vendors', 'Youth'],
    maxBenefit: 'Collateral-Free Loan up to ₹10 Lakh',
    benefitType: 'Subsidized Credit',
    minAge: 18,
    maxAge: 65,
    genderEligibility: 'All',
    allowedStates: ['All'],
    isPopular: true,
    processingTimeDays: 10,
    helplineNumber: '1800-180-1111',
    officialPortalUrl: 'https://www.mudra.org.in',
    requiredDocuments: [
      'Aadhaar Card & PAN Card',
      'Business Proposal / Project Report',
      'Proof of Business Address (Electricity Bill / Rent Agreement)',
      'Bank statement for last 6 months'
    ],
    title: {
      en: 'PM Mudra Yojana (PMMY Business Loan)',
      hi: 'पीएम मुद्रा योजना (बिज़नेस लोन)',
      ta: 'பிரதம மந்திரி முத்ரா யோஜனா (சிறு தொழில் கடன்)',
      te: 'పిఎం ముద్రా యోజన (వ్యాపార రుణం)',
      mr: 'पीएम मुद्रा योजना (उद्योग कर्ज)',
      bn: 'পিএম মুদ্রা যোজনা (ব্যবসা ঋণ)',
      gu: 'પીએમ મુદ્રા યોજના (બિઝનેસ લોન)',
      kn: 'ಪಿಎಂ ಮುದ್ರಾ ಯೋಜನೆ (ಸಣ್ಣ ಉದ್ಯಮ ಸಾಲ)'
    },
    shortDescription: {
      en: 'Collateral-free loans up to ₹10 Lakh for small business owners, street vendors, shopkeepers, and micro-enterprises divided into Shishu, Kishor & Tarun categories.',
      hi: 'छोटे व्यवसायियों, दुकानदारों और सूक्ष्म उद्यमों के लिए शिशु, किशोर और तरुण श्रेणियों में ₹10 लाख तक का बिना गारंटी का बिजनेस लोन।',
      ta: 'சிறு தொழில்கள் மற்றும் வியாபாரிகளுக்கு ₹10 லட்சம் வரை பிணையற்ற வங்கி கடன் வழங்கும் திட்டம்.',
      te: 'చిన్న వ్యాపారులు మరియు షాపు యజమానులకు షూరిటీ లేకుండా ₹10 లక్షల వరకు బ్యాంక్ రుణం.',
      mr: 'लघु उद्योजक, दुकानदार व व्यवसायिकांसाठी कोणत्याही तारणशिवाय ₹१० लाखांपर्यंत कर्ज.',
      bn: 'ক্ষুদ্র ব্যবসায়ী ও দোকানদারদের জন্য বিনা গ্যারান্টিতে ১০ লাখ টাকা পর্যন্ত সরকারি ব্যবসা ঋণ।',
      gu: 'નાના વેપારીઓ માટે ગેરેંટી વગર ₹10 લાખ સુધીની બિઝનેસ લોન આપતી યોજના.',
      kn: 'ಸಣ್ಣ ವ್ಯಾಪಾರಿಗಳಿಗೆ ಯಾವುದೇ ಭದ್ರತೆ ಇಲ್ಲದೆ ₹10 ಲಕ್ಷದವರೆಗೆ ಬ್ಯಾಂಕ್ ಸಾಲ ನೀಡುವ ಯೋಜನೆ.'
    },
    simplifiedExplanation: {
      en: {
        whatIsIt: 'Government loan scheme providing money to start or expand small businesses without collateral (mortgage).',
        whoGetsIt: 'Any Indian citizen running or starting a small shop, repair center, tailoring unit, food stall, or service business.',
        keyBenefits: [
          'Shishu Loan: Up to ₹50,000 for new small starters',
          'Kishor Loan: ₹50,000 to ₹5 Lakh for expanding business',
          'Tarun Loan: ₹5 Lakh to ₹10 Lakh for established businesses',
          'Zero collateral/property mortgage required'
        ],
        howToApply: [
          'Approach any commercial bank, RRB, or MFI branch',
          'Fill Mudra Loan Application Form with business plan',
          'Submit identity, address proof, and estimated quotation',
          'Receive Mudra Debit Card upon sanction'
        ]
      },
      hi: {
        whatIsIt: 'बिना किसी जमीन या मकान की गारंटी (गिरवी) के नया व्यवसाय शुरू करने या बढ़ाने के लिए आसान बैंक लोन।',
        whoGetsIt: 'दुकानदार, फल/सब्जी विक्रेता, टेलर, ब्यूटी पार्लर, वर्कशॉप और छोटे उद्यमी।',
        keyBenefits: [
          'शिशु लोन: ₹50,000 तक (नया काम शुरू करने के लिए)',
          'किशोर लोन: ₹50,000 से ₹5 लाख तक',
          'तरुण लोन: ₹5 लाख से ₹10 लाख तक',
          'कोई गारंटी या संपत्ति गिरवी रखने की जरूरत नहीं'
        ],
        howToApply: [
          'किसी भी बैंक शाखा में जाएं और मुद्रा लोन फॉर्म मांगें',
          'आधार कार्ड, पैन कार्ड और बिज़नेस प्लान जमा करें',
          'स्वीकृति मिलने पर मुद्रा डेबिट कार्ड प्राप्त करें'
        ]
      },
      ta: {
        whatIsIt: 'சொத்து பிணை இன்றி புதிய தொழில் தொடங்க கடன் வழங்கும் அரசு திட்டம்.',
        whoGetsIt: 'சிறு கடை உரிமையாளர்கள், வியாபாரிகள் மற்றும் சுயதொழில் செய்பவர்கள்.',
        keyBenefits: ['₹50,000 முதல் ₹10 லட்சம் வரை பிணையற்ற கடன்'],
        howToApply: ['அருகிலுள்ள வங்கியில் வணிக திட்டத்துடன் விண்ணப்பிக்கவும்']
      },
      te: {
        whatIsIt: 'ఎటువంటి హామీ లేకుండా సొంత వ్యాపారం ప్రారంభించడానికి ఇచ్చే బ్యాంక్ రుణం.',
        whoGetsIt: 'చిన్న వ్యాపారులు, దుకాణదారులు మరియు చేతివృత్తుల వారు.',
        keyBenefits: ['₹50,000 నుండి ₹10 లక్షల వరకు షూరిటీ లేని రుణం'],
        howToApply: ['వ్యాపార ప్రణాళికతో ఏదైనా బ్యాంక్ శాఖను సంప్రదించండి']
      },
      mr: {
        whatIsIt: 'नवीन उद्योग सुरू करण्यासाठी तारणमुक्त बँक कर्ज देणारी सरकारी योजना.',
        whoGetsIt: 'लहान दुकानदार, फेरीवाले आणि सूक्ष्म व्यावसायिक.',
        keyBenefits: ['₹५०,००० ते ₹१० लाखांपर्यंत तारणमुक्त कर्ज'],
        howToApply: ['कोणत्याही बँक शाखेत जाऊन बिझनेस प्लॅनसह अर्ज सादर करा']
      },
      bn: {
        whatIsIt: 'কোনো গ্যারান্টি ছাড়াই ব্যবসা শুরু করার ব্যাংক ঋণ।',
        whoGetsIt: 'ক্ষুদ্র ব্যবসায়ী, দোকানদার ও স্বনির্ভর ব্যক্তিরা।',
        keyBenefits: ['৫০,০০০ থেকে ১০ লাখ টাকা পর্যন্ত সহজ ঋণ'],
        howToApply: ['নিকটস্থ ব্যাংকে বিজনেস প্ল্যান নিয়ে আবেদন করুন']
      },
      gu: {
        whatIsIt: 'નવો બિઝનેસ શરૂ કરવા કોઈ ગેરંટી વગર બેંક લોન આપતી યોજના.',
        whoGetsIt: 'નાના દુકાનદારો, સ્વરોજગારી અને વેપારીઓ.',
        keyBenefits: ['₹50,000 થી ₹10 લાખ સુધીની વ્યાજબી લોન'],
        howToApply: ['બિઝનેસ પ્લાન સાથે નજીકની બેંક શાખાનો સંપર્ક કરો']
      },
      kn: {
        whatIsIt: 'ಸಣ್ಣ ಉದ್ದಿಮೆ ಪ್ರಾರಂಭಿಸಲು ಯಾವುದೇ ಆಸ್ತಿ ಭದ್ರತೆ ಇಲ್ಲದೆ ಬ್ಯಾಂಕ್ ಸಾಲ.',
        whoGetsIt: 'ಸಣ್ಣ ಅಂಗಡಿಯವರು, ಸ್ವಯಂ ಉದ್ಯೋಗಿಗಳು.',
        keyBenefits: ['₹50,000 ದಿಂದ ₹10 ಲಕ್ಷದವರೆಗೆ ಜಾಮೀನು ರಹಿತ ಸಾಲ'],
        howToApply: ['ಉದ್ಯಮ ಯೋಜನೆಯೊಂದಿಗೆ ಸಮೀಪದ ಬ್ಯಾಂಕ್‌ಗೆ ಭೇಟಿ ನೀಡಿ']
      }
    },
    officialGazetteExcerpt: 'Pradhan Mantri MUDRA Yojana (PMMY) enables non-corporate, non-farm small/micro enterprises to access credit up to 10 lakh. Loans under PMMY do not require collateral security as per RBI guidelines for micro-enterprises.'
  },
  {
    id: 'atal-pension-yojana',
    category: 'Pensions & Senior',
    department: 'PFRDA / Ministry of Finance',
    ministry: 'Ministry of Finance',
    targetGroup: ['Unorganized Sector Workers', 'Maids', 'Drivers', 'Daily Wage Earners'],
    maxBenefit: 'Guaranteed Pension ₹1,000 to ₹5,000 / month',
    benefitType: 'Direct Transfer',
    minAge: 18,
    maxAge: 40,
    genderEligibility: 'All',
    allowedStates: ['All'],
    processingTimeDays: 5,
    helplineNumber: '1800-110-001',
    officialPortalUrl: 'https://www.npscra.nsdl.co.in',
    requiredDocuments: [
      'Aadhaar Card',
      'Savings Bank Account / Post Office Account',
      'Active Mobile Number'
    ],
    title: {
      en: 'Atal Pension Yojana (APY Pension Scheme)',
      hi: 'अटल पेंशन योजना (गारंटीकृत मासिक पेंशन)',
      ta: 'அடல் பென்ஷன் யோஜனா (உத்தரவாத ஓய்வூதியம்)',
      te: 'అటల్ పెన్షన్ యోజన (నెలకు పింఛను)',
      mr: 'अटल पेन्शन योजना (हमीची मासिक पेन्शन)',
      bn: 'অটল পেনশন যোজনা (নিশ্চিত মাসিক পেনশন)',
      gu: 'અટલ પેન્શન યોજના (ગેરંટીડ માસિક પેન્શન)',
      kn: 'ಅಟಲ್ ಪಿಂಚಣಿ ಯೋಜನೆ (ಖಾತರಿ ಮಾಸಿಕ ಪಿಂಚಣಿ)'
    },
    shortDescription: {
      en: 'Guaranteed monthly pension of ₹1,000 to ₹5,000 per month after age 60 for unorganized sector workers with low monthly auto-debit contribution.',
      hi: 'असंगठित क्षेत्र के श्रमिकों के लिए 60 वर्ष की आयु के बाद ₹1,000 से ₹5,000 प्रति माह की गारंटीकृत मासिक पेंशन।',
      ta: '60 வயதிற்கு பிறகு மாதம் ₹1,000 முதல் ₹5,000 வரை அரசு ஓய்வூதியம் வழங்கும் திட்டம்.',
      te: '60 సంవత్సరాల వయస్సు దాటిన తర్వాత నెలకు ₹1,000 నుండి ₹5,000 వరకు ప్రభుత్వం ఇచ్చే గ్యారెంటీ పింఛను.',
      mr: 'वयाची ६० वर्षे पूर्ण झाल्यानंतर दरमहा ₹१,००० ते ₹५,००० पर्यंत हमीची सरकारी पेन्शन.',
      bn: '৬০ বছর বয়সের পর প্রতি মাসে ১,০০০ থেকে ৫,০০০ টাকা পর্যন্ত সরকারি নিশ্চিত পেনশন।',
      gu: '૬૦ વર્ષની ઉંમર પછી દર મહિને ₹1,000 થી ₹5,000 નું સરકારી ગેરંટીડ પેન્શન.',
      kn: '60 ವರ್ಷ ವಯಸ್ಸಿನ ನಂತರ ತಿಂಗಳಿಗೆ ₹1,000 ರಿಂದ ₹5,000 ವರೆಗೆ ಖಾತರಿ ಪಿಂಚಣಿ ನೀಡುವ ಯೋಜನೆ.'
    },
    simplifiedExplanation: {
      en: {
        whatIsIt: 'Government-backed pension scheme ensuring regular monthly income for life during old age.',
        whoGetsIt: 'Any Indian citizen aged 18 to 40 years working in unorganized sectors (drivers, house help, shop workers, laborers).',
        keyBenefits: [
          'Choose guaranteed pension tier: ₹1,000, ₹2,000, ₹3,000, ₹4,000 or ₹5,000/month',
          'Very small monthly contribution starting as low as ₹42/month',
          'Same pension continues to spouse upon death; accumulated corpus returned to nominee'
        ],
        howToApply: [
          'Visit your bank branch where you have a savings account',
          'Fill APY registration form with auto-debit consent',
          'Monthly contribution automatically deducted every month'
        ]
      },
      hi: {
        whatIsIt: 'बुढ़ापे में हर महीने पक्की पेंशन देने वाली सरकारी सामाजिक सुरक्षा योजना।',
        whoGetsIt: '18 से 40 वर्ष की आयु के असंगठित क्षेत्र के कामगार (ड्राइवर, घरेलू सहायक, मजदूर, दुकानदार)।',
        keyBenefits: [
          '60 साल की उम्र के बाद ₹1,000 से ₹5,000 प्रति माह पक्की पेंशन',
          'माह की बचत मात्र ₹42 से शुरू',
          'पति/पत्नी को जीवनभर पेंशन की पूरी सुरक्षा'
        ],
        howToApply: ['अपने बैंक शाखा में जाएं और APY ऑटो-डेबिट फॉर्म भरें']
      },
      ta: {
        whatIsIt: 'முதிய வயதில் மாதம்தோறும் நிலையான வருமானம் தரும் அரசு ஓய்வூதிய திட்டம்.',
        whoGetsIt: '18 முதல் 40 வயதுள்ள முறைசாரா தொழில் செய்வோர்.',
        keyBenefits: ['60 வயதிற்கு பின் மாதம் ₹1,000 முதல் ₹5,000 ஓய்வூதியம்'],
        howToApply: ['உங்கள் வங்கிக் கிளையில் ஆட்டோ-டெபிட் படிவம் சமர்ப்பிக்கவும்']
      },
      te: {
        whatIsIt: 'వృద్ధాప్యంలో ప్రతి నెలా నిరంతర ఆదాయం ఇచ్చే ప్రభుత్వ పింఛను పథకం.',
        whoGetsIt: '18 నుండి 40 సంవత్సరాల వయస్సు ఉన్న కార్మికులు, డ్రైవర్లు, చిన్న ఉద్యోగులు.',
        keyBenefits: ['60 ఏళ్లు దాటాక నెలకు ₹1,000 నుండి ₹5,000 గ్యారెంటీ పింఛను'],
        howToApply: ['మీ బ్యాంకు శాఖలో APY ఫారమ్ పూర్తి చేయండి']
      },
      mr: {
        whatIsIt: 'वृद्धापकाळात नियमित मासिक उत्पन्न देणारी सरकारी पेन्शन योजना.',
        whoGetsIt: '१८ ते ४० वयोगटातील असंघटित क्षेत्रातील कामगार.',
        keyBenefits: ['वयाच्या ६० नंतर दरमहा ₹१,००० ते ₹५,००० हमीची पेन्शन'],
        howToApply: ['आपल्या बँकेत जाऊन ऑटो-डेबिट अर्ज भरा']
      },
      bn: {
        whatIsIt: 'বৃদ্ধ বয়সে স্থায়ী মাসিক আয়ের সরকারি নিশ্চিত পেনশন স্কিম।',
        whoGetsIt: '১৮ থেকে ৪০ বছর বয়সী অসংগঠিত ক্ষেত্রের শ্রমিকরা।',
        keyBenefits: ['৬০ বছর বয়সের পর মাসে ১,০০০ থেকে ৫,০০০ টাকা নির্দিষ্ট পেনশন'],
        howToApply: ['নিজের ব্যাংকে গিয়ে APY ফর্ম জমা দিন']
      },
      gu: {
        whatIsIt: 'વૃદ્ધાવસ્થામાં દર મહિને નિશ્ચિત આવક આપતી સરકારી પેન્શન યોજના.',
        whoGetsIt: '૧૮ થી ૪૦ વર્ષના અસંગઠિત ક્ષેત્રના કામદારો.',
        keyBenefits: ['૬૦ વર્ષ પછી દર મહિને ₹1,000 થી ₹5,000 નું ગેરંટીડ પેન્શન'],
        howToApply: ['તમારી બેંક શાખામાં ઓટો-ડેબિટ ફોર્મ ભરો']
      },
      kn: {
        whatIsIt: 'ವೃದ್ಧಾಪ್ಯದಲ್ಲಿ ನಿರಂತರ ತಿಂಗಳ ಆದಾಯ ನೀಡುವ ಸರ್ಕಾರಿ ಪಿಂಚಣಿ ಯೋಜನೆ.',
        whoGetsIt: '18 ರಿಂದ 40 ವರ್ಷ ವಯಸ್ಸಿನ ಅಸಂಘಟಿತ ವಲಯದ ಕಾರ್ಮಿಕರು.',
        keyBenefits: ['60 ವರ್ಷದ ನಂತರ ತಿಂಗಳಿಗೆ ₹1,000 ರಿಂದ ₹5,000 ಖಾತರಿ ಪಿಂಚಣಿ'],
        howToApply: ['ನಿಮ್ಮ ಬ್ಯಾಂಕ್ ಶಾಖೆಯಲ್ಲಿ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ']
      }
    },
    officialGazetteExcerpt: 'PFRDA Act 2013: Atal Pension Yojana (APY) provides a guaranteed minimum monthly pension of ₹1000, ₹2000, ₹3000, ₹4000 or ₹5000 at the age of 60 years depending on the contributions made by the subscriber.'
  },
  {
    id: 'pm-vishwakarma',
    category: 'Employment & Skills',
    department: 'Ministry of MSME & Ministry of Skill Development',
    ministry: 'Ministry of Micro, Small and Medium Enterprises',
    targetGroup: ['Artisans', 'Craftspeople', 'Blacksmiths', 'Carpenters', 'Weavers', 'Goldsmiths', 'Barbers'],
    maxBenefit: '₹3 Lakh Loan @ 5% + ₹15,000 Toolkit Grant',
    benefitType: 'Skill Training',
    minAge: 18,
    maxAge: 70,
    genderEligibility: 'All',
    allowedStates: ['All'],
    isPopular: true,
    processingTimeDays: 15,
    helplineNumber: '1800-267-7777',
    officialPortalUrl: 'https://pmvishwakarma.gov.in',
    requiredDocuments: [
      'Aadhaar Card',
      'Ration Card / Family Proof',
      'Bank Account Passbook',
      'Proof of Traditional Artisan/Craft Trade'
    ],
    title: {
      en: 'PM Vishwakarma Yojana (Artisan Support Scheme)',
      hi: 'पीएम विश्वकर्मा योजना (कारिगर एवं शिल्पी सहायता)',
      ta: 'பிரதம மந்திரி விஸ்வகர்மா யோஜனா (கைவினைஞர் திட்டம்)',
      te: 'పిఎం విశ్వకర్మ యోజన (చేతివృత్తుల సాయం)',
      mr: 'पीएम विश्वकर्मा योजना (कारागीर सहाय्य)',
      bn: 'পিএম বিশ্বকর্মা যোজনা (কারিগরি সহায়তা)',
      gu: 'પીએમ વિશ્વકર્મા યોજના (કારીગર સહાય યોજના)',
      kn: 'ಪಿಎಂ ವಿಶ್ವಕರ್ಮ ಯೋಜನೆ (ಕುಶಲಕರ್ಮಿಗಳ ನೆರವು)'
    },
    shortDescription: {
      en: 'Comprehensive support scheme for 18 traditional trades offering skill training, ₹15,000 free toolkit e-vouchers, and collateral-free loan up to ₹3 Lakh at 5% interest rate.',
      hi: '18 पारंपरिक व्यवसायों के कारीगरों को कौशल प्रशिक्षण, ₹15,000 का टूलकिट ई-वाउचर और 5% ब्याज पर ₹3 लाख तक का बिना गारंटी लोन।',
      ta: 'பாரம்பரிய கைவினைஞர்களுக்கு பயிற்சி, ₹15,000 கருவி கட்டணம் மற்றும் ₹3 லட்சம் கடன் வழங்கும் திட்டம்.',
      te: 'చేతివృత్తుల వారికి నైపుణ్య శిక్షణ, ₹15,000 ఉచిత టూల్‌కిట్ మరియు 5% వడ్డీకి ₹3 లక్షల రుణం.',
      mr: '१८ पारंपारिक कारागिरांना कौशल्य प्रशिक्षण, ₹१५,००० टूलकिट आणि ५% व्याजाने ₹३ लाखांपर्यंत तारणमुक्त कर्ज.',
      bn: 'ঐতিহ্যবাহী কারিগরদের জন্য বিনামূল্যে ট্রেনিং, ১৫,০০০ টাকার টুলকিট ও ৫% সুদে ৩ লাখ টাকার সরকারি ঋণ।',
      gu: '૧૮ પરંપરાગત કારીગરોને ટ્રેનિંગ, ₹15,000 ની ટૂલકિટ અને 5% ના વ્યાજે ₹3 લાખની લોન.',
      kn: '18 ಸಾಂಪ್ರದಾಯಿಕ ಕುಶಲಕರ್ಮಿಗಳಿಗೆ ತರಬೇತಿ, ₹15,000 ಉಚಿತ ಟೂಲ್‌ಕಿಟ್ ಮತ್ತು ₹3 ಲಕ್ಷದವರೆಗೆ ಸಾಲ.'
    },
    simplifiedExplanation: {
      en: {
        whatIsIt: 'Special central scheme empowering traditional artisans (carpenters, blacksmiths, barbers, cobblers, tailors, potters).',
        whoGetsIt: 'Citizens engaged in hands-and-tools based traditional trades.',
        keyBenefits: [
          'Basic (5-7 days) & Advanced (15 days) Skill Training with ₹500/day stipend',
          'Free ₹15,000 e-voucher to buy modern tools & equipment',
          'Collateral-free business loan: Tranche 1 (₹1 Lakh) + Tranche 2 (₹2 Lakh) at subsidized 5% interest'
        ],
        howToApply: [
          'Visit nearest CSC center for biometric registration on PM Vishwakarma portal',
          '3-step verification by Gram Panchayat / Urban Local Body',
          'Receive PM Vishwakarma Digital ID Card and Certificate'
        ]
      },
      hi: {
        whatIsIt: 'पारंपरिक कारीगरों और शिल्पकारों (बढ़ई, लोहार, नाई, दर्जी, सोनार, कुम्हार) को आगे बढ़ाने की सरकारी योजना।',
        whoGetsIt: 'हाथ और औजारों से पारंपरिक काम करने वाले 18 प्रकार के कारीगर।',
        keyBenefits: [
          'ट्रेनिंग के दौरान ₹500 प्रति दिन का वजीफा',
          'आधुनिक औजार खरीदने के लिए ₹15,000 का टूलकिट वाउचर',
          '5% की रियायती ब्याज दर पर ₹3 लाख तक का बिजनेस लोन'
        ],
        howToApply: ['सीएससी केंद्र पर जाकर बायोमेट्रिक से मुफ्त पंजीकरण करवाएं']
      },
      ta: {
        whatIsIt: 'பாரம்பரிய கைவினைஞர்களை ஊக்கப்படுத்தும் மத்திய அரசு திட்டம்.',
        whoGetsIt: 'தச்சர்கள், கொல்லர்கள், தையல்காரர்கள், மண்பாண்ட தொழிலாளர்கள் உட்பட 18 தொழிற்பிரிவினர்.',
        keyBenefits: ['₹15,000 இலவச கருவித்தொகுதி', '5% குறைந்த வட்டியில் ₹3 லட்சம் கடன்'],
        howToApply: ['CSC மையத்தில் பயோமெட்ரிக் முறையில் பதிவு செய்யவும்']
      },
      te: {
        whatIsIt: 'చేతివృత్తుల వారిని ఆదుకోవడానికి రూపొందించిన ప్రత్యేక ప్రభుత్వ పథకం.',
        whoGetsIt: 'వడ్రంగులు, కమ్మరులు, మంగళులు, కంసాలులు, కుమ్మరులు మొదలైన 18 రకాల చేతివృత్తుల వారు.',
        keyBenefits: ['₹15,000 ఉచిత టూల్‌కిట్ વાઉచర్', '5% వడ్డీకే ₹3 లక్షల రుణం'],
        howToApply: ['మీ సమీప CSC కేంద్రంలో ఆధార్ తో దరఖాస్తు చేసుకోండి']
      },
      mr: {
        whatIsIt: 'पारंपारिक कारागिरांच्या सक्षमीकरणासाठी केंद्र सरकारची विशेष योजना.',
        whoGetsIt: 'सुतार, लोहार, सुवर्णकार, शिंपी, कुंभार असे १८ व्यावसायिक.',
        keyBenefits: ['₹१५,००० मोफत टूलकिट वाउचर', '५% सवलतीचा व्याजदराने ₹३ लाखांपर्यंत कर्ज'],
        howToApply: ['सीएससी केंद्रात बायोमेट्रिक नोंदणी करा']
      },
      bn: {
        whatIsIt: 'ঐতিহ্যবাহী কারিগর ও শিল্পীদের জন্য কেন্দ্রীয় সরকারি সহায়তা প্রকল্প।',
        whoGetsIt: 'কাঠমিস্ত্রি, কামার, তাঁতি, দর্জি, কুমার ইত্যাদি ১৮টি পেশার মানুষ।',
        keyBenefits: ['১৫,০০০ টাকার বিনামূল্যে টুলকিট ভাউচার', '৫% সুদে ৩ লাখ টাকার ঋণ'],
        howToApply: ['সিএসসি কেন্দ্রে বায়োমেট্রিক রেজিস্টার করুন']
      },
      gu: {
        whatIsIt: 'પરંપરાગત કારીગરોને આધુનિક બનાવવા સરકારી યોજના.',
        whoGetsIt: 'સુથાર, લુહાર, દરજી, વાંદરા, કુંભાર જેવા ૧૮ વ્યવસાયોના કારીગરો.',
        keyBenefits: ['₹15,000 નો ટૂલકિટ વાઉચર', '5% વ્યાજે ₹3 લાખ સુધીની લોન'],
        howToApply: ['જન સેવા કેન્દ્ર પર બાયોમેટ્રિક રજીસ્ટ્રેશન કરાવો']
      },
      kn: {
        whatIsIt: 'ಸಾಂಪ್ರದಾಯಿಕ ಕುಶಲಕರ್ಮಿಗಳನ್ನು ಪ್ರೋತ್ಸಾಹಿಸುವ ಕೇಂದ್ರ ಸರ್ಕಾರಿ ಯೋಜನೆ.',
        whoGetsIt: 'ಬಡಗಿ, ಕಮ್ಮಾರ, ಅಕ್ಕಸಾಲಿಗ, ದರ್ಜಿ ಮುಂತಾದ 18 ವೃತ್ತಿಗಳ ಕುಶಲಕರ್ಮಿಗಳು.',
        keyBenefits: ['₹15,000 ಉಚಿತ ಉಪಕರಣ ವೋಚರ್', '5% ಬಡ್ಡಿಯಲ್ಲಿ ₹3 ಲಕ್ಷ ಸಾಲ'],
        howToApply: ['ಸಿಎಸ್‌ಸಿ ಕೇಂದ್ರದಲ್ಲಿ ಬಯೋಮೆಟ್ರಿಕ್ ನೋಂದಣಿ ಮಾಡಿ']
      }
    },
    officialGazetteExcerpt: 'PM Vishwakarma Scheme provides holistic end-to-end support to artisans and craftspeople engaged in 18 traditional trades. Beneficiaries receive a stipend of ₹500/day during basic training, e-vouchers worth ₹15,000 for toolkits, and collateral-free credit support up to ₹3,00,000 at a concessional interest rate of 5%.'
  }
];
