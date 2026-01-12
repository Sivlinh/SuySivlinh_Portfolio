import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section id="about"
      className="pt-32 min-h-screen"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm a passionate Computer Science student with a keen interest in web development
              and creating digital experiences that make a difference.
            </p>
            <p className="text-gray-400 leading-relaxed">
              My journey in tech started with curiosity about how websites work, and it has evolved
              into a deep appreciation for clean code, user-centered design, and innovative solutions.
            </p>
            <p className="text-gray-400 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source
              projects, or enjoying outdoor activities.
            </p>
          </motion.div>

          <motion.div
            className="card"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-primary">What I Do</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>Build responsive web applications with modern frameworks</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>Create intuitive user interfaces and experiences</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>Write clean, maintainable, and scalable code</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>Collaborate on team projects and learn from others</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="text-gray-400 max-w-2xl mx-auto">
            I'm always excited to take on new challenges and contribute to meaningful projects.
            Let's build something amazing together!
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
