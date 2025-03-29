'use client'

import {Badge, Card, Flex, Text} from "@mantine/core";
import styles from "./SpotifyLink.module.scss"
import Image from "next/image";
import {IconBrandSpotifyFilled} from "@tabler/icons-react";

export default function SpotifyLink() {
    return (
        <Card
            className={styles.container}
            shadow="sm"
            padding="lg"
            radius="lg"
            onClick={() => window.open(
                "https://open.spotify.com/album/6pSQ8qGokC2oUAK4hdoJzV",
                '_blank'
            )}
        >
            <Badge size="lg" radius="md" className="bg-red-500 absolute top-[-10px] right-[-10px]">OUT NOW!</Badge>
            <Flex gap="md" align="flex-end">
                <div className={styles.contentContainer}>
                    <Image
                        className="rounded-md"
                        src={"/images/moonshine/album.jpg"}
                        alt={"Moonshine Album"}
                        width={100} height={100}
                    />
                    <div className="flex flex-col">
                        <Text className="text-xl font-bold">MOONSHINE</Text>
                        <Text>Listen now</Text>
                    </div>
                </div>

                <IconBrandSpotifyFilled width={28} />
            </Flex>
        </Card>
    );
}
