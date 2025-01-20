'use client'

import {Avatar, Card, Text} from "@mantine/core";

interface BandMemberCardProps {
    name: string;
    handle: string;
    url: string;
    img: string;
}

export default function BandMemberCard(props: BandMemberCardProps) {
    return (
        <Card
            className="
                relative cursor-pointer text-neutral-200
                bg-neutral-800 lg:hover:bg-neutral-900
                transition-all duration-300 ease-in-out
            "
            shadow="sm"
            padding="lg"
            radius="lg"
            onClick={() => window.open(props.url, '_blank')}
        >
            <div>
                <div className="flex items-center justify-left gap-4">
                    <div><Avatar size="lg" src={props.img} alt={props.name} /></div>
                    <div className="flex flex-col">
                        <Text className="text-lg font-bold">{props.name}</Text>
                        <Text>{props.handle}</Text>
                    </div>
                </div>
            </div>
        </Card>
    );
}
