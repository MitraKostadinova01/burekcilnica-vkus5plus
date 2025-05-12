import React from "react";
import { NavLink } from "react-router-dom";
import { useTranslation, Trans } from "react-i18next";
import "./Footer.css";

import covece from "./../../../public/images/transparentno-chovece.png";
import instaLogo from "./../../../public/images/instagram.png";
import fbLogo from "./../../../public/images/facebook.png";

const Footer = () => {
  const { t } = useTranslation();

  function getLocalizedMonthYear() {
    const date = new Date();
    const months = t("months", { returnObjects: true });
    return `${months[date.getMonth()]} ${date.getFullYear()}`;
  }

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo-section">
          <img src={covece} alt={t("footer.logoAlt")} />
          <NavLink to="/" className="footer-logo">
            {t("footer.businessName")}
          </NavLink>
        </div>

        <div className="footer-contact">
          <h4 className="contact-title">{t("footer.contactTitle")}</h4>
          <p>{t("footer.address.street")}</p>
          <p>{t("footer.address.city")}</p>
          <p>{t("footer.phone")}</p>
          <div className="social-icons">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/burekcilnica_vkus5plus/"
            >
              <img alt={t("footer.social.instaAlt")} src={instaLogo} />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/profile.php?id=100063766620097"
            >
              <img alt={t("footer.social.fbAlt")} src={fbLogo} />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          <strong>
            <Trans
              i18nKey="footer.copyright"
              values={{ date: getLocalizedMonthYear() }}
              components={{ br: <br /> }}
            />
          </strong>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
