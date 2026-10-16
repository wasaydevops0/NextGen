"use client";

import { useState } from "react";
import {
  PaletteIcon,
  GlobeIcon,
  SmartphoneIcon,
  CodeIcon,
  MegaphoneIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  SparklesIcon,
} from "./Icons";

export default function ServicesBento() {
  const [mobileTab, setMobileTab] = useState("fintech");

  return (
    <section id="services" className="py-24 bg-[#f8f9fc] border-t border-gray-100 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#25dac5]/10 border border-[#25dac5]/30 text-[#15bca9] text-xs font-semibold tracking-wider uppercase mb-4">
              <SparklesIcon className="w-3.5 h-3.5" />
              Full-Spectrum Services
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-[#1e0e62] tracking-tight leading-tight">
              Crafted for High-Growth Startups & Enterprises
            </h2>
          </div>
          <p className="text-gray-500 text-sm sm:text-base max-w-md leading-relaxed">
            From award-winning UI/UX design to robust web & mobile engineering and ROI-driven marketing,
            we help you scale faster.
          </p>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* ============================================================== */}
          {/* 1. DESIGNING (7 Cols)                                          */}
          {/* ============================================================== */}
          <div className="lg:col-span-7 rounded-3xl p-8 sm:p-10 bg-white border border-gray-200/80 hover:border-[#25dac5] shadow-lg shadow-gray-200/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div className="mb-8">
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#25dac5]/10 text-[#12bda9] flex items-center justify-center">
                  <PaletteIcon className="w-6 h-6" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-gray-100 text-gray-600">
                  DISCIPLINE 01 // DESIGNING
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#1e0e62] mb-3">
                UI/UX, Brand Identity & Design Systems
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-xl">
                We craft interfaces users fall in love with. From atomic design systems and 
                micro-interactions to high-fidelity clickable Figma prototypes that eliminate 
                guesswork before code is written.
              </p>
            </div>

            {/* Interactive Figma Simulation Canvas */}
            <div className="rounded-2xl bg-[#0f111a] border border-gray-800 p-5 shadow-xl overflow-hidden mb-6">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-gray-800 text-xs font-mono text-gray-400">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  <span className="ml-2 text-gray-300">DesignSystem_v4.2.fig</span>
                </div>
                <span className="text-[11px] text-[#25dac5] bg-[#25dac5]/10 px-2 py-0.5 rounded font-mono">
                  Live Collaboration
                </span>
              </div>

              <div className="relative h-44 rounded-xl bg-[#090a10] border border-dashed border-gray-700/60 p-4 flex flex-col justify-between overflow-hidden">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-md bg-[#25dac5]" />
                    <span className="text-xs font-semibold text-white">PrimaryButton.tsx</span>
                  </div>
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-indigo-500" />
                    <span className="w-3 h-3 rounded-full bg-cyan-400" />
                    <span className="w-3 h-3 rounded-full bg-[#25dac5]" />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <div className="p-2 rounded bg-white/5 border border-white/10 text-[11px] text-gray-300 font-mono">
                    padding: 16px 28px
                  </div>
                  <div className="p-2 rounded bg-white/5 border border-white/10 text-[11px] text-gray-300 font-mono">
                    radius: 9999px
                  </div>
                  <div className="p-2 rounded bg-white/5 border border-white/10 text-[11px] text-gray-300 font-mono">
                    color: #25dac5
                  </div>
                </div>

                <div className="absolute top-10 left-1/4 animate-bounce duration-1000 flex items-start pointer-events-none">
                  <svg className="w-4 h-4 text-pink-500 fill-current drop-shadow-md" viewBox="0 0 24 24">
                    <path d="M3 3l7 18 3-7 7-3L3 3z" />
                  </svg>
                  <span className="ml-1 text-[10px] font-mono bg-pink-600 text-white px-2 py-0.5 rounded-full shadow-md font-medium whitespace-nowrap">
                    Sarah (Lead UX)
                  </span>
                </div>

                <div className="absolute bottom-6 right-1/4 flex items-start pointer-events-none">
                  <svg className="w-4 h-4 text-[#25dac5] fill-current drop-shadow-md" viewBox="0 0 24 24">
                    <path d="M3 3l7 18 3-7 7-3L3 3z" />
                  </svg>
                  <span className="ml-1 text-[10px] font-mono bg-[#14a293] text-white px-2 py-0.5 rounded-full shadow-md font-medium whitespace-nowrap">
                    Leo (Design Tokens)
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2 text-xs text-gray-500 font-medium">
                <span className="px-3 py-1 rounded-full bg-gray-100">Design Systems</span>
                <span className="px-3 py-1 rounded-full bg-gray-100">Figma Prototyping</span>
                <span className="px-3 py-1 rounded-full bg-gray-100">Brand Identity</span>
              </div>
              <a href="#contact" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#14a293] hover:underline">
                Explore Design Deliverables <ArrowRightIcon className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* ============================================================== */}
          {/* 2. WEB DEVELOPMENT (5 Cols)                                    */}
          {/* ============================================================== */}
          <div className="lg:col-span-5 rounded-3xl p-8 sm:p-10 bg-white border border-gray-200/80 hover:border-[#25dac5] shadow-lg shadow-gray-200/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 text-cyan-600 flex items-center justify-center">
                  <GlobeIcon className="w-6 h-6" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-gray-100 text-gray-600">
                  DISCIPLINE 02 // WEB DEV
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#1e0e62] mb-3">
                Sub-Second Next.js Web Platforms
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Engineered with Next.js 16, React 19, and headless architectures to guarantee perfect 
                Core Web Vitals and peak search engine indexing.
              </p>

              {/* Lighthouse 100/100 Speed Scorecard */}
              <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200 mb-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono uppercase tracking-wider text-gray-500">
                    Google Lighthouse Audit
                  </span>
                  <span className="text-[11px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                    PERFECT 100
                  </span>
                </div>

                <div className="grid grid-cols-4 gap-2 text-center mb-4">
                  {[
                    { label: "Performance", score: "100" },
                    { label: "Accessibility", score: "100" },
                    { label: "Best Practice", score: "100" },
                    { label: "SEO", score: "100" },
                  ].map((gauge) => (
                    <div key={gauge.label} className="p-2 rounded-xl bg-white border border-gray-200 shadow-sm">
                      <div className="w-10 h-10 mx-auto rounded-full border-2 border-emerald-500 flex items-center justify-center text-emerald-600 font-bold text-sm">
                        {gauge.score}
                      </div>
                      <span className="block text-[10px] text-gray-500 mt-1.5 font-medium truncate">
                        {gauge.label}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-gray-200 text-[11px] font-mono text-gray-500">
                  <span>LCP: <strong className="text-gray-900">0.38s</strong></span>
                  <span>FID: <strong className="text-gray-900">1.8ms</strong></span>
                  <span>CLS: <strong className="text-gray-900">0.00</strong></span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
              <span className="text-xs text-gray-500 font-medium">Next.js 16 • React 19 • Tailwind CSS</span>
              <a href="#contact" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#14a293] hover:underline">
                View Stack <ArrowRightIcon className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* ============================================================== */}
          {/* 3. MOBILE APPS (4 Cols)                                        */}
          {/* ============================================================== */}
          <div className="lg:col-span-4 rounded-3xl p-8 bg-white border border-gray-200/80 hover:border-[#25dac5] shadow-lg shadow-gray-200/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                  <SmartphoneIcon className="w-6 h-6" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-gray-100 text-gray-600">
                  DISCIPLINE 03 // MOBILE
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#1e0e62] mb-2">
                Native & Cross-Platform Mobile Apps
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-5">
                Silky 60fps native performance for iOS & Android with React Native, Flutter, Swift, and Kotlin.
              </p>

              {/* iPhone Mockup */}
              <div className="w-full max-w-[220px] mx-auto rounded-3xl bg-gray-900 border-4 border-gray-800 p-3 shadow-xl mb-4 text-white">
                <div className="w-14 h-3 bg-black rounded-full mx-auto mb-3" />
                <div className="bg-gray-800 rounded-2xl p-3 text-left">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[10px] text-gray-400">Balance</span>
                    <span className="text-[9px] text-[#25dac5] bg-[#25dac5]/20 px-1.5 py-0.5 rounded font-mono font-bold">
                      60 FPS
                    </span>
                  </div>
                  <div className="text-base font-bold font-mono text-white mb-2">
                    {mobileTab === "fintech" ? "$124,590.00" : "$89,420.00"}
                  </div>
                  <div className="flex gap-1 mb-2">
                    <button
                      onClick={() => setMobileTab("fintech")}
                      className={`text-[9px] px-2 py-0.5 rounded font-medium ${
                        mobileTab === "fintech" ? "bg-[#25dac5] text-gray-900 font-bold" : "bg-gray-700 text-gray-300"
                      }`}
                    >
                      Fintech
                    </button>
                    <button
                      onClick={() => setMobileTab("crypto")}
                      className={`text-[9px] px-2 py-0.5 rounded font-medium ${
                        mobileTab === "crypto" ? "bg-[#25dac5] text-gray-900 font-bold" : "bg-gray-700 text-gray-300"
                      }`}
                    >
                      Crypto
                    </button>
                  </div>
                  <div className="h-1 bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-[#25dac5] w-3/4" />
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
              <span className="text-xs text-gray-500 font-medium">iOS & Android Stores</span>
              <a href="#contact" className="text-xs font-bold text-[#14a293] hover:underline">
                Build App →
              </a>
            </div>
          </div>

          {/* ============================================================== */}
          {/* 4. CUSTOM SOFTWARE & APIS (4 Cols)                             */}
          {/* ============================================================== */}
          <div className="lg:col-span-4 rounded-3xl p-8 bg-white border border-gray-200/80 hover:border-[#25dac5] shadow-lg shadow-gray-200/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <CodeIcon className="w-6 h-6" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-gray-100 text-gray-600">
                  DISCIPLINE 04 // BACKEND
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#1e0e62] mb-2">
                Resilient Cloud Architecture & APIs
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-5">
                High-throughput microservices, scalable database schemas, and rock-solid REST & GraphQL APIs.
              </p>

              {/* JSON Terminal Widget */}
              <div className="rounded-2xl bg-gray-900 p-3 font-mono text-xs text-gray-300 shadow-md mb-4">
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-gray-800 text-[11px]">
                  <span className="text-[#25dac5] font-bold">GET /api/v2/stream</span>
                  <div className="flex items-center gap-1.5">
                    <span className="px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px]">200 OK</span>
                    <span className="text-gray-400">12ms</span>
                  </div>
                </div>

                <pre className="text-[11px] leading-tight text-gray-300 overflow-x-auto">
{`{
  "status": "operational",
  "throughput": "48k req/s",
  "uptime": "99.99%"
}`}
                </pre>
              </div>
            </div>

            <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
              <span className="text-xs text-gray-500 font-medium">Node • Python • Go • AWS</span>
              <a href="#contact" className="text-xs font-bold text-[#14a293] hover:underline">
                Explore APIs →
              </a>
            </div>
          </div>

          {/* ============================================================== */}
          {/* 5. DIGITAL MARKETING & GROWTH (4 Cols)                         */}
          {/* ============================================================== */}
          <div className="lg:col-span-4 rounded-3xl p-8 bg-white border border-gray-200/80 hover:border-[#25dac5] shadow-lg shadow-gray-200/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center">
                  <MegaphoneIcon className="w-6 h-6" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-gray-100 text-gray-600">
                  DISCIPLINE 05 // MARKETING
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#1e0e62] mb-2">
                Data-Engineered Growth & SEO
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-5">
                Multi-channel acquisition strategies that convert traffic into revenue with predictable attribution.
              </p>

              {/* ROAS Growth Widget */}
              <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200/60 shadow-sm mb-4">
                <div className="flex items-baseline justify-between mb-3">
                  <div>
                    <span className="text-[10px] font-semibold text-gray-500 uppercase block">Average Return</span>
                    <span className="text-3xl font-extrabold text-[#1e0e62]">+380% ROAS</span>
                  </div>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                    Q4 Growth
                  </span>
                </div>

                <div className="flex items-end gap-2 h-12 pt-2">
                  <div className="flex-1 bg-amber-200 rounded-t h-1/4" />
                  <div className="flex-1 bg-amber-300 rounded-t h-2/5" />
                  <div className="flex-1 bg-amber-400 rounded-t h-3/5" />
                  <div className="flex-1 bg-amber-500 rounded-t h-4/5" />
                  <div className="flex-1 bg-[#25dac5] rounded-t h-full shadow-sm" />
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
              <span className="text-xs text-gray-500 font-medium">SEO • PPC • CRO • Ads</span>
              <a href="#contact" className="text-xs font-bold text-[#14a293] hover:underline">
                Scale Funnel →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
