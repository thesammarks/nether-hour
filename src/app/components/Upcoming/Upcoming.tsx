import InfoCards from "./InfoCards";

const Upcoming = () => {
    return (
        <div className="flex flex-col w-full items-center gap-5">
            <div className="text-2xl font-bold">Upcoming</div>
            <div className="text-center max-w-[325px]">
                Follow{' '}
                <a target="_blank" rel="noopener noreferrer" className="font-bold text-[#f40e2d]" href="https://instagram.com/netherhour">@netherhour</a>{' '}
                on Instagram for the latest announcements and show information. For booking and business inquiries, email{' '}
                <a target="_blank" rel="noopener noreferrer" className="font-bold text-[#f40e2d]" href="mailto:netherhour@gmail.com">netherhour@gmail.com</a>.
            </div>
            <InfoCards />
        </div>
    );
};

export default Upcoming;
