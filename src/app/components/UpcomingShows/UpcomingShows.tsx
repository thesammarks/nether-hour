import ShowInfoCards from "./ShowInfoCards";

const UpcomingShows = () => {
    return (
        <div className="flex flex-col w-full items-center gap-5">
            <div className="text-2xl font-bold">Upcoming Shows</div>
            <ShowInfoCards />
            <div className="text-center max-w-[300px]">Email <a className="font-bold text-[#f40e2d]" href="mailto:netherhour@gmail.com">netherhour@gmail.com</a> for booking and business inquires.</div>
        </div>
    );
};

export default UpcomingShows;
