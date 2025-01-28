import React from "react";
import styles from "./Tour.module.scss";
import TourDates from "@/app/tour/TourDates";

export default function Tour() {
    return (
        <div className={styles.container}>
            <div className={styles.title}>TOUR</div>
            <TourDates />
        </div>
    );
}
