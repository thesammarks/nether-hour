import React from 'react'

export default function VideoBkgd() {
    return (
        <div>
            <div className="
                absolute z-10 top-0 left-0 object-cover h-full w-full
                bg-gradient-to-b from-black/10 to-black"
            ></div>
            <video
                className="absolute top-0 left-0 object-cover h-full w-full"
                autoPlay
                loop
                muted
                playsInline
                preload="none">
                <source src="/videos/nh.mp4" type="video/mp4" />
                <source src="/videos/nh.webm" type="video/webm" />
            </video>
        </div>
    );
}
