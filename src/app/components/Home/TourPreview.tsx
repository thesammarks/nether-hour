import TourDates from "@/app/tour/TourDates";
import Link from "next/link";
import styles from "./Home.module.scss";
import pageTemplateStyles from "@/app/PageTemplate.module.scss"

export default function TourPreview() {
    return (
        <div className={styles.contentItemContainer}>
            <div className={pageTemplateStyles.title}>Tour Dates</div>
            <TourDates />
            <Link href={`/tour`} className={styles.contentItemLink}>See all dates</Link>
        </div>
    );
}
