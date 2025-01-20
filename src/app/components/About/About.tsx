import BandMemberCards from "./BandMemberCards";

export default function About() {
    return (
        <div id="about" className="flex flex-col w-[60%] max-md:w-[80%] pt-5 items-center gap-5">
            <div className="text-3xl font-bold">Nether Hour</div>
            <BandMemberCards />
        </div>
    );
}
