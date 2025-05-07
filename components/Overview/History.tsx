"use client";

import React from "react";
import { motion } from "framer-motion";

const History = () => {
    return (
        <div className="w-screen  wavy-background">
            <div className="px-6 py-12 md:p-16 lg:py-28 flex justify-center items-center">
                <motion.h1
                    initial={{ filter: "blur(30px)" }}
                    whileInView={{ filter: "blur(0px)" }}
                    transition={{ duration: 0.4 }}
                    className="freeheading px-10 md:px-20 lg:px-28 max-w-screen-xl text-3xl sm:text-5xl  lg:text-7xl  text-left md:text-center freeheading text-white font-extrabold leading-7 sm:leading-12 md:leading-12 lg:leading-16 tracking-wide uppercase"
                >
                    CREATING TANGIBLE
                    {/* <br /> */}
                    <br />
                    BRAND EXPERIENCES
                    <br />
                    SINCE 2009
                    {/* <br /> */}
                </motion.h1>
            </div>
        </div>
    );
};

export default History;
