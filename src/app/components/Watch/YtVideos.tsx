import YtVideo from "./YtVideo";

export default function YtVideos() {
    return (
        <div className="
            flex flex-col w-full
            gap-6 justify-items-center
            px-6 py-6 rounded-xl
            bg-neutral-900
        ">
            <YtVideo ytId="YZF7TIXTmeI" />
            <YtVideo ytId="sWl4-H7PHTM" />
            <YtVideo ytId="EseF4EnVJ2U" />
            <YtVideo ytId="RP2C4aKWtXc" />
        </div>
    );
}
