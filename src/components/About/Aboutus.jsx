import React from "react";
import "./About.css";
import imagesss from "../../../public/beginings.png";

const About = () => {
  return (
    <div className="about-container">
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Нашата приказна</h1>
          <p className="hero-subtitle">за традиционален бурек и пецива</p>
        </div>
      </section>

      <div className="about-content">
        <section className="history-section">
          <div className="text-content">
            <h2 className="section-title">
              Од фамилијарна бурекчилница до омилено место во Гевгелија
            </h2>
            <p className="section-text">
              Отворена со златните раце на мајстори со над 40 години искуство,
              ВКУС 5+ не е само обична бурекчилница - туку приказна испреплетена
              од традиција, децении посветена работа, труд и многу тесто. Од
              јули 2020, во екот на светската пандемија, па сè до денес, секоја
              тепсија раскажува занает месен, размесуван и секојдневно
              обликуван.
              <br />
              Кај нас ништо не е набрзина - секоја кора се влече прецизно и
              рачно, секој фил се подготвува со внимание, секоја тепсија се
              обликува и пече со душа, секоја печка мириса на дома, секое залаче
              е полн со свежина и крцкавост. Овој квалитет не е случаен - тоа е
              децениска посветеност, трпение и мајсторство кое се негувало низ
              времето, за денес гордо да го споделуваме со сите кои знаат што
              значи вистински добар бурек. <br />
              ВКУС 5+ не е само место за јадење, туку доживување кое ќе Ви ги
              разбуди сите сетила и ќе Ви докаже дека автентичниот вкус сè уште
              постои – само треба да се најде на вистинското место бидејќи не за
              џабе гевгеличани велат
              <i>
                <strong> Епа стварно сте ВКУС пет плус!</strong>
              </i>
            </p>
          </div>
          <div className="image-content">
            <img
              src={imagesss}
              alt="Our humble beginnings"
              className="vintage-photo"
            />
          </div>
        </section>

        <section className="values-section">
          <h2 className="section-title">Нашите вредности</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🥐</div>
              <h3>Традиционални рецепти</h3>
              <p>
                Рецепти и методи менувани и тестирани низ годините искуство на
                нашите мајстори
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">🌱</div>
              <h3>Свежи локални состојки</h3>
              <p>
                Избрани со големо внимание, со фокус на гевегелискиот регион
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">❤️</div>
              <h3>Направено со љубов</h3>
              <p>Секој залак е своја приказна - дојди и увери се!</p>
            </div>
          </div>
        </section>

        <section className="location-section">
          <h2 className="section-title">
            Нашата Локација - ул. Слободан Митров Данко, бр. 95 Гевгелија
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

export default About;
