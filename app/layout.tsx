import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../style/globals.css";
import { headers } from "next/headers";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default async function RootLayout({
    children,
    desktop,
    mobile,
}: {
    children: React.ReactNode;
    desktop: React.ReactNode;
    mobile: React.ReactNode;
}) {
    const ua = (await headers()).get("user-agent") || "";
    const isMobile = /iPhone|Android|Mobile/.test(ua);

    return (
        <html lang="en">
            <body>{isMobile ? mobile : desktop}</body>
        </html>
    );
}
