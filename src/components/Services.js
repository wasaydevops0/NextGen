"use client";

export default function Services() {
  return (
    <section
      className="w-full bg-[#111111] py-24 md:py-32 relative overflow-hidden"
      id="services"
    >
      {/* Background Matrix Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:28px_28px] pointer-events-none opacity-40" />

      {/* Ambient Glowing Orbs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-orange/15 blur-[150px] rounded-full z-0 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-orange/10 blur-[130px] rounded-full z-0 pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[400px] h-[400px] bg-brand-orange/5 blur-[160px] rounded-full z-0 pointer-events-none" />

      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div>
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-4 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-brand-orange animate-ping" />
              <span className="text-xs md:text-sm font-urbanist font-semibold tracking-wider uppercase text-neutral-300">
                Agency Disciplines
              </span>
            </div>
            <h2 className="font-urbanist font-bold text-[44px] md:text-[60px] text-white leading-tight">
              Our <span className="text-brand-orange">Services</span>
            </h2>
          </div>

          <div className="max-w-[480px]">
            <p className="text-white/80 font-sans text-sm md:text-base leading-relaxed">
              We specialize in crafting world-class web applications, intuitive mobile experiences,
              and conversion-driven UI/UX designs that elevate modern brands.
            </p>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* BENTO GRID: FOCUSED ON WEB, DESIGN, MOBILE                                */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

          {/* ----------------------------------------------------------------------- */}
          {/* CARD 1: Featured 8-Column Card - Full-Stack Web Development             */}
          {/* ----------------------------------------------------------------------- */}
          <div className="lg:col-span-8 group bg-white/[0.03] border border-white/10 hover:border-brand-orange/50 backdrop-blur-2xl rounded-[32px] p-8 md:p-10 relative overflow-hidden transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col justify-between">
            {/* Top gradient edge */}
            <div className="absolute top-0 inset-x-8 h-[1px] bg-gradient-to-r from-transparent via-brand-orange/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="absolute -right-20 -top-20 w-80 h-80 bg-brand-orange/10 blur-[90px] rounded-full pointer-events-none" />

            <div>
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-all duration-300 shadow-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="26"
                      height="26"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                      <path d="M10 4v4"></path>
                      <path d="M2 8h20"></path>
                      <path d="M6 4v4"></path>
                    </svg>
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-brand-orange/10 text-brand-orange border border-brand-orange/20 uppercase tracking-wider">
                    Core Speciality
                  </span>
                </div>
                <span className="text-white/10 font-urbanist text-5xl md:text-6xl font-black select-none group-hover:text-brand-orange/20 transition-colors duration-500">
                  01
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl font-urbanist font-bold text-white mb-3 group-hover:text-brand-orange transition-colors duration-300">
                Full-Stack Web Development
              </h3>
              <p className="text-white/70 text-sm md:text-base leading-relaxed max-w-[650px] mb-8">
                From responsive landing portals to high-concurrency SaaS applications, we engineer blazing-fast, secure, and SEO-optimized web platforms built on Next.js, React, and TypeScript.
              </p>
            </div>

            {/* Interactive Browser Frame Visual Mock */}
            <div className="w-full bg-[#181818]/90 border border-white/10 rounded-2xl p-5 mb-8 shadow-inner">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/5 text-xs">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  </div>
                  <span className="text-neutral-400 font-mono text-[11px] ml-2">https://yourbrand.com</span>
                </div>
                <span className="text-emerald-400 font-mono text-[11px] font-semibold">100/100 Core Web Vitals</span>
              </div>

              {/* Technical deliverables grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
                <div className="p-3 rounded-xl bg-white/[0.04] border border-white/5">
                  <span className="text-[10px] text-brand-orange font-mono uppercase block mb-1">Architecture</span>
                  <span className="text-xs font-semibold text-white">Next.js 16 &amp; React 19</span>
                  <span className="text-[10px] text-white/40 block mt-1">Server Components &amp; Edge</span>
                </div>

                <div className="p-3 rounded-xl bg-brand-orange/10 border border-brand-orange/30">
                  <span className="text-[10px] text-brand-orange font-mono uppercase block mb-1">Performance</span>
                  <span className="text-xs font-semibold text-white">&lt; 0.4s Page Load</span>
                  <span className="text-[10px] text-brand-orange/80 block mt-1">Zero Layout Shift</span>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.04] border border-white/5">
                  <span className="text-[10px] text-brand-orange font-mono uppercase block mb-1">Database &amp; APIs</span>
                  <span className="text-xs font-semibold text-white">PostgreSQL &amp; REST/GraphQL</span>
                  <span className="text-[10px] text-white/40 block mt-1">Scalable Cloud Architecture</span>
                </div>
              </div>
            </div>

            {/* Bottom Tech Tags & CTA */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-white/10">
              <div className="flex flex-wrap gap-2">
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80">
                  Next.js 16
                </span>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80">
                  TypeScript
                </span>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80">
                  Tailwind CSS
                </span>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80">
                  PostgreSQL
                </span>
              </div>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-brand-orange font-urbanist font-bold text-sm hover:underline"
              >
                <span>Build Web App</span>
                <span>→</span>
              </a>
            </div>
          </div>

          {/* ----------------------------------------------------------------------- */}
          {/* CARD 2: Tall 4-Column Card - UI/UX & Product Design                    */}
          {/* ----------------------------------------------------------------------- */}
          <div className="lg:col-span-4 group bg-white/[0.03] border border-white/10 hover:border-brand-orange/50 backdrop-blur-2xl rounded-[32px] p-8 relative overflow-hidden transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col justify-between">
            <div className="absolute top-0 inset-x-8 h-[1px] bg-gradient-to-r from-transparent via-brand-orange/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div>
              <div className="flex justify-between items-start mb-6">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-all duration-300 shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 20h9"></path>
                    <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path>
                  </svg>
                </div>
                <span className="text-white/10 font-urbanist text-5xl md:text-6xl font-black select-none group-hover:text-brand-orange/20 transition-colors duration-500">
                  02
                </span>
              </div>

              <h3 className="text-2xl font-urbanist font-bold text-white mb-3 group-hover:text-brand-orange transition-colors duration-300">
                UI/UX &amp; Product Design
              </h3>
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                Human-centered product design that pairs emotional aesthetic appeal with conversion-tested UX wireframing and interactive design systems.
              </p>

              {/* Design System Preview Card */}
              <div className="bg-[#181818]/90 border border-white/10 rounded-2xl p-5 mb-6 space-y-3 font-sans text-xs">
                <div className="flex items-center justify-between pb-2 border-b border-white/5">
                  <span className="text-white/70 font-semibold">Figma Design System</span>
                  <span className="text-brand-orange font-mono">100% Componentized</span>
                </div>
                <div className="space-y-2 text-neutral-300">
                  <div className="flex items-center gap-2">
                    <span className="text-brand-orange font-bold">✓</span>
                    <span>Interactive Prototypes &amp; Micro-animations</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-brand-orange font-bold">✓</span>
                    <span>User Journey Mapping &amp; Wireframing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-brand-orange font-bold">✓</span>
                    <span>Accessible, High-Conversion Interfaces</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex justify-between items-center">
              <span className="text-xs font-mono text-white/50">Figma • Framer • Design Systems</span>
              <a
                href="#contact"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-brand-orange transition-colors"
                aria-label="Start UI/UX Design project"
              >
                <span className="text-lg leading-none">↗</span>
              </a>
            </div>
          </div>

          {/* ----------------------------------------------------------------------- */}
          {/* CARD 3: 4-Column Card - Mobile App Development (iOS & Android)         */}
          {/* ----------------------------------------------------------------------- */}
          <div className="lg:col-span-4 group bg-white/[0.03] border border-white/10 hover:border-brand-orange/50 backdrop-blur-2xl rounded-[32px] p-8 relative overflow-hidden transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col justify-between">
            <div className="absolute top-0 inset-x-8 h-[1px] bg-gradient-to-r from-transparent via-brand-orange/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div>
              <div className="flex justify-between items-start mb-6">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-all duration-300 shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect>
                    <path d="M12 18h.01"></path>
                  </svg>
                </div>
                <span className="text-white/10 font-urbanist text-5xl md:text-6xl font-black select-none group-hover:text-brand-orange/20 transition-colors duration-500">
                  03
                </span>
              </div>

              <h3 className="text-2xl font-urbanist font-bold text-white mb-3 group-hover:text-brand-orange transition-colors duration-300">
                Mobile App Development
              </h3>
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                Native-performance cross-platform iOS and Android mobile apps engineered with React Native and Flutter for seamless user adoption.
              </p>

              {/* Mobile Features Mock */}
              <div className="bg-[#181818]/90 border border-white/10 rounded-2xl p-4 mb-6 space-y-2 text-xs">
                <div className="flex items-center justify-between text-neutral-300 p-2 rounded-lg bg-white/[0.02]">
                  <span>Cross-Platform</span>
                  <span className="text-brand-orange font-mono">iOS &amp; Android</span>
                </div>
                <div className="flex items-center justify-between text-neutral-300 p-2 rounded-lg bg-white/[0.02]">
                  <span>Store Publishing</span>
                  <span className="text-brand-orange font-mono">App Store &amp; Play</span>
                </div>
                <div className="flex items-center justify-between text-neutral-300 p-2 rounded-lg bg-white/[0.02]">
                  <span>Offline First</span>
                  <span className="text-emerald-400 font-mono font-bold">Fast &amp; Resilient</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex justify-between items-center">
              <span className="text-xs text-white/50">React Native • Flutter</span>
              <a href="#contact" className="text-sm font-semibold text-brand-orange hover:underline">
                Build Mobile App →
              </a>
            </div>
          </div>

          {/* ----------------------------------------------------------------------- */}
          {/* CARD 4: 4-Column Card - E-Commerce & Custom Digital Platforms           */}
          {/* ----------------------------------------------------------------------- */}
          <div className="lg:col-span-4 group bg-white/[0.03] border border-white/10 hover:border-brand-orange/50 backdrop-blur-2xl rounded-[32px] p-8 relative overflow-hidden transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col justify-between">
            <div className="absolute top-0 inset-x-8 h-[1px] bg-gradient-to-r from-transparent via-brand-orange/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div>
              <div className="flex justify-between items-start mb-6">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-all duration-300 shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="8" cy="21" r="1"></circle>
                    <circle cx="19" cy="21" r="1"></circle>
                    <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
                  </svg>
                </div>
                <span className="text-white/10 font-urbanist text-5xl md:text-6xl font-black select-none group-hover:text-brand-orange/20 transition-colors duration-500">
                  04
                </span>
              </div>

              <h3 className="text-2xl font-urbanist font-bold text-white mb-3 group-hover:text-brand-orange transition-colors duration-300">
                E-Commerce &amp; Web Platforms
              </h3>
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                High-converting headless storefronts, custom checkout flows, and enterprise Shopify integrations built to drive revenue.
              </p>

              {/* Conversion Stats */}
              <div className="bg-[#181818]/90 border border-white/10 rounded-2xl p-4 mb-6 space-y-2 text-xs">
                <div className="flex justify-between items-center text-neutral-300">
                  <span>Checkout Friction</span>
                  <span className="text-emerald-400 font-mono font-bold">-45% Cart Drop</span>
                </div>
                <div className="flex justify-between items-center text-neutral-300">
                  <span>Payment Gateway</span>
                  <span className="text-brand-orange font-mono">Stripe &amp; Multi-Currency</span>
                </div>
                <div className="flex justify-between items-center text-neutral-300">
                  <span>Inventory Sync</span>
                  <span className="text-brand-orange font-mono">Automated Real-Time</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex justify-between items-center">
              <span className="text-xs text-white/50">Shopify • Stripe • Headless</span>
              <a href="#contact" className="text-sm font-semibold text-brand-orange hover:underline">
                Launch Store →
              </a>
            </div>
          </div>

          {/* ----------------------------------------------------------------------- */}
          {/* CARD 5: 4-Column Card - Brand Identity & Creative Direction             */}
          {/* ----------------------------------------------------------------------- */}
          <div className="lg:col-span-4 group bg-white/[0.03] border border-white/10 hover:border-brand-orange/50 backdrop-blur-2xl rounded-[32px] p-8 relative overflow-hidden transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col justify-between">
            <div className="absolute top-0 inset-x-8 h-[1px] bg-gradient-to-r from-transparent via-brand-orange/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div>
              <div className="flex justify-between items-start mb-6">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-all duration-300 shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="m4.93 4.93 4.24 4.24"></path>
                    <path d="m14.83 9.17 4.24-4.24"></path>
                    <path d="m14.83 14.83 4.24 4.24"></path>
                    <path d="m9.17 14.83-4.24 4.24"></path>
                    <circle cx="12" cy="12" r="4"></circle>
                  </svg>
                </div>
                <span className="text-white/10 font-urbanist text-5xl md:text-6xl font-black select-none group-hover:text-brand-orange/20 transition-colors duration-500">
                  05
                </span>
              </div>

              <h3 className="text-2xl font-urbanist font-bold text-white mb-3 group-hover:text-brand-orange transition-colors duration-300">
                Brand &amp; Visual Identity
              </h3>
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                Comprehensive visual identities, bespoke design guidelines, custom typography, and dynamic animations that make your brand unforgettable.
              </p>

              {/* Deliverables */}
              <div className="bg-[#181818]/90 border border-white/10 rounded-2xl p-4 mb-6 space-y-2.5 text-xs text-neutral-300">
                <div className="flex items-center gap-2">
                  <span className="text-brand-orange font-bold">✦</span>
                  <span>Complete Brand Guidelines &amp; Assets</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-brand-orange font-bold">✦</span>
                  <span>Custom Typography &amp; Color Strategy</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-brand-orange font-bold">✦</span>
                  <span>Motion Graphics &amp; Brand Systems</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex justify-between items-center">
              <span className="text-xs text-white/50">Identity &amp; Creative</span>
              <a href="#contact" className="text-sm font-semibold text-brand-orange hover:underline">
                Build Brand →
              </a>
            </div>
          </div>

          {/* ----------------------------------------------------------------------- */}
          {/* CARD 6: Full 12-Column Modern Cloud & Smart AI Add-on Ribbon            */}
          {/* ----------------------------------------------------------------------- */}
          <div className="lg:col-span-12 group bg-gradient-to-r from-white/[0.04] via-white/[0.02] to-white/[0.04] border border-white/10 hover:border-brand-orange/40 backdrop-blur-2xl rounded-[32px] p-8 md:p-10 relative overflow-hidden transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <div className="absolute top-0 inset-x-8 h-[1px] bg-gradient-to-r from-transparent via-brand-orange/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
              <div className="flex items-start md:items-center gap-5">
                <div className="w-16 h-16 rounded-2xl bg-brand-orange/15 border border-brand-orange/30 flex items-center justify-center text-brand-orange shrink-0 shadow-lg group-hover:bg-brand-orange group-hover:text-white transition-all duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
                  </svg>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-white/20 font-urbanist text-xl font-bold">06</span>
                    <h3 className="text-2xl font-urbanist font-bold text-white group-hover:text-brand-orange transition-colors">
                      Cloud Architecture, APIs &amp; Smart Automations
                    </h3>
                  </div>
                  <p className="text-white/60 text-sm max-w-[700px] leading-relaxed">
                    Powering your web and mobile applications with resilient cloud infrastructure (AWS/Cloudflare), custom microservice APIs, and optional AI workflow enhancements.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <span className="text-xs font-mono px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/70">
                  Cloud Infrastructure
                </span>
                <span className="text-xs font-mono px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/70">
                  API Engineering
                </span>
                <a
                  href="#contact"
                  className="bg-brand-orange hover:bg-brand-orangeDark text-white px-6 py-2.5 rounded-full font-urbanist font-semibold text-sm transition-all shadow-md inline-flex items-center gap-2 ml-2"
                >
                  Discuss Project ↗
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
