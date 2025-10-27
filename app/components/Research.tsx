"use client";
import { Shield, Lock, Cloud, Cpu } from "lucide-react";
import { texts, useLang } from "./LangSwitch";

const topics = [
  {
    icon: <Shield size={40} />,
    title: "Kiber Təhlükəsizlik",
    desc: "Şəbəkə müdafiəsi, təhlükə aşkarlanması, təhlükəsizlik protokolları və avtomatlaşdırılmış qoruma sistemləri.",
    link: "https://aztu.edu.az",
  },
  {
    icon: <Lock size={40} />,
    title: "Məlumatların Şifrələnməsi",
    desc: "Kriptoqrafik üsullar, post-quantum şifrələmə və təhlükəsiz məlumat mübadiləsi modelləri.",
    link: "https://en.wikipedia.org/wiki/Cryptography",
  },
  {
    icon: <Cloud size={40} />,
    title: "Bulud Texnologiyaları",
    desc: "Bulud infrastrukturunda təhlükəsizlik, paylanmış verilənlər və real vaxt idarəetmə sistemləri.",
    link: "https://aws.amazon.com/security/",
  },
  {
    icon: <Cpu size={40} />,
    title: "Süni İntellekt və Təhlükəsizlik",
    desc: "AI əsaslı müdafiə, anomaliya aşkarlanması və maşın öyrənməsi ilə təhlükə proqnozlaşdırması.",
    link: "https://openai.com/research",
  },
];

export default function Research() {
  const { lang } = useLang();
  const t = texts[lang].research;
  const topicsText = texts[lang].researchTopics;

  // Map topics to include translated titles and descriptions
  const localizedTopics = topics.map((topic, index) => ({
    ...topic,
    t: topicsText[index].title,
    desc: topicsText[index].desc,
  }));

  return (
    <section id="tədqiqat" className="max-w-6xl mx-auto py-24 px-6 text-center">
      <h2 className="text-4xl font-bold gradient-text mb-12 animateFadeIn animateOpacity">
        {t.title}
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {topics.map((a, i) => (
          <a
            key={i}
            href={a.link}
            target="_blank"
            className="glass p-8 rounded-xl flex flex-col animateFadeIn animateOpacity items-center text-center hover:scale-105 hover:border-yellow-400 transition duration-300"
          >
            <div className="text-yellow-400 mb-4">{a.icon}</div>
            <h3 className="text-xl font-semibold text-gray-100 mb-2">
              {localizedTopics[i].t}
            </h3>
            <p className="text-gray-400 text-sm">{localizedTopics[i].desc}</p>
            <span className="mt-3 text-yellow-400 text-xs hover:underline">
              {texts[lang].more} →
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
