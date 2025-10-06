"use client";
import { motion } from "framer-motion";
import { useLang, texts } from "./LangSwitch";

export default function About() {
  const { lang } = useLang();
  const t = texts[lang].about;

  return (
    <section id="haqqında" className="max-w-6xl mx-auto py-24 px-6">
      <motion.div
        className="glass p-10 rounded-xl grid md:grid-cols-2 gap-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold gradient-text">{t.title}</h2>
          <p className="text-gray-200">{t.p1}</p>
          <p className="text-gray-400">{t.p2}</p>
          <a
            href="https://aztu.edu.az"
            target="_blank"
            className="text-yellow-400 hover:underline inline-block mt-2"
          >
            {t.link}
          </a>
        </div>
        <motion.div
          className="grid grid-cols-2 gap-4"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          <img src="/elman-teaching.jpg" className="rounded-lg object-cover" />
          <img src="/elman-conference.jpg" className="rounded-lg object-cover" />
          <img
            src="/elman-lab.jpg"
            className="rounded-lg col-span-2 h-40 object-cover"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
