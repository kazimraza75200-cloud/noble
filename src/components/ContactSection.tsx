import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Clock,
  Send,
  MessageSquare,
  CheckCircle2,
  ExternalLink,
  Building,
  Navigation
} from 'lucide-react';
import { InquiryFormData } from '../types';

interface ContactSectionProps {
  initialCourse?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialCourse = '' }) => {
  const [formData, setFormData] = useState<InquiryFormData>({
    name: '',
    phone: '',
    course: initialCourse || 'Classes IX – X (Matric)',
    timingPreference: '2:00 PM – 5:00 PM (Afternoon)',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const courseOptions = [
    'Classes IX – X (Matric BSEK)',
    'Classes XI – XII (Intermediate Pre-Eng)',
    'Classes XI – XII (Intermediate Pre-Med)',
    'Classes XI – XII (Intermediate Computer Science / ICS)',
    'Classes XI – XII (Intermediate Commerce)',
    'ADC (Associate Degree in Commerce / B.Com)',
    'Computer: MS Office (Word, Excel, PowerPoint)',
    'Computer: WordPress Website Development',
    'Computer: Shopify E-Commerce Store',
    'Computer: Meta Ads (Facebook & Instagram Advertising)',
    'Other / General Admission Inquiry'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 10) {
      setErrorMsg('Please enter a valid phone or WhatsApp number (e.g. 0303-2998881).');
      return;
    }

    setErrorMsg('');
    setSubmitted(true);
  };

  const generateWhatsAppLink = () => {
    const text = encodeURIComponent(
      `*Admission Inquiry - Noble Computers & Coaching Centre*\n\n` +
      `*Student Name:* ${formData.name}\n` +
      `*Phone Number:* ${formData.phone}\n` +
      `*Course/Class:* ${formData.course}\n` +
      `*Preferred Timing:* ${formData.timingPreference}\n` +
      `*Message:* ${formData.message || 'I would like to inquire about admission, fee details, and starting dates.'}`
    );
    return `https://wa.me/923032998881?text=${text}`;
  };

  return (
    <section id="contact" className="py-14 sm:py-20 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-sky-800 tracking-wider uppercase mb-2">
            <span>Get in Touch with Administration</span>
            <span aria-hidden="true">·</span>
            <span>Admissions Open</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            CONTACT &amp; VISIT US
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Have questions about course fees, batch schedules, or teacher qualifications? Call us directly, send a WhatsApp message, or submit an admission inquiry below.
          </p>
        </div>

        {/* 3 Quick Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Card 1: Direct Call */}
          <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center mb-3">
                <Phone className="w-5 h-5 text-emerald-700" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Direct Phone Helpline</h3>
              <p className="text-xs text-slate-500 mt-1">Speak directly with our admission coordinator.</p>
              <p className="text-xl font-extrabold text-slate-900 mt-3 tabular-nums">
                0303-2998881
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100">
              <a
                href="tel:03032998881"
                className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg text-xs sm:text-sm transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now: 0303-2998881</span>
              </a>
            </div>
          </div>

          {/* Card 2: WhatsApp Chat */}
          <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-3">
                <MessageSquare className="w-5 h-5 text-emerald-600" />
              </div>
              <h3 className="text-base font-bold text-slate-900">WhatsApp Inquiry</h3>
              <p className="text-xs text-slate-500 mt-1">Instant fee structure, batch timings, and brochure.</p>
              <p className="text-base font-bold text-emerald-700 mt-3">
                +92 303 2998881
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100">
              <a
                href="https://wa.me/923032998881?text=Hi%20Noble%20Computers%20%26%20Coaching%2C%20I%20want%20to%20inquire%20about%20classes."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-lg text-xs sm:text-sm transition-colors flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>

          {/* Card 3: Campus Timings & Location */}
          <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-sky-100 flex items-center justify-center mb-3">
                <Clock className="w-5 h-5 text-sky-700" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Campus Hours &amp; Location</h3>
              <p className="text-xs text-slate-500 mt-1">Open 6 Days a Week (Mon – Sat)</p>
              <div className="mt-2 text-xs text-slate-700 space-y-1">
                <p className="font-semibold text-slate-900">Classes: 2:00 PM – 8:00 PM</p>
                <p className="text-slate-600">Izhan Garden, Parsi Colony, Soldier Bazar, Karachi</p>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100">
              <a
                href="#google-map-section"
                className="w-full py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold rounded-lg text-xs sm:text-sm transition-colors flex items-center justify-center gap-1.5"
              >
                <Navigation className="w-4 h-4 text-sky-600" />
                <span>View Campus on Map</span>
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form & Interactive Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Functional Contact Form */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-slate-900">
                Online Admission &amp; Course Inquiry Form
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Fill out your details and our admission team will assist you promptly.
              </p>
            </div>

            {submitted ? (
              <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-xl space-y-4 text-emerald-950">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                  <h4 className="text-base font-bold text-emerald-900">
                    Thank You, {formData.name}!
                  </h4>
                </div>
                <p className="text-sm text-emerald-800 leading-relaxed">
                  Your inquiry for <strong>{formData.course}</strong> has been received. Our admission counselor will call you on <strong>{formData.phone}</strong> between 2:00 PM – 8:00 PM.
                </p>
                <div className="pt-2">
                  <a
                    href={generateWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg text-xs sm:text-sm transition-all"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Send this Inquiry to WhatsApp Now &rarr;</span>
                  </a>
                </div>
                <button
                  onClick={() => setSubmitted(false)}
                  className="block text-xs text-emerald-700 hover:underline pt-2"
                >
                  Submit another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {errorMsg && (
                  <div className="p-3 bg-rose-50 border border-rose-200 rounded-lg text-xs text-rose-700 font-medium">
                    {errorMsg}
                  </div>
                )}

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Student / Parent Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter full name"
                    className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 0303-2998881"
                      className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 tabular-nums"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                      Preferred Batch Timing
                    </label>
                    <select
                      value={formData.timingPreference}
                      onChange={(e) => setFormData({ ...formData, timingPreference: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400"
                    >
                      <option value="2:00 PM – 3:30 PM">2:00 PM – 3:30 PM</option>
                      <option value="3:30 PM – 5:00 PM">3:30 PM – 5:00 PM</option>
                      <option value="5:00 PM – 6:30 PM">5:00 PM – 6:30 PM</option>
                      <option value="6:30 PM – 8:00 PM">6:30 PM – 8:00 PM</option>
                      <option value="Any flexible slot between 2-8 PM">Flexible Timing</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Select Course or Class *
                  </label>
                  <select
                    value={formData.course}
                    onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400"
                  >
                    {courseOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Your Message / Specific Question
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about previous marks, specific subjects needed, or computer experience..."
                    className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-6 py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold rounded-lg text-sm shadow transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Admission Inquiry</span>
                  </button>
                  <span className="text-xs text-slate-500">
                    We respond during institute hours: 2:00 PM – 8:00 PM
                  </span>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Google Maps & Location Card */}
          <div id="google-map-section" className="lg:col-span-5 space-y-6">
            <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs">
              <div className="p-5 border-b border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="text-base font-bold text-slate-900 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-rose-600" />
                    <span>Soldier Bazar Campus</span>
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Izhan Garden, Parsi Colony, Soldier Bazar, Karachi
                  </p>
                </div>
                <span className="text-[11px] font-bold text-sky-800 bg-sky-50 px-2.5 py-1 rounded-md">
                  Karachi Central
                </span>
              </div>

              {/* Embedded Interactive Map View */}
              <div className="relative w-full h-64 bg-slate-100">
                <iframe
                  title="Noble Computers & Coaching Centre Location Map"
                  src="https://maps.google.com/maps?q=Soldier+Bazar+Parsi+Colony+Karachi&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="p-4 bg-slate-50 border-t border-slate-100 space-y-2 text-xs text-slate-600">
                <div className="flex items-start gap-2">
                  <Building className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                  <span>
                    <strong>Landmarks:</strong> Near Parsi Colony, convenient access from Nishtar Park, Britto Road, and Soldier Bazar No. 2.
                  </span>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-slate-200/60">
                  <span className="text-slate-500">Helpline:</span>
                  <a href="tel:03032998881" className="font-bold text-slate-900 hover:text-sky-700 tabular-nums">
                    0303-2998881
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Visit Box */}
            <div className="p-5 bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-2xl">
              <h4 className="text-sm font-bold text-amber-400 mb-1">
                Walk-In Inquiries Welcome
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed mb-3">
                Parents and students are welcome to visit our campus between 2:00 PM and 8:00 PM to inspect the computer lab, review past result registers, and consult with our teachers.
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="tel:03032998881"
                  className="px-3.5 py-2 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold rounded-lg text-xs transition-colors flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call 0303-2998881</span>
                </a>
                <a
                  href="https://wa.me/923032998881"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 bg-slate-800 hover:bg-slate-700 text-white font-medium rounded-lg text-xs transition-colors"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
