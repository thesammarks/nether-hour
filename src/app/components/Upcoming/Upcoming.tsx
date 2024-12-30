import InfoCards from "./InfoCards";

const Upcoming = () => {
    return (
        <div className="flex flex-col w-full items-center gap-5">
            <div className="text-2xl font-bold">Upcoming</div>
            <div className="text-center max-w-[300px]">
                Follow{' '}
                <a className="font-bold text-[#f40e2d]" href="https://instgram.com/netherhour">@netherhour</a>{' '}
                for latest announcements and show information and email{' '}
                <a className="font-bold text-[#f40e2d]" href="mailto:netherhour@gmail.com">netherhour@gmail.com</a>{' '}
                for booking and business inquires.
            </div>
            <InfoCards />
        </div>
    );
};

export default Upcoming;
