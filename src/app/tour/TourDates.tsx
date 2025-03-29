'use client'

import TourDate from "./TourDate";

export default function TourDates() {
    return (
        <div className="w-full flex flex-col gap-5 justify-center items-center">
            <TourDate
                date="April 3, 2025"
                city="Lafayette, LA"
                title="Medicine Men Super Jam"
                venue="Rock'n'Bowl® de Lafayette"
                url="https://www.rocknbowl.com/events/medicine-men-super-jam-4-3-25"
                img="/images/tour/040325.jpg"
            />
            <TourDate
                date="April 4, 2025"
                city="New Orleans, LA"
                title="Nether Hour"
                venue="Hogs for a Cause Festival"
                url="https://hogsfest.org/tickets/"
                img="/images/tour/040425.jpg"
            />
            <TourDate
                date="April 5, 2025"
                city="Atlanta, GA"
                title="Nether Hour"
                venue="Mental Awakening Festival"
                url="https://www.eventbrite.com/e/mental-awakening-2025-tickets-1022769500107"
                img="/images/tour/040525.jpg"
            />
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