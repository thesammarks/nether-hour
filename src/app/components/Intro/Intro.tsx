import BandMemberCards from "./BandMemberCards";
import Link from "next/link";

export default function Intro() {
    return (
        <div id="nether-hour" className="flex flex-col w-[60%] max-md:w-[80%] pt-[60px] items-center gap-5">
            <div className="text-3xl font-bold">Nether Hour</div>
            <BandMemberCards />
            <Link href={`/about`} className="font-bold underline text-red-500">More about Nether Hour.</Link>
        </div>
    );
}
