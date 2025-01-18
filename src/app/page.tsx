import SocialIcons from "./components/SocialIcons";
import NhLogo from "./components/NhLogo";
import VideoBkgd from "./components/VideoBkgd";
import ScrollIcon from "./components/ScrollIcon";
import ListenNow from "./components/ListenNow/ListenNow";
import TheBand from "./components/TheBand/TheBand";
import React from "react";
import Tour from "@/app/components/Tour/Tour";
import Nav from "@/app/components/Nav";

export default function Home() {  
    return (
        <main className="min-h-screen bg-black text-neutral-200 flex justify-center items-center">
            <VideoBkgd />
            <Nav />
            <SocialIcons />
            <NhLogo />
            <ScrollIcon />

            <div className="z-20 relative bg-black w-full top-[100vh] flex flex-col items-center gap-5 pb-16">
                <Tour />
                <TheBand />
                <ListenNow />

                <footer className="flex">
                    © 2024 Nether Family Records | website by&nbsp;<b><a className="text-[#f40e2d]" href="https://justcallmesam.com" target="_blank" rel="noopener noreferrer">sam</a></b>
                </footer>
            </div>
        </main>
    );
}
