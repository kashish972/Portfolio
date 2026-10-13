"use client";

import { useState } from "react";
import SectionTitle from "../components/SectionTitle";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaExternalLinkAlt, FaCogs, FaCopy, FaKey, FaLock } from "react-icons/fa";

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const projects = [
    {
      id: "trux",
      title: "Trux Workflow Automation",
      category: "enterprise",
      badge: "Enterprise Automation",
      desc: "Node-based workflow automation engine featuring dynamic React Flow edges, state management with React Query, and complete Adobe Sign & DocuSign contract lifecycle integration.",
      link: "",
      isCompany: true,
      tags: ["React Flow", "React Query", "Adobe Sign", "DocuSign", "AG Grid", "Webhooks"],
    },
    {
      id: "pg-manager",
      title: "PG Manager Platform",
      category: "fullstack",
      badge: "Full Stack SaaS",
      desc: "End-to-end PG & Hostel management system. Handles tenant onboarding, automated rent tracking, Razorpay payment processing, and interactive owner/member dashboards.",
      link: "https://pg-manager-xi.vercel.app/",
      demoOwner: { email: "nitin@gmail.com", pass: "12345678", pg: "satkar pg" },
      demoMember: { email: "kashish@gmail.com", pass: "12345678", pg: "satkar pg" },
      tags: ["Next.js", "React.js", "Razorpay", "Node.js", "MongoDB", "Tailwind CSS"],
    },
    {
      id: "3d-visualizer",
      title: "3D Product Visualizer",
      category: "3d",
      badge: "3D & Interactive",
      desc: "Modern 3D web visualizer supporting interactive model manipulation, lighting controls, dynamic mesh materials with Three.js, and Razorpay e-commerce checkout.",
      link: "https://frontend-visualizer-one.vercel.app/",
      tags: ["Next.js", "React Three Fiber", "Three.js", "Razorpay", "Framer Motion"],
    },
    {
      id: "chatbox",
      title: "Real-time ChatBox",
      category: "fullstack",
      badge: "Real-Time WebSockets",
      desc: "Full-duplex real-time instant messaging application built with WebSockets, active presence indicators, dynamic channels, and low-latency message streaming.",
      link: "https://chat-app-frontend-omega-nine.vercel.app/main",
      tags: ["React.js", "WebSockets", "Node.js", "Express.js", "Tailwind CSS"],
    },
    {
      id: "portfolio",
      title: "3D Developer Portfolio",
      category: "3d",
      badge: "Showcase",
      desc: "High-performance developer portfolio built with Next.js 16, Three.js starfields & geometric nodes, and responsive Framer Motion micro-interactions.",
      link: "https://portfolio-lac-eight-46.vercel.app/",
      tags: ["Next.js 16", "React Three Fiber", "Framer Motion", "Tailwind CSS"],
    },
  ];

  const filteredProjects = projects.filter((p) => {
    if (filter === "all") return true;
    return p.category === filter;
  });

  const handleCompanyClick = () => {
    toast.info("This is a proprietary company project. Click 'Live Workflow Demo' to explore an interactive demo!", {
      position: "top-center",
      autoClose: 3500,
      theme: "dark",
    });
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(label);
    toast.success(`Copied ${label} to clipboard!`, {
      position: "bottom-center",
      autoClose: 2000,
      theme: "dark",
    });
    setTimeout(() => setCopiedKey(null), 2500);
  };

  return (
    <section id="projects" className="py-20 sm:py-28 px-4 sm:px-6 relative bg-gray-950/40 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          badge="Featured Work"
          title="Featured Projects"
          subtitle="Explore some of my enterprise solutions, full-stack applications, and interactive web tools."
        />

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12">
          {[
            { id: "all", label: "All Projects" },
            { id: "fullstack", label: "Full-Stack SaaS" },
            { id: "enterprise", label: "Enterprise & Automation" },
            { id: "3d", label: "3D & Interactive" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                filter === tab.id
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-[0_0_20px_rgba(6,182,212,0.4)] border border-cyan-400/40"
                  : "bg-gray-900/80 border border-white/10 text-gray-400 hover:text-white hover:border-white/20"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {filteredProjects.map((p, idx) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="glass-panel glass-panel-hover p-5 sm:p-7 rounded-2xl sm:rounded-3xl border border-white/10 flex flex-col justify-between"
            >
              <div>
                {/* Header Badge & Title */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
                  <span className="px-2.5 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/60 text-[11px] sm:text-xs font-semibold text-cyan-300">
                    {p.badge}
                  </span>
                  {p.isCompany && (
                    <span className="px-2.5 py-1 rounded-full bg-purple-950/80 border border-purple-800/60 text-[11px] sm:text-xs font-semibold text-purple-300 flex items-center gap-1">
                      <FaLock className="text-[10px]" /> Company Project
                    </span>
                  )}
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 hover:text-cyan-400 transition-colors">
                  {p.title}
                </h3>

                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-5">
                  {p.desc}
                </p>

                {/* PG Manager Demo Access Credentials Box */}
                {p.demoOwner && p.demoMember && (
                  <div className="mb-5 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-gray-900/90 border border-cyan-500/20 text-xs space-y-2.5">
                    <div className="flex items-center gap-1.5 text-cyan-400 font-semibold tracking-wide uppercase text-[10px] sm:text-[11px]">
                      <FaKey /> Demo Login Credentials
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-300">
                      {/* Owner Info */}
                      <div className="p-2 sm:p-2.5 rounded-xl bg-black/40 border border-white/5 space-y-1">
                        <div className="font-bold text-white flex items-center justify-between text-xs">
                          <span>PG Owner</span>
                          <button
                            onClick={() => copyToClipboard(p.demoOwner.email, "Owner Email")}
                            className="text-cyan-400 hover:text-cyan-300 p-1 cursor-pointer"
                            title="Copy Owner Email"
                          >
                            <FaCopy />
                          </button>
                        </div>
                        <div className="text-[11px] truncate">Email: <span className="text-cyan-300 font-mono">{p.demoOwner.email}</span></div>
                        <div className="text-[11px]">Pass: <span className="text-cyan-300 font-mono">{p.demoOwner.pass}</span></div>
                      </div>

                      {/* Member Info */}
                      <div className="p-2 sm:p-2.5 rounded-xl bg-black/40 border border-white/5 space-y-1">
                        <div className="font-bold text-white flex items-center justify-between text-xs">
                          <span>PG Member</span>
                          <button
                            onClick={() => copyToClipboard(p.demoMember.email, "Member Email")}
                            className="text-cyan-400 hover:text-cyan-300 p-1 cursor-pointer"
                            title="Copy Member Email"
                          >
                            <FaCopy />
                          </button>
                        </div>
                        <div className="text-[11px] truncate">Email: <span className="text-cyan-300 font-mono">{p.demoMember.email}</span></div>
                        <div className="text-[11px]">Pass: <span className="text-cyan-300 font-mono">{p.demoMember.pass}</span></div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-5">
                  {p.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-lg bg-gray-900/80 border border-gray-800 text-[11px] sm:text-xs text-gray-300 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Links */}
              <div className="pt-4 border-t border-gray-800/80 flex flex-col sm:flex-row gap-2.5 sm:gap-3 items-stretch sm:items-center justify-between">
                {p.link ? (
                  <motion.a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-xs sm:text-sm shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-all w-full sm:w-auto"
                  >
                    <span>Visit Live App</span>
                    <FaExternalLinkAlt className="text-xs" />
                  </motion.a>
                ) : (
                  <div className="flex flex-col sm:flex-row gap-2 w-full">
                    <button
                      onClick={handleCompanyClick}
                      className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gray-800 text-gray-300 font-semibold text-xs sm:text-sm border border-gray-700 hover:border-gray-600 transition-colors cursor-pointer w-full sm:w-auto"
                    >
                      <span>Company Project</span>
                    </button>
                    <a
                      href="/workFlow"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-purple-950/80 text-purple-300 font-semibold text-xs sm:text-sm border border-purple-800/60 hover:bg-purple-900 transition-colors w-full sm:w-auto"
                    >
                      <FaCogs />
                      <span>Live Workflow Demo</span>
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <ToastContainer />
    </section>
  );
}
