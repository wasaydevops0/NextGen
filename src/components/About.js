import Image from "next/image";
import { SparklesIcon, ShieldCheckIcon, RocketIcon } from "./Icons";

export default function About() {
  const manifesto = [
    {
      title: "Direct Access to Senior Leads",
      desc: "No account reps playing telephone. You collaborate directly with the lead designers and senior engineers building your platform.",
      icon: SparklesIcon,
    },
    {
      title: "Design-Driven Engineering",
      desc: "We don't throw designs over a fence. Our developers treat design tokens, animations, and micro-interactions with religious precision.",
      icon: ShieldCheckIcon,
    },
    {
      title: "Radical Transparency & Code Ownership",
      desc: "Weekly sprint demos, real-time staging environments, and clean documentation. You own 100% of your codebase and intellectual property.",
      icon: RocketIcon,
    },
  ];

  return (
    <section id="about" className="py-24 bg-[#f8f9fc] border-t border-gray-100 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column */}
          <div className="lg:col-span-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#25dac5]/10 border border-[#25dac5]/30 text-[#15bca9] text-xs font-semibold tracking-wider uppercase mb-4">
              // STUDIO PHILOSOPHY
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-[#1e0e62] tracking-tight leading-tight mb-6">
              A Modern Digital Agency Built for Velocity & Quality
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
              Growing companies shouldn&apos;t have to juggle five different agencies for branding,
              website code, mobile apps, and marketing campaigns.
            </p>
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-8">
              We bring world-class design sense, elite engineering standards, and performance-driven
              marketing minds under one unified roof. We deliver digital products that outshine competition.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {[
                "100% Senior In-House Talent",
                "Full IP & Code Ownership",
                "Continuous Staging Demos",
                "Strict SOC2 & GDPR Standards",
                "Sub-Second Load Times",
                "Post-Launch Growth Support",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#25dac5] shrink-0" />
                  <span className="text-xs sm:text-sm text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-semibold text-[#1e0e62] bg-white hover:bg-gray-50 border border-gray-300 transition-all shadow-sm"
            >
              Meet Our Senior Team
            </a>
          </div>

          {/* Right Column: Visual */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="relative rounded-3xl overflow-hidden border border-gray-200 shadow-xl group">
              <div className="relative h-64 sm:h-80 w-full">
                <Image
                  src="/images/team_brainstorming_1783085102566.png"
                  alt="Senior Product Squad Working in Studio"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1e0e62]/80 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-6 right-6 flex items-center justify-between text-white">
                  <div>
                    <p className="font-bold text-base">Collaborative Product Studio</p>
                    <p className="text-xs text-[#25dac5]">Design & Engineering Labs</p>
                  </div>
                  <span className="text-xs bg-white/20 backdrop-blur-md px-3 py-1 rounded-full">
                    SF • NYC • Remote
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3.5">
              {manifesto.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="p-5 rounded-2xl bg-white border border-gray-200/80 hover:border-gray-300 transition-colors flex items-start gap-4 shadow-sm"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#25dac5]/10 text-[#15bca9] flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-[#1e0e62] font-bold text-base mb-1">{item.title}</h4>
                      <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
