"use client";

import { Boxes } from "../ui/backgrounds/background-boxes";

export default function HeroSection() {
    return (
        <section className="relative w-full h-screen overflow-hidden bg-[#5e17eb]">
            <Boxes />
            <div className="pointer-events-none font-sans tracking-[-0.4em] scale-y-90 scale-x-105 align-baseline leading-36 absolute pl-28 pb-24 inset-0 flex flex-col justify-end text-white z-10">
                <h1>FREE</h1>
                <h1>LOADER</h1>
                <h1 className="tracking-normal pb-0">AGENCY</h1>
                <p className="text-xl leading-5 font-mono p-0 text-cyan-200 tracking-wider">
                    MEMORIES CRAFTED, GIFTED AND FELT.
                </p>
            </div>
        </section>
    );
}
