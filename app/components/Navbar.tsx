"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import LangSwitch, { useLang } from "./LangSwitch";

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
    <nav
      className={`fixed top-0 animateFadeIn left-0 w-full z-[60] px-6 py-4 transition-all duration-500 !border-0 `}
    >
      <div
        className={`max-w-6xl mx-auto flex justify-between items-center !border-0 transition-all duration-500 ${
          scrolled
            ? "glass backdrop-blur-xl shadow-lg p-4"
            : "bg-transparent backdrop-blur-none"
        }`}
      >
        <a
          href="#hero"
          className="text-2xl font-bold gradient-text tracking-wide"
        >
          E. İmaməliyev
        </a>

        {/* Desktop menu */}
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

        {/* Hamburger button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white dark:text-gray-100 focus:outline-none"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Animated mobile menu */}
      <AnimatePresence>
        {open && (
          <>
            {/* Background overlay */}
            <div
              key="overlay"
              className="fixed inset-0 animateOpacity z-[40] bg-black/60 dark:bg-black/70 backdrop-blur-md"
              onClick={() => setOpen(false)}
            />

            {/* Menu content */}
            <div
              key="menu"
              className="absolute top-16 animateFadeIn animateOpacity left-0 w-full z-[50] glass backdrop-blur-2xl bg-white/20 dark:bg-black/40 py-6 flex flex-col items-center gap-4 md:hidden"
            >
              {links.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className="hover:text-yellow-400 transition text-lg"
                >
                  {link}
                </a>
              ))}
              <div className="flex items-center gap-4 mt-4">
                <LangSwitch />
                <ThemeToggle />
              </div>
            </div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
