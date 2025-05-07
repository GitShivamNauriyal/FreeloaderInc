"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const experiences = [
    {
        title: "CELEBRITIES",
        subtitle:
            "From Bollywood to Youtube, we bring down stars on demand, for your events, collaborations & employee engagement",
        image: "/assets/images/influencer/Picture1.png",
    },
    {
        title: "TOP INFLUENCERS",
        subtitle: "Cat A to Cat C, for all your marketing objectives",
        image: "/assets/images/influencer/Picture2.png",
    },
    {
        title: "HOSTS",
        subtitle: "Guestlisting Hosts for Parties & events",
        image: "/assets/images/influencer/Picture3.png",
    },
];

const TopInfluencers = () => {
    return (
        <section className="w-full py-16">
            {/* Top Section: Heading and Text */}
            <div className="grid grid-cols-1 mt-16 md:grid-cols-2 gap-6 lg:gap-0 px-4 md:px-16 max-w-screen-xl mx-auto relative">
                {/* Background Prop Image */}
                <Image
                    src="/assets/images/TangibleBgProp.png"
                    alt="Tangible Background Prop"
                    width={200}
                    height={200}
                    className="absolute -top-8 left-4 w-32 h-32 object-contain z-0 opacity-100"
                />

                {/* Left - Title */}
                <motion.div
                    initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.5 }}
                    className="flex items-start md:items-center justify-start z-10"
                >
                    <h2 className="text-5xl sm:text-7xl font-bold leading-12 lg:leading-16">
                        <span className="block text-5xl italic font-medium">
                            Top
                        </span>
                        INFLUENCERS
                    </h2>
                </motion.div>

                {/* Right - Description */}
                <motion.div
                    initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="flex flex-col justify-center text-white freeheading"
                >
                    <p className="text-base mb-4">
                        We work closely with influencers from various fields,
                        for your Social Media campaigns, events, parties,
                        endorsement, shoots & more.
                    </p>
                    <p className="font-bold uppercase">
                        WITH THE RIGHT FACE AND VOICE, YOUR BRAND CAN AMPLIFY
                        ITS PRESENCE IN A HIGHLY IMPACTFUL AND PERSONALISED
                        MANNER.
                    </p>
                </motion.div>
            </div>

            {/* Grid of Influencer Types */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-6 px-4 md:px-16 mt-12 max-w-screen-xl mx-auto">
                {experiences.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        className="text-white border rounded lg:border-0 pb-2"
                    >
                        <div className="relative w-full aspect-[3/2] rounded-md overflow-hidden">
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 300px"
                                className="object-cover"
                            />
                        </div>

                        <h3 className="text-lg font-bold mt-4 pl-2 freeheading">
                            {item.title}
                        </h3>
                        <p className="text-sm opacity-80 pl-2">
                            {item.subtitle}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default TopInfluencers;
