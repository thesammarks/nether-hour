import TourDates from "@/app/tour/TourDates";
import Link from "next/link";

export default function TourPreview() {
    return (
        <div className="flex flex-col w-[60%] max-md:w-[80%] pt-[60px] items-center gap-5">
            <div className="text-3xl font-bold">Tour Dates</div>
            <TourDates />
            <Link href={`/tour`} className="font-bold underline text-red-500">See all dates.</Link>
        </div>
    );
}
