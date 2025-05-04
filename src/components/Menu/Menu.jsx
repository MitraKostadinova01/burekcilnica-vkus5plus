import React, { useEffect } from "react";
import "./Menu.css";

const Menu = () => {
  const menuItems = [
    {
      category: "БУРЕК",
      items: [
        {
          name: "Бурек со месо",
          desc: "",
          image: "/images/burekm.png",
        },
        {
          name: "Бурек со сирење",
          desc: "",
          image: "/images/sirenje.png",
        },
        {
          name: "Пица бурек",
          desc: "",
          image: "/images/picab.png",
        },
        {
          name: "Вртена баница со спанаќ и сирење",
          desc: "",
          image: "/images/vrtena.png",
        },
        {
          name: "Вртена баница со спанаќ",
          desc: "ПОСНО",
          image: "/images/posno.png",
        },
      ],
    },
    {
      category: "Други специјалитети",
      items: [
        {
          name: "Пица Парче",
          desc: "шунка, кашкавал, печурки, доматно пире",
          image: "/images/picaparc.png",
        },
        {
          name: "Сирењак парче",
          desc: "сирење, пиперка, домат, маслинки, кашкавал",
          image: "/images/sirenjak.png",
        },
        {
          name: "Панцерота",
          desc: "шунка, кашкавал, печурки, доматно пире",
          image: "/images/panceroti.png",
        },
        {
          name: "Пилешка пастрмајлија",
          desc: "пилешки стек, мајонез, кашкавал",
          image: "/images/pastrmajlii.png",
        },
        {
          name: "Тост",
          desc: "шунка, кашкавал",
          image: "/images/tost2.png",
        },
        {
          name: "Пица сендвич",
          desc: "шунка, кашкавал, доматно пире, печурки",
          image: "/images/picasendv.png",
        },
        {
          name: "Крофни",
          desc: "чоколадни, мармалад",
          image: "/images/krofni1.png",
        },
      ],
    },
    {
      category: "Пијалоци",
      items: [
        {
          name: "Јогурт 0.180 мл",
          desc: "Кораб",
          image: "/images/jogurtkorab.png",
        },
        {
          name: "Јогурт 0.180 мл",
          desc: "Бучен Козјак",
          image: "/images/jogurt-180.png",
        },
        {
          name: "Јогурт 500 мл",
          desc: "Бучен Козјак",
          image: "/images/jogutt500ml.png",
        },
        {
          name: "Сок",
          desc: "кока-кола, фанта, швепс",
          image: "/images/drinks.png",
        },
        {
          name: "Негазирана Вода",
          desc: "",
          image: "/images/voda-izvorska.png",
        },
      ],
    },
    {
      category: "По нарачка - за прослави / родендени",
      items: [
        {
          name: "Вртена баница",
          desc: "месо/сирење/пица/спанаќ/сирење и спанаќ",
          image: "/images/miks-banici.png",
        },
        {
          name: "Фамилијарна пица",
          desc: "шунка, кашкавал, печурки, доматно пире / 6 големи правоаголни парчиња / 18 помали парчиња",
          image: "/images/fpica.png",
        },
        {
          name: "Фамилијарен сирењак",
          desc: "сирење, пиперка, домат, маслинки, кашкавал / 6 големи правоаголни парчиња / 18 помали парчиња",
          image: "/images/fsirenjak.png",
        },
      ],
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="menu-container">
      {menuItems.map((section, index) => (
        <section key={index} className="menu-section">
          <h2 className="section-title">{section.category}</h2>
          <ul className="menu-items">
            {section.items.map((item, idx) => (
              <li key={idx} className="menu-item">
                <div className="item-image">
                  {/* <img src={item.image} alt={item.name} loading="lazy" /> */}
                  <img src={item.image} alt={item.name} loading="eager" />
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
