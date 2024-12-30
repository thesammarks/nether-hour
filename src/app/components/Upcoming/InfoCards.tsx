'use client'

import { ExternalLink, Instagram } from "react-feather";
import InfoCard from "./InfoCard";

const InfoCards = () => {
    return (
        <div
            className="
            grid gap-4 justify-items-center
            grid-cols-2 max-md:grid-cols-1
            px-4 pt-4 pb-6 rounded-xl
            bg-gradient-to-b from-neutral-700 to-neutral-600
        "
        >
            <InfoCard
                header="Get Tickets"
                title="Nether Hour"
                icon={ExternalLink}
                venue="Fox Theatre - Boulder, CO"
                dates="Friday, Jan 31, 2025 - 8 P.M."
                url="https://www.eventticketscenter.com/nether-hour-boulder-01-31-2025/6784804/t"
                img="/images/fox_theatre_flyer.jpg"
            />
            <InfoCard
                header="Get Tickets"
                title="Nether Hour & Horse Bitch"
                icon={ExternalLink}
                venue="Aggie Theatre - Fort Collins, CO"
                dates="Saturday, Feb 1, 2025 - 8 P.M."
                url="https://www.eventticketscenter.com/nether-hour-horse-bitch-fort-collins-02-01-2025/6783064/t"
                img="/images/aggie_theatre_flyer.jpg"
            />
        </div>
    );
};

export default InfoCards;
