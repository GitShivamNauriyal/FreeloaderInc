"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const experiences = [
    {
        title: "Bhuvanesh S Manhas",
        subtitle: "Creative Director",
        image: "/assets/images/team/Picture1.png",
    },
    {
        title: "Nikhell Lall",
        subtitle: "Operations Director",
        image: "/assets/images/team/Picture2.png",
    },
    {
        title: "Sarthak Vig",
        subtitle: "Tech Lead",
        image: "/assets/images/team/Picture3.png",
    },
    {
        title: "Surbhe Singgla",
        subtitle: "Sourcing Lead",
        image: "/assets/images/team/Picture4.png",
    },
];

const CoreTeam = () => {
    return (
        <section className="w-full py-4">
            {/* Top Section: Heading */}
            <motion.div
                initial={{ opacity: 0, x: 20, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="px-4 md:px-16 mt-16 max-w-screen-xl mx-auto"
            >
                <div className="flex items-start md:items-center justify-start relative">
                    <Image
                        src="/assets/images/TangibleBgProp.png"
                        alt="Tangible Background Prop"
                        width={200}
                        height={200}
                        className="absolute -top-8 -left-16 w-32 h-32 object-contain z-0 opacity-100"
                    />
                    <h2 className="text-5xl sm:text-6xl font-bold leading-10 z-10">
                        <span className="block text-4xl italic font-medium">
                            Meet Our
                        </span>
                        CORE TEAM
                    </h2>
                </div>
            </motion.div>

            {/* Bottom Section: Team Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 px-4 md:px-16 mt-12 max-w-screen-xl mx-auto">
                {experiences.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{
                            duration: 0.3,
                            ease: "easeOut",
                            delay: index * 0.1,
                        }}
                        className="text-white border border-white/20 rounded lg:border-0 pb-2"
                    >
                        <Image
                            width={200}
                            height={200}
                            src={item.image}
                            alt={item.title}
                            className="w-full h-auto object-cover rounded-md"
                        />
                        <div className="border-2 border-white rounded-full mt-4 px-2 py-3">
                            <h3 className="text-xl text-center font-bold freeheading">
                                {item.title}
                            </h3>
                            <p className="text-md text-center italic opacity-80">
                                {item.subtitle}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default CoreTeam;
