import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Import translations
import translationMK from "../locales/mk/translation.json";
import translationEN from "../locales/en/translation.json";

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
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

// // i18n.js
// import i18n from 'i18next';
// import { initReactI18next } from 'react-i18next';
// import LanguageDetector from 'i18next-browser-languagedetector';

// import translationMK from './locales/mk/translation.json';
// import translationEN from './locales/en/translation.json';

// const resources = {
//   mk: { translation: translationMK },
//   en: { translation: translationEN }
// };

// i18n
//   .use(LanguageDetector)
//   .use(initReactI18next)
//   .init({
//     resources,
//     fallbackLng: 'mk',
//     interpolation: {
//       escapeValue: false
//     }
//   });

// export default i18n;
