import SocialIcons from "@/app/components/SocialIcons";
import NhLogo from "@/app/components/NhLogo";
import VideoBkgd from "@/app/components/VideoBkgd";
import ScrollIcon from "@/app/components/ScrollIcon";
import Listen from "@/app/components/Listen/Listen";
import About from "@/app/components/About/About";
import React from "react";
import Tour from "@/app/components/Tour/Tour";
import Nav from "@/app/components/Nav";
import Watch from "@/app/components/Watch/Watch";
import styles from "./Home.module.scss";

export default function Home() {
    return (
        <main className={styles.main}>
            <VideoBkgd />
            <Nav />
            <SocialIcons />
            <NhLogo />
            <ScrollIcon />

            <div className={styles.content}>
                <About />
                <Tour />
                <Watch />
                <Listen />

                <footer className={styles.footer}>
                    <span>© 2024 Nether Family Records | </span>
                    <span>
                        website by&nbsp;
                        <b>
                            <a
                                className={styles.footerLink}
                                href="https://justcallmesam.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                sam
                            </a>
                        </b>
                    </span>
                </footer>
            </div>
        </main>
    );
}
