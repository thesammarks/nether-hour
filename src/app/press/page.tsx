import React from "react";
import NhPageLink from "@/app/components/NhPageLink";
import Footer from "@/app/components/Footer";
import Press from "@/app/press/Press";
import Nav from "@/app/components/Nav/Nav";

export default function Home() {
    return (
        <main className="
            min-h-screen pb-10 w-full
            text-neutral-200 bg-neutral-900
            flex flex-col justify-center items-center
            pt-[125px] min-[880px]:pt-[75px]
        ">
            <Nav />
            <NhPageLink />
            <Press />
            <Footer />
        </main>
    );
}
