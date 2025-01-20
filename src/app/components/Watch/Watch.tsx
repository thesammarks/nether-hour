import YtVideos from "./YtVideos";
import styles from "./Watch.module.scss";

export default function Watch() {
    return (
        <div id="watch" className={styles.container}>
            <div className={styles.title}>Watch Now</div>
            <YtVideos />
        </div>
    );
}
