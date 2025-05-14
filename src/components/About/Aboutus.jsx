import React, { useEffect } from "react";
import { useTranslation, Trans } from "react-i18next";
import "./About.css";
import imagesss from "../../../public/images/beginings.png";
import ImageCarousel from "./../ImageCarousel/ImageCarousel.jsx";

const About = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-container">
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">{t("about.heroTitle")}</h1>
          <p className="hero-subtitle">{t("about.heroSubtitle1")}</p>
          <p className="hero-subtitle">{t("about.address")}</p>
        </div>
      </section>

      <div className="about-content">
        <section className="history-section">
          <div className="text-content">
            <h2 className="section-title">{t("about.history.title")}</h2>
            <p className="section-text">
              <Trans
                i18nKey="about.history.text"
                components={{
                  break: <br />,
                  emphasis: <i />,
                  strong: <strong />,
                }}
              />
            </p>
          </div>
          <div className="image-content">
            <img
              src={imagesss}
              alt={t("about.history.imageAlt")}
              className="vintage-photo"
            />
          </div>
        </section>
        <br />
        <h2 className="section-title test">
          <span>{t("about.recommendations.title")}</span>
          <small className="small-text">
            {t("about.recommendations.subtext")}
          </small>
        </h2>
        <ImageCarousel />
        <br /> <br />
        <section className="values-section">
          <h2 className="section-title">{t("about.values.title")}</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🥐</div>
              <h3>{t("about.values.traditional.title")}</h3>
              <p>{t("about.values.traditional.description")}</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🌱</div>
              <h3>{t("about.values.fresh.title")}</h3>
              <p>{t("about.values.fresh.description")}</p>
            </div>
            <div className="value-card">
              <div className="value-icon">❤️</div>
              <h3>{t("about.values.love.title")}</h3>
              <p>{t("about.values.love.description")}</p>
            </div>
          </div>
        </section>
        <section className="video-section">
          <h2 className="section-title" style={{ display: "flex" }}>
            {t("about.video.title")}
          </h2>
          <div className="video-container">
            <video
              className="portrait-video"
              controls
              playsInline
              muted
              controlsList="nodownload"
              onContextMenu={(e) => e.preventDefault()}
              ref={(el) => {
                if (el) {
                  el.volume = 0; // Force volume to 0
                  el.addEventListener("volumechange", () => {
                    el.muted = true;
                    el.volume = 0;
                  });
                }
              }}
            >
              <source src="/videos/IMG_8164.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </section>
        <br />
      </div>
    </div>
  );
};

export default About;
