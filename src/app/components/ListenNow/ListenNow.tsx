import SpotifyLinkCards from "./SpotifyLinkCards";

export default function ListenNow() {
    return (
        <div id="listen-now" className="flex flex-col w-[75%] items-center gap-5 py-8">
            <div className="text-3xl font-bold">Listen Now</div>
            <SpotifyLinkCards />
        </div>
    );
}
