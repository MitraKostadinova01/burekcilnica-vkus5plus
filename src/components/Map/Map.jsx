import React from "react";
import "./../About/About.css";

const Map = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <section className="location-section">
          <h2 className="section-title">
            Нашата локација - ул. Слободан Митров Данко, бр. 95 Гевгелија
          </h2>
          <div className="map-container">
            <iframe
              title="Burekcilnica VKUS 5+ Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2990.147977922642!2d22.5035439!3d41.1434188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1356255b19c2702d%3A0x4f2a6bc5c006b91b!2sBurekcilnica%20VKUS%205%2B!5e0!3m2!1sen!2smk!4v1717270486152!5m2!1sen!2smk"
              className="map-iframe"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Map;
