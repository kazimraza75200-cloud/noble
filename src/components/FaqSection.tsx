import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { FREQUENT_QUESTIONS } from '../data/coursesData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-14 sm:py-20 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-sky-800 tracking-wider uppercase mb-2">
            <HelpCircle className="w-4 h-4 text-sky-700" />
            <span>Common Inquiries</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Answers for students and parents regarding coaching, batches, and computer training.
          </p>
        </div>

        <div className="space-y-3">
          {FREQUENT_QUESTIONS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border border-slate-200 rounded-xl overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-4 sm:p-5 text-left bg-slate-50 hover:bg-slate-100 flex items-center justify-between gap-4 transition-colors"
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900">
                    {item.question}
                  </span>
                  <span className="p-1 rounded-md bg-white border border-slate-200 text-slate-600 shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </span>
                </button>
                {isOpen && (
                  <div className="p-4 sm:p-5 bg-white text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-200/80">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
