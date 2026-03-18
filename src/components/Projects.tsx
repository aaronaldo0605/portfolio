"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const PROJECTS = [
  {
    id: 1,
    title: "Glaucoma Detection",
    category: "Deep Learning",
    description: "Evaluated CNN & CNN-LSTM architectures for healthcare healthcare funds image dataset. Achieved 94.52% accuracy using VGG19+LSTM model.",
  },
  {
    id: 2,
    title: "ML-Based Analytics",
    category: "Predictive Analytics",
    description: "Performed EDA and feature engineering on 10K+ records, improving model accuracy by 12% for business decision-making.",
  },
  {
    id: 3,
    title: "ERP Management System",
    category: "Software Dev",
    description: "Engineered a Python-MySQL college ERP system managing 800+ records. Recognized as Best Project.",
  },
  {
    id: 4,
    title: "Natural Disaster Prediction",
    category: "Cloud ML",
    description: "Cloud-based model using Random Forest Regression to forecast disasters with historical environmental data, increasing accuracy by 20%.",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative z-20 w-full min-h-screen bg-[#0a0a0a] text-white py-24 px-6 md:px-16 lg:px-24 border-t border-zinc-900">
      <div className="max-w-6xl">
        
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-serif uppercase font-bold tracking-widest text-white drop-shadow-2xl">Academic Projects</h2>
          <p className="text-zinc-400 mt-4 text-lg">A showcase of machine learning, analytics, and software engineering coursework.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative flex flex-col justify-end min-h-[400px] p-8 rounded-2xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-md overflow-hidden hover:border-zinc-700 transition-colors duration-500"
            >
              {/* Subtle hover glow */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              
              <div className="relative z-10 flex flex-col gap-2">
                <p className="text-sm font-semibold tracking-wider text-zinc-400 uppercase">
                  {project.category}
                </p>
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <div className="p-2 rounded-full bg-white/10 group-hover:bg-white group-hover:text-black transition-colors duration-300">
                    <ArrowUpRight size={20} />
                  </div>
                </div>
                <p className="text-zinc-500">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
