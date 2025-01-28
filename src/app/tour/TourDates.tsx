'use client'

import TourDate from "./TourDate";

export default function TourDates() {
    return (
        <div className="w-full flex flex-col gap-5 justify-center items-center">
            <TourDate
                date="Jan 24, 2025"
                city="Houston, TX"
                title="Nether Hour & The Palisades"
                venue="Continental Club"
                url="https://continental-club-houston.square.site/product/jan-24-2025-nether-hour-the-palisades/980"
                img="/images/continental_club_jan_24_square.jpg"
            />
            <TourDate
                date="Jan 31, 2025"
                city="Boulder, CO"
                title="Nether Hour"
                venue="Fox Theatre"
                url="https://www.eventticketscenter.com/nether-hour-boulder-01-31-2025/6784804/t"
                img="/images/fox_theatre_flyer_square.jpg"
            />
            <TourDate
                date="Feb 1, 2025"
                city="Fort Collins, CO"
                title="Nether Hour & Horse Bitch"
                venue="Aggie Theatre"
                url="https://www.eventticketscenter.com/nether-hour-horse-bitch-fort-collins-02-01-2025/6783064/t"
                img="/images/aggie_theatre_flyer_square.jpg"
            />
        </div>
    );
}