export default function Marquee() {
  const items = [
    "FIGMA DESIGN SYSTEMS",
    "NEXT.JS 16 APPS",
    "REACT NATIVE & FLUTTER",
    "LIGHTHOUSE 100/100",
    "CUSTOM SAAS BACKENDS",
    "ENTERPRISE GRAPHQL & REST",
    "TECHNICAL SEO & CRO",
    "CROSS-PLATFORM MOBILE",
    "HIGH-ROAS PERFORMANCE ADS",
    "SUB-50MS LATENCY APIS",
  ];

  return (
    <div className="py-5 border-y border-white/[0.08] bg-black/40 backdrop-blur-md overflow-hidden relative select-none">
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#07080d] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#07080d] to-transparent z-10 pointer-events-none" />

      <div className="animate-marquee flex items-center gap-8">
        {[...items, ...items].map((text, idx) => (
          <div key={idx} className="flex items-center gap-8 shrink-0">
            <span className="font-mono-tech text-xs tracking-[0.25em] text-gray-400 font-semibold hover:text-[#d4ff00] transition-colors">
              {text}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#d4ff00]/60 shrink-0" />
          </div>
        ))}
      </div>
    </div>
  );
}
