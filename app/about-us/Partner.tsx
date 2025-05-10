"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const imageList = Array.from(
    { length: 6 },
    (_, i) => `/assets/images/team/partner${i + 1}.png`
);

const PartnerAllianceSection = () => {
    return (
        <section
            className="bg-[#661eff] text-white py-20 px-6 md:px-16 wavy-background"
            style={{ fontFamily: "AgrandirWide, sans-serif" }}
        >
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                {/* Left: Text */}
                <motion.div
                    initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0)" }}
                    transition={{ duration: 0.2, ease: "easeOut", delay: 0.2 }}
                >
                    <h2 className="text-5xl lg:text-7xl freeheading md:text-6xl font-bold leading-10 lg:leading-16">
                        First <br />
                        Preference <br />
                        Alliance
                    </h2>
                    <div className="inline-block bg-black px-4 py-2 text-sm font-bold uppercase tracking-wider rotate-[-2deg]">
                        OUR PARTNER NETWORK
                    </div>

                    <p className="mt-8 text-lg leading-relaxed text-white/90">
                        With our Pan-India partner network, we have formed a{" "}
                        <span className="font-semibold">
                            1<sup>st</sup> Preference Alliance
                        </span>{" "}
                        with our long-term regular manufacturers, export houses,
                        producers, fabricators & suppliers.
                    </p>
                    <p className="mt-6 text-lg leading-relaxed text-white/90">
                        We maintain complete control over{" "}
                        <span className="font-bold">
                            QUALITY, DESIGN, GUIDELINES & FINAL PRODUCT
                            DELIVERY.
                        </span>
                    </p>
                </motion.div>

                {/* Right: Logos with staggered animations */}
                <div className="grid grid-cols-2 sm:grid-cols-2 gap-2 items-center justify-items-center">
                    {imageList.map((image, idx) => (
                        <motion.div
                            key={idx}
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
                                delay: 0.3 + idx * 0.1,
                                duration: 0.3,
                                ease: "easeOut",
                            }}
                        >
                            <Image
                                src={image}
                                width={300}
                                height={300}
                                alt={`Partner logo ${idx + 1}`}
                                className="w-32 sm:w-44 h-auto"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PartnerAllianceSection;
