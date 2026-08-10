# JanSeva AI (GovAssist AI) v2.0 Enterprise 🏛️✨
> **IBM Bob-Powered Citizen Services Assistant & Multilingual Welfare Discovery Platform**  
> *Developed for SkillUp in Collaboration with IBM SkillsBuild — AI for Governance & Citizen Services Track*

![JanSeva AI Banner](https://img.shields.io/badge/IBM_SkillsBuild-SkillUp_Governance_v2.0-4f46e5?style=for-the-badge&logo=ibm)
![License](https://img.shields.io/badge/License-MIT-emerald?style=for-the-badge)
![Schemes](https://img.shields.io/badge/Schemes-50%2B_Welfare_Programs-rose?style=for-the-badge)
![Languages](https://img.shields.io/badge/Languages-8_Regional_Languages-amber?style=for-the-badge)
![CI/CD](https://img.shields.io/badge/CI%2FCD-GitHub_Actions_Passing-blue?style=for-the-badge)

---

## 📌 Vision & Problem Statement

Many citizens across rural and urban communities remain unaware of government welfare schemes and public entitlements available to them, or find official gazette notifications and eligibility criteria overly complex to understand. 

**JanSeva AI v2.0 Enterprise** scales public service delivery into an industry-grade governance platform that:
1. **Explains 50+ government schemes in simple 5th-grade language** across 8 major sectors.
2. **Features an interactive Scheme Comparison Matrix** allowing citizens to compare up to 3 schemes side-by-side.
3. **Provides an AI Eligibility Gap Analyzer** with actionable roadmaps to fulfill missing criteria.
4. **Delivers an instant AI Eligibility Matcher & Benefit Calculator** (in ₹/year).
5. **Empowers illiterate & visually impaired citizens** with 8 regional languages, Web Speech voice input, and Text-to-Speech audio readouts.
6. **Includes production CI/CD workflows** for one-click deployment on Vercel, Netlify, and GitHub Actions.

---

## 🌟 Key v2.0 Features

### 1. 📚 50+ Comprehensive Government Schemes Knowledgebase
Covers 8 critical socio-economic sectors:
- **Agriculture & Farming**: PM-KISAN (₹6k/yr), PM Fasal Bima Crop Insurance, Kisan Credit Card (4% interest), PM KUSUM Solar Irrigation Pumps (60% subsidy).
- **Healthcare & Medical**: Ayushman Bharat PM-JAY (₹5 Lakh cover including seniors 70+), PM Bharatiya Janaushadhi (50–90% discount on generic medicines).
- **Education & Scholarships**: NSP Central Sector Scholarship (up to ₹20k/yr), PM Vidya Lakshmi Education Loans (collateral-free up to ₹7.5 Lakh).
- **Women & Child Welfare**: Sukanya Samriddhi Yojana (8.2% P.A. tax-free), Lakhpati Didi Women SHG Skill Mission.
- **Housing, Energy & Sanitation**: PM Surya Ghar Muft Bijli (300 Units free solar electricity + ₹78,000 subsidy), PM Awas Yojana (PMAY ₹1.2L–₹2.67L housing grant).
- **Pensions & Senior Citizens**: Atal Pension Yojana (APY ₹1,000–₹5,000/month guaranteed pension).
- **MSME, Business & Startup Loans**: PM Mudra Loan (up to ₹10 Lakh collateral-free), PM SVANidhi (micro-credit for street vendors).
- **Employment, Artisans & Skill Training**: PM Vishwakarma (18 artisan trades + ₹15k toolkit voucher), MGNREGA 100-Day Legal Rural Guarantee.

### 2. ⚖️ Interactive Scheme Comparison Matrix
Select any 2 or 3 schemes side-by-side to evaluate:
- **Maximum Financial Benefit / Subsidy Value**
- **Nodal Ministry & Department**
- **Average Processing Time (Days)**
- **Helpline Phone Numbers**
- **Required Document Checklists**
- **Direct Application Portal Links**

### 3. 🛡️ AI Application Gap Analyzer
- Detects partial matches (40%–79% score) and provides step-by-step administrative recommendations to bridge document and record gaps (e.g. updating land revenue records, obtaining income certificates, linking Aadhaar to bank accounts).

### 4. 🌐 Multilingual & Voice Accessibility Engine
- **8 Regional Languages**: English, Hindi (हिन्दी), Tamil (தமிழ்), Telugu (తెలుగు), Marathi (मराठी), Bengali (বাংলা), Gujarati (ગુજરાતી), and Kannada (ಕನ್ನಡ).
- **Voice Speech Search (STT)**: Integrated Web Speech API microphone for voice queries in native languages.
- **Text-to-Speech Audio Reader (TTS)**: Voice synthesizer reading scheme summaries aloud for illiterate or visually impaired citizens.
- **Accessibility Bar**: High-Contrast mode toggle, adjustable Font Size Scaler (A-, A, A+).

### 5. 📍 CSC Kiosk Locator & Status Tracker
- Search nearest **Common Service Center (CSC / Jan Seva Kendra / Meeseva)** by District, State, or Pincode with VLE operator contact details and operating hours.
- Track real-time application progress using Reference IDs (e.g., `JS-2026-89412`) with visual stage timelines.

### 6. ⚙️ Production CI/CD & Deployment Configurations
- **`vercel.json`**: SPA rewrite routing for Vercel.
- **`netlify.toml`**: Redirects and header rules for Netlify.
- **`.github/workflows/deploy.yml`**: Automated GitHub Actions CI pipeline running `npm run build` on every commit.

---

## 🛠️ Technology Stack

- **Frontend Framework**: React 18 + TypeScript + Vite
- **Styling & UI**: Tailwind CSS v4 + Glassmorphism + Modern Color Tokens
- **Icons**: Lucide React
- **Voice Capabilities**: Browser Web Speech API (SpeechRecognition & SpeechSynthesis)
- **CI/CD & Deployment**: GitHub Actions, Vercel, Netlify
- **Build Engine**: Vite / Rolldown

---

## 🚀 Quick Start & Installation

### Prerequisites
- Node.js 20.x or higher
- npm 10.x or higher

### 1. Clone the Repository
```bash
git clone https://github.com/Lakshman2405/govassist-ai.git
cd govassist-ai
git checkout v2.0-enterprise
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open your browser at `http://127.0.0.1:3001`.

### 4. Build for Production
```bash
npm run build
```

---

## 📄 License
This project is open-source and licensed under the [MIT License](LICENSE).
