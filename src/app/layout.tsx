import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import {Providers} from "./providers";
import '@mantine/core/styles.layer.css';
import React from "react";

const inter = Inter({ subsets: ["latin"] });

/* To-do: Add apple icons and alternative icon sizes */
export const metadata: Metadata = {
    metadataBase: new URL("https://www.netherhour.com"),
    robots: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
        googleBot: "index, follow"
    },
    applicationName: "Nether Hour",
    appleWebApp: {
        title: "Nether Hour",
        statusBarStyle: "default",
        capable: true
    },
    openGraph: {
        siteName: "Nether Hour",
        type: "website",
        locale: "en_US",
        url: "https://www.netherhour.com",
        title: "Nether Hour",
        description: "A rock band based in Austin, TX. Follow @netherhour on Instagram for the latest announcements and show information. For booking and business inquiries, email netherhour@gmail.com.",
        images: [
            {
                url: "/images/nh_profile.jpg",
                alt: "Nether Hour",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        site: "https://www.netherhour.com",
        title: "Nether Hour",
        description: "A rock band based in Austin, TX. Follow @netherhour on Instagram for the latest announcements and show information. For booking and business inquiries, email netherhour@gmail.com.",
        images: ["/images/nh_profile.jpg"],
    },
    icons: {
        icon: [
            { rel: "icon", url: "/favicon.svg", type: "image/svg+xml" },
            { rel: "icon", url: "/favicon.ico", sizes: "any", type: "image/x-icon" },
            { rel: "icon", url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
            { rel: "icon", url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
            { rel: "icon", url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
        ],
        apple: "/apple-touch-icon.png",
        shortcut: [
            {
                url: "/favicon.ico",
                type: "image/x-icon"
            }
        ],
    }
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                {/* Primary Meta Tags */}
                <title>Nether Hour</title>
                <meta name="description"
                      content="A rock band based in Austin, TX. Follow @netherhour on Instagram for the latest announcements and show information. For booking and business inquiries, email netherhour@gmail.com."/>
                <meta name="keywords"
                      content="musical artist, rock band, blues rock, funk, blues, rock, rock and roll, guitar, austin, atx"/>
                <meta name="author" content="Nether Hour"/>
                <meta name="robots" content="index, follow"/>
                <meta name="googlebot" content="index, follow"/>
                <link rel="canonical" href="https://www.netherhour.com/"/>

                {/* Open Graph / Facebook */}
                <meta property="og:title" content="Nether Hour"/>
                <meta property="og:description"
                      content="A rock band based in Austin, TX. Follow @netherhour on Instagram for the latest announcements and show information. For booking and business inquiries, email netherhour@gmail.com."/>
                <meta property="og:image" content="/images/nh_profile.jpg"/>
                <meta property="og:url" content="https://www.netherhour.com/"/>
                <meta property="og:type" content="website"/>

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image"/>
                <meta name="twitter:title" content="Nether Hour"/>
                <meta
                    name="twitter:description"
                    content="A rock band based in Austin, TX. Follow @netherhour on Instagram for the latest announcements and show information. For booking and business inquiries, email netherhour@gmail.com."
                />
                <meta name="twitter:image" content="/images/nh_profile.jpg"/>

                {/* Icons */}
                <link rel="icon" href="/favicon.ico"/>
                <link rel="icon" href="/favicon.svg" sizes="any" type="image/svg+xml"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png"/>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
                <link rel="manifest" href="/manifest.json"/>
            </head>
            <body className={inter.className}>
                <Providers>
                    {children}
                </Providers>
            </body>
        </html>
    );
}
