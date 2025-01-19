'use client'

import {Card} from "@mantine/core";

interface TourDateProps {
    date: string;
    city: string;
    venue: string;
    url: string;
}

export default function TourDate(props: TourDateProps) {
    const cardClassName = `
        relative w-full
        text-neutral-200 cursor-pointer gap-4
        bg-neutral-800 lg:hover:bg-neutral-900
        transition-all duration-300 ease-in-out
    `;

    return (
        <Card
            className={cardClassName}
            shadow="sm"
            padding="lg"
            radius="lg"
            onClick={() => window.open(props.url, '_blank')}
        >
            <div className="flex gap-4 items-center text-nowrap">
                <div
                    className="
                        flex flex-1 justify-between items-center
                        max-[790px]:flex-col max-[790px]:items-start
                    ">
                    <span className="text-xl font-bold">{props.date}</span>
                    <div className="flex flex-col items-end max-[790px]:items-start">
                        <span className="text-lg font-bold max-[790px]:text-md">{props.city}</span>
                        <span className="text-sm">{props.venue}</span>
                    </div>
                </div>
                <div className="font-bold px-4 py-2 rounded-lg bg-red-500">Tickets</div>
            </div>
        </Card>
    );
}
