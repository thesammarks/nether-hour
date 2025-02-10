'use client'

import {Burger} from "@mantine/core";
import {useDisclosure} from "@mantine/hooks";
import LinkNewTab from "@/app/components/LinkNewTab";
import Link from "next/link";
import {
    IconBrandAppleFilled,
    IconBrandFacebook,
    IconBrandInstagramFilled,
    IconBrandSpotifyFilled,
    IconBrandX,
    IconBrandYoutubeFilled
} from "@tabler/icons-react";
import React from "react";
import NhPageLink from "@/app/components/NhPageLink";
import Footer from "@/app/components/Footer";
import styles from "./NavOverlay.module.scss"

export default function NavOverlay() {
    const [opened, { toggle, close }] = useDisclosure();

    return (
        <main className="absolute min-h-screen w-full text-neutral-300 text-nowrap">
            <div className={styles.burgerContainer}>
                <Burger
                    opened={opened}
                    onClick={toggle}
                    color="currentColor"
                    aria-label="Toggle navigation"
                    className={styles.burger}
                    lineSize={2}
                    size={`sm`}
                />
            </div>
            <div
                className={`
                    z-50 fixed min-h-screen w-full top-0
                    flex flex-col justify-start items-center gap-10
                    transition-transform duration-300 ease-in-out
                    ${opened ? 'translate-y-0' : '-translate-y-full'}
                    bg-neutral-900 overflow-scroll
                `}
            >
                <div className={`mt-[50px]`}></div>
                <NhPageLink/>
                <div className={`${styles.navLinks}`}>
                    <Link className={styles.navLink} href="/" onClick={close}>HOME</Link>
                    <Link className={styles.navLink} href="/tour">TOUR</Link>
                    <Link className={styles.navLink} href="/press">PRESS</Link>
                    <Link className={styles.navLink} href="/about">ABOUT</Link>
                    <Link className={styles.navLink} href="/#watch" onClick={close}>WATCH</Link>
                    <Link className={styles.navLink} href="/#listen" onClick={close}>LISTEN</Link>
                    <LinkNewTab className={styles.navLink} url="https://netherhour.shop/">SHOP</LinkNewTab>
                    <LinkNewTab className={styles.navLink} url={`mailto:${process.env.nh_email}`}>CONTACT</LinkNewTab>
                </div>
                <div className={styles.iconContainer}>
                    <div className={styles.iconRow}>
                        <LinkNewTab url={process.env.nh_link_spotify as string}>
                            <IconBrandSpotifyFilled width={32} height={32}/>
                        </LinkNewTab>
                        <LinkNewTab url={process.env.nh_link_apple_music as string}>
                            <IconBrandAppleFilled width={32} height={32}/>
                        </LinkNewTab>
                        <LinkNewTab url={process.env.nh_link_instagram as string}>
                            <IconBrandInstagramFilled width={32} height={32}/>
                        </LinkNewTab>
                    </div>
                    <div className={styles.iconRow}>
                        <LinkNewTab url={process.env.nh_link_youtube as string}>
                            <IconBrandYoutubeFilled width={32} height={32}/>
                        </LinkNewTab>
                        <LinkNewTab url={process.env.nh_link_x as string}>
                            <IconBrandX width={32} height={32}/>
                        </LinkNewTab>
                        <LinkNewTab url={process.env.nh_link_facebook as string}>
                            <IconBrandFacebook width={32} height={32}/>
                        </LinkNewTab>
                    </div>
                </div>
                <Footer />
            </div>
        </main>
    );
}
