import React, { useState } from "react";
import Slider from "react-slick";
import { useTranslation } from "react-i18next";
import "./VideoCarousel.css";

const VideoCarousel = () => {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    beforeChange: (current, next) => setCurrentSlide(next),
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
        {t("about.video.title")}
      </h2>
      <div className="video-container">
        <Slider {...settings}>
          <div className="video-slide">
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
              <source src="/videos/slave.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="video-slide">
            <video
              className="portrait-video"
              controls
              playsInline
              muted
              controlsList="nodownload"
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
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default VideoCarousel;
