import React from 'react';
import { MapPin, Phone, Clock, GraduationCap, MessageSquare, ArrowUp } from 'lucide-react';
import { PageView } from '../types';

interface FooterProps {
  onNavigate: (page: PageView) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      {/* Main Footer Block */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Col 1: Brand & Slogan */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-sky-600 flex items-center justify-center text-white">
                <GraduationCap className="w-6 h-6 text-amber-300" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white tracking-tight">
                  NOBLE COMPUTERS &amp; COACHING CENTRE
                </h3>
                <p className="text-xs text-sky-300 font-semibold uppercase tracking-wider">
                  Soldier Bazar, Karachi
                </p>
              </div>
            </div>

            <p className="text-sm font-medium text-slate-300 italic">
              &ldquo;Quality Education &amp; Practical Computer Skills&rdquo;
            </p>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Dedicated coaching centre for secondary, higher secondary, and degree commerce students, alongside hands-on computer training in MS Office, WordPress, Shopify, and Meta Ads.
            </p>

            <div className="pt-2">
              <span className="text-xs font-semibold text-amber-400">
                Brand Philosophy: &ldquo;Learn. Grow. Succeed.&rdquo;
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-amber-400 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('classes-ix-x')}
                  className="hover:text-amber-400 transition-colors"
                >
                  Classes IX–X (Matric)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('classes-xi-xii')}
                  className="hover:text-amber-400 transition-colors"
                >
                  Classes XI–XII (Intermediate)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('adc')}
                  className="hover:text-amber-400 transition-colors"
                >
                  ADC (Associate Degree in Commerce)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('computer-classes')}
                  className="hover:text-amber-400 transition-colors"
                >
                  Computer Classes (MS Office / Web / Marketing)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-amber-400 transition-colors"
                >
                  Contact Us &amp; Location
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Official Business Contact Details */}
          <div className="lg:col-span-4 space-y-3.5 text-xs text-slate-300">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Centre Details
            </h4>

            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block">Location:</strong>
                <span>Izhan Garden, Parsi Colony, Soldier Bazar, Karachi</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <Phone className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block">Phone:</strong>
                <a href="tel:03032998881" className="hover:text-amber-300 tabular-nums font-semibold">
                  0303-2998881
                </a>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <Clock className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block">Timing:</strong>
                <span>2:00 PM – 8:00 PM</span>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-2">
              <a
                href="https://wa.me/923032998881"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 bg-emerald-600/80 hover:bg-emerald-600 text-white rounded text-[11px] font-semibold flex items-center gap-1.5 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp Us</span>
              </a>
              <a
                href="tel:03032998881"
                className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded text-[11px] font-semibold transition-colors"
              >
                Call: 0303-2998881
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Horizontal Bar */}
        <div className="mt-12 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} NOBLE COMPUTERS &amp; COACHING CENTRE. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-slate-400">Soldier Bazar &middot; Karachi &middot; Pakistan</span>
            <button
              onClick={scrollToTop}
              className="p-2 bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white rounded-lg transition-colors"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
