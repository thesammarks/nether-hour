'use client'

import React from 'react'
import {SocialIcon} from 'react-social-icons'

export default function SocialIcons() {
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

    return (
        <div className={`
            z-50 absolute top-[20px]
            flex items-center justify-center gap-4
            min-[880px]:fixed min-[880px]:flex-col
            min-[880px]:left-[20px] min-[880px]:top-1/2 
            min-[880px]:transform min-[880px]:-translate-y-1/2
            py-3 px-4
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
