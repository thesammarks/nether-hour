import TourDates from "@/app/tour/TourDates";

export default function TourPreview() {
    return (
        <div className="flex flex-col w-[60%] max-md:w-[80%] pt-[60px] items-center gap-5">
            <div className="text-3xl font-bold">Tour Dates</div>
            <TourDates />
        </div>
    );
}
