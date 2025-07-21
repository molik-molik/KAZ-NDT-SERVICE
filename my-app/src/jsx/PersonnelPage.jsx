import React from "react";
import { Link } from "react-router-dom";
import "../css/personnel-page.css";
import "../css/style.css";
import { useTranslation } from "react-i18next";
import { Trans } from 'react-i18next';


const PersonnelPage = () => {
    const {t} = useTranslation();
    return (
        <div className="personnel-container">
            <div className="personnel">
                <h2 className="personnel-title">{t("personnel.title")}</h2>
                <ul className="personnel-list">
                    <li>{t("personnel.point1")}</li>
                    <li>{t("personnel.point2")}</li>
                    <li>{t("personnel.point3")}</li>
                    <li>{t("personnel.point4")}</li>
                    <li>{t("personnel.point5")}</li>
                    <li>{t("personnel.point6")}</li>
                </ul>
            </div>
        </div>
    );
}

export default PersonnelPage;
