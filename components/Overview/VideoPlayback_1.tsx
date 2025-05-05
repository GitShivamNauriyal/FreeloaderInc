"use client";

import React from "react";
import { motion } from "framer-motion";

const OverviewVideoPlayback = () => {
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
                <source src="/assets/video/overview.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Overlay Text with Motion */}
            <div className="relative z-10 flex items-center justify-center h-full px-4">
                <motion.div
                    initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="max-w-4xl text-center text-[#5e17eb] font-extralight text-xl sm:text-2xl md:text-5xl tracking-wide leading-6 sm:leading-10"
                >
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
                </motion.div>
            </div>
        </div>
    );
};

export default OverviewVideoPlayback;
