"use client";
import { motion } from "framer-motion";
import { useLang, texts } from "./LangSwitch";

export default function Hero() {
  const { lang } = useLang();
  const t = texts[lang].hero;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden"
    >
      <motion.div
        className="absolute w-[600px] h-[600px] bg-gradient-to-tr from-yellow-400/20 via-yellow-200/10 to-transparent rounded-full blur-3xl"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
      />
      <motion.img
        src="/elman.jpg"
        alt={t.title}
        className="w-48 h-48 rounded-full border-4 border-yellow-400 shadow-[0_0_30px_rgba(255,215,0,0.3)] z-10"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", duration: 1.2 }}
      />
      <motion.h1
        className="mt-8 text-5xl md:text-6xl font-bold gradient-text z-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {t.title}
      </motion.h1>
      <motion.p
        className="mt-4 text-gray-300 max-w-2xl leading-relaxed z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        {t.desc}
      </motion.p>
      <motion.a
        href="#haqqında"
        className=" glass btn-primary mt-8 z-10 !text-white"
        whileHover={{ scale: 1.05 }}
      >
        {t.button}
      </motion.a>
    </section>
  );
}
