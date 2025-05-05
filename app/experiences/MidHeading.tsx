"use client";
import Link from "next/link";
import React from "react";
import { FaArrowDown } from "react-icons/fa";

const MidHeading = () => {
    return (
        <div className="px-6 py-12 md:p-16 lg:pt-24 pb-12 bg-white">
            <h1 className="px-4 md:px-20 lg:px-56 max-w-screen-xl mx-auto text-lg sm:text-xl lg:text-4xl text-center text-[#5e17eb] font-bold leading-5 lg:leading-8 tracking-wide uppercase">
                95% of marketers agree that live events provide attendees with a
                valuable opportunity to form in-person connections in an
                increasingly digital world
            </h1>

            {/* Arrow and "Showreel" text */}
            <Link href="#exp-reel">
                <div className="mt-4 lg:mt-6 flex flex-col items-center">
                    <span className="text-[#5e17eb] font-medium">Showreel</span>
                    <FaArrowDown className="text-cyan-500  mb-1" />
                </div>
            </Link>
        </div>
    );
};

export default MidHeading;
