"use client";

import React from "react";

const OverviewVideoPlayback_2 = () => {
    return (
        <div className="relative w-full h-[90vh] lg:h-screen overflow-hidden">
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover"
            >
                <source src="/assets/video/overview_2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Overlay */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
                <div className="max-w-4xl text-center text-white font-[200] text-xl sm:text-2xl md:text-4xl tracking-wide leading-6 sm:leading-10">
                    <p>
                        PEOPLE DON’T CONNECT WITH PIXELS{" "}
                        <br className="hidden sm:inline" />
                        THEY CONNECT WITH PRESENCE.
                        <br />
                        <span className="font-[900] mt-6 block">
                            LET’S MAKE YOUR BRAND PART OF THEIR PHYSICAL WORLD.
                        </span>
                    </p>
                </div>
                <div className="bg-cyan-500 color-#5e17eb p-2 -rotate-6 mt-2">
                    LET’S WORK TOGETHER
                </div>
            </div>
        </div>
    );
};

export default OverviewVideoPlayback_2;
