import React, { useState } from 'react';
import { BookOpen, CheckCircle, Award, Calendar, FileText, ArrowRight } from 'lucide-react';
import { ACADEMIC_COURSES } from '../data/coursesData';

interface ClassesNineTenProps {
  onOpenEnrollModal: (courseName?: string) => void;
  isStandalonePage?: boolean;
}

export const ClassesNineTen: React.FC<ClassesNineTenProps> = ({
  onOpenEnrollModal,
  isStandalonePage = false,
}) => {
  const data = ACADEMIC_COURSES.matric;
  const [selectedGroupIndex, setSelectedGroupIndex] = useState(0);

  return (
    <section id="classes-ix-x" className="py-14 sm:py-20 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-sky-800 tracking-wider uppercase mb-2">
            <span>Matriculation Academic Division</span>
            <span aria-hidden="true">·</span>
            <span>BSEK Karachi</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            CLASSES IX – X COACHING
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            {data.description}
          </p>
        </div>

        {/* Group Selector & Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          {/* Left Column: Group Tab & Subject List */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-2 mb-6 border-b border-slate-200 pb-4">
              {data.groups.map((group, idx) => (
                <button
                  key={group.name}
                  onClick={() => setSelectedGroupIndex(idx)}
                  className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all ${
                    selectedGroupIndex === idx
                      ? 'bg-slate-900 text-white shadow-sm'
                      : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {group.name.split(' (')[0]}
                </button>
              ))}
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-sky-600" />
                  {data.groups[selectedGroupIndex].name}
                </h3>
                <p className="text-sm text-slate-600 mt-1">
                  {data.groups[selectedGroupIndex].description}
                </p>
              </div>

              {/* Subject Badges */}
              <div className="pt-2">
                <h4 className="text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2.5">
                  Subject-Wise Coaching Curriculum:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {data.groups[selectedGroupIndex].subjects.map((subj) => (
                    <div
                      key={subj}
                      className="p-3 bg-white border border-slate-200 rounded-lg flex items-center gap-2.5 shadow-xs"
                    >
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span className="text-sm font-medium text-slate-800">{subj}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Testing & Faculty Methodology */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-sky-50/70 border border-sky-100 rounded-2xl p-6">
              <h3 className="text-base font-bold text-sky-950 flex items-center gap-2 mb-3">
                <Award className="w-5 h-5 text-sky-700" />
                Experienced Faculty &amp; Concept Mastery
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed mb-4">
                Our teachers are dedicated subject specialists with proven track records of helping Karachi students secure A-One (A1) and A grades in Sindh Board matric examinations.
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                {data.features.slice(0, 3).map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-sky-600 font-bold">&bull;</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-900 text-white rounded-2xl p-6 shadow-md">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                  <Calendar className="w-4 h-4" />
                  <span>Regular Assessment System</span>
                </div>
                <span className="text-xs text-slate-400">Karachi Board Style</span>
              </div>
              <ul className="space-y-2.5 text-xs text-slate-300">
                {data.testSystem.map((test, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <FileText className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>{test}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 pt-4 border-t border-slate-800 flex items-center justify-between">
                <div>
                  <p className="text-[11px] text-slate-400">Class Timings</p>
                  <p className="text-xs font-semibold text-white">Between 2:00 PM – 5:00 PM</p>
                </div>
                <button
                  onClick={() => onOpenEnrollModal('Classes IX – X (Matric)')}
                  className="px-4 py-2 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold rounded-lg text-xs transition-colors flex items-center gap-1.5"
                >
                  <span>Admission Open</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Banner Call to Action */}
        <div className="p-6 bg-slate-900 rounded-2xl text-white flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-lg font-bold text-white">
              Admissions Open for Class 9 &amp; 10 New Session
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Visit our campus in Soldier Bazar or call 0303-2998881 to reserve your seat today.
            </p>
          </div>
          <button
            onClick={() => onOpenEnrollModal('Classes IX – X (Matric)')}
            className="px-6 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm rounded-lg whitespace-nowrap transition-colors"
          >
            Admission Open &rarr;
          </button>
        </div>
      </div>
    </section>
  );
};
