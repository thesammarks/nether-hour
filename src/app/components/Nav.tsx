export default function Nav() {
    const navLinkHoverClassName = "hover:scale-105 transition-all duration-300 ease-in-out";

    return (
        <div className="
            z-50 absolute top-10 right-10 flex items-center justify-center gap-5
            py-3 px-6 rounded-xl bg-neutral-800/90 max-[880px]:hidden
            tracking-wide text-neutral-200 font-extrabold
        ">
            <a className={navLinkHoverClassName} href="#tour">TOUR</a> |
            <a className={navLinkHoverClassName} href="#the-band">THE BAND</a> |
            <a className={navLinkHoverClassName} href="#listen-now">LISTEN NOW</a> |
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
