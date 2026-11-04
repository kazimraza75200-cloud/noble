import React from 'react';
import { Users, MonitorCheck, FileSpreadsheet, Clock, MapPin, BadgePercent, ShieldCheck } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const points = [
    {
      icon: <Users className="w-5 h-5 text-sky-600" />,
      title: 'Experienced Faculty & Subject Specialists',
      desc: 'Our teachers have years of experience teaching Karachi Board (BSEK, BIEK) and University curricula with in-depth knowledge of marking schemes and model papers.'
    },
    {
      icon: <MonitorCheck className="w-5 h-5 text-emerald-600" />,
      title: 'Practical Hands-On Computer Workstations',
      desc: 'We follow a strict 1-student-per-PC policy in our computer training lab so every learner gets actual hands-on time to build projects, spreadsheets, and campaigns.'
    },
    {
      icon: <FileSpreadsheet className="w-5 h-5 text-amber-600" />,
      title: 'Rigorous Weekly Test & Exam Series',
      desc: 'Regular chapter assessments, monthly reviews, and pre-board mock examinations ensure students identify weak areas and enter exam halls with total confidence.'
    },
    {
      icon: <Clock className="w-5 h-5 text-indigo-600" />,
      title: 'Convenient 2:00 PM – 8:00 PM Timings',
      desc: 'Structured afternoon and evening batches enable school, college, and university students—as well as working individuals—to attend without schedule clashes.'
    },
    {
      icon: <MapPin className="w-5 h-5 text-rose-600" />,
      title: 'Central Soldier Bazar Location',
      desc: 'Situated at Izhan Garden, Parsi Colony, our centre is safe, easily accessible, and centrally located for residents of Soldier Bazar, Nishtar Park, and central Karachi.'
    },
    {
      icon: <BadgePercent className="w-5 h-5 text-teal-600" />,
      title: 'Affordable Fees & Transparent Value',
      desc: 'Quality education and professional computer training priced fairly with no hidden charges, making premier coaching accessible to every aspiring student.'
    }
  ];

  return (
    <section className="py-14 sm:py-20 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-sky-800 tracking-wider uppercase mb-2">
            <span>Our Commitment to Excellence</span>
            <span aria-hidden="true">·</span>
            <span>Learn. Grow. Succeed.</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            WHY CHOOSE NOBLE COMPUTERS &amp; COACHING CENTRE
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            We bridge academic excellence with real-world computer competence under one trustworthy roof in Soldier Bazar, Karachi.
          </p>
        </div>

        {/* 6 Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((pt, idx) => (
            <div
              key={idx}
              className="p-6 bg-white border border-slate-200 rounded-xl hover:border-slate-300 transition-all shadow-xs"
            >
              <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center mb-4">
                {pt.icon}
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                {pt.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {pt.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
