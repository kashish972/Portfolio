"use client";

import SectionTitle from "../components/SectionTitle";
import { motion } from "framer-motion";

export default function Experience() {
  const items = [
    {
      role: "Full Stack Developer",
      company: "Cloud Analogy",
      time: "February 2025 – Present",
      desc: "Worked on Project Trux. Implemented AG-Grid tables with server-side pagination, sorting, and filtering. Integrated Adobe Sign & DocuSign. Enabled webhooks for real-time status updates (agreement created, signed, completed, etc.). Worked on React pdf renderer library.",
    },
    {
      role: "Intern",
      company: "Codeclause",
      time: "July 2024 – August 2024",
      desc: "Built a 3D visualizer during my internship, integrating AI APIs for real-time model rendering. Designed and implemented AI-driven features in a 3D visualizer project during my internship. Developed an interactive 3D visualizer as part of my internship, enhancing user engagement with AI-powered visuals.",
    },
    {
      role: "Internship",
      company: "Systemic Altruism",
      time: "July 2024 – September 2024",
      desc: "Worked with the Front-end developer using React, Redux and Tailwind CSS designing.",
    },
    {
      role: "Internship",
      company: "Internpe",
      time: "July 2023 – August 2023",
      desc: "Developed an e-commerce website during my internship, integrating a secure payment gateway. Streamlined product management and checkout processes for enhanced user experience. Implemented real-time payment verification and multiple payment options for seamless transactions.",
    },
   
  ];

  return (
    <section id="experience" className="py-24 px-6 bg-gray-900">
      <SectionTitle title="Experience" />

      <div className="max-w-4xl mx-auto space-y-10">
        {items.map((job, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="p-6 bg-black/30 border border-white/10 rounded-xl"
          >
            <h3 className="text-2xl font-semibold">{job.role}</h3>
            <p className="text-blue-400">{job.company} • {job.time}</p>
            <p className="mt-3 text-gray-300">{job.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}