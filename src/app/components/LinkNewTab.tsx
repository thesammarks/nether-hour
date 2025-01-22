import React from "react";
import Link from "next/link";

interface LinkNewTabProps {
    children: React.ReactNode;
    className?: string;
    url: string;
}

export default function LinkNewTab({ children, className, url }: LinkNewTabProps) {
    return (
        <Link
            href={url}
            className={className}
            target="_blank"
            rel="noopener noreferrer"
        >
            {children}
        </Link>
    );
}
