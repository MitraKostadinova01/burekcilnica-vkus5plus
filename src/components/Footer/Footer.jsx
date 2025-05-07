import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";

import covece from "./../../../public/images/transparentno-chovece.png";
import instaLogo from "./../../../public/images/instagram.png";
import fbLogo from "./../../../public/images/facebook.png";

const Footer = () => {
  function getMacedonianMonthYear() {
    const date = new Date();
    const months = [
      "Јануари",
      "Февруари",
      "Март",
      "Април",
      "Мај",
      "Јуни",
      "Јули",
      "Август",
      "Септември",
      "Октомври",
      "Ноември",
      "Декември",
    ];
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    return `${month} ${year}`;
  }

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo-section">
          <img src={covece} />
          <NavLink to="/" className="footer-logo">
            БУРЕКЧИЛНИЦА ВКУС 5+
          </NavLink>
        </div>

        <div className="footer-contact">
          <h4 className="contact-title">Контактирајте не</h4>
          <p>ул. Слободан Митров Данко бр.95</p>
          <p>Гевгелија, Република Северна Македонија</p>
          <p>Телефон: 071 625 012</p>
          <div className="social-icons">
            <a
              target="_blank"
              href="https://www.instagram.com/burekcilnica_vkus5plus/"
            >
              <img alt="Insta Logo" src={instaLogo} />
            </a>

            <a
              target="_blank"
              href="https://www.facebook.com/profile.php?id=100063766620097"
            >
              <img alt="FB Logo" src={fbLogo} />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          <strong>
            © БУРЕКЧИЛНИЦА ВКУС 5+ Гевгелија, {getMacedonianMonthYear()} <br />{" "}
            Сите права се задржани
          </strong>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
