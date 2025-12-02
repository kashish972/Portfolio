"use client";

import SectionTitle from "../components/SectionTitle";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <SectionTitle title="About Me" />

      <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center text-gray-300 text-lg"
      >
        I am a Developer 1 at Cloud Analogy passionate about creating modern,
        animated, and high-performing websites using Next.js, React, and
        cutting-edge UI technologies.
      </motion.p>
    </section>
  );
}
