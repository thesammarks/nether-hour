import React from "react";
import LinkNewTab from "@/app/components/LinkNewTab";
import styles from "./Footer.module.scss";

export default function Footer() {
    return (
        <footer className={styles.container}>
            <span>© 2024 Nether Family Records</span>
            <span>
                Website by&nbsp;
                <b>
                    <LinkNewTab className={styles.authorLink} url={process.env.author_link as string}>
                        SAM
                    </LinkNewTab>
                </b>
            </span>
        </footer>
    );
}
