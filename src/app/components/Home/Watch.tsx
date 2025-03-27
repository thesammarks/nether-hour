import YtVideos from "./YtVideos";
import styles from "./Home.module.scss"
import pageTemplateStyles from "@/app/PageTemplate.module.scss"

export default function Watch() {
    return (
        <div id="watch" className={styles.contentItemContainer}>
            <div className={pageTemplateStyles.title}>Watch Now</div>
            <YtVideos/>
        </div>
    );
}
