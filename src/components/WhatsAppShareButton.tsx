import React from 'react';
import { MessageCircle } from 'lucide-react';
import type { Scheme } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface WhatsAppShareButtonProps {
  scheme: Scheme;
  className?: string;
}

export const WhatsAppShareButton: React.FC<WhatsAppShareButtonProps> = ({ scheme, className = '' }) => {
  const { lang } = useLanguage();

  const handleShare = () => {
    const titleText = scheme.title[lang] || scheme.title.en;
    const descText = scheme.shortDescription[lang] || scheme.shortDescription.en;
    const liveUrl = 'https://capable-faloodeh-5f8062.netlify.app';

    const message = `🏛️ *${titleText}*\n\n` +
      `💰 *Max Financial Benefit:* ${scheme.maxBenefit}\n` +
      `🏛️ *Department:* ${scheme.department}\n` +
      `📞 *Helpline Number:* ${scheme.helplineNumber}\n\n` +
      `📝 *Summary:* ${descText}\n\n` +
      `👇 *Check Eligibility & Apply:* ${liveUrl}`;

    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleShare}
      className={`bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs px-3.5 py-2 rounded-xl shadow flex items-center justify-center gap-1.5 transition active:scale-95 ${className}`}
      title="Share on WhatsApp"
    >
      <MessageCircle className="w-4 h-4 text-emerald-200 fill-emerald-200" />
      <span>Share WhatsApp</span>
    </button>
  );
};
