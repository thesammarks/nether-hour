import NhLogo from "@/app/components/NhLogo";
import VideoBkgd from "@/app/components/VideoBkgd";
import ScrollIcon from "@/app/components/ScrollIcon";
import Listen from "@/app/components/Home/Listen";
import Intro from "@/app/components/Home/Intro";
import React from "react";
import TourPreview from "@/app/components/Home/TourPreview";
import Footer from "@/app/components/Footer";
import Nav from "@/app/components/Nav/Nav";
import Watch from "@/app/components/Home/Watch";
import styles from "./components/Home/Home.module.scss";

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

                <div className={`my-8`}>
                    <Footer />
                </div>
            </div>
        </main>
    );
}
