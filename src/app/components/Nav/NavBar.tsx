import Link from "next/link";
import LinkNewTab from "@/app/components/LinkNewTab";

export default function NavBar() {
    const navLinkClassName = "px-2 py-1 rounded-lg lg:hover:bg-red-500 transition-all duration-300 ease-in-out";

    return (
        <div className="
            max-[880px]:hidden
            fixed top-0
            z-50 w-full h-[50px]
            flex items-center justify-center gap-5
            tracking-wide text-neutral-300
            bg-neutral-900 border-b-2 border-neutral-200
            font-extrabold text-sm
        ">
            <Link className={navLinkClassName} href="/">HOME</Link>
            <Link className={navLinkClassName} href="/about">ABOUT</Link>
            <Link className={navLinkClassName} href="/tour">TOUR</Link>
            <Link className={navLinkClassName} href="/press">PRESS</Link>
            <Link className={navLinkClassName} href="/#watch">WATCH</Link>
            <Link className={navLinkClassName} href="/#listen">LISTEN</Link>
            <LinkNewTab className={navLinkClassName} url="https://netherhour.shop/">STORE</LinkNewTab>
            <LinkNewTab className={navLinkClassName} url={`mailto:${process.env.nh_email as string}`}>CONTACT</LinkNewTab>
        </div>
    );
}
