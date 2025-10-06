"use client";
import { motion } from "framer-motion";
import { Mail, Linkedin, Globe, Copy } from "lucide-react";
import { useState } from "react";
import { useLang, texts } from "./LangSwitch";

export default function Contact() {
  const { lang } = useLang();
  const t = texts[lang].contact;
  const [copied, setCopied] = useState(false);

  const email = "elman.imamaliyev@aztu.edu.az";

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Copy failed", err);
    }
  };

  return (
    <section id="əlaqə" className="max-w-4xl mx-auto py-24 px-6 text-center">
      <motion.h2
        className="text-4xl font-bold gradient-text mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        {t.title}
      </motion.h2>

      <motion.p
        className="text-gray-400 mb-10 max-w-xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        {lang === "az"
          ? "Əlaqə üçün aşağıdakı vasitələrdən istifadə edə bilərsiniz:"
          : "You can reach out using the options below:"}
      </motion.p>

      <motion.div
        className="glass p-8 rounded-xl max-w-xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
      >
        {/* Mailto link */}
        <a
          href={`mailto:${email}`}
          className="flex items-center gap-3 text-yellow-400 hover:underline"
        >
          <Mail size={22} />
          <span>{email}</span>
        </a>

        {/* Copy button */}
        <button
          onClick={copyEmail}
          className="flex items-center gap-2 px-4 py-2 bg-yellow-400/20 border border-yellow-400/30 rounded-full hover:bg-yellow-400/30 transition text-sm"
        >
          <Copy size={16} />
          {copied
            ? lang === "az"
              ? "Kopyalandı!"
              : "Copied!"
            : lang === "az"
            ? "E-poçtu kopyala"
            : "Copy email"}
        </button>
      </motion.div>

      {/* Social / professional links */}
     

      <motion.p
        className="text-gray-500 text-sm mt-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        {lang === "az"
          ? "Təşəkkürlər! Elmi əməkdaşlıq və layihələr üçün əlaqə saxlaya bilərsiniz."
          : "Thank you! Feel free to contact for research or collaboration."}
      </motion.p>
    </section>
  );
}
