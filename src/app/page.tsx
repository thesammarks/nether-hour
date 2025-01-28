import NhLogo from "@/app/components/NhLogo";
import VideoBkgd from "@/app/components/VideoBkgd";
import ScrollIcon from "@/app/components/ScrollIcon";
import Listen from "@/app/components/Listen/Listen";
import Intro from "@/app/components/Intro/Intro";
import React from "react";
import TourPreview from "@/app/components/TourPreview/TourPreview";
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
                <Intro />
                <TourPreview />
                <Watch />
                <Listen />
                <Footer />
            </div>
        </main>
    );
}
