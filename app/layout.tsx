import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import LoadingScreen from "./loading";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Free Loader Agency",
    description:
        "Free Loader Agency - Since 2009, Tangible Memories Crafted, Gifted and Felt.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                {/* <LoadingScreen> */}
                <Navbar />
                {children}
                <Footer />
                {/* </LoadingScreen> */}
            </body>
        </html>
    );
}
