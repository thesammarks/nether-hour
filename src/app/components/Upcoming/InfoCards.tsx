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
            <InfoCard
                header="Get Tickets"
                title="Nether Hour / The Palisades"
                icon={ExternalLink}
                venue="Continental Club - Houston, TX"
                dates="Friday, Jan 24, 2025 - 10:30 P.M."
                url="https://continental-club-houston.square.site/product/jan-24-2025-nether-hour-the-palisades/980"
                img="/images/continental_club_jan_24.jpg"
            />
            <InfoCard
                header="Weekly Shows"
                title="SUNDAY SERVICE + more"
                icon={Instagram}
                venue="Whiskey Tango Foxtrot - Austin, TX"
                dates="Sundays 5-8 P.M., Thursdays 8-11 P.M."
                url="https://instagram.com/netherhour"
                img="/images/nh_profile.jpg"
            />
        </div>
    );
};

export default InfoCards;
