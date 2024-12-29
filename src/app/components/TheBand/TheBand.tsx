import BandMemberCards from "./BandMemberCards";

const TheBand = () => {
    return (
        <div className="flex flex-col w-full items-center gap-5">
            <div className="text-2xl font-bold">The Band</div>
            <BandMemberCards />
        </div>
    );
};

export default TheBand;
