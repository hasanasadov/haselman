"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { texts, useLang } from "./LangSwitch";

const images = [
  "/gallery/1.jpeg",
  "/gallery/2.jpeg",
  "/gallery/3.jpeg",
  "/gallery/4.jpeg",
  "/gallery/5.jpeg",
  "/gallery/6.jpeg",
  "/gallery/7.jpeg",
  "/gallery/8.jpeg",
  "/gallery/9.jpeg",
  "/gallery/10.jpeg",
  "/gallery/11.jpeg",
  "/gallery/12.jpeg",
  "/gallery/13.jpeg",
  "/gallery/14.jpeg",
  "/gallery/15.jpeg",
  "/gallery/16.jpeg",
];

export default function Gallery() {
  const [selected, setSelected] = useState<string | null>(null);
  const { lang } = useLang();
  const t = texts[lang].gallery;
  return (
    <section id="qalereya" className="max-w-6xl mx-auto py-24 px-6 text-center">
      <h2 className="text-4xl font-bold gradient-text mb-12">{t.title}</h2>
      <div className="columns-2 md:columns-3 gap-4 space-y-4 !overflow-hidden">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Gallery ${i + 1}`}
            onClick={() => setSelected(img)}
            className="w-full rounded-lg !overflow-hidden border-2 border-transparent cursor-pointer hover:!border-amber-100 hover:border-2 transition-all duration-100"
          />
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-[99999] flex items-center justify-center "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.img
              src={selected}
              alt="Selected"
              className="max-h-[90vh]  max-w-[90vw] rounded-lg shadow-xl"
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
