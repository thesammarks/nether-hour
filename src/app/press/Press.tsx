import React from "react";
import Link from "next/link";

export default function Press() {
    return (
        <div
            id="press"
            className="
                z-20 w-[80%] max-sm:w-[90%] p-5
                flex flex-col gap-10
                bg-neutral-900/95 rounded-xl
            ">
            <div className="text-3xl font-bold self-center tracking-wider">PRESS</div>

            <div className="flex flex-col gap-1 font-bold tracking-wide">
                <div>
                    <span>BOOKING:{' '}</span>
                    <Link
                        className="underline text-red-500"
                        target="_blank"
                        rel="noopener noreferrer"
                        href={`mailto:${process.env.nh_email}`}
                    >
                        {process.env.nh_email}
                    </Link>
                </div>
                <div>
                    <span>PRESS INQUIRIES:{' '}</span>
                    <Link
                        className="underline text-red-500"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="mailto:jbonner@milestonepublicity.com"
                    >
                        jbonner@milestonepublicity.com
                    </Link>
                </div>
            </div>

            <div className="flex flex-col gap-2">
                <Link
                    className="text-2xl font-bold underline"
                    href="https://www.whiskeyriff.com/2024/12/09/16-must-listen-country-artists-i-discovered-in-2024/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    16 Must-Listen Country Artists I Discovered In 2024
                </Link>
                <div className="flex flex-col">
                    <div className="text-xl font-bold text-red-500">Whiskey Riff</div>
                    <div className="font-bold">By Hill Douglas | December 9, 2024</div>
                </div>
                <blockquote
                    className="p-4 my-4 border-s-4 border-gray-300 bg-neutral-800">
                    <p className="text-xl italic font-medium leading-relaxed dark:text-white line-clamp-5 md:line-clamp-none">
                        While their latest single “Long As I Ain’t Alone” is a full blown country tune, Nether Hour
                        admittedly might be the least country band on this list. But as they emerge from the Austin, TX
                        bar scene as one of the city’s premiere up and coming bands, in the same way that established
                        country acts like the Turnpike Troubadours, Shane Smith & the Saints, and many others have done
                        in the past, it’s difficult to completely disassociate Nether Hour from the city’s country music
                        scene. Their unique brand of rock and roll incorporates undeniable elements of funk, blues,
                        rock, and country, and their music will appeal to fans of any of those genres.
                    </p>
                </blockquote>
            </div>

            <div className="flex flex-col gap-2">
                <Link
                    className="text-2xl font-bold underline"
                    href="https://americansongwriter.com/austin-based-rockers-nether-hour-crank-up-heat-steamy-80s-inspired-new-single-look-my-way-exclusive-premiere/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Austin-Based Rockers Nether Hour Crank Up the Heat With Steamy ‘80s-Inspired New Single “Look My
                    Way” (Exclusive Premiere)
                </Link>
                <div className="flex flex-col">
                    <div className="text-xl font-bold text-red-500">American Songwriter</div>
                    <div className="font-bold">By Clayton Edwards | December 12, 2024</div>
                </div>
                <blockquote
                    className="p-4 my-4 border-s-4 border-gray-300 bg-neutral-800">
                    <p className="text-xl italic font-medium leading-relaxed dark:text-white line-clamp-5 md:line-clamp-none">
                        If you find yourself enjoying “Look My Way” more than the rest of Nether Hour’s catalog. You’re
                        not alone. “‘Look My Way’ is my favorite song we’ve released to date,” Bishop said. “Little bit
                        of that 80’s pop rock energy and a guitar solo from Bobbo that sounds like a chainsaw growling
                        through the speakers trying to cut you like Texas Chain Saw Massacre,” he added, describing the
                        song’s sound.
                    </p>
                </blockquote>
            </div>
            <div className="flex flex-col gap-2">
                <Link
                    className="text-2xl font-bold underline"
                    href="https://www.rockandbluesmuse.com/2024/11/04/nether-hour-drops-new-single-long-as-i-aint-alone/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Nether Hour Drops New Single 'Long As I Ain’t Alone'
                </Link>
                <div className="flex flex-col">
                    <div className="text-xl font-bold text-red-500">Rock & Blues Muse</div>
                    <div className="font-bold">By Martine Ehrenclou | November 4th, 2024</div>
                </div>
                <blockquote
                    className="p-4 my-4 border-s-4 border-gray-300 bg-neutral-800">
                    <p className="text-xl italic font-medium leading-relaxed dark:text-white line-clamp-5 md:line-clamp-none">
                        Nether Hour is a trio of unapologetic rebels, each one a powerhouse of sonic defiance. Bobby
                        Flaco delivers gritty vocals and razor-sharp guitar riffs, while Bishop unleashes searing lead
                        guitar and mandolin work, with Bercy laying down bass lines that slam right into your gut.
                        They’re a relentless sonic melting pot, fusing the swampy grooves of Louisiana with Texas-sized
                        doses of funk, blues, soul, and rock ‘n’ roll.
                    </p>
                </blockquote>
            </div>
            <div className="flex flex-col gap-2">
                <Link
                    className="text-2xl font-bold underline"
                    href="https://www.fox7austin.com/video/1561978"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Nether Hour performs in FOX 7 Austin studios
                </Link>
                <div className="flex flex-col">
                    <div className="text-xl font-bold text-red-500">FOX 7 Austin</div>
                    <div className="font-bold">December 13, 2024</div>
                </div>
                <blockquote className="p-4 my-4 border-s-4 border-gray-300 bg-neutral-800">
                    <p className="text-xl italic font-medium leading-relaxed dark:text-white line-clamp-5 md:line-clamp-none">
                        Nether Hour performs some brand new music and talks about upcoming shows.
                    </p>
                </blockquote>
            </div>
        </div>
    );
}
