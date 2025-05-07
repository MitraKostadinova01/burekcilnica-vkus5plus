import React, { useEffect } from "react";
import "./About.css";
import imagesss from "../../../public/images/beginings.png";
import ImageCarousel from "./../ImageCarousel/ImageCarousel.jsx";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="about-container">
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Нашата единствена продавница</h1>
          <p className="hero-subtitle">
            за традиционално вкусен бурек и пецива
          </p>
          <p className="hero-subtitle">
            ул. Слободан Митров Данко, бр. 95 Гевгелија
          </p>
        </div>
      </section>
      <br /> <br />
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
              Кај нас, ништо не е набрзина - секоја кора се влече прецизно и
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
        <br />
        <h2 className="section-title test">
          <span> Неколку препораки</span>
          <small className="small-text">
            кликни на објавата и заследи нè на инстаграм
          </small>
        </h2>
        <ImageCarousel />
        <br /> <br />
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
        <br />
      </div>
    </div>
  );
};

export default About;
