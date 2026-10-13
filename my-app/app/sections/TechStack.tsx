"use client";

import SectionTitle from "../components/SectionTitle";
import { motion } from "framer-motion";
import {
  FaCode,
  FaReact,
  FaDatabase,
  FaTools,
  FaCreditCard,
  FaBrain,
  FaCheckCircle,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiThreedotjs,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiGit,
  SiExpress,
  SiNestjs,
  SiRedux,
  SiRazorpay,
  SiStripe,
} from "react-icons/si";

export default function TechStack() {
  const skillCategories = [
    {
      title: "Languages & Web Core",
      icon: <FaCode className="text-cyan-400" />,
      skills: [
        { name: "TypeScript", icon: <SiTypescript className="text-blue-400" /> },
        { name: "JavaScript (ES6+)", icon: <SiJavascript className="text-yellow-400" /> },
        { name: "Java", icon: <FaCode className="text-red-400" /> },
        { name: "C / C++", icon: <FaCode className="text-blue-500" /> },
        { name: "HTML5 & CSS3", icon: <FaCode className="text-orange-400" /> },
      ],
    },
    {
      title: "Frameworks & Libraries",
      icon: <FaReact className="text-blue-400" />,
      skills: [
        { name: "Next.js 16", icon: <SiNextdotjs className="text-white" /> },
        { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
        { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
        { name: "Nest.js", icon: <SiNestjs className="text-red-500" /> },
        { name: "Redux", icon: <SiRedux className="text-purple-400" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
        { name: "Framer Motion", icon: <FaCode className="text-pink-400" /> },
        { name: "Three.js & R3F", icon: <SiThreedotjs className="text-white" /> },
        { name: "AG Grid", icon: <FaCode className="text-blue-400" /> },
        { name: "React Flow", icon: <FaCode className="text-cyan-300" /> },
        { name: "React-PDF", icon: <FaCode className="text-red-400" /> },
        { name: "ShadCN UI & AntD", icon: <FaCode className="text-emerald-400" /> },
      ],
    },
    {
      title: "Databases & Backend",
      icon: <FaDatabase className="text-emerald-400" />,
      skills: [
        { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-400" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-emerald-500" /> },
        { name: "SQL", icon: <FaDatabase className="text-cyan-400" /> },
        { name: "REST APIs & Webhooks", icon: <FaCode className="text-purple-400" /> },
      ],
    },
    {
      title: "Tools & DevOps",
      icon: <FaTools className="text-purple-400" />,
      skills: [
        { name: "Docker", icon: <SiDocker className="text-blue-400" /> },
        { name: "Git & GitHub", icon: <SiGit className="text-orange-500" /> },
        { name: "VS Code & IntelliJ", icon: <FaTools className="text-blue-300" /> },
        { name: "Postman", icon: <FaTools className="text-orange-400" /> },
      ],
    },
    {
      title: "Payments & Integrations",
      icon: <FaCreditCard className="text-yellow-400" />,
      skills: [
        { name: "Razorpay", icon: <SiRazorpay className="text-blue-400" /> },
        { name: "Stripe", icon: <SiStripe className="text-indigo-400" /> },
        { name: "Adobe Sign API", icon: <FaCode className="text-red-500" /> },
        { name: "DocuSign API", icon: <FaCode className="text-yellow-400" /> },
      ],
    },
    {
      title: "Core Competencies",
      icon: <FaBrain className="text-pink-400" />,
      skills: [
        { name: "DSA & Problem Solving", icon: <FaCheckCircle className="text-cyan-400" /> },
        { name: "System Design Basics", icon: <FaCheckCircle className="text-blue-400" /> },
        { name: "API Architecture", icon: <FaCheckCircle className="text-purple-400" /> },
        { name: "Clean Code & Debugging", icon: <FaCheckCircle className="text-emerald-400" /> },
        { name: "Agile & Teamwork", icon: <FaCheckCircle className="text-pink-400" /> },
      ],
    },
  ];

  return (
    <section id="techstack" className="py-20 sm:py-28 px-4 sm:px-6 relative bg-gray-950/80 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          badge="Technical Skills"
          title="Tech Stack & Expertise"
          subtitle="A comprehensive overview of technologies, frameworks, and engineering tools I work with daily."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              viewport={{ once: true }}
              className="glass-panel glass-panel-hover p-4 sm:p-6 rounded-2xl sm:rounded-3xl border border-white/10 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2.5 sm:gap-3 mb-4 sm:mb-6 pb-3 sm:pb-4 border-b border-gray-800/80">
                  <div className="p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-gray-900/90 border border-white/10 text-lg sm:text-xl">
                    {category.icon}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white tracking-wide">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg sm:rounded-xl bg-gray-900/90 border border-white/10 text-[11px] sm:text-xs font-semibold text-gray-200 hover:border-cyan-400/50 hover:text-white hover:bg-gray-800 transition-all shadow-sm"
                    >
                      <span className="text-xs sm:text-sm">{skill.icon}</span>
                      <span>{skill.name}</span>
                    </motion.div>
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