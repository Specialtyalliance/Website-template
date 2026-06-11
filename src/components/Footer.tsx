import React from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { openChatWidget } from '../utils/openChat';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-teal-900 text-white">
      {/* CTA Banner */}
      <div className="bg-gradient-to-r from-primary-teal to-accent-aqua-700">
        <div className="container-wide py-14">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-2">
                Ready to Transform Your Smile?
              </h3>
              <p className="text-white/80 text-lg">
                Book your visit today -- new patients welcome.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={openChatWidget}
                className="btn-primary !bg-white !text-primary-teal !border-white hover:!bg-accent-aqua-50 group"
              >
                Book Appointment
                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <a href="tel:+16104999999" className="btn-ghost">
                <Phone size={18} />
                (610) 499-9999
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="container-wide py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-accent-aqua" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2C8 2 4 6 4 10c0 3 1.5 5.5 4 7l4 5 4-5c2.5-1.5 4-4 4-7 0-4-4-8-8-8z" />
                  <path d="M10 9a2 2 0 104 0" />
                </svg>
              </div>
              <div>
                <span className="font-display text-lg font-bold text-white leading-none">Dream Smile</span>
                <span className="block text-[11px] uppercase tracking-widest text-white/50">Dental</span>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-xs">
              Providing exceptional dental care with a gentle touch. Your smile is our passion, and your comfort is our priority.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
                { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
                { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/8 hover:bg-accent-aqua/20 flex items-center justify-center text-white/60 hover:text-accent-aqua transition-all duration-300"
                  aria-label={label}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-white/80 mb-6">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:+16104999999" className="flex items-start gap-3 group">
                  <Phone size={18} className="text-accent-aqua mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-white/90 group-hover:text-accent-aqua transition-colors">+1 (610) 499-9999</p>
                    <p className="text-xs text-white/40">Call anytime</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="mailto:dreamsmileonline@gmail.com" className="flex items-start gap-3 group">
                  <Mail size={18} className="text-accent-aqua mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-white/90 group-hover:text-accent-aqua transition-colors">dreamsmileonline@gmail.com</p>
                    <p className="text-xs text-white/40">We reply within 24 hours</p>
                  </div>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-accent-aqua mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-white/90">801 Upland</p>
                  <p className="text-sm text-white/90">PA 19013</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-white/80 mb-6">Office Hours</h4>
            <div className="flex items-start gap-3 mb-4">
              <Clock size={18} className="text-accent-aqua mt-0.5 flex-shrink-0" />
              <div className="space-y-2 text-sm">
                <div className="flex justify-between gap-6">
                  <span className="text-white/60">Monday - Friday</span>
                  <span className="text-white/90 font-medium">9AM - 5PM</span>
                </div>
                <div className="flex justify-between gap-6">
                  <span className="text-white/60">Saturday</span>
                  <span className="text-white/90 font-medium">Closed</span>
                </div>
                <div className="flex justify-between gap-6">
                  <span className="text-white/60">Sunday</span>
                  <span className="text-white/90 font-medium">Closed</span>
                </div>
              </div>
            </div>
            <div className="mt-5 px-4 py-3 rounded-xl bg-accent-aqua/10 border border-accent-aqua/20">
              <p className="text-xs text-accent-aqua font-medium">Book online 24/7</p>
              <p className="text-xs text-white/50 mt-0.5">Schedule your visit anytime, day or night</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-white/80 mb-6">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Our Services', path: '/services' },
                { label: 'Meet the Team', path: '/team' },
                { label: 'Book Appointment', path: '#book', chat: true },
                { label: 'New Patients', path: '/new-patients' },
                { label: 'Insurance Info', path: '/insurance' },
                { label: 'Emergency Care', path: '/emergency' },
                { label: 'Blog', path: '/blog' },
                { label: 'Contact Us', path: '/contact' },
              ].map(({ label, path, chat }: { label: string; path: string; chat?: boolean }) => (
                <li key={label}>
                  {chat ? (
                    <button
                      onClick={openChatWidget}
                      className="text-sm text-white/60 hover:text-accent-aqua transition-colors duration-200 flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 rounded-full bg-white/20 group-hover:bg-accent-aqua transition-colors" />
                      {label}
                    </button>
                  ) : (
                    <Link
                      to={path}
                      className="text-sm text-white/60 hover:text-accent-aqua transition-colors duration-200 flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 rounded-full bg-white/20 group-hover:bg-accent-aqua transition-colors" />
                      {label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-wide py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            &copy; {currentYear} Dream Smile Dental. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-white/40">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Accessibility</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
