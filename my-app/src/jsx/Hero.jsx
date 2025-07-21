import React from "react";
import { Link } from "react-router-dom";
import "../css/hero.css";
import "../css/style.css";
import { useTranslation } from "react-i18next";
import { Trans } from 'react-i18next';

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="hero">
      <div className="hero-content">
        <h3><Trans i18nKey="hero.companyName" /></h3>
        <ul>
            <li>{t("hero.desc1")}
            </li>
            <li>{t("hero.desc2")}
            </li>
            <li>{t("hero.desc3")}
            </li>
            <li>{t("hero.desc4")}
            </li>
        </ul>
        <Link to="/about" className="hero-button">
          {t("hero.aboutButton")}
        </Link>
      </div>
    </section>
  );
}

export default HeroSection;



