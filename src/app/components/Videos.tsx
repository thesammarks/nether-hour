"use client"

import React from 'react'
import YouTube from "react-youtube"; 

const Videos = () => {
    return (
        <div className="flex flex-col gap-12 bg-red-100">
            <div className="flex flex-col gap-5 bg-red-400">
                <span className="text-2xl font-semibold">Latest Releases</span>
                <div className="flex justify-between">
                    <YouTube className="w-[50%]" videoId="Ks5ciN3HdXE"/>
                    <YouTube className="" videoId="YZF7TIXTmeI"/>
                </div>
            </div>

            <div className="flex flex-col gap-5">
                <span className="text-2xl font-semibold">Austin Artist Spotlight Sessions</span>
                <div className="flex">
                    <YouTube videoId="RP2C4aKWtXc"/>
                    <YouTube videoId="kmxWQOhj_EE"/>
                </div>
            </div>

            <div className="flex flex-col gap-5">
                <span className="text-2xl font-semibold">Bonsai Tree Sessions</span>
                <div className="flex gap-5">
                    <YouTube videoId="zWWnbJnTa3o"/>
                    <YouTube videoId="V82ihL_xywo"/>
                </div>
            </div>

            <div className="flex flex-col gap-5">
                <span className="text-2xl font-semibold">Studio Bar Sessions at HowMuch! Studios</span>
                <div className="flex gap-5">
                    <YouTube videoId="hRa5cXTtx54"/>
                    <YouTube videoId="8T-UydwFle8"/>
                </div>
            </div>
        </div>
      );
  };
  
export default Videos;
