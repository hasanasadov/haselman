"use client";
import { useState, createContext, useContext } from "react";
import { texts } from "../i18n";

type Lang = "az" | "en";
interface LangCtx {
  lang: Lang;
  toggleLang: () => void;
}
const LangContext = createContext<LangCtx>({ lang: "az", toggleLang: () => {} });
export const useLang = () => useContext(LangContext);

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("az");
  const toggleLang = () => setLang(lang === "az" ? "en" : "az");
  return (
    <LangContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LangContext.Provider>
  );
}

export default function LangSwitch() {
  const { lang, toggleLang } = useLang();
  return (
    <button
      onClick={toggleLang}
      className="px-3 py-1 border border-white/20 rounded-full text-sm hover:bg-white/10 transition"
    >
      {lang === "az" ? "AZ 🇦🇿" : "EN 🇬🇧"}
    </button>
  );
}

export { texts };
