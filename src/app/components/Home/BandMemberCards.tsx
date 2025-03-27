'use client'

import BandMemberCard from "./BandMemberCard";
import React from "react";
import {SimpleGrid} from "@mantine/core";
import {useViewportSize} from "@mantine/hooks";

const BandMemberCards = () => {
    const { width } = useViewportSize();

    return (
        <SimpleGrid cols={width < 560 ? 1 : 2}>
            <BandMemberCard
                name="Bishop"
                handle="@loverboybishop"
                url="https://www.instagram.com/loverboybishop"
                img="/images/bishop.png"
            />
            <BandMemberCard
                name="Bobby Flaco"
                handle="@bobflaco13"
                url="https://www.instagram.com/bobflaco13"
                img="/images/bobby.png"
            />
            <BandMemberCard
                name="Bercy"
                handle="@_bercy"
                url="https://www.instagram.com/_bercy"
                img="/images/bercy.png"
            />
            <BandMemberCard
                name="Alvin Evans"
                handle="@allu_muziq"
                url="https://www.instagram.com/allu_muziq"
                img="/images/alvin.jpg"
            />
        </SimpleGrid>
    );
};

export default BandMemberCards;
