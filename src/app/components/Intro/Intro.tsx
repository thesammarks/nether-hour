import BandMemberCards from "./BandMemberCards";

export default function Intro() {
    return (
        <div id="nether-hour" className="flex flex-col w-[60%] max-md:w-[80%] pt-[60px] items-center gap-5">
            <div className="text-3xl font-bold">Nether Hour</div>
            <BandMemberCards />
        </div>
    );
}
