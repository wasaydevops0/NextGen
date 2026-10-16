import Image from "next/image";

// Reusable SVG for Farfalle (Bowtie Pasta) background element
function FarfallePasta({ className = "", style = {} }) {
  return (
    <svg
      viewBox="0 0 100 70"
      className={`w-14 h-10 sm:w-20 sm:h-14 drop-shadow-md select-none pointer-events-none ${className}`}
      style={style}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="pastaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f8d5ae" />
          <stop offset="50%" stopColor="#eebf8f" />
          <stop offset="100%" stopColor="#dba26c" />
        </linearGradient>
        <filter id="pastaShadow" x="-10%" y="-10%" width="130%" height="130%">
          <feDropShadow dx="2" dy="4" stdDeviation="3" floodColor="#2b1a50" floodOpacity="0.25" />
        </filter>
      </defs>

      {/* Farfalle Bowtie Shape */}
      <g filter="url(#pastaShadow)">
        {/* Left Wing */}
        <path
          d="M 46 35 C 38 22 24 12 8 8 C 5 13 6 18 4 23 C 6 28 5 33 4 38 C 6 43 5 48 4 53 C 6 58 5 63 8 67 C 24 62 38 48 46 35 Z"
          fill="url(#pastaGrad)"
        />
        {/* Right Wing */}
        <path
          d="M 54 35 C 62 22 76 12 92 8 C 95 13 94 18 96 23 C 94 28 95 33 96 38 C 94 43 95 48 96 53 C 94 58 95 63 92 67 C 76 62 62 48 54 35 Z"
          fill="url(#pastaGrad)"
        />
        {/* Center Pinch / Knot */}
        <ellipse cx="50" cy="35" rx="5.5" ry="9" fill="#dba26c" />
        <ellipse cx="50" cy="35" rx="4" ry="7" fill="#edd0b0" />
        {/* Crease Lines */}
        <path d="M 46 33 Q 32 30 14 26" stroke="#c9915a" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
        <path d="M 46 37 Q 32 40 14 44" stroke="#c9915a" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
        <path d="M 54 33 Q 68 30 86 26" stroke="#c9915a" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
        <path d="M 54 37 Q 68 40 86 44" stroke="#c9915a" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
      </g>
    </svg>
  );
}

export default function BetterLanding() {
  return (
    <section className="relative bg-[#6e63df] pt-20 sm:pt-28 pb-0 overflow-hidden text-center text-white">
      {/* Background Farfalle / Bowtie Pasta Decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top Farfalle Pasta */}
        <FarfallePasta className="absolute top-6 left-[6%] -rotate-[22deg] opacity-90" />
        <FarfallePasta className="absolute top-4 left-[24%] rotate-[18deg] opacity-95" />
        <FarfallePasta className="absolute top-3 left-[48%] -rotate-[10deg] opacity-90" />
        <FarfallePasta className="absolute top-5 right-[24%] rotate-[28deg] opacity-95" />
        <FarfallePasta className="absolute top-7 right-[6%] -rotate-[35deg] opacity-90" />

        {/* Middle Floating Farfalle */}
        <FarfallePasta className="absolute top-40 left-[2%] rotate-[40deg] opacity-85" />
        <FarfallePasta className="absolute top-52 left-[14%] -rotate-[15deg] opacity-90" />
        <FarfallePasta className="absolute top-48 left-[38%] rotate-[30deg] opacity-80" />
        <FarfallePasta className="absolute top-52 right-[36%] -rotate-[24deg] opacity-85" />
        <FarfallePasta className="absolute top-44 right-[12%] rotate-[14deg] opacity-90" />
        <FarfallePasta className="absolute top-36 right-[2%] -rotate-[45deg] opacity-85" />

        {/* Side / Lower Farfalle */}
        <FarfallePasta className="absolute bottom-48 left-[5%] rotate-[32deg] opacity-85" />
        <FarfallePasta className="absolute bottom-24 left-[1%] -rotate-[18deg] opacity-80" />
        <FarfallePasta className="absolute bottom-52 right-[4%] -rotate-[28deg] opacity-85" />
        <FarfallePasta className="absolute bottom-20 right-[1%] rotate-[36deg] opacity-80" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
        {/* Small Tag */}
        <p className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-white/90 mb-3.5 font-mono">
          EASY-TO-USE
        </p>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-tight leading-tight mb-4">
          Better Landing for Your Startup
        </h2>

        {/* Subtitle */}
        <p className="text-white/85 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-12 sm:mb-16 font-sans">
          We have created a new product that will help designers, developers and companies
          create websites for their startups quickly and easily.
        </p>

        {/* 2-Column Feature Row */}
        <div className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 mb-14 sm:mb-16 text-left px-2">
          {/* User Guide */}
          <div className="flex items-start gap-3.5">
            <div className="w-8 h-8 rounded-lg bg-[#25dac5] flex items-center justify-center shrink-0 mt-0.5 shadow-md shadow-black/10">
              <svg className="w-4 h-4 text-[#1e0e62]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 2H6c-1.2 0-2 .8-2 2v16c0 1.2.8 2 2 2h13c.6 0 1-.4 1-1s-.4-1-1-1H6c-.2 0-.3-.1-.3-.3 0-.1.1-.3.3-.3h13c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1zm-1 14H6V4h12v12z" />
              </svg>
            </div>
            <div>
              <h3 className="text-white font-bold text-base mb-1">User Guide</h3>
              <p className="text-white/80 text-xs sm:text-sm leading-relaxed">
                You&apos;ll get a description of each component and learn how to connect and use them.
              </p>
            </div>
          </div>

          {/* Video Tutorials */}
          <div className="flex items-start gap-3.5">
            <div className="w-8 h-8 rounded-lg bg-[#ff0000] flex items-center justify-center shrink-0 mt-0.5 shadow-md shadow-black/10">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z" />
              </svg>
            </div>
            <div>
              <h3 className="text-white font-bold text-base mb-1">Video Tutorials</h3>
              <p className="text-white/80 text-xs sm:text-sm leading-relaxed">
                Video tutorials show you how to make a web site for your startup from design to code.
              </p>
            </div>
          </div>
        </div>

        {/* Display Screen in Device Frame (Centered & Flush to Bottom) */}
        <div className="relative w-full max-w-4xl mx-auto pt-2">
          {/* Device Bezel */}
          <div className="bg-[#0f1118] border-4 border-[#1b1d28] rounded-t-[28px] sm:rounded-t-[36px] p-2.5 sm:p-4 pb-0 shadow-2xl mx-auto">
            {/* Screen Inner Display */}
            <div className="relative rounded-t-[18px] sm:rounded-t-[24px] overflow-hidden bg-[#ffe600]">
              <Image
                src="/images/screen.png"
                alt="Product Showcase Display"
                width={1080}
                height={600}
                className="w-full h-auto object-cover object-top block"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
