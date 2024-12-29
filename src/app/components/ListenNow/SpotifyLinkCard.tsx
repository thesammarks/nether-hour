'use client'

import Image from "next/image"; 
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { PlayCircle } from "react-feather"

interface SpotifyLinkCardProps {
    title: string;
    subtitle: string;
    url: string;
    img: string;
}

const SpotifyLinkCard = (props: SpotifyLinkCardProps) => {
    return (
        <Card
            className="
                p-2 min-w-[250px] max-w-[250px] 
                rounded-xl overflow-hidden drop-shadow-xl
                bg-neutral-800 hover:bg-neutral-900
                transition-all duration-300 ease-in-out
            "
            isPressable
            onPress={() => window.open(props.url, '_blank')}
            isHoverable
        >
            <PlayCircle width={16} className="absolute top-4 right-4"/>
            <CardHeader className="flex flex-col items-start gap-2">
                <div className="text-xs">Listen on Spotify</div>
                <div className="flex flex-col items-start text-nowrap">
                    <span className="font-bold text-lg text-grey-200">{props.title}</span>
                    <span className="text-xs">{props.subtitle}</span>
                </div>
            </CardHeader>
            <CardBody>
                <Image
                    src={props.img}
                    className="object-cover rounded-xl"
                    width={250}
                    height={250}
                    alt={props.title}
                />
            </CardBody>
        </Card>
    );
  };
  
export default SpotifyLinkCard;
