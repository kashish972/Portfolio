"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaRocket, FaFileDownload, FaCogs, FaArrowDown } from "react-icons/fa";
import Hero3DBackground from "../components/Hero3dBackground";

export default function Hero() {
  const heroStats = [
    { label: "Role", value: "Developer 1", sub: "@ Cloud Analogy" },
    { label: "Experience", value: "2 Years", sub: "Production Code" },
    { label: "Specialty", value: "Full Stack", sub: "Next.js & React" },
    { label: "Integrations", value: "Enterprise", sub: "Adobe Sign, DocuSign" },
  ];

  return (
    <section
      id="hero"
      className="min-h-screen relative flex flex-col items-center justify-center pt-24 sm:pt-28 pb-12 sm:pb-16 px-4 sm:px-6 overflow-hidden"
    >
      {/* 3D Background */}
      <Hero3DBackground />

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center w-full">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-[11px] sm:text-xs font-semibold tracking-wide mb-6 sm:mb-8 shadow-[0_0_20px_rgba(6,182,212,0.25)] max-w-full"
        >
          <span className="relative flex h-2 w-2 flex-shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="truncate sm:whitespace-normal">
            Available for New Opportunities • Developer 1
          </span>
        </motion.div>

        {/* Hero Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-3xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-tight"
        >
          Hi, I&apos;m{" "}
          <span className="block sm:inline mt-1.5 sm:mt-0">
            <TypeAnimation
              sequence={[
                "Kashish Arora",
                2500,
                "Full Stack Developer",
                2500,
                "Next.js Specialist",
                2500,
                "Problem Solver",
                2500,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="gradient-text drop-shadow-[0_0_25px_rgba(129,140,248,0.4)]"
            />
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-4 sm:mt-6 text-base sm:text-xl text-gray-300 max-w-2xl font-light leading-relaxed px-2"
        >
          Crafting modern, scalable web applications with <span className="text-cyan-400 font-medium">React</span>, <span className="text-blue-400 font-medium">Next.js</span>, robust <span className="text-emerald-400 font-medium">Node.js</span> & <span className="text-purple-400 font-medium">Express</span> backends, and enterprise workflow integrations.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center w-full max-w-sm sm:max-w-none"
        >
          {/* View Projects */}
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:shadow-[0_0_35px_rgba(6,182,212,0.6)] transition-all border border-cyan-400/30 text-sm sm:text-base w-full sm:w-auto"
          >
            <FaRocket className="text-sm" />
            <span>Explore Projects</span>
          </motion.a>

          {/* View Resume */}
          <motion.a
            href="./Kashish_Arora_Resume_5.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-xl shadow-[0_0_25px_rgba(16,185,129,0.3)] hover:shadow-[0_0_35px_rgba(16,185,129,0.5)] transition-all border border-emerald-400/30 text-sm sm:text-base w-full sm:w-auto"
          >
            <FaFileDownload className="text-sm" />
            <span>View Resume</span>
          </motion.a>

          {/* Live Workflow Demo */}
          <motion.a
            href="/workFlow"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-xl shadow-[0_0_25px_rgba(168,85,247,0.3)] hover:shadow-[0_0_35px_rgba(168,85,247,0.5)] transition-all border border-purple-400/30 text-sm sm:text-base w-full sm:w-auto"
          >
            <FaCogs className="text-sm" />
            <span>Workflow Demo</span>
          </motion.a>
        </motion.div>

        {/* Hero Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4 w-full max-w-4xl"
        >
          {heroStats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-panel glass-panel-hover p-3 sm:p-4 rounded-xl sm:rounded-2xl text-center border border-white/10"
            >
              <div className="text-[10px] sm:text-xs uppercase font-semibold text-gray-400 tracking-wider">
                {stat.label}
              </div>
              <div className="text-lg sm:text-2xl font-bold text-white mt-0.5 sm:mt-1">
                {stat.value}
              </div>
              <div className="text-[10px] sm:text-xs text-cyan-400 mt-0.5 truncate">
                {stat.sub}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Down arrow scroll hint */}
      <motion.a
        href="#about"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="hidden sm:block absolute bottom-5 z-10 text-gray-400 hover:text-cyan-400 transition-colors p-2"
        aria-label="Scroll down to About section"
      >
        <FaArrowDown className="text-base" />
      </motion.a>
    </section>
  );
}
