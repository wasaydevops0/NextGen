import Image from "next/image";

export default function ClientMarquee() {
  const clients = [
    {
      name: "Versatile Dental Clinic",
      logo: "https://cdn.sanity.io/images/6bs02ygd/production/8d74aaf3a8eac185b3e49a62afe9bf50ef203808-92x92.jpg",
    },
    {
      name: "5D Revive",
      logo: "https://cdn.sanity.io/images/6bs02ygd/production/352758067e2f73cea010b22710299d2c6bb41530-150x150.jpg",
    },
    {
      name: "Med Supply",
      logo: "https://cdn.sanity.io/images/6bs02ygd/production/fa0537387c22193db9712a3096ca898ba6787240-1254x1254.png",
    },
    {
      name: "Bright Logistic Services",
      logo: "https://cdn.sanity.io/images/6bs02ygd/production/04855430650605ca1c0398e9f6a5ff7f85b1f6dc-720x722.jpg",
    },
    {
      name: "Mana Fragrance",
      logo: "https://cdn.sanity.io/images/6bs02ygd/production/ff9a6053a5eb700fde38a63853cc7c5f69c9c6a5-115x48.webp",
    },
    {
      name: "OrgaFresh",
      logo: "https://cdn.sanity.io/images/6bs02ygd/production/447b3e7efe870665881a770b1ec0f190eb9139ab-788x788.jpg",
    },
    {
      name: "Maju Code Craft",
      logo: "https://cdn.sanity.io/images/6bs02ygd/production/f300bf039f1d82ced228a2cb0ca9793a24538ad8-640x640.png",
    },
  ];

  // Repeat for continuous seamless scroll
  const marqueeList = [...clients, ...clients, ...clients];

  return (
    <section className="w-full bg-white py-12 md:py-16 border-b border-neutral-100 overflow-hidden relative">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-8 md:gap-12 z-10 relative">
        {/* Label */}
        <div className="flex-shrink-0 text-center md:text-left z-20 bg-white md:pr-4">
          <p className="text-sm font-urbanist font-semibold text-neutral-400 uppercase tracking-widest">
            Trusted By
          </p>
          <p className="text-xl font-urbanist font-bold text-[#2A3240] mt-1">
            Awesome Clients
          </p>
        </div>

        {/* Marquee Banner */}
        <div className="w-full relative overflow-hidden flex items-center">
          {/* Edge blur gradients */}
          <div className="absolute left-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div className="flex items-center whitespace-nowrap animate-marquee">
            {marqueeList.map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="flex items-center hover:opacity-100 transition-opacity grayscale hover:grayscale-0 cursor-pointer mx-8 md:mx-14 relative w-[120px] h-[60px] md:h-[75px]"
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  fill
                  sizes="120px"
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
