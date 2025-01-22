import React from "react";
import NavBar from "@/app/components/Nav/NavBar";
import ResponsiveSocialNav from "@/app/components/Nav/ResponsiveSocialNav";

export default function Nav() {
    return (
        <div className="absolute top-0 left-0 w-full">
            <NavBar />
            <ResponsiveSocialNav />
        </div>
    );
}
