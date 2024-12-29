'use client'

import React from 'react'
import YouTube from "react-youtube"; 

interface YouTubeVideoGroupProps {
    title: string;
    ytId1: string;
    ytId2: string;
}

const YouTubeVideoGroup = (props: YouTubeVideoGroupProps) => {
    const opts = {
        height: '216',
        width: '350',
    };
  
    return (
        <div className="flex flex-col items-center gap-4">
            <span className="text-2xl font-semibold">{props.title}</span>
            <div className="
                    flex flex-nowrap gap-5 max-sm:flex-col justify-center 
                    rounded-xl overflow-x-auto py-6 px-4
                    bg-gradient-to-b from-neutral-900 to-neutral-800
                ">
                <div className="rounded-xl overflow-hidden">
                    <YouTube videoId={props.ytId1} opts={opts}/>
                </div>
                <div className="rounded-xl overflow-hidden">
                    <YouTube videoId={props.ytId2} opts={opts}/>
                </div>
            </div>
        </div>
    )
};

export default YouTubeVideoGroup;
