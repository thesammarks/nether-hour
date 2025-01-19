'use client'

import TourDate from "./TourDate";

export default function TourDates() {
    return (
        <div className="
            flex flex-col w-full
            gap-4 justify-items-center
            px-4 py-4 rounded-xl
            bg-gradient-to-b from-neutral-700 to-neutral-600
        ">
            <TourDate
                date="Fri, Jan 31"
                city="Boulder, CO"
                venue="Fox Theatre"
                url="https://www.eventticketscenter.com/nether-hour-boulder-01-31-2025/6784804/t"
            />
            <TourDate
                date="Sat, Feb 1"
                city="Fort Collins, CO"
                venue="Aggie Theatre"
                url="https://www.eventticketscenter.com/nether-hour-horse-bitch-fort-collins-02-01-2025/6783064/t"
            />
            <TourDate
                date="Fri, Jan 24"
                city="Houston, TX"
                venue="Continental Club"
                url="https://continental-club-houston.square.site/product/jan-24-2025-nether-hour-the-palisades/980"
            />
        </div>
    );
}
