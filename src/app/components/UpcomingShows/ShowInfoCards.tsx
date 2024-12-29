'use client'

import { ExternalLink, Instagram } from "react-feather";
import ShowInfoCard from "./ShowInfoCard";

const ShowInfoCards = () => {
    return (
        <div className="
            flex flex-nowrap gap-5 max-w-[75%] 
            rounded-xl overflow-x-auto px-4 py-4 max-xl:pb-6
            bg-gradient-to-b from-neutral-700 to-neutral-600
        ">
            <ShowInfoCard
                header="Get Tickets"
                title="Nether Hour"
                icon={ExternalLink}
                venue="Fox Theatre - Boulder, CO"
                dates="Friday, Jan 31, 2025 - 8 P.M."
                url="https://open.spotify.com/album/2ITCfEO8ZYCIbOe8QVLiB0"
                img="/images/fox_theatre_flyer.jpg"
            />
            <ShowInfoCard
                header="Get Tickets"
                title="Nether Hour & Horse Bitch"
                icon={ExternalLink}
                venue="Aggie Theatre - Fort Collins, CO"
                dates="Saturday, Feb 1, 2025 - 8 P.M."
                url="https://open.spotify.com/album/1T5NTy3lHhEz2O9Aq1Q6s4"
                img="/images/aggie_theatre_flyer.jpg"
            />
            <ShowInfoCard
                header="Latest Updates"
                title="Follow @netherhour"
                icon={Instagram} 
                venue="on Instagram for the latest"
                dates="announcements and information."
                url="https://instagram.com/netherhour"
                img="/images/nh_profile.jpg"
            />
        </div>
    );
};

export default ShowInfoCards;