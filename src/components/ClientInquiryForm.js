"use client";

import { useState } from "react";
import { CheckCircleIcon, ArrowRightIcon } from "./Icons";

export default function ClientInquiryForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    service: "Designing (UI/UX & Branding)",
    budget: "$25,000 - $50,000",
    timeline: "1 - 3 Months",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const serviceOptions = [
    { label: "Designing (UI/UX)", value: "Designing (UI/UX & Branding)" },
    { label: "Web Dev (Next.js)", value: "Web Development (Next.js/React)" },
    { label: "Mobile Apps (iOS/Android)", value: "Mobile App Development (iOS/Android)" },
    { label: "Custom Software & APIs", value: "Custom Software & Cloud APIs" },
    { label: "Growth & SEO Marketing", value: "Digital Marketing & SEO Growth" },
    { label: "Full-Spectrum Agency", value: "Full-Spectrum Agency Partner" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        service: "Designing (UI/UX & Branding)",
        budget: "$25,000 - $50,000",
        timeline: "1 - 3 Months",
        message: "",
      });
    }, 5000);
  };

  return (
    <section id="contact" className="py-24 bg-[#f8f9fc] border-t border-gray-100 relative z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#1e0e62] tracking-tight mb-3">
            Start Your Project
          </h2>
          <p className="text-gray-500 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
            Tell us about your startup or product goals. Our technical leads will review your
            requirements and provide an actionable scope roadmap within 24 hours.
          </p>
        </div>

        {/* Clean White Card */}
        <div className="bg-white rounded-3xl border border-gray-200/80 p-8 sm:p-12 lg:p-14 shadow-sm relative">
          {submitted ? (
            <div className="py-16 text-center flex flex-col items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-[#25dac5]/20 text-[#14a293] flex items-center justify-center mb-4">
                <CheckCircleIcon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-[#1e0e62] mb-2">
                Proposal Request Received!
              </h3>
              <p className="text-gray-500 text-sm max-w-md mx-auto leading-relaxed">
                Thank you, {formData.firstName || "there"}! We have received your project details.
                A technical director is preparing your architecture proposal and will contact you at{" "}
                <span className="font-semibold text-[#1e0e62]">{formData.email || "your email"}</span>{" "}
                within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-7">
              {/* Row 1: First Name & Last Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider text-[#1e0e62] block mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    placeholder="e.g. Sarah"
                    className="w-full px-5 py-3 rounded-full border border-gray-200 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#25dac5] focus:ring-2 focus:ring-[#25dac5]/20 transition-all bg-white"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider text-[#1e0e62] block mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    placeholder="e.g. Jenkins"
                    className="w-full px-5 py-3 rounded-full border border-gray-200 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#25dac5] focus:ring-2 focus:ring-[#25dac5]/20 transition-all bg-white"
                  />
                </div>
              </div>

              {/* Row 2: Work Email (wider) & Phone/WhatsApp */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 sm:gap-6">
                <div className="sm:col-span-7">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-[#1e0e62] block mb-2">
                    Work Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="sarah@company.com"
                    className="w-full px-5 py-3 rounded-full border border-gray-200 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#25dac5] focus:ring-2 focus:ring-[#25dac5]/20 transition-all bg-white"
                  />
                </div>
                <div className="sm:col-span-5">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-[#1e0e62] block mb-2">
                    Phone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-5 py-3 rounded-full border border-gray-200 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#25dac5] focus:ring-2 focus:ring-[#25dac5]/20 transition-all bg-white"
                  />
                </div>
              </div>

              {/* Row 3: Company Name & Interactive Service Chips */}
              <div>
                <label className="text-[11px] font-bold uppercase tracking-wider text-[#1e0e62] block mb-2">
                  Company / Startup Name
                </label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="Acme Ventures or website URL"
                  className="w-full px-5 py-3 rounded-full border border-gray-200 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#25dac5] focus:ring-2 focus:ring-[#25dac5]/20 transition-all bg-white mb-4"
                />

                <label className="text-[11px] font-bold uppercase tracking-wider text-[#1e0e62] block mb-2">
                  Select Primary Service
                </label>
                <div className="flex flex-wrap gap-2">
                  {serviceOptions.map((opt) => (
                    <button
                      type="button"
                      key={opt.value}
                      onClick={() => setFormData({ ...formData, service: opt.value })}
                      className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                        formData.service === opt.value
                          ? "bg-[#1e0e62] text-white shadow-sm"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-black"
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Row 4: Budget Range & Target Timeline */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider text-[#1e0e62] block mb-2">
                    Estimated Budget
                  </label>
                  <div className="relative">
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-5 py-3 rounded-full border border-gray-200 text-sm text-gray-800 bg-white focus:outline-none focus:border-[#25dac5] focus:ring-2 focus:ring-[#25dac5]/20 transition-all appearance-none cursor-pointer pr-10"
                    >
                      <option value="< $10,000">&lt; $10,000 (Sprint MVP)</option>
                      <option value="$10,000 - $25,000">$10,000 - $25,000 (Standard Build)</option>
                      <option value="$25,000 - $50,000">$25,000 - $50,000 (Scale & Growth)</option>
                      <option value="$50,000+">$50,000+ (Enterprise Flagship)</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider text-[#1e0e62] block mb-2">
                    Target Launch Window
                  </label>
                  <div className="relative">
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full px-5 py-3 rounded-full border border-gray-200 text-sm text-gray-800 bg-white focus:outline-none focus:border-[#25dac5] focus:ring-2 focus:ring-[#25dac5]/20 transition-all appearance-none cursor-pointer pr-10"
                    >
                      <option value="Urgent (< 4 Weeks)">Urgent (&lt; 4 Weeks)</option>
                      <option value="1 - 3 Months">1 - 3 Months (Standard)</option>
                      <option value="3 - 6 Months">3 - 6 Months</option>
                      <option value="Flexible / Ongoing Advisory">Flexible / Ongoing Advisory</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Row 5: Project Overview / Goals */}
              <div>
                <label className="text-[11px] font-bold uppercase tracking-wider text-[#1e0e62] block mb-2">
                  Project Overview & Goals
                </label>
                <textarea
                  rows={3}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Briefly describe what your product solves, current stage, and your main priorities..."
                  className="w-full px-5 py-3.5 rounded-2xl border border-gray-200 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#25dac5] focus:ring-2 focus:ring-[#25dac5]/20 transition-all bg-white resize-none"
                />
              </div>

              {/* Bottom Footer Bar */}
              <div className="pt-3 flex flex-col sm:flex-row items-center justify-between gap-5 border-t border-gray-100">
                {/* Left: Reassurance / Trust Badge */}
                <div className="flex items-center gap-3 text-left">
                  <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center shrink-0 text-[#1e0e62]">
                    <svg className="w-4 h-4 text-[#1e0e62]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <p className="text-xs text-gray-500 leading-tight">
                    100% Confidential. NDA protected.<br />
                    Turnaround time: <strong className="text-gray-800 font-semibold">&lt; 24 hours</strong>.
                  </p>
                </div>

                {/* Right: Pill Button */}
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-9 py-3.5 rounded-full text-white font-medium text-sm sm:text-base bg-[#25dac5] hover:bg-[#1ed0bb] shadow-lg shadow-[#25dac5]/25 hover:shadow-xl hover:shadow-[#25dac5]/35 hover:-translate-y-0.5 transition-all duration-200"
                >
                  Send Inquiry
                </button>
              </div>

              {/* Fast Path Direct Call Link */}
              <div className="text-center pt-2">
                <span className="text-xs text-gray-400">
                  Prefer a direct discussion?{" "}
                  <a
                    href="mailto:direct@nextgenapps.studio"
                    className="text-[#1e0e62] font-semibold hover:text-[#25dac5] transition-colors underline"
                  >
                    Schedule a 15-minute discovery call directly ↗
                  </a>
                </span>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
