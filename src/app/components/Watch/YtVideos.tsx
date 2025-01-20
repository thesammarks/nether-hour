import YtVideo from "./YtVideo";
import styles from "./YtVideos.module.scss";

export default function YtVideos() {
    return (
        <div className={styles.container}>
            <YtVideo ytId="RP2C4aKWtXc" />
            <YtVideo ytId="f4IX070ZQf8" />
            <YtVideo ytId="C07McuC-kEc" />
            <YtVideo ytId="uy0YU72qSkg" />
        </div>
    );
}
