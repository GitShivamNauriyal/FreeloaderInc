"use client";

import React from "react";
import { motion } from "framer-motion";

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

            {/* Overlay Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
                <motion.div
                    initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="max-w-4xl text-center text-white font-[200] text-xl sm:text-2xl md:text-4xl tracking-wide leading-6 sm:leading-10"
                >
                    <p>
                        PEOPLE DON’T CONNECT WITH PIXELS{" "}
                        <br className="hidden sm:inline" />
                        THEY CONNECT WITH PRESENCE.
                        <br />
                        <span className="font-[900] mt-4 lg:mt-6 block">
                            LET’S MAKE YOUR BRAND PART OF THEIR PHYSICAL WORLD.
                        </span>
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9, rotate: -4 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: -2 }}
                    transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                    className="bg-cyan-500 text-[#5e17eb] px-4 py-2 -rotate-2 mt-4 lg:mt-2 font-semibold shadow-lg"
                >
                    LET’S WORK TOGETHER
                </motion.div>
            </div>
        </div>
    );
};

export default OverviewVideoPlayback_2;
