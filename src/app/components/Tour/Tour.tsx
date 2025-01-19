import TourDates from "./TourDates";

export default function Tour() {
    return (
        <div id="tour" className="flex flex-col w-[60%] max-md:w-[80%] pt-5 items-center gap-5">
            <div className="text-3xl font-bold">Tour Dates</div>
            <TourDates/>
        </div>
    );
}
