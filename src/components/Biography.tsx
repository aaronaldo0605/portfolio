"use client";

import { motion } from "framer-motion";

const Biography = () => {
  return (
    <section id="biography" className="relative z-20 w-full bg-[#0a0a0a] text-white py-32 px-6 md:px-16 lg:px-24 border-t border-zinc-900">
      <div className="max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col md:flex-row gap-12 md:gap-24 items-start"
        >
          <div className="md:w-1/3">
            <h2 className="text-4xl md:text-5xl font-serif uppercase font-bold tracking-widest text-white drop-shadow-2xl">
              Biography
            </h2>
            <div className="w-12 h-1 bg-white mt-6"></div>
          </div>
          
          <div className="md:w-2/3 text-justify text-zinc-300 space-y-6 text-base md:text-lg leading-relaxed font-sans">
            <div className="mb-8 text-left">
              <h3 className="text-2xl font-bold text-white mb-2">Hi, I'm Aaron Rodrigues</h3>
              <p className="text-xs md:text-sm text-zinc-400 font-semibold uppercase tracking-wider leading-relaxed">
                Business & Data Analyst | AI & Business Analytics Graduate | BMO Bank N.A. | University of South Florida - M.S. in AI & Business Analytics (2026) | University of Mumbai - Bachelor’s of Engineering (2022)
              </p>
            </div>

            <p>
              I am currently working as a Business Analyst Intern at BMO Bank N.A. in Jacksonville, Florida, and I am pursuing a Master’s in Artificial Intelligence and Business Analytics at the University of South Florida. During my professional journey, I have specialized in BI reporting, ETL optimization, and advanced analytics, translating complex data into strategic insights and scalable automation using technologies like SQL, Power BI, Python, and Snowflake.
            </p>
            
            <p>
              Prior to moving to the U.S., I earned a Bachelor’s in Computer Engineering from the University of Mumbai. In India, I spent over two years as a Data Analyst at Travelex, where I developed interactive financial dashboards and rebuilt data ingestion pipelines that significantly improved reporting times. I also gained invaluable experience at 3folks Media and KubixSquare, delivering business intelligence solutions and developing full-stack web applications. These roles provided me with end-to-end exposure to both business strategy execution and the software development lifecycle.
            </p>

            <p>
              My core strength is driving measurable impact by saving time and costs through workflow automation, sophisticated system optimization, and proactive data-driven problem-solving.
            </p>

            <p>
              With over 3 years of cross-functional experience across the banking and fintech sectors, I've developed a strong technical foundation complemented by strategic business acumen. I’m driven by continuous learning, especially in the evolving fields of artificial intelligence, and I enjoy tackling challenging analytical problems that create real, measurable impact.
            </p>

            <div className="pt-4">
              <a href="mailto:aaronrod0605@gmail.com" className="text-[#ff0055] font-semibold hover:underline transition-all tracking-widest uppercase text-sm">
                aaronrod0605@gmail.com
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Biography;
