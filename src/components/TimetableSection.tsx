import React from 'react';
import { Clock, Calendar, ArrowRight } from 'lucide-react';
import { TIMETABLE_SLOTS } from '../data/coursesData';

interface TimetableSectionProps {
  onOpenEnrollModal: (courseName?: string) => void;
}

export const TimetableSection: React.FC<TimetableSectionProps> = ({ onOpenEnrollModal }) => {
  return (
    <section className="py-14 sm:py-20 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-sky-800 tracking-wider uppercase mb-2">
            <span>Daily Schedule Overview</span>
            <span aria-hidden="true">·</span>
            <span>Monday to Saturday</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            CENTRE TIMINGS: 2:00 PM – 8:00 PM
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Structured batches designed for school, college, ADC, and computer trainees to avoid scheduling conflicts.
          </p>
        </div>

        {/* Timetable Table Card */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden shadow-xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white text-xs uppercase tracking-wider">
                  <th className="py-3.5 px-4 font-semibold">Time Slot</th>
                  <th className="py-3.5 px-4 font-semibold">Session Code</th>
                  <th className="py-3.5 px-4 font-semibold">Secondary (IX &amp; X)</th>
                  <th className="py-3.5 px-4 font-semibold">Higher Sec / ADC (XI-XII &amp; ADC)</th>
                  <th className="py-3.5 px-4 font-semibold">Computer Lab Batch</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-xs sm:text-sm">
                {TIMETABLE_SLOTS.map((slot, index) => (
                  <tr
                    key={slot.time}
                    className={`transition-colors hover:bg-slate-100/60 ${
                      index % 2 === 0 ? 'bg-white' : 'bg-slate-50'
                    }`}
                  >
                    <td className="py-3.5 px-4 font-bold text-sky-900 whitespace-nowrap">
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-sky-600" />
                        <span className="tabular-nums">{slot.time}</span>
                      </div>
                    </td>
                    <td className="py-3.5 px-4 text-slate-500 font-medium whitespace-nowrap">
                      {slot.slotName}
                    </td>
                    <td className="py-3.5 px-4 text-slate-800">
                      {slot.schoolSession}
                    </td>
                    <td className="py-3.5 px-4 text-slate-800">
                      {slot.collegeSession}
                    </td>
                    <td className="py-3.5 px-4 text-emerald-800 font-medium">
                      {slot.computerLab}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Footer note */}
          <div className="p-4 bg-slate-100/70 border-t border-slate-200 text-xs text-slate-600 flex flex-col sm:flex-row items-center justify-between gap-3">
            <span>
              💡 Need a custom timing or have a specific college timetable? Contact our administration.
            </span>
            <button
              onClick={() => onOpenEnrollModal()}
              className="text-xs font-bold text-sky-700 hover:text-sky-900 flex items-center gap-1"
            >
              <span>Inquire for Batch Availability</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
