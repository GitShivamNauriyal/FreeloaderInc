"use client";

import React from "react";
import { motion } from "framer-motion";

const Creation = () => {
    return (
        <div>
            <div className="w-screen wavy-background pt-16">
                <section className="max-w-7xl mx-auto gap-8 px-4 sm:px-6 md:px-20 py-16 text-white">
                    {/* Heading */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-[60px] xl:text-[72px] font-extrabold leading-8 lg:leading-16 tracking-normal uppercase"
                    >
                        Creating Tangible Brand{" "}
                        <br className="hidden sm:block" />
                        Experiences Since 2009
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
                                <h3 className="text-lg freelogo sm:text-xl md:text-2xl lg:text-3xl font-extrabold leading-5  lg:leading-8 uppercase">
                                    Freeloader <br />
                                    Incorporated <br />
                                    Communications <br />
                                    Private Limited
                                </h3>
                                <div className="cursor-pointer inline-block bg-black text-white text-xs sm:text-sm font-bold px-3 py-1 mt-2">
                                    SINCE 2009
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
                                Founded in 2009, by Bhuvanesh S Manhas, FIC came
                                into inception with the same vision that we
                                continue to follow in 2025, to create tangible
                                experiences for your audience.
                            </p>
                            <p>
                                FIC started its journey with several projects
                                which were ahead of their time, from creating
                                experience based marketing strategies for{" "}
                                <span className="font-bold">
                                    Burn Energy Drink by Coca-Cola
                                </span>
                                , to building innovative 3D OOH campaigns for{" "}
                                <span className="font-bold">Jaquar</span>, to
                                successfully executing India’s 1st ever console
                                gaming experience on a cinema screen for{" "}
                                <span className="font-bold">
                                    Microsoft XBOX 360
                                </span>
                                .
                            </p>
                        </motion.div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Creation;
