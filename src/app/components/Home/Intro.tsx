import BandMemberCards from "./BandMemberCards";
import Link from "next/link";
import styles from "./Home.module.scss";

export default function Intro() {
    return (
        <div id="nether-hour" className={styles.contentItemContainer}>
            <div className={styles.contentItemTitle}>Nether Hour</div>
            <BandMemberCards />
            <Link href={`/about`} className={styles.contentItemLink}>About Nether Hour</Link>
        </div>
    );
}
