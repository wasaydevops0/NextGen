export default function Process() {
  const steps = [
    {
      step: "01",
      title: "Discovery & Blueprint",
      desc: "We analyze your business model, audit technical dependencies, and define an ironclad architecture blueprint before writing a single line of code.",
      deliverable: "Product Spec & Architecture",
    },
    {
      step: "02",
      title: "UI/UX & Prototyping",
      desc: "Our design team translates your requirements into modular design tokens, accessibility-certified UI kits, and clickable prototypes in Figma.",
      deliverable: "Clickable Figma Prototype",
    },
    {
      step: "03",
      title: "Agile Sprint Engineering",
      desc: "Senior engineering pods build with Next.js 16, React Native, and cloud microservices. You receive weekly staging deployments and live demo walkthroughs.",
      deliverable: "Production Codebase & CI/CD",
    },
    {
      step: "04",
      title: "Launch & Growth Scaling",
      desc: "We orchestrate zero-downtime cloud releases, publish to App Stores, index Core Web Vitals, and scale targeted acquisition funnels for maximum ROI.",
      deliverable: "Public Launch & Analytics",
    },
  ];

  return (
    <section id="process" className="py-24 bg-[#f8f9fc] border-t border-gray-100 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#25dac5]/10 border border-[#25dac5]/30 text-[#15bca9] text-xs font-semibold tracking-wider uppercase mb-4">
            // SPRINT PROTOCOL
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-[#1e0e62] tracking-tight mb-4">
            A Predictable 4-Step Path to Launch
          </h2>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
            We operate with strict sprint gates so your digital product launches on time,
            fully tested, and primed for market adoption.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, idx) => (
            <div
              key={item.step}
              className="relative p-7 sm:p-8 rounded-3xl bg-white border border-gray-200/80 hover:border-[#25dac5] shadow-lg shadow-gray-200/40 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="text-4xl sm:text-5xl font-extrabold text-[#1e0e62] group-hover:text-[#25dac5] transition-colors">
                    {item.step}
                  </span>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-gray-500 bg-gray-100 px-2.5 py-1 rounded">
                    PHASE 0{idx + 1}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#1e0e62] mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-6 font-sans">
                  {item.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100">
                <span className="text-[10px] font-mono text-[#12bda9] block uppercase tracking-wider mb-1 font-bold">
                  Deliverable Gate:
                </span>
                <span className="text-xs font-semibold text-gray-800 block">
                  {item.deliverable}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
