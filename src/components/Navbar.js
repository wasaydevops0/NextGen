"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full px-4">
      <div className="max-w-[1200px] mx-auto mt-6 bg-[#171717] backdrop-blur-[10px] rounded-[60px] p-2 px-3 flex justify-between items-center shadow-2xl border border-white/5">
        {/* Left Navigation */}
        <nav className="hidden lg:flex items-center gap-2">
          <Link
            href="/"
            className="bg-brand-orange text-white rounded-[60px] px-8 py-3 font-urbanist font-bold text-[17px] hover:opacity-95 transition-opacity"
          >
            Home
          </Link>
          <a
            href="#about"
            className="text-white font-urbanist text-[17px] px-6 hover:text-brand-orange transition-colors"
          >
            About
          </a>
          <a
            href="#services"
            className="text-white font-urbanist text-[17px] px-6 hover:text-brand-orange transition-colors"
          >
            Services
          </a>
        </nav>

        {/* Center Logo */}
        <Link href="/" className="flex items-center gap-2.5 px-8 lg:px-0">
          <div className="w-10 h-10 bg-brand-orange rounded-full flex items-center justify-center text-white font-bold text-sm tracking-tighter">
            NG
          </div>
          <span className="text-white font-urbanist font-bold text-xl tracking-wider">
            NEXTGEN
          </span>
        </Link>

        {/* Right Navigation */}
        <nav className="hidden lg:flex items-center gap-2 pr-6">
          <a
            href="#process"
            className="text-white font-urbanist text-[17px] px-6 hover:text-brand-orange transition-colors"
          >
            Process
          </a>
          <a
            href="#portfolio"
            className="text-white font-urbanist text-[17px] px-6 hover:text-brand-orange transition-colors"
          >
            Case Studies
          </a>
          <a
            href="#contact"
            className="text-white font-urbanist text-[17px] px-6 hover:text-brand-orange transition-colors"
          >
            Contact
          </a>
        </nav>

        {/* Mobile Hamburger Button */}
        <div
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-white cursor-pointer px-4 bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors"
          aria-label="Toggle menu"
        >
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
            {mobileMenuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </>
            ) : (
              <>
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </>
            )}
          </svg>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden max-w-[1200px] mx-auto mt-2 bg-[#171717]/95 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl flex flex-col gap-4 text-center">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="bg-brand-orange text-white rounded-full py-3 font-urbanist font-bold text-lg"
          >
            Home
          </Link>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="text-white font-urbanist text-lg py-2 hover:text-brand-orange transition-colors"
          >
            About
          </a>
          <a
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="text-white font-urbanist text-lg py-2 hover:text-brand-orange transition-colors"
          >
            Services
          </a>
          <a
            href="#process"
            onClick={() => setMobileMenuOpen(false)}
            className="text-white font-urbanist text-lg py-2 hover:text-brand-orange transition-colors"
          >
            Process
          </a>
          <a
            href="#portfolio"
            onClick={() => setMobileMenuOpen(false)}
            className="text-white font-urbanist text-lg py-2 hover:text-brand-orange transition-colors"
          >
            Case Studies
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="text-white font-urbanist text-lg py-2 hover:text-brand-orange transition-colors"
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
}
