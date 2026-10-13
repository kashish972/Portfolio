"use client";

import SectionTitle from "../components/SectionTitle";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaBuilding, FaCheckCircle } from "react-icons/fa";

export default function Experience() {
  const experiences = [
    {
      role: "Full Stack Developer",
      company: "Cloud Analogy",
      time: "Feb 2025 – Present",
      type: "Full-Time",
      desc: "Architecting high-scale enterprise tools and custom workflow engines.",
      highlights: [
        "Worked on Project Trux workflow automation platform.",
        "Implemented AG-Grid data tables with server-side pagination, sorting, and filtering.",
        "Integrated Adobe Sign & DocuSign e-signature API workflows with real-time webhooks.",
        "Utilized React-PDF renderer for automated document generation and export.",
      ],
      skills: ["React.js", "Next.js", "AG-Grid", "Adobe Sign", "DocuSign", "Webhooks", "React-PDF"],
    },
    {
      role: "3D & AI Developer Intern",
      company: "Codeclause",
      time: "July 2024 – Aug 2024",
      type: "Internship",
      desc: "Created dynamic 3D web experiences powered by real-time rendering.",
      highlights: [
        "Built interactive 3D visualizers with React Three Fiber and Three.js.",
        "Integrated AI APIs for automated 3D model processing and rendering.",
        "Improved user engagement by introducing customizable 3D model controls.",
      ],
      skills: ["Three.js", "React Three Fiber", "AI APIs", "JavaScript", "3D Graphics"],
    },
    {
      role: "Frontend Developer Intern",
      company: "Systemic Altruism",
      time: "July 2024 – Sept 2024",
      type: "Internship",
      desc: "Designed responsive UI interfaces and state management systems.",
      highlights: [
        "Developed responsive web modules using React.js and Tailwind CSS.",
        "Managed global application state using Redux toolkit.",
        "Collaborated with cross-functional design teams to deliver polished UI components.",
      ],
      skills: ["React.js", "Redux", "Tailwind CSS", "UI/UX Design"],
    },
    {
      role: "Web Development Intern",
      company: "Internpe",
      time: "July 2023 – Aug 2023",
      type: "Internship",
      desc: "Built full-stack e-commerce features with online payment integrations.",
      highlights: [
        "Developed custom e-commerce portal with product search and cart management.",
        "Integrated secure payment gateways (Razorpay) with real-time verification.",
        "Optimized checkout user flows for higher conversion and seamless payments.",
      ],
      skills: ["JavaScript", "HTML/CSS", "Razorpay Integration", "Payment Gateway"],
    },
  ];

  return (
    <section id="experience" className="py-20 sm:py-28 px-4 sm:px-6 relative bg-gray-950/90 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <SectionTitle
          badge="Career Journey"
          title="Work Experience"
          subtitle="My professional background, industry roles, and key technical accomplishments."
        />

        {/* Timeline Container with Absolute Centered Line */}
        <div className="relative mt-8 sm:mt-12 pl-7 sm:pl-12 space-y-8 sm:space-y-12">
          {/* Continuous Glowing Timeline Bar */}
          <div className="absolute left-2.5 sm:left-3.5 top-3 bottom-3 w-0.5 bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-500 rounded-full opacity-60" />

          {experiences.map((job, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* Perfectly Aligned Pulsing Timeline Node */}
              <div className="absolute -left-[27px] sm:-left-[45px] top-2 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gray-950 border-2 border-cyan-400 flex items-center justify-center shadow-[0_0_12px_rgba(6,182,212,0.8)] group-hover:scale-125 group-hover:bg-cyan-500 transition-all z-10">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-cyan-300" />
              </div>

              {/* Experience Glass Card */}
              <div className="glass-panel glass-panel-hover p-4 sm:p-7 rounded-2xl sm:rounded-3xl border border-white/10 shadow-xl">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2.5 sm:gap-4 mb-3.5 sm:mb-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {job.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 mt-1 text-xs sm:text-sm font-medium text-cyan-400">
                      <span className="flex items-center gap-1.5">
                        <FaBuilding />
                        {job.company}
                      </span>
                      <span>•</span>
                      <span className="px-2 py-0.5 rounded-full bg-cyan-950/80 border border-cyan-800/60 text-[11px] font-semibold">
                        {job.type}
                      </span>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-gray-900/80 border border-white/10 text-[11px] sm:text-xs text-gray-300 font-mono w-fit">
                    <FaCalendarAlt className="text-cyan-400" />
                    <span>{job.time}</span>
                  </div>
                </div>

                <p className="text-gray-300 text-xs sm:text-sm italic mb-3.5">
                  {job.desc}
                </p>

                {/* Highlights List */}
                <ul className="space-y-2 mb-5">
                  {job.highlights.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-gray-300 leading-relaxed">
                      <FaCheckCircle className="text-cyan-400 text-xs mt-0.5 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Skills Pills */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-3.5 border-t border-gray-800/80">
                  {job.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded-lg bg-gray-900/80 border border-gray-800 text-[11px] sm:text-xs text-gray-300 font-medium hover:border-cyan-500/40 hover:text-cyan-300 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}