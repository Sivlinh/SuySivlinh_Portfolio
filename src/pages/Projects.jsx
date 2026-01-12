import { motion } from "framer-motion";
import ProjectCard from "../component/ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      tech: "React, Tailwind CSS, Framer Motion",
      desc: "A modern, responsive portfolio website showcasing my skills and projects with smooth animations.",
      link: "#",
      github: "#"
    },
    {
      title: "E-commerce Platform",
      tech: "React, Node.js, MongoDB",
      desc: "Full-stack e-commerce application with user authentication, payment integration, and admin dashboard.",
      link: "#",
      github: "#"
    },
    {
      title: "Task Management App",
      tech: "React, Firebase",
      desc: "Collaborative task management tool with real-time updates, drag-and-drop functionality.",
      link: "#",
      github: "#"
    },
    {
      title: "Weather Dashboard",
      tech: "JavaScript, API Integration",
      desc: "Interactive weather application with location-based forecasts and beautiful data visualizations.",
      link: "#",
      github: "#"
    },
    {
      title: "Blog Platform",
      tech: "Next.js, Markdown",
      desc: "Static blog generator with markdown support, SEO optimization, and responsive design.",
      link: "#",
      github: "#"
    },
    {
      title: "Chat Application",
      tech: "React, Socket.io",
      desc: "Real-time chat application with multiple rooms, emoji support, and file sharing capabilities.",
      link: "#",
      github: "#"
    }
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
    <motion.section id="projects"
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
          My Projects
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project, index) => (
            <motion.div key={project.title} variants={itemVariants}>
              <ProjectCard
                title={project.title}
                tech={project.tech}
                desc={project.desc}
                link={project.link}
                github={project.github}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-gray-400 max-w-2xl mx-auto mb-6">
            These are some of the projects I've worked on. Each one represents a learning experience
            and showcases different aspects of my development skills.
          </p>
          <a
            href="#"
            className="btn inline-flex items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            View More on GitHub
            <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
}
