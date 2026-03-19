"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const PROJECTS = [
  {
    id: 1,
    title: "Deep Learning Glaucoma Detection",
    points: [
      "Evaluated CNN and CNN-LSTM architectures for glaucoma classification on the ACRIMA healthcare fundus image dataset.",
      "Achieved 94.52% accuracy using the optimized VGG19+LSTM model with augmentation and cross-validation."
    ],
    url: "https://link.springer.com/chapter/10.1007/978-981-99-9521-9_14"
  },
  {
    id: 2,
    title: "ML-Based Business Analytics (The Sparks Foundation)",
    points: [
      "Performed EDA and feature engineering on 10K+ records, improving predictive model accuracy by 12% for business decision-making.",
      "Created correlation heatmaps and feature importance visualizations using Matplotlib and Seaborn for model evaluation."
    ]
  },
  {
    id: 3,
    title: "Enterprise Resource Planning (ERP) Management System",
    points: [
      "Engineered a Python-MySQL college ERP system with CRUD functionality, managing 800+ academic and administrative records.",
      "Implemented student management and attendance modules, recognized as Best Project of Sophomore Year for scalable design."
    ]
  },
  {
    id: 4,
    title: "Cloud-Based Natural Disaster Prediction",
    points: [
      "Developed a cloud-based prediction model to forecast natural disasters using historical environmental and weather data.",
      "Increased prediction accuracy by 20% with Random Forest Regression to support early warning and disaster risk forecasting."
    ],
    url: "https://www.irjet.net/archives/V8/i11/IRJET-V8I1178.pdf"
  },
  {
    id: 5,
    title: "Food Sales Forecasting",
    points: [
      "Authored a comprehensive survey publication on utilizing machine learning techniques for optimal forecasting.",
      "Identified advanced methods for achieving significant cost reduction and precision in food sales."
    ],
    url: "https://doi.org/10.22214/ijraset.2021.38069"
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
            <motion.a
              href={project.url || "#"}
              target={project.url ? "_blank" : undefined}
              rel={project.url ? "noopener noreferrer" : undefined}
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative flex flex-col justify-start min-h-[400px] p-8 rounded-2xl border border-zinc-900 bg-[#121212] backdrop-blur-md overflow-hidden hover:border-[#FE4A49]/50 transition-colors duration-500 shadow-2xl"
            >
              {/* Subtle hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl bg-gradient-to-br from-[#FE4A49]/5 to-transparent pointer-events-none" />
              
              <div className="relative z-10 flex flex-col gap-2">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-[#FE4A49] group-hover:text-white transition-colors duration-300">{project.title}</h3>
                  <div className="p-2 rounded-full bg-white/10 group-hover:bg-[#FE4A49] group-hover:text-white transition-colors duration-300">
                    <ArrowUpRight size={20} />
                  </div>
                </div>
                <ul className="text-zinc-400 space-y-3 leading-relaxed list-inside">
                  {project.points.map((point, ptIndex) => (
                    <li key={ptIndex} className="flex items-start gap-3 text-base">
                      <span className="mt-1.5 text-[#FE4A49] text-xs">●</span>
                      <span className="text-zinc-300 text-sm leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
