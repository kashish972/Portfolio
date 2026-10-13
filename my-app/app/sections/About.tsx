"use client";

import SectionTitle from "../components/SectionTitle";
import { motion } from "framer-motion";
import { FaLaptopCode, FaCogs, FaCubes, FaUserCheck, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

export default function About() {
  const highlights = [
    {
      icon: <FaLaptopCode className="text-cyan-400 text-xl sm:text-2xl" />,
      title: "Full Stack Development",
      desc: "Specializing in Next.js, React, Node.js, and TypeScript to craft fast, accessible, and high-performance web applications.",
    },
    {
      icon: <FaCogs className="text-blue-400 text-xl sm:text-2xl" />,
      title: "Enterprise Workflow Tools",
      desc: "Experience building complex AG-Grid tables with server pagination, Adobe Sign & DocuSign integrations, and real-time webhook automations.",
    },
    {
      icon: <FaCubes className="text-purple-400 text-xl sm:text-2xl" />,
      title: "3D & Interactive Experiences",
      desc: "Building immersive user interfaces using React Three Fiber, Three.js, and smooth Framer Motion animations.",
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 px-4 sm:px-6 relative bg-gray-950/60 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          badge="Background & Expertise"
          title="About Me"
          subtitle="Passionate developer building seamless digital experiences and robust software systems."
        />

        <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          {/* Profile & Quick Facts Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-5 glass-panel p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-white/10 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3.5 sm:gap-4 mb-5 sm:mb-6">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-purple-600 flex items-center justify-center text-white text-2xl sm:text-3xl font-extrabold shadow-[0_0_20px_rgba(6,182,212,0.4)] flex-shrink-0">
                  KA
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">Kashish Arora</h3>
                  <p className="text-cyan-400 font-medium text-xs sm:text-sm">Developer 1 @ Cloud Analogy</p>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                I am a dedicated Full Stack Developer with hands-on experience delivering scalable frontend applications, backend services, and enterprise integration workflows. I love solving complex technical problems and building sleek UI components.
              </p>

              <div className="mt-5 sm:mt-6 pt-5 sm:pt-6 border-t border-gray-800/80 space-y-2.5 sm:space-y-3">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-300">
                  <FaUserCheck className="text-cyan-400 flex-shrink-0" />
                  <span>Role: <strong className="text-white">Developer 1 @ Cloud Analogy</strong></span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-300">
                  <FaMapMarkerAlt className="text-blue-400 flex-shrink-0" />
                  <span>Location: <strong className="text-white">India</strong></span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-300">
                  <FaEnvelope className="text-purple-400 flex-shrink-0" />
                  <span className="truncate">Email: <strong className="text-white break-all">kashisharorasahib@gmail.com</strong></span>
                </div>
              </div>
            </div>

            <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-gray-800/80 flex flex-wrap gap-2">
              <span className="px-2.5 py-1 bg-cyan-950/60 border border-cyan-800/50 rounded-lg text-xs font-semibold text-cyan-300">
                Next.js
              </span>
              <span className="px-2.5 py-1 bg-blue-950/60 border border-blue-800/50 rounded-lg text-xs font-semibold text-blue-300">
                React.js
              </span>
              <span className="px-2.5 py-1 bg-purple-950/60 border border-purple-800/50 rounded-lg text-xs font-semibold text-purple-300">
                AG-Grid & Webhooks
              </span>
            </div>
          </motion.div>

          {/* Highlights Grid */}
          <div className="lg:col-span-7 flex flex-col gap-4 sm:gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                viewport={{ once: true }}
                whileHover={{ y: -3 }}
                className="glass-panel glass-panel-hover p-4 sm:p-6 rounded-2xl sm:rounded-3xl border border-white/10 flex flex-col sm:flex-row gap-3.5 sm:gap-5 items-start"
              >
                <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-gray-900/80 border border-white/10 shadow-inner flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-white mb-1">{item.title}</h4>
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
