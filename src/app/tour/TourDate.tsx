'use client'

import Image from "next/image";
import {Card} from "@mantine/core";

interface TourDateProps {
    className?: string;
    date: string;
    city: string;
    title: string;
    venue: string;
    url: string;
    img: string;
}

export default function TourDate(props: TourDateProps) {
    const cardClasses = `relative w-full
        text-neutral-200 cursor-pointer
        bg-neutral-800 lg:hover:bg-neutral-700
        transition-all duration-300 ease-in-out
        text-nowrap ${props.className}
    `;

    return (
        <Card
            className={cardClasses}
            shadow="sm"
            padding="lg"
            radius="lg"
            onClick={() => window.open(props.url, '_blank')}
        >
            <div className="flex gap-4 items-center group">
                <Image
                    src={props.img}
                    className="max-sm:hidden rounded-full p-1 border-2 border-neutral-300 min-w-[75px]"
                    width={1}
                    height={1}
                    alt={props.title}
                />
                <div
                    className="
                        flex flex-1 justify-between items-center
                        max-[750px]:flex-col max-[750px]:items-start max-[750px]:gap-2
                    ">
                    <div className="flex flex-col">
                        <span className="text-xl font-extrabold">{props.date}</span>
                        <span className="italic max-lg:hidden">{props.title}</span>
                    </div>
                    <div className="flex flex-col items-end max-[750px]:items-start">
                        <span className="text-lg font-extrabold text-red-500 max-[750px]:text-md">{props.city}</span>
                        <span className="text-sm">{props.venue}</span>
                    </div>
                </div>
                <div className="font-bold px-4 py-2 rounded-lg bg-red-500">Tickets</div>
            </div>
        </Card>
    );
}
