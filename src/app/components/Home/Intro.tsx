import BandMemberCards from "./BandMemberCards";
import Link from "next/link";
import styles from "./Home.module.scss";
import pageTemplateStyles from "@/app/PageTemplate.module.scss"

export default function Intro() {
    return (
        <div id="nether-hour" className={styles.contentItemContainer}>
            <div className={pageTemplateStyles.title}>Nether Hour</div>
            <BandMemberCards />
            <Link href={`/about`} className={styles.contentItemLink}>About Nether Hour</Link>
        </div>
    );
}
