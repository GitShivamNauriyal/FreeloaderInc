"use client";

import React from "react";
import { motion } from "framer-motion";

const Careers = () => {
    return (
        <div className="w-screen wavy-background pt-8">
            <section className="max-w-6xl mx-auto gap-8 px-4 lg:px-0 py-6 md:py-16 text-white">
                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="freeheading text-4xl sm:text-5xl md:text-6xl lg:text-[60px] xl:text-[72px] font-extrabold leading-8 md:leading-12 lg:leading-16 tracking-normal uppercase"
                >
                    Careers at <br className="hidden sm:block" />
                    Freeloader Inc.
                </motion.h2>

                {/* Content Section */}
                <div className="flex flex-col md:flex-row justify-between items-start gap-8 lg:gap-0 lg:py-10">
                    {/* Left Side */}
                    <motion.div
                        initial={{
                            opacity: 0,
                            x: -20,
                            filter: "blur(4px)",
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                            filter: "blur(0px)",
                        }}
                        transition={{
                            duration: 0.5,
                            ease: "easeOut",
                            delay: 0.2,
                        }}
                        className="flex-1 w-full"
                    >
                        <div className="mt-6 sm:mt-10">
                            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold leading-5 lg:leading-8 uppercase">
                                Join Our <br />
                                Creative Collective <br />
                                of Thinkers, Makers <br />
                                and Doers
                            </h3>
                            <div className="cursor-pointer inline-block bg-black text-white text-xs sm:text-sm font-bold px-3 py-1 mt-2">
                                WE&apos;RE HIRING
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Side */}
                    <motion.div
                        initial={{
                            opacity: 0,
                            x: 20,
                            filter: "blur(10px)",
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                            filter: "blur(0px)",
                        }}
                        transition={{
                            duration: 0.5,
                            ease: "easeOut",
                            delay: 0.2,
                        }}
                        className="flex-1 w-full max-w-xl leading-tight text-sm sm:text-base text-gray-100 space-y-4 lg:space-y-6"
                    >
                        <p>
                            At Freeloader, we don&apos;t just build experiences
                            — we build legacies. If you&apos;re passionate about
                            bold ideas, innovative execution, and creating
                            out-of-the-box campaigns, this is the place for you.
                        </p>
                        <p>
                            We’re looking for thinkers, designers, coders,
                            storytellers, and visionaries ready to push
                            boundaries. Explore our open roles or send us a
                            pitch — if you believe you belong here, chances are,
                            you do.
                        </p>
                        <p>
                            <span className="font-bold">Email us:</span>{" "}
                            <a
                                href="mailto:careers@freeloader.in"
                                className="underline underline-offset-2"
                            >
                                info@freeloader.in
                            </a>
                        </p>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Careers;
