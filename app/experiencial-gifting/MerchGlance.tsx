"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const MerchGlance = () => {
    return (
        <div className="wavy-background py-12 lg:py-20 px-4 md:px-16 lg:px-32">
            {/* <h2 className="text-white text-3xl sm:text-5xl font-semibold text-center mb-12">
                Coke Glance
            </h2> */}

            <div className="flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-24">
                {["1", "2", "3"].map((num, index) => (
                    <motion.div
                        key={num}
                        className="flex flex-col items-center overflow-visible"
                        initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                        whileInView={{ opacity: 1, y: 0, filter: "blur(0)" }}
                        transition={{
                            delay: index * 0.2, // Index-based delay for staggered animation
                            ease: "easeIn",
                            duration: 0.6,
                        }}
                    >
                        <div className="relative w-64 md:w-72 aspect-[1/2]">
                            <video
                                src={`/assets/video/experiencial_gifting/exp_reel_${num}.mp4`}
                                className="absolute inset-0 left-2 w-[94%] h-full object-cover rounded-4xl z-0"
                                controls
                                autoPlay
                                loop
                                muted
                                playsInline
                            />
                            <Image
                                src="/assets/images/PhoneFrame.png"
                                alt={`Merch Glance ${num}`}
                                fill
                                priority
                                className="object-contain rounded-xl z-10 pointer-events-none"
                            />
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default MerchGlance;
