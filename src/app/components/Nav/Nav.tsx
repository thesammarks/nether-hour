import React from "react";
import NavBar from "@/app/components/Nav/NavBar";
import ResponsiveNavMenu from "@/app/components/Nav/ResponsiveNavMenu";

export default function Nav() {
    return (
        <div className="absolute top-0 left-0 w-full">
            <NavBar />
            <ResponsiveNavMenu />
        </div>
    );
}
