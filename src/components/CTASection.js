"use client";

import { useState } from "react";
import { ArrowRightIcon, CheckCircleIcon, MailIcon, PhoneIcon, MapPinIcon } from "./Icons";

export default function CTASection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Full-Spectrum Flagship",
    budget: "$25k - $50k",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        service: "Full-Spectrum Flagship",
        budget: "$25k - $50k",
        message: "",
      });
    }, 4500);
  };

  return (
    <section id="contact" className="py-24 bg-[#f8f9fc] border-t border-gray-100 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#1e0e62] to-[#140847] text-white p-8 sm:p-12 lg:p-16 shadow-2xl">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#25dac5]/20 border border-[#25dac5]/40 text-[#25dac5] text-xs font-semibold tracking-wider uppercase mb-5">
                // SPRINT INITIATION
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
                Ready to Build Your High-Quality Startup Website?
              </h2>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-8">
                Tell us about your project vision, target timeline, and goals. You will speak
                directly with a Technical Director within 24 hours to review your architecture.
              </p>

              {/* Direct Info */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-gray-300 text-sm">
                  <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-[#25dac5]">
                    <MailIcon className="w-4 h-4" />
                  </div>
                  <span>direct@startup3.studio</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300 text-sm">
                  <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-[#25dac5]">
                    <PhoneIcon className="w-4 h-4" />
                  </div>
                  <span>+1 (415) 890-5201</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300 text-sm">
                  <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-[#25dac5]">
                    <MapPinIcon className="w-4 h-4" />
                  </div>
                  <span>San Francisco, CA & Global Senior Pods</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/10 inline-flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#25dac5] animate-pulse" />
                <span className="text-xs text-gray-200">
                  Initial scope consultation turnaround: <strong>Under 24 hours</strong>
                </span>
              </div>
            </div>

            {/* Right Form */}
            <div className="lg:col-span-6">
              <div className="p-6 sm:p-8 rounded-2xl bg-white text-gray-900 shadow-2xl">
                {submitted ? (
                  <div className="py-12 text-center flex flex-col items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-[#25dac5]/20 text-[#14a293] flex items-center justify-center mb-4">
                      <CheckCircleIcon className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#1e0e62] mb-2">
                      Brief Received!
                    </h3>
                    <p className="text-gray-500 text-sm max-w-sm">
                      Our Technical Lead is reviewing your requirements and will reach out with a
                      tailored proposal within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-1.5">
                          Your Name
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Alex Rivera"
                          className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:border-[#25dac5] transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-1.5">
                          Work Email
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="alex@company.com"
                          className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:border-[#25dac5] transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-1.5">
                          Primary Service
                        </label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 text-sm focus:outline-none focus:border-[#25dac5] transition-colors"
                        >
                          <option value="Full-Spectrum Flagship">Full-Spectrum Agency</option>
                          <option value="UI/UX & Brand Design">UI/UX & Brand Design</option>
                          <option value="Web Development (Next.js)">Web Development (Next.js)</option>
                          <option value="Mobile App (iOS/Android)">Mobile App (iOS/Android)</option>
                          <option value="Custom Software & APIs">Custom Software & APIs</option>
                          <option value="Growth Marketing & SEO">Growth Marketing & SEO</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-1.5">
                          Estimated Budget
                        </label>
                        <select
                          value={formData.budget}
                          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 text-sm focus:outline-none focus:border-[#25dac5] transition-colors"
                        >
                          <option value="$15k - $25k">$15k - $25k (MVP)</option>
                          <option value="$25k - $50k">$25k - $50k (Growth)</option>
                          <option value="$50k - $100k+">$50k - $100k+ (Enterprise)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-1.5">
                        Project Overview
                      </label>
                      <textarea
                        rows={3}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Briefly describe what your product solves..."
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:border-[#25dac5] transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 px-6 rounded-full font-bold text-white bg-[#25dac5] hover:bg-[#1fd3be] shadow-lg shadow-[#25dac5]/30 transition-all flex items-center justify-center gap-2 text-sm"
                    >
                      Request Technical Blueprint
                      <ArrowRightIcon className="w-4 h-4" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
