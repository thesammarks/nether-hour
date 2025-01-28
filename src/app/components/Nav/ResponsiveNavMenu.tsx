'use client'

import React, {useEffect, useRef} from 'react'
import {SocialIcon} from 'react-social-icons'
import {Burger} from "@mantine/core";
import {useDisclosure} from "@mantine/hooks";
import {
    IconBrandAppleFilled,
    IconBrandFacebook,
    IconBrandInstagramFilled,
    IconBrandSpotifyFilled,
    IconBrandX,
    IconBrandYoutubeFilled
} from "@tabler/icons-react";
import Link from "next/link";
import LinkNewTab from "@/app/components/LinkNewTab";

export default function ResponsiveNavMenu() {
    const [opened, { toggle, close }] = useDisclosure();
    const navMenuRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleNavMenuClose = (event: MouseEvent) => {
            if (navMenuRef.current && !navMenuRef.current.contains(event.target as Node)) {
                close();
            }
        };

        document.addEventListener('mousedown', handleNavMenuClose);

        return () => {
            document.removeEventListener('mousedown', handleNavMenuClose);
        };
    }, [close]);

    const iconProps = {
        className: `
            w-[52px] h-[52px] flex items-center justify-center
            rounded-xl bg-transparent text-neutral-300
            lg:hover:text-red-500
            transition-all duration-300 ease-in-out
            border-1.5 border-neutral-300
        `,
        target: "_blank",
        rel: "noopener noreferrer",
        bgColor: "transparent",
        fgColor: "currentColor",
    }

    return (
        <div ref={navMenuRef} className="z-50 fixed top-0 w-full flex flex-col text-neutral-300">
            <div
                className={`
                    z-50 w-full py-6 absolute top-0 text-neutral-300
                    flex justify-center items-start gap-4
                    bg-neutral-900 font-bold
                    transition-transform duration-300 ease-in-out
                    ${opened ? 'translate-y-0' : '-translate-y-full'}
                    min-[880px]:hidden
                    border-b-2 border-red-500
                `}
            >
                <Burger
                    opened={opened}
                    onClick={toggle}
                    aria-label="Toggle navigation"
                    className={`absolute left-10`}
                />
                <div className="flex flex-col items-center justify-center gap-6 border-r pr-5">
                    <Link className="w-full text-right" href="/" onClick={close}>HOME</Link>
                    <Link className="w-full text-right" href="/tour">TOUR</Link>
                    <Link className="w-full text-right" href="/#watch" onClick={close}>WATCH</Link>
                    <Link className="w-full text-right" href="/#listen" onClick={close}>LISTEN</Link>
                    <LinkNewTab className="w-full text-right" url="https://netherhour.shop/">SHOP</LinkNewTab>
                </div>
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-6">
                        <Link className="w-full" href="/about">ABOUT</Link>
                        <Link className="w-full" href="/press">PRESS</Link>
                        <LinkNewTab url={`mailto:${process.env.nh_email}`} className="w-full">CONTACT</LinkNewTab>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-4">
                        <div className="flex items-center justify-center gap-4">
                            <LinkNewTab url={process.env.nh_link_spotify as string}>
                                <IconBrandSpotifyFilled width={28} height={28}/>
                            </LinkNewTab>
                            <LinkNewTab url={process.env.nh_link_apple_music as string}>
                                <IconBrandAppleFilled width={28} height={28}/>
                            </LinkNewTab>
                            <LinkNewTab url={process.env.nh_link_instagram as string}>
                                <IconBrandInstagramFilled width={28} height={28}/>
                            </LinkNewTab>
                        </div>
                        <div className="flex items-center justify-center gap-4">
                            <LinkNewTab url={process.env.nh_link_youtube as string}>
                                <IconBrandYoutubeFilled width={28} height={28}/>
                            </LinkNewTab>
                            <LinkNewTab url={process.env.nh_link_x as string}>
                                <IconBrandX width={28} height={28}/>
                            </LinkNewTab>
                            <LinkNewTab url={process.env.nh_link_facebook as string}>
                                <IconBrandFacebook width={28} height={28}/>
                            </LinkNewTab>
                        </div>
                    </div>
                </div>
            </div>

            {/* Menu Toggle + Icons */}
            <div
                className={` 
                    flex items-center justify-center gap-1
                    bg-neutral-900 font-extrabold text-sm
                    border-b-2 border-neutral-300
                    max-[779px]:w-full 
                    max-[779px]:h-[50px]
                    min-[880px]:fixed 
                    min-[880px]:left-[-10px]
                    min-[880px]:p-2
                    min-[880px]:pl-[15px]
                    min-[880px]:pt-4
                    min-[880px]:top-1/2 
                    min-[880px]:transform 
                    min-[880px]:-translate-y-1/2
                    min-[880px]:flex-col 
                    min-[880px]:rounded-xl
                    min-[880px]:border-2
            `}>
                <Burger
                    opened={opened}
                    onClick={toggle}
                    aria-label="Toggle navigation"
                    className={`min-[880px]:hidden ${iconProps.className}`}
                />
                <SocialIcon url={process.env.nh_link_spotify} {...iconProps} />
                <SocialIcon url={process.env.nh_link_apple_music} {...iconProps} network="itunes"/>
                <SocialIcon url={process.env.nh_link_instagram} {...iconProps} />
                <SocialIcon url={process.env.nh_link_youtube} {...iconProps} />
                <SocialIcon url={process.env.nh_link_x}
                            {...iconProps} className={`max-sm:hidden ${iconProps.className}`}/>
                <SocialIcon url={process.env.nh_link_facebook}
                            {...iconProps} className={`max-sm:hidden ${iconProps.className}`}/>
            </div>
        </div>
    );
}
