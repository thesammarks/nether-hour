import SocialIcons from "@/app/components/SocialIcons";
import NhLogo from "@/app/components/NhLogo";
import VideoBkgd from "@/app/components/VideoBkgd";
import ScrollIcon from "@/app/components/ScrollIcon";
import Listen from "@/app/components/Listen/Listen";
import TheBand from "@/app/components/TheBand/TheBand";
import React from "react";
import Tour from "@/app/components/Tour/Tour";
import Nav from "@/app/components/Nav";
import Watch from "@/app/components/Watch/Watch";

export default function Home() {
    return (
        <main className="min-h-screen bg-black text-neutral-200 flex justify-center items-center">
            <VideoBkgd />
            <Nav />
            <SocialIcons />
            <NhLogo />
            <ScrollIcon />

            <div className="z-20 relative bg-black w-full top-[100vh] flex flex-col items-center gap-5 pb-16">
                <TheBand />
                <Tour />
                <Watch />
                <Listen />

                <footer className="pt-10 max-w-[80%] text-center">
                    <span>© 2024 Nether Family Records | </span>
                    <span>
                        website by&nbsp;
                        <b>
                            <a
                                className="text-[#f40e2d]"
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
