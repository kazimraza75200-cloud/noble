import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, MessageSquare, Phone, Send, GraduationCap } from 'lucide-react';

interface EnrollmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCourse?: string;
}

export const EnrollmentModal: React.FC<EnrollmentModalProps> = ({
  isOpen,
  onClose,
  defaultCourse = '',
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [course, setCourse] = useState(defaultCourse || 'Classes IX – X (Matric)');
  const [batchTime, setBatchTime] = useState('2:00 PM – 5:00 PM (Afternoon)');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (defaultCourse) {
      setCourse(defaultCourse);
    }
  }, [defaultCourse]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Please provide student name.');
      return;
    }
    if (!phone.trim() || phone.length < 10) {
      setError('Please provide a valid phone/WhatsApp number (e.g. 0303-2998881).');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  const getWhatsAppUrl = () => {
    const text = encodeURIComponent(
      `*Admission Enrollment Application*\n\n` +
      `*Student:* ${name}\n` +
      `*Contact:* ${phone}\n` +
      `*Selected Program:* ${course}\n` +
      `*Preferred Batch:* ${batchTime}\n` +
      `*Notes:* ${notes || 'Looking forward to admission confirmation and fee details.'}`
    );
    return `https://wa.me/923032998881?text=${text}`;
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="relative bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-slate-900 text-amber-400 flex items-center justify-center">
            <GraduationCap className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900">
              Admission Enrollment
            </h3>
            <p className="text-xs text-slate-500">
              Noble Computers &amp; Coaching Centre &middot; Soldier Bazar
            </p>
          </div>
        </div>

        {submitted ? (
          <div className="py-6 text-center space-y-4">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold text-slate-900">
              Application Received!
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
              Thank you, <strong>{name}</strong>. Your inquiry for <strong>{course}</strong> has been registered. Our representative will contact you via phone or WhatsApp shortly during centre hours (2:00 PM – 8:00 PM).
            </p>

            <div className="pt-2 flex flex-col gap-2">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-sm flex items-center justify-center gap-2 transition-all shadow-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Confirm on WhatsApp (0303-2998881)</span>
              </a>
              <button
                onClick={handleClose}
                className="w-full py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium rounded-xl text-xs transition-colors"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 mt-2">
            {error && (
              <div className="p-2.5 bg-rose-50 border border-rose-200 text-xs text-rose-700 rounded-lg">
                {error}
              </div>
            )}

            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                Student Full Name *
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Kazim Raza"
                className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                Phone / WhatsApp Number *
              </label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="e.g. 0303-2998881"
                className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-400 tabular-nums"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                Select Class or Course *
              </label>
              <select
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-400"
              >
                <optgroup label="Academic Coaching">
                  <option value="Classes IX – X (Matric Science)">Classes IX – X (Matric Science BSEK)</option>
                  <option value="Classes IX – X (Matric General)">Classes IX – X (Matric General BSEK)</option>
                  <option value="Classes XI – XII (Intermediate Pre-Eng)">Classes XI – XII (Pre-Engineering)</option>
                  <option value="Classes XI – XII (Intermediate Pre-Med)">Classes XI – XII (Pre-Medical)</option>
                  <option value="Classes XI – XII (Intermediate ICS)">Classes XI – XII (Computer Science)</option>
                  <option value="Classes XI – XII (Intermediate Commerce)">Classes XI – XII (Commerce)</option>
                  <option value="ADC (Associate Degree in Commerce - Part 1/2)">ADC (Associate Degree in Commerce)</option>
                </optgroup>
                <optgroup label="Computer IT Courses">
                  <option value="MS Office & Practical Computer Skills">MS Office &amp; Practical Computer Skills</option>
                  <option value="WordPress Website Development">WordPress Website Development</option>
                  <option value="Shopify E-Commerce Store Development">Shopify E-Commerce Store Development</option>
                  <option value="Meta Ads (Facebook & Instagram Advertising)">Meta Ads (Facebook &amp; Instagram Advertising)</option>
                </optgroup>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                Convenient Timing Slot
              </label>
              <select
                value={batchTime}
                onChange={(e) => setBatchTime(e.target.value)}
                className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-400"
              >
                <option value="2:00 PM – 3:30 PM (Afternoon Slot 1)">2:00 PM – 3:30 PM (Afternoon Slot 1)</option>
                <option value="3:30 PM – 5:00 PM (Afternoon Slot 2)">3:30 PM – 5:00 PM (Afternoon Slot 2)</option>
                <option value="5:00 PM – 6:30 PM (Evening Slot 1)">5:00 PM – 6:30 PM (Evening Slot 1)</option>
                <option value="6:30 PM – 8:00 PM (Evening Slot 2)">6:30 PM – 8:00 PM (Evening Slot 2)</option>
                <option value="Flexible (Discuss with Coordinator)">Flexible (Discuss with Coordinator)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                Additional Comments / Previous Marks
              </label>
              <textarea
                rows={2}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Any special focus or questions..."
                className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center gap-2">
              <button
                type="submit"
                className="w-full sm:flex-1 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold rounded-lg text-sm transition-all shadow-sm flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Submit Enrollment</span>
              </button>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg text-xs flex items-center justify-center gap-1.5 transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Instant WhatsApp</span>
              </a>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
