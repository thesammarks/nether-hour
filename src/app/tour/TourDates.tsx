'use client'

import TourDate from "./TourDate";

export default function TourDates() {
    return (
        <div className="w-full flex flex-col gap-5 justify-center items-center">
            <TourDate
                date="April 10, 2025"
                city="Charlotte, NC"
                title="Nether Hour"
                venue="The Evening Muse"
                url="https://www.eventbrite.com/e/nether-hour-tickets-1220237746949"
                img="/images/tour/041025.jpg"
            />
            <TourDate
                date="April 11, 2025"
                city="Charleston, SC"
                title="Nether Hour"
                venue="The Pour House"
                url="https://www.eventbrite.com/e/nether-hour-tickets-1116592571439"
                img="/images/tour/041125.jpg"
            />
            <TourDate
                date="April 26, 2025"
                city="Denver, CO"
                title="Nether Hour w/ Toadstool"
                venue="Cervantes' Other Side"
                url="https://www.etix.com/ticket/p/81575435/nether-hour-wtoadstool-denver-cervantesother-side"
                img="/images/tour/042625.jpg"
            />
            <TourDate
                date="Aug 30, 2025"
                city="Weston, CO"
                title="Nether Hour"
                venue="Caveman Music Festival"
                url="https://cavemanmusicfestival.com/pages/passes"
                img="/images/tour/083025.jpg"
            />
        </div>
    );
}