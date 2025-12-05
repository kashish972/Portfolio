"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed w-full top-0 left-0 z-50 backdrop-blur-md bg-black/40 shadow-md">
      <div className="max-w-full mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo + Name */}
        <a href="#hero" className="flex items-center gap-2 cursor-pointer">
          <Image
            src="/logo.jpg"
            alt="Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="text-white text-2xl font-bold">Kashish Arora</span>
        </a>


        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <motion.li
              key={link.name}
              whileHover={{ y: -2, scale: 1.05 }}
              className="text-white cursor-pointer hover:text-blue-500 transition"
            >
              <a href={link.href}>{link.name}</a>
            </motion.li>
          ))}

          {/* Resume Button */}
          <motion.li whileHover={{ scale: 1.05 }}>
            <a
              href="./Kashish_Resume_1.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition"
            >
              Resume
            </a>
          </motion.li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white text-3xl focus:outline-none flex items-center justify-center leading-none mr-4"
          >
            {isOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.ul
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden flex flex-col gap-4 px-6 pb-4 bg-black/80 max-h-[85vh] overflow-y-auto z-[100]"
        >
          {navLinks.map((link) => (
            <li key={link.name} className="text-white py-2 border-b border-gray-700">
              <a href={link.href} onClick={() => setIsOpen(false)}>
                {link.name}
              </a>
            </li>
          ))}

          <li>
            <a
              href="./Kashish_Resume_1.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center px-4 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition"
            >
              Resume
            </a>
          </li>
        </motion.ul>
      )}
    </nav>
  );
}
