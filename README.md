# JanSeva AI (GovAssist AI) 🏛️✨
> **IBM Bob-Powered Citizen Services Assistant & Multilingual Welfare Discovery Platform**  
> *Developed for SkillUp in Collaboration with IBM SkillsBuild — AI for Governance & Citizen Services Track*

![JanSeva AI Banner](https://img.shields.io/badge/IBM_SkillsBuild-SkillUp_Governance_Project-4f46e5?style=for-the-badge&logo=ibm)
![License](https://img.shields.io/badge/License-MIT-emerald?style=for-the-badge)
![Languages](https://img.shields.io/badge/Languages-8_Regional_Languages-amber?style=for-the-badge)
![Build](https://img.shields.io/badge/Vite-Built_&_Verified-blue?style=for-the-badge)

---


## 📌 Problem Statement & Vision

Many citizens across rural and urban communities remain unaware of government welfare schemes and public entitlements available to them, or find official gazette notifications and eligibility criteria overly complex to understand. 

**JanSeva AI** bridges this digital divide by serving as an **industry-grade, IBM Bob-powered citizen services assistant** that:
1. **Explains government schemes in simple 5th-grade language**.
2. **Helps citizens identify relevant welfare benefits** through an instant AI eligibility matcher.
3. **Provides step-by-step application guidance** and required document checklists.
4. **Supports 8 regional languages** with built-in voice speech input and audio readouts for low-literacy or visually impaired citizens.

---

## 🌟 Key Features

### 1. 🌐 Multilingual Engine (8 Regional Languages)
Instant switching across **English, Hindi (हिन्दी), Tamil (தமிழ்), Telugu (తెలుగు), Marathi (मराठी), Bengali (বাংলা), Gujarati (ગુજરાતી), and Kannada (<ctrl42>ನ್ನಡ)**. Translates all scheme details, eligibility parameters, navigation, and AI responses dynamically.

### 2. 🤖 AI Citizen Assistant ("JanBot")
- **IBM Bob Architecture**: Conversational assistant equipped with predefined query prompts (e.g. *"PM-KISAN ₹6,000"*, *"Ayushman ₹5 Lakh Health"*, *"Small Business Loan"*).
- **Voice Speech Search (STT)**: Integrated browser Speech Recognition for speech-to-text voice queries.
- **Text-to-Speech Audio Reader (TTS)**: Reads out scheme summaries and AI responses aloud in native accents for illiterate or visually impaired citizens.

### 3. 📊 Instant AI Eligibility Checker & Benefit Calculator
- 3-Step Wizard assessing age, gender, state, social category, annual family income, occupation, landholding size, and special indicators (BPL, Disability, Senior Citizens).
- Computes **Total Calculated Annual Financial Welfare Benefits (in ₹/year)**.
- Renders match percentages (e.g., 100% Match) with transparent criteria breakdowns.

### 4. 📜 Policy Gazette Jargon Simplifier
- **Dual-View Switcher**: Compare **"Simplified 5th-Grade Explanation"** vs **"Official Gazette Legal Notification"**.
- Standalone tool allowing citizens or administrative officers to paste any complex notification and extract plain-language takeaways.

### 5. 📍 CSC Kiosk Locator & Application Tracker
- Locate nearest **Common Service Center (CSC / Jan Seva Kendra / Meeseva)** by District, State, or Pincode with VLE operator contact details and operating hours.
- Track real-time application progress using Reference IDs (e.g., `JS-2026-89412`) with visual stage timelines.

### 6. 📋 Interactive Document Checklist & Print Hub
- Track required identity, income, land, and bank passbook documents.
- Detailed guides on how to obtain missing documents.
- Print/export application packets with one click.

### 7. ♿ Accessibility First (Digital Empowerment)
- High-Contrast mode for low-vision users.
- Adjustable Font Scaler (A-, A, A+).

---

## 🏥 Covered Government Schemes Knowledgebase

| Scheme Name | Category | Primary Benefit |
| :--- | :--- | :--- |
| **PM-KISAN Samman Nidhi** | Agriculture | ₹6,000 / year direct cash transfer |
| **Ayushman Bharat PM-JAY** | Healthcare | ₹5,00,000 / year free hospitalization cover |
| **Sukanya Samriddhi Yojana** | Women & Child | 8.2% P.A. tax-free interest for girl child |
| **PM Awas Yojana (PMAY)** | Housing | ₹1.2 Lakh – ₹2.67 Lakh housing subsidy |
| **PM Mudra Yojana** | MSME & Business | Collateral-free business loan up to ₹10 Lakh |
| **Atal Pension Yojana (APY)** | Pensions | Guaranteed ₹1,000–₹5,000/month pension |
| **PM Vishwakarma Yojana** | Employment & Skills | ₹15,000 toolkit voucher + 5% loan for 18 trades |

---

## 🛠️ Technology Stack

- **Frontend Framework**: React 18 + TypeScript + Vite
- **Styling & UI**: Tailwind CSS v4 + Glassmorphism + Modern Color Tokens
- **Icons**: Lucide React
- **Voice Capabilities**: Browser Web Speech API (SpeechRecognition & SpeechSynthesis)
- **State Management**: React Context API (`LanguageContext`)
- **Build System**: Vite / Rolldown

---

## 🚀 Quick Start & Installation

### Prerequisites
- Node.js 18.x or higher
- npm 9.x or higher

### 1. Clone the Repository
```bash
git clone https://github.com/YOUR_USERNAME/govassist-ai.git
cd govassist-ai
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Local Development Server
```bash
npm run dev
```
Open your browser and navigate to `http://127.0.0.1:3000`.

### 4. Build for Production
```bash
npm run build
```

---

## 🏛️ Social Impact & Alignment

- **SkillUp x IBM SkillsBuild**: Built for the *AI for Governance & Citizen Services* track.
- **Digital Empowerment**: Eliminates middleman exploitation by promoting Direct Benefit Transfer (DBT).
- **Public Service Accessibility**: Solves digital literacy barriers through voice accessibility and regional language support.

---

## 📄 License
This project is open-source and licensed under the [MIT License](LICENSE).
