"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const skillCategories = [
  {
    title: "Programming & Scripting",
    skills: ["Python", "Pandas", "NumPy", "Scikit-learn", "SQL", "MySQL", "PostgreSQL", "Oracle", "SQL Server", "R", "PySpark", "SAS"],
  },
  {
    title: "Data Analytics & Visualization",
    skills: ["Power BI", "DAX", "Power Query", "Tableau", "Streamlit", "Excel", "Power Pivot", "Advanced Formulas", "Alteryx"],
  },
  {
    title: "Cloud & DevOps Tools",
    skills: ["AWS", "S3", "Glue", "Redshift", "Snowflake", "dbt", "Git", "GitHub", "Docker"],
  },
  {
    title: "Business Intelligence & Automation",
    skills: ["Power Apps", "Power Automate", "SharePoint", "Microsoft Office Suite"],
  },
  {
    title: "AML & Compliance Platforms",
    skills: ["NICE Actimize", "WLF", "SAM", "RCM", "AIS", "ThetaRay", "Refinitiv", "Persona", "Norkom"],
  }
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="skills" className="relative z-20 w-full bg-[#0a0a0a] text-white py-24 px-6 md:px-16 lg:px-24 border-t border-zinc-900">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif uppercase font-bold tracking-widest text-white drop-shadow-2xl">
              Skills
            </h2>
            <div className="w-12 h-1 bg-white mt-6"></div>
            <p className="text-zinc-400 mt-6 text-base md:text-lg max-w-2xl">
              A comprehensive overview of my technical toolkit, mapped to my core competencies. Select a category below to explore my expertise.
            </p>
          </motion.div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mt-12 items-start">
          {/* Left/Top side: Category List */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-1/3 flex flex-col gap-3"
          >
            {skillCategories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveCategory(idx)}
                className={`text-left px-6 py-5 rounded-xl transition-all duration-300 border relative overflow-hidden group ${
                  activeCategory === idx 
                    ? "bg-[#121212] border-[#FE4A49] text-white shadow-[0_0_20px_rgba(254,74,73,0.1)]"
                    : "bg-transparent border-zinc-900 text-zinc-500 hover:border-zinc-700 hover:text-zinc-300 hover:bg-zinc-900/30"
                }`}
              >
                {/* Active Indicator Line */}
                <div className={`absolute left-0 top-0 bottom-0 w-1 transition-colors duration-300 ${activeCategory === idx ? "bg-[#FE4A49]" : "bg-transparent group-hover:bg-zinc-700"}`} />
                
                <h3 className="text-base lg:text-lg font-bold font-sans tracking-wide relative z-10">{cat.title}</h3>
              </button>
            ))}
          </motion.div>

          {/* Right/Bottom side: Skills Display */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-full lg:w-2/3 min-h-[350px] bg-[#121212] border border-zinc-900 rounded-2xl p-8 lg:p-12 relative overflow-hidden shadow-2xl"
          >
             {/* Glow effect */}
             <div className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-br from-[#FE4A49] to-[#FF0254] opacity-[0.04] blur-[80px] rounded-full pointer-events-none"></div>
             
             <AnimatePresence mode="wait">
               <motion.div
                 key={activeCategory}
                 initial={{ opacity: 0, y: 15 }}
                 animate={{ opacity: 1, y: 0 }}
                 exit={{ opacity: 0, y: -15 }}
                 transition={{ duration: 0.3, ease: "easeOut" }}
                 className="relative z-10"
               >
                 <div className="mb-8 border-b border-zinc-900/80 pb-6 flex items-center justify-between">
                   <h4 className="text-2xl lg:text-3xl font-bold text-white tracking-wide font-serif">
                     {skillCategories[activeCategory].title}
                   </h4>
                 </div>
                 
                 <div className="flex flex-wrap gap-4">
                   {skillCategories[activeCategory].skills.map((skill, idx) => (
                     <motion.div
                       initial={{ opacity: 0, scale: 0.95 }}
                       animate={{ opacity: 1, scale: 1 }}
                       transition={{ delay: idx * 0.03 + 0.1, duration: 0.3 }}
                       key={skill}
                       className="px-5 py-3 lg:px-6 lg:py-3.5 bg-[#0a0a0a] text-zinc-300 text-sm lg:text-base font-semibold rounded-lg border border-zinc-800 tracking-wide hover:text-white hover:border-[#FE4A49]/60 hover:shadow-[0_0_15px_rgba(254,74,73,0.15)] transition-all cursor-crosshair transform hover:-translate-y-0.5"
                     >
                       {skill}
                     </motion.div>
                   ))}
                 </div>
               </motion.div>
             </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
