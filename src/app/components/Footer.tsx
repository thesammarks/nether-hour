import React from "react";
import LinkNewTab from "@/app/components/LinkNewTab";

export default function Footer() {
    return (
        <footer className="pt-10 max-w-[80%] text-center">
            <span>© 2024 Nether Family Records | </span>
            <span>
                website by&nbsp;
                <b><LinkNewTab className="text-red-500" url={process.env.author_link as string}>sam</LinkNewTab></b>
            </span>
        </footer>
    );
}
