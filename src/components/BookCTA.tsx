import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import { openChatWidget } from '../utils/openChat';

interface BookCTAProps {
  className?: string;
  specialContrast?: boolean;
}

const BookCTA: React.FC<BookCTAProps> = ({ className = '', specialContrast = false }) => {
  return (
    <div className={`flex flex-col sm:flex-row gap-4 items-center justify-center ${className}`}>
      <button
        onClick={openChatWidget}
        className={specialContrast ? 'btn-primary !bg-white !text-primary-teal !border-white hover:!bg-accent-aqua-50 group' : 'btn-primary group'}
        aria-label="Book online 24/7"
      >
        Book Online 24/7
        <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
      </button>
      <a
        href="tel:+16104999999"
        className={specialContrast ? 'btn-ghost' : 'btn-secondary'}
        aria-label="Call our office at +1 (610) 499-9999"
      >
        <Phone size={18} />
        Call Us 24/7
      </a>
    </div>
  );
};

export default BookCTA;
