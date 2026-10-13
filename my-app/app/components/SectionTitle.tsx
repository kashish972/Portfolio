"use client";

import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  badge?: string;
}

export default function SectionTitle({ title, subtitle, badge }: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="flex flex-col items-center text-center mb-10 sm:mb-16 px-2"
    >
      {badge && (
        <span className="px-3 py-1 text-[11px] sm:text-xs font-semibold tracking-wider text-cyan-400 uppercase bg-cyan-950/70 border border-cyan-800/50 rounded-full mb-3 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
          {badge}
        </span>
      )}

      <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-2.5 sm:mt-3 text-gray-400 max-w-xl text-sm sm:text-base font-normal leading-relaxed px-2">
          {subtitle}
        </p>
      )}

      {/* Decorative gradient bar */}
      <div className="relative mt-3.5 sm:mt-4 flex items-center justify-center">
        <div className="w-14 sm:w-16 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full" />
        <div className="absolute w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_8px_#38bdf8]" />
      </div>
    </motion.div>
  );
}
