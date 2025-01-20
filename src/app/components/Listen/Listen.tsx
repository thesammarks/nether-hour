import SpotifyLinkCards from "./SpotifyLinkCards";
import styles from "./Listen.module.scss";

export default function Listen() {
    return (
        <div id="listen" className={styles.container}>
            <div className={styles.title}>Listen Now</div>
            <SpotifyLinkCards />
        </div>
    );
}
