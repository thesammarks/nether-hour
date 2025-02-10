import React from "react";
import NhPageLink from "@/app/components/NhPageLink";
import Footer from "@/app/components/Footer";
import Nav from "@/app/components/Nav/Nav";
import styles from "./PageTemplate.module.scss";

interface PageTemplateProps {
    children: React.ReactNode;
    className?: string;
}

export default function PageTemplate({ children, className }: PageTemplateProps) {
    return (
        <main className={`${styles.page} ${className}`}>
            <Nav />
            <NhPageLink />
            {children}
            <div className={`my-8`}>
                <Footer />
            </div>
        </main>
    );
}
