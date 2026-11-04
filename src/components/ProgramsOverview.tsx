import React, { useState } from 'react';
import { BookOpen, Monitor, CheckCircle, ArrowRight, Clock, Award } from 'lucide-react';
import { PageView } from '../types';

interface ProgramsOverviewProps {
  onNavigate: (page: PageView) => void;
  onOpenEnrollModal: (courseName?: string) => void;
}

export const ProgramsOverview: React.FC<ProgramsOverviewProps> = ({
  onNavigate,
  onOpenEnrollModal,
}) => {
  const [filter, setFilter] = useState<'all' | 'academic' | 'computer'>('all');

  const programs = [
    {
      id: 'ix-x',
      title: 'Classes IX – X (Matriculation)',
      category: 'academic',
      subtitle: 'Board of Secondary Education Karachi (BSEK)',
      desc: 'Science & General groups. In-depth conceptual physics, chemistry, biology, math, and past-paper mock tests.',
      badge: 'Admission Open',
      timing: '2:00 PM – 5:00 PM',
      actionPage: 'classes-ix-x' as PageView,
    },
    {
      id: 'xi-xii',
      title: 'Classes XI – XII (Intermediate)',
      category: 'academic',
      subtitle: 'Board of Intermediate Education Karachi (BIEK)',
      desc: 'Pre-Engineering, Pre-Medical, ICS & Commerce. Expert guidance for board scoring and university merit.',
      badge: 'Board Prep',
      timing: '3:30 PM – 6:30 PM',
      actionPage: 'classes-xi-xii' as PageView,
    },
    {
      id: 'adc',
      title: 'ADC (Associate Degree in Commerce)',
      category: 'academic',
      subtitle: 'University of Karachi (UoK) Curriculum',
      desc: 'Financial Accounting, Cost Accounting, Business Math & Statistics, Auditing, and Economics for Part 1 & 2.',
      badge: 'Evening Batches',
      timing: '5:00 PM – 8:00 PM',
      actionPage: 'adc' as PageView,
    },
    {
      id: 'ms-office',
      title: 'MS Office & Practical Computer Skills',
      category: 'computer',
      subtitle: 'Microsoft Word, Excel, PowerPoint',
      desc: 'Hands-on training for office jobs, university assignments, report writing, spreadsheets, and typing.',
      badge: 'Job Ready',
      timing: 'Flexible (2:00 PM – 8:00 PM)',
      actionPage: 'computer-classes' as PageView,
    },
    {
      id: 'wordpress',
      title: 'WordPress Website Development',
      category: 'computer',
      subtitle: 'No-Code Web Creation & Elementor',
      desc: 'Build professional responsive business sites, blogs, portfolios, and client landing pages from scratch.',
      badge: 'Freelance In-Demand',
      timing: 'Hands-on Lab',
      actionPage: 'computer-classes' as PageView,
    },
    {
      id: 'shopify',
      title: 'Shopify E-Commerce Store Development',
      category: 'computer',
      subtitle: 'Online Stores & Pakistan COD Integration',
      desc: 'Build profitable e-commerce stores, product listings, payment gateways, courier shipping, and inventory.',
      badge: 'E-Commerce Skills',
      timing: 'Project Based',
      actionPage: 'computer-classes' as PageView,
    },
    {
      id: 'meta-ads',
      title: 'Meta Ads (Facebook & Instagram)',
      category: 'computer',
      subtitle: 'Social Media Advertising & Campaigns',
      desc: 'Master Meta Ads Manager, audience targeting, ad creatives, budget optimization, and lead generation.',
      badge: 'High ROI Marketing',
      timing: 'Live Ad Lab',
      actionPage: 'computer-classes' as PageView,
    },
  ];

  const filteredPrograms =
    filter === 'all'
      ? programs
      : programs.filter((p) => p.category === filter);

  return (
    <section className="py-14 sm:py-20 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-sky-800 tracking-wider uppercase mb-2">
            <span>All Courses &amp; Programs</span>
            <span aria-hidden="true">·</span>
            <span>Noble Computers &amp; Coaching Centre</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            EXPLORE OUR COMPLETE PROGRAM OFFERINGS
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Choose between academic board coaching and practical digital computer courses tailored to your goals.
          </p>

          {/* Clean Segmented Filter Controls */}
          <div className="inline-flex items-center gap-1 p-1 bg-slate-100 rounded-lg mt-6 border border-slate-200">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-1.5 text-xs font-semibold rounded-md transition-all ${
                filter === 'all'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Programs ({programs.length})
            </button>
            <button
              onClick={() => setFilter('academic')}
              className={`px-4 py-1.5 text-xs font-semibold rounded-md transition-all ${
                filter === 'academic'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Academic Coaching (3)
            </button>
            <button
              onClick={() => setFilter('computer')}
              className={`px-4 py-1.5 text-xs font-semibold rounded-md transition-all ${
                filter === 'computer'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Computer Classes (4)
            </button>
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPrograms.map((prog) => (
            <div
              key={prog.id}
              className="p-6 bg-slate-50 border border-slate-200 rounded-2xl hover:border-slate-300 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100/80 px-2 py-0.5 rounded">
                    {prog.badge}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">
                    {prog.category === 'academic' ? 'Academic' : 'Computer Lab'}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-1">
                  {prog.title}
                </h3>
                <p className="text-xs font-semibold text-sky-800 mb-2">
                  {prog.subtitle}
                </p>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {prog.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/80 space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>{prog.timing}</span>
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onNavigate(prog.actionPage)}
                    className="flex-1 py-2 bg-white hover:bg-slate-100 text-slate-800 border border-slate-200 rounded-lg text-xs font-semibold transition-colors text-center"
                  >
                    View Details
                  </button>
                  <button
                    onClick={() => onOpenEnrollModal(prog.title)}
                    className="flex-1 py-2 bg-amber-400 hover:bg-amber-300 text-slate-950 rounded-lg text-xs font-bold transition-colors text-center"
                  >
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Homepage Section 7: Mid-Page High-Conversion Call To Action Banner */}
        <div className="mt-14 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-900 text-white rounded-3xl p-8 sm:p-10 border border-slate-800 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8 space-y-2">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                Limited Seats Per Batch
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Ready to Boost Your Academic Marks &amp; IT Skills?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
                Join hundreds of successful students in Soldier Bazar, Karachi. Visit our campus between 2:00 PM – 8:00 PM or contact us right now.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-stretch gap-2.5">
              <button
                onClick={() => onOpenEnrollModal()}
                className="w-full py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold rounded-xl text-sm transition-all shadow-md text-center"
              >
                Enroll Now / Reserve Seat
              </button>
              <a
                href="tel:03032998881"
                className="w-full py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-xl text-xs transition-colors text-center tabular-nums"
              >
                Call: 0303-2998881
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
