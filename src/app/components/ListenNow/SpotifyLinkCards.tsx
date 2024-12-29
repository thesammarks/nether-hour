'use client'

import SpotifyLinkCard from "./SpotifyLinkCard";
import Slider from "react-slick";

const SpotifyLinkCards = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        swipeToSlide: true,
    };
        
    return (
        <div className="whitespace-nowrap max-w-[75%] rounded-xl text-center bg-neutral-600 p-4">
            <Slider {...settings}>
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
                    url="https://open.spotify.com/album/4FbVIUq3VsBuJJqFL1s20QB87J8AAviL1clsbL1Ql3wS"
                    img="/images/the_hit.jpg"
                />
            </Slider>
        </div>
    );
};

export default SpotifyLinkCards;
