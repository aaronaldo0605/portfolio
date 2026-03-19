"use client";

import { motion } from "framer-motion";

const educationDetails = [
  {
    degree: "M.S. in Artificial Intelligence & Business Analytics",
    university: "University of South Florida",
    location: "Tampa, Florida",
    date: "Aug 2024 - May 2026",
    color: "#006747", // USF Green
    logoSrc: "/logos/usf.png",
    points: [
      "Specializing in advanced predictive analytics, machine learning pipelines, and technical business strategy.",
      "Gaining hands-on experience translating complex datasets into actionable insights for strategic decision-making."
    ]
  },
  {
    degree: "Bachelor of Engineering in Computer Engineering",
    university: "University of Mumbai",
    location: "Mumbai, India",
    date: "Aug 2018 - May 2022",
    color: "#FF8C00", // Bright Orange accent
    logoSrc: "/logos/mumbai.png",
    points: [
      "Completed rigorous coursework in core computer science subjects, software engineering, databases, and algorithms.",
      "Developed an end-to-end ERP Management System and dynamic machine learning models for academic capstone projects."
    ]
  }
];

const Education = () => {
  return (
    <section id="education" className="relative z-20 w-full bg-[#0a0a0a] text-white py-24 px-6 md:px-16 lg:px-24 border-t border-zinc-900 pb-40">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif uppercase font-bold tracking-widest text-white drop-shadow-2xl">
              Education
            </h2>
            <div className="w-12 h-1 bg-white mt-6"></div>
          </motion.div>
        </div>

        <div className="flex flex-col gap-12">
          {educationDetails.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-[#121212] border border-zinc-900 rounded-2xl p-8 lg:p-10 flex flex-col md:flex-row gap-8 items-start hover:border-zinc-700 transition-colors group relative overflow-hidden shadow-2xl"
            >
              {/* Subtle hover gradient */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-[#FE4A49]/5 to-transparent"
              />

              {/* Logo Box */}
              <div 
                className="w-20 h-20 md:w-28 md:h-28 shrink-0 flex items-center justify-center rounded-xl border border-zinc-800 relative z-10 overflow-hidden bg-white/5"
              >
                <img src={edu.logoSrc} alt={`${edu.university} logo`} className="w-full h-full object-contain p-2 md:p-3" />
              </div>

              {/* Content */}
              <div className="flex-1 relative z-10">
                <h3 className="text-[#FE4A49] text-2xl lg:text-3xl font-bold tracking-tight mb-2">{edu.degree}</h3>
                <h4 className="text-[#FF0254] text-lg md:text-xl font-bold tracking-wide">{edu.university}</h4>
                
                <p className="text-zinc-500 mt-2 text-sm italic font-mono mb-6">
                  {edu.date} &nbsp;—&nbsp; {edu.location}
                </p>

                <ul className="text-zinc-400 space-y-3 leading-relaxed list-inside">
                  {edu.points.map((point: string, i: number) => (
                    <li key={i} className="flex items-start gap-3 text-base">
                      <span className="mt-1.5 text-[#FE4A49] text-xs">●</span>
                      <span className="text-zinc-300">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
