"use client";

import { useRef } from "react";
import { motion, useScroll } from "framer-motion";

const experiences = [
  {
    role: "Business Analyst Intern",
    company: "BMO Bank N.A.",
    location: "Jacksonville, Florida",
    date: "May 2025 - Present",
    color: "#0079C1", // BMO Blue
    logoText: "B",
    points: [
      "Gathered stakeholder requirements and designed 12 SharePoint sites to centralize resources, improving training efficiency by 40%.",
      "Analyzed manual workflows and automated 5+ processes using Power Apps and Power Automate, saving 25+ hours monthly.",
      "Developed an interactive Power BI dashboard to track team training metrics, enabling real-time performance evaluation."
    ]
  },
  {
    role: "Data Analyst",
    company: "Travelex",
    location: "Mumbai, India",
    date: "Sep 2022 - Jun 2024",
    color: "#E31837", // Travelex Red
    logoText: "T",
    points: [
      "Developed 8+ interactive Power BI dashboards for senior management, enhancing financial reporting speed and accuracy.",
      "Rebuilt core data ingestion pipelines via Azure Synapse and Snowflake, cutting daily refresh times by 30%.",
      "Designed advanced SQL server queries over millions of rows, uncovering customer segments that increased targeted revenue by 10%."
    ]
  },
  {
    role: "Business Analyst Intern",
    company: "3folks Media",
    location: "Mumbai, India",
    date: "Jan 2022 - Aug 2022",
    color: "#6B21A8", // Deep Purple
    logoText: "3",
    points: [
      "Analyzed web analytics through Google Analytics to re-architect client SEO, boosting organic web traffic by 30%.",
      "Mapped and optimized CRM workflows using Agile methodologies, resulting in a 15% increase in lead retention.",
      "Presented bi-weekly trend reports to cross-functional teams, directly shaping product marketing strategies."
    ]
  },
  {
    role: "Software Developer Intern",
    company: "KubixSquare",
    location: "Mumbai, India",
    date: "May 2021 - Oct 2021",
    color: "#059669", // Emerald Green
    logoText: "K",
    points: [
      "Programmed cutting-edge frontend UI elements in React.js, optimizing component re-rendering and page load speed by 25%.",
      "Integrated dynamic REST APIs into financial portals, ensuring secure and high-throughput transaction metrics.",
      "Collaborated closely with UX designers to align technical implementation with strict conversion-oriented design principles."
    ]
  }
];

const ExperienceItem = ({ exp, index, isLast }: { exp: any; index: number; isLast: boolean }) => {
  const ref = useRef<HTMLDivElement>(null);
  
  // Track scroll progress of this specific item's container to fill its line
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: 0 }}
      className="flex items-start gap-8 lg:gap-14 relative"
    >
      {/* Logo Box */}
      <div 
        className="hidden md:flex w-32 h-32 lg:w-40 lg:h-40 shrink-0 items-center justify-center shadow-2xl mt-4 bg-[#121212] border border-zinc-900"
        style={{ backgroundColor: exp.color }}
      >
        <span className="text-white text-5xl lg:text-7xl font-bold">{exp.logoText}</span>
      </div>

      {/* Timeline Column */}
      <div className="hidden sm:flex flex-col items-center self-stretch shrink-0 relative w-6 pt-6">
        {/* Node Circle */}
        <div className="w-2.5 h-2.5 bg-white rounded-full z-10 shadow-[0_0_8px_rgba(255,255,255,0.6)]"></div>
        
        {/* Unfilled Gray Track */}
        <div className={`w-px absolute top-8 bottom-0 ${isLast ? 'bg-gradient-to-b from-zinc-800 to-transparent' : 'bg-zinc-800'}`}></div>
        
        {/* Dynamic Gradient Fill */}
        <motion.div 
          className={`w-px absolute top-8 bottom-0 origin-top z-0 ${isLast ? 'bg-gradient-to-b from-[#FE4A49] to-transparent opacity-90' : 'bg-gradient-to-b from-[#FE4A49] to-[#FF0254] opacity-90'}`}
          style={{ scaleY: scrollYProgress }}
        ></motion.div>
      </div>

      {/* Text Content */}
      <div className="flex-1 pb-24 sm:pb-32 pt-4">
        <h3 className="text-[#FE4A49] text-3xl font-bold tracking-tight">{exp.role}</h3>
        <h4 className="text-[#FF0254] text-xl font-bold mt-1 tracking-wide">{exp.company}</h4>
        <p className="text-zinc-500 mt-2 text-sm italic font-mono">
          {exp.date} &nbsp;—&nbsp; {exp.location}
        </p>
        <ul className="text-zinc-400 mt-6 space-y-3 leading-relaxed list-inside">
          {exp.points.map((point: string, i: number) => (
            <li key={i} className="flex items-start gap-3 text-base">
              <span className="text-[#A0A0A0] mt-1 text-sm">•</span>
              <span className="text-[#A0A0A0]">{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="relative z-20 w-full bg-[#0a0a0a] text-white py-24 px-6 md:px-16 lg:px-24 border-t border-zinc-900">
      <div className="max-w-5xl">
        
        <div className="mb-24">
          <h2 className="text-4xl md:text-5xl font-serif uppercase font-bold tracking-widest text-white drop-shadow-2xl">Experience</h2>
          <p className="text-zinc-400 mt-4 text-base md:text-lg">My professional journey in banking, fintech, and data.</p>
        </div>

        <div className="space-y-0">
          {experiences.map((exp, index) => (
            <ExperienceItem 
              key={index} 
              exp={exp} 
              index={index} 
              isLast={index === experiences.length - 1} 
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
