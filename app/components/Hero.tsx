"use client";
import { useLang, texts } from "./LangSwitch";

export default function Hero() {
  const { lang } = useLang();
  const t = texts[lang].hero;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden"
    >
      <div className="absolute animateFadeIn w-[600px] h-[600px] bg-gradient-to-tr from-yellow-400/20 via-yellow-200/10 to-transparent rounded-full blur-3xl" />
      <img
        src="/elman.jpg"
        alt={t.title}
        className="w-48 h-48 animateScale rounded-full border-4 border-yellow-400 shadow-[0_0_30px_rgba(255,215,0,0.3)] z-10"
      />
      <h1 className="mt-8 text-5xl animateOpacity md:text-6xl font-bold gradient-text z-10">
        {t.title}
      </h1>
      <p className="mt-4 text-gray-300 animateOpacity max-w-2xl leading-relaxed z-10">
        {t.desc}
      </p>
      <a
        href="#haqqında"
        className=" glass btn-primary mt-8 z-10 !text-white hover:scale-[1.05]"
      >
        {t.button}
      </a>
    </section>
  );
}
