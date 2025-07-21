import React from "react";
import { Link } from "react-router-dom";
import "../css/footer.css";
import "../css/style.css";
import { useTranslation } from "react-i18next";

import logo from "../assets/images/logo.png";
import WhatsappIcon from "../assets/images/whatsapp.webp";
import GmailIcon from "../assets/images/gmail.webp";
import OutlookIcon from "../assets/images/outlook.webp";
import { Trans } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer" id="contacts">
      <div className="footer-container">
        {/* Левая колонка: Логотип и описание */}
        <div className="footer-left">
          <img src={logo} alt={t("footer.logoAlt")} className="footer-logo" />
          <p className="footer-description">{t("footer.description")}</p>
          <div className="footer-line"></div>
        </div>

        {/* Центр: Часы работы */}
        <div className="footer-center">
          <h3 className="footer-title">{t("footer.workingHoursTitle")}</h3>
          <ul className="working-hours">
            <li>{t("footer.mon")}</li>
            <li>{t("footer.tue")}</li>
            <li>{t("footer.wed")}</li>
            <li>{t("footer.thu")}</li>
            <li>{t("footer.fri")}</li>
            <li>{t("footer.sat")}</li>
            <li>{t("footer.sun")}</li>
          </ul>
        </div>

        {/* Правая колонка: Контакты */}
        <div className="footer-right">
          <h3 className="footer-title">{t("footer.contactsTitle")}</h3>
          <p className="contact-item">📍 {t("footer.address")}</p>
          <p className="contact-item">
            📞 <Trans i18nKey="footer.phone" /> &nbsp;
            <a
              href="https://wa.me/77787778935"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-link"
            >
                +7 (778) 777 89 35;
              <img
                src={WhatsappIcon}
                alt="WhatsApp"
                className="whatsapp-icon"
              />
            </a>
          </p>

          <p className="contact-item">
            📧 Email:&nbsp;<br />
            <a href="mailto:office@qualtolab.com" className="email-link">
              office@qualtolab.com
            </a> <br />
            <a href="mailto:Kairov.56@mail.ru" className="email-link">
              Kairov.56@mail.ru
            </a>
            <span className="email-icons">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=office@qualtolab.com"
                target="_blank"
                rel="noopener noreferrer"
                title="Gmail"
              >
                <img src={GmailIcon} alt="Gmail" className="email-icon" />
              </a>
              <a
                href="https://outlook.live.com/owa/?path=/mail/action/compose&to=office@qualtolab.com"
                target="_blank"
                rel="noopener noreferrer"
                title="Outlook"
              >
                <img src={OutlookIcon} alt="Outlook" className="email-icon" />
              </a>
            </span>
          </p>
        </div>
        <div className="footer-map">
            <h3 className="map-title">Map</h3>
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d718.5694695784242!2d51.879820721564876!3d47.076371896237454!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41a3ebe985299bd1%3A0x7baccfc41c88ec93!2zM1ZHSCtGWFgsINCQ0YLRi9GA0LDRgw!5e0!3m2!1sru!2skz!4v1753116503696!5m2!1sru!2skz"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Наш адрес"
        ></iframe>
        </div>


      </div>

      <p className="footer-copy">{t("footer.copy")}</p>
    </footer>
  );
};

export default Footer;
