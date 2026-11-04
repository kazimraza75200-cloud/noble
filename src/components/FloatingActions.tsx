import React from 'react';
import { MessageSquare, Phone } from 'lucide-react';

export const FloatingActions: React.FC = () => {
  return (
    <div className="fixed bottom-4 right-4 z-40 flex items-center gap-2">
      {/* Call Button */}
      <a
        href="tel:03032998881"
        className="p-3 bg-slate-900 text-amber-400 hover:text-white hover:bg-slate-800 rounded-full shadow-lg border border-slate-700 transition-transform hover:scale-105 active:scale-95 flex items-center justify-center"
        aria-label="Call 0303-2998881"
        title="Call Now: 0303-2998881"
      >
        <Phone className="w-5 h-5" />
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/923032998881?text=Hello%20Noble%20Computers%20%26%20Coaching%20Centre%2C%20I%20am%20interested%20in%20admission%20details."
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-lg transition-transform hover:scale-105 active:scale-95 flex items-center gap-2 text-xs font-bold"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
      >
        <MessageSquare className="w-4 h-4 fill-current" />
        <span className="hidden sm:inline">WhatsApp</span>
      </a>
    </div>
  );
};
