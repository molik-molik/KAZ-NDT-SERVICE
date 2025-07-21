import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../css/header.css";
import logo from "../assets/images/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
    return () => {
      document.body.classList.remove("menu-open");
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleScrollToContacts = (e) => {
    e.preventDefault();
    const target = document.getElementById("contacts");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <header>
      <div className="language">
          <label htmlFor="language-selector" className="visually-hidden">Язык</label>
          <select
            id="language-selector"
            name="language"
            value={i18n.language}
            onChange={handleLanguageChange}
          >
            <option value="ru">RU</option>
            <option value="en">EN</option>
            <option value="kz">KZ</option>
          </select>
      </div>
      <div className="header-right">
        <nav id="nav-bar">
          <ul>
            <li>
              <a
                href="#contacts"
                onClick={handleScrollToContacts}
                style={{ cursor: "pointer", color: "inherit", textDecoration: "none" }}
              >
                {t('header.contacts')}
              </a>
            </li>
            <li><Link to="/personnel">{t('header.personnel')}</Link></li>
            <li><Link to="/services">{t('header.services')}</Link></li>
            <li><Link to="/about">{t('header.about')}</Link></li>
            <li><Link to="/">{t('header.home')}</Link></li>
          </ul>
        </nav>

        {/* Бургер и язык — мобильная версия */}
        <div className="mobile-controls" style={{ display: "flex", alignItems: "center" }}>
          <div className="mobile-language">
            <label htmlFor="language-selector-mobile" className="visually-hidden">Язык</label>
            <select
              id="language-selector-mobile"
              name="language-mobile"
              value={i18n.language}
              onChange={handleLanguageChange}
            >
              <option value="ru">RU</option>
              <option value="en">EN</option>
              <option value="kz">KZ</option>
            </select>
          </div>

          <div
            className={`burger-menu ${isMenuOpen ? "active" : ""}`}
            onClick={toggleMenu}
            aria-label="Меню"
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        {/* Мобильное меню */}
        <div className={`mobile-menu ${isMenuOpen ? "active" : ""}`}>
          <ul>
            <li><Link to="/" onClick={toggleMenu}>{t('header.home')}</Link></li>
            <li><Link to="/about" onClick={toggleMenu}>{t('header.about')}</Link></li>
            <li><Link to="/services" onClick={toggleMenu}>{t('header.services')}</Link></li>
            <li><Link to="/personnel" onClick={toggleMenu}>{t('header.personnel')}</Link></li>
            <li>
              <a
                href="#contacts"
                onClick={handleScrollToContacts}
                style={{ cursor: "pointer", color: "inherit", textDecoration: "none" }}
              >
                {t('header.contacts')}
              </a>
            </li>
            <li>
              <select
                id="language-selector-mobile"
                value={i18n.language}
                onChange={handleLanguageChange}
              >
                <option value="ru">RU</option>
                <option value="en">EN</option>
                <option value="kz">KZ</option>
              </select>
            </li>
          </ul>
        </div>

        {/* Оверлей */}
        <div
          className={`menu-overlay ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        />
      </div>

      <div id="logo">
            <Link to="/">
              <img src={logo} alt="Логотип" />
            </Link>
          </div>

    </header>
  );
}

export default Header;