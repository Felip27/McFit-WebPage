import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
  return (
    <a
      href="https://wa.me/1234567890" // Replace with actual number
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 group"
      aria-label="Contactar por WhatsApp"
    >
      <div className="absolute inset-0 bg-mcfit-yellow rounded-full blur opacity-40 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
      <div className="relative bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 flex items-center justify-center">
        <MessageCircle size={32} fill="white" />
      </div>
    </a>
  );
};

export default WhatsAppButton;