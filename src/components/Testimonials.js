export default function Testimonials() {
  const testimonials = [
    {
      initial: "J",
      name: "Jayesh Patil",
      role: "CEO, Lirante",
      rating: "5",
      stars: 5,
      content:
        "Exceptional UI/UX design and flawless web development. NextGen completely rebuilt our digital platform, delivering an interface our users rave about and doubling our conversion rates.",
      isCenter: false,
    },
    {
      initial: "S",
      name: "Sarah Jenkins",
      role: "CTO, TechNova",
      rating: "5",
      stars: 5,
      content:
        "NextGen built our web and mobile applications from scratch with incredible speed and craftsmanship. Their attention to detail in responsive design and micro-interactions is unmatched.",
      isCenter: true,
    },
    {
      initial: "M",
      name: "Michael Chen",
      role: "Founder, Cinetstox",
      rating: "4.8",
      stars: 4,
      content:
        "One of the best web and product design agencies we have ever partnered with. Delivered pixel-perfect web interfaces and rock-solid code ahead of schedule.",
      isCenter: false,
    },
  ];

  return (
    <div className="w-full bg-white px-4 md:px-8 py-12" id="testimonials">
      <section className="w-full bg-[#111111] rounded-[40px] md:rounded-[60px] py-20 md:py-24 relative overflow-hidden flex flex-col items-center">
        {/* Glow Effects */}
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-brand-orange/10 blur-[120px] rounded-full z-0 pointer-events-none" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-brand-orange/5 blur-[120px] rounded-full z-0 pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center w-full px-4">
          <h2 className="font-urbanist font-medium text-[44px] md:text-[56px] text-white text-center leading-[1.15] relative">
            Client Stories That
            <br />
            Speak to <span className="text-brand-orange">Our Impact</span>
          </h2>
          <p className="font-sans text-neutral-300 text-center max-w-[700px] mt-6 text-[15px] leading-relaxed">
            Discover how NextGen Studio has helped emerging startups and global brands
            design, build, and launch market-leading web and mobile applications.
          </p>

          {/* Testimonial Cards Row */}
          <div className="w-full overflow-x-auto no-scrollbar mt-16 flex justify-center pb-4">
            <div className="flex gap-6 items-center px-4">
              {testimonials.map((item, idx) => (
                <div
                  key={idx}
                  className={`shrink-0 bg-white/5 border backdrop-blur-md rounded-[24px] p-8 relative overflow-hidden transition-all duration-300 ${
                    item.isCenter
                      ? "w-[320px] sm:w-[380px] md:w-[480px] border-white/20 shadow-2xl z-20 scale-100"
                      : "w-[300px] sm:w-[340px] md:w-[420px] border-white/10 opacity-70 md:opacity-85 hover:opacity-100"
                  }`}
                >
                  <span className="absolute right-8 leading-none font-serif select-none top-4 text-[140px] md:text-[160px] text-white/[0.04]">
                    ❞
                  </span>

                  {/* Header info */}
                  <div className="flex items-center gap-4 relative z-10">
                    <div
                      className={`relative rounded-full overflow-hidden flex items-center justify-center shrink-0 bg-neutral-600 ${
                        item.isCenter ? "w-14 h-14" : "w-12 h-12"
                      }`}
                    >
                      <span className="text-sm text-white font-bold">
                        {item.initial}
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span
                        className={`font-urbanist font-bold text-white leading-tight ${
                          item.isCenter ? "text-[22px]" : "text-[20px]"
                        }`}
                      >
                        {item.name}
                      </span>
                      <span className="font-sans text-neutral-400 mt-1 text-[14px]">
                        {item.role}
                      </span>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-3 mt-5 relative z-10">
                    <div className="flex text-brand-orange text-lg">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className={
                            i < item.stars
                              ? "text-brand-orange"
                              : "text-neutral-600"
                          }
                        >
                          ★
                        </span>
                      ))}
                    </div>
                    <span className="font-urbanist font-bold text-white mt-1 text-lg">
                      {item.rating}
                    </span>
                  </div>

                  {/* Content */}
                  <p className="font-sans text-neutral-300 leading-relaxed relative z-10 mt-5 text-[15px]">
                    {item.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
