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

export default function Home() {
    return (
        <main className="min-h-screen bg-black text-neutral-200 flex justify-center items-center">
            <VideoBkgd />
            <Nav />
            <NhLogo />
            <ScrollIcon />

            <div className="z-20 relative bg-black w-full top-[100vh] flex flex-col items-center gap-5 pb-16">
                <About />
                <Tour />
                <Watch />
                <Listen />
                <Footer />
            </div>
        </main>
    );
}
