import React from "react";
import TourDates from "@/app/tour/TourDates";
import styles from "./Tour.module.scss";
import pageTemplateStyles from "@/app/PageTemplate.module.scss";

export default function Tour() {
    return (
        <div className={styles.container}>
            <div className={pageTemplateStyles.title}>Tour</div>
            <TourDates />
        </div>
    );
}
