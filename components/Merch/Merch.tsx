import React from "react";
import { motion } from "framer-motion";
import MerchScrollSection from "./ScrollObserver";
import Image from "next/image";

const Merch = () => {
    const merchGridContent = {
        topImage: "/assets/images/cubes_0.png",
        middle: {
            image: "/assets/images/cubes_0.png",
            text: `0ur team has deep specialization in creating brand experience oriented hamper kits, fashion wear, accessories and tech based merchandise for your audience. Our merch is not just a product; it's a statement, a lifestyle, and a way to connect with your audience on a deeper level. We believe in creating merchandise that resonates with your brand's identity and values. We work closely with you to understand your vision and bring it to life through our unique designs and high quality products. Whether it's a limited edition drop or a full fledged merchandise line, we have the expertise and creativity to make it happen. Our team is dedicated to delivering exceptional results that exceed your expectations. We take pride in our attention to detail and commitment to quality, ensuring that every piece of merchandise we create is a true reflection of your brand.`,
        },
        bottomGrid: [
            {
                image: "/assets/images/cubes_0.png",
                description: "Description for merch item 1",
            },
            {
                image: "/assets/images/cubes_0.png",
                description: "Description for merch item 2",
            },
            {
                image: "/assets/images/cubes_0.png",
                description: "Description for merch item 3",
            },
        ],
    };

    return (
        <div id="merch" className="border-t-[1px] border-t-white/10 mb-8">
            <div className="relative z-20 pt-12 pb-16 lg:pt-24 lg:pb-16 max-w-5xl mx-auto">
                <div className="px-8 mb-4 select-none">
                    <motion.div
                        initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                        whileInView={{
                            opacity: 1,
                            y: [20, -5, 0],
                            filter: "blur(0px)",
                        }}
                        transition={{
                            duration: 0.6,
                            ease: [0.4, 0, 0.2, 1],
                            delay: 0.2,
                        }}
                        className="relative border-b-[1px] border-b-violet-500"
                    >
                        <span className="absolute cursor-grab -top-3 -left-6 -rotate-20 hover:-rotate-12 bg-violet-500 text-black text-md px-2 py-0.5 rounded transition-all">
                            Custom
                        </span>
                        <h4
                            className="text-3xl lg:text-5xl  lg:leading-tight tracking-normal font-[900] text-transparent dark:text-transparent"
                            style={{
                                WebkitTextStroke: "0.6px #ffffffdd",
                            }}
                        >
                            Merchandise
                        </h4>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                        whileInView={{
                            opacity: 1,
                            y: [20, -5, 0],
                            filter: "blur(0px)",
                        }}
                        transition={{
                            duration: 0.6,
                            ease: [0.4, 0, 0.1, 1],
                            delay: 0.3,
                        }}
                        className="text-sm lg:text-base  max-w-3xl  my-4 text-neutral-500 font-normal dark:text-neutral-300"
                    >
                        Our team has deep specialization in creating brand
                        experience oriented hamper kits, fashion wear,
                        accessories and tech-based merchandise for your
                        audience.
                    </motion.p>
                </div>
            </div>

            {/* custom mader scroll section */}
            <MerchScrollSection />
            <div className="relative z-20 pt-16 py-4 lg:pt-24 max-w-5xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                        filter: "blur(0px)",
                    }}
                    transition={{
                        duration: 0.6,
                        ease: [0.4, 0, 0.2, 1],
                        delay: 0.2,
                    }}
                    className="text-2xl lg:text-3xl font-bold text-center text-neutral-300 max-w-3xl mx-auto"
                >
                    WE MAKE COOL & AUTHENTIC MERCH THAT YOUR AUDIENCE{" "}
                    <span className="bg-violet-600 p-1 pl-2 rounded-md">
                        LOVES.
                    </span>
                </motion.h2>
            </div>
            <div className="grid grid-cols-1 gap-8 max-w-6xl mx-auto py-4 px-4 md:px-8 select-none">
                {/* Top Image */}
                <motion.div
                    initial={{ opacity: 0, filter: "blur(20px)", y: 20 }}
                    whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <Image
                        src={merchGridContent.topImage}
                        width={1200}
                        height={400}
                        alt="merch_1"
                        className="w-full h-auto rounded-sm"
                    />
                </motion.div>

                {/* Middle Row */}
                <div className="grid md:grid-cols-3 gap-6">
                    {/* Left Image */}
                    <motion.div
                        initial={{ opacity: 0, filter: "blur(20px)", y: 30 }}
                        whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="h-full min-h-[250px]"
                    >
                        <Image
                            src={merchGridContent.middle.image}
                            width={400}
                            height={400}
                            alt="merch_2"
                            className="w-full h-full object-cover rounded-sm"
                        />
                    </motion.div>

                    {/* Right Paragraph (Animated word-by-word) */}
                    <div className="md:col-span-2">
                        <motion.p
                            className="text-white text-md leading-relaxed break-words"
                            style={{
                                wordWrap: "break-word",
                                overflowWrap: "break-word",
                            }}
                        >
                            {merchGridContent.middle.text
                                .split("\n") // Split by line breaks
                                .map((line, lineIndex) => (
                                    <span key={lineIndex} className="block">
                                        {line
                                            .split(" ")
                                            .map((word, wordIndex) => {
                                                const index =
                                                    lineIndex * 100 + wordIndex; // ensure unique & increasing delay
                                                return (
                                                    <motion.span
                                                        key={index}
                                                        initial={{
                                                            opacity: 0,
                                                            filter: "blur(10px)",
                                                            y: 5,
                                                            color: "#7F5AF0", // initial purple-blue
                                                        }}
                                                        whileInView={{
                                                            opacity: 1,
                                                            filter: "blur(0)",
                                                            y: 0,
                                                            color: "#FFFFFF", // final color white
                                                        }}
                                                        transition={{
                                                            opacity: {
                                                                duration: 0.4,
                                                                ease: "easeInOut",
                                                                delay:
                                                                    0.01 *
                                                                    index,
                                                            },
                                                            filter: {
                                                                duration: 0.4,
                                                                ease: "easeInOut",
                                                                delay:
                                                                    0.01 *
                                                                    index,
                                                            },
                                                            y: {
                                                                duration: 0.4,
                                                                ease: "easeInOut",
                                                                delay:
                                                                    0.01 *
                                                                    index,
                                                            },
                                                            color: {
                                                                duration: 1.2,
                                                                ease: "easeInOut",
                                                                delay:
                                                                    0.01 *
                                                                    index,
                                                            },
                                                        }}
                                                        className="inline"
                                                    >
                                                        {word}&nbsp;
                                                    </motion.span>
                                                );
                                            })}
                                    </span>
                                ))}
                        </motion.p>
                    </div>
                </div>

                {/* Bottom Grid of Images + Descriptions */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {merchGridContent.bottomGrid.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{
                                filter: "blur(20px)",
                                y: 40,
                            }}
                            whileInView={{
                                filter: "blur(0)",
                                y: 0,
                            }}
                            transition={{
                                duration: 0.6,
                                ease: "easeOut",
                                delay: i * 0.2,
                            }}
                            className="flex flex-col items-center text-center"
                        >
                            <Image
                                src={item.image}
                                width={400}
                                height={300}
                                alt={`merch_${i + 3}`}
                                className="w-full h-60 object-cover rounded-sm"
                            />
                            <motion.p
                                initial={{
                                    opacity: 0,
                                    filter: "blur(10px)",
                                    y: 5,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    filter: "blur(0)",
                                    y: 0,
                                }}
                                transition={{ duration: 0.3, delay: 0.2 }}
                                className="mt-2 text-white text-base"
                            >
                                {item.description}
                            </motion.p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Merch;
