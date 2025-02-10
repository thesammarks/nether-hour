import SpotifyLinkCards from "./SpotifyLinkCards";
import styles from "./Home.module.scss";

export default function Listen() {
    return (
        <div id="listen" className={styles.contentItemContainer}>
            <div className={styles.contentItemTitle}>Listen Now</div>
            <SpotifyLinkCards/>
        </div>
    );
}
