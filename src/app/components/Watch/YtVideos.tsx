import YtVideo from "./YtVideo";

export default function YtVideos() {
    return (
        <div className="
            flex flex-col w-full
            gap-6 justify-items-center
            px-6 py-6 rounded-xl
            bg-neutral-900
        ">
            <YtVideo ytId="RP2C4aKWtXc" />
            <YtVideo ytId="f4IX070ZQf8" />
            <YtVideo ytId="C07McuC-kEc" />
            <YtVideo ytId="uy0YU72qSkg" />
        </div>
    );
}
