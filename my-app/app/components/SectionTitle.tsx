"use client";

import { motion } from "framer-motion";

export default function SectionTitle({ title }: { title: string }) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-4xl font-bold text-center mb-12"
    >
      {title}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "60px" }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="h-1 bg-blue-500 mx-auto mt-3 rounded-full"
      />
    </motion.h2>
  );
}
