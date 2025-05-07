"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const ReelGlance = () => {
    return (
        <div className="border-t-2 border-white wavy-background pt-8 lg:py-16 relative">
            <div className="flex md:flex-row flex-col items-center justify-center h-full px-4 md:px-16 lg:px-32 xl:px-64">
                <div className="w-full mt-6 flex justify-center lg:justify-start mb-6">
                    <span className="text-white text-3xl sm:text-5xl lg:text-6xl font-bold freeheading">
                        Quick glance at
                        <span className="block">our recent work</span>
                    </span>
                </div>

                <div
                    id="exp-reel"
                    className="relative w-full max-w-72 aspect-[9/18] lg:mx-16"
                >
                    <motion.div
                        className="flex flex-col items-center overflow-visible"
                        initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                        whileInView={{ opacity: 1, y: 0, filter: "blur(0)" }}
                        transition={{
                            ease: "easeIn",
                            duration: 0.6,
                        }}
                    >
                        <div className="relative w-64 md:w-72 aspect-[1/2]">
                            <video
                                src={`/assets/video/experiences/exp_reel_glance.mp4`}
                                className="absolute inset-0 left-2 w-[94%] h-full object-cover rounded-4xl z-0"
                                controls
                                autoPlay
                                loop
                                muted
                                playsInline
                            />
                            <Image
                                src="/assets/images/PhoneFrame.png"
                                alt={`Work Glance`}
                                fill
                                priority
                                className="object-contain rounded-xl z-10 pointer-events-none"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ReelGlance;
