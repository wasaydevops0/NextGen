"use client";

import { useState } from "react";
import Link from "next/link";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail("");
    }
  };

  return (
    <footer className="w-full bg-white pt-12" id="contact">
      <div className="w-full bg-[#282828] rounded-t-[40px] px-8 md:px-16 py-16 flex flex-col gap-12">
        {/* Top Header Row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <h2 className="font-urbanist font-bold text-[40px] sm:text-[48px] md:text-[56px] text-white leading-tight">
            Let&apos;s Build Together
          </h2>
          <a
            href="mailto:hello@nextgenapps.dev"
            className="bg-brand-orange text-white font-sans font-medium text-lg px-8 py-3.5 rounded-full hover:bg-brand-orangeDark transition-colors flex items-center gap-2 shadow-lg"
          >
            Start a Project <span className="font-light text-xl leading-none mb-0.5">↗</span>
          </a>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/10" />

        {/* 4 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">
          {/* Bio & Socials */}
          <div className="md:col-span-12 lg:col-span-5 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-brand-orange rounded-full flex items-center justify-center text-white font-bold font-sans">
                NG
              </div>
              <span className="font-urbanist font-bold text-2xl text-white tracking-wide">
                NextGen Studio
              </span>
            </div>
            <p className="font-sans text-[15px] text-neutral-300 leading-relaxed max-w-[400px]">
              A full-service digital agency crafting bespoke websites, high-performance
              mobile applications, and user-centric UI/UX designs.
            </p>
            <div className="flex items-center gap-4 mt-2">
              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-6 h-6 text-white hover:text-brand-orange transition-colors"
                aria-label="LinkedIn"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm-1-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm5 7h-2v-3c0-.55-.45-1-1-1s-1 .45-1 1v3h-2v-6h2v1.1c.36-.6 1.2-1.2 2-1.2 1.66 0 3 1.34 3 3v4.9z" />
                </svg>
              </a>
              {/* GitHub */}
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-6 h-6 text-white hover:text-brand-orange transition-colors"
                aria-label="GitHub"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
              {/* Twitter / X */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-6 h-6 text-white hover:text-brand-orange transition-colors"
                aria-label="Twitter / X"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-4 lg:col-span-2 flex flex-col gap-5">
            <h3 className="font-urbanist font-bold text-brand-orange text-lg">
              Navigation
            </h3>
            <div className="flex flex-col gap-4 mt-2">
              <Link
                href="/"
                className="font-sans text-[15px] text-white hover:text-brand-orange transition-colors"
              >
                Home
              </Link>
              <a
                href="#services"
                className="font-sans text-[15px] text-white hover:text-brand-orange transition-colors"
              >
                Services
              </a>
              <a
                href="#portfolio"
                className="font-sans text-[15px] text-white hover:text-brand-orange transition-colors"
              >
                Case Studies
              </a>
              <a
                href="#testimonials"
                className="font-sans text-[15px] text-white hover:text-brand-orange transition-colors"
              >
                Reviews
              </a>
            </div>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4 lg:col-span-2 flex flex-col gap-5">
            <h3 className="font-urbanist font-bold text-brand-orange text-lg">
              Contact
            </h3>
            <div className="flex flex-col gap-4 mt-2">
              <a
                href="tel:+15552348901"
                className="font-sans text-[15px] text-white hover:text-brand-orange transition-colors"
              >
                +1 (555) 234-8901
              </a>
              <a
                href="mailto:hello@nextgenapps.dev"
                className="font-sans text-[15px] text-white hover:text-brand-orange transition-colors"
              >
                hello@nextgenapps.dev
              </a>
              <a
                href="#"
                className="font-sans text-[15px] text-white hover:text-brand-orange transition-colors"
              >
                nextgenapps.dev
              </a>
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div className="md:col-span-4 lg:col-span-3 flex flex-col gap-5">
            <h3 className="font-urbanist font-bold text-brand-orange text-lg">
              Get the latest insights
            </h3>
            <form
              onSubmit={handleSubscribe}
              className="w-full bg-white rounded-full p-1.5 flex mt-2 h-12"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={subscribed ? "Subscribed!" : "Business Email"}
                className="bg-transparent text-neutral-800 text-sm px-4 outline-none flex-1 font-sans placeholder:text-neutral-500"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="bg-brand-orange text-white rounded-full w-9 h-9 flex items-center justify-center hover:bg-brand-orangeDark transition-colors shrink-0 cursor-pointer"
              >
                <span className="text-lg leading-none">➤</span>
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/10 mt-4" />

        {/* Bottom copyright row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-sans text-neutral-300">
          <p>Copyright© 2026 NextGen Studio. All Rights Reserved.</p>
          <div className="flex gap-2">
            <a href="#" className="hover:text-white transition-colors">
              Terms &amp; Conditions
            </a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
