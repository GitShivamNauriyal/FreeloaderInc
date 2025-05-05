"use client";

import React from "react";
import { motion } from "framer-motion";

const TeamVideoPlayback = () => {
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
                <source src="/assets/video/team_1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Overlay */}
            <div className="relative z-10 flex items-center justify-center h-full px-4">
                <div className="max-w-4xl text-center text-white font-[200] text-xl sm:text-2xl md:text-4xl tracking-wide leading-6 sm:leading-10">
                    <motion.p
                        initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{
                            duration: 0.3,
                            ease: "easeOut",
                        }}
                    >
                        “GREAT THINGS IN BUSINESS ARE{" "}
                        <br className="hidden sm:inline" />
                        NEVER DONE BY ONE PERSON.
                        <br />
                        <motion.span
                            initial={{
                                opacity: 0,
                                y: 20,
                                filter: "blur(10px)",
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                                filter: "blur(0px)",
                            }}
                            transition={{
                                duration: 0.6,
                                delay: 0.2,
                                ease: "easeOut",
                            }}
                            className="font-[900] mt-6 block"
                        >
                            THEY ARE DONE BY A TEAM OF PEOPLE.”
                        </motion.span>
                    </motion.p>
                </div>
            </div>
        </div>
    );
};

export default TeamVideoPlayback;
