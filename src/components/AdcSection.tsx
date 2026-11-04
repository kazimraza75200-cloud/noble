import React from 'react';
import { Briefcase, CheckCircle, Calculator, FileCheck, ArrowRight, HelpCircle } from 'lucide-react';
import { ACADEMIC_COURSES } from '../data/coursesData';

interface AdcSectionProps {
  onOpenEnrollModal: (courseName?: string) => void;
  isStandalonePage?: boolean;
}

export const AdcSection: React.FC<AdcSectionProps> = ({
  onOpenEnrollModal,
  isStandalonePage = false,
}) => {
  const data = ACADEMIC_COURSES.adc;

  return (
    <section id="adc" className="py-14 sm:py-20 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-sky-800 tracking-wider uppercase mb-2">
            <span>Higher Commerce Division</span>
            <span aria-hidden="true">·</span>
            <span>University of Karachi (UoK)</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            ADC (ASSOCIATE DEGREE IN COMMERCE)
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            {data.description}
          </p>
        </div>

        {/* Overview Banner for Working & College Students */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-2xl p-6 sm:p-8 mb-12 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider">
                <Briefcase className="w-4 h-4" />
                <span>Tailored for Part 1 &amp; Part 2 Commerce Students</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Struggling with Advanced Accounts or Costing?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Many ADC students work during the day or attend morning colleges. Noble Computers &amp; Coaching Centre offers concentrated evening batches between 5:00 PM and 8:00 PM in Soldier Bazar, ensuring thorough concept coverage and high passing rates.
              </p>
            </div>
            <div className="md:col-span-4 flex flex-col items-start md:items-end gap-3">
              <div className="text-left md:text-right">
                <span className="text-xs text-slate-400">Class Timings</span>
                <p className="text-sm font-semibold text-white">Late Afternoon / Evening Batches</p>
              </div>
              <button
                onClick={() => onOpenEnrollModal('ADC (Associate Degree in Commerce)')}
                className="w-full sm:w-auto px-6 py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold rounded-lg text-sm shadow transition-all flex items-center justify-center gap-2"
              >
                <span>Admission Inquiry</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Subjects Grid */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-bold text-slate-900">
                ADC Coached Subjects &amp; Syllabus Coverage
              </h3>
              <p className="text-xs text-slate-500">
                Step-by-step guidance, ledger entries, cost sheets, and statistical formulas.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.subjects.map((subj) => (
              <div
                key={subj.code}
                className="p-6 bg-slate-50 hover:bg-white border border-slate-200 hover:border-slate-300 rounded-xl transition-all shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-bold text-sky-800 tracking-wider">
                      {subj.code}
                    </span>
                    <Calculator className="w-4 h-4 text-slate-400" />
                  </div>
                  <h4 className="text-base font-bold text-slate-900 mb-2">
                    {subj.name}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {subj.details}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-200/80 flex items-center gap-1.5 text-xs text-emerald-700 font-medium">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Past paper practice included</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Highlights / Why Choose ADC at Noble */}
        <div className="bg-sky-50/60 border border-sky-100 rounded-2xl p-6 sm:p-8">
          <h4 className="text-sm font-bold text-sky-950 uppercase tracking-wider mb-4">
            Key Benefits for ADC Students at Noble:
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {data.highlights.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2.5">
                <FileCheck className="w-4 h-4 text-sky-700 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
