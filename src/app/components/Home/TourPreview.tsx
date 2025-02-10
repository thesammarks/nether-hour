import TourDates from "@/app/tour/TourDates";
import Link from "next/link";
import styles from "./Home.module.scss";

export default function TourPreview() {
    return (
        <div className={styles.contentItemContainer}>
            <div className={styles.contentItemTitle}>Tour Dates</div>
            <TourDates />
            <Link href={`/tour`} className={styles.contentItemLink}>See all dates</Link>
        </div>
    );
}
