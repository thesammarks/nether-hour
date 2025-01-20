'use client';

import TourDate from "./TourDate";
import styles from "./TourDates.module.scss";

export default function TourDates() {
    return (
        <div className={styles.container}>
            <TourDate
                date="Fri, Jan 31"
                city="Boulder, CO"
                venue="Fox Theatre"
                url="https://www.eventticketscenter.com/nether-hour-boulder-01-31-2025/6784804/t"
            />
            <TourDate
                date="Sat, Feb 1"
                city="Fort Collins, CO"
                venue="Aggie Theatre"
                url="https://www.eventticketscenter.com/nether-hour-horse-bitch-fort-collins-02-01-2025/6783064/t"
            />
            <TourDate
                date="Fri, Jan 24"
                city="Houston, TX"
                venue="Continental Club"
                url="https://continental-club-houston.square.site/product/jan-24-2025-nether-hour-the-palisades/980"
            />
        </div>
    );
}
