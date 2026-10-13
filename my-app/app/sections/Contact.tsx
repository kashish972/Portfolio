"use client";

import { useState } from "react";
import SectionTitle from "../components/SectionTitle";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaEnvelope,
  FaCopy,
  FaCheck,
  FaPaperPlane,
  FaTimes,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const email = "kashisharorasahib@gmail.com";
  const emailSubject = encodeURIComponent("Hello Kashish - Project Opportunity");

  const socialLinks = [
    {
      name: "LinkedIn",
      handle: "@kashish-arora-on",
      icon: <FaLinkedin className="text-xl text-blue-400" />,
      href: "https://www.linkedin.com/in/kashish-arora-on?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      bgHover: "hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]",
    },
    {
      name: "GitHub",
      handle: "@kashish972",
      icon: <FaGithub className="text-xl text-white" />,
      href: "https://github.com/kashish972/",
      bgHover: "hover:border-gray-400/50 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]",
    },
    {
      name: "Twitter / X",
      handle: "@kashish_arora",
      icon: <FaTwitter className="text-xl text-sky-400" />,
      href: "https://twitter.com/kashish_arora",
      bgHover: "hover:border-sky-400/50 hover:shadow-[0_0_20px_rgba(56,189,248,0.3)]",
    },
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    toast.success("Email copied to clipboard!", {
      position: "bottom-center",
      autoClose: 2000,
      theme: "dark",
    });
    setTimeout(() => setCopied(false), 2500);
  };

  const emailOptions = [
    {
      title: "Gmail Web",
      desc: "Open directly in Gmail browser compose",
      icon: <SiGmail className="text-red-500 text-2xl" />,
      href: `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${emailSubject}`,
      target: "_blank",
    },
    {
      title: "Default Mail App",
      desc: "Launch Apple Mail, Outlook, or mobile mail client",
      icon: <FaEnvelope className="text-cyan-400 text-2xl" />,
      href: `mailto:${email}?subject=${emailSubject}`,
      target: "_self",
    },
    {
      title: "Outlook Web",
      desc: "Open in Microsoft Outlook / Hotmail web",
      icon: <FaPaperPlane className="text-blue-400 text-xl" />,
      href: `https://outlook.live.com/mail/0/deeplink/compose?to=${email}&subject=${emailSubject}`,
      target: "_blank",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 sm:py-28 px-4 sm:px-6 relative bg-gradient-to-b from-gray-950/80 via-black to-gray-950 text-white overflow-hidden"
    >
      <div className="max-w-4xl mx-auto relative z-10">
        <SectionTitle
          badge="Get In Touch"
          title="Let's Connect"
          subtitle="Whether you have an opportunity, a project idea, or just want to chat about tech — my inbox is always open!"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="glass-panel p-5 sm:p-10 rounded-2xl sm:rounded-3xl border border-white/10 text-center shadow-2xl relative overflow-hidden"
        >
          {/* Subtle Ambient Glow inside Card */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-3xl pointer-events-none" />

          <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 rounded-2xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white text-xl sm:text-2xl shadow-[0_0_25px_rgba(6,182,212,0.4)]">
            <FaEnvelope />
          </div>

          <h3 className="text-xl sm:text-3xl font-bold text-white mb-2 sm:mb-3">
            Start a Conversation
          </h3>
          <p className="text-gray-300 max-w-lg mx-auto text-xs sm:text-base mb-6 sm:mb-8 leading-relaxed px-2">
            Fast response turnaround for engineering roles, technical consultations, and full-stack projects.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-10 w-full max-w-sm sm:max-w-none mx-auto">
            {/* Direct Mail Button */}
            <motion.button
              onClick={() => setIsModalOpen(true)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:shadow-[0_0_35px_rgba(6,182,212,0.6)] transition-all border border-cyan-400/30 text-sm sm:text-base w-full sm:w-auto cursor-pointer"
            >
              <FaPaperPlane className="text-sm" />
              <span>Send Direct Email</span>
            </motion.button>

            {/* Copy Email Button */}
            <motion.button
              onClick={handleCopyEmail}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 bg-gray-900/90 text-gray-200 font-semibold rounded-xl border border-white/15 hover:border-cyan-400/50 hover:text-white transition-all cursor-pointer text-sm sm:text-base w-full sm:w-auto"
            >
              {copied ? <FaCheck className="text-emerald-400" /> : <FaCopy className="text-gray-400" />}
              <span>{copied ? "Copied!" : "Copy Email"}</span>
            </motion.button>
          </div>

          {/* Social Links Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 border-t border-gray-800/80 pt-6 sm:pt-8">
            {socialLinks.map((social, idx) => (
              <motion.a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className={`p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-gray-900/60 border border-white/10 flex items-center gap-3 transition-all ${social.bgHover}`}
              >
                <div className="p-2.5 sm:p-3 rounded-xl bg-black/50 border border-white/5 flex-shrink-0">
                  {social.icon}
                </div>
                <div className="text-left min-w-0">
                  <div className="text-sm font-bold text-white">{social.name}</div>
                  <div className="text-xs text-gray-400 truncate">{social.handle}</div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Email Client Selection Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-md bg-gray-950 border border-white/15 rounded-3xl p-6 sm:p-7 shadow-2xl z-10 overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-5 right-5 p-2 rounded-xl text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close Email Chooser Modal"
              >
                <FaTimes className="text-lg" />
              </button>

              <div className="flex items-center gap-3 mb-2">
                <div className="p-2.5 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 text-white shadow-[0_0_15px_rgba(6,182,212,0.4)]">
                  <FaPaperPlane className="text-sm" />
                </div>
                <h3 className="text-xl font-bold text-white">Send Direct Email</h3>
              </div>
              <p className="text-xs sm:text-sm text-gray-400 mb-6">
                Choose your preferred email service or launch your device&apos;s email client:
              </p>

              {/* Options List */}
              <div className="flex flex-col gap-3 mb-5">
                {emailOptions.map((opt, i) => (
                  <a
                    key={i}
                    href={opt.href}
                    target={opt.target}
                    rel={opt.target === "_blank" ? "noopener noreferrer" : undefined}
                    onClick={() => setIsModalOpen(false)}
                    className="flex items-center justify-between p-3.5 rounded-2xl bg-gray-900/80 border border-white/10 hover:border-cyan-400/50 hover:bg-gray-800/90 transition-all group cursor-pointer"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="p-2.5 rounded-xl bg-black/40 border border-white/5 flex-shrink-0">
                        {opt.icon}
                      </div>
                      <div className="text-left">
                        <div className="text-sm font-bold text-white group-hover:text-cyan-400 transition-colors">
                          {opt.title}
                        </div>
                        <div className="text-[11px] text-gray-400">{opt.desc}</div>
                      </div>
                    </div>
                    <FaExternalLinkAlt className="text-xs text-gray-500 group-hover:text-cyan-400 transition-colors mr-1 flex-shrink-0" />
                  </a>
                ))}
              </div>

              {/* Quick Copy Footer */}
              <div className="pt-4 border-t border-gray-800/80 flex items-center justify-between gap-2">
                <div className="text-xs text-gray-400 truncate font-mono">
                  {email}
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-900 border border-white/10 text-xs font-semibold text-cyan-400 hover:text-white hover:border-cyan-400/40 transition-colors cursor-pointer flex-shrink-0"
                >
                  {copied ? <FaCheck className="text-emerald-400" /> : <FaCopy />}
                  <span>{copied ? "Copied" : "Copy"}</span>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <ToastContainer />
    </section>
  );
}
