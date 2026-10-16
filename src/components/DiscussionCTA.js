"use client";

import { useState } from "react";

export default function DiscussionCTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 4000);
      setEmail("");
    }
  };

  const tickerItems = [
    "Web Development",
    "UI/UX Design",
    "Mobile Apps",
    "Brand Identity",
    "SaaS Platforms",
    "Full-Stack Engineering",
  ];

  // Repeat for continuous marquee
  const repeatedTicker = [
    ...tickerItems,
    ...tickerItems,
    ...tickerItems,
    ...tickerItems,
  ];

  return (
    <section className="w-full bg-white pt-24 overflow-hidden relative">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col items-center z-10 relative">
        {/* Headline */}
        <h2 className="font-urbanist font-bold text-[44px] md:text-[64px] text-center leading-[1.15] mb-12">
          <span className="text-[#2A3240]">
            Have an Ambitious Project
            <br />
            In Mind?{" "}
          </span>
          <span className="text-brand-orange">Let&apos;s Build It</span>
        </h2>

        {/* Input pill */}
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-[600px] border border-neutral-200 rounded-full p-2 flex items-center justify-between bg-white shadow-sm mb-10 hover:border-brand-orange/50 transition-colors"
        >
          <div className="flex items-center flex-1 px-2">
            <div className="w-10 h-10 bg-brand-orange/20 rounded-full flex items-center justify-center text-brand-orange shrink-0">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={
                submitted
                  ? "Thank you! Our design team will contact you shortly."
                  : "Enter Business Email"
              }
              className="w-full bg-transparent border-none outline-none px-4 font-sans text-neutral-600 placeholder:text-neutral-500"
            />
          </div>
          <button
            type="submit"
            className="bg-brand-orange text-white font-sans font-medium px-8 py-3.5 rounded-full hover:bg-brand-orangeDark transition-colors shrink-0 cursor-pointer"
          >
            {submitted ? "Sent!" : "Get in Touch"}
          </button>
        </form>

        {/* Agency Trust Badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 text-[#2A3240] font-sans text-sm font-medium">
          <div className="flex items-center gap-2">
            <span className="text-brand-orange text-lg leading-none">★</span>
            <span>4.9/5 Client Rating</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[#2A3240] text-lg leading-none">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="8" r="7"></circle>
                <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
              </svg>
            </span>
            <span>120+ Web &amp; Mobile Apps</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[#2A3240] text-lg leading-none">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                <polyline points="9 12 11 14 15 10"></polyline>
              </svg>
            </span>
            <span>Award-Winning UI/UX Team</span>
          </div>
        </div>
      </div>

      {/* Dual Overlapping Rotated Banners */}
      <div className="relative w-full h-[160px] md:h-[200px] mt-16 flex items-center justify-center">
        {/* Orange background angled banner */}
        <div className="absolute w-[110%] h-[80px] md:h-[100px] bg-brand-orange transform -rotate-2 scale-110 z-0 shadow-lg" />

        {/* White foreground angled ticker banner */}
        <div className="absolute w-[110%] h-[80px] md:h-[100px] bg-white border-y border-neutral-200 transform rotate-1 scale-110 z-10 flex items-center overflow-hidden shadow-sm">
          <div className="flex items-center whitespace-nowrap animate-marquee">
            {repeatedTicker.map((text, i) => (
              <div key={i} className="flex items-center">
                <span className="font-urbanist text-[28px] md:text-[40px] text-neutral-900 mx-4 md:mx-6 font-medium">
                  {text}
                </span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#FD853A"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-2 shrink-0"
                >
                  <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"></path>
                </svg>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
