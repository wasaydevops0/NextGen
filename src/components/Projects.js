"use client";

import { useState } from "react";
import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      id: 0,
      title: "Bright Logistics Services — Enterprise Logistics Platform",
      description:
        "Our agency architected a modern logistics web portal coupled with a dedicated administrative cockpit, automating dispatch management, inventory tracking, and operational reporting.",
      image:
        "https://cdn.sanity.io/images/6bs02ygd/production/fb33a13dbfe1d9764440e193245e76439815e4b4-1254x1254.png",
      link: "https://brightlogistics.com.pk/",
      tech: [
        "NextJS",
        "TypeScript",
        "TailwindCSS",
        "Sanity Headless CMS",
        "ReactJS",
      ],
    },
    {
      id: 1,
      title: "Micro Problems PK — Civic Issue Reporting & Triage System",
      description:
        "We engineered an interactive civic tracking platform that empowers citizens to map and report infrastructure issues in real-time, backed by automated dispatch routing and administrative triage workflows.",
      image:
        "https://cdn.sanity.io/images/6bs02ygd/production/b544a7c338619563a1bb860157c308123c526d4b-1254x1254.png",
      link: "https://micro-problems-ng94.vercel.app/",
      tech: ["NextJS", "OpenStreetMap", "PostgreSQL", "TailwindCSS"],
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = projects[activeIndex];

  return (
    <section className="w-full bg-white py-24" id="portfolio">
      <div className="w-full max-w-[1200px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <h2 className="font-urbanist font-bold text-[44px] md:text-[64px] leading-[1.1]">
            <span className="text-[#2A3240] block">Explore Our Agency</span>
            <span className="text-[#2A3240]">featured </span>
            <span className="text-brand-orange">Case Studies</span>
          </h2>
          <button
            onClick={() => {
              const el = document.getElementById("portfolio");
              el?.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-brand-orange text-white font-sans font-semibold px-8 py-3 rounded-full hover:bg-brand-orangeDark transition-colors"
          >
            All Case Studies
          </button>
        </div>

        {/* 2-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {projects.map((project, idx) => (
            <div
              key={project.title}
              onClick={() => setActiveIndex(idx)}
              className={`w-full aspect-square bg-neutral-200 rounded-3xl overflow-hidden relative shadow-sm group cursor-pointer border transition-all ${
                activeIndex === idx
                  ? "border-brand-orange ring-4 ring-brand-orange/20"
                  : "border-neutral-100 hover:border-brand-orange/50"
              }`}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="absolute inset-0 object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />

              {/* Hover frosted glass card */}
              <div className="absolute inset-x-4 bottom-4 md:inset-x-6 md:bottom-6 p-5 md:p-6 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out z-20 pointer-events-none">
                <h3 className="text-white text-2xl md:text-3xl font-urbanist font-bold drop-shadow-md leading-tight">
                  {project.title}
                </h3>
              </div>

              {/* Outbound Link Circle */}
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="absolute top-6 right-6 w-12 h-12 rounded-full border border-brand-orange flex items-center justify-center text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-all bg-white/50 backdrop-blur-sm z-20 shadow-md"
              >
                <span className="text-xl leading-none font-bold">→</span>
              </a>
            </div>
          ))}
        </div>

        {/* Carousel indicator dots */}
        <div className="flex justify-center items-center gap-2 mb-12">
          {projects.map((_, idx) => (
            <div
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`h-2 rounded-full cursor-pointer transition-all ${
                activeIndex === idx
                  ? "w-10 bg-brand-orange"
                  : "w-2 bg-neutral-200 hover:bg-neutral-300"
              }`}
            />
          ))}
        </div>

        {/* Active Project Details */}
        <div className="w-full">
          {/* Tech Badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {activeProject.tech.map((tag) => (
              <span
                key={tag}
                className="bg-[#F3F4F6] text-[#4B5563] font-sans text-sm font-medium px-6 py-2.5 rounded-full hover:bg-neutral-200 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Project Title & Description */}
          <div className="flex flex-col items-center text-center max-w-[800px] mx-auto gap-4">
            <div className="flex items-center justify-center gap-4">
              <h3 className="font-urbanist font-bold text-[30px] md:text-[40px] text-[#2A3240] leading-tight">
                {activeProject.title}
              </h3>
              <a
                href={activeProject.link}
                target="_blank"
                rel="noreferrer"
                className="bg-brand-orange text-white w-10 h-10 rounded-full flex items-center justify-center shrink-0 cursor-pointer hover:bg-brand-orangeDark transition-colors shadow-sm"
              >
                <span className="text-xl leading-none font-light mb-0.5">↗</span>
              </a>
            </div>
            <p className="font-sans text-[16px] text-[#8C94A3] leading-relaxed">
              {activeProject.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
