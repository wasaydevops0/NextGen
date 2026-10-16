"use client";

import { useState } from "react";
import { CheckCircleIcon, ArrowRightIcon, SparklesIcon } from "./Icons";

export default function ProjectEstimator() {
  const [selectedServices, setSelectedServices] = useState([
    "designing",
    "web-dev",
  ]);
  const [timeline, setTimeline] = useState("standard");

  const serviceOptions = [
    {
      id: "designing",
      name: "UI/UX & Brand Design",
      desc: "Design system, wireframes & high-fidelity clickable prototype in Figma",
      durationWeeks: 3,
      team: "1 Lead Product Designer",
    },
    {
      id: "web-dev",
      name: "Web Development (Next.js)",
      desc: "Full-stack web application with 100/100 Lighthouse score & SEO indexation",
      durationWeeks: 4,
      team: "2 Senior Full-Stack Engineers",
    },
    {
      id: "mobile-app",
      name: "Mobile App (iOS & Android)",
      desc: "Cross-platform React Native / Flutter with native device integration",
      durationWeeks: 5,
      team: "2 Mobile Engineers + QA Lead",
    },
    {
      id: "software-dev",
      name: "Custom Software & APIs",
      desc: "Scalable microservices, database architecture & secure cloud deployment",
      durationWeeks: 4,
      team: "1 Cloud Architect & DevOps",
    },
    {
      id: "marketing",
      name: "Growth Marketing & SEO",
      desc: "Technical SEO audit, PPC performance funnel, and analytics tracking",
      durationWeeks: 2,
      team: "1 Growth & Conversion Strategist",
    },
  ];

  const toggleService = (id) => {
    if (selectedServices.includes(id)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((s) => s !== id));
      }
    } else {
      setSelectedServices([...selectedServices, id]);
    }
  };

  const rawWeeks = selectedServices.reduce((sum, id) => {
    const s = serviceOptions.find((opt) => opt.id === id);
    return sum + (s ? s.durationWeeks : 0);
  }, 0);

  let adjustedWeeks = Math.max(3, Math.round(rawWeeks * 0.7));
  let paceLabel = "Standard Agile Sprints";

  if (timeline === "express") {
    adjustedWeeks = Math.max(3, Math.round(adjustedWeeks * 0.75));
    paceLabel = "Accelerated Sprint Pods (Express)";
  } else if (timeline === "enterprise") {
    adjustedWeeks = Math.round(adjustedWeeks * 1.3);
    paceLabel = "Enterprise Phased Rollout";
  }

  const teamMembers = Array.from(
    new Set(
      selectedServices.map(
        (id) => serviceOptions.find((opt) => opt.id === id)?.team
      )
    )
  ).filter(Boolean);

  return (
    <section id="estimator" className="py-24 bg-white border-t border-gray-100 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#25dac5]/10 border border-[#25dac5]/30 text-[#15bca9] text-xs font-semibold tracking-wider uppercase mb-4">
            <SparklesIcon className="w-3.5 h-3.5" />
            Pricing & Scope Calculator
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-[#1e0e62] tracking-tight leading-tight mb-4">
            Calculate Your Custom Project Timeline
          </h2>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
            Select the disciplines you require. Our interactive scope estimator computes delivery
            milestones and senior team allocation in real time.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Options (7 Cols) */}
          <div className="lg:col-span-7 space-y-3">
            <span className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
              Select Services:
            </span>

            {serviceOptions.map((opt) => {
              const isChecked = selectedServices.includes(opt.id);
              return (
                <div
                  key={opt.id}
                  onClick={() => toggleService(opt.id)}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer flex items-start justify-between gap-4 ${
                    isChecked
                      ? "bg-[#25dac5]/5 border-[#25dac5] shadow-sm"
                      : "bg-gray-50/50 border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <div className="flex items-start gap-3.5">
                    <div
                      className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                        isChecked
                          ? "bg-[#25dac5] text-white"
                          : "border border-gray-300 text-transparent"
                      }`}
                    >
                      <CheckCircleIcon className="w-4 h-4 fill-current" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1e0e62] text-base mb-1">{opt.name}</h4>
                      <p className="text-xs text-gray-500 leading-relaxed">{opt.desc}</p>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-medium text-gray-500 bg-white px-2.5 py-1 rounded border border-gray-200 shrink-0">
                    +{opt.durationWeeks}w
                  </span>
                </div>
              );
            })}

            {/* Timeline Speed */}
            <div className="pt-4">
              <span className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
                Pace of Delivery:
              </span>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: "express", label: "Express Sprint" },
                  { id: "standard", label: "Standard Agile" },
                  { id: "enterprise", label: "Enterprise Scale" },
                ].map((tier) => (
                  <button
                    key={tier.id}
                    onClick={() => setTimeline(tier.id)}
                    className={`py-3 px-2 rounded-xl text-xs font-semibold transition-all ${
                      timeline === tier.id
                        ? "bg-[#1e0e62] text-white shadow-md"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    {tier.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Instant Estimation Card (5 Cols) */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="rounded-3xl bg-gradient-to-b from-[#1e0e62] to-[#150a45] text-white p-7 sm:p-9 shadow-2xl relative overflow-hidden">
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <span className="text-xs uppercase font-mono tracking-wider text-gray-300">
                  Estimated Schedule
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#25dac5] animate-ping" />
              </div>

              <div className="mb-6">
                <span className="text-xs text-gray-300 uppercase block font-mono">
                  Delivery Window
                </span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-4xl sm:text-5xl font-extrabold text-white">
                    {adjustedWeeks}
                  </span>
                  <span className="text-xl font-bold text-[#25dac5]">Weeks</span>
                  <span className="text-xs text-gray-300 font-mono ml-2">
                    ({Math.ceil(adjustedWeeks / 2)} Sprints)
                  </span>
                </div>
                <span className="text-xs text-gray-300 block mt-1">{paceLabel}</span>
              </div>

              <div className="space-y-3 mb-6">
                <span className="text-xs text-gray-300 uppercase tracking-wider block font-mono">
                  Squad Allocation:
                </span>
                <div className="space-y-2">
                  {teamMembers.map((member, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2.5 text-xs text-gray-200 bg-white/10 p-2.5 rounded-lg border border-white/10"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#25dac5]" />
                      <span>{member}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href="#contact"
                className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-full font-bold text-gray-900 bg-[#25dac5] hover:bg-[#1fd3be] shadow-lg shadow-[#25dac5]/30 transition-all text-sm group"
              >
                Lock In Scope & Get Proposal
                <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <p className="text-[11px] text-gray-300 text-center mt-3 font-mono">
                Includes full IP ownership, QA testing & weekly demos
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
