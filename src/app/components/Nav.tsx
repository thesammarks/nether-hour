import styles from "./Nav.module.scss";

export default function Nav() {
    return (
        <div className={styles.navContainer}>
            <a className={styles.navLink} href="#about">ABOUT</a>
            <a className={styles.navLink} href="#tour">TOUR</a>
            <a className={styles.navLink} href="#watch">WATCH</a>
            <a className={styles.navLink} href="#listen">LISTEN</a>
            <a
                className={styles.navLink}
                target="_blank"
                rel="noopener noreferrer"
                href="mailto:netherhour@gmail.com"
            >
                CONTACT
            </a>
        </div>
    );
}
