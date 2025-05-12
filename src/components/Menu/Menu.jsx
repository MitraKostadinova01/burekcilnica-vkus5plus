import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./Menu.css";

const Menu = () => {
  const { t } = useTranslation();

  const menuItems = [
    {
      category: "menu.categories.burek",
      items: [
        {
          name: "menu.items.burek.meat.name",
          desc: "menu.items.burek.meat.desc",
          image: "/images/burekm.png",
        },
        {
          name: "menu.items.burek.cheese.name",
          desc: "menu.items.burek.cheese.desc",
          image: "/images/sirenje.png",
        },
        {
          name: "menu.items.burek.pizza.name",
          desc: "menu.items.burek.pizza.desc",
          image: "/images/picab.png",
        },
        {
          name: "menu.items.burek.spinach_cheese.name",
          desc: "menu.items.burek.spinach_cheese.desc",
          image: "/images/vrtena.png",
        },
        {
          name: "menu.items.burek.spinach.name",
          desc: "menu.tags.vegetarian",
          image: "/images/posno.png",
          veg: true,
        },
      ],
    },
    {
      category: "menu.categories.specialties",
      items: [
        {
          name: "menu.items.specialties.pizza_slice.name",
          desc: "menu.items.specialties.pizza_slice.desc",
          image: "/images/picaparc.png",
        },
        {
          name: "menu.items.specialties.cheese_pie.name",
          desc: "menu.items.specialties.cheese_pie.desc",
          image: "/images/sirenjak.png",
        },
        {
          name: "menu.items.specialties.panzerotti.name",
          desc: "menu.items.specialties.panzerotti.desc",
          image: "/images/panceroti.png",
        },
        {
          name: "menu.items.specialties.chicken_pastrmajlija.name",
          desc: "menu.items.specialties.chicken_pastrmajlija.desc",
          image: "/images/pastrmajlii.png",
        },
        {
          name: "menu.items.specialties.toast.name",
          desc: "menu.items.specialties.toast.desc",
          image: "/images/tost2.png",
        },
        {
          name: "menu.items.specialties.pizza_sandwich.name",
          desc: "menu.items.specialties.pizza_sandwich.desc",
          image: "/images/picasendv.png",
        },
        {
          name: "menu.items.specialties.donuts.name",
          desc: "menu.items.specialties.donuts.desc",
          image: "/images/krofni1.png",
        },
      ],
    },
    {
      category: "menu.categories.drinks",
      items: [
        {
          name: "menu.items.drinks.yogurt_korab.name",
          desc: "menu.items.drinks.yogurt_korab.desc",
          image: "/images/jogurtkorab.png",
        },
        {
          name: "menu.items.drinks.yogurt_kozyak_small.name",
          desc: "menu.items.drinks.yogurt_kozyak_small.desc",
          image: "/images/jogurt-180.png",
        },
        {
          name: "menu.items.drinks.yogurt_kozyak_large.name",
          desc: "menu.items.drinks.yogurt_kozyak_large.desc",
          image: "/images/jogutt500ml.png",
        },
        {
          name: "menu.items.drinks.juices.name",
          desc: "menu.items.drinks.juices.desc",
          image: "/images/drinks.png",
        },
        {
          name: "menu.items.drinks.water.name",
          desc: "menu.items.drinks.water.desc",
          image: "/images/voda-izvorska.png",
        },
      ],
    },
    {
      category: "menu.categories.custom_orders",
      items: [
        {
          name: "menu.items.custom.rolled_pie.name",
          desc: "menu.items.custom.rolled_pie.desc",
          image: "/images/miks-banici.png",
        },
        {
          name: "menu.items.custom.family_pizza.name",
          desc: "menu.items.custom.family_pizza.desc",
          image: "/images/fpica.png",
        },
        {
          name: "menu.items.custom.family_cheese_pie.name",
          desc: "menu.items.custom.family_cheese_pie.desc",
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
          <h2 className="section-title">{t(section.category)}</h2>
          <ul className="menu-items">
            {section.items.map((item, idx) => (
              <li key={idx} className="menu-item">
                <div className="item-image">
                  <img src={item.image} alt={t(item.name)} loading="eager" />
                </div>
                <div className="item-content">
                  <div className="item-header">
                    <h3 className="item-name">
                      {t(item.name)}
                      {item.veg && <span className="veg-indicator">🌱</span>}
                    </h3>
                  </div>
                  {item.desc && <p className="item-desc">{t(item.desc)}</p>}
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
