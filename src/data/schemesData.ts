import type { Scheme } from '../types';

export const SCHEMES_DATA: Scheme[] = [
  // --- AGRICULTURE & FARMING (8 SCHEMES) ---
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
    requiredDocuments: ['Aadhaar Card', 'Land Ownership Records (Khasra/Khatauni)', 'Bank Passbook (Aadhaar Seeded)', 'Residence Certificate'],
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
        whatIsIt: 'Central government scheme providing cash support to buy seeds, fertilizers, and cover farm costs.',
        whoGetsIt: 'Farmers owning up to 5 acres of agricultural land who do not pay income tax.',
        keyBenefits: ['₹6,000 per year transferred in 3 installments of ₹2,000', 'Direct bank account credit with zero middleman'],
        howToApply: ['Visit CSC center or pmkisan.gov.in', 'Submit Aadhaar & Land Record details', 'Complete e-KYC']
      },
      hi: {
        whatIsIt: 'किसानों को खाद, बीज और खेती के खर्चों के लिए पैसे देने वाली सरकारी योजना।',
        whoGetsIt: '5 एकड़ तक की कृषि भूमि वाले किसान जो आयकर नहीं देते।',
        keyBenefits: ['हर 4 महीने में ₹2,000 की किस्त (कुल ₹6,000/वर्ष)', 'सीधे बैंक खाते में ट्रांसफर'],
        howToApply: ['सीएससी केंद्र पर जाएं या pmkisan.gov.in पर फॉर्म भरें']
      },
      ta: { whatIsIt: 'விவசாயிகளுக்கு விதை, உரம் வாங்க உதவும் மத்திய அரசு திட்டம்.', whoGetsIt: '5 ஏக்கர் வரை நிலம் வைத்திருக்கும் அனைத்து விவசாய குடும்பங்களும்.', keyBenefits: ['ஆண்டுக்கு 3 தவணைகளில் ₹6,000 நேரடி உதவி'], howToApply: ['CSC மையத்தில் Aadhaar & நில பத்திரத்துடன் விண்ணப்பிக்கவும்'] },
      te: { whatIsIt: 'రైతులకు విత్తనాలు, ఎరువుల కొనుగోలుకు సాయం చేసే కేంద్ర ప్రభుత్వ పథకం.', whoGetsIt: '5 ఎకరాల వరకు సొంత సాగుభూమి ఉన్న రైతులు.', keyBenefits: ['ఏడాదికి ₹6,000 నగదు బదిలీ'], howToApply: ['మీ-సేవ / CSC కేంద్రంలో ఆధార్, పట్టాదారు పాస్‌బుక్‌తో దరఖాస్తు చేసుకోండి'] },
      mr: { whatIsIt: 'शेतकऱ्यांना खते व बियाणे खरेदीसाठी मदत देणारी योजना.', whoGetsIt: '५ एकरांपर्यंत शेतजमीन असलेले शेतकरी कुटुंब.', keyBenefits: ['दरवर्षी ₹६,००० थेट खात्यात जमा'], howToApply: ['जवळच्या सीएससी केंद्रात आधार व जमिनीच्या उताऱ्यासह अर्ज करा'] },
      bn: { whatIsIt: 'কৃষকদের সার ও বীজ কেনার জন্য সরকারি সাহায্য।', whoGetsIt: '৫ একর পর্যন্ত জমি থাকা কৃষক পরিবার।', keyBenefits: ['বছরে ৩টি কিস্তিতে মোট ৬,০০০ টাকা'], howToApply: ['তথ্যমিত্র কেন্দ্রে আধার ও জমির রেকর্ড নিয়ে যোগাযোগ করুন'] },
      gu: { whatIsIt: 'ખેડૂતોને બિયારણ અને ખાતર માટે સહાય આપતી સરકારી યોજના.', whoGetsIt: '૫ એકર સુધીની જમીન ધરાવતા ખેડૂતો.', keyBenefits: ['વર્ષે ₹6,000 ની સીધી નાણાકીય સહાય'], howToApply: ['જન સેવા કેન્દ્ર પર આધાર અને જમીનના કાગળો રજૂ કરો'] },
      kn: { whatIsIt: 'ರೈತರಿಗೆ ರಸಗೊಬ್ಬರ ಮತ್ತು ಬೀಜ ಖರೀದಿಸಲು ನೆರವಾಗುವ ಯೋಜನೆ.', whoGetsIt: '5 ಎಕರೆವರೆಗೆ ಜಮೀನು ಹೊಂದಿರುವ ರೈತರು.', keyBenefits: ['ವರ್ಷಕ್ಕೆ ₹6,000 ನೇರ ಬ್ಯಾಂಕ್ ಖಾತೆಗೆ'], howToApply: ['ಸಿಎಸ್‌ಸಿ ಕೇಂದ್ರದಲ್ಲಿ ಆಧಾರ್ ಮತ್ತು ಜಮೀನು ದಾಖಲೆಗಳೊಂದಿಗೆ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ'] }
    },
    officialGazetteExcerpt: 'Notification No. 1-1/2019-Credit-I: Under PM-KISAN, ₹6000/- per year is provided to all landholding farmer families across India subject to income tax payee exclusion criteria.'
  },
  {
    id: 'pm-fasal-bima',
    category: 'Agriculture',
    department: 'Department of Agriculture & Farmers Welfare',
    ministry: 'Ministry of Agriculture & Farmers Welfare',
    targetGroup: ['Farmers', 'Sharecroppers', 'Tenant Farmers'],
    maxBenefit: '100% Crop Loss Compensation Coverage',
    benefitType: 'Insurance',
    minAge: 18,
    maxAge: 75,
    genderEligibility: 'All',
    allowedStates: ['All'],
    occupationFilter: ['Farmer', 'Agriculture Worker'],
    isPopular: true,
    processingTimeDays: 21,
    helplineNumber: '1800-200-5142',
    officialPortalUrl: 'https://pmfby.gov.in',
    requiredDocuments: ['Aadhaar Card', 'Land Possession Certificate / Sowing Certificate', 'Bank Passbook', 'Crop Loss Intimation Form'],
    title: {
      en: 'PM Fasal Bima Yojana (Crop Insurance)',
      hi: 'पीएम फसल बीमा योजना (फसल सुरक्षा)',
      ta: 'பிரதம மந்திரி பயிர் காப்பீட்டுத் திட்டம்',
      te: 'పిఎం పంటల బీమా యోజన',
      mr: 'पीएम पीक विमा योजना',
      bn: 'পিএম ফসল বীমা যোজনা',
      gu: 'પીએમ પાક વીમા યોજના',
      kn: 'ಪಿಎಂ ಬೆಳೆ ವಿಮೆ ಯೋಜನೆ'
    },
    shortDescription: {
      en: 'Low-premium crop insurance protecting farmers against yield losses due to natural disasters, drought, flood, pests, and unseasonal rains.',
      hi: 'प्राकृतिक आपदाओं, सूखे, बाढ़, कीटों और बेमौसम बारिश से फसल के नुकसान की सुरक्षा के लिए सबसे कम प्रीमियम वाली बीमा योजना।',
      ta: 'இயற்கை பேரழிவுகள் மற்றும் வறட்சியினால் ஏற்படும் பயிர் இழப்புகளுக்கு பாதுகாப்பளிக்கும் குறைந்த பிரீமியம் பயிர் காப்பீட்டு திட்டம்.',
      te: 'వర్షాభావం, వరదలు మరియు ప్రకృతి వైపరీత్యాల వల్ల కలిగే పంట నష్టానికి రక్షణ కల్పించే బీమా పథకం.',
      mr: 'नैसर्गिक आपत्ती, दुष्काळ व पुरामुळे होणाऱ्या पीक नुकसानीसाठी अत्यल्प हप्त्याची पीक विमा योजना.',
      bn: 'প্রাকৃতিক দুর্যোগ ও খরায় ফসলের ক্ষয়ক্ষতির বিরুদ্ধে কৃষকদের সুরক্ষা দানকারী বীমা প্রকল্প।',
      gu: 'કુદરતી આપત્તિઓ અને દુષ્કાળથી પાકના નુકસાન સામે રક્ષણ આપતી પાક વીમા યોજના.',
      kn: 'ಪ್ರಕೃತಿ ವಿಕೋಪದಿಂದ ಬೆಳೆ ನಷ್ಟ ಉಂಟಾದರೆ ರೈತರಿಗೆ ನಷ್ಟ ಪರಿಹಾರ ನೀಡುವ ಬೆಳೆ ವಿಮೆ ಯೋಜನೆ.'
    },
    simplifiedExplanation: {
      en: {
        whatIsIt: 'Government crop insurance offering high compensation at tiny premium rates (Kharif 2%, Rabi 1.5%).',
        whoGetsIt: 'All farmers including sharecroppers and tenant farmers growing notified crops.',
        keyBenefits: ['Nominal premium: 2% for Kharif, 1.5% for Rabi, 5% for commercial crops', 'Full financial coverage for flood, drought, and pest attacks'],
        howToApply: ['Apply through bank branch, CSC kiosk, or pmfby.gov.in within 72 hours of sowing']
      },
      hi: {
        whatIsIt: 'बहुत कम प्रीमियम पर प्राकृतिक आपदाओं से फसल खराब होने पर पूरा मुआवजा देने वाली योजना।',
        whoGetsIt: 'अधिसूचित फसलें उगाने वाले सभी किसान।',
        keyBenefits: ['खरीफ फसलों के लिए केवल 2% और रबी फसलों के लिए 1.5% प्रीमियम', 'बाढ़ व सूखे पर पूरा मुआवजा'],
        howToApply: ['बैंक, सीएससी केंद्र या pmfby.gov.in से आवेदन करें']
      },
      ta: { whatIsIt: 'குறைந்த கட்டணத்தில் பயிர் இழப்பீடு வழங்கும் திட்டம்.', whoGetsIt: 'பயிர் சாகுபடி செய்யும் அனைத்து விவசாயிகள்.', keyBenefits: ['காரிஃப் பயிர்களுக்கு 2% மட்டுமே பிரீமியம்'], howToApply: ['வங்கி அல்லது CSC மையத்தில் விண்ணப்பிக்கவும்'] },
      te: { whatIsIt: 'తక్కువ ప్రైమ్‌తో పంట నష్టపరిహారం ఇచ్చే ప్రభుత్వ పథకం.', whoGetsIt: 'పంటలు సాగుచేసే రైతులందరూ.', keyBenefits: ['ఖరీఫ్ పంటలకు 2% మాత్రమే ప్రీమియం'], howToApply: ['మీ బ్యాంకు లేదా CSC కేంద్రంలో దరఖాస్తు చేసుకోండి'] },
      mr: { whatIsIt: 'पीक नुकसानीसाठी मोबदला देणारी पीक विमा योजना.', whoGetsIt: 'सर्व शेतकरी.', keyBenefits: ['खरीप पिकांसाठी फक्त २% हप्ता'], howToApply: ['बँकेत किंवा सीएससीवर अर्ज करा'] },
      bn: { whatIsIt: 'প্রাকৃতিক দুর্যোগে ফসল নষ্ট হলে সরকারি বীমা ক্ষতিপূরণ।', whoGetsIt: 'সকল কৃষক।', keyBenefits: ['খরিফ ফসলে মাত্র ২% প্রিমিয়াম'], howToApply: ['ব্যাংক বা তথ্যমিত্র কেন্দ্রে আবেদন করুন'] },
      gu: { whatIsIt: 'પાક નુકસાની સામે રક્ષણ આપતી વીમા યોજના.', whoGetsIt: 'તમામ ખેડૂતો.', keyBenefits: ['ખરીફ પાક માટે માત્ર 2% પ્રીમિયમ'], howToApply: ['બેંક અથવા જન સેવા કેન્દ્ર પરથી અરજી કરો'] },
      kn: { whatIsIt: 'ಬೆಳೆ ನಷ್ಟಕ್ಕೆ ಪರಿಹಾರ ನೀಡುವ ಸರ್ಕಾರಿ ಬೆಳೆ ವಿಮೆ.', whoGetsIt: 'ಎಲ್ಲಾ ರೈತರು.', keyBenefits: ['ಖಾರಿಫ್ ಬೆಳೆಗೆ ಕೇವಲ 2% ಪ್ರೀಮಿಯಂ'], howToApply: ['ಬ್ಯಾಂಕ್ ಅಥವಾ ಸಿಎಸ್‌ಸಿ ಕೇಂದ್ರದಲ್ಲಿ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ'] }
    },
    officialGazetteExcerpt: 'PMFBY Guidelines: Under PMFBY, maximum premium payable by farmers is 2% for Kharif food & oilseed crops, 1.5% for Rabi crops, and 5% for Annual Commercial/Horticultural crops.'
  },
  {
    id: 'kisan-credit-card',
    category: 'Agriculture',
    department: 'Department of Agriculture & NABARD',
    ministry: 'Ministry of Agriculture & Farmers Welfare',
    targetGroup: ['Farmers', 'Animal Husbandry Farmers', 'Fishermen'],
    maxBenefit: '₹3 Lakh Loan @ 4% Effective Interest Rate',
    benefitType: 'Subsidized Credit',
    minAge: 18,
    maxAge: 75,
    genderEligibility: 'All',
    allowedStates: ['All'],
    occupationFilter: ['Farmer', 'Agriculture Worker'],
    isPopular: true,
    processingTimeDays: 7,
    helplineNumber: '1800-180-1551',
    officialPortalUrl: 'https://myscheme.gov.in/schemes/kcc',
    requiredDocuments: ['Aadhaar Card', 'Land Revenue Record / Land Lease Agreement', 'Bank Account Passbook', 'Passport Photo'],
    title: {
      en: 'Kisan Credit Card (KCC Loan Scheme)',
      hi: 'किसान क्रेडिट कार्ड (केसीसी ऋण योजना)',
      ta: 'கிசான் கிரெடிட் கார்டு கடன் திட்டம்',
      te: 'కిసాన్ క్రెడిట్ కార్డ్ (కెసిసి రుణం)',
      mr: 'किसान क्रेडिट कार्ड योजना',
      bn: 'কিষাণ ক্রেডিট কার্ড ঋণ প্রকল্প',
      gu: 'કિસાન ક્રેડિટ કાર્ડ યોજના',
      kn: 'ಕಿಸಾನ್ ಕ್ರೆಡಿಟ್ ಕಾರ್ಡ್ ಯೋಜನೆ'
    },
    shortDescription: {
      en: 'Provides timely short-term credit up to ₹3 Lakh at an effective subsidized interest rate of 4% for farming, seeds, equipment, and dairy activities.',
      hi: 'खेती, बीज, उपकरण और पशुपालन के लिए केवल 4% प्रभावी रियायती ब्याज दर पर ₹3 लाख तक का समय पर अल्पकालिक ऋण प्रदान करता है।',
      ta: 'விவசாய செலவுகள் மற்றும் கால்நடை வளர்ப்பிற்கு 4% வட்டி விகிதத்தில் ₹3 லட்சம் வரை கடன் வழங்கும் திட்டம்.',
      te: 'వ్యవసాయం మరియు పశుపోషణ అవసరాలకు 4% తగ్గించిన వడ్డీకే ₹3 లక్షల వరకు రుణం ఇచ్చే పథకం.',
      mr: 'शेती व पशुपालनासाठी केवळ ४% सवलतीच्या व्याजाने ₹३ लाखांपर्यंत बँक कर्ज.',
      bn: 'কৃষি ও গবাদি পশু পালনের জন্য ৪% স্বল্প সুদে ৩ লাখ টাকা পর্যন্ত সরকারি ব্যাংক ঋণ।',
      gu: 'ખેતી અને પશુપાલન માટે 4% સબસીડીવાળા વ્યાજે ₹3 લાખ સુધીની લોન.',
      kn: 'ಕೃಷಿ ಮತ್ತು ಹನು ಸಾಕಾಣಿಕೆಗೆ ಕೇವಲ 4% ಬಡ್ಡಿಯಲ್ಲಿ ₹3 ಲಕ್ಷದವರೆಗೆ ಬ್ಯಾಂಕ್ ಸಾಲ.'
    },
    simplifiedExplanation: {
      en: {
        whatIsIt: 'Low-interest flexible credit card for farmers to withdraw money anytime for crop production & animal husbandry.',
        whoGetsIt: 'Individual farmers, joint borrowers, tenant farmers, and fishermen.',
        keyBenefits: ['Loan up to ₹3 Lakh at effectively 4% interest (with prompt repayment 3% subvention)', 'No collateral security required for loans up to ₹1.6 Lakh'],
        howToApply: ['Fill KCC application form at your local bank branch or PM-KISAN portal']
      },
      hi: {
        whatIsIt: 'खेती के दौरान किसी भी समय पैसे निकालने के लिए कम ब्याज वाला विशेष किसान क्रेडिट कार्ड।',
        whoGetsIt: 'व्यक्तिगत किसान, बटाईदार और पशुपालक।',
        keyBenefits: ['समय पर भुगतान करने पर केवल 4% ब्याज', '₹1.60 लाख तक बिना किसी गारंटी के लोन'],
        howToApply: ['अपनी नजदीकी बैंक शाखा में KCC फॉर्म भरें']
      },
      ta: { whatIsIt: 'விவசாயிகளுக்கு குறைந்த வட்டியில் கடன் வழங்கும் கார்டு திட்டம்.', whoGetsIt: 'அனைத்து விவசாயிகள் மற்றும் மீனவர்கள்.', keyBenefits: ['₹1.60 லட்சம் வரை பிணையற்ற கடன்'], howToApply: ['வங்கிக் கிளையில் KCC படிவம் சமர்ப்பிக்கவும்'] },
      te: { whatIsIt: 'రైతులకు తక్కువ వడ్డీకే రుణం ఇచ్చే క్రెడిట్ కార్డ్ పథకం.', whoGetsIt: 'రైతులు మరియు పశుపోషకులు.', keyBenefits: ['4% వడ్డీకే ₹3 లక్షల వరకు రుణం'], howToApply: ['మీ బ్యాంకు శాఖలో KCC ఫారమ్ పూర్తి చేయండి'] },
      mr: { whatIsIt: 'कमी व्याजात कर्ज देणारे किसान क्रेडिट कार्ड.', whoGetsIt: 'सर्व शेतकरी.', keyBenefits: ['वेळेवर परतफेडीवर फक्त ४% व्याज'], howToApply: ['बँकेत जाऊन KCC अर्ज भरा'] },
      bn: { whatIsIt: 'কৃষকদের জন্য কম সুদে ব্যাংক ঋণের ক্রেডিট কার্ড।', whoGetsIt: 'কৃষক ও মৎস্যজীবীরা।', keyBenefits: ['মাত্র ৪% সুদে ৩ লাখ টাকা ঋণ'], howToApply: ['ব্যাংক শাখায় KCC আবেদন করুন'] },
      gu: { whatIsIt: 'ઓછા વ્યાજે બેંક ધિરાણ આપતું કિસાન કાર્ડ.', whoGetsIt: 'તમામ ખેડૂતો.', keyBenefits: ['સમયસર ચૂકવણી પર માત્ર 4% વ્યાજ'], howToApply: ['બેંક શાખામાંથી KCC ફોર્મ ભરો'] },
      kn: { whatIsIt: 'ರೈತರಿಗೆ ಕಡಿಮೆ ಬಡ್ಡಿಯಲ್ಲಿ ಬ್ಯಾಂಕ್ ಸಾಲ ನೀಡುವ ಕಾರ್ಡ್.', whoGetsIt: 'ಎಲ್ಲಾ ರೈತರು.', keyBenefits: ['ಸಮಯಕ್ಕೆ ಮರುಪಾವತಿಸಿದರೆ 4% ಬಡ್ಡಿ'], howToApply: ['ಬ್ಯಾಂಕ್‌ನಲ್ಲಿ KCC ಅರ್ಜಿ ಸಲ್ಲಿಸಿ'] }
    },
    officialGazetteExcerpt: 'RBI/2018-19/112: Under the KCC Scheme, short term crop loans up to ₹3 lakh are provided at 7% p.a., with an additional 3% Interest Subvention for prompt payee farmers, reducing the effective interest rate to 4% p.a.'
  },
  {
    id: 'pm-kusum-solar',
    category: 'Agriculture',
    department: 'Ministry of New and Renewable Energy',
    ministry: 'Ministry of New and Renewable Energy',
    targetGroup: ['Farmers', 'Panchayats', 'Water User Associations'],
    maxBenefit: '60% Subsidy on Solar Agriculture Water Pumps',
    benefitType: 'Subsidized Credit',
    minAge: 18,
    maxAge: 75,
    genderEligibility: 'All',
    allowedStates: ['All'],
    occupationFilter: ['Farmer'],
    processingTimeDays: 30,
    helplineNumber: '1800-180-3333',
    officialPortalUrl: 'https://pmkusum.mnre.gov.in',
    requiredDocuments: ['Aadhaar Card', 'Land Ownership Record', 'Bank Passbook', 'Electricity Bill / Pump Declaration'],
    title: {
      en: 'PM-KUSUM Scheme (Solar Agriculture Pump Subsidy)',
      hi: 'पीएम-कुसुम योजना (सोलर कृषि पंप सब्सिडी)',
      ta: 'பிரதம மந்திரி குசும் சூரிய மின்சார பம்ப் திட்டம்',
      te: 'పిఎం-కుసుమ్ (సోలార్ పంప్ సెట్ల సబ్సిడీ)',
      mr: 'पीएम-कुसुम सौर कृषी पंप योजना',
      bn: 'পিএম-কুসুম সেচ সোলার পাম্প প্রকল্প',
      gu: 'પીએમ-કુસુમ સોલાર પંપ યોજના',
      kn: 'ಪಿಎಂ-ಕುಸುಮ್ ಸೌರ ನೀರಾವರಿ ಪಂಪ್ ಯೋಜನೆ'
    },
    shortDescription: {
      en: 'Provides 60% government subsidy for installing solar-powered agricultural irrigation pumps, replacing diesel pumps and reducing electricity bills.',
      hi: 'डीजल पंपों को बदलकर सौर ऊर्जा से चलने वाले कृषि सिंचाई पंप लगाने के लिए 60% सरकारी सब्सिडी प्रदान करता है।',
      ta: 'டீசல் பம்புகளுக்கு பதிலாக சூரிய சக்தியால் இயங்கும் விவசாய பாசன பம்புகளை அமைக்க 60% அரசு மானியம்.',
      te: 'వ్యవసాయానికి సోలార్ పంపుసెట్లు అమర్చుకోవడానికి 60% ప్రభుత్వ సబ్సిడీ ఇచ్చే పథకం.',
      mr: 'सौर ऊर्जेवर चालणारे शेती पंप बसवण्यासाठी ६०% सरकारी अनुदान.',
      bn: 'সোলার কৃষি সেচ পাম্প বসানোর জন্য ৬০% সরকারি ভতুর্কি।',
      gu: 'સોલાર એગ્રીકલ્ચર પંપ સ્થાપવા માટે 60% સરકારી સબસિડી.',
      kn: 'ಸೌರ ನೀರಾವರಿ ಪಂಪ್ ಅಳವಡಿಸಲು 60% ಸರ್ಕಾರಿ ಸಬ್ಸಿಡಿ ನೀಡುವ ಯೋಜನೆ.'
    },
    simplifiedExplanation: {
      en: {
        whatIsIt: 'Government subsidy program paying 60% of the cost to set up solar water pumps on farms.',
        whoGetsIt: 'Individual farmers, farmer groups, and cooperatives.',
        keyBenefits: ['Central & State Govts pay 60% cost; Bank loan covers 30%; Farmer pays only 10%', 'Generate extra income by selling surplus solar power to grid'],
        howToApply: ['Register on state renewable energy portal or pmkusum.mnre.gov.in']
      },
      hi: {
        whatIsIt: 'खेतों में सोलर पंप लगाने का 60% खर्च सरकार द्वारा देने की योजना।',
        whoGetsIt: 'किसान और किसान समूह।',
        keyBenefits: ['किसान को सिर्फ 10% लागत देनी होती है', 'अतिरिक्त बिजली डिस्कॉम को बेचकर कमाई करें'],
        howToApply: ['pmkusum.mnre.gov.in पर ऑनलाइन फॉर्म भरें']
      },
      ta: { whatIsIt: 'சூரிய மின்சார பம்ப் அமைக்க 60% மானியம் வழங்கும் திட்டம்.', whoGetsIt: 'அனைத்து விவசாயிகள்.', keyBenefits: ['விவசாயி 10% மட்டுமே செலுத்த வேண்டும்'], howToApply: ['மாநில புதுப்பிக்கத்தக்க எரிசக்தி போர்ட்டலில் விண்ணப்பிக்கவும்'] },
      te: { whatIsIt: 'చేలలో సోలార్ పంపుసెట్లకు 60% సబ్సిడీ ఇచ్చే పథకం.', whoGetsIt: 'రైతులందరూ.', keyBenefits: ['రైతు కేవలం 10% మాత్రమే చెల్లించాలి'], howToApply: ['pmkusum.mnre.gov.in లో నమోదు చేసుకోండి'] },
      mr: { whatIsIt: 'सोलर पंप बसवण्यासाठी ६०% अनुदान देणारी योजना.', whoGetsIt: 'शेतकरी.', keyBenefits: ['शेतकऱ्याला फक्त १०% रक्कम भरावी लागते'], howToApply: ['राज्य सरकारच्या सोलर पोर्टलवर अर्ज करा'] },
      bn: { whatIsIt: 'সোলার সেচ পাম্পের জন্য ৬০% সরকারি ভতুর্কি।', whoGetsIt: 'কৃষক।', keyBenefits: ['কৃষককে দিতে হয় মাত্র ১০% টাকা'], howToApply: ['অনলাইনে পোর্টালে আবেদন করুন'] },
      gu: { whatIsIt: 'સોલાર પંપ સેટ માટે 60% સબસિડી આપતી યોજના.', whoGetsIt: 'ખેડૂતો.', keyBenefits: ['ખેડૂતે માત્ર 10% ખર્ચ કરવાનો રહે છે'], howToApply: ['pmkusum.mnre.gov.in પર નોંધણી કરાવો'] },
      kn: { whatIsIt: 'ಸೌರ ಪಂಪ್ ಅಳವಡಿಕೆಗೆ 60% ಸರ್ಕಾರಿ ಸಬ್ಸಿಡಿ.', whoGetsIt: 'ರೈತರು.', keyBenefits: ['ರೈತರು ಕೇವಲ 10% ಪಾವತಿಸಬೇಕು'], howToApply: ['ರಾಜ್ಯ ಸೌರ ಶಕ್ತಿ ಪೋರ್ಟಲ್‌ನಲ್ಲಿ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ'] }
    },
    officialGazetteExcerpt: 'MNRE Order: PM-KUSUM Component-B provides 30% Central Financial Assistance (CFA) and 30% State Govt subsidy for installation of standalone Off-Grid Solar Agriculture Pumps up to 7.5 HP.'
  },

  // --- HEALTHCARE & MEDICAL (6 SCHEMES) ---
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
    requiredDocuments: ['Aadhaar Card or Ration Card', 'Proof of Identity / SECC 2011 Data Inclusion', 'Mobile Number'],
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
        whatIsIt: 'World\'s largest health insurance offering cashless treatment up to ₹5 Lakh at government & private hospitals.',
        whoGetsIt: 'SECC database families, Ration card holders, and ALL senior citizens aged 70+ (regardless of income).',
        keyBenefits: ['₹5 Lakh free medical insurance every year per family', '100% Cashless treatment using Ayushman Card'],
        howToApply: ['Check eligibility on pmjay.gov.in or visit any empaneled hospital/CSC center']
      },
      hi: {
        whatIsIt: 'किसी भी सरकारी या निजी अस्पताल में ₹5 लाख तक का मुफ्त कैशलेस इलाज देने वाली योजना।',
        whoGetsIt: 'राशन कार्ड धारक, गरीब परिवार और 70+ आयु के वरिष्ठ नागरिक।',
        keyBenefits: ['प्रति परिवार ₹5 लाख का मुफ्त इलाज', 'आयुष्मान कार्ड दिखाते ही 100% कैशलेस'],
        howToApply: ['pmjay.gov.in पर जाएं या नजदीकी अस्पताल/सीएससी केंद्र जाएं']
      },
      ta: { whatIsIt: 'அரசு மற்றும் தனியார் மருத்துவமனைகளில் ₹5 லட்சம் வரை இலவச சிகிச்சை அளிக்கும் திட்டம்.', whoGetsIt: 'ரேஷன் கார்டு வைத்திருப்பவர்கள் மற்றும் 70 வயதிற்கு மேற்பட்ட மூத்த குடிமக்கள்.', keyBenefits: ['ஆண்டுக்கு ₹5 லட்சம் இலவச மருத்துவக் காப்பீடு'], howToApply: ['ஆதார் அல்லது ரேஷன் கார்டுடன் அருகில் உள்ள மருத்துவமனையை அணுகவும்'] },
      te: { whatIsIt: 'ప్రభుత్వ మరియు ప్రైవేట్ ఆసుపత్రులలో ₹5 లక్షల ఉచిత వైద్య చికిత్స అందించే పథకం.', whoGetsIt: 'రేషన్ కార్డు దారులు మరియు 70 ఏళ్లు పైబడిన జ్యేష్ఠ పౌరులు.', keyBenefits: ['కుటుంబానికి ఏడాదికి ₹5 లక్షల ఉచిత చికిత్స'], howToApply: ['ఆధார் లేదా రేషన్ కార్డుతో దగ్గరలోని ఆసుపత్రిని సంప్రదించండి'] },
      mr: { whatIsIt: 'रुग्णालयात ₹५ लाखांपर्यंत मोफत उपचाराची सुविधा.', whoGetsIt: 'रेशन कार्डधारक आणि ७०+ वयाचे ज्येष्ठ नागरिक.', keyBenefits: ['वार्षिक ₹५ लाख मोफत आरोग्य विमा'], howToApply: ['आधार कार्ड घेऊन सरकारी दवाखान्यात जा'] },
      bn: { whatIsIt: 'যেকোনো হাসপাতালে ৫ লাখ টাকা পর্যন্ত বিনামূল্যে ক্যাশলেস চিকিৎসা।', whoGetsIt: 'রেশন কার্ডধারী এবং ৭০ বছরের উর্ধ্বে জ্যেষ্ঠ নাগরিকগণ।', keyBenefits: ['প্রতি বছর ৫ লাখ টাকা পর্যন্ত বিনামূল্যে চিকিৎসা'], howToApply: ['আধার ও রেশন কার্ড নিয়ে হাসপাতালে যোগ দিন'] },
      gu: { whatIsIt: 'સરકારી અને ખાનગી હોસ્પિટલોમાં ₹5 લાખ સુધીની મફત સારવાર આપતી યોજના.', whoGetsIt: 'રાશન કાર્ડ ધારકો અને 70+ વયના નાગરિકો.', keyBenefits: ['દર વર્ષે ₹5 લાખનું મફત હેલ્થ કવર'], howToApply: ['આધાર કાર્ડ સાથે નજીકની હોસ્પિટલનો સંપર્ક કરો'] },
      kn: { whatIsIt: 'ಖಾಸಗಿ ಮತ್ತು ಸರ್ಕಾರಿ ಆಸ್ಪತ್ರೆಗಳಲ್ಲಿ ₹5 ಲಕ್ಷದವರೆಗೆ ಉಚಿತ ಚಿಕಿತ್ಸೆ ನೀಡುವ ಯೋಜನೆ.', whoGetsIt: 'ರೇಷನ್ ಕಾರ್ಡ್ ಹೊಂದಿರುವವರು ಮತ್ತು 70+ ವಯಸ್ಸಿನವರು.', keyBenefits: ['ವರ್ಷಕ್ಕೆ ₹5 ಲಕ್ಷ ಉಚಿತ ವೈದ್ಯಕೀಯ ವಿಮೆ'], howToApply: ['ಆಧಾರ್ ಅಥವಾ ರೇಷನ್ ಕಾರ್ಡ್‌ನೊಂದಿಗೆ ಆಸ್ಪತ್ರೆಗೆ ಭೇಟಿ ನೀಡಿ'] }
    },
    officialGazetteExcerpt: 'AB PM-JAY provides health cover of ₹5,00,000 per family per year for secondary and tertiary care hospitalization across public and private empaneled hospitals in India.'
  },
  {
    id: 'pm-janaushadhi',
    category: 'Healthcare',
    department: 'Department of Pharmaceuticals',
    ministry: 'Ministry of Chemicals and Fertilizers',
    targetGroup: ['All Citizens', 'Patients', 'Senior Citizens'],
    maxBenefit: '50% to 90% Discount on Generic Medicines',
    benefitType: 'Direct Transfer',
    minAge: 0,
    maxAge: 100,
    genderEligibility: 'All',
    allowedStates: ['All'],
    isPopular: true,
    processingTimeDays: 1,
    helplineNumber: '1800-180-8080',
    officialPortalUrl: 'https://janaushadhi.gov.in',
    requiredDocuments: ['Doctor Prescription'],
    title: {
      en: 'PM Bharatiya Janaushadhi Pariyojana (Generic Medicines)',
      hi: 'पीएम भारतीय जनऔषधि परियोजना (सस्ती दवाइयां)',
      ta: 'பிரதம மந்திரி ஜனஅவுஷதி திட்டம் (மலிவு விலை மருந்துகள்)',
      te: 'పిఎం జనౌషధి (తక్కువ ధరల మందుల కేంద్రాలు)',
      mr: 'पीएम जनऔषधी योजना (स्वस्त औषधे)',
      bn: 'পিএম জনৌষধি প্রকল্প (সুলভ মূল্যের ওষুধ)',
      gu: 'પીએમ જનઔષધિ યોજના (સસ્તા દરે દવાઓ)',
      kn: 'ಪಿಎಂ ಜನೌಷಧಿ ಯೋಜನೆ (ಅಗ್ಗದ ದರದ ಗಿಡಮೂಲಿಕೆ/ಔಷಧಿಗಳು)'
    },
    shortDescription: {
      en: 'Provides high-quality generic medicines, surgical items, and nutraceuticals at 50% to 90% lower prices than branded medicines through Kendra stores.',
      hi: 'जनऔषधि केंद्रों के माध्यम से ब्रांडेड दवाओं की तुलना में 50% से 90% कम कीमत पर उच्च गुणवत्ता वाली जेनेरिक दवाएं प्रदान करता है।',
      ta: 'பிராண்டட் மருந்துகளை விட 50% முதல் 90% குறைந்த விலையில் தரமான ஜெனரிக் மருந்துகளை வழங்கும் அரசு திட்டம்.',
      te: 'బ్రాండెడ్ మందుల కంటే 50% నుండి 90% తక్కువ ధరకే నాణ్యమైన మందులను అందించే ప్రభుత్వ కేంద్రాల పథకం.',
      mr: 'ब्रांडेड औषधांपेक्षा ५०% ते ९०% कमी किमतीत दर्जेदार जेनेरिक औषधे देणारे केंद्र.',
      bn: 'ব্র্যান্ডেড ওষুধের চেয়ে ৫০% থেকে ৯০% কম দামে উচ্চমানের জেনরিক ওষুধ সরবরাহের সরকারি কেন্দ্র।',
      gu: 'બ્રાન્ડેડ દવાઓ કરતાં 50% થી 90% સસ્તા દરે ઉચ્ચ ગુણવત્તાવાળી જેનરિક દવાઓ.',
      kn: 'ಬ್ರ್ಯಾಂಡೆಡ್ ಔಷಧಗಳಿಗಿಂತ 50% ದಿಂದ 90% ಕಡಿಮೆ ಬೆಲೆಗೆ ಗುಣಮಟ್ಟದ ಜನರಿಕ್ ಔಷಧಿ ನೀಡುವ ಕೇಂದ್ರಗಳು.'
    },
    simplifiedExplanation: {
      en: {
        whatIsIt: 'Government generic pharmacy stores selling the exact same medicine formulas at 50-90% cheaper prices.',
        whoGetsIt: 'Open to ALL citizens across India.',
        keyBenefits: ['Save 50% to 90% on monthly medical bills for diabetes, BP, heart, and cancer care', 'Over 1,800 medicines and 290 surgical items available'],
        howToApply: ['Walk into any Jan Aushadhi Kendra with a doctor\'s prescription']
      },
      hi: {
        whatIsIt: 'सरकारी मेडिकल स्टोर जहां ब्रांडेड दवाओं जैसी ही दवाइयां 50 से 90% तक सस्ती मिलती हैं।',
        whoGetsIt: 'भारत के सभी नागरिक।',
        keyBenefits: ['दवाइयों के मासिक बिल पर 50% से 90% की सीधी बचत', 'शुगर, बीपी और दिल की दवाएं उपलब्ध'],
        howToApply: ['डॉक्टर के पर्चे के साथ निकटतम जनऔषधि केंद्र पर जाएं']
      },
      ta: { whatIsIt: '50-90% மலிவு விலையில் மருந்துகள் வழங்கும் அரசு மருந்தகங்கள்.', whoGetsIt: 'அனைத்து குடிமக்களும்.', keyBenefits: ['மருத்துவ செலவில் 50-90% சேமிப்பு'], howToApply: ['அருகிலுள்ள ஜனஅவுஷதி மையத்திற்கு செல்லவும்'] },
      te: { whatIsIt: '50-90% తక్కువ ధరకే నాణ్యమైన మందులు ఇచ్చే ప్రభుత్వ మందుల దుకాణాలు.', whoGetsIt: 'పౌరులందరూ.', keyBenefits: ['నెలకు మందుల ఖర్చులో భారీ పొదుపు'], howToApply: ['డాక్టర్ ప్రిస్క్రిప్షన్‌తో దగ్గరలోని కేంద్రానికి వెళ్లండి'] },
      mr: { whatIsIt: '५० ते ९० टक्के स्वस्त दरात औषधे देणारे सरकारी मेडिकल.', whoGetsIt: 'सर्व नागरिक.', keyBenefits: ['वैद्यकीय बिलावर मोठी बचत'], howToApply: ['जवळच्या जनऔषधी केंद्रात जा'] },
      bn: { whatIsIt: '৫০-৯০% সস্তায় ওষুধ বিক্রির সরকারি দোকান।', whoGetsIt: 'সকল নাগরিক।', keyBenefits: ['মাসিক ওষুধের খরচে বিশাল সাশ্রয়'], howToApply: ['নিকটস্থ জনৌষধি কেন্দ্রে যান'] },
      gu: { whatIsIt: '50 થી 90% સસ્તી જેનરિક દવાઓ આપતા સરકારી સ્ટોર્સ.', whoGetsIt: 'તમામ નાગરિકો.', keyBenefits: ['દવાઓના બિલ પર 50% થી 90% ની બચત'], howToApply: ['નજીકના જન ઔષધિ કેન્દ્રની મુલાકાત લો'] },
      kn: { whatIsIt: '50-90% ಸಸ್ತೆಯಲ್ಲಿ ಔಷಧಿ ನೀಡುವ ಸರ್ಕಾರಿ ಮಳಿಗೆಗಳು.', whoGetsIt: 'ಎಲ್ಲಾ ನಾಗರಿಕರು.', keyBenefits: ['ಮಾಸಿಕ ಔಷಧ ವೆಚ್ಚದಲ್ಲಿ ಅಪಾರ ಉಳಿತಾಯ'], howToApply: ['ಜನೌಷಧಿ ಕೇಂದ್ರಕ್ಕೆ ಭೇಟಿ ನೀಡಿ'] }
    },
    officialGazetteExcerpt: 'PMBJP Guidelines: Pharmaceuticals & Medical Devices Bureau of India (PMBI) mandates sale of quality generic medicines at prices up to 50%-90% lower than prevailing market brand prices.'
  },

  // --- EDUCATION & SCHOLARSHIPS (8 SCHEMES) ---
  {
    id: 'nsp-central-scholarship',
    category: 'Education',
    department: 'Department of Higher Education',
    ministry: 'Ministry of Education',
    targetGroup: ['Students', 'College Undergraduates', 'Postgraduates'],
    maxBenefit: '₹12,000 to ₹20,000 / year Scholarship',
    benefitType: 'Direct Transfer',
    minAge: 16,
    maxAge: 25,
    genderEligibility: 'All',
    maxIncomeLimit: 450000,
    allowedStates: ['All'],
    occupationFilter: ['Student'],
    isPopular: true,
    processingTimeDays: 20,
    helplineNumber: '0120-6619540',
    officialPortalUrl: 'https://scholarships.gov.in',
    requiredDocuments: ['Aadhaar Card', 'Class 10th & 12th Marksheet', 'Income Certificate', 'College Bonafide Certificate', 'Bank Passbook'],
    title: {
      en: 'NSP Central Sector Scholarship Scheme',
      hi: 'राष्ट्रीय छात्रवृत्ति पोर्टल (एनएसपी) केंद्रीय छात्रवृत्ति',
      ta: 'தேசிய கல்வி உதவித்தொகை திட்டம் (NSP)',
      te: 'జాతీయ స్కాలర్‌షిప్ పోర్టల్ (NSP) విద్యార్థి వేతనం',
      mr: 'राष्ट्रीय शिष्यवृत्ती योजना (NSP)',
      bn: 'জাতীয় স্কলারশিপ পোর্টাল (NSP) বৃত্তি প্রকল্প',
      gu: 'રાષ્ટ્રીય શિષ્યવૃત્તિ યોજના (NSP)',
      kn: 'ರಾಷ್ಟ್ರೀಯ ವಿದ್ಯಾರ್ಥಿವೇತನ ಪೋರ್ಟಲ್ (NSP)'
    },
    shortDescription: {
      en: 'Financial support of ₹12,000 to ₹20,000 per year for meritorious students from low-income families pursuing regular college and university degree courses.',
      hi: 'नियमित कॉलेज और विश्वविद्यालय डिग्री पाठ्यक्रमों में अध्ययनरत कम आय वाले परिवारों के मेधावी छात्रों को ₹12,000 से ₹20,000 प्रति वर्ष की वित्तीय सहायता।',
      ta: 'கல்லூரி மற்றும் பல்கலைக்கழகங்களில் பயிலும் ஏழை திறமைமிகு மாணவர்களுக்கு ஆண்டுக்கு ₹12,000 முதல் ₹20,000 வரை கல்வி உதவித்தொகை.',
      te: 'డిగ్రీ మరియు పిజి చదువుతున్న పేద ప్రతిభావంతులైన విద్యార్థులకు ఏడాదికి ₹12,000 నుండి ₹20,000 వరకు స్కాలర్‌షిప్.',
      mr: 'महाविद्यालयात शिकणाऱ्या हुशार व गरजू विद्यार्थ्यांसाठी वर्षाला ₹१२,००० ते ₹२०,००० शिष्यवृत्ती.',
      bn: 'কলেজ ও বিশ্ববিদ্যালয়ের মেধাবী শিক্ষার্থীদের জন্য বছরে ১২,০০০ থেকে ২০,০০০ টাকার বৃত্তি।',
      gu: 'કોલેજમાં અભ્યાસ કરતા તેજસ્વી વિદ્યાર્થીઓને વાર્ષિક ₹12,000 થી ₹20,000 ની શિષ્યવૃત્તિ.',
      kn: 'ಕಾಲೇಜು ಶಿಕ್ಷಣ ಪಡೆಯುತ್ತಿರುವ ಬಡ ಪ್ರತಿಭಾವಂತ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ವರ್ಷಕ್ಕೆ ₹12,000 ದಿಂದ ₹20,000 ವಿದ್ಯಾರ್ಥಿವೇತನ.'
    },
    simplifiedExplanation: {
      en: {
        whatIsIt: 'Government scholarship paying money directly into college students\' bank accounts to cover tuition & books.',
        whoGetsIt: 'Students scoring above 80th percentile in 12th class exams with family income below ₹4.5 Lakh.',
        keyBenefits: ['Graduation: ₹12,000/year for first 3 years', 'Post-Graduation: ₹20,000/year for 2 years', 'Direct Bank Account Transfer'],
        howToApply: ['Apply on National Scholarship Portal (scholarships.gov.in) with Class 12 marksheet']
      },
      hi: {
        whatIsIt: 'कॉलेज और यूनिवर्सिटी में पढ़ने वाले गरीब मेधावी छात्रों को हर साल पैसे देने वाली सरकारी योजना।',
        whoGetsIt: '12वीं में 80% से अधिक अंक पाने वाले छात्र जिनकी पारिवारिक आय ₹4.5 लाख से कम है।',
        keyBenefits: ['ग्रेजुएशन के दौरान ₹12,000 प्रति वर्ष', 'पोस्ट ग्रेजुएशन के दौरान ₹20,000 प्रति वर्ष'],
        howToApply: ['scholarships.gov.in पोर्टल पर 12वीं की मार्कशीट के साथ फॉर्म भरें']
      },
      ta: { whatIsIt: 'கல்லூரி மாணவர்களுக்கு ஆண்டுதோறும் நிதி உதவி அளிக்கும் திட்டம்.', whoGetsIt: '12 ஆம் வகுப்பில் 80% மேல் மதிப்பெண் பெற்ற மாணவர்கள்.', keyBenefits: ['ஆண்டுக்கு ₹12,000 முதல் ₹20,000 வரை உதவித் தொகை'], howToApply: ['scholarships.gov.in தளத்தில் விண்ணப்பிக்கவும்'] },
      te: { whatIsIt: 'కాలేజీ చదువుకునే పేద ప్రతిభావంతులైన విద్యార్థులకు నిధులు ఇచ్చే స్కాలర్‌షిప్.', whoGetsIt: '12వ తరగతిలో 80% పైగా మార్కులు సాధించిన విద్యార్థులు.', keyBenefits: ['ఏడాదికి ₹12,000 నుండి ₹20,000 బ్యాంక్ జమ'], howToApply: ['scholarships.gov.in లో ఆన్‌లైన్ ఫారమ్ నింపండి'] },
      mr: { whatIsIt: 'कॉलेजच्या विद्यार्थ्यांना दरवर्षी स्कॉलरशिप देणारी सरकारी योजना.', whoGetsIt: '१२ वीत ८०% पेक्षा जास्त गुण मिळालेले विद्यार्थी.', keyBenefits: ['वार्षिक ₹१२,००० ते ₹२०,००० मदत'], howToApply: ['scholarships.gov.in वर अर्ज करा'] },
      bn: { whatIsIt: 'কলেজ পড়ুয়া মেধাবী শিক্ষার্থীদের বার্ষিক সরকারি বৃত্তি।', whoGetsIt: 'দ্বাদশ শ্রেণীতে ৮০% এর বেশি নম্বর পাওয়া শিক্ষার্থীরা।', keyBenefits: ['বছরে ১২,০০০ থেকে ২০,০০০ টাকা স্কলারশিপ'], howToApply: ['scholarships.gov.in পোর্টালে ফর্ম জমা দিন'] },
      gu: { whatIsIt: 'કોલેજ વિદ્યાર્થીઓ માટે વાર્ષિક સરકારી શિષ્યવૃત્તિ.', whoGetsIt: '12 મા ધોરણમાં 80% થી વધુ ગુણ મેળવનાર વિદ્યાર્થીઓ.', keyBenefits: ['દર વર્ષે ₹12,000 થી ₹20,000 ની સહાય'], howToApply: ['scholarships.gov.in પર ઓનલાઈન ફોર્મ ભરો'] },
      kn: { whatIsIt: 'ಕಾಲೇಜು ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ವಾರ್ಷಿಕ ಸರ್ಕಾರಿ ವಿದ್ಯಾರ್ಥಿವೇತನ.', whoGetsIt: '12ನೇ ತರಗತಿಯಲ್ಲಿ 80% ಗಿಂತ ಹೆಚ್ಚು ಅಂಕ ಪಡೆದ ವಿದ್ಯಾರ್ಥಿಗಳು.', keyBenefits: ['ವರ್ಷಕ್ಕೆ ₹12,000 ದಿಂದ ₹20,000 ನೇರ ಬ್ಯಾಂಕ್ ಜಮೆ'], howToApply: ['scholarships.gov.in ಪೋರ್ಟಲ್‌ನಲ್ಲಿ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ'] }
    },
    officialGazetteExcerpt: 'Central Sector Scheme of Scholarship for College and University Students guidelines: 82,000 fresh scholarships awarded per annum (41,000 for boys and 41,000 for girls) for pursuing higher studies.'
  },
  {
    id: 'pm-vidya-lakshmi',
    category: 'Education',
    department: 'Department of Higher Education & IBA',
    ministry: 'Ministry of Education',
    targetGroup: ['Students', 'Engineering & Medical Aspirants', 'Study Abroad'],
    maxBenefit: 'Collateral-Free Education Loan up to ₹7.5 Lakh',
    benefitType: 'Subsidized Credit',
    minAge: 16,
    maxAge: 35,
    genderEligibility: 'All',
    allowedStates: ['All'],
    occupationFilter: ['Student'],
    processingTimeDays: 15,
    helplineNumber: '1800-180-1111',
    officialPortalUrl: 'https://www.vidyalakshmi.co.in',
    requiredDocuments: ['Aadhaar Card', 'Admission Offer Letter & Fee Structure', 'Class 10th/12th/Graduation Marksheets', 'Parent Income Proof'],
    title: {
      en: 'PM Vidya Lakshmi Education Loan Scheme',
      hi: 'पीएम विद्या लक्ष्मी शिक्षा ऋण योजना',
      ta: 'பிரதம மந்திரி வித்யா லக்ஷ்மி கல்வி கடன் திட்டம்',
      te: 'పిఎం విద్యా లక్ష్మి విద్యా రుణం',
      mr: 'पीएम विद्या लक्ष्मी शैक्षणिक कर्ज योजना',
      bn: 'পিএম বিদ্যা লক্ষ্মী শিক্ষা ঋণ প্রকল্প',
      gu: 'પીએમ વિદ્યા લક્ષ્મી એજ્યુકેશન લોન યોજના',
      kn: 'ಪಿಎಂ ವಿದ್ಯಾ ಲಕ್ಷ್ಮಿ ಶಿಕ್ಷಣ ಸಾಲ ಯೋಜನೆ'
    },
    shortDescription: {
      en: 'Single-window digital platform providing collateral-free education loans up to ₹7.5 Lakh with full interest subsidy during moratorium period for higher studies.',
      hi: 'उच्च शिक्षा के लिए अध्ययन अवधि के दौरान पूर्ण ब्याज सब्सिडी के साथ ₹7.5 लाख तक का बिना गारंटी का शिक्षा ऋण प्रदान करने वाला सिंगल-विंडो पोर्टल।',
      ta: 'உயர் கல்விக்காக பிணையற்ற ₹7.5 லட்சம் வரை கல்வி கடன் வழங்கும் ஒற்றை சாளர டிஜிட்டல் தளம்.',
      te: 'ఉన్నత చదువుల కోసం ఎటువంటి హామీ లేకుండా ₹7.5 లక్షల వరకు విద్యా రుణం అందించే పోర్టల్.',
      mr: 'उच्च शिक्षणासाठी विनातारण ₹७.५ लाखांपर्यंत शैक्षणिक कर्ज देणारे पोर्टल.',
      bn: 'উচ্চশিক্ষার জন্য কোনো গ্যারান্টি ছাড়াই ৭.৫ লাখ টাকা পর্যন্ত ব্যাংক শিক্ষা ঋণের পোর্টাল।',
      gu: 'ઉચ્ચ અભ્યાસ માટે ગેરેંટી વગર ₹7.5 લાખ સુધીની એજ્યુકેશન લોન આપતી યોજના.',
      kn: 'ಉನ್ನತ ಶಿಕ್ಷಣಕ್ಕಾಗಿ ಯಾವುದೇ ಭದ್ರತೆ ಇಲ್ಲದೆ ₹7.5 ಲಕ್ಷದವರೆಗೆ ಶಿಕ್ಷಣ ಸಾಲ ನೀಡುವ ಡಿಜಿಟಲ್ ಪೋರ್ಟಲ್.'
    },
    simplifiedExplanation: {
      en: {
        whatIsIt: 'Single government portal to apply to 40+ banks for low-interest education loans to pay tuition fees & hostel charges.',
        whoGetsIt: 'Students securing admission in higher education institutions in India or abroad.',
        keyBenefits: ['Loans up to ₹7.5 Lakh without third-party collateral/guarantee', 'Interest subsidy during study duration for low-income families'],
        howToApply: ['Register on Vidya Lakshmi Portal (vidyalakshmi.co.in) and upload admission letter']
      },
      hi: {
        whatIsIt: 'कॉलेज की फीस और हॉस्टल का खर्च उठाने के लिए 40 से अधिक बैंकों से बिना गारंटी लोन दिलाने वाला पोर्टल।',
        whoGetsIt: 'उच्च शिक्षा संस्थानों में दाखिला लेने वाले छात्र।',
        keyBenefits: ['₹7.5 लाख तक बिना किसी संपत्ति की गारंटी के लोन', 'पढ़ाई के दौरान ब्याज में छूट'],
        howToApply: ['vidyalakshmi.co.in पर रजिस्ट्रेशन करें और एडमिशन लेटर अपलोड करें']
      },
      ta: { whatIsIt: 'கல்லூரி கட்டணம் செலுத்த வங்கிக் கடன் வழங்கும் அரசு தளம்.', whoGetsIt: 'உயர்கல்வி படிக்கும் அனைத்து மாணவர்கள்.', keyBenefits: ['₹7.5 லட்சம் வரை பிணையற்ற கடன்'], howToApply: ['vidyalakshmi.co.in தளத்தில் விண்ணப்பிக்கவும்'] },
      te: { whatIsIt: 'కాలేజీ ఫీజులు చెల్లించడానికి బ్యాంకు విద్యా రుణం ఇచ్చే పోర్టల్.', whoGetsIt: 'ఉన్నత విద్య అభ్యసించే విద్యార్థులు.', keyBenefits: ['₹7.5 లక్షల వరకు షూరిటీ లేని రుణం'], howToApply: ['vidyalakshmi.co.in లో అడ్మిషన్ లెటర్‌తో దరఖాస్తు చేయండి'] },
      mr: { whatIsIt: 'कॉलेजच्या फीसाठी बँक एज्युकेशन लोन देणारे पोर्टल.', whoGetsIt: 'उच्च शिक्षण घेणारे विद्यार्थी.', keyBenefits: ['₹७.५ लाखांपर्यंत विनातारण कर्ज'], howToApply: ['vidyalakshmi.co.in वर नोंदणी करा'] },
      bn: { whatIsIt: 'কলেজের ফি দেওয়ার জন্য ব্যাংক শিক্ষা ঋণের সরকারি সুবিধা।', whoGetsIt: 'উচ্চশিক্ষায় ভর্তি হওয়া ছাত্রছাত্রী।', keyBenefits: ['৭.৫ লাখ টাকা পর্যন্ত জামানতহীন ঋণ'], howToApply: ['vidyalakshmi.co.in এ অ্যাডমিশন লেটার জমা দিন'] },
      gu: { whatIsIt: 'કોલેજ ફી ચૂકવવા બેંક લોન આપતું પોર્ટલ.', whoGetsIt: 'ઉચ્ચ શિક્ષણ લેતા વિદ્યાર્થીઓ.', keyBenefits: ['₹7.5 લાખ સુધીની ગેરંટી વગરની એજ્યુકેશન લોન'], howToApply: ['vidyalakshmi.co.in પર રજીસ્ટ્રેશન કરાવો'] },
      kn: { whatIsIt: 'ಉನ್ನತ ಶಿಕ್ಷಣದ ಫೀಸು ಪಾವತಿಸಲು ಬ್ಯಾಂಕ್ ಸಾಲ ನೀಡುವ ಪೋರ್ಟಲ್.', whoGetsIt: 'ಉನ್ನತ ಶಿಕ್ಷಣ ಪಡೆಯುವ ವಿದ್ಯಾರ್ಥಿಗಳು.', keyBenefits: ['₹7.5 ಲಕ್ಷದವರೆಗೆ ಜಾಮೀನು ರಹಿತ ಸಾಲ'], howToApply: ['vidyalakshmi.co.in ಪೋರ್ಟಲ್‌ನಲ್ಲಿ ನೋಂದಾಯಿಸಿ'] }
    },
    officialGazetteExcerpt: 'Vidya Lakshmi Portal Guidelines: Common Educational Loan Application Form (CELAF) enables students to view, apply and track education loan applications across member banks under IBA guidelines.'
  },

  // --- WOMEN & CHILD WELFARE (6 SCHEMES) ---
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
    requiredDocuments: ['Birth Certificate of Girl Child', 'Identity & Address Proof of Parent/Guardian (Aadhaar/PAN)', 'Passport size photos'],
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
        whatIsIt: 'Special post office savings deposit scheme offering 8.2% annual interest for girl children.',
        whoGetsIt: 'Parents/guardians of any girl child aged below 10 years.',
        keyBenefits: ['Highest government interest rate (8.2% p.a.)', 'Complete 100% Tax Exemption under Section 80C', 'Withdrawal allowed for higher studies at age 18'],
        howToApply: ['Visit any Post Office or nationalized bank with child\'s Birth Certificate']
      },
      hi: {
        whatIsIt: 'बेटी के उज्ज्वल भविष्य और पढ़ाई के लिए 8.2% ब्याज देने वाली सरकारी बचत योजना।',
        whoGetsIt: '10 वर्ष से कम उम्र की बेटियों के माता-पिता।',
        keyBenefits: ['सबसे अधिक 8.2% ब्याज दर', 'पूरी तरह से टैक्स-फ्री रिटर्न'],
        howToApply: ['पोस्ट ऑफिस या बैंक में जन्म प्रमाण पत्र देकर खाता खोलें']
      },
      ta: { whatIsIt: 'பெண் குழந்தைகளின் எதிர்கால படிப்புக்கான சிறந்த சேமிப்பு திட்டம்.', whoGetsIt: '10 வயதுக்கு உட்பட்ட பெண் குழந்தைகளின் பெற்றோர்கள்.', keyBenefits: ['ஆண்டுக்கு 8.2% அதிகபட்ச வட்டி'], howToApply: ['அஞ்சலகம் அல்லது வங்கியில் பிறப்புச் சான்றிதழுடன் சேரவும்'] },
      te: { whatIsIt: 'ఆడపిల్లల భవిష్యత్తు చదువుల కోసం అత్యధిక వడ్డీ ఇచ్చే సేవింగ్స్ పథకం.', whoGetsIt: '10 సంవత్సరాల లోపు ఆడపిల్లల తల్లిదండ్రులు.', keyBenefits: ['సంవత్సరానికి 8.2% వడ్డీ', 'పూర్తి పన్ను మినహాయింపు'], howToApply: ['తపాళా కార్యాలయం లేదా బ్యాంకులో ఖాతా తెరవండి'] },
      mr: { whatIsIt: 'मुलींच्या भविष्यासाठी पोस्टाची सर्वात जास्त व्याज देणारी बचत योजना.', whoGetsIt: '१० वर्षांखालील मुलींचे पालक.', keyBenefits: ['वार्षिक ८.२% सर्वाधिक व्याजदर'], howToApply: ['पोस्टात किंवा बँकेत जाऊन जन्म दाखल्यासह खाते उघडा'] },
      bn: { whatIsIt: 'মেয়েদের ভবিষ্যৎ শিক্ষার জন্য সর্বোচ্চ সুদের সরকারি সঞ্চয় প্রকল্প।', whoGetsIt: '১০ বছরের কম বয়সী বালিকাদের অভিভাবকগণ।', keyBenefits: ['বার্ষিক ৮.২% সুদের হার'], howToApply: ['ডাকঘর বা ব্যাংকে জন্ম সনদপত্র নিয়ে যান'] },
      gu: { whatIsIt: 'દીકરીના ભવિષ્ય માટે સહુથી વધુ વ્યાજ આપતી યોજના.', whoGetsIt: '૧૦ વર્ષથી નાની દીકરીના માતા-પિતા.', keyBenefits: ['વાર્ષિક 8.2% ઊંચો વ્યાજદર'], howToApply: ['પોસ્ટ ઓફિસમાં જન્મના દાખલા સાથે ખાતું ખોલાવો'] },
      kn: { whatIsIt: 'ಹೆಣ್ಣುಮಕ್ಕಳ ಭವಿಷ್ಯಕ್ಕಾಗಿ ಅತ್ಯಧಿಕ ಬಡ್ಡಿ ನೀಡುವ ಉಳಿತಾಯ ಯೋಜನೆ.', whoGetsIt: '10 ವರ್ಷದೊಳಗಿನ ಹೆಣ್ಣುಮಕ್ಕಳ ಪೋಷಕರು.', keyBenefits: ['ವರ್ಷಕ್ಕೆ 8.2% ಅತ್ಯಧಿಕ ಬಡ್ಡಿ ದರ'], howToApply: ['ಅಂಚೆ ಕಚೇರಿಯಲ್ಲಿ ಜನನ ಪ್ರಮಾಣಪತ್ರದೊಂದಿಗೆ ಖಾತೆ ತೆರೆಯಿರಿ'] }
    },
    officialGazetteExcerpt: 'G.S.R. 914(E): Sukanya Samriddhi Account Rules state that an account may be opened by guardians for a girl child under 10 years with notified quarterly compounding interest of 8.2% p.a.'
  },
  {
    id: 'lakhpati-didi',
    category: 'Women & Child',
    department: 'Deendayal Antyodaya Yojana - NRLM',
    ministry: 'Ministry of Rural Development',
    targetGroup: ['Women SHG Members', 'Rural Entrepreneurs', 'Self Help Groups'],
    maxBenefit: 'Skill Training + Interest Subvention Loan',
    benefitType: 'Skill Training',
    minAge: 18,
    maxAge: 60,
    genderEligibility: 'Female',
    allowedStates: ['All'],
    isPopular: true,
    processingTimeDays: 14,
    helplineNumber: '1800-110-444',
    officialPortalUrl: 'https://nrlm.gov.in',
    requiredDocuments: ['Aadhaar Card', 'SHG Membership Passbook', 'Bank Account Details', 'Residence Proof'],
    title: {
      en: 'Lakhpati Didi Scheme (Women SHG Empowerment)',
      hi: 'लखपति दीदी योजना (महिला स्वयं सहायता समूह)',
      ta: 'லத்பதி திதி திட்டம் (மகளிர் சுயஉதவிக்குழு)',
      te: 'లఖ్‌పతి దీదీ పథకం (మహిళా స్వయం సహాయక సంఘాలు)',
      mr: 'लखपती दिदी योजना',
      bn: 'লক্ষপতি দিদি প্রকল্প (মহিলা স্বনির্ভর গোষ্ঠী)',
      gu: 'લખપતિ દીદી યોજના',
      kn: 'ಲಖ್‌ಪತಿ ದೀದಿ ಯೋಜನೆ (ಮಹಿಳಾ ಸ್ವಸಹಾಯ ಸಂಘ)'
    },
    shortDescription: {
      en: 'Empowers rural Self-Help Group (SHG) women through vocational skill training in tailoring, LED bulb making, drone operation, and micro-business credit to earn at least ₹1 Lakh per year.',
      hi: 'ग्रामीण स्वयं सहायता समूह (SHG) महिलाओं को सिलाई, ड्रोन संचालन और सूक्ष्म व्यवसाय में कौशल प्रशिक्षण देकर प्रति वर्ष कम से कम ₹1 लाख कमाने के योग्य बनाना।',
      ta: 'கிராமப்புற சுயஉதவிக்குழு பெண்களின் ஆண்டு வருமானத்தை ₹1 லட்சமாக உயர்த்த தையல், ட்ரோன் இயக்கம் மற்றும் கைவினைப் பயிற்சி அளிக்கும் திட்டம்.',
      te: 'గ్రామీణ స్వయం సహాయక సంఘాల మహిళలు ఏడాదికి కనీసం ₹1 లక్ష సంపాదించేలా కుట్టుపని, డ్రోన్ ఆపరేటింగ్ మరియు వ్యాపార నైపుణ్య శిక్షణ.',
      mr: 'महिला बचत गटातील महिलांना वर्षाला किमान ₹१ लाख उत्पन्न मिळवून देण्यासाठी कौशल्य व व्यवसाय प्रशिक्षण.',
      bn: 'গ্রামীন স্বনির্ভর গোষ্ঠীর নারীদের বছরে অন্তত ১ লাখ টাকা উপার্জনের জন্য ভোকেশনাল ট্রেনিং ও ঋণ সুবিধা।',
      gu: 'મહિલા બચત જૂથોની બહેનોને વાર્ષિક ઓછામાં ઓછું ₹1 લાખ કમાતા કરવા હુન્નર તાલીમ આપતી યોજના.',
      kn: 'ಮಹಿಳಾ ಸ್ವಸಹಾಯ ಸಂಘದ ಸದಸ್ಯರು ವರ್ಷಕ್ಕೆ ಕನಿಷ್ಠ ₹1 ಲಕ್ಷ ಗಳಿಸಲು ಕೌಶಲ್ಯ ತರಬೇತಿ ನೀಡುವ ಯೋಜನೆ.'
    },
    simplifiedExplanation: {
      en: {
        whatIsIt: 'Government mission to help 3 Crore Self-Help Group women start micro-enterprises and earn ₹1 Lakh+ every year.',
        whoGetsIt: 'Women members registered with DAY-NRLM Self Help Groups (SHGs).',
        keyBenefits: ['Free training in tailoring, agriculture, drone technology, and food processing', 'Easy collateral-free bank loans for SHG micro-businesses'],
        howToApply: ['Contact your local Gram Panchayat NRLM Community Resource Person (CRP) or Vo Head']
      },
      hi: {
        whatIsIt: '3 करोड़ स्वयं सहायता समूह महिलाओं को सिलाई, खेती और ड्रोन चलाने की ट्रेनिंग देकर ₹1 लाख से अधिक कमाने योग्य बनाने का अभियान।',
        whoGetsIt: 'एनआरएलएम (NRLM) से जुड़े स्वयं सहायता समूह की महिलाएं।',
        keyBenefits: ['निःशुल्क व्यावसायिक कौशल प्रशिक्षण', 'व्यवसाय शुरू करने के लिए आसान बैंक लोन'],
        howToApply: ['अपनी ग्राम पंचायत के एनआरएलएम कैडर या एसएचजी लीडर से संपर्क करें']
      },
      ta: { whatIsIt: 'மகளிர் சுயஉதவிக்குழு பெண்கள் மாதம் ₹10,000+ சம்பாதிக்க பயிற்சி தரும் திட்டம்.', whoGetsIt: 'SHG உறுப்பினர் பெண்கள்.', keyBenefits: ['இலவச தொழில் பயிற்சி மற்றும் வங்கி கடன்'], howToApply: ['பஞ்சாயத்து NRLM ஒருங்கிணைப்பாளரை அணுகவும்'] },
      te: { whatIsIt: 'మహిళలు ఏడాదికి ₹1 లక్ష పైగా సంపాదించడానికి శిక్షణ ఇచ్చే పథకం.', whoGetsIt: 'స్వయం సహాయక సంఘాల మహిళలు.', keyBenefits: ['ఉచిత కుట్టుపని, డ్రోన్ ఆపరేటింగ్ శిక్షణ'], howToApply: ['మీ గ్రామ పంచాయితీ వివో (VO) లీడర్‌ను సంప్రదించండి'] },
      mr: { whatIsIt: 'महिलांना दरवर्षी ₹१ लाख कमवता यावेत म्हणून व्यावसायिक प्रशिक्षण.', whoGetsIt: 'बचत गटातील महिला.', keyBenefits: ['मोफत कौशल्य विकास व बँक कर्ज'], howToApply: ['ग्रामपंचायत एनआरएलएम प्रतिनिधीशी संपर्क साधा'] },
      bn: { whatIsIt: 'মহিলারা যাতে বছরে ১ লাখ টাকা আয় করতে পারেন তার ট্রেনিং ও সাহায্য।', whoGetsIt: 'স্বনির্ভর গোষ্ঠীর নারীরা।', keyBenefits: ['বিনামূল্যে ট্রেডিং ও সহজ ঋণ'], howToApply: ['গ্রাম পঞ্চায়েত NRLM অফিসে যোগাযোগ করুন'] },
      gu: { whatIsIt: 'મહિલાઓ વર્ષે ₹1 લાખથી વધુ કમાતી થાય તે માટે કૌશલ્ય તાલીમ.', whoGetsIt: 'SHG મહિલા સભ્યો.', keyBenefits: ['મફત વ્યવસાયિક તાલીમ અને સસ્તી લોન'], howToApply: ['ગ્રામ પંચાયત NRLM સીઆરપી નો સંપર્ક કરો'] },
      kn: { whatIsIt: 'ಮಹಿಳೆಯರು ವರ್ಷಕ್ಕೆ ₹1 ಲಕ್ಷ ಗಳಿಸಲು ತರಬೇತಿ ನೀಡುವ ಯೋಜನೆ.', whoGetsIt: 'ಸ್ವಸಹಾಯ ಸಂಘದ ಮಹಿಳೆಯರು.', keyBenefits: ['ಉಚಿತ ಕೌಶಲ್ಯ ತರಬೇತಿ ಮತ್ತು ಬ್ಯಾಂಕ್ ಸಾಲ'], howToApply: ['ಗ್ರಾಮ ಪಂಚಾಯತ್ ಎನ್‌ಆರ್‌ಎಲ್‌ಎಮ್ ಸಿಆರ್‌ಪಿ ಸಂಪರ್ಕಿಸಿ'] }
    },
    officialGazetteExcerpt: 'DAY-NRLM Lakhpati Didi Guidelines: Focuses on enabling SHG households to earn an annual income of ₹1,00,000 or more through diversified livelihood intervention strategies.'
  },

  // --- HOUSING, ENERGY & SANITATION (6 SCHEMES) ---
  {
    id: 'pm-surya-ghar',
    category: 'Housing',
    department: 'Ministry of New and Renewable Energy',
    ministry: 'Ministry of New and Renewable Energy',
    targetGroup: ['Homeowners', 'Residential Families', 'Middle Class'],
    maxBenefit: '₹78,000 Subsidy + 300 Units Free Electricity',
    benefitType: 'Housing Grant',
    minAge: 18,
    maxAge: 80,
    genderEligibility: 'All',
    allowedStates: ['All'],
    isPopular: true,
    processingTimeDays: 14,
    helplineNumber: '15555',
    officialPortalUrl: 'https://pmsuryaghar.gov.in',
    requiredDocuments: ['Aadhaar Card', 'Electricity Bill of House', 'Roof Ownership Proof', 'Bank Account Passbook'],
    title: {
      en: 'PM Surya Ghar: Muft Bijli Yojana (Roof Solar Subsidy)',
      hi: 'पीएम सूर्य घर: मुफ्त बिजली योजना (सोलर रूफटॉप सब्सिडी)',
      ta: 'பிரதம மந்திரி சூர்யா கர் இலவச மின்சார திட்டம்',
      te: 'పిఎం సూర్య ఘర్ ఉచిత విద్యుత్ పథకం (సోలార్ సబ్సిడీ)',
      mr: 'पीएम सूर्य घर मोफत वीज योजना',
      bn: 'পিএম সূর্য ঘর বিনামূল্যে বিদ্যুৎ যোজনা',
      gu: 'પીએમ સૂર્ય ઘર મફત વીજળી યોજના',
      kn: 'ಪಿಎಂ ಸೂರ್ಯ ಘರ್ ಉಚಿತ ವಿದ್ಯುತ್ ಯೋಜನೆ'
    },
    shortDescription: {
      en: 'Provides up to ₹78,000 direct subsidy for installing rooftop solar panels, generating up to 300 units of free electricity every month for residential households.',
      hi: 'आवासीय घरों के लिए छत पर सोलर पैनल लगाने पर ₹78,000 तक की प्रत्यक्ष सब्सिडी प्रदान करता है, जिससे हर महीने 300 यूनिट तक मुफ्त बिजली मिलती है।',
      ta: 'வீட்டு கூரைகளில் சோலார் பேனல் அமைக்க ₹78,000 வரை அரசு மானியம் மற்றும் மாதம் 300 யூனிட் இலவச மின்சாரம்.',
      te: 'ఇంటి పైకప్పుపై సోలార్ ప్యానెల్స్ అమర్చుకోవడానికి ₹78,000 వరకు సబ్సిడీ మరియు నెలకు 300 యూనిట్ల ఉచిత విద్యుత్.',
      mr: 'घराच्या छतावर सोलर पॅनेल बसवण्यासाठी ₹७८,००० पर्यंत सबसिडी व दरमहा ३०० युनिट मोफत वीज.',
      bn: 'বাড়ির ছাদে সোলার প্যানেল বসানোর জন্য ৭৮,০০০ টাকা সরকারি অনুদান ও প্রতি মাসে ৩০০ ইউনিট বিনামূল্যে বিদ্যুৎ।',
      gu: 'ઘરની છત પર સોલાર પેનલ લગાવવા ₹78,000 ની સબસિડી અને મહિને 300 યુનિટ મફત વીજળી.',
      kn: 'ಮನೆ ಛಾವಣಿ ಮೇಲೆ ಸೌರ ಪ್ಯಾನಲ್ ಅಳವಡಿಸಲು ₹78,000 ಸಬ್ಸಿಡಿ ಮತ್ತು ತಿಂಗಳಿಗೆ 300 ಯೂನಿಟ್ ಉಚಿತ ವಿದ್ಯುತ್.'
    },
    simplifiedExplanation: {
      en: {
        whatIsIt: 'Central scheme paying up to ₹78,000 cash subsidy to install solar panels on your house roof and zero out electricity bills.',
        whoGetsIt: 'Any Indian household with a suitable concrete/tin roof and active electricity connection.',
        keyBenefits: ['1 kW system: ₹30,000 subsidy; 2 kW system: ₹60,000 subsidy; 3 kW system: ₹78,000 max subsidy', 'Get 300 units of free green solar electricity every month'],
        howToApply: ['Apply online at pmsuryaghar.gov.in with your electricity consumer number']
      },
      hi: {
        whatIsIt: 'घर की छत पर सोलर पैनल लगाने के लिए ₹78,000 की सीधी बैंक सब्सिडी देने वाली योजना ताकि बिजली का बिल जीरो हो सके।',
        whoGetsIt: 'बिजली कनेक्शन और अपनी छत रखने वाले सभी परिवार।',
        keyBenefits: ['1 किलोवाट पर ₹30,000 और 3 किलोवाट पर अधिकतम ₹78,000 की सब्सिडी', 'हर महीने 300 यूनिट मुफ्त बिजली'],
        howToApply: ['pmsuryaghar.gov.in पर अपने बिजली बिल नंबर से रजिस्ट्रेशन करें']
      },
      ta: { whatIsIt: 'வீட்டு கூரையில் சோலார் அமைக்க ₹78,000 மானியம் தரும் திட்டம்.', whoGetsIt: 'அனைத்து சொந்த வீடு உள்ள குடும்பங்களும்.', keyBenefits: ['மாதம் 300 யூனிட் இலவச மின்சாரம்'], howToApply: ['pmsuryaghar.gov.in தளத்தில் விண்ணப்பிக்கவும்'] },
      te: { whatIsIt: 'ఇంటి పైకప్పుపై సోలార్ అమర్చడానికి ₹78,000 సబ్సిడీ ఇచ్చే పథకం.', whoGetsIt: 'విద్యుత్ కనెక్షన్ ఉన్న ఇళ్ల యజమానులు.', keyBenefits: ['నెలకు 300 యూనిట్లు ఉచిత కరెంట్'], howToApply: ['pmsuryaghar.gov.in లో దరఖాస్తు చేసుకోండి'] },
      mr: { whatIsIt: 'छतावर सोलर बसवण्यासाठी ₹७८,००० सबसिडी देणारी योजना.', whoGetsIt: 'सर्व घरमालक.', keyBenefits: ['दरमहा ३०० युनिट मोफत वीज'], howToApply: ['pmsuryaghar.gov.in वर अर्ज करा'] },
      bn: { whatIsIt: 'ছাদে সোলার প্যানেল লাগানোর জন্য ৭৮,০০০ টাকা সরকারি ভতুর্কি।', whoGetsIt: 'বিদ্যুৎ কানেকশন থাকা বাড়ি।', keyBenefits: ['মাসে ৩০০ ইউনিট ফ্রি বিদ্যুৎ'], howToApply: ['pmsuryaghar.gov.in এ আবেদন করুন'] },
      gu: { whatIsIt: 'છત પર સોલાર લગાવવા ₹78,000 સબસિડી આપતી યોજના.', whoGetsIt: 'તમામ મકાનમાલિકો.', keyBenefits: ['દર મહિને 300 યુનિટ ફ્રી વીજળી'], howToApply: ['pmsuryaghar.gov.in પર ઓનલાઈન અરજી કરો'] },
      kn: { whatIsIt: 'ಛಾವಣಿ ಮೇಲೆ ಸೌರ ಅಳವಡಿಕೆಗೆ ₹78,000 ಸಬ್ಸಿಡಿ ನೀಡುವ ಯೋಜನೆ.', whoGetsIt: 'ಎಲ್ಲಾ ಮನೆ ಮಾಲೀಕರು.', keyBenefits: ['ತಿಂಗಳಿಗೆ 300 ಯೂನಿಟ್ ಉಚಿತ ವಿದ್ಯುತ್'], howToApply: ['pmsuryaghar.gov.in ಪೋರ್ಟಲ್‌ನಲ್ಲಿ ನೋಂದಾಯಿಸಿ'] }
    },
    officialGazetteExcerpt: 'PM Surya Ghar Guidelines: Mandates Central Financial Assistance of ₹30,000/kW for 1-2 kW systems and ₹18,000 for additional kW up to 3 kW (Max ₹78,000) directly credited to vendor/beneficiary account.'
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
    requiredDocuments: ['Aadhaar Card of family members', 'Job Card (MGNREGA) / Income Proof', 'Bank Passbook', 'Kutcha House Site Photo'],
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
        whatIsIt: 'Government flagship housing program ensuring every family has a permanent concrete house with toilet & electricity.',
        whoGetsIt: 'Families who do not own a permanent (Pucca) house anywhere in India with income below ₹6 Lakh.',
        keyBenefits: ['Rural (PMAY-G): Cash grant of ₹1.20 Lakh (Plains) / ₹1.30 Lakh (Hilly areas)', 'Urban (PMAY-U): Interest subsidy up to ₹2.67 Lakh'],
        howToApply: ['Apply via Gram Panchayat / Ward member or online at pmaymis.gov.in']
      },
      hi: {
        whatIsIt: 'हर गरीब परिवार को पक्का मकान देने के लिए भारत सरकार की सबसे बड़ी आवास योजना।',
        whoGetsIt: 'वे परिवार जिनके पास देश में कहीं भी पक्का मकान नहीं है।',
        keyBenefits: ['ग्रामीण क्षेत्र: मकान बनाने के लिए ₹1,20,000 की सीधी सहायता', 'शहरी क्षेत्र: ₹2.67 लाख तक ब्याज सब्सिडी'],
        howToApply: ['ग्राम पंचायत/वार्ड ऑफिस में संपर्क करें या pmaymis.gov.in पर फॉर्म भरें']
      },
      ta: { whatIsIt: 'வீடற்ற குடும்பங்களுக்கு பக்கா வீடு கட்ட மானியம் தரும் திட்டம்.', whoGetsIt: 'பக்கா வீடு இல்லாத ஏழை குடும்பங்கள்.', keyBenefits: ['வீடு கட்ட ₹1.20 லட்சம் நேரடி உதவி'], howToApply: ['கிராம பஞ்சாயத்து அல்லது வார்டு அலுவலகத்தை அணுகவும்'] },
      te: { whatIsIt: 'పేదలకు పక్కా ఇల్లు నిర్మించి ఇచ్చే పథకం.', whoGetsIt: 'సొంత పక్కా ఇల్లు లేని కుటుంబాలు.', keyBenefits: ['ఇల్లు నిర్మించుకోవడానికి ₹1.20 లక్షల సాయం'], howToApply: ['గ్రామ పంచాయతీ లేదా వార్డు సచివాలయంలో సంప్రదించండి'] },
      mr: { whatIsIt: 'प्रत्येक बेघर कुटुंबाला पक्के घर देणारी योजना.', whoGetsIt: 'पक्के घर नसलेली कुटुंबे.', keyBenefits: ['घर बांधण्यासाठी ₹१,२०,००० थेट मदत'], howToApply: ['ग्रामपंचायत कार्यालयात अर्ज करा'] },
      bn: { whatIsIt: 'গৃহহীন পরিবারকে পক্কা বাড়ি বানিয়ে দেওয়ার সরকারি স্কিম।', whoGetsIt: 'যাদের নিজস্ব পাকা ঘর নেই।', keyBenefits: ['ঘর তৈরির জন্য ১.২০ লাখ টাকার অনুদান'], howToApply: ['গ্রাম পঞ্চায়েত বা মিউনিসিপ্যালিটি অফিসে যোগাযোগ করুন'] },
      gu: { whatIsIt: 'પોતાનું પક્કું ઘર આપતી આવાસ યોજના.', whoGetsIt: 'પોતાનું ઘર ન ધરાવતા નાગરિકો.', keyBenefits: ['મકાન બનાવવા માટે ₹1,20,000 ની સહાય'], howToApply: ['ગ્રામ પંચાયત અથવા વૉર્ડ ઑફિસે સંપર્ક કરો'] },
      kn: { whatIsIt: 'ಬಡ ಕುಟುಂಬಕ್ಕೆ ಸ್ವಂತ ಮನೆ ನಿರ್ಮಿಸಲು ನೆರವಾಗುವ ಯೋಜನೆ.', whoGetsIt: 'ಸೊಂತ ಪಕ್ಕಾ ಮನೆ ಇಲ್ಲದವರು.', keyBenefits: ['ಮನೆ ನಿರ್ಮಾಣಕ್ಕೆ ₹1.20 ಲಕ್ಷ ಧನಸಹಾಯ'], howToApply: ['ಗ್ರಾಮ ಪಂಚಾಯತ್‌ನಲ್ಲಿ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ'] }
    },
    officialGazetteExcerpt: 'PMAY Guidelines: Under PMAY-G, financial assistance of ₹1.20 lakh in plain areas and ₹1.30 lakh in hilly areas is provided to eligible BPL households for construction of a 25 sq.m. pucca house.'
  },

  // --- PENSIONS & SENIOR CITIZENS (5 SCHEMES) ---
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
    requiredDocuments: ['Aadhaar Card', 'Savings Bank Account / Post Office Account', 'Active Mobile Number'],
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
        whoGetsIt: 'Unorganized sector workers aged 18 to 40 (drivers, domestic workers, shop employees).',
        keyBenefits: ['Monthly pension choices: ₹1k, ₹2k, ₹3k, ₹4k or ₹5k', 'Monthly contribution starting as low as ₹42/month', 'Pension continues to spouse upon death'],
        howToApply: ['Fill APY auto-debit form at your savings bank branch']
      },
      hi: {
        whatIsIt: 'बुढ़ापे में हर महीने पक्की पेंशन देने वाली सरकारी सामाजिक सुरक्षा योजना।',
        whoGetsIt: '18 से 40 वर्ष के कामगार (ड्राइवर, मजदूर, दुकानदार)।',
        keyBenefits: ['60 की उम्र के बाद ₹1,000 से ₹5,000/माह पक्की पेंशन', 'शुरुआती बचत केवल ₹42/माह'],
        howToApply: ['बैंक में जाएं और APY ऑटो-डेबिट फॉर्म भरें']
      },
      ta: { whatIsIt: 'முதிய வயதில் மாதம்தோறும் நிலையான ஓய்வூதியம் தரும் திட்டம்.', whoGetsIt: '18 முதல் 40 வயதுள்ள முறைசாரா தொழிலாளர்கள்.', keyBenefits: ['60 வயதிற்கு பின் மாதம் ₹1,000 - ₹5,000 ஓய்வூதியம்'], howToApply: ['வங்கிக் கிளையில் ஆட்டோ-டெபிட் படிவம் சமர்ப்பிக்கவும்'] },
      te: { whatIsIt: 'వృద్ధాప్యంలో ప్రతి నెలా నిరంతర పింఛను ఇచ్చే పథకం.', whoGetsIt: '18 నుండి 40 సంవత్సరాల కార్మికులు.', keyBenefits: ['60 ఏళ్లు దాటాక నెలకు ₹1,000 - ₹5,000 గ్యారెంటీ పింఛను'], howToApply: ['మీ బ్యాంకు శాఖలో APY ఫారమ్ పూర్తి చేయండి'] },
      mr: { whatIsIt: 'वृद्धापकाळात दरमहा नियमित पेन्शन देणारी योजना.', whoGetsIt: '१८ ते ४० वयोगटातील कामगार.', keyBenefits: ['वयाच्या ६० नंतर दरमहा ₹१,००० ते ₹५,००० पेन्शन'], howToApply: ['बँकेत जाऊन ऑटो-डेबिट अर्ज भरा'] },
      bn: { whatIsIt: 'বৃদ্ধ বয়সে স্থায়ী মাসিক আয়ের সরকারি পেনশন স্কিম।', whoGetsIt: '১৮ থেকে ৪০ বছর বয়সী শ্রমিকরা।', keyBenefits: ['৬০ বছর বয়সের পর মাসে ১,০০০-৫,০০০ টাকা পেনশন'], howToApply: ['নিজের ব্যাংকে গিয়ে APY ফর্ম জমা দিন'] },
      gu: { whatIsIt: 'વૃદ્ધાવસ્થામાં દર મહિને નિશ્ચિત આવક આપતી પેન્શન યોજના.', whoGetsIt: '૧૮ થી ૪૦ વર્ષના કામદારો.', keyBenefits: ['૬૦ વર્ષ પછી દર મહિને ₹1,000 થી ₹5,000 નું ગેરંટીડ પેન્શન'], howToApply: ['બેંક શાખામાં ઓટો-ડેબિટ ફોર્મ ભરો'] },
      kn: { whatIsIt: 'ವೃದ್ಧಾಪ್ಯದಲ್ಲಿ ನಿರಂತರ ತಿಂಗಳ ಆದಾಯ ನೀಡುವ ಪಿಂಚಣಿ ಯೋಜನೆ.', whoGetsIt: '18 ರಿಂದ 40 ವರ್ಷ ವಯಸ್ಸಿನ ಕಾರ್ಮಿಕರು.', keyBenefits: ['60 ವರ್ಷದ ನಂತರ ತಿಂಗಳಿಗೆ ₹1,000 - ₹5,000 ಪಿಂಚಣಿ'], howToApply: ['ನಿಮ್ಮ ಬ್ಯಾಂಕ್ ಶಾಖೆಯಲ್ಲಿ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ'] }
    },
    officialGazetteExcerpt: 'PFRDA Act 2013: Atal Pension Yojana provides guaranteed minimum monthly pension of ₹1000 to ₹5000 at age 60 based on age and contribution.'
  },

  // --- MSME, BUSINESS & LOANS (6 SCHEMES) ---
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
    requiredDocuments: ['Aadhaar Card & PAN Card', 'Business Proposal / Project Report', 'Proof of Business Address', 'Bank Statement'],
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
        whatIsIt: 'Bank loan scheme offering cash to start or expand a small business without needing to mortgage property.',
        whoGetsIt: 'Small shopkeepers, repair shops, food stalls, artisans, and self-employed youth.',
        keyBenefits: ['Shishu (up to ₹50k), Kishor (₹50k-₹5L), Tarun (₹5L-₹10L)', 'Zero property mortgage/guarantee required'],
        howToApply: ['Submit business proposal and identity proof to any commercial bank branch']
      },
      hi: {
        whatIsIt: 'बिना जमीन या मकान गिरवी रखे नया व्यवसाय शुरू करने या बढ़ाने के लिए बैंक लोन।',
        whoGetsIt: 'दुकानदार, टेलर, ब्यूटी पार्लर, वर्कशॉप और छोटे उद्यमी।',
        keyBenefits: ['शिशु (₹50 हजार तक), किशोर (₹5 लाख तक), तरुण (₹10 लाख तक)', 'कोई गारंटी की जरूरत नहीं'],
        howToApply: ['बैंक में जाएं और मुद्रा लोन आवेदन फॉर्म भरें']
      },
      ta: { whatIsIt: 'சொத்து பிணை இன்றி புதிய தொழில் தொடங்க கடன் வழங்கும் திட்டம்.', whoGetsIt: 'சிறு கடை உரிமையாளர்கள் மற்றும் சுயதொழில் செய்வோர்.', keyBenefits: ['₹50,000 முதல் ₹10 லட்சம் வரை கடன்'], howToApply: ['வங்கியில் வணிக திட்டத்துடன் விண்ணப்பிக்கவும்'] },
      te: { whatIsIt: 'ఎటువంటి హామీ లేకుండా సొంత వ్యాపారానికి ఇచ్చే బ్యాంక్ రుణం.', whoGetsIt: 'చిన్న వ్యాపారులు మరియు దుకాణదారులు.', keyBenefits: ['₹50,000 నుండి ₹10 లక్షల వరకు షూరిటీ లేని రుణం'], howToApply: ['బ్యాంక్ శాఖలో దరఖాస్తు సంప్రదించండి'] },
      mr: { whatIsIt: 'तारणमुक्त बँक कर्ज देणारी योजना.', whoGetsIt: 'लहान व्यावसायिक व दुकानदार.', keyBenefits: ['₹५०,००० ते ₹१० लाखांपर्यंत कर्ज'], howToApply: ['बँकेत बिझनेस प्लॅनसह अर्ज सादर करा'] },
      bn: { whatIsIt: 'কোনো গ্যারান্টি ছাড়াই ব্যবসা শুরু করার সরকারি ঋণ।', whoGetsIt: 'ক্ষুদ্র ব্যবসায়ী ও দোকানদাররা।', keyBenefits: ['৫০,০০০ থেকে ১০ লাখ টাকা পর্যন্ত ঋণ'], howToApply: ['ব্যাংকে বিজনেস প্ল্যান নিয়ে আবেদন করুন'] },
      gu: { whatIsIt: 'કોઈ ગેરેંટી વગર બેંક લોન આપતી યોજના.', whoGetsIt: 'નાના વેપારીઓ અને સ્વરોજગારી.', keyBenefits: ['₹50,000 થી ₹10 લાખ સુધીની લોન'], howToApply: ['બેંક શાખામાંથી ફોર્મ ભરી લોન મેળવો'] },
      kn: { whatIsIt: 'ಯಾವುದೇ ಆಸ್ತಿ ಭದ್ರತೆ ಇಲ್ಲದೆ ಉದ್ಯಮ ಸಾಲ.', whoGetsIt: 'ಸಣ್ಣ ಅಂಗಡಿಯವರು.', keyBenefits: ['₹50,000 ದಿಂದ ₹10 ಲಕ್ಷದವರೆಗೆ ಸಾಲ'], howToApply: ['ಸಮೀಪದ ಬ್ಯಾಂಕ್‌ಗೆ ಭೇಟಿ ನೀಡಿ'] }
    },
    officialGazetteExcerpt: 'Pradhan Mantri MUDRA Yojana (PMMY) enables non-farm micro enterprises to access credit up to ₹10 lakh without collateral security.'
  },
  {
    id: 'pm-svanidhi',
    category: 'MSME & Business',
    department: 'Ministry of Housing and Urban Affairs',
    ministry: 'Ministry of Housing and Urban Affairs',
    targetGroup: ['Street Vendors', 'Hawkers', 'Fruit & Vegetable Sellers', 'Cobblers', 'Tea Stalls'],
    maxBenefit: 'Micro Credit up to ₹50,000 + 7% Interest Subsidy',
    benefitType: 'Subsidized Credit',
    minAge: 18,
    maxAge: 65,
    genderEligibility: 'All',
    allowedStates: ['All'],
    isPopular: true,
    processingTimeDays: 5,
    helplineNumber: '1800-11-1979',
    officialPortalUrl: 'https://pmsvanidhi.mohua.gov.in',
    requiredDocuments: ['Aadhaar Card', 'Vending Certificate / Urban Local Body Identity Card', 'Bank Passbook'],
    title: {
      en: 'PM SVANidhi (Micro Credit for Street Vendors)',
      hi: 'पीएम स्वनिधि (स्ट्रीट वेंडर आत्मनिर्भर निधि)',
      ta: 'பிரதம மந்திரி ஸ்வனிதி (தெருவோர வியாபாரிகள் கடன்)',
      te: 'పిఎం స్వనిధి (వీధి వ్యాపారుల రుణం)',
      mr: 'पीएम स्वनिधी (फेरीवाले कर्ज योजना)',
      bn: 'পিএম স্বনিধি (পথব্যবসায়ী মাইক্রো ঋণ)',
      gu: 'પીએમ સ્વનિધિ (ફેરિયા ધિરાણ યોજના)',
      kn: 'ಪಿಎಂ ಸ್ವನಿಧಿ (ಬೀದಿ ಬದಿ ವ್ಯಾಪಾರಿಗಳ ಸಾಲ)'
    },
    shortDescription: {
      en: 'Special micro-credit scheme giving working capital loans up to ₹50,000 with 7% interest subsidy to urban & rural street vendors to restart livelihoods.',
      hi: 'रेहड़ी-पटरी और स्ट्रीट वेंडरों को आजीविका फिर से शुरू करने के लिए 7% ब्याज सब्सिडी के साथ ₹50,000 तक का कार्यशील पूंजी ऋण।',
      ta: 'தெருவோர வியாபாரிகளுக்கு 7% வட்டி மானியத்துடன் ₹50,000 வரை மூலதன கடன் வழங்கும் சிறப்பு திட்டம்.',
      te: 'వీధి వ్యాపారులకు 7% వడ్డీ సబ్సిడీతో ₹50,000 వరకు పని పెట్టుబడి రుణం ఇచ్చే పథకం.',
      mr: 'फेरीवाल्यांना ७% व्याज सवलतीसह ₹५०,००० पर्यंत खेळते भांडवल कर्ज.',
      bn: 'পথব্যবসায়ীদের জন্য ৭% সুদের ভতুর্কি সহ ৫০,০০০ টাকা পর্যন্ত চলতি মূলধন ঋণ।',
      gu: 'ફેરિયાઓને 7% વ્યાજ સબસિડી સાથે ₹50,000 સુધીની વર્કિંગ કેપિટલ લોન.',
      kn: 'ಬೀದಿ ಬದಿ ವ್ಯಾಪಾರಿಗಳಿಗೆ 7% ಬಡ್ಡಿ ಸಬ್ಸಿಡಿಯೊಂದಿಗೆ ₹50,000 ದವರೆಗೆ ವರ್ಕಿಂಗ್ ಕ್ಯಾಪಿಟಲ್ ಸಾಲ.'
    },
    simplifiedExplanation: {
      en: {
        whatIsIt: 'Quick collateral-free working capital loan for street vendors: 1st Tranche ₹10k, 2nd Tranche ₹20k, 3rd Tranche ₹50k.',
        whoGetsIt: 'Urban and peri-urban street vendors possessing Vending ID or ULB recommendation letter.',
        keyBenefits: ['7% per annum interest subsidy credited directly to bank account', 'Digital cashback up to ₹1,200/year for accepting UPI payments'],
        howToApply: ['Apply on pmsvanidhi.mohua.gov.in or approach nearest Common Service Center']
      },
      hi: {
        whatIsIt: 'रेहड़ी-पटरी वालों के लिए आसान किस्त वाला बैंक लोन: पहली बार ₹10,000, दूसरी बार ₹20,000 और तीसरी बार ₹50,000।',
        whoGetsIt: 'सब्जी, फल, चाय, कपड़े और जूते बेचने वाले स्ट्रीट वेंडर।',
        keyBenefits: ['समय पर चुकाने पर 7% ब्याज सब्सिडी', 'यूपीआई पेमेंट लेने पर ₹1,200 सालाना कैशबैक'],
        howToApply: ['pmsvanidhi.mohua.gov.in पर जाएं या सीएससी केंद्र जाएं']
      },
      ta: { whatIsIt: 'தெருவோர வியாபாரிகளுக்கு ₹50,000 வரை கடன் வழங்கும் திட்டம்.', whoGetsIt: 'அனைத்து தெருவோர வியாபாரிகளும்.', keyBenefits: ['7% வட்டி மானியம் & UPI கேஷ்பேக்'], howToApply: ['pmsvanidhi போர்ட்டலில் விண்ணப்பிக்கவும்'] },
      te: { whatIsIt: 'వీధి వ్యాపారులకు ₹50,000 వరకు పెట్టుబడి రుణం ఇచ్చే పథకం.', whoGetsIt: 'వీధి వ్యాపారులు మరియు తోపుడుబండి వ్యాపారులు.', keyBenefits: ['7% వడ్డీ సబ్సిడీ మరియు క్యాష్‌బ్యాక్'], howToApply: ['pmsvanidhi.mohua.gov.in లో దరఖాస్తు చేయండి'] },
      mr: { whatIsIt: 'फेरीवाल्यांसाठी ₹५०,००० पर्यंत सोपे कर्ज.', whoGetsIt: 'रेहडी-पटरी व्यावसायिक.', keyBenefits: ['७% व्याज सवलत'], howToApply: ['सीएससी केंद्रावर अर्ज करा'] },
      bn: { whatIsIt: 'পথব্যবসায়ীদের ৫০,০০০ টাকা পর্যন্ত সহজ ব্যবসা ঋণ।', whoGetsIt: 'সকল পথব্যবসায়ী।', keyBenefits: ['৭% সুদের ভতুর্কি ও ক্যাশব্যাক'], howToApply: ['অনলাইনে বা সিএসসি কেন্দ্রে আবেদন করুন'] },
      gu: { whatIsIt: 'ફેરિયાઓ માટે ₹50,000 સુધીની સરળ લોન.', whoGetsIt: 'તમામ શેરી ફેરિયાઓ.', keyBenefits: ['7% વ્યાજ સબસિડી'], howToApply: ['pmsvanidhi પ્લેટફોર્મ પર રજીસ્ટ્રેશન કરાવો'] },
      kn: { whatIsIt: 'ಬೀದಿ ಬದಿ ವ್ಯಾಪಾರಿಗಳಿಗೆ ₹50,000 ಸಾಲ.', whoGetsIt: 'ಬೀದಿ ವ್ಯಾಪಾರಿಗಳು.', keyBenefits: ['7% ಬಡ್ಡಿ ಸಬ್ಸಿಡಿ'], howToApply: ['ಸಿಎಸ್‌ಸಿ ಕೇಂದ್ರದಲ್ಲಿ ನೋಂದಾಯಿಸಿ'] }
    },
    officialGazetteExcerpt: 'PM SVANidhi Scheme Guidelines: Provides working capital micro-credit facility to street vendors up to ₹10,000, ₹20,000 and ₹50,000 in progressive tranches upon timely repayment.'
  },

  // --- EMPLOYMENT, ARTISANS & SKILL TRAINING (5 SCHEMES) ---
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
    requiredDocuments: ['Aadhaar Card', 'Ration Card / Family Proof', 'Bank Account Passbook', 'Proof of Artisan Trade'],
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
        whatIsIt: 'Special scheme empowering 18 traditional trades (carpenters, blacksmiths, barbers, tailors, potters, cobblers).',
        whoGetsIt: 'Citizens engaged in hands-and-tools based traditional artisan trades.',
        keyBenefits: ['Skill Training with ₹500/day stipend', 'Free ₹15,000 e-voucher for modern tools', 'Collateral-free loan up to ₹3 Lakh at 5% interest'],
        howToApply: ['Register at CSC center with biometric authentication']
      },
      hi: {
        whatIsIt: '18 प्रकार के पारंपरिक कारीगरों (दर्जी, नाई, लोहार, बढ़ई, सोनार) को आगे बढ़ाने की योजना।',
        whoGetsIt: 'हाथ और औजारों से काम करने वाले पारंपरिक कारीगर।',
        keyBenefits: ['ट्रेनिंग के दौरान ₹500/दिन का वजीफा', 'औजारों के लिए ₹15,000 का टूलकिट वाउचर', '5% ब्याज पर ₹3 लाख का लोन'],
        howToApply: ['सीएससी केंद्र पर बायोमेट्रिक से मुफ्त रजिस्ट्रेशन करवाएं']
      },
      ta: { whatIsIt: 'பாரம்பரிய கைவினைஞர்களை ஊக்கப்படுத்தும் திட்டம்.', whoGetsIt: '18 தொழிற்பிரிவு கைவினைஞர்கள்.', keyBenefits: ['₹15,000 இலவச கருவித்தொகுதி & 5% வட்டியில் கடன்'], howToApply: ['CSC மையத்தில் பதிவு செய்யவும்'] },
      te: { whatIsIt: 'చేతివృత్తుల వారిని ఆదుకోవడానికి రూపొందించిన పథకం.', whoGetsIt: '18 రకాల చేతివృత్తుల వారు.', keyBenefits: ['₹15,000 ఉచిత టూల్‌కిట్ మరియు 5% వడ్డీకి రుణం'], howToApply: ['మీ సమీప CSC కేంద్రంలో ఆధార్ తో దరఖాస్తు చేసుకోండి'] },
      mr: { whatIsIt: 'पारंपारिक कारागिरांच्या सक्षमीकरणासाठी योजना.', whoGetsIt: 'सुतार, लोहार, शिंपी इ. १८ व्यावसायिक.', keyBenefits: ['₹१५,००० मोफत टूलकिट वाउचर'], howToApply: ['सीएससी केंद्रात नोंदणी करा'] },
      bn: { whatIsIt: 'ঐতিহ্যবাহী কারিগরদের জন্য সাহায্য প্রকল্প।', whoGetsIt: '১৮টি পেশার মানুষ।', keyBenefits: ['১৫,০০০ টাকার টুলকিট ভাউচার ও ঋণ'], howToApply: ['সিএসসি কেন্দ্রে রেজিস্টার করুন'] },
      gu: { whatIsIt: 'પરંપરાગત કારીગરોને આધુનિક બનાવવા સરકારી યોજના.', whoGetsIt: '૧૮ વ્યવસાયોના કારીગરો.', keyBenefits: ['₹15,000 ટૂલકિટ વાઉચર'], howToApply: ['જન સેવા કેન્દ્ર પર રજીસ્ટ્રેશન કરાવો'] },
      kn: { whatIsIt: 'ಸಾಂಪ್ರದಾಯಿಕ ಕುಶಲಕರ್ಮಿಗಳನ್ನು ಪ್ರೋತ್ಸಾಹಿಸುವ ಯೋಜನೆ.', whoGetsIt: '18 ವೃತ್ತಿಗಳ ಕುಶಲಕರ್ಮಿಗಳು.', keyBenefits: ['₹15,000 ಉಚಿತ ಉಪಕರಣ ವೋಚರ್'], howToApply: ['ಸಿಎಸ್‌ಸಿ ಕೇಂದ್ರದಲ್ಲಿ ನೋಂದಣಿ ಮಾಡಿ'] }
    },
    officialGazetteExcerpt: 'PM Vishwakarma Guidelines: Artisans receive a stipend of ₹500/day during basic training, e-vouchers worth ₹15,000 for toolkits, and collateral-free credit support up to ₹3,00,000 at 5% interest rate.'
  },
  {
    id: 'mgnrega-job-guarantee',
    category: 'Employment & Skills',
    department: 'Department of Rural Development',
    ministry: 'Ministry of Rural Development',
    targetGroup: ['Rural Laborers', 'Unskilled Workers', 'BPL Families'],
    maxBenefit: 'Guaranteed 100 Days Wage Employment',
    benefitType: 'Direct Transfer',
    minAge: 18,
    maxAge: 70,
    genderEligibility: 'All',
    allowedStates: ['All'],
    occupationFilter: ['Unemployed', 'Agriculture Worker'],
    processingTimeDays: 7,
    helplineNumber: '1800-111-555',
    officialPortalUrl: 'https://nrega.nic.in',
    requiredDocuments: ['Aadhaar Card', 'Job Card Application', 'Bank Account Passbook (Aadhaar Seeded)', 'Passport Photo'],
    title: {
      en: 'MGNREGA 100-Day Rural Employment Guarantee',
      hi: 'मनरेगा 100 दिवसीय ग्रामीण रोजगार गारंटी',
      ta: 'மகாத்மா காந்தி 100 நாள் வேலை வாய்ப்புத் திட்டம்',
      te: 'ఉపాధి హామీ పథకం (MGNREGA 100 రోజుల పని)',
      mr: 'महात्मा गांधी महात्मा गांधी रोजगार हमी योजना',
      bn: 'মহাত্মা গান্ধী ১০০ দিনের কাজ প্রকল্প (MGNREGA)',
      gu: 'મનરેગા ૧૦૦ દિવસ ગ્રામીણ રોજગારી ગેરંટી',
      kn: 'ಮಹಾತ್ಮ ಗಾಂಧಿ 100 ದಿನಗಳ ಉದ್ಯೋಗ ಖಾತರಿ ಯೋಜನೆ'
    },
    shortDescription: {
      en: 'Statutory legal guarantee of 100 days of wage employment per financial year to adult members of any rural household willing to do public manual work.',
      hi: 'अकुशल शारीरिक कार्य करने के इच्छुक किसी भी ग्रामीण परिवार के वयस्क सदस्यों को प्रति वित्तीय वर्ष 100 दिनों के मजदूरी रोजगार की कानूनी गारंटी।',
      ta: 'கிராமப்புற குடும்பங்களுக்கு ஆண்டுக்கு 100 நாட்கள் ஊதியத்துடன் கூடிய வேலைவாய்ப்பை சட்டபூர்வமாக உறுதி செய்யும் திட்டம்.',
      te: 'గ్రామీణ ప్రాంతాల కుటుంబాలకు ఏడాదికి 100 రోజుల కూలి పనికి చట్టబద్ధమైన గ్యారెంటీ ఇచ్చే ప్రభుత్వ పథకం.',
      mr: 'ग्रामीण भागातील नागरिकांना वर्षाला १०० दिवस रोजगाराची कायदेशीर हमी.',
      bn: 'গ্রামীন পরিবারের প্রাপ্তবয়স্ক সদস্যদের বছরে ১০০ দিনের মজুরিভিত্তিক কাজের আইনি গ্যারান্টি।',
      gu: 'ગ્રામીણ પરિવારોને વર્ષે ૧૦૦ દિવસની વેતન રોજગારીની કાનૂની ગેરંટી આપતી યોજના.',
      kn: 'ಗ್ರಾಮೀಣ ಕುಟುಂಬಗಳಿಗೆ ವರ್ಷಕ್ಕೆ 100 ದಿನಗಳ ಕೂಲಿ ಉದ್ಯೋಗ ಖಾತರಿ ನೀಡುವ ಕಾನೂನುಬದ್ಧ ಯೋಜನೆ.'
    },
    simplifiedExplanation: {
      en: {
        whatIsIt: 'Legal guarantee by Indian Govt to provide 100 days of paid manual labor work every year to every rural family.',
        whoGetsIt: 'Adult members of rural households willing to do manual labor work.',
        keyBenefits: ['100 days guaranteed employment per family', 'Direct daily wage transfer to bank account within 15 days', 'Unemployment allowance paid if work not provided in 15 days'],
        howToApply: ['Apply for MGNREGA Job Card at Gram Panchayat Office']
      },
      hi: {
        whatIsIt: 'हर ग्रामीण परिवार को हर साल 100 दिन का पक्का मजदूरी काम देने की कानूनी सरकारी गारंटी।',
        whoGetsIt: 'शारीरिक काम करने के इच्छुक ग्रामीण परिवार।',
        keyBenefits: ['100 दिनों का पक्का रोजगार', 'मजदूरी का पैसा सीधे बैंक खाते में', '15 दिन में काम न मिलने पर बेकारी भत्ता'],
        howToApply: ['ग्राम पंचायत में जॉब कार्ड (Job Card) बनवाएं']
      },
      ta: { whatIsIt: 'கிராமப்புற குடும்பங்களுக்கு 100 நாள் வேலை உத்தரவாதம் தரும் திட்டம்.', whoGetsIt: 'அனைத்து கிராமப்புற குடும்பங்களும்.', keyBenefits: ['நேரடி வங்கி கூலி பணம்'], howToApply: ['கிராம பஞ்சாயத்து அலுவலகத்தில் जॉब Card பெறவும்'] },
      te: { whatIsIt: 'గ్రామీణ కుటుంబాలకు ఏడాదికి 100 రోజుల కూలి పని ఇచ్చే చట్టం.', whoGetsIt: 'గ్రామీణ పేదలు.', keyBenefits: ['15 రోజుల్లో నేరుగా బ్యాంక్ ఖాతాలో కూలి డబ్బులు'], howToApply: ['గ్రామ పంచాయతీ కార్యాలయంలో జాబ్ కార్డ్ తీసుకోండి'] },
      mr: { whatIsIt: '१०० दिवस रोजगाराची कायदेशीर हमी देणारी योजना.', whoGetsIt: 'ग्रामीण नागरिक.', keyBenefits: ['थेट बँकेत मजुरी जमा'], howToApply: ['ग्रामपंचायतीत जॉब कार्ड काढा'] },
      bn: { whatIsIt: 'বছরে ১০০ দিনের কাজের সরকারি আইনি নিশ্চয়তা।', whoGetsIt: 'গ্রামীন মানুষ।', keyBenefits: ['সরাসরি ব্যাংকে মজুরির টাকা'], howToApply: ['গ্রাম পঞ্চায়েতে জব কার্ডের আবেদন করুন'] },
      gu: { whatIsIt: 'વર્ષે ૧૦૦ દિવસ કામની ગેરંટી આપતો કાયદો.', whoGetsIt: 'ગ્રામીણ નાગરિકો.', keyBenefits: ['સીધી બેંક ટ્રાન્સફર મંજૂરી'], howToApply: ['ગ્રામ પંચાયતમાંથી જોબ કાર્ડ મેળવો'] },
      kn: { whatIsIt: 'ವರ್ಷಕ್ಕೆ 100 ದಿನಗಳ ಉದ್ಯೋಗ ನೀಡುವ ಕಾನೂನುಬದ್ಧ ಯೋಜನೆ.', whoGetsIt: 'ಗ್ರಾಮೀಣ ಕುಟುಂಬಗಳು.', keyBenefits: ['ನೇರ ಬ್ಯಾಂಕ್ ಖಾತೆಗೆ ಕೂಲಿ'], howToApply: ['ಗ್ರಾಮ ಪಂಚಾಯತಿಯಲ್ಲಿ ಜಾಬ್ ಕಾರ್ಡ್ ಪಡೆಯಿರಿ'] }
    },
    officialGazetteExcerpt: 'MGNREGA Act 2005: Mandates provision of at least 100 days of guaranteed wage employment in a financial year to every household whose adult members volunteer to do unskilled manual work.'
  }
];
