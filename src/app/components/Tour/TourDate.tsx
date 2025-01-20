'use client';

import {Card} from "@mantine/core";
import styles from "./TourDate.module.scss";

interface TourDateProps {
    date: string;
    city: string;
    venue: string;
    url: string;
}

export default function TourDate(props: TourDateProps) {
    return (
        <Card
            className={styles.card}
            shadow="sm"
            padding="lg"
            radius="lg"
            onClick={() => window.open(props.url, '_blank')}
        >
            <div className={styles.container}>
                <div className={styles.details}>
                    <span className={styles.date}>{props.date}</span>
                    <div className={styles.cityVenue}>
                        <span className={styles.city}>{props.city}</span>
                        <span className={styles.venue}>{props.venue}</span>
                    </div>
                </div>
                <div className={styles.tickets}>Tickets</div>
            </div>
        </Card>
    );
}
