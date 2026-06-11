import React from 'react';

import { ArrowRight, Phone } from 'lucide-react';
import { openChatWidget } from '../utils/openChat';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  compact?: boolean;
  showCTA?: boolean;
  extraActions?: React.ReactNode;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  backgroundImage,
  compact = false,
  showCTA = false,
  extraActions,
}) => {
  return (
    <section
      className={`relative overflow-hidden ${compact ? 'min-h-[50vh]' : 'min-h-[92vh]'} flex items-center`}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />

      {/* Multi-layer gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-teal-900/90 via-primary-teal-800/75 to-primary-teal-700/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary-teal-900/60 via-transparent to-transparent" />

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent-aqua/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent-aqua/5 rounded-full blur-3xl" />

      {/* Content */}
      <div className="container-wide relative z-10 py-20">
        <div className={`${compact ? 'max-w-2xl' : 'max-w-3xl'}`}>
          {!compact && (
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/15 mb-8 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-accent-aqua animate-pulse-soft" />
              <span className="text-white/90 text-sm font-medium">Accepting New Patients</span>
            </div>
          )}

          <h1
            className={`font-display text-white mb-6 leading-tight animate-fade-in-up ${
              compact
                ? 'text-display-sm md:text-display-md'
                : 'text-display-md md:text-display-lg lg:text-display-xl'
            }`}
          >
            {title}
          </h1>

          <p
            className={`text-white/85 mb-10 max-w-xl animate-fade-in-up animate-delay-200 ${
              compact ? 'text-body' : 'text-body-lg md:text-xl leading-relaxed'
            }`}
          >
            {subtitle}
          </p>

          {showCTA && (
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 animate-fade-in-up animate-delay-400">
              <button onClick={openChatWidget} className="btn-primary !bg-white !text-primary-teal !border-white hover:!bg-accent-aqua-50 hover:!border-accent-aqua-50 group">
                Book Online 24/7
                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <a href="tel:+16104999999" className="btn-ghost group">
                <Phone size={18} />
                Call Us 24/7
              </a>
              {extraActions}
            </div>
          )}

          {!compact && !showCTA && (
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 animate-fade-in-up animate-delay-400">
              <button onClick={openChatWidget} className="btn-primary !bg-white !text-primary-teal !border-white hover:!bg-accent-aqua-50 hover:!border-accent-aqua-50 group">
                Book Online 24/7
                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <a href="tel:+16104999999" className="btn-ghost group">
                <Phone size={18} />
                Call Us 24/7
              </a>
              {extraActions}
            </div>
          )}
        </div>

        {/* Trust indicators */}
        {!compact && (
          <div className="mt-16 flex flex-wrap items-center gap-8 animate-fade-in-up animate-delay-600">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {[
                  'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=80',
                  'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=80',
                  'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=80',
                ].map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt=""
                    className="w-9 h-9 rounded-full border-2 border-white object-cover"
                  />
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-white/70 text-xs mt-0.5">10,000+ Happy Patients</p>
              </div>
            </div>
            <div className="hidden md:block w-px h-8 bg-white/20" />
            <div className="text-white/70 text-sm">
              <span className="text-white font-semibold">15+</span> Years of Excellence
            </div>
            <div className="hidden md:block w-px h-8 bg-white/20" />
            <div className="text-white/70 text-sm">
              <span className="text-white font-semibold">Book Online</span> 24/7
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
