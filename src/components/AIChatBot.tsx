import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { AIAssistantService } from '../services/aiAssistantService';
import type { ChatMessage, Scheme } from '../types';
import { SCHEMES_DATA } from '../data/schemesData';
import { 
  Bot, 
  X, 
  Send, 
  Mic, 
  MicOff, 
  Volume2, 
  ChevronRight,
  User
} from 'lucide-react';

interface AIChatBotProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectScheme: (scheme: Scheme) => void;
  onOpenChecker: () => void;
}

export const AIChatBot: React.FC<AIChatBotProps> = ({
  isOpen,
  onClose,
  onSelectScheme,
  onOpenChecker
}) => {
  const { lang, t, speakText } = useLanguage();
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome-1',
      sender: 'bot',
      text: `Namaste! 🙏 I am **JanBot**, your Citizen Services AI Assistant.\n\nAsk me anything about government schemes in simple language. E.g. *"I need a loan for small tea shop"* or *"Free hospital coverage for parents"*!`,
      timestamp: 'Just now',
      suggestedAction: {
        type: 'open_checker'
      }
    }
  ]);

  const [inputQuery, setInputQuery] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  if (!isOpen) return null;

  const handleSend = (textToSend?: string) => {
    const query = textToSend || inputQuery;
    if (!query.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    if (!textToSend) setInputQuery('');

    // Simulate AI response delay
    setTimeout(() => {
      const botResponse = AIAssistantService.processUserQuery(query, lang);
      setMessages(prev => [...prev, botResponse]);
      speakText(botResponse.text.replace(/\*\*/g, ''), lang);
    }, 600);
  };

  // Voice Search Recording
  const handleVoiceRecord = () => {
    if (!('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)) {
      alert('Voice input is not supported in your browser.');
      return;
    }

    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    const langMap: Record<string, string> = {
      en: 'en-IN', hi: 'hi-IN', ta: 'ta-IN', te: 'te-IN',
      mr: 'mr-IN', bn: 'bn-IN', gu: 'gu-IN', kn: 'kn-IN'
    };

    recognition.lang = langMap[lang] || 'en-IN';
    recognition.interimResults = false;

    recognition.onstart = () => setIsRecording(true);
    recognition.onend = () => setIsRecording(false);
    recognition.onerror = () => setIsRecording(false);

    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      setInputQuery(transcript);
      handleSend(transcript);
    };

    recognition.start();
  };

  const handleActionClick = (action: ChatMessage['suggestedAction']) => {
    if (!action) return;
    if (action.type === 'open_scheme' && action.schemeId) {
      const found = SCHEMES_DATA.find(s => s.id === action.schemeId);
      if (found) {
        onSelectScheme(found);
        onClose();
      }
    } else if (action.type === 'open_checker') {
      onOpenChecker();
      onClose();
    }
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col h-[580px] max-h-[85vh] animate-in slide-in-from-bottom duration-200">
      
      {/* Header */}
      <div className="bg-slate-950 p-4 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-amber-400 to-orange-500 p-0.5 shadow-lg shadow-amber-500/20">
            <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center">
              <Bot className="w-5 h-5 text-amber-400 animate-pulse" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-bold text-white text-sm">{t('chatHeaderTitle')}</h3>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            </div>
            <p className="text-[10px] text-slate-400">{t('chatHeaderSubtitle')}</p>
          </div>
        </div>

        <button
          onClick={onClose}
          className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white transition"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Preset Prompts Pills */}
      <div className="bg-slate-950/60 p-2 border-b border-slate-800 overflow-x-auto flex gap-1.5 scrollbar-none">
        {[
          'PM-KISAN ₹6000',
          'Ayushman ₹5L Health',
          'Sukanya Girl Savings',
          'Mudra Business Loan',
          'Senior Pension APY'
        ].map((prompt, idx) => (
          <button
            key={idx}
            onClick={() => handleSend(prompt)}
            className="bg-slate-800 hover:bg-indigo-900/60 text-slate-300 hover:text-amber-300 text-[11px] font-semibold px-2.5 py-1 rounded-lg shrink-0 border border-slate-700/60"
          >
            {prompt}
          </button>
        ))}
      </div>

      {/* Chat Messages Body */}
      <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-slate-900/80">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex items-start gap-2.5 ${
              msg.sender === 'user' ? 'flex-row-reverse' : ''
            }`}
          >
            <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
              msg.sender === 'user'
                ? 'bg-indigo-600 text-white'
                : 'bg-gradient-to-tr from-amber-400 to-orange-500 text-slate-950 font-bold'
            }`}>
              {msg.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
            </div>

            <div className={`max-w-[80%] rounded-2xl p-3.5 text-xs sm:text-sm space-y-2 ${
              msg.sender === 'user'
                ? 'bg-indigo-600 text-white rounded-tr-none'
                : 'bg-slate-950 text-slate-200 border border-slate-800 rounded-tl-none shadow-md'
            }`}>
              {/* Formatted Text */}
              <div className="whitespace-pre-line leading-relaxed">
                {msg.text}
              </div>

              {/* Timestamp & Audio */}
              <div className="flex items-center justify-between text-[10px] opacity-75 pt-1 border-t border-slate-800/60">
                <span>{msg.timestamp}</span>
                {msg.sender === 'bot' && (
                  <button
                    onClick={() => speakText(msg.text.replace(/\*\*/g, ''), lang)}
                    className="p-1 hover:text-amber-400"
                    title="Read Aloud"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* Suggested Action CTA */}
              {msg.suggestedAction && (
                <button
                  onClick={() => handleActionClick(msg.suggestedAction)}
                  className="w-full mt-2 bg-gradient-to-r from-amber-400 to-orange-500 text-slate-950 font-bold text-xs px-3 py-2 rounded-xl flex items-center justify-center gap-1 shadow-md hover:scale-102 transition"
                >
                  <span>
                    {msg.suggestedAction.type === 'open_scheme' ? 'View Scheme Details' : 'Run Eligibility Test'}
                  </span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Form */}
      <div className="bg-slate-950 p-3 border-t border-slate-800">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className="flex items-center gap-2"
        >
          <input
            type="text"
            value={inputQuery}
            onChange={(e) => setInputQuery(e.target.value)}
            placeholder={t('chatPlaceholder')}
            className="flex-1 bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-400 focus:border-indigo-500 focus:outline-none"
          />

          {/* Mic Button */}
          <button
            type="button"
            onClick={handleVoiceRecord}
            className={`p-2.5 rounded-xl transition ${
              isRecording ? 'bg-rose-600 text-white animate-bounce' : 'bg-slate-800 text-amber-400 hover:bg-slate-700'
            }`}
          >
            {isRecording ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
          </button>

          {/* Send Button */}
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-500 text-white p-2.5 rounded-xl shadow-md transition"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>

    </div>
  );
};
