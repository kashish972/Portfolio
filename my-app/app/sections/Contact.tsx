"use client";

import SectionTitle from "../components/SectionTitle";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

export default function Contact() {
  const socialLinks = [
    {
      icon: <FaLinkedin />,
      href: "https://www.linkedin.com/in/kashish-arora-on?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      color: "hover:text-blue-500",
    },
    {
      icon: <FaGithub />,
      href: "https://github.com/kashish972/",
      color: "hover:text-gray-300",
    },
    {
      icon: <FaTwitter />,
      href: "https://twitter.com/kashish_arora",
      color: "hover:text-blue-400",
    },
  ];

  return (
    <section
      id="contact"
      className="pt-24 pb-10 px-6 relative bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white"
    >
      <SectionTitle title="Contact Me" />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center flex flex-col items-center gap-6"
      >
        <p className="text-gray-400 max-w-xl">
          Feel free to reach out for collaborations, opportunities, or just to
          say hi!
        </p>

        {/* Email Button */}
        <motion.a
          href="mailto:kashisharorasahib@gmail.com"
          whileHover={{ scale: 1.1, rotate: 1 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 bg-blue-600 text-white rounded-xl shadow-lg hover:bg-blue-700 transition-all"
        >
          Send Email
        </motion.a>

        {/* Social Links */}
        <div className="flex gap-6 mt-4 text-2xl">
          {socialLinks.map((social, i) => (
            <motion.a
              key={i}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.3, y: -3 }}
              className={`transition-colors ${social.color}`}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
      </motion.div>

    </section>
  );
}
