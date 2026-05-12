"use client";
import { useLang } from "../contexts/LanguageContext";

export function useT<T>(translations: { de: T; en: T }): T {
  const { lang } = useLang();
  return translations[lang];
}
