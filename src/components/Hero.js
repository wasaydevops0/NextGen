export default function Hero() {
  return (
    <main
      id="about"
      className="min-h-screen pt-32 pb-16 relative flex flex-col items-center justify-start overflow-hidden bg-white text-neutral-900"
    >
      <div className="flex flex-col items-center z-10 px-6 max-w-[1200px] mx-auto relative w-full h-full">
        {/* Floating Left Recommendation Quote */}
        <div className="absolute left-[0%] top-[45%] hidden md:flex flex-col max-w-[280px]">
          <div>
            <span className="text-[#344054] text-5xl font-serif leading-none">“</span>
            <p className="font-urbanist text-[#344054] text-lg font-medium leading-snug mt-2">
              NextGen&apos;s web and mobile app development delivered a seamless product our users love.
              <br />
              Highly Recommended
            </p>
          </div>
        </div>

        {/* Floating Right Agency Track Record Badge */}
        <div className="absolute right-[0%] top-[45%] hidden md:flex flex-col items-end text-right">
          <div>
            <div className="flex items-center gap-1 text-brand-orange text-2xl">
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
            </div>
            <span className="font-urbanist font-bold text-[56px] text-neutral-900 leading-none mt-2 block">
              120+
            </span>
            <span className="font-urbanist text-xl text-[#344054] font-medium">
              Products Launched
            </span>
          </div>
        </div>

        {/* Agency Tag Pill */}
        <div className="border border-neutral-900 rounded-[38px] px-6 py-2 mb-6">
          <span className="text-neutral-900 font-urbanist font-medium text-lg">
            Web, Mobile &amp; UI/UX Design Agency
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="font-urbanist font-medium text-[50px] sm:text-[72px] md:text-[96px] text-neutral-900 text-center leading-[1.1] mb-12 relative z-20">
          We design &amp; engineer <span className="text-brand-orange">exceptional</span>
          <br /> web &amp; mobile apps.
        </h1>

        {/* Peach-Orange Arch and 3D Product Showcase */}
        <div className="relative mt-8 w-full max-w-[700px] flex justify-center h-[520px] md:h-[600px]">
          {/* Peach-Orange Arch */}
          <div className="absolute bottom-0 w-full aspect-[2/1] bg-[#fca26e] rounded-t-full z-0" />

          {/* 3D Digital Product Showcase */}
          <div className="absolute bottom-[-10px] md:bottom-[-20px] w-[88%] md:w-[82%] h-auto max-h-[140%] object-contain z-10 drop-shadow-2xl pointer-events-none flex justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/Hero.png"
              alt="NextGen Web and Mobile Design Showcase"
              className="w-full h-auto object-contain mx-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.25)]"
            />
          </div>

          {/* Floating Glass Pill Dual CTA */}
          <div className="absolute bottom-10 md:bottom-12 z-20 bg-white/20 backdrop-blur-md border border-white/40 p-2 rounded-[60px] flex items-center shadow-xl">
            <a
              href="#portfolio"
              className="bg-brand-orange text-white rounded-[60px] px-8 py-3 font-urbanist font-semibold text-lg flex items-center gap-2 hover:opacity-90 transition-opacity"
            >
              View Our Work <span className="text-xl leading-none">↗</span>
            </a>
            <a
              href="#contact"
              className="text-white px-8 py-3 font-urbanist font-semibold text-lg hover:bg-white/10 rounded-[60px] transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
