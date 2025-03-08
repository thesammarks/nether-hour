'use client'

import TourDate from "./TourDate";

export default function TourDates() {
    return (
        <div className="w-full flex flex-col gap-5 justify-center items-center">
            <TourDate
                date="April 4, 2025"
                city="New Orleans, LA"
                title="Nether Hour"
                venue="Hogs for a Cause Festival"
                url="https://hogsfest.org/tickets/"
                img="/images/tour/apr_4_hogs_for_a_cause_festival.jpg"
            />
            <TourDate
                date="April 5, 2025"
                city="Atlanta, GA"
                title="Nether Hour"
                venue="Mental Awakening Festival"
                url="https://www.eventbrite.com/e/mental-awakening-2025-tickets-1022769500107"
                img="/images/tour/apr_5_mental_awakening.jpg"
            />
            <TourDate
                date="April 10, 2025"
                city="Charlotte, NC"
                title="Nether Hour"
                venue="The Evening Muse"
                url="https://www.eventbrite.com/e/nether-hour-tickets-1220237746949"
                img="/images/tour/apr_10_the_evening_muse.jpg"
            />
            <TourDate
                date="April 11, 2025"
                city="Charleston, SC"
                title="Nether Hour"
                venue="The Pour House"
                url="https://www.eventbrite.com/e/nether-hour-tickets-1116592571439"
                img="/images/tour/apr_11_the_pour_house.jpg"
            />
            <TourDate
                date="April 26, 2025"
                city="Denver, CO"
                title="Nether Hour w/ Toadstool"
                venue="Cervantes' Other Side"
                url="https://www.etix.com/ticket/p/81575435/nether-hour-wtoadstool-denver-cervantesother-side"
                img="/images/tour/apr_26_cervantes_otherside.jpg"
            />
        </div>
    );
}