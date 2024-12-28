"use client"

import React from 'react'
import { SocialIcon } from 'react-social-icons'

const iconProps = {
    target: "_blank",
    rel: "noopener noreferrer",
    bgColor: "rgba(229,227,211,0.1)",
    fgColor: "rgba(229,227,211,0.8)",
}

const SocialIcons = () => {
    return (
      <div className="absolute top-10 z-20 flex gap-4">
        <SocialIcon
            className="drop-shadow-[0px_0px_4px_rgba(255,255,255,0.5)]"
            url="https://open.spotify.com/artist/7xFkiQ9B6WA6932TniPRGr"
            {...iconProps}
        />
        <SocialIcon
            className="drop-shadow-[0px_0px_4px_rgba(255,255,255,0.5)]"
            network="itunes" 
            url="https://music.apple.com/us/artist/nether-hour/1544082556"
            {...iconProps}
        />
        <SocialIcon
            className="drop-shadow-[0px_0px_4px_rgba(255,255,255,0.5)]"
            url="https://www.instagram.com/netherhour"
            {...iconProps}
        />
        <SocialIcon
            className="drop-shadow-[0px_0px_4px_rgba(255,255,255,0.5)]"
            url="https://www.youtube.com/@netherhour"
            {...iconProps}
        />
        <SocialIcon
            className="drop-shadow-[0px_0px_4px_rgba(255,255,255,0.5)]"
            url="https://x.com/NetherHour"
            {...iconProps}
        />
        <SocialIcon
            className="max-sm:hidden drop-shadow-[0px_0px_4px_rgba(255,255,255,0.5)]"
            url="https://www.facebook.com/thenetherhour"
            {...iconProps}
        />
      </div>
    );
  };
  
export default SocialIcons;
