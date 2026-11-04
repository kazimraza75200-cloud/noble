import React, { useState } from 'react';
import {
  Monitor,
  FileSpreadsheet,
  Globe,
  ShoppingBag,
  TrendingUp,
  CheckCircle2,
  Clock,
  ArrowRight,
  Sparkles,
  Layers,
  Award
} from 'lucide-react';
import { COMPUTER_COURSES } from '../data/coursesData';

interface ComputerClassesProps {
  onOpenEnrollModal: (courseName?: string) => void;
  isStandalonePage?: boolean;
}

export const ComputerClasses: React.FC<ComputerClassesProps> = ({
  onOpenEnrollModal,
  isStandalonePage = false,
}) => {
  const [selectedCourseId, setSelectedCourseId] = useState<string>('ms-office');

  const activeCourse =
    COMPUTER_COURSES.find((c) => c.id === selectedCourseId) || COMPUTER_COURSES[0];

  const getCourseIcon = (id: string) => {
    switch (id) {
      case 'ms-office':
        return <FileSpreadsheet className="w-5 h-5 text-sky-500" />;
      case 'wordpress':
        return <Globe className="w-5 h-5 text-blue-500" />;
      case 'shopify':
        return <ShoppingBag className="w-5 h-5 text-emerald-500" />;
      case 'meta-ads':
        return <TrendingUp className="w-5 h-5 text-amber-500" />;
      default:
        return <Monitor className="w-5 h-5 text-sky-500" />;
    }
  };

  return (
    <section id="computer-classes" className="py-14 sm:py-20 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 tracking-wider uppercase mb-2">
            <span>Practical IT &amp; Digital Skills Wing</span>
            <span aria-hidden="true">·</span>
            <span>Dedicated Computer Lab</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            PROFESSIONAL COMPUTER CLASSES
          </h2>
          <p className="mt-3 text-base text-slate-300 leading-relaxed">
            Gain high-demand software, web development, and digital marketing skills in our air-conditioned computer lab in Soldier Bazar. 100% practical hands-on workstation practice.
          </p>
        </div>

        {/* 4 Interactive Course Selector Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {COMPUTER_COURSES.map((course) => {
            const isSelected = course.id === selectedCourseId;
            return (
              <button
                key={course.id}
                onClick={() => setSelectedCourseId(course.id)}
                className={`p-5 rounded-xl text-left transition-all border ${
                  isSelected
                    ? 'bg-slate-800 border-amber-400 shadow-md ring-1 ring-amber-400/50'
                    : 'bg-slate-950/60 border-slate-800 hover:border-slate-700 hover:bg-slate-800/50'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                    {getCourseIcon(course.id)}
                  </div>
                  <span className="text-[11px] font-semibold text-amber-400">
                    {course.badge}
                  </span>
                </div>
                <h3 className="text-base font-bold text-white mb-1">
                  {course.title.split(' & ')[0]}
                </h3>
                <p className="text-xs text-slate-400 line-clamp-2">
                  {course.tagline}
                </p>
                <div className="mt-3 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-slate-500" />
                    {course.duration.split(' ')[0]} {course.duration.split(' ')[1]}
                  </span>
                  <span className={`font-semibold ${isSelected ? 'text-amber-400' : 'text-slate-400'}`}>
                    {isSelected ? 'Viewing' : 'Details &rarr;'}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Course Detailed Breakout Panel */}
        <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Course Overview & Modules */}
            <div className="lg:col-span-8 space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded text-[11px] font-bold bg-amber-400/10 text-amber-300 border border-amber-400/20">
                    {activeCourse.level}
                  </span>
                  <span className="text-xs text-slate-400">
                    Duration: {activeCourse.duration}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {activeCourse.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {activeCourse.overview}
                </p>
              </div>

              {/* Modules Accordion / List */}
              <div className="space-y-4 pt-2">
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-2">
                  <Layers className="w-4 h-4 text-amber-400" />
                  <span>Curriculum &amp; Hands-On Lab Modules:</span>
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {activeCourse.modules.map((mod, idx) => (
                    <div
                      key={idx}
                      className="p-4 bg-slate-900/90 border border-slate-700/80 rounded-xl"
                    >
                      <h5 className="text-sm font-bold text-sky-300 mb-2.5">
                        {idx + 1}. {mod.title}
                      </h5>
                      <ul className="space-y-1.5 text-xs text-slate-300">
                        {mod.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-amber-400 text-xs mt-0.5">&bull;</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Outcomes & Quick Enrollment Action */}
            <div className="lg:col-span-4 bg-slate-900 border border-slate-700 rounded-xl p-6 space-y-6">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                  <Award className="w-4 h-4" />
                  <span>What You Will Master:</span>
                </div>
                <ul className="space-y-2.5 text-xs text-slate-300">
                  {activeCourse.outcomes.map((outcome, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 bg-slate-950/70 border border-slate-800 rounded-lg space-y-2 text-xs">
                <div className="flex justify-between text-slate-400">
                  <span>Lab Setup:</span>
                  <span className="text-white font-medium">1 Student per PC</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Batch Timings:</span>
                  <span className="text-white font-medium">2:00 PM – 8:00 PM (Flexible)</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Certificate:</span>
                  <span className="text-emerald-400 font-medium">Included upon Completion</span>
                </div>
              </div>

              <div className="space-y-2">
                <button
                  onClick={() => onOpenEnrollModal(activeCourse.title)}
                  className="w-full py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold rounded-lg text-sm transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <span>Enroll in {activeCourse.title.split(' ')[0]}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href={`https://wa.me/923032998881?text=Hi%2C%20I%20want%20information%20about%20${encodeURIComponent(activeCourse.title)}%20at%20Noble%20Computers.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-medium rounded-lg text-xs transition-colors flex items-center justify-center gap-2"
                >
                  <span>Inquire via WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Core Course Feature Pillars Callout */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="p-4 bg-slate-950/40 rounded-xl border border-slate-800">
            <p className="text-xl font-bold text-amber-400">MS Office</p>
            <p className="text-xs text-slate-400 mt-1">Word, Excel, PowerPoint &amp; Typing</p>
          </div>
          <div className="p-4 bg-slate-950/40 rounded-xl border border-slate-800">
            <p className="text-xl font-bold text-sky-400">WordPress</p>
            <p className="text-xs text-slate-400 mt-1">Website Creation &amp; Elementor</p>
          </div>
          <div className="p-4 bg-slate-950/40 rounded-xl border border-slate-800">
            <p className="text-xl font-bold text-emerald-400">Shopify</p>
            <p className="text-xs text-slate-400 mt-1">E-Commerce &amp; COD Pakistan Setup</p>
          </div>
          <div className="p-4 bg-slate-950/40 rounded-xl border border-slate-800">
            <p className="text-xl font-bold text-amber-400">Meta Ads</p>
            <p className="text-xs text-slate-400 mt-1">Facebook &amp; Instagram Ad Campaigns</p>
          </div>
        </div>
      </div>
    </section>
  );
};
