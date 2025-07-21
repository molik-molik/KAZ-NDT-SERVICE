import React from "react";
import { Link } from "react-router-dom";
import "../css/services-page.css";
import "../css/style.css";
import { useTranslation } from "react-i18next";
import { Trans } from 'react-i18next';


const ServicesPage = () => {
    const { t } = useTranslation();

    return (
        <div className="services-container">
            <div className="services">
                <h2 className="services-title">{t("services.title")}</h2>
                <p className="desc1">{t("services.desc1")}</p>
                <p className="desc2">{t("services.desc2")}</p>
            </div>
            <table className="services-table">
                <thead>
                    <tr>
                    <th>{t("services.number")}</th>
                    <th>{t("services.name")}</th>
                    <th>{t("services.equipment")}</th>
                    <th>{t("services.amount")}</th>
                    </tr>
                </thead>
                <tbody>
                    {[...Array(13)].map((_, i) => (
                    <tr key={i}>
                        <th>{t(`services.number${i + 1}`)}</th>
                        <th>{t(`services.name${i + 1}`)}</th>
                        <th>{t(`services.equipment${i + 1}`)}</th>
                        <th>{t(`services.amount${i + 1}`)}</th>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ServicesPage;
