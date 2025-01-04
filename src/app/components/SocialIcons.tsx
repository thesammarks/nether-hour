'use client'

import React from 'react'
import {SocialIcon} from 'react-social-icons'

export default function SocialIcons() {
    const iconProps = {
        className: `
            rounded-xl bg-neutral-300 text-neutral-800 
            hover:bg-neutral-800 hover:text-neutral-300 
            transition-all duration-300 ease-in-out
        `,
        target: "_blank",
        rel: "noopener noreferrer",
        bgColor: "transparent",
        fgColor: "currentColor",
    }

    return (
        <div className={`
            z-50 absolute md:fixed flex items-center justify-center gap-4 md:flex-col
            top-10 md:left-10 md:top-1/2 md:transform md:-translate-y-1/2
            py-3 px-4 rounded-xl bg-neutral-800/50
        `}>
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
            />
            <SocialIcon
                url="https://www.facebook.com/thenetherhour"
                {...iconProps}
                className={`
                    max-sm:hidden ${iconProps.className}
                `}
            />
        </div>
    );
}
