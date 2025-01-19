export default function Nav() {
    const navLinkHoverClassName = "px-2 py-1 rounded-lg lg:hover:bg-red-500 transition-all duration-300 ease-in-out";

    return (
        <div className="
            z-50 absolute top-[95px] min-[880px]:top-[20px]
            flex items-center justify-center gap-5
            py-2 px-6 rounded-lg bg-neutral-800/90
            max-sm:px-3 max-sm:gap-2
            tracking-wide text-neutral-200 font-extrabold text-sm
        ">
            <a className={`${navLinkHoverClassName} max-sm:hidden`} href="#band">THE BAND</a>
            <a className={navLinkHoverClassName} href="#tour">TOUR</a>
            <a className={navLinkHoverClassName} href="#watch">WATCH</a>
            <a className={navLinkHoverClassName} href="#listen">LISTEN</a>
            <a className={navLinkHoverClassName}
               target="_blank"
               rel="noopener noreferrer"
               href="mailto:netherhour@gmail.com"
            >
                CONTACT
            </a>
        </div>
    );
}
