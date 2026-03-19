"use client";

import { useRef } from "react";
import { motion, useScroll } from "framer-motion";

const experiences = [
  {
    role: "Business Analyst Intern",
    company: "BMO Bank N.A.",
    location: "Jacksonville, Florida",
    date: "May 2025 - Present",
    logoSrc: "/logos/bmo.png",
    points: [
      "Gathered stakeholder requirements and designed 12 SharePoint sites to centralize resources, improving training efficiency by 40%.",
      "Analyzed manual workflows and automated 5+ processes using Power Apps and Power Automate, saving 25+ hours per month.",
      "Translated business needs into Power BI dashboards using advanced DAX to track KPIs across 5+ teams, improving visibility by 35%.",
      "Queried and consolidated 800+ operational records using SQL into a centralized SharePoint repository, reducing lookup time by 30%."
    ]
  },
  {
    role: "Data Analyst",
    company: "Travelex",
    location: "Mumbai, India",
    date: "May 2022 - Aug 2024",
    logoSrc: "/logos/travelex.png",
    points: [
      "Created 55+ BI reports with Power BI, SQL, and Excel to support business performance monitoring and stakeholder decision-making.",
      "Redesigned and automated an ETL pipeline, reducing runtime from 75 hours to 70 seconds and improving efficiency by 3800x.",
      "Automated data validation pipelines for BI reports using SQL and Python, improving reporting accuracy and reducing manual effort.",
      "Built Risk Case Manager (RCM) reporting dashboards for stakeholder case analytics, eliminating $150,000+ in licensing costs.",
      "Optimized Amazon S3 storage architecture, reducing cloud infrastructure costs by $60,000+.",
      "Validated AML compliance data across 17 countries using NICE Actimize, Persona, and ThetaRay to ensure reporting accuracy.",
      "Analyzed and optimized fraud detection and AML monitoring rules to reduce alert volume by 50% and false positives by 60%."
    ]
  },
  {
    role: "Business Analyst Intern",
    company: "3folks Media",
    location: "Mumbai, India",
    date: "Aug 2020 - May 2022",
    logoSrc: "/logos/3folks.png",
    points: [
      "Evaluated campaign KPIs for 120+ interns using SQL to identify performance gaps, improving operational efficiency by 60%.",
      "Tracked delivery metrics using Jira and implemented agile practices, reducing delivery time by 35% and improving productivity by 50%."
    ]
  },
  {
    role: "Software Developer Intern",
    company: "KubixSquare",
    location: "Mumbai, India",
    date: "Aug 2021 - Nov 2021",
    logoSrc: "/logos/kubixsquare.png",
    points: [
      "Developed 3 application modules for KubixSquare Application Architecture using Python, MySQL, Django, and Docker.",
      "Improved database queries, reducing load time by 12% and improving user responsiveness."
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
      <div className="hidden md:flex w-32 h-32 lg:w-40 lg:h-40 shrink-0 items-center justify-center mt-4 rounded-2xl overflow-hidden bg-[#121212] border border-zinc-800 shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] shadow-2xl relative">
        <img src={exp.logoSrc} alt={`${exp.company} logo`} className="w-full h-full object-cover" />
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
