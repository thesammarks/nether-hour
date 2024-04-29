"use client"

import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { useGlitch } from 'react-powerglitch'

const iconProps = {
    target: "_blank",
    rel: "noopener noreferrer",
    bgColor: "transparent",
    fgColor: "rgba(229,227,211,0.8)",
    // style: "width: 20px",
}

const SocialIcons = () => {
    const glitch = useGlitch({
        "playMode": "hover", 
        "timing": {
            "duration": 700
        },
        "shake": {
            "velocity": 4,
            "amplitudeX": 0.05,
            "amplitudeY": 0.02
        },
    });
    
    return (
      <div className="absolute top-10 z-20 flex gap-3">
        <SocialIcon
            className="drop-shadow-[0px_0px_4px_rgba(255,255,255,0.5)]"
            ref={glitch.ref}
            url="https://open.spotify.com/artist/7xFkiQ9B6WA6932TniPRGr/"
            {...iconProps}
        />
        <SocialIcon
            className="drop-shadow-[0px_0px_4px_rgba(255,255,255,0.5)]"
            network="itunes" 
            ref={glitch.ref}
            url="https://music.apple.com/us/artist/nether-hour/1544082556/"
            {...iconProps}
        />
        <SocialIcon
            className="drop-shadow-[0px_0px_4px_rgba(255,255,255,0.5)]"
            ref={glitch.ref}
            url="https://www.instagram.com/netherhour/"
            {...iconProps}
        />
        <SocialIcon
            className="drop-shadow-[0px_0px_4px_rgba(255,255,255,0.5)]"
            ref={glitch.ref}
            url="https://www.youtube.com/@netherhour/"
            {...iconProps}
        />
        <SocialIcon
            className="drop-shadow-[0px_0px_4px_rgba(255,255,255,0.5)]"
            ref={glitch.ref}
            url="https://x.com/NetherHour/"
            {...iconProps}
        />
        <SocialIcon
            className="max-sm:hidden drop-shadow-[0px_0px_4px_rgba(255,255,255,0.5)]"
            ref={glitch.ref}
            url="https://www.facebook.com/thenetherhour/"
            {...iconProps}
        />
      </div>
    );
  };
  
export default SocialIcons;
