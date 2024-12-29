"use client"

import Image from "next/image"; 
import { Button, Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";
import { Instagram } from "react-feather"

interface ShowInfoCardProps {
    header: string;
    title: string;
    icon: React.ElementType
    venue: string;
    dates: string;
    url: string;
    img: string;
}

const ShowInfoCard = (props: ShowInfoCardProps) => {
    return (
        <Card
            className="
                p-2 min-w-[275px] max-w-[275px]
                rounded-xl overflow-hidden drop-shadow-xl
                bg-neutral-800 hover:bg-neutral-900
                transition-all duration-300 ease-in-out
            "
            isPressable
            onPress={() => window.open(props.url, '_blank')}
            isHoverable
        >
            <props.icon width={16} className="absolute top-4 right-4"/>
            <CardHeader className="flex flex-col items-start gap-2">
                <div className="text-xs">{props.header}</div>
                <div className="flex flex-col items-start text-nowrap">
                    <span className="font-bold text-lg text-grey-200">{props.title}</span>
                    <span className="text-sm font-bold">{props.venue}</span>
                    <span className="text-xs">{props.dates}</span>
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
  
export default ShowInfoCard;
