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
                <source src="/assets/video.overview.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Overlay */}
            <div className="relative z-10 flex items-center justify-center h-full px-4 bg-black/20">
                <div className="max-w-4xl text-center text-[#5e17eb] font-bold text-xl sm:text-2xl md:text-4xl leading-relaxed sm:leading-snug">
                    <p>
                        “YOU CAN’T HOLD A HASHTAG.{" "}
                        <br className="hidden sm:inline" />
                        BUT YOU CAN HOLD A MEMORY…
                        <br />
                        <span className="font-extrabold">
                            CRAFTED, GIFTED, AND FELT.
                        </span>
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
