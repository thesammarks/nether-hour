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
            {
                url: "/favicon.ico",
                type: "image/x-icon"
            },
        ],
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
          <meta name="description" content="A rock band based in Austin, TX. Follow @netherhour on Instagram for the latest announcements and show information. For booking and business inquiries, email netherhour@gmail.com." />
          <meta name="keywords" content="musical artist, rock band, blues rock, funk, blues, rock, rock and roll, guitar, austin, atx" />
          <meta name="author" content="Nether Hour" />
          <link rel="canonical" href="https://www.netherhour.com/" />

          {/* Open Graph / Facebook */}
          <meta property="og:title" content="Nether Hour" />
          <meta property="og:description" content="A rock band based in Austin, TX. Follow @netherhour on Instagram for the latest announcements and show information. For booking and business inquiries, email netherhour@gmail.com." />
          <meta property="og:image" content="/images/nh_profile.jpg" />
          <meta property="og:url" content="https://www.netherhour.com/" />
          <meta property="og:type" content="website" />

          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Nether Hour" />
          <meta name="twitter:description" content="A rock band based in Austin, TX. Follow @netherhour on Instagram for the latest announcements and show information. For booking and business inquiries, email netherhour@gmail.com." />
          <meta name="twitter:image" content="/images/nh_profile.jpg" />

          {/* Favicon */}
          <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
