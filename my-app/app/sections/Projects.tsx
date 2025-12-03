"use client";

import SectionTitle from "../components/SectionTitle";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Projects() {
  const projects = [
    {
      title: "Trux Workflow Automation",
      desc: "Workflow builder with nodes, edges, and React Query, Adobe-sign and Docu-sign Integration",
      link: "",
    },
    {
      title: "3D Visualizer",
      desc: "Modern Next.js 3D visualization with React Three Fiber and three.js also razorpay integration.",
      link: "https://ai-visualizer-frontend.vercel.app/",
    },
    {
      title: "ChatBox",
      desc: "With websockets and real-time messaging.",
      link: "https://chat-app-frontend-omega-nine.vercel.app/main",
    },
    {
      title: "Portfolio Website",
      desc: "Modern Next.js portfolio with 3D & animations.",
      link: "https://portfolio-lac-eight-46.vercel.app/",
    },
  ];

  const handleClick = (link: string | undefined) => {
    if (!link) {
      toast.info("This is a company project, not a personal link. but you can check a small workflow demo", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      });
    }
  };

  return (
    <section id="projects" className="py-24 px-6">
      <SectionTitle title="Projects" />

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {projects.map((p, i) => (
          <motion.a
            key={i}
            href={p.link || "#"}
            onClick={(e) => {
              if (!p.link) {
                e.preventDefault(); // prevent navigation
                handleClick(p.link);
              }
            }}
            target={p.link ? "_blank" : undefined}
            rel={p.link ? "noopener noreferrer" : undefined}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="block p-6 bg-gray-800 border border-gray-700 rounded-xl hover:border-blue-500 transition cursor-pointer"
          >
            <h3 className="text-xl font-semibold">{p.title}</h3>
            <p className="mt-2 text-gray-400">{p.desc}</p>
          </motion.a>
        ))}
      </div>

      {/* Toast Container */}
      <ToastContainer />
    </section>
  );
}
