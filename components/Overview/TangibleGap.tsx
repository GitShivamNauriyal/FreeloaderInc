"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const TangibleGap = () => {
    return (
        <div className="bg-white w-full py-16 px-4">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -30, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="max-w-2xl relative freepara"
                >
                    {/* Background Prop Image */}
                    <Image
                        src="/assets/images/TangibleBgProp.png"
                        alt="Tangible Background Prop"
                        width={200}
                        height={200}
                        className="absolute -top-8 -left-8 w-32 h-32 object-contain z-0 opacity-70"
                    />

                    {/* Heading Block */}
                    <motion.div
                        initial={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="relative z-10 freelogo font-extrabold freeheading"
                    >
                        <div className="flex items-center gap-2">
                            <h2 className="text-4xl lg:text-7xl font-extrabold leading-4 text-black/80">
                                THE
                            </h2>
                            <span className="bg-[#5e17eb] text-sm md:text-2xl text-white px-2 lg:px-4 py-2 font-bold text-md rounded-md">
                                WE HAVE A REAL PROBLEM
                            </span>
                        </div>
                        <h2 className="text-4xl lg:text-7xl font-extrabold text-black/80">
                            TANGIBLE GAP
                        </h2>
                    </motion.div>

                    {/* Paragraphs */}
                    <motion.p
                        initial={{ opacity: 0, x: -20, filter: "blur(10px)" }}
                        whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="mt-4 text-[#2a1114] text-base md:text-lg leading-5 md:leading-tight"
                    >
                        In an all digital era, brands are beginning to lose
                        tangible connection with their audience at an ever
                        increasing pace.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, x: -20, filter: "blur(10px)" }}
                        whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="mt-4 text-[#2a1114] text-base md:text-lg leading-5 md:leading-tight"
                    >
                        Instead of reactive & ad-hoc solutions to reconnect with
                        the audience, the demand for well thought out
                        experiences is increasing with every new marketing
                        initiative.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, x: -20, filter: "blur(10px)" }}
                        whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="mt-4 text-[#2a1114] text-base md:text-lg leading-5 md:leading-tight"
                    >
                        Since 2009, we at FIC have constantly evolved towards
                        innovating and building new age{" "}
                        <strong>
                            ‘Design based–Tech forward–Pro human connection’
                        </strong>{" "}
                        solutions, pushing the boundaries of what an experience
                        really means.
                    </motion.p>
                </motion.div>

                {/* Phone Frame + (optional video) */}
                <motion.div
                    initial={{ opacity: 0, x: 50, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="relative w-full max-w-80 aspect-[1/2]"
                >
                    <Image
                        src="/assets/images/PhoneFrame.png"
                        alt="Phone Frame"
                        width={400}
                        height={1200}
                        className="absolute inset-0 w-full h-full z-10 pointer-events-none"
                    />

                    {/* Optional Video — uncomment to use */}
                    {/* <video
                        src="/assets/tangable.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-[7%] w-[86%] h-[86%] object-cover rounded-[2rem] z-0"
                    /> */}
                </motion.div>
            </div>
        </div>
    );
};

export default TangibleGap;
