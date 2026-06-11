import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Menu, X, Phone, ChevronDown, MapPin } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { openChatWidget } from '../utils/openChat';

const navGroups = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Our Team', path: '/team' },
  {
    name: 'Services',
    path: '/services',
    children: [
      { name: 'All Services', path: '/services' },
      { name: 'Technology', path: '/technology' },
      { name: 'Emergency Care', path: '/emergency' },
    ],
  },
  {
    name: 'Patients',
    path: '/new-patients',
    children: [
      { name: 'New Patients', path: '/new-patients' },
      { name: 'Insurance & Payments', path: '/insurance' },
      { name: 'Testimonials', path: '/testimonials' },
    ],
  },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];

interface NavItem {
  name: string;
  path: string;
  children?: { name: string; path: string }[];
}

const MobileDropdown: React.FC<{
  item: NavItem;
  isOpen: boolean;
  onToggle: () => void;
  currentPath: string;
}> = ({ item, isOpen, onToggle, currentPath }) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  const measure = useCallback(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, []);

  useEffect(() => {
    measure();
  }, [measure]);

  return (
    <div>
      <button
        onClick={onToggle}
        className="flex items-center justify-between w-full py-3.5 px-4 text-base font-medium text-text-main rounded-xl hover:bg-surface-100 transition-colors"
      >
        {item.name}
        <ChevronDown
          size={18}
          className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        style={{ height: isOpen ? height : 0 }}
        className="overflow-hidden transition-[height] duration-200 ease-out"
      >
        <div ref={contentRef} className="pl-6 space-y-1 py-1">
          {item.children?.map((child) => (
            <Link
              key={child.path}
              to={child.path}
              className={`block py-2.5 px-4 text-sm font-medium rounded-lg transition-colors ${
                currentPath === child.path
                  ? 'text-primary-teal bg-primary-teal-50'
                  : 'text-text-light hover:text-primary-teal hover:bg-surface-100'
              }`}
            >
              {child.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setOpenDropdown(null);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ease-premium ${
        isOpen
          ? 'bg-white py-2'
          : isScrolled
            ? 'bg-white/95 backdrop-blur-xl shadow-soft py-2'
            : 'bg-transparent py-4'
      }`}
    >
      <div className="container-wide">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
              isScrolled || isOpen
                ? 'bg-primary-teal text-white'
                : 'bg-white/15 backdrop-blur-sm text-white border border-white/20'
            }`}>
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2C8 2 4 6 4 10c0 3 1.5 5.5 4 7l4 5 4-5c2.5-1.5 4-4 4-7 0-4-4-8-8-8z" />
                <path d="M10 9a2 2 0 104 0" />
              </svg>
            </div>
            <div>
              <span className={`font-display text-xl font-bold leading-none transition-colors duration-300 ${
                isScrolled || isOpen ? 'text-primary-teal' : 'text-white'
              }`}>
                Dream Smile
              </span>
              <span className={`block text-overline uppercase tracking-wider transition-colors duration-300 ${
                isScrolled || isOpen ? 'text-text-muted' : 'text-white/70'
              }`}>
                Dental
              </span>
              <span className={`hidden lg:flex items-center gap-1 mt-0.5 transition-colors duration-300 ${
                isScrolled || isOpen ? 'text-text-muted/70' : 'text-white/50'
              }`}>
                <MapPin size={10} className="flex-shrink-0" />
                <span className="text-[10px] font-medium tracking-wide whitespace-nowrap">
                  801 Upland Ave, Upland, PA 19013
                </span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navGroups.map((item) => (
              <div key={item.path} className="relative group">
                <Link
                  to={item.path}
                  className={`relative flex items-center gap-1 px-4 py-2.5 text-[14px] font-medium rounded-lg transition-all duration-300 ${
                    isScrolled
                      ? 'text-text-main hover:text-primary-teal hover:bg-primary-teal-50'
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                  } ${
                    location.pathname === item.path
                      ? isScrolled ? 'text-primary-teal bg-primary-teal-50' : 'text-white bg-white/15'
                      : ''
                  }`}
                >
                  {item.name}
                  {item.children && <ChevronDown size={14} className="opacity-60" />}
                </Link>

                {/* Dropdown */}
                {item.children && (
                  <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <div className="bg-white rounded-2xl shadow-elevated border border-surface-200 py-2 min-w-[220px] overflow-hidden">
                      {item.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className={`block px-5 py-3 text-sm font-medium transition-all duration-200 hover:bg-primary-teal-50 hover:text-primary-teal ${
                            location.pathname === child.path
                              ? 'text-primary-teal bg-primary-teal-50'
                              : 'text-text-main'
                          }`}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+16104999999"
              className={`flex items-center gap-2 text-sm font-medium transition-colors duration-300 ${
                isScrolled ? 'text-text-main hover:text-primary-teal' : 'text-white/90 hover:text-white'
              }`}
            >
              <Phone size={16} />
              <span>(610) 499-9999</span>
            </a>
            <button
              onClick={openChatWidget}
              className="btn-primary !px-5 !py-2.5 !text-[13px]"
            >
              Book Now
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            className={`lg:hidden p-2 rounded-xl transition-all duration-300 ${
              isScrolled || isOpen ? 'text-text-main hover:bg-surface-100' : 'text-white hover:bg-white/10'
            }`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden fixed inset-0 top-0 bg-white z-40 will-change-transform transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between px-4 sm:px-6 py-4 border-b border-surface-200">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary-teal text-white flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2C8 2 4 6 4 10c0 3 1.5 5.5 4 7l4 5 4-5c2.5-1.5 4-4 4-7 0-4-4-8-8-8z" />
                <path d="M10 9a2 2 0 104 0" />
              </svg>
            </div>
            <span className="font-display text-xl font-bold text-primary-teal">Dream Smile</span>
          </Link>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-xl text-text-main hover:bg-surface-100 transition-colors"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="px-4 sm:px-6 py-6 overflow-y-auto max-h-[calc(100vh-80px)]">
          <div className="space-y-1">
            {navGroups.map((item) => (
              <div key={item.path}>
                {item.children ? (
                  <MobileDropdown
                    item={item}
                    isOpen={openDropdown === item.name}
                    onToggle={() =>
                      setOpenDropdown(openDropdown === item.name ? null : item.name)
                    }
                    currentPath={location.pathname}
                  />
                ) : (
                  <Link
                    to={item.path}
                    className={`block py-3.5 px-4 text-base font-medium rounded-xl transition-colors ${
                      location.pathname === item.path
                        ? 'text-primary-teal bg-primary-teal-50'
                        : 'text-text-main hover:bg-surface-100'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-surface-200 space-y-4">
            <a
              href="tel:+16104999999"
              className="flex items-center gap-3 py-3 px-4 text-text-main font-medium rounded-xl hover:bg-surface-100 transition-colors"
            >
              <Phone size={20} className="text-accent-aqua" />
              (610) 499-9999
            </a>
            <button onClick={openChatWidget} className="btn-primary w-full justify-center">
              Book Appointment
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
