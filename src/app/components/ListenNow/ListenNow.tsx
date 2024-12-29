import SpotifyLinkCards from "./SpotifyLinkCards";

const ListenNow = () => {
    return (
        <div className="flex flex-col w-full items-center gap-5">
            <div className="text-2xl font-bold">Listen Now</div>
            <SpotifyLinkCards />
        </div>
    );
};

export default ListenNow;