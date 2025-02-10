'use client'

import {Avatar, Card, Text} from "@mantine/core";
import styles from "./BandMemberCard.module.scss"

interface BandMemberCardProps {
    name: string;
    handle: string;
    url: string;
    img: string;
}

export default function BandMemberCard(props: BandMemberCardProps) {
    return (
        <Card
            className={styles.container}
            shadow="sm"
            padding="lg"
            radius="lg"
            onClick={() => window.open(props.url, '_blank')}
        >
            <div className={styles.contentContainer}>
                <div className="rounded-full border-2 p-1 border-red-500"><Avatar size="lg" src={props.img} alt={props.name} /></div>
                <div className="flex flex-col">
                    <Text className="text-lg font-bold">{props.name}</Text>
                    <Text>{props.handle}</Text>
                </div>
            </div>
        </Card>
    );
}
