import YtVideos from "./YtVideos";

export default function Watch() {
    return (
        <div id="watch" className="flex flex-col w-[60%] max-md:w-[80%] pt-[60px] items-center gap-5">
            <div className="text-3xl font-bold">Watch Now</div>
            <YtVideos/>
        </div>
    );
}
