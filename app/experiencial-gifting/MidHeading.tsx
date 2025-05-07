"use client";

import React from "react";
import { FaArrowDown } from "react-icons/fa";
import { motion } from "framer-motion";

const MidHeading = () => {
    return (
        <div className="px-6 py-12 md:p-16 lg:pt-24 pb-12 bg-white">
            <motion.h1
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
                transition={{ ease: "easeInOut", duration: 0.3 }}
                className="px-4 md:px-20 lg:px-44 max-w-screen-xl mx-auto text-lg sm:text-xl lg:text-5xl text-center text-[#5e17eb] font-bold leading-5 md:leading-8 lg:leading-10 tracking-wide uppercase"
            >
                Physical merchandise provides a tangible way for YOUR AUDIENCE
                to interact with a brand, often leading to a more memorable and
                impactful brand experience than digital or print ads.
            </motion.h1>

            {/* Arrow and "Showreel" text */}
            <motion.div
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
                transition={{ ease: "easeInOut", duration: 0.3, delay: 0.2 }}
                className="mt-4 lg:mt-6 flex flex-col items-center"
            >
                <span className="text-[#5e17eb] font-medium">
                    Check-out our Hamper Innovations
                </span>
                <FaArrowDown className="text-[#5e17eb] text-xl mb-1" />
            </motion.div>
        </div>
    );
};

export default MidHeading;
