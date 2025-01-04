import SpotifyLinkCard from "./SpotifyLinkCard";

const SpotifyLinkCards = () => {
    return (
        <div className="
            grid gap-4 justify-items-center
            grid-cols-3 max-xl:grid-cols-2 max-sm:grid-cols-1
            py-4 px-4 rounded-xl
            bg-gradient-to-b from-neutral-700 to-neutral-600
        ">
            <SpotifyLinkCard
                title="Look My Way"
                subtitle="2024 • Single"
                url="https://open.spotify.com/album/2ITCfEO8ZYCIbOe8QVLiB0"
                img="/images/look_my_way.jpg"
            />
            <SpotifyLinkCard
                title="Long As I Ain't Alone"
                subtitle="2024 • Single"
                url="https://open.spotify.com/album/1T5NTy3lHhEz2O9Aq1Q6s4"
                img="/images/long_as_i_aint_alone.jpg"
            />
            <SpotifyLinkCard
                title="This is Nether Hour"
                subtitle="Playlist"
                url="https://open.spotify.com/playlist/37i9dQZF1DZ06evO4sV7mt"
                img="/images/this_is_nether_hour.jpg"
            />
            <SpotifyLinkCard
                title="SUNSHINE"
                subtitle="2024 • Album"
                url="https://open.spotify.com/album/0CJY4hih3MeO8rmCpbxxHt"
                img="/images/sunshine.jpg"
            />
            <SpotifyLinkCard
                title="Rattlesnake Gumbo"
                subtitle="2023 • Album"
                url="https://open.spotify.com/album/4FbVIUqviL1clsbL1Ql3wS"
                img="/images/rattlesnake_gumbo.jpg"
            />
            <SpotifyLinkCard
                title="The Hit"
                subtitle="2021 • Single"
                url="https://open.spotify.com/track/3VsBuJJqFL1s20QB87J8AA?si=e5f962c0b65f4705"
                img="/images/the_hit.jpg"
            />
        </div>
    );
};

export default SpotifyLinkCards;
