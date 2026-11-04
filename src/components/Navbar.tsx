import React, { useState } from 'react';
import { Phone, Menu, X, Clock, MapPin, GraduationCap } from 'lucide-react';
import { PageView } from '../types';

interface NavbarProps {
  currentPage: PageView;
  onNavigate: (page: PageView) => void;
  onOpenEnrollModal: (courseName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenEnrollModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { label: string; page: PageView }[] = [
    { label: 'Home', page: 'home' },
    { label: 'Classes IX–X', page: 'classes-ix-x' },
    { label: 'Classes XI–XII', page: 'classes-xi-xii' },
    { label: 'ADC', page: 'adc' },
    { label: 'Computer Classes', page: 'computer-classes' },
    { label: 'Contact Us', page: 'contact' },
  ];

  const handleNavClick = (page: PageView) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-slate-900 border-b border-slate-800 text-white shadow-md">
      {/* Utility Micro Bar */}
      <div className="hidden md:block bg-slate-950/80 text-xs text-slate-300 border-b border-slate-800/80 px-6 py-1.5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              Izhan Garden, Parsi Colony, Soldier Bazar, Karachi
            </span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-sky-400" />
              Classes Timing: 2:00 PM – 8:00 PM
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs font-medium">
            <span className="text-amber-400 font-semibold tracking-wide">Admissions Open 2026</span>
            <a
              href="tel:03032998881"
              className="flex items-center gap-1.5 text-white hover:text-amber-300 transition-colors"
            >
              <Phone className="w-3 h-3 text-emerald-400" />
              <span className="tabular-nums font-semibold">0303-2998881</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main One-Row Top Bar Contract */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Zone 1: Single Text Element Brand Wordmark */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left focus:outline-none group"
            aria-label="Noble Computers & Coaching Centre Home"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-sky-500 to-blue-700 flex items-center justify-center text-white shadow-sm ring-1 ring-white/10 group-hover:from-sky-400 group-hover:to-blue-600 transition-all">
              <GraduationCap className="w-5 h-5 text-amber-300" />
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-bold tracking-tight text-white leading-none">
                NOBLE COMPUTERS
              </span>
              <span className="text-[11px] sm:text-xs text-sky-300 font-semibold tracking-wider uppercase mt-1">
                &amp; Coaching Centre
              </span>
            </div>
          </button>

          {/* Zone 2: 4-6 Clean Text Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium">
            {navLinks.map((item) => {
              const isActive = currentPage === item.page;
              return (
                <button
                  key={item.page}
                  onClick={() => handleNavClick(item.page)}
                  className={`relative py-1 transition-colors whitespace-nowrap ${
                    isActive
                      ? 'text-amber-400 font-semibold'
                      : 'text-slate-200 hover:text-white'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-400 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: 1-2 Primary Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="tel:03032998881"
              className="px-3 py-2 text-xs font-semibold text-slate-200 hover:text-white bg-slate-800/80 hover:bg-slate-800 border border-slate-700 rounded-lg transition-colors flex items-center gap-1.5 whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span className="tabular-nums">0303-2998881</span>
            </a>
            <button
              onClick={() => onOpenEnrollModal()}
              className="px-4 py-2 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-all shadow-sm active:scale-95 whitespace-nowrap"
            >
              Enroll Now
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => onOpenEnrollModal()}
              className="sm:hidden px-3 py-1.5 text-xs font-bold text-slate-950 bg-amber-400 rounded-md whitespace-nowrap"
            >
              Enroll
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-900 border-b border-slate-800 px-4 pt-2 pb-6 space-y-2">
          <div className="text-xs text-slate-400 px-3 py-1.5 bg-slate-950/60 rounded-md mb-2 flex items-center justify-between">
            <span>Soldier Bazar, Karachi</span>
            <span className="text-amber-400 font-medium">2:00 PM – 8:00 PM</span>
          </div>

          {navLinks.map((item) => {
            const isActive = currentPage === item.page;
            return (
              <button
                key={item.page}
                onClick={() => handleNavClick(item.page)}
                className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors flex items-center justify-between ${
                  isActive
                    ? 'bg-amber-400/10 text-amber-400 font-semibold border-l-4 border-amber-400'
                    : 'text-slate-200 hover:bg-slate-800'
                }`}
              >
                <span>{item.label}</span>
              </button>
            );
          })}

          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
            <a
              href="tel:03032998881"
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-800 text-slate-100 rounded-lg text-sm font-medium"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              Call Now: 0303-2998881
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEnrollModal();
              }}
              className="w-full px-4 py-2.5 bg-amber-400 text-slate-950 font-bold rounded-lg text-sm shadow text-center"
            >
              Enroll Now / Admission Inquiry
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
