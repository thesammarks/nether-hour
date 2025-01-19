'use client'

import React, {useEffect, useState} from "react";
import YouTube from "react-youtube";

interface YtVideoProps {
    ytId: string;
}

export default function YtVideo(props: YtVideoProps) {
    const [playerSize, setPlayerSize] = useState({ width: 640, height: 360 });

    useEffect(() => {
        const updatePlayerSize = () => {
            const containerWidth = document.querySelector(".youtube-container")?.clientWidth || 640;
            const calculatedHeight = (containerWidth / 16) * 9; // Maintain 16:9 aspect ratio
            setPlayerSize({
                width: containerWidth,
                height: calculatedHeight,
            });
        };

        // Initial calculation
        updatePlayerSize();

        // Update on window resize
        window.addEventListener("resize", updatePlayerSize);

        return () => {
            window.removeEventListener("resize", updatePlayerSize);
        };
    }, []);

    return (
        <div className="youtube-container w-full rounded-xl overflow-hidden">
            <YouTube
                videoId={props.ytId}
                opts={{
                    width: playerSize.width.toString(),
                    height: playerSize.height.toString(),
                    playerVars: {
                        autoplay: 0,
                    },
                }}
            />
        </div>
    );
}
