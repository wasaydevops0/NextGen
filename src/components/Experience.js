export default function Experience() {
  const steps = [
    {
      phase: "Phase 01",
      period: "Discovery & UI/UX Design",
      title: "User Research, Wireframes & Interactive Prototypes",
      description:
        "We conduct user research, build high-fidelity Figma prototypes, design comprehensive component libraries, and validate user journeys before writing a single line of code.",
      dotColor: "bg-brand-orange",
    },
    {
      phase: "Phase 02",
      period: "Web & Mobile Engineering",
      title: "High-Velocity Full-Stack Development",
      description:
        "Agile bi-weekly development sprints turning prototypes into pixel-perfect web and mobile applications using Next.js, React Native, and robust cloud APIs with continuous feedback.",
      dotColor: "bg-[#2A3240]",
    },
    {
      phase: "Phase 03",
      period: "QA & Global Launch",
      title: "Cross-Device Testing, Store Publishing & Cloud Deployment",
      description:
        "Rigorous cross-browser and mobile device testing, App Store & Google Play submissions, Core Web Vitals optimization, and seamless zero-downtime production rollout.",
      dotColor: "bg-brand-orange",
    },
  ];

  return (
    <section
      className="w-full bg-white py-24 relative overflow-hidden"
      id="process"
    >
      <div className="w-full max-w-[1200px] mx-auto px-6 md:px-12" id="resume">
        <h2 className="font-urbanist font-bold text-[40px] sm:text-[48px] md:text-[56px] text-center mb-16 md:mb-24">
          <span className="text-[#2A3240]">Our </span>
          <span className="text-brand-orange">Design &amp; Development Process</span>
        </h2>

        <div className="relative w-full max-w-[900px] mx-auto">
          {/* Central dashed line for desktop */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-0 border-r-2 border-dashed border-neutral-400 -translate-x-[1px]" />

          <div className="flex flex-col gap-12 md:gap-16">
            {steps.map((item, idx) => (
              <div
                key={idx}
                className="relative flex flex-col md:flex-row items-start md:items-center justify-between w-full gap-4 md:gap-0"
              >
                {/* Left side: Phase & Step */}
                <div className="w-full md:w-[45%] text-left md:text-right md:pr-8">
                  <h3 className="font-urbanist font-bold text-[24px] md:text-[28px] text-[#2A3240]">
                    {item.phase}
                  </h3>
                  <p className="font-sans text-[16px] md:text-[18px] text-[#8C94A3] mt-1 md:mt-2">
                    {item.period}
                  </p>
                </div>

                {/* Central Dashed Milestone Circle */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center bg-white z-10 w-[36px] h-[36px] rounded-full border border-dashed border-[#2A3240]">
                  <div className={`w-[20px] h-[20px] rounded-full ${item.dotColor}`} />
                </div>

                {/* Right side: Title & Description */}
                <div className="w-full md:w-[45%] text-left md:pl-8">
                  <h3 className="font-urbanist font-bold text-[24px] md:text-[28px] text-[#2A3240]">
                    {item.title}
                  </h3>
                  <p className="font-sans text-[14px] md:text-[15px] text-[#8C94A3] mt-2 md:mt-3 leading-relaxed max-w-[400px]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
