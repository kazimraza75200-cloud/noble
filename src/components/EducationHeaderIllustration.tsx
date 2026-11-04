import React from 'react';
import { BookOpen, GraduationCap, Laptop, Award, Star, CheckCircle, Sparkles, TrendingUp } from 'lucide-react';

export const EducationHeaderIllustration: React.FC = () => {
  return (
    <div className="relative w-full rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 group">
      {/* Top Banner Tag */}
      <div className="absolute top-3 left-3 z-20 flex items-center gap-1.5 px-3 py-1 bg-slate-950/80 backdrop-blur-md rounded-full border border-amber-400/30 text-amber-300 text-xs font-bold shadow-md">
        <Sparkles className="w-3.5 h-3.5 text-amber-400" />
        <span>Noble Education &amp; IT Campus</span>
      </div>

      <div className="absolute top-3 right-3 z-20 flex items-center gap-1.5 px-3 py-1 bg-emerald-950/80 backdrop-blur-md rounded-full border border-emerald-500/30 text-emerald-300 text-xs font-semibold shadow-md">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span>Admissions Open 2026</span>
      </div>

      {/* SVG Education Art Scene */}
      <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] flex items-center justify-center p-4 sm:p-6 overflow-hidden">
        {/* Ambient Glows */}
        <div className="absolute -top-12 -left-12 w-48 h-48 bg-sky-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-12 -right-12 w-56 h-56 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

        <svg
          viewBox="0 0 680 420"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full object-contain filter drop-shadow-xl"
        >
          <defs>
            {/* Gradients */}
            <linearGradient id="deskGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1e293b" />
              <stop offset="50%" stopColor="#334155" />
              <stop offset="100%" stopColor="#1e293b" />
            </linearGradient>

            <linearGradient id="screenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0284c7" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>

            <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fbbf24" />
              <stop offset="100%" stopColor="#d97706" />
            </linearGradient>

            <linearGradient id="bookRed" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#e11d48" />
              <stop offset="100%" stopColor="#be123c" />
            </linearGradient>

            <linearGradient id="bookBlue" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#2563eb" />
              <stop offset="100%" stopColor="#1d4ed8" />
            </linearGradient>

            <linearGradient id="bookEmerald" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#059669" />
              <stop offset="100%" stopColor="#047857" />
            </linearGradient>

            <linearGradient id="boardGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0f172a" />
              <stop offset="100%" stopColor="#1e293b" />
            </linearGradient>
          </defs>

          {/* Classroom Whiteboard in Background */}
          <rect x="60" y="30" width="560" height="230" rx="14" fill="url(#boardGrad)" stroke="#475569" strokeWidth="3" />
          <rect x="72" y="42" width="536" height="206" rx="8" fill="#0b1329" opacity="0.9" />

          {/* Whiteboard Content: Math, Science, and Code */}
          <g opacity="0.85">
            {/* Mathematical formulas & equations */}
            <text x="96" y="78" fill="#38bdf8" fontFamily="system-ui, sans-serif" fontSize="15" fontWeight="bold">
              BSEK &amp; BIEK Karachi Board Coaching
            </text>
            <text x="96" y="104" fill="#94a3b8" fontFamily="monospace" fontSize="13">
              f(x) = ax² + bx + c  |  E = mc²  |  Assets = Liabilities + Equity
            </text>
            <text x="96" y="128" fill="#fbbf24" fontFamily="monospace" fontSize="13">
              dy/dx [sin(x)] = cos(x)   |   NaCl + AgNO₃ → AgCl↓ + NaNO₃
            </text>

            {/* Computer Code on board */}
            <text x="96" y="160" fill="#34d399" fontFamily="monospace" fontSize="13">
              &lt;WordPress / Shopify Store / Meta Ads Marketing / MS Excel&gt;
            </text>
            <text x="96" y="184" fill="#a78bfa" fontFamily="monospace" fontSize="13">
              VLOOKUP(id, table, 2, FALSE) | ROI = (Revenue - Ad Spend) / Ad Spend
            </text>

            {/* Board grid lines / sketch chart */}
            <path d="M 460 130 L 490 100 L 520 120 L 555 70 L 590 85" stroke="#38bdf8" strokeWidth="2.5" fill="none" />
            <circle cx="555" cy="70" r="4" fill="#38bdf8" />
            <text x="465" y="155" fill="#38bdf8" fontFamily="sans-serif" fontSize="11" fontWeight="bold">
              98% Passing Rate
            </text>
          </g>

          {/* Study Desk Surface */}
          <rect x="30" y="270" width="620" height="30" rx="6" fill="url(#deskGrad)" stroke="#475569" strokeWidth="1.5" />
          <rect x="50" y="300" width="580" height="90" fill="#0f172a" opacity="0.9" />

          {/* Central Desktop Workstation Monitor */}
          <rect x="250" y="130" width="180" height="120" rx="8" fill="#1e293b" stroke="#64748b" strokeWidth="3" />
          <rect x="258" y="138" width="164" height="104" rx="4" fill="url(#screenGrad)" />
          
          {/* Screen Content: Spreadsheet & Web preview */}
          <rect x="264" y="145" width="152" height="14" rx="2" fill="#0369a1" />
          <text x="270" y="156" fill="#ffffff" fontFamily="sans-serif" fontSize="8" fontWeight="bold">
            MS Excel &amp; Shopify Analytics
          </text>
          <rect x="264" y="165" width="46" height="40" rx="3" fill="#082f49" stroke="#38bdf8" strokeWidth="1" />
          <rect x="316" y="165" width="98" height="18" rx="2" fill="#0c4a6e" />
          <rect x="316" y="187" width="98" height="18" rx="2" fill="#0c4a6e" />
          <circle cx="287" cy="185" r="12" fill="none" stroke="#fbbf24" strokeWidth="3" strokeDasharray="50 25" />

          {/* Monitor Stand */}
          <rect x="328" y="250" width="24" height="24" fill="#334155" />
          <rect x="305" y="272" width="70" height="8" rx="3" fill="#475569" />

          {/* Keyboard & Mouse on Desk */}
          <rect x="280" y="284" width="120" height="10" rx="2" fill="#334155" stroke="#64748b" strokeWidth="1" />
          <rect x="415" y="283" width="16" height="12" rx="5" fill="#475569" />

          {/* Left Side: Stack of Karachi Board Hardcover Textbooks */}
          {/* Book 1 (Bottom): Advanced Accounting & ADC */}
          <rect x="75" y="260" width="145" height="16" rx="3" fill="url(#bookRed)" stroke="#9f1239" strokeWidth="1" />
          <text x="85" y="272" fill="#ffffff" fontFamily="sans-serif" fontSize="8" fontWeight="bold">
            UoK ADC Financial Accounting
          </text>

          {/* Book 2: Mathematics Classes XI - XII */}
          <rect x="80" y="242" width="138" height="16" rx="3" fill="url(#bookBlue)" stroke="#1e40af" strokeWidth="1" />
          <text x="90" y="254" fill="#ffffff" fontFamily="sans-serif" fontSize="8" fontWeight="bold">
            Intermediate Mathematics XI - XII
          </text>

          {/* Book 3: Matric Science Class IX - X */}
          <rect x="85" y="224" width="130" height="16" rx="3" fill="url(#bookEmerald)" stroke="#065f46" strokeWidth="1" />
          <text x="95" y="236" fill="#ffffff" fontFamily="sans-serif" fontSize="8" fontWeight="bold">
            BSEK Matric Science IX - X
          </text>

          {/* Book 4 (Top): Computer Skills & IT */}
          <rect x="90" y="206" width="120" height="16" rx="3" fill="#d97706" stroke="#b45309" strokeWidth="1" />
          <text x="98" y="218" fill="#ffffff" fontFamily="sans-serif" fontSize="8" fontWeight="bold">
            WordPress &amp; Meta Ads Lab
          </text>

          {/* Graduation Mortarboard / Academic Cap on Books */}
          <g transform="translate(100, 140)">
            {/* Diamond cap top */}
            <polygon points="50,15 100,35 50,55 0,35" fill="#0f172a" stroke="#fbbf24" strokeWidth="2.5" />
            <polygon points="50,20 90,35 50,50 10,35" fill="#1e293b" />
            {/* Cap skull cap under */}
            <path d="M 25 45 C 25 65 75 65 75 45" fill="#0f172a" stroke="#fbbf24" strokeWidth="1.5" />
            {/* Gold Button on center */}
            <circle cx="50" cy="35" r="4.5" fill="#fbbf24" />
            {/* Gold Tassel dangling */}
            <path d="M 50 35 Q 20 45 15 62" stroke="#fbbf24" strokeWidth="2.5" fill="none" />
            <rect x="12" y="62" width="6" height="10" rx="1.5" fill="#f59e0b" />
          </g>

          {/* Right Side: Educational Certificate / Diploma Roll tied with red ribbon */}
          <g transform="translate(480, 210)">
            {/* Rolled Diploma */}
            <rect x="20" y="45" width="120" height="18" rx="4" fill="#fef3c7" stroke="#d97706" strokeWidth="1.5" />
            <rect x="70" y="43" width="14" height="22" rx="2" fill="#e11d48" />
            <circle cx="77" cy="54" r="5" fill="#fbbf24" />
            {/* Open Certificate Sheet */}
            <rect x="30" y="-30" width="105" height="70" rx="4" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
            <rect x="36" y="-24" width="93" height="58" rx="2" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
            <text x="44" y="-8" fill="#0f172a" fontFamily="serif" fontSize="7" fontWeight="bold">
              CERTIFICATE OF MERIT
            </text>
            <line x1="44" y1="-2" x2="115" y2="-2" stroke="#94a3b8" strokeWidth="1" />
            <line x1="44" y1="6" x2="110" y2="6" stroke="#94a3b8" strokeWidth="0.8" />
            <line x1="44" y1="12" x2="98" y2="12" stroke="#94a3b8" strokeWidth="0.8" />
            <line x1="44" y1="18" x2="105" y2="18" stroke="#94a3b8" strokeWidth="0.8" />
            {/* Golden Ribbon Seal */}
            <circle cx="112" cy="22" r="7" fill="url(#goldGrad)" stroke="#b45309" strokeWidth="1" />
            <polygon points="109,27 112,35 115,27" fill="#dc2626" />
          </g>

          {/* Desk Pen Stand & Stationery */}
          <rect x="445" y="250" width="22" height="28" rx="4" fill="#334155" stroke="#475569" strokeWidth="1" />
          <line x1="450" y1="240" x2="452" y2="255" stroke="#38bdf8" strokeWidth="3" strokeLinecap="round" />
          <line x1="456" y1="236" x2="456" y2="255" stroke="#fbbf24" strokeWidth="3" strokeLinecap="round" />
          <line x1="462" y1="242" x2="460" y2="255" stroke="#ef4444" strokeWidth="3" strokeLinecap="round" />

          {/* Floating Achievement & Badge Elements */}
          <g transform="translate(520, 45)">
            <rect x="0" y="0" width="85" height="34" rx="8" fill="#1e293b" stroke="#fbbf24" strokeWidth="1.5" />
            <text x="10" y="16" fill="#fbbf24" fontFamily="sans-serif" fontSize="10" fontWeight="bold">
              GRADE A-1
            </text>
            <text x="10" y="27" fill="#94a3b8" fontFamily="sans-serif" fontSize="8">
              Target Results
            </text>
          </g>

          <g transform="translate(75, 45)">
            <rect x="0" y="0" width="95" height="34" rx="8" fill="#1e293b" stroke="#38bdf8" strokeWidth="1.5" />
            <text x="10" y="15" fill="#38bdf8" fontFamily="sans-serif" fontSize="10" fontWeight="bold">
              SOLDIER BAZAR
            </text>
            <text x="10" y="27" fill="#94a3b8" fontFamily="sans-serif" fontSize="8">
              Karachi Campus
            </text>
          </g>
        </svg>
      </div>

      {/* Bottom Educational Feature Ribbon */}
      <div className="grid grid-cols-3 divide-x divide-slate-800 bg-slate-950/90 border-t border-slate-800 py-3 px-2 text-center text-xs">
        <div className="px-2">
          <p className="font-bold text-amber-400">Classes IX – XII &amp; ADC</p>
          <p className="text-[11px] text-slate-400">Board Exam Mastery</p>
        </div>
        <div className="px-2">
          <p className="font-bold text-sky-400">MS Office &amp; Web Lab</p>
          <p className="text-[11px] text-slate-400">1 Student : 1 PC</p>
        </div>
        <div className="px-2">
          <p className="font-bold text-emerald-400">2:00 PM – 8:00 PM</p>
          <p className="text-[11px] text-slate-400">Daily Class Timings</p>
        </div>
      </div>
    </div>
  );
};
