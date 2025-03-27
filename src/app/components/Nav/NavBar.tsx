'use client'

import Link from "next/link";
import LinkNewTab from "@/app/components/LinkNewTab";
import {useViewportSize} from "@mantine/hooks";

export default function NavBar() {
    const navLinkClassName = "px-2 py-1 rounded-lg lg:hover:bg-red-500 transition-all duration-300 ease-in-out";
    const { width } = useViewportSize();

    return (
        <div className="
            fixed top-0
            z-50 w-full h-[50px]
            flex items-center justify-center gap-4 max-sm:gap-2
            tracking-wide text-neutral-300
            bg-neutral-900 border-b-2 border-neutral-200
            font-extrabold text-sm
        ">
            <Link className={`${navLinkClassName} max-[500px]:hidden`} href="/">HOME</Link>
            <Link className={`${navLinkClassName} text-red-500 lg:hover:text-neutral-300`} href="/moonshine">{width < 400 ? "NEW" : "NEW RELEASE"}</Link>
            <Link className={`${navLinkClassName} max-[700px]:hidden`} href="/about">ABOUT</Link>
            <Link className={navLinkClassName} href="/tour">TOUR</Link>
            <Link className={`${navLinkClassName} max-[600px]:hidden`} href="/press">PRESS</Link>
            <Link className={`${navLinkClassName} hidden`} href="/#watch">WATCH</Link>
            <Link className={`${navLinkClassName} hidden`} href="/#listen">LISTEN</Link>
            <Link className={navLinkClassName} href="/shop" target="_blank" rel="noopener noreferrer">STORE</Link>
            <LinkNewTab className={`${navLinkClassName} max-[800px]:hidden`} url={`mailto:${process.env.nh_email as string}`}>CONTACT</LinkNewTab>
        </div>
    );
}
