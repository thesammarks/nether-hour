import React from "react";
import NavBar from "@/app/components/Nav/NavBar";
import NavOverlay from "@/app/components/Nav/NavOverlay";

export default function Nav() {
    return (
        <div className="absolute top-0 left-0 w-full">
            <NavBar />
            <NavOverlay />
        </div>
    );
}
