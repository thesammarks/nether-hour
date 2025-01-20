'use client';

import Image from "next/image";
import {Card} from "@mantine/core";
import {IconBrandSpotifyFilled} from "@tabler/icons-react";
import styles from "./SpotifyLinkCard.module.scss";

interface SpotifyLinkCardProps {
    title: string;
    subtitle: string;
    url: string;
    img: string;
}

export default function SpotifyLinkCard(props: SpotifyLinkCardProps) {
    return (
        <Card
            className={styles.card}
            shadow="sm"
            padding="lg"
            radius="lg"
            onClick={() => window.open(props.url, '_blank')}
        >
            <div className={styles.header}>
                <div className={styles.text}>
                    <span className={styles.title}>{props.title}</span>
                    <span className={styles.subtitle}>{props.subtitle}</span>
                </div>
                <IconBrandSpotifyFilled width={28} />
            </div>

            <div className={styles.imageWrapper}>
                <Image
                    src={props.img}
                    className={styles.image}
                    width={1}
                    height={1}
                    alt={props.title}
                />
            </div>
        </Card>
    );
}
