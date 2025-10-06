"use client";
import { motion } from "framer-motion";
import { posts } from "../data/posts";
import { texts, useLang } from "./LangSwitch";

export default function Blog() {
  const { lang } = useLang();
  const t = texts[lang].blog;

  const localizedBlogs = posts.map((post, index) => ({
    ...post,
    title: texts[lang].blogTopics[index].title,
    desc: texts[lang].blogTopics[index].desc,
    date: texts[lang].blogTopics[index].date,
  }));
  return (
    <section id="bloq" className="max-w-6xl mx-auto py-24 px-6 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold gradient-text mb-12"
      >
        {t.title}
      </motion.h2>
      <div className="grid md:grid-cols-3 gap-8">
        {localizedBlogs.map((p, i) => (
          <motion.a
            key={p.id}
            href={p.link}
            target="_blank"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            className="glass p-6 rounded-xl shadow-lg hover:scale-[1.03] transition flex flex-col"
          >
            <img
              src={p.image}
              alt={p.title}
              className="rounded-lg h-40 w-full object-cover mb-4"
            />
            <h3 className="text-lg font-semibold text-yellow-400 mb-1">
              {p.title}
            </h3>
            <span className="text-gray-400 text-sm">{p.date}</span>
            <p className="text-gray-300 mt-3 text-sm">{p.desc}</p>
            <span className="text-yellow-400 text-sm mt-3 hover:underline">
              {texts[lang].goto}
            </span>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
