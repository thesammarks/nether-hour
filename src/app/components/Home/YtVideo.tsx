'use client'

import React, {useEffect, useRef, useState} from "react";
import YouTube from "react-youtube";

interface YtVideoProps {
    ytId: string;
}

export default function YtVideo(props: YtVideoProps) {
    const [playerSize, setPlayerSize] = useState({ width: 640, height: 360 });
    const [isMounted, setIsMounted] = useState(false);
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        setIsMounted(true);

        const updatePlayerSize = () => {
            if (containerRef.current) {
                const containerWidth = containerRef.current.clientWidth || 640;
                const calculatedHeight = (containerWidth / 16) * 9; // Maintain 16:9 aspect ratio
                setPlayerSize({
                    width: containerWidth,
                    height: calculatedHeight,
                });
            }
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
        <div className="w-full rounded-xl border-2 border-neutral-300">
            <div
                ref={containerRef}
                className="youtube-container w-full rounded-xl overflow-hidden"
            >
                {isMounted ? (
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
                ) : (
                    <div className={`font-bold bg-neutral-900 p-10`}>
                        Loading insanely cool content...
                    </div>
                )}
            </div>
        </div>
    );
}
