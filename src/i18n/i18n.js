import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Import translations
import translationMK from "../locales/mk/translation.json";
import translationEN from "../locales/en/translation.json";

if (!localStorage.getItem("i18nextLng")) {
  localStorage.setItem("i18nextLng", "mk");
}

const resources = {
  mk: { translation: translationMK },
  en: { translation: translationEN },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "mk", // Default language
    supportedLngs: ["mk", "en"],

    detection: {
      order: ["localStorage"],
      caches: ["localStorage"],
      lookupLocalStorage: "i18nextLng",
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
