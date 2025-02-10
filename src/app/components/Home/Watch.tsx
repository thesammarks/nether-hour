import YtVideos from "./YtVideos";
import styles from "./Home.module.scss"

export default function Watch() {
    return (
        <div id="watch" className={styles.contentItemContainer}>
            <div className={styles.contentItemTitle}>Watch Now</div>
            <YtVideos/>
        </div>
    );
}
