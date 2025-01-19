import YtVideo from "./YtVideo";

export default function YtVideos() {
    return (
        <div className="
            flex flex-col w-full
            gap-4 justify-items-center
            px-4 py-4 rounded-xl
            bg-gradient-to-b from-neutral-700 to-neutral-600
        ">
            <YtVideo ytId="RP2C4aKWtXc" />
            <YtVideo ytId="f4IX070ZQf8" />
            <YtVideo ytId="C07McuC-kEc" />
            <YtVideo ytId="uy0YU72qSkg" />
        </div>
    );
}
