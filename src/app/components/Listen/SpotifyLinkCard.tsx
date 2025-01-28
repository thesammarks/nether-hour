'use client'

import Image from "next/image";
import {Card} from "@mantine/core";
import {IconBrandSpotifyFilled} from "@tabler/icons-react";

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
                relative w-full
                text-neutral-300 cursor-pointer gap-4
                transition-all duration-300 ease-in-out
                bg-neutral-800 lg:hover:bg-red-500
            "
            shadow="sm"
            padding="lg"
            radius="lg"
            onClick={() => window.open(props.url, '_blank')}
        >
            <div className="flex items-start justify-between">
                <div className="flex flex-col items-start text-nowrap">
                    <span className="text-lg font-bold">{props.title}</span>
                    <span className="text-sm">{props.subtitle}</span>
                </div>
                <IconBrandSpotifyFilled width={28} />
            </div>

            <div className="w-full rounded-xl border-2 border-neutral-300">
                <Image
                    src={props.img}
                    className="object-cover rounded-xl w-full"
                    width={1}
                    height={1}
                    alt={props.title}
                />
            </div>
        </Card>
    );
}
