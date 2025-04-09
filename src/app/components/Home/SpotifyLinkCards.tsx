import SpotifyLinkCard from "./SpotifyLinkCard";

const SpotifyLinkCards = () => {
    return (
        <div className="
            w-full grid grid-cols-3 max-2xl:grid-cols-2 max-[1000px]:grid-cols-1
            gap-4 justify-items-center
        ">
            <SpotifyLinkCard
                title="MOONSHINE"
                subtitle="2025 • Single"
                url="https://open.spotify.com/album/6pSQ8qGokC2oUAK4hdoJzV"
                img="/images/listen/moonshine.jpg"
            />
            <SpotifyLinkCard
                title="Look My Way"
                subtitle="2024 • Single"
                url="https://open.spotify.com/album/2ITCfEO8ZYCIbOe8QVLiB0"
                img="/images/listen/look_my_way.jpg"
            />
            <SpotifyLinkCard
                title="Long As I Ain't Alone"
                subtitle="2024 • Single"
                url="https://open.spotify.com/album/1T5NTy3lHhEz2O9Aq1Q6s4"
                img="/images/listen/long_as_i_aint_alone.jpg"
            />
            <SpotifyLinkCard
                title="This is Nether Hour"
                subtitle="Playlist"
                url="https://open.spotify.com/playlist/37i9dQZF1DZ06evO4sV7mt"
                img="/images/listen/this_is_nether_hour.jpg"
            />
            <SpotifyLinkCard
                title="SUNSHINE"
                subtitle="2024 • Album"
                url="https://open.spotify.com/album/0CJY4hih3MeO8rmCpbxxHt"
                img="/images/listen/sunshine.jpg"
            />
            <SpotifyLinkCard
                title="Rattlesnake Gumbo"
                subtitle="2023 • Album"
                url="https://open.spotify.com/album/4FbVIUqviL1clsbL1Ql3wS"
                img="/images/listen/rattlesnake_gumbo.jpg"
            />
        </div>
    );
};

export default SpotifyLinkCards;
