"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRightIcon } from "./Icons";

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("all");

  const categories = [
    { id: "all", label: "All Works" },
    { id: "designing", label: "UI/UX & Branding" },
    { id: "web-dev", label: "Web Applications" },
    { id: "mobile-app", label: "Mobile Apps" },
    { id: "marketing", label: "Growth & SEO" },
  ];

  const projects = [
    {
      title: "FinFlow — Real-Time Algorithmic Trading Platform",
      category: "web-dev",
      categoryLabel: "WEB DEV // NEXT.JS",
      description: "Sub-millisecond data visualization dashboard engineered with Next.js 16 and cloud microservices.",
      metric: "+320% User Activation",
      impact: "$2.4B annual volume processed",
      image: "/images/tech_office_coding_1783085087868.png",
      tags: ["Next.js 16", "TypeScript", "Tailwind CSS", "WebSockets"],
    },
    {
      title: "Aura Health — Biometric Wellness Mobile App",
      category: "mobile-app",
      categoryLabel: "MOBILE // REACT NATIVE",
      description: "Offline-first cross-platform mobile experience with biometric security, Apple Health, and Google Fit sync.",
      metric: "4.9 ★ (120K Reviews)",
      impact: "500K+ monthly active users",
      image: "/images/open_plan_office_1783085131975.png",
      tags: ["React Native", "Expo SDK", "Node.js", "HealthKit"],
    },
    {
      title: "Luminary Studio — Comprehensive Global Design System",
      category: "designing",
      categoryLabel: "DESIGN // ATOMIC FIGMA",
      description: "Complete design token architecture, accessibility-certified UI kit, and responsive pattern library.",
      metric: "Red Dot Design Winner",
      impact: "80+ Production Components",
      image: "/images/tech_award_1783085119649.png",
      tags: ["Figma Systems", "Design Tokens", "Micro-Interactions"],
    },
    {
      title: "ScaleX Growth — Full-Funnel Performance Sprint",
      category: "marketing",
      categoryLabel: "MARKETING // CRO & SEO",
      description: "Algorithmic search indexing, programmatic landing page generation, and conversion rate optimization.",
      metric: "4.8x ROAS Multiplier",
      impact: "ARR scaled from $600K to $3.4M",
      image: "/images/ceo_speaking_1783085462228.png",
      tags: ["Programmatic SEO", "Meta Ads", "Google Ads", "GA4"],
    },
  ];

  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((item) => item.category === activeTab);

  return (
    <section id="portfolio" className="py-24 bg-white border-t border-gray-100 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#25dac5]/10 border border-[#25dac5]/30 text-[#15bca9] text-xs font-semibold tracking-wider uppercase mb-4">
              // CASE STUDIES & WORK
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-[#1e0e62] tracking-tight">
              Selected Digital Products
            </h2>
          </div>
          <p className="text-gray-500 text-sm sm:text-base max-w-md">
            Explore how our senior engineering and design teams deliver measurable business outcomes.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2 rounded-full text-xs font-semibold transition-all whitespace-nowrap ${
                activeTab === tab.id
                  ? "bg-[#1e0e62] text-white shadow-md"
                  : "bg-gray-100 text-gray-600 hover:text-black hover:bg-gray-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.title}
              className="group rounded-3xl overflow-hidden bg-white border border-gray-200/80 hover:border-[#25dac5] shadow-lg shadow-gray-200/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-gray-100">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-white/90 backdrop-blur-md text-[#1e0e62] shadow-sm">
                    {project.categoryLabel}
                  </span>
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-[#25dac5] text-white shadow-sm">
                    {project.metric}
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#1e0e62] mb-2 group-hover:text-[#25dac5] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <p className="text-xs font-mono text-gray-500 mb-6">
                    <span className="text-[#14a293] font-bold">Impact:</span> {project.impact}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] px-2 py-0.5 rounded bg-gray-100 text-gray-600 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#14a293] hover:underline"
                  >
                    View Project <ArrowRightIcon className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
