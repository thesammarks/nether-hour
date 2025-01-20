import BandMemberCards from "./BandMemberCards";
import styles from "./About.module.scss";

export default function About() {
    return (
        <div id="about" className={styles.container}>
            <div className={styles.title}>Nether Hour</div>
            <BandMemberCards />
        </div>
    );
}
