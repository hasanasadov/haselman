"use client";
import { texts, useLang } from "./LangSwitch";

const awards = [
  {
    title: "İlin Gənc Tədqiqatçısı",
    year: "2021",
    desc: "Azərbaycan Elmlər Akademiyasının gənc alimlər müsabiqəsində uğurlu nəticəyə görə.",
  },
  {
    title: "Akademik Əməkdaşlıq Sertifikatı",
    year: "2022",
    desc: "Beynəlxalq universitetlərlə elmi əməkdaşlığa görə təqdim olunmuş sertifikat.",
  },
  {
    title: "Kiber Təhlükəsizlikdə İrəliləyiş Mükafatı",
    year: "2023",
    desc: "Avtomatlaşdırılmış təhlükəsizlik sistemləri üzrə tədqiqatlara görə.",
  },
];

export default function Awards() {
  const { lang } = useLang();
  const t = texts[lang].awards;

  const localizedAwards = awards.map((award, index) => ({
    ...award,
    title: texts[lang].awardsTopics[index].title,
    desc: texts[lang].awardsTopics[index].desc,
  }));

  return (
    <section id="mükafatlar" className="max-w-5xl mx-auto py-24 px-6">
      <h2 className="text-4xl font-bold gradient-text text-center mb-12 animateFadeIn">
        {t.title}
      </h2>
      <div className="space-y-8">
        {awards.map((a, i) => (
          <div key={i} className="glass p-6 rounded-xl shadow-md animateFadeIn">
            <h3 className="text-xl font-semibold text-yellow-400">
              {localizedAwards[i].title} ({a.year})
            </h3>
            <p className="text-gray-300 mt-2">{localizedAwards[i].desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
