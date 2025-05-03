"use client";

import React from "react";
import Image from "next/image";

const ExperienceMarketingSection = () => {
    return (
        <div className="w-full bg-white py-20 px-4">
            <div className="max-w-6xl mx-auto flex flex-col gap-8 lg:gap-0 md:flex-row items-center justify-between relative">
                {/* Left Content */}
                <div className="w-full md:w-2/3 relative">
                    {/* Ribbon */}

                    <h2 className="text-5xl md:text-6xl font-[900] text-[#2e0e0e] leading-10 lg:leading-[4rem] mb-6">
                        <div className="relative inline-block">
                            <span>EXPERIENCE</span>
                            <div className="absolute -top-4 -right-12 rotate-8 bg-[#5e17eb] text-white font-semibold px-4 py-1 text-xs sm:text-sm shadow-lg">
                                OUR SOLUTION
                            </div>
                        </div>
                        <br />
                        MARKETING
                    </h2>

                    <p className="text-[#2e0e0e] text-base md:text-base leading-normal mb-3">
                        Experience Marketing is our way to solve various
                        problems faced by brands today, from reduced brand
                        recall, to decreasing brand engagement.
                    </p>
                    <p className="text-[#2e0e0e] text-base md:text-base leading-normal mb-3">
                        As per our philosophy, a brand experience takes place
                        when your audience makes a tangible & physical contact
                        with your brand, without the distraction of doom
                        scrolling and the ever decreasing attention span, which
                        can either be through an event, merch or even
                        influencers.
                    </p>
                    <p className="text-[#2e0e0e] text-base md:text-base leading-normal">
                        It is in that moment when your audience experiences your
                        brand with full attention and their whole being.
                    </p>
                </div>

                {/* Phone Frame Video */}
                <div className="relative w-full max-w-72 aspect-[9/16]">
                    <Image
                        src="/assets/images/PhoneFrame.png" // You can use any SVG phone mockup here
                        alt="Phone Frame"
                        width={400}
                        height={1200}
                        className="absolute inset-0 w-full h-full z-10 pointer-events-none"
                    />
                </div>
            </div>
        </div>
    );
};

export default ExperienceMarketingSection;
