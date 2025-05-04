import React from "react";
import "./Menu.css";

import burekMeso from "./../../../public/burekm.png";
import picaSendv from "./../../../public/picasendv.png";
import vrtena from "./../../../public/vrtena.png";
import sirenjak from "./../../../public/sirenjak.png";
import picaparce from "./../../../public/picaparc.png";
import krofni from "./../../../public/krofni1.png";
import tost from "./../../../public/tost2.png";
import banici from "./../../../public/miks-banici.png";
import voda from "./../../../public/voda-izvorska.png";
import drinks from "./../../../public/drinks.png";
import jogurt from "./../../../public/jogutt500ml.png";
import jogchaskaBuc from "./../../../public/jogurt-180.png";
import jogchaskaKorab from "./../../../public/jogurtkorab.png";
import panceroti from "./../../../public/panceroti.png";
import pastrm from "./../../../public/pastrmajlii.png";
import picab from "./../../../public/picab.png";
import posno from "./../../../public/posno.png";
import burekSir from "./../../../public/sirenje.png";
import fsirenjak from "./../../../public/fsirenjak.png";
import fpica from "./../../../public/fpica.png";

const Menu = () => {
  const menuItems = [
    {
      category: "БУРЕК",
      items: [
        {
          name: "Бурек со месо",
          desc: "",
          image: burekMeso,
        },
        {
          name: "Бурек со сирење",
          desc: "",
          image: burekSir,
        },
        {
          name: "Пица бурек",
          desc: "",
          image: picab,
        },
        {
          name: "Вртена баница со спанаќ и сирење",
          desc: "",
          image: vrtena,
        },
        {
          name: "Вртена баница со спанаќ",
          desc: "ПОСНО",
          image: posno,
        },
      ],
    },
    {
      category: "Други специјалитети",
      items: [
        {
          name: "Пица Парче",
          desc: "шунка, кашкавал, печурки, доматно пире",
          image: picaparce,
        },
        {
          name: "Сирењак парче",
          desc: "сирење, пиперка, домат, маслинки, кашкавал",
          image: sirenjak,
        },
        {
          name: "Панцерота",
          desc: "шунка, кашкавал, печурки, доматно пире",
          image: panceroti,
        },
        {
          name: "Пилешка пастрмајлија",
          desc: "пилешки стек, мајонез, кашкавал",
          image: pastrm,
        },
        {
          name: "Тост",
          desc: "шунка, кашкавал",
          image: tost,
        },
        {
          name: "Пица сендвич",
          desc: "шунка, кашкавал, доматно пире, печурки",
          image: picaSendv,
        },
        {
          name: "Крофни",
          desc: "чоколадни, мармалад",
          image: krofni,
        },
      ],
    },
    {
      category: "Пијалоци",
      items: [
        {
          name: "Јогурт 0.180 мл",
          desc: "Кораб",
          image: jogchaskaKorab,
        },
        {
          name: "Јогурт 0.180 мл",
          desc: "Бучен Козјак",
          image: jogchaskaBuc,
        },
        {
          name: "Јогурт 500 мл",
          desc: "Бучен Козјак",
          image: jogurt,
        },
        {
          name: "Сок",
          desc: "кока-кола, фанта, швепс",
          image: drinks,
        },
        {
          name: "Негазирана Вода",
          desc: "",
          image: voda,
        },
      ],
    },
    {
      category: "По нарачка - за прослави / родендени",
      items: [
        {
          name: "Вртена баница",
          desc: "месо/сирење/пица/спанаќ/сирење и спанаќ",
          image: banici,
        },
        {
          name: "Фамилијарна пица",
          desc: "шунка, кашкавал, печурки, доматно пире / 6 големи правоаголни парчиња / 18 помали парчиња",
          image: fpica,
        },
        {
          name: "Фамилијарен сирењак",
          desc: "сирење, пиперка, домат, маслинки, кашкавал / 6 големи правоаголни парчиња / 18 помали парчиња",
          image: fsirenjak,
        },
      ],
    },
  ];

  return (
    <div className="menu-container">
      {menuItems.map((section, index) => (
        <section key={index} className="menu-section">
          <h2 className="section-title">{section.category}</h2>
          <ul className="menu-items">
            {section.items.map((item, idx) => (
              <li key={idx} className="menu-item">
                <div className="item-image">
                  <img src={item.image} alt={item.name} loading="lazy" />
                </div>
                <div className="item-content">
                  <div className="item-header">
                    <h3 className="item-name">
                      {item.name}
                      {item.desc.includes("ПОСНО") && (
                        <span className="veg-indicator">🌱</span>
                      )}
                    </h3>
                    {item.price && (
                      <span className="item-price">{item.price}</span>
                    )}
                  </div>
                  {/* {item.desc && <p className="item-desc">{item.desc}</p>} */}
                  {item.desc && item.desc.includes("ПОСНО") ? (
                    <p className="item-desc-tag">{item.desc}</p>
                  ) : (
                    <p className="item-desc">{item.desc}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
};

export default Menu;
