"use client";
import { texts, useLang } from "./LangSwitch";

const projects = [
  {
    title: "Kiber Mühafizə Platforması",
    year: "2022",
    desc: "Bulud əsaslı təhlükəsizlik modulu: real vaxtda hücumların aşkarlanması və analitik hesabat sistemi.",
    link: "https://aztu.edu.az",
    image: "/projects/cyber-protection.jpg",
  },
  {
    title: "Robottexnika və Təhsil",
    year: "2023",
    desc: "Tədris prosesinə texnologiyanın inteqrasiyası, məktəblərdə robottexnika laboratoriyalarının qurulması.",
    link: "https://cyberleninka.ru/article/n/robotatexnikanin-t-hsil-sistemind-rolu",
    image: "/projects/robotics.jpg",
  },
  {
    title: "AI Təhlükəsizlik Analitikası",
    year: "2024",
    desc: "Süni intellektlə təhdid aşkarlanması üçün analitik platforma.",
    link: "https://openai.com/research",
    image: "/projects/ai-security.jpg",
  },
];

export default function Projects() {
  const { lang } = useLang();
  const t = texts[lang].projects;

  const localizedProjects = projects.map((project, index) => ({
    ...project,
    title: texts[lang].projectTopics[index].title,
    desc: texts[lang].projectTopics[index].desc,
  }));

  return (
    <section
      id="layihələr"
      className="max-w-6xl mx-auto py-24 px-6 text-center"
    >
      <h2 className="text-4xl font-bold gradient-text mb-12 animateFadeIn animateOpacity">
        {t.title}
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <div
            key={i}
            className="glass p-6 rounded-xl animateFadeIn animateOpacity shadow-lg flex flex-col hover:scale-[1.02] transition"
          >
            <img
              src={p.image}
              alt={p.title}
              className="rounded-lg h-40 w-full object-cover mb-4"
            />
            <h3 className="text-xl text-yellow-400 font-semibold mb-1">
              {localizedProjects[i].title}
            </h3>
            <span className="text-gray-400 text-sm">{p.year}</span>
            <p className="text-gray-300 mt-3 text-sm leading-relaxed">
              {localizedProjects[i].desc}
            </p>
            <a
              href={p.link}
              target="_blank"
              className="text-yellow-400 text-sm mt-3 inline-block hover:underline"
            >
              {texts[lang].more} →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
