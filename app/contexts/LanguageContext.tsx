"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Lang = "de" | "en";

const Ctx = createContext<{ lang: Lang; setLang: (l: Lang) => void; toggle: () => void }>({
  lang: "de", setLang: () => {}, toggle: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("de");

  useEffect(() => {
    const stored = localStorage.getItem("lang") as Lang | null;
    if (stored === "de" || stored === "en") setLangState(stored);
  }, []);

  const setLang = (l: Lang) => { setLangState(l); localStorage.setItem("lang", l); };
  const toggle  = () => setLang(lang === "de" ? "en" : "de");

  return <Ctx.Provider value={{ lang, setLang, toggle }}>{children}</Ctx.Provider>;
}

export const useLang = () => useContext(Ctx);
