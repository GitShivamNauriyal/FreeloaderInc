"use client";

import About from "@/components/About/About";
import Experience from "@/components/Experience/Experience";
import HeroSection from "@/components/HeroSection/HeroSection";
import Influencer from "@/components/Influencer/Influencer";
import Merch from "@/components/Merch/Merch";

export default function Home() {
    return (
        <>
            <HeroSection />
            <Experience />
            <Merch />
            <Influencer />
            <About />
            MORE to be added...
        </>
    );
}
