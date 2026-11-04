import React, { useState } from 'react';
import { GraduationCap, CheckCircle2, Award, BookMarked, ArrowRight } from 'lucide-react';
import { ACADEMIC_COURSES } from '../data/coursesData';

interface ClassesElevenTwelveProps {
  onOpenEnrollModal: (courseName?: string) => void;
  isStandalonePage?: boolean;
}

export const ClassesElevenTwelve: React.FC<ClassesElevenTwelveProps> = ({
  onOpenEnrollModal,
  isStandalonePage = false,
}) => {
  const data = ACADEMIC_COURSES.intermediate;
  const [activeGroupIndex, setActiveGroupIndex] = useState(0);

  return (
    <section id="classes-xi-xii" className="py-14 sm:py-20 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-sky-800 tracking-wider uppercase mb-2">
            <span>Intermediate Division</span>
            <span aria-hidden="true">·</span>
            <span>BIEK Karachi Board</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            CLASSES XI – XII COACHING
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            {data.description}
          </p>
        </div>

        {/* Disciplines Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
          {data.groups.map((grp, idx) => (
            <button
              key={grp.name}
              onClick={() => setActiveGroupIndex(idx)}
              className={`p-4 rounded-xl text-left border transition-all ${
                activeGroupIndex === idx
                  ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-100/50'
              }`}
            >
              <span className="block text-xs uppercase tracking-wider font-semibold opacity-75">
                Intermediate
              </span>
              <span className="block text-sm sm:text-base font-bold mt-1">
                {grp.name}
              </span>
            </button>
          ))}
        </div>

        {/* Selected Discipline In-Depth Card */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2 text-sky-700 font-semibold text-xs uppercase tracking-wider">
                <BookMarked className="w-4 h-4" />
                <span>Specialized Group Syllabus</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                {data.groups[activeGroupIndex].name} Curriculum
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {data.groups[activeGroupIndex].focus}
              </p>

              <div>
                <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
                  Key Subjects Coached:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {data.groups[activeGroupIndex].subjects.map((subj) => (
                    <div
                      key={subj}
                      className="p-3 bg-slate-50 border border-slate-200/80 rounded-lg flex items-center gap-2 text-xs sm:text-sm text-slate-800 font-medium"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{subj}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Assessment Highlights */}
            <div className="lg:col-span-5 bg-slate-900 text-white rounded-xl p-6 space-y-4">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                <Award className="w-4 h-4" />
                <span>Board Exam Scoring Edge</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Classes 11 and 12 dictate entrance merit for NED, Dow, Dawood, Karachi University, and professional colleges. We emphasize:
              </p>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">&bull;</span>
                  <span>Board paper presentation techniques &amp; time management</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">&bull;</span>
                  <span>100% conceptual clarity for numericals and scientific derivations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">&bull;</span>
                  <span>Comprehensive solved past papers from 2015 to 2025</span>
                </li>
              </ul>
              <div className="pt-2">
                <button
                  onClick={() => onOpenEnrollModal(`Classes XI – XII (${data.groups[activeGroupIndex].name})`)}
                  className="w-full py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold rounded-lg text-xs sm:text-sm transition-colors flex items-center justify-center gap-2"
                >
                  <span>Enroll in {data.groups[activeGroupIndex].name}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Features Banner */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.features.slice(0, 3).map((feat, idx) => (
            <div key={idx} className="p-5 bg-white border border-slate-200 rounded-xl">
              <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center font-bold text-xs mb-3">
                0{idx + 1}
              </div>
              <h4 className="text-sm font-bold text-slate-900 mb-1">Board-Oriented Methodology</h4>
              <p className="text-xs text-slate-600 leading-relaxed">{feat}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
