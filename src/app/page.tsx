import NhLogo from "@/app/components/NhLogo";
import VideoBkgd from "@/app/components/VideoBkgd";
import ScrollIcon from "@/app/components/ScrollIcon";
import Listen from "@/app/components/Listen/Listen";
import About from "@/app/components/About/About";
import React from "react";
import Tour from "@/app/components/Tour/Tour";
import Footer from "@/app/components/Footer";
import Nav from "@/app/components/Nav/Nav";
import Watch from "@/app/components/Watch/Watch";
import styles from "./Home.module.scss";

export default function Home() {
    return (
        <main className={styles.container}>
            <VideoBkgd />
            <Nav />
            <NhLogo />
            <ScrollIcon />

            <div className={styles.content}>
                <About />
                <Tour />
                <Watch />
                <Listen />
                <Footer />
            </div>
        </main>
    );
}
