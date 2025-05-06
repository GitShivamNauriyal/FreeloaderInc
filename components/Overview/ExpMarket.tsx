"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const ExperienceMarketingSection = () => {
    return (
        <div className="w-full bg-white py-20 px-4">
            <div className="max-w-6xl mx-auto flex flex-col gap-8 lg:gap-0 md:flex-row items-center justify-between relative">
                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -30, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="max-w-2xl md:w-2/3 relative"
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
                    <motion.h2
                        initial={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="text-4xl md:text-7xl font-extrabold text-black/80 leading-10 lg:leading-[4rem] mb-6 z-10 freeheading"
                    >
                        <div className="relative inline-block z-10">
                            <span>EXPERIENCE</span>
                            <div className="absolute -top-4 -right-12 rotate-8 bg-[#5e17eb] text-white font-semibold px-4 py-1 text-xs sm:text-base shadow-lg rounded-lg">
                                OUR SOLUTION
                            </div>
                        </div>
                        <br />
                        MARKETING
                    </motion.h2>

                    {/* Paragraphs */}
                    <motion.p
                        initial={{ opacity: 0, x: -20, filter: "blur(10px)" }}
                        whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="mt-4 text-[#2a1114] text-base md:text-lg leading-5 md:leading-tight"
                    >
                        Experience Marketing is our way to solve various
                        problems faced by brands today, from reduced brand
                        recall, to decreasing brand engagement.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, x: -20, filter: "blur(10px)" }}
                        whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="mt-4 text-[#2a1114] text-base md:text-lg leading-5 md:leading-tight"
                    >
                        As per our philosophy, a brand experience takes place
                        when your audience makes a tangible & physical contact
                        with your brand, without the distraction of doom
                        scrolling and the ever decreasing attention span, which
                        can either be through an event, merch or even
                        influencers.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, x: -20, filter: "blur(10px)" }}
                        whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="mt-4 text-[#2a1114] text-base md:text-lg leading-5 md:leading-tight"
                    >
                        It is in that moment when your audience experiences your
                        brand with full attention and their whole being.
                    </motion.p>
                </motion.div>

                {/* Phone Frame */}
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
                </motion.div>
            </div>
        </div>
    );
};

export default ExperienceMarketingSection;
