import SpotifyLinkCards from "./SpotifyLinkCards";

export default function Listen() {
    return (
        <div id="listen" className="flex flex-col w-[60%] max-md:w-[80%] pt-5 items-center gap-5">
            <div className="text-3xl font-bold">Listen Now</div>
            <SpotifyLinkCards/>
        </div>
    );
}
