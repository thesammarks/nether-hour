import SpotifyLinkCards from "./SpotifyLinkCards";
import styles from "./Home.module.scss";
import pageTemplateStyles from "@/app/PageTemplate.module.scss"

export default function Listen() {
    return (
        <div id="listen" className={styles.contentItemContainer}>
            <div className={pageTemplateStyles.title}>Listen Now</div>
            <SpotifyLinkCards/>
        </div>
    );
}
