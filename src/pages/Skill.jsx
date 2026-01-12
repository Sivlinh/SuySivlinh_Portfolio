import React from "react";
import { motion } from "framer-motion";

export default function Skill() {
  const skills = [
    { name: "HTML", level: 80, icon: "🌐" },
    { name: "CSS", level: 75, icon: "🎨" },
    { name: "JavaScript", level: 60, icon: "⚡" },
    { name: "React", level: 65, icon: "⚛️" },
    { name: "Tailwind CSS", level: 60, icon: "💨" },
    { name: "Git", level: 45, icon: "📚" },
    { name: "Node.js", level: 40, icon: "🟢" },
    { name: "Python", level: 35, icon: "🐍" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section id="skill"
      className="pt-32 min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          My Skills
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              className="card group"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{skill.icon}</span>
                  <h3 className="text-lg font-semibold">{skill.name}</h3>
                </div>
                <span className="text-sm text-primary font-medium">{skill.level}%</span>
              </div>

              <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary to-purple-400 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <p className="text-gray-400 max-w-2xl mx-auto">
            Always learning and exploring new technologies to stay current with industry trends.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
