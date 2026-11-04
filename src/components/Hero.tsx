import React from 'react';
import { ArrowRight, Phone, MessageSquare, BookOpen, Monitor, Award, CheckCircle2, Clock, MapPin, Sparkles } from 'lucide-react';
import { PageView } from '../types';
import { EducationHeaderIllustration } from './EducationHeaderIllustration';

interface HeroProps {
  onNavigate: (page: PageView) => void;
  onOpenEnrollModal: (course?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate, onOpenEnrollModal }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white pt-8 pb-16 lg:pt-12 lg:pb-20 border-b border-slate-800">
      {/* Background Subtle Geometric Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-6 space-y-6 text-left">
            {/* Top Quiet Trust Markers */}
            <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-slate-300">
              <span className="flex items-center gap-1.5 text-amber-400 font-semibold tracking-wide">
                <Award className="w-4 h-4 text-amber-400" />
                Trusted Karachi Education Centre
              </span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-sky-400" />
                Soldier Bazar, Karachi
              </span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <Clock className="w-3.5 h-3.5 text-emerald-400" />
                2:00 PM – 8:00 PM
              </span>
            </div>

            {/* Main Headings */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                NOBLE COMPUTERS &amp; <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-amber-300 to-amber-400">
                  COACHING CENTRE
                </span>
              </h1>
              <p className="text-lg sm:text-xl font-semibold text-sky-200">
                Quality Education &amp; Practical Computer Skills
              </p>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
              Empowering students and aspiring professionals in Karachi with board-focused academic coaching
              for Classes IX, X, XI, XII &amp; ADC, paired with hands-on computer courses in MS Office,
              WordPress, Shopify, and Meta Ads.
            </p>

            {/* Core Value Props */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 pb-1 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>BSEK &amp; BIEK Karachi Board Exam Preparation</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Modern Practical Computer Workstation Lab</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Experienced Faculty &amp; Past Paper Mock Drills</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Convenient Afternoon &amp; Evening Batches</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={() => onOpenEnrollModal()}
                className="px-6 py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold rounded-lg text-sm sm:text-base shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2 cursor-pointer"
              >
                <span>Enroll Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('contact')}
                className="px-5 py-3 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg text-sm sm:text-base border border-slate-700 transition-colors flex items-center gap-2 cursor-pointer"
              >
                <span>Contact Us</span>
              </button>

              <a
                href="https://wa.me/923032998881?text=Hello%20Noble%20Computers%2C%20I%20want%20to%20inquire%20about%20admissions."
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 bg-emerald-600/90 hover:bg-emerald-600 text-white font-semibold rounded-lg text-sm sm:text-base transition-colors flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>

              <a
                href="tel:03032998881"
                className="px-4 py-3 bg-slate-800/80 hover:bg-slate-800 text-slate-200 font-semibold rounded-lg text-sm sm:text-base border border-slate-700 transition-colors flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span className="tabular-nums">0303-2998881</span>
              </a>
            </div>

            {/* Brand Motto Callout */}
            <div className="pt-3 border-t border-slate-800/80 text-xs sm:text-sm text-slate-400 flex items-center gap-2">
              <span className="font-semibold text-amber-400">Brand Philosophy:</span>
              <span className="italic font-medium text-slate-200">&ldquo;Learn. Grow. Succeed.&rdquo;</span>
            </div>
          </div>

          {/* Right Column: Prominent Education Image / Visual & Quick Actions */}
          <div className="lg:col-span-6 space-y-4">
            {/* High-Resolution Education Scene Image */}
            <EducationHeaderIllustration />

            {/* Quick 2-Stream Interactive Bar */}
            <div className="grid grid-cols-2 gap-3 pt-1">
              <button
                onClick={() => onNavigate('classes-ix-x')}
                className="p-3 bg-slate-800/80 hover:bg-slate-800 rounded-xl border border-slate-700 text-left transition-colors cursor-pointer group"
              >
                <div className="flex items-center gap-2 text-sky-400 font-semibold text-xs mb-1">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Academic Coaching</span>
                </div>
                <p className="text-[11px] text-slate-400 line-clamp-1">
                  Classes IX-X, XI-XII &amp; ADC
                </p>
              </button>

              <button
                onClick={() => onNavigate('computer-classes')}
                className="p-3 bg-slate-800/80 hover:bg-slate-800 rounded-xl border border-slate-700 text-left transition-colors cursor-pointer group"
              >
                <div className="flex items-center gap-2 text-amber-400 font-semibold text-xs mb-1">
                  <Monitor className="w-3.5 h-3.5" />
                  <span>Computer Training</span>
                </div>
                <p className="text-[11px] text-slate-400 line-clamp-1">
                  MS Office, WordPress, Shopify, Meta Ads
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
