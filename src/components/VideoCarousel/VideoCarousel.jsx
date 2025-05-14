import React from "react";
import Slider from "react-slick";
import { useTranslation } from "react-i18next";
import "./VideoCarousel.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const VideoCarousel = () => {
  const { t } = useTranslation();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="video-section">
      <h2 className="section-title" style={{ display: "flex" }}>
        {t("about.video.section-title")}
      </h2>
      <div className="video-container">
        <Slider {...settings}>
          <div className="video-slide">
            <div className="video-wrapper">
              <video
                className="portrait-video"
                controls
                playsInline
                muted
                controlsList="nodownload"
                poster="/images/IMG_6853.jpg"
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
              <div className="video-label">
                {" "}
                {t("about.video.video-desc-01")}
              </div>
            </div>
          </div>
          <div className="video-slide">
            <div className="video-wrapper">
              <video
                className="portrait-video"
                controls
                playsInline
                muted
                controlsList="nodownload"
                poster="/images/IMG_6852.jpeg"
                onContextMenu={(e) => e.preventDefault()}
                ref={(el) => {
                  if (el) {
                    el.volume = 0;
                    el.addEventListener("volumechange", () => {
                      el.muted = true;
                      el.volume = 0;
                    });
                  }
                }}
              >
                <source src="/videos/slave.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="video-label">
                {t("about.video.video-desc-02")}
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default VideoCarousel;
