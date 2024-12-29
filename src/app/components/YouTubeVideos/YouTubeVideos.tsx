import YouTubeVideoGroup from "./YouTubeVideoGroup";

const YouTubeVideos = () => {
    return (
        // <div className="flex flex-col w-full items-center gap-5">
        <div className="flex flex-col gap-10 text-center">
            <YouTubeVideoGroup title="Chill Country Sessions" ytId1="C07McuC-kEc" ytId2="2hhuFnYdw-A" />
            <YouTubeVideoGroup title="Mount Bonnell Sessions" ytId1="dm4wNVA0Z_Q" ytId2="yHDtAyKV2ZY" />
            <YouTubeVideoGroup title="Eclipse Sessions" ytId1="uy0YU72qSkg" ytId2="mZCXt6cvVMc" />
            <YouTubeVideoGroup title="Austin Artist Spotlight Sessions" ytId1="RP2C4aKWtXc" ytId2="kmxWQOhj_EE" />
            <YouTubeVideoGroup title="Bonsai Tree Sessions" ytId1="zWWnbJnTa3o" ytId2="V82ihL_xywo" />
        </div>
    );
};

export default YouTubeVideos;
