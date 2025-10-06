"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import LangSwitch, { useLang } from "./LangSwitch";

const links = [
  "Haqqında",
  "Tədqiqat",
  "Layihələr",
  "Uğurlar",
  "Nəşrlər",
  "Bloq",
  "Əlaqə",
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { lang } = useLang();
  const links = [
    lang === "az" ? "Haqqında" : "About",
    lang === "az" ? "Tədqiqat" : "Research",
    lang === "az" ? "Layihələr" : "Projects",
    lang === "az" ? "Mükafatlar" : "Awards",
    lang === "az" ? "Bloq" : "Blog",
    lang === "az" ? "Qalereya" : "Gallery",
    lang === "az" ? "Əlaqə" : "Contact",
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 w-full z-50 px-6 py-4 ${
        scrolled ? "glass backdrop-blur-xl shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <a
          href="#hero"
          className="text-2xl font-bold gradient-text tracking-wide"
        >
          E. İmaməliyev
        </a>

        <div className="hidden md:flex items-center gap-6 text-sm">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="hover:text-yellow-400 transition"
            >
              {link}
            </a>
          ))}
          <LangSwitch />
          <ThemeToggle />
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white focus:outline-none"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-16 left-0 w-full glass py-6 flex flex-col items-center gap-4 md:hidden"
        >
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="hover:text-yellow-400 transition"
            >
              {link}
            </a>
          ))}
          <LangSwitch />
          <ThemeToggle />
        </motion.div>
      )}
    </motion.nav>
  );
}
