import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import {Providers} from "./providers";
import '@mantine/core/styles.layer.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nether Hour",
  description: "Band in Austin, TX",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta property="og:title" content="Nether Hour"/>
        <meta property="og:description" content="A band based in Austin, TX. Follow @netherhour on Instagram for the latest announcements and show information. For booking and business inquiries, email netherhour@gmail.com."/>
        <meta property="og:image" content="images/nh_profile.jpg" />
        <meta property="og:type" content="article"/>

        <title>Nether Hour</title>
        <meta name="description" content="A band based in Austin, TX. Follow @netherhour on Instagram for the latest announcements and show information. For booking and business inquiries, email netherhour@gmail.com."/>
        <link rel="icon" href="/favicon.ico"/>
      </head>
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
