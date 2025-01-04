import BandMemberCards from "./BandMemberCards";

export default function TheBand() {
    return (
        <div id="the-band" className="flex flex-col w-full items-center gap-5 py-8">
            <div className="text-3xl font-bold">The Band</div>
            <BandMemberCards />
        </div>
    );
}
