import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      className="text-center py-8 text-gray-500 border-t border-gray-800/50 mt-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <p className="mb-4">© 2026 Suy Sivlinh. All rights reserved.</p>
        <p className="text-sm text-gray-600">
          Built with ❤️ using React, Tailwind CSS, and Framer Motion
        </p>
      </div>
    </motion.footer>
  );
}
