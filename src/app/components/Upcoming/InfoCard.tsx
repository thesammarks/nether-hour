'use client'

import Image from "next/image";
import {Card} from "@mantine/core";

interface InfoCardProps {
    header: string;
    title: string;
    icon: React.ElementType
    venue: string;
    dates: string;
    url: string;
    img: string;
}

const InfoCard = (props: InfoCardProps) => {
    const cardClasses = `
        relative min-w-[280px] max-w-[280px]
        cursor-pointer gap-4
        bg-neutral-800 lg:hover:bg-neutral-900
        transition-all duration-300 ease-in-out
    `;

    return (
        <Card
            className={cardClasses}
            shadow="sm"
            padding="lg"
            radius="lg"
            onClick={() => window.open(props.url, '_blank')}
        >
            <props.icon width={16} className="absolute top-4 right-4"/>

            <div className="flex flex-col items-start gap-2 text-neutral-200">
                <div className="text-sm">{props.header}</div>
                <div className="flex flex-col items-start text-nowrap">
                    <span className="text-xl font-bold">{props.title}</span>
                    <span className="font-bold">{props.venue}</span>
                    <span>{props.dates}</span>
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
  };
  
export default InfoCard;
