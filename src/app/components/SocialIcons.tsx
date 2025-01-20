'use client'

import React, {useEffect, useRef} from 'react'
import {SocialIcon} from 'react-social-icons'
import {Burger} from "@mantine/core";
import {useDisclosure} from "@mantine/hooks";
import {IconBrandFacebook, IconBrandX} from "@tabler/icons-react";

export default function SocialIcons() {
    const [opened, { toggle, close }] = useDisclosure();
    const navRef = useRef<HTMLDivElement | null>(null);

    const iconProps = {
        className: `
            rounded-xl bg-neutral-300 text-neutral-800 
            lg:hover:bg-red-500 lg:hover:text-neutral-300 
            transition-all duration-300 ease-in-out
        `,
        target: "_blank",
        rel: "noopener noreferrer",
        bgColor: "transparent",
        fgColor: "currentColor",
    }

    useEffect(() => {
        const handleNavClose = (event: MouseEvent) => {
            if (navRef.current && !navRef.current.contains(event.target as Node)) {
                close();
            }
        };

        document.addEventListener('mousedown', handleNavClose);

        return () => {
            document.removeEventListener('mousedown', handleNavClose);
        };
    }, [close]);

    return (
        <div ref={navRef} className="z-50 absolute top-0 w-full flex flex-col text-neutral-300">
            <div
                className={` 
                    flex items-center justify-center gap-5
                    py-6 bg-neutral-900/90
                    max-[880px]:w-full
                    min-[880px]:fixed
                    min-[880px]:flex-col
                    min-[880px]:left-[-20px]
                    min-[880px]:px-4
                    min-[880px]:py-4
                    min-[880px]:pl-[35px]
                    min-[880px]:top-1/2
                    min-[880px]:transform
                    min-[880px]:-translate-y-1/2
                    min-[880px]:rounded-xl
            `}>
                <Burger
                    opened={opened}
                    onClick={toggle}
                    aria-label="Toggle navigation"
                    className="text-red-500 min-[880px]:hidden"
                />
                <SocialIcon
                    url="https://open.spotify.com/artist/7xFkiQ9B6WA6932TniPRGr"
                    {...iconProps}
                />
                <SocialIcon
                    network="itunes"
                    url="https://music.apple.com/us/artist/nether-hour/1544082556"
                    {...iconProps}
                />
                <SocialIcon
                    url="https://www.instagram.com/netherhour"
                    {...iconProps}
                />
                <SocialIcon
                    url="https://www.youtube.com/@netherhour"
                    {...iconProps}
                />
                <SocialIcon
                    url="https://x.com/NetherHour"
                    {...iconProps}
                    className={`max-sm:hidden ${iconProps.className}`}
                />
                <SocialIcon
                    url="https://www.facebook.com/thenetherhour"
                    {...iconProps}
                    className={`max-sm:hidden ${iconProps.className}`}
                />
            </div>

            {/* Navigation Links */}
            <div
                className={`
                    w-full pt-2 pb-6 absolute top-[98px]
                    flex justify-center items-start gap-10
                    bg-neutral-900/90 font-bold
                    transition-transform duration-300 ease-in-out
                    ${opened ? 'translate-y-0' : '-translate-y-[400px]'}
                    min-[880px]:hidden
                `}
            >
                <div className="flex flex-col items-center justify-center gap-6 border-r-2 pr-4">
                    <a className="w-full text-right" href="#about">ABOUT</a>
                    <a className="w-full text-right" href="#tour">TOUR</a>
                    <a className="w-full text-right" href="#watch">WATCH</a>
                    <a className="w-full text-right" href="#listen">LISTEN</a>
                    <a className="w-full text-right" href="mailto:netherhour@gmail.com" target="_blank" rel="noopener noreferrer">CONTACT</a>
                </div>

                <div className="flex items-center justify-center gap-4">
                    <a href="https://x.com/NetherHour" target="_blank" rel="noopener noreferrer">
                        <IconBrandX width={28} height={28}/>
                    </a>
                    <a href="https://www.facebook.com/thenetherhour" target="_blank" rel="noopener noreferrer">
                        <IconBrandFacebook width={28} height={28}/>
                    </a>
                </div>
            </div>
        </div>
    );
}
