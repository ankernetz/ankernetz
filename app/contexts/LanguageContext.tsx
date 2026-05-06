"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Lang = "de" | "en";

const Ctx = createContext<{ lang: Lang; toggle: () => void }>({ lang: "de", toggle: () => {} });

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("de");

  useEffect(() => {
    const stored = localStorage.getItem("lang") as Lang | null;
    if (stored === "de" || stored === "en") setLang(stored);
  }, []);

  const toggle = () => {
    const next: Lang = lang === "de" ? "en" : "de";
    setLang(next);
    localStorage.setItem("lang", next);
  };

  return <Ctx.Provider value={{ lang, toggle }}>{children}</Ctx.Provider>;
}

export const useLang = () => useContext(Ctx);
