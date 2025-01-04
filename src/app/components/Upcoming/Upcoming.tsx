import InfoCards from "./InfoCards";

export default function Upcoming() {
    return (
        <div id="upcoming-shows" className="flex flex-col w-full items-center gap-5 py-8">
            <div className="text-3xl font-bold">Upcoming Shows</div>
            <InfoCards/>
            <div className="flex flex-col gap-2 text-lg text-center max-w-[300px] lg:max-w-[400px]">
                <div>
                    Follow{' '}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-[#f40e2d]"
                        href="https://instagram.com/netherhour"
                    >
                        @netherhour
                    </a>{' '}
                    on Instagram for the latest announcements and show information
                </div>

                <div>
                    For booking and business inquiries, email{' '}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-[#f40e2d]"
                        href="mailto:netherhour@gmail.com">
                        netherhour@gmail.com
                    </a>
                </div>
            </div>
        </div>
    );
}
