"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const CokeGlance = () => {
    return (
        <div className="wavy-background py-16 mb-8 px-4 md:px-16 lg:px-32 freeheading">
            {/* <h2 className="text-white text-3xl sm:text-5xl font-semibold text-center mb-12">
                Coke Glance
            </h2> */}

            <div className="flex flex-col md:flex-row items-center justify-center gap-16 lg:gap-44 freeheading">
                {/* Coke Glance 2024 */}
                <div className="flex flex-col items-center">
                    <span className="text-white mb-4 lg:mb-8 text-2xl lg:text-4xl font-bold">
                        COKE MAGIC 2024
                    </span>
                    <div className="relative w-64 md:w-72 aspect-[1/2]">
                        <motion.div
                            className="flex flex-col items-center overflow-visible"
                            initial={{
                                opacity: 0,
                                y: 20,
                                filter: "blur(10px)",
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                                filter: "blur(0)",
                            }}
                            transition={{
                                ease: "easeIn",
                                duration: 0.6,
                            }}
                        >
                            <div className="relative w-64 md:w-72 aspect-[1/2]">
                                <video
                                    src={`/assets/video/experiences/coke_glance_1.mp4`}
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
                {/* Coke Glance 2023 */}
                <div className="flex flex-col items-center">
                    <span className="text-white mb-4 lg:mb-8 text-2xl lg:text-4xl font-bold">
                        COKE MAGIC 2023
                    </span>
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
                                src={`/assets/video/experiences/coke_glance_2.mp4`}
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

export default CokeGlance;
