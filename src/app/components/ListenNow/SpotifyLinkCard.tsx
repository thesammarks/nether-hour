'use client'

import Image from "next/image";
import {PlayCircle} from "react-feather"
import {Card} from "@mantine/core";

interface SpotifyLinkCardProps {
    title: string;
    subtitle: string;
    url: string;
    img: string;
}

export default function SpotifyLinkCard(props: SpotifyLinkCardProps) {
    return (
        <Card
            className="
                relative min-w-[250px] max-w-[250px]
                cursor-pointer gap-4
                bg-neutral-800 lg:hover:bg-neutral-900
                transition-all duration-300 ease-in-out
            "
            shadow="sm"
            padding="lg"
            radius="lg"
            onClick={() => window.open(props.url, '_blank')}
        >
            <PlayCircle width={16} className="absolute top-4 right-4"/>

            <div className="flex flex-col items-start gap-2">
                <div className="text-sm">Listen on Spotify</div>
                <div className="flex flex-col items-start text-nowrap text-neutral-200">
                    <span className="text-xl font-bold">{props.title}</span>
                    <span>{props.subtitle}</span>
                </div>
            </div>

            <div>
                <Image
                    src={props.img}
                    className="object-cover rounded-xl"
                    width={250}
                    height={250}
                    alt={props.title}
                />
            </div>
        </Card>
    );
}
