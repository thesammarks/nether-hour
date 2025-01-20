'use client';

import {Avatar, Card, Text} from "@mantine/core";
import styles from "./BandMemberCard.module.scss";

interface BandMemberCardProps {
    name: string;
    handle: string;
    url: string;
    img: string;
}

export default function BandMemberCard(props: BandMemberCardProps) {
    return (
        <Card
            className={styles.card}
            shadow="sm"
            padding="lg"
            radius="lg"
            onClick={() => window.open(props.url, '_blank')}
        >
            <div>
                <div className={styles.cardContent}>
                    <Avatar size="lg" src={props.img} alt={props.name} />
                    <div className={styles.textContent}>
                        <Text className={styles.name}>{props.name}</Text>
                        <Text>{props.handle}</Text>
                    </div>
                </div>
            </div>
        </Card>
    );
}
