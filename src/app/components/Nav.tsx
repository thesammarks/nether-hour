export default function Nav() {
    const navLinkHoverClassName = "hover:text-xl transition-all duration-300 ease-in-out";

    return (
        <div className="
            z-50 absolute top-10 right-10 flex items-center justify-center gap-5
            py-3 px-8 rounded-xl bg-neutral-800/90 max-[880px]:hidden
            text-lg tracking-wide text-neutral-200 font-extrabold
        ">
            <a className={navLinkHoverClassName} href="#upcoming-shows">UPCOMING SHOWS</a> |
            <a className={navLinkHoverClassName} href="#the-band">THE BAND</a> |
            <a className={navLinkHoverClassName} href="#listen-now">LISTEN NOW</a> |
            <a className={navLinkHoverClassName} href="mailto:netherhour@gmail.com">CONTACT</a>
        </div>
    );
}
