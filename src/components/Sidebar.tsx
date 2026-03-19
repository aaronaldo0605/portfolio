"use client";

import { useEffect, useState } from "react";
import { Playfair_Display } from "next/font/google";

// Re-importing playfair for the component isolation if needed, or simply relying on the CSS variable.
// We'll use the CSS variable setup in layout.tsx.

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "Biography", href: "#biography" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
];

const Sidebar = () => {
  const [activeHash, setActiveHash] = useState("#home");

  useEffect(() => {
    // Simple intersection observer to highlight active nav link
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHash(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -60% 0px" } // Adjust threshold to trigger midway
    );

    const sections = NAV_ITEMS.map((item) => document.getElementById(item.href.replace("#", "")));
    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <aside className="fixed left-0 top-0 h-screen w-72 bg-[#0a0a0a] border-r border-zinc-900 hidden md:flex flex-col justify-between py-16 px-10 z-50">
      <div>
        <h1 className="text-3xl font-serif font-bold text-white uppercase tracking-widest leading-tight">
          Aaron
          <br />
          Rodrigues
        </h1>
        <p className="mt-4 text-xs font-sans tracking-[0.2em] text-zinc-500 uppercase">
          Business & Data Analyst
        </p>

        <nav className="mt-20 flex flex-col gap-6">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setActiveHash(item.href)}
              className={`text-sm tracking-widest uppercase font-semibold transition-colors duration-300 ${
                activeHash === item.href ? "text-[#ff0055]" : "text-zinc-500 hover:text-white"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="flex flex-col gap-4 text-xs tracking-widest text-zinc-600 uppercase">
        <a href="mailto:aaronrod0605@gmail.com" className="hover:text-white transition-colors">
          Email
        </a>
        <a href="https://linkedin.com/in/aaronrod0605/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
          LinkedIn
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
