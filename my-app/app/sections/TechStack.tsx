"use client";

import SectionTitle from "../components/SectionTitle";
import { motion } from "framer-motion";

export default function TechStack() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Java", "JavaScript", "C/C++"],
    },
    {
      title: "Web Technologies",
      skills: ["HTML", "CSS", "JavaScript", "TypeScript"],
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        "Next.js",
        "React.js",
        "Express.js",
        "Nest.js",
        "Redux",
        "Tailwind CSS",
        "Framer Motion",
        "Three.js",
        "ShadCN UI",
        "Ant Design",
        "AG Grid",
        "React-PDF",
        "React Flow",
        "Axios",
        "Mongoose",
      ],
    },
    {
      title: "Databases",
      skills: ["PostgreSQL", "MongoDB", "SQL"],
    },
    {
      title: "Tools & DevOps",
      skills: ["Git", "GitHub", "VS Code", "IntelliJ", "Postman", "Docker"],
    },
    {
      title: "Payments",
      skills: ["Stripe", "Razorpay"],
    },
    {
      title: "Core Skills",
      skills: [
        "Data Structures and Algorithms",
        "Problem Solving",
        "System Design Basics",
        "API Design",
        "Debugging and Troubleshooting",
        "Clean Code Practices",
        "Git Workflow",
        "Teamwork",
        "Adaptability",
        "Communication",
      ],
    },
  ];

  return (
    <section id="techstack" className="py-24 px-6 bg-black">
      <SectionTitle title="Tech Stack & Skills" />

      <div className="max-w-6xl mx-auto space-y-12">
        {skillCategories.map((category, catIndex) => (
          <motion.div
            key={catIndex}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: catIndex * 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-blue-400 mb-4">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skillIndex}
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: (catIndex * 0.1 + skillIndex * 0.05) % 2,
                  }}
                  className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}