import React, { useEffect, useState } from 'react';
import { Phone, Calendar, Navigation } from 'lucide-react';
import { openChatWidget } from '../utils/openChat';
const DIRECTIONS_URL =
  'https://www.google.com/maps/dir/?api=1&destination=801+Upland+Ave+Suite+B,+Upper+Chichester,+PA+19013';

const StickyBottomBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 will-change-transform transition-transform duration-300 ease-out ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      {/* Desktop */}
      <div className="hidden md:flex justify-center pb-5 pointer-events-none">
        <div className="pointer-events-auto flex items-stretch gap-3 p-2 bg-white/80 backdrop-blur-xl rounded-2xl shadow-elevated border border-surface-200">
          <button
            onClick={openChatWidget}
            className="flex items-center gap-2.5 px-8 py-3.5 rounded-xl bg-gradient-to-r from-accent-aqua to-accent-aqua-600 text-white font-semibold text-[14px] hover:shadow-glow-teal hover:scale-[1.02] transition-all duration-200"
          >
            <Calendar size={17} strokeWidth={2.2} />
            Book Online 24/7
          </button>
          <a
            href="tel:+16104999999"
            className="flex items-center gap-2.5 px-8 py-3.5 rounded-xl bg-primary-teal-900 text-white font-semibold text-[14px] hover:bg-primary-teal-800 hover:scale-[1.02] transition-all duration-200"
          >
            <Phone size={17} strokeWidth={2.2} />
            Call Us 24/7
          </a>
          <a
            href={DIRECTIONS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 px-8 py-3.5 rounded-xl bg-primary-teal-900 text-white font-semibold text-[14px] hover:bg-primary-teal-800 hover:scale-[1.02] transition-all duration-200"
          >
            <Navigation size={17} strokeWidth={2.2} />
            Directions
          </a>
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden safe-area-bottom">
        <div className="flex items-stretch gap-2 px-3 pb-3 pt-2 bg-white/95 backdrop-blur-xl border-t border-surface-200 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
          <button
            onClick={openChatWidget}
            className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-accent-aqua to-accent-aqua-600 text-white font-semibold text-[13px] active:scale-[0.97] transition-transform duration-150"
          >
            <Calendar size={16} strokeWidth={2.2} />
            Book 24/7
          </button>
          <a
            href="tel:+16104999999"
            className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl bg-primary-teal-900 text-white font-semibold text-[13px] active:scale-[0.97] transition-transform duration-150"
          >
            <Phone size={16} strokeWidth={2.2} />
            Call 24/7
          </a>
          <a
            href={DIRECTIONS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl bg-primary-teal-900 text-white font-semibold text-[13px] active:scale-[0.97] transition-transform duration-150"
          >
            <Navigation size={16} strokeWidth={2.2} />
            Directions
          </a>
        </div>
      </div>
    </div>
  );
};

export default StickyBottomBar;
