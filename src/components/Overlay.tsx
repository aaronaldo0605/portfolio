"use client";

import { motion, useScroll, useTransform } from "framer-motion";

const Overlay = () => {
  const { scrollYProgress } = useScroll();

  // Section 1: Intro
  const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.2], [0, -100]);

  // Section 2: Statement
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.3, 0.4, 0.5], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.2, 0.4, 0.5], [100, 0, -100]);

  // Section 3: Value
  const opacity3 = useTransform(scrollYProgress, [0.55, 0.65, 0.8, 0.9], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.55, 0.8, 0.9], [100, 0, -100]);

  return (
    <div className="absolute inset-0 z-10 pointer-events-none w-full">
      
      <motion.div 
        style={{ opacity: opacity1, y: y1 }}
        className="absolute inset-0 flex flex-col justify-center items-start text-left px-6 md:px-16 lg:px-24 w-full md:max-w-[45%]"
      >
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif uppercase font-bold tracking-wider text-white drop-shadow-2xl leading-none">
          Aaron<br />Rodrigues
        </h1>
        <p className="mt-3 text-[10px] md:text-xs lg:text-sm text-zinc-300 font-sans tracking-[0.1em] uppercase">
          Business & Data Analyst
        </p>
      </motion.div>

      <motion.div 
        style={{ opacity: opacity2, y: y2 }}
        className="absolute inset-0 flex flex-col justify-center items-start text-left px-6 md:px-16 lg:px-24 w-full md:max-w-[50%]"
      >
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif uppercase font-bold tracking-widest text-white leading-tight drop-shadow-2xl">
          Translating complex data into strategic insights.
        </h2>
      </motion.div>

      <motion.div 
        style={{ opacity: opacity3, y: y3 }}
        className="absolute inset-0 flex flex-col justify-center items-start text-left px-6 md:px-16 lg:px-24 w-full md:max-w-[50%]"
      >
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif uppercase font-bold tracking-widest text-white leading-tight drop-shadow-2xl">
          Specializing in BI reporting, ETL optimization, and advanced analytics.
        </h2>
      </motion.div>

    </div>
  );
};

export default Overlay;
