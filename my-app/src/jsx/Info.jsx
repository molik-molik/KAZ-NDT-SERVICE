import React from "react";
import { Link } from "react-router-dom";
import "../css/info.css";
import "../css/style.css";
import { useTranslation } from "react-i18next";
import { Trans } from 'react-i18next';
import ndtImage from '../assets/images/ndt.png';



const Info = () => {
    const { t } = useTranslation();

    return (
        <section className="info">
            <div className="info-content">
                <p className="paragraph1">{t("info.about1")}</p>
                <ul>
                    <li>{t("info.line1")}</li>
                    <li>{t("info.line2")}</li>
                    <li>{t("info.line3")}</li>
                </ul>
                <div className="img-about2-block">
                    <div className="info-image">
                        <img src={ndtImage} alt="Info" />
                    </div>
                    <p className="paragraph2"><Trans i18nKey="info.about2" /></p>
                </div>
            </div>
        </section>
    );
}

export default Info;
