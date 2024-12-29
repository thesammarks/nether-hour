import SocialIcons from "./components/SocialIcons";
import NhLogo from "./components/NhLogo";
import VideoBkgd from "./components/VideoBkgd";
import ScrollIcon from "./components/ScrollIcon";
import ListenNow from "./components/ListenNow/ListenNow";
import TheBand from "./components/TheBand/TheBand";
import React from "react";
import UpcomingShows from "./components/UpcomingShows/UpcomingShows";

export default function Home() {  
  return (
    <main className="min-h-screen bg-black text-nh-white flex justify-center items-center">
      <VideoBkgd />
      <SocialIcons />
      <NhLogo />
      <ScrollIcon />

      <div className="relative bg-black w-full top-[110vh] flex flex-col items-center gap-10 z-20 pb-16">
        <UpcomingShows />
        <TheBand />
        <ListenNow />

        <footer className="flex text-xs">
          © 2024 Nether Family Records | Website by&nbsp;<b><a className="text-[#f40e2d]" href="https://justcallmesam.com/" target="_blank" rel="noopener noreferrer">sam</a></b>
        </footer>
      </div>
    </main>
  );
}
