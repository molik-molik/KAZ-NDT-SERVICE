import React from "react";
import { Link } from "react-router-dom";
import "../css/about-page.css";
import "../css/style.css";
import { useTranslation } from "react-i18next";
import { Trans } from 'react-i18next';

const AboutPage = () => {
    const { t } = useTranslation();

    return (
        <div className="about-container">
            <div className="about">
                <h2 className="about-title">{t("about.title")}</h2>
                <ul className="about-list">
                    <li>{t("about.point1")}</li><br/>
                    <li>{t("about.point2")}</li><br/>
                    <li>{t("about.point3")}</li><br/>
                    <li>{t("about.point4")}</li>
                </ul>
            </div>

            <div className="field-of-expertise">
                <h2 className="expertise-title">{t("about.expertiseTitle")}</h2>
                <p className="expertise-description">{t("about.expertiseDescription")}</p>
                <ul className="expertise-list">
                    <li>{t("about.expertisePoint1")}</li>
                    <li>{t("about.expertisePoint2")}</li>
                    <li>{t("about.expertisePoint3")}</li>
                </ul>
            </div> 

            <div className="equipment">
                <h2 className="equipment-title">{t("about.equipmentTitle")}</h2>
                <p className="equipment-description">{t("about.equipmentDescription1")}</p>
                <p className="equipment-description">{t("about.equipmentDescription2")}</p>
                <ul className="equipment-list">
                    <li>{t("about.equipmentPoint1")}</li>
                    <li>{t("about.equipmentPoint2")}</li>
                    <li>{t("about.equipmentPoint3")}</li>
                    <li>{t("about.equipmentPoint4")}</li>
                    <li>{t("about.equipmentPoint5")}</li>
                    <li>{t("about.equipmentPoint6")}</li>
                    <li>{t("about.equipmentPoint7")}</li>
                    <li>{t("about.equipmentPoint8")}</li>
                    <li>{t("about.equipmentPoint9")}</li>
                </ul>
                <br/>
                <br/>
                <p className="labs-description">{t("about.labsDescription")}</p>
                <ul className="labs-list">
                    <li>{t("about.labPoint1")}</li>
                    <li>{t("about.labPoint2")}</li>
                    <li>{t("about.labPoint3")}</li>
                    <li>{t("about.labPoint4")}</li>
                    <li>{t("about.labPoint5")}</li>
                    <li>{t("about.labPoint6")}</li>
                    <li>{t("about.labPoint7")}</li>
                    <li>{t("about.labPoint8")}</li>
                    <li>{t("about.labPoint9")}</li>
                </ul>
            </div>
        </div> 
    );
}

export default AboutPage;
