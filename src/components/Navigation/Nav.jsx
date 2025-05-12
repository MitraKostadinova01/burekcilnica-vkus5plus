// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import { useTranslation } from "react-i18next";
// import "./Navbar.css";
// import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";

// const Navbar = () => {
//   const { t } = useTranslation();
//   const [isOpen, setIsOpen] = useState(false);

//   const navItems = [
//     { id: 1, path: "/", text: t("navbar.products") },
//     { id: 2, path: "/about", text: t("navbar.about") },
//     { id: 3, path: "/location", text: t("navbar.location") },
//   ];

//   return (
//     <>
//       <div className="announcement-bar">
//         <p className="scrolling-text">{t("announcement")}</p>
//       </div>
//       <nav className="navbar">
//         <div className="nav-container">
//           <NavLink to="/" className="nav-logo">
//             {t("navbar.shop_name")}
//           </NavLink>

//           <div className={`nav-menu ${isOpen ? "active" : ""}`}>
//             {navItems.map((item) => (
//               <React.Fragment key={item.id}>
//                 {item.id === 3 ? (
//                   <div className="location-language-group">
//                     <NavLink
//                       to={item.path}
//                       className={({ isActive }) =>
//                         `nav-item ${isActive ? "active" : ""}`
//                       }
//                       onClick={() => setIsOpen(false)}
//                     >
//                       {item.text}
//                     </NavLink>
//                     <LanguageSwitcher />
//                   </div>
//                 ) : (
//                   <NavLink
//                     to={item.path}
//                     className={({ isActive }) =>
//                       `nav-item ${isActive ? "active" : ""}`
//                     }
//                     onClick={() => setIsOpen(false)}
//                   >
//                     {item.text}
//                   </NavLink>
//                 )}
//               </React.Fragment>
//             ))}
//           </div>

//           <button
//             className={`hamburger ${isOpen ? "active" : ""}`}
//             onClick={() => setIsOpen(!isOpen)}
//             aria-label="Menu"
//           >
//             <span className="bar"></span>
//             <span className="bar"></span>
//             <span className="bar"></span>
//           </button>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Navbar;
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Navbar.css";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";

const Navbar = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 1, path: "/", text: t("navbar.products") },
    { id: 2, path: "/about", text: t("navbar.about") },
    { id: 3, path: "/location", text: t("navbar.location") },
  ];

  const handleLanguageChange = () => {
    setIsOpen(false); // Close menu when language changes
  };

  return (
    <>
      <div className="announcement-bar">
        <p className="scrolling-text">{t("announcement")}</p>
      </div>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink to="/" className="nav-logo">
            {t("navbar.shop_name")}
          </NavLink>

          <div className={`nav-menu ${isOpen ? "active" : ""}`}>
            {navItems.map((item) => (
              <React.Fragment key={item.id}>
                {item.id === 3 ? (
                  <div className="location-language-group">
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `nav-item ${isActive ? "active" : ""}`
                      }
                      onClick={() => setIsOpen(false)}
                    >
                      {item.text}
                    </NavLink>
                    {/* Add onLanguageChange prop here */}
                    <LanguageSwitcher onLanguageChange={handleLanguageChange} />
                  </div>
                ) : (
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `nav-item ${isActive ? "active" : ""}`
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    {item.text}
                  </NavLink>
                )}
              </React.Fragment>
            ))}
          </div>

          <button
            className={`hamburger ${isOpen ? "active" : ""}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
