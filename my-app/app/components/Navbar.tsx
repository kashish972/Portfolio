"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaFileDownload, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Tech Stack", href: "#techstack" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open to prevent background bleed and scroll collision
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    document.body.style.overflow = "";
    setIsOpen(false);

    if (href.startsWith("#")) {
      const targetId = href.replace("#", "");
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        // Small delay ensures drawer begins closing and layout updates before scrolling
        setTimeout(() => {
          targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 60);

        try {
          window.history.pushState(null, "", href);
        } catch {
          window.location.hash = href;
        }
      } else {
        window.location.hash = href;
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || isOpen
          ? "bg-gray-950/98 backdrop-blur-xl border-b border-white/10 shadow-2xl py-3"
          : "bg-transparent py-4 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo / Name */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, "#hero")}
          className="flex items-center gap-2 sm:gap-2.5 group cursor-pointer touch-manipulation"
        >
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-base sm:text-lg shadow-[0_0_15px_rgba(6,182,212,0.4)] group-hover:scale-105 transition-transform flex-shrink-0">
            K
          </div>
          <div className="flex flex-col">
            <span className="text-base sm:text-lg font-extrabold tracking-tight text-white group-hover:text-cyan-400 transition-colors">
              Kashish Arora
            </span>
            <span className="text-[9px] sm:text-[10px] tracking-wider text-cyan-400/90 uppercase font-semibold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Full Stack Dev
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors relative py-1 cursor-pointer after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-cyan-400 hover:after:w-full after:transition-all"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Resume Button */}
          <motion.a
            href="./Kashish_Arora_Resume_5.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:shadow-[0_0_20px_rgba(16,185,129,0.5)] transition-all border border-emerald-400/30"
          >
            <FaFileDownload className="text-xs" />
            <span>Resume</span>
          </motion.a>
        </nav>

        {/* Mobile Hamburger Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close Navigation Menu" : "Open Navigation Menu"}
          className="md:hidden p-2.5 rounded-xl bg-gray-900/90 border border-white/10 text-gray-200 hover:text-white focus:outline-none cursor-pointer flex items-center justify-center transition-colors active:scale-95 touch-manipulation"
        >
          {isOpen ? <FaTimes className="text-xl text-cyan-400" /> : <FaBars className="text-xl" />}
        </button>
      </div>

      {/* Mobile Menu Drawer - Full Viewport Height so hero content does not peek through underneath */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden bg-gray-950 border-t border-white/10 shadow-2xl ${
          isOpen
            ? "h-[calc(100vh-62px)] h-[calc(100dvh-62px)] opacity-100 pointer-events-auto"
            : "h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="px-5 py-6 flex flex-col justify-between h-full overflow-y-auto">
          {/* Menu Items */}
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-lg font-semibold text-gray-200 hover:text-cyan-400 hover:bg-cyan-950/30 active:bg-cyan-950/60 py-3.5 px-4 rounded-xl border border-transparent hover:border-cyan-500/20 transition-all cursor-pointer block touch-manipulation"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Bottom Action Area */}
          <div className="pt-4 border-t border-gray-800/80 mt-4 pb-6 flex flex-col gap-3">
            <a
              href="./Kashish_Arora_Resume_5.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                document.body.style.overflow = "";
                setIsOpen(false);
              }}
              className="flex items-center justify-center gap-2.5 px-5 py-3.5 text-base font-semibold text-white bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl shadow-lg border border-emerald-400/30 active:scale-98 transition-transform touch-manipulation"
            >
              <FaFileDownload />
              <span>View Resume</span>
            </a>

            <div className="text-center text-xs text-gray-500 font-medium">
              Kashish Arora • Developer 1 @ Cloud Analogy
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
