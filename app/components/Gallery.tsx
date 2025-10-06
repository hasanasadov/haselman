"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { texts, useLang } from "./LangSwitch";

const images = [
  "/gallery/1.jpg",
  "/gallery/2.jpg",
  "/gallery/3.jpg",
  "/gallery/4.jpg",
  "/gallery/5.jpg",
  "/gallery/6.jpg",
];

export default function Gallery() {
  const [selected, setSelected] = useState<string | null>(null);
const { lang } = useLang();
  const t = texts[lang].gallery;
  return (
    <section id="qalereya" className="max-w-6xl mx-auto py-24 px-6 text-center">
      <h2 className="text-4xl font-bold gradient-text mb-12">
        {t.title}
      </h2>
      <div className="columns-2 md:columns-3 gap-4 space-y-4">
        {images.map((img, i) => (
          <motion.img
            key={i}
            src={img}
            alt={`Gallery ${i + 1}`}
            onClick={() => setSelected(img)}
            whileHover={{ scale: 1.03 }}
            className="w-full rounded-lg cursor-pointer hover:opacity-90 transition"
          />
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.img
              src={selected}
              alt="Selected"
              className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-xl"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
