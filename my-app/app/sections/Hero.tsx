"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Hero3DBackground from "../components/Hero3dBackground";

export default function Hero() {
  return (
    <section
      id="hero"
      className="h-screen relative flex flex-col items-center justify-center text-center px-4 overflow-hidden"
    >
      {/* 3D Background */}
      <Hero3DBackground />

      {/* Hero Text & Buttons overlayed above the 3D background */}
      <div className="absolute z-10 flex flex-col items-center justify-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl font-bold"
        >
          <span className="text-white">Hi, I&apos;m </span>
          <TypeAnimation
            sequence={["Kashish Arora", 2000, "", 500]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-blue-500"
          />
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-4 text-xl text-gray-300 max-w-xl"
        >
          Developer 1 @ Cloud Analogy • Full Stack Developer • Next.js Enthusiast
        </motion.p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow-lg"
          >
            View Projects
          </motion.a>

          <motion.a
            href="/Kashish_Arora_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-green-600 text-white rounded-xl shadow-lg"
          >
            View Resume
          </motion.a>
          <motion.a
    href="/workFlow" // route where your workflow tool is hosted
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="px-6 py-3 bg-purple-600 text-white rounded-xl shadow-lg"
  >
    Live Workflow Demo
  </motion.a>
        </div>
      </div>
    </section>
  );
}
