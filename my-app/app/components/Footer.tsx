"use client";

import { FaArrowUp } from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-8 sm:py-12 px-4 sm:px-6 text-gray-400 border-t border-gray-900 bg-black/90 backdrop-blur-md overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6 text-center md:text-left">
        {/* Left Side: Brand & Copyright */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <div className="flex items-center gap-2 text-white font-bold text-base sm:text-lg">
            <span className="w-6 h-6 rounded-lg bg-cyan-500 flex items-center justify-center text-xs text-black font-extrabold">
              K
            </span>
            <span>Kashish Arora</span>
          </div>
          <p className="text-[11px] sm:text-xs text-gray-400 mt-1">
            © {new Date().getFullYear()} Kashish Arora. Built with Next.js 16, Three.js & Framer Motion.
          </p>
        </div>

        {/* Center: Quick Links */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-6 text-xs text-gray-400">
          <a href="#about" className="hover:text-cyan-400 transition-colors py-1">About</a>
          <a href="#experience" className="hover:text-cyan-400 transition-colors py-1">Experience</a>
          <a href="#projects" className="hover:text-cyan-400 transition-colors py-1">Projects</a>
          <a href="#techstack" className="hover:text-cyan-400 transition-colors py-1">Tech Stack</a>
          <a href="#contact" className="hover:text-cyan-400 transition-colors py-1">Contact</a>
        </div>

        {/* Right Side: Scroll to top */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-900 border border-white/10 text-xs font-semibold text-gray-300 hover:text-white hover:border-cyan-400/50 hover:bg-gray-800 transition-all cursor-pointer shadow-lg active:scale-95"
          aria-label="Scroll back to top"
        >
          <span>Back to Top</span>
          <FaArrowUp className="text-cyan-400 text-xs" />
        </button>
      </div>

      {/* Subtle Glow aura */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-[250px] sm:w-[300px] h-[40px] bg-cyan-600/10 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[250px] sm:w-[300px] h-[40px] bg-purple-600/10 rounded-full filter blur-3xl animate-pulse" />
      </div>
    </footer>
  );
}
