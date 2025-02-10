import React from "react";
import styles from "./Tour.module.scss";
import TourDates from "@/app/tour/TourDates";
import pageTemplateStyles from "@/app/PageTemplate.module.scss";

export default function Tour() {
    return (
        <div className={styles.container}>
            <div className={pageTemplateStyles.title}>TOUR</div>
            <TourDates />
        </div>
    );
}
