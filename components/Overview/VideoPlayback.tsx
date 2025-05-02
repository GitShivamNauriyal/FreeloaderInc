"use client";

import React from "react";

const VideoPlayback = () => {
    return (
        <div className="relative w-full h-screen overflow-hidden">
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover"
            >
                <source src="/assets/video/overview.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Overlay */}
            <div className="relative z-10 flex items-center justify-center h-full px-4">
                <div className="max-w-4xl text-center text-[#5e17eb] font-extralight text-xl sm:text-2xl md:text-4xl tracking-wide leading-relaxed sm:leading-10">
                    <p>
                        “YOU CAN’T HOLD A HASHTAG.{" "}
                        <br className="hidden sm:inline" />
                        BUT YOU CAN HOLD A MEMORY…
                        <br />
                        <span className="font-[900]">
                            CRAFTED, GIFTED, AND FELT.
                        </span>
                        <br />
                        <br />
                        THAT’S HOW BRANDS BECOME
                        <br />
                        PART OF SOMEONE’S LIFE.”
                    </p>
                </div>
            </div>
        </div>
    );
};

export default VideoPlayback;
