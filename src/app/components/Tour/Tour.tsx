import TourDates from "./TourDates";
import styles from "./Tour.module.scss";

export default function Tour() {
    return (
        <div id="tour" className={styles.container}>
            <div className={styles.title}>Tour Dates</div>
            <TourDates />
        </div>
    );
}
