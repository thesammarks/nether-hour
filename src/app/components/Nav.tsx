export default function Nav() {
    const navLinkClassName = "px-2 py-1 rounded-lg lg:hover:bg-red-500 transition-all duration-300 ease-in-out";

    return (
        <div className="
            max-[880px]:hidden
            z-50 w-full h-[50px] absolute top-0
            flex items-center justify-center gap-5
            bg-neutral-900/90 tracking-wide text-neutral-200
            font-extrabold text-sm
            max-sm:px-3 max-sm:gap-2
        ">
            <a className={navLinkClassName} href="#about">ABOUT</a>
            <a className={navLinkClassName} href="#tour">TOUR</a>
            <a className={navLinkClassName} href="#watch">WATCH</a>
            <a className={navLinkClassName} href="#listen">LISTEN</a>
            <a className={navLinkClassName}
               target="_blank"
               rel="noopener noreferrer"
               href="mailto:netherhour@gmail.com"
            >
                CONTACT
            </a>
        </div>
    );
}
