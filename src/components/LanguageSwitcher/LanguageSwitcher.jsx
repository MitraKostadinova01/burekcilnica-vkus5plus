// // LanguageSwitcher.jsx
// import { useTranslation } from "react-i18next";
// import "./LanguageSwitcher.css";

// const LanguageSwitcher = () => {
//   const { i18n } = useTranslation();

//   // Get current language (handle cases like 'en-US' or 'mk-MK')
//   const currentLang = i18n.language.split("-")[0];

//   // Determine opposite language
//   const oppositeLang = currentLang === "en" ? "МКД" : "EN";

//   const switchLanguage = () => {
//     const newLang = currentLang === "en" ? "mk" : "en";
//     i18n.changeLanguage(newLang);
//   };

//   return (
//     <button className="language-switcher" onClick={switchLanguage}>
//       {oppositeLang}
//     </button>
//   );
// };

// export default LanguageSwitcher;

import { useTranslation } from "react-i18next";
import "./LanguageSwitcher.css";

const LanguageSwitcher = ({ onLanguageChange }) => {
  const { i18n } = useTranslation();

  const currentLang = i18n.language.split("-")[0];
  const oppositeLang = currentLang === "en" ? "МКД" : "EN";

  const switchLanguage = () => {
    const newLang = currentLang === "en" ? "mk" : "en";
    i18n.changeLanguage(newLang);
    onLanguageChange(); // Call the closing function
  };

  return (
    <button className="language-switcher" onClick={switchLanguage}>
      {oppositeLang}
    </button>
  );
};

export default LanguageSwitcher;
