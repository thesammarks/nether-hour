'use client'

import { ExternalLink, Instagram } from "react-feather";
import InfoCard from "./InfoCard";
import Slider from "@ant-design/react-slick";

const InfoCards = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        swipeToSlide: true,
    };
        
    return (
        <div className="content-center whitespace-nowrap max-w-[900px] max-lg:max-w-[75%] rounded-xl text-center bg-neutral-600 p-4">
            <Slider {...settings}>
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
                    header="Latest Updates"
                    title="Follow @netherhour"
                    icon={Instagram} 
                    venue="on Instagram for the latest"
                    dates="announcements and information."
                    url="https://instagram.com/netherhour"
                    img="/images/nh_profile.jpg"
                />
            </Slider>
        </div>
    );
};

export default InfoCards;
