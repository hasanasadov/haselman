"use client";
import { motion } from "framer-motion";
import { Linkedin, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-20 py-10 text-center text-gray-400 text-sm border-t border-white/10">
      <p>© {new Date().getFullYear()} Elman Bəhlul oğlu İmaməliyev</p>
      <motion.div
        className="flex justify-center gap-8 mt-10 text-yellow-400 text-sm"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        // viewport={{ once: true }}
      >
        <a
          href="https://www.linkedin.com"
          target="_blank"
          className="flex items-center gap-2 hover:underline"
        >
          <Linkedin size={18} /> LinkedIn
        </a>
        <a
          href="https://scholar.google.com"
          target="_blank"
          className="flex items-center gap-2 hover:underline"
        >
          <Globe size={18} /> Google Scholar
        </a>
        <a
          href="https://aztu.edu.az"
          target="_blank"
          className="flex items-center gap-2 hover:underline"
        >
          <Globe size={18} /> AzTU
        </a>
      </motion.div>
    </footer>
  );
}
