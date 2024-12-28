"use client"

import React from 'react'
import YouTube from "react-youtube"; 

const Videos = () => {
    const opts = {
        height: '216',
        width: '350',
    };
  
    return (
        <div className="flex flex-col gap-12 text-center">
            <div className="flex flex-col items-center gap-5">
                <span className="text-2xl font-semibold">Chill Country Sessions</span>
                <div className="flex max-md:flex-col justify-center gap-5">
                    <YouTube videoId="C07McuC-kEc" opts={opts}/>
                    <YouTube videoId="2hhuFnYdw-A" opts={opts}/>
                </div>
            </div>

            <div className="flex flex-col items-center gap-5">
                <span className="text-2xl font-semibold">Mount Bonnell Sessions</span>
                <div className="flex max-md:flex-col justify-center gap-5">
                    <YouTube videoId="dm4wNVA0Z_Q" opts={opts}/>
                    <YouTube videoId="yHDtAyKV2ZY" opts={opts}/>
                </div>
            </div>

            <div className="flex flex-col items-center gap-5">
                <span className="text-2xl font-semibold">Eclipse Sessions</span>
                <div className="flex max-md:flex-col justify-center gap-5">
                    <YouTube videoId="uy0YU72qSkg" opts={opts}/>
                    <YouTube videoId="mZCXt6cvVMc" opts={opts}/>
                </div>
            </div>

            <div className="flex flex-col items-center gap-5">
                <span className="text-2xl font-semibold">Austin Artist Spotlight Sessions</span>
                <div className="flex max-md:flex-col justify-center gap-5">
                    <YouTube videoId="RP2C4aKWtXc" opts={opts}/>
                    <YouTube videoId="kmxWQOhj_EE" opts={opts}/>
                </div>
            </div>

            <div className="flex flex-col items-center gap-5">
                <span className="text-2xl font-semibold">Bonsai Tree Sessions</span>
                <div className="flex max-md:flex-col justify-center gap-5">
                    <YouTube videoId="zWWnbJnTa3o" opts={opts}/>
                    <YouTube videoId="V82ihL_xywo" opts={opts}/>
                </div>
            </div>

            <div className="flex flex-col items-center gap-5">
                <span className="text-2xl font-semibold">Studio Bar Sessions at HowMuch! Studios</span>
                <div className="flex max-md:flex-col justify-center gap-5">
                    <YouTube videoId="hRa5cXTtx54" opts={opts}/>
                    <YouTube videoId="8T-UydwFle8" opts={opts}/>
                </div>
            </div>
        </div>
      );
  };
  
export default Videos;
