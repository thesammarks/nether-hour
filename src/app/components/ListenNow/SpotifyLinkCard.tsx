"use client"

import Image from "next/image"; 
import { Card, CardBody, CardHeader } from "@nextui-org/card";
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
            className="flex flex-col gap-3 rounded-xl p-4 bg-neutral-800 min-w-[250px] max-w-[250px] overflow-hidden"
            isPressable
            onPress={() => window.open(props.url, '_blank')}
            isBlurred
            shadow="md"
        >
            <PlayCircle width={16} className="absolute top-3 right-3"/>
            <CardHeader className="flex flex-col items-start gap-2">
                <div className="flex">
                    <div className="text-xs">Listen on Spotify</div>
                </div>
                <div className="flex flex-col items-start">
                    <span className="text-nowrap font-bold text-lg text-grey-200">{props.title}</span>
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
