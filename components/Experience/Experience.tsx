"use client";

import React from "react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { HeroHighlight, Highlight } from "../ui/backgrounds/dotted-highlight";
import { CanvasRevealEffect } from "../ui/grid/canvas-reveal-effect";
import { BentoGrid, BentoGridItem } from "../ui/grid/bento-grid";
import {
    IconBoxAlignRightFilled,
    IconClipboardCopy,
    IconFileBroken,
    IconSignature,
    IconTableColumn,
} from "@tabler/icons-react";
import Image from "next/image";

// const data = [
//     {
//         title: "Full Width Banner",
//         image: "/assets/images/banner.jpg",
//     },
//     {
//         title: "Vertical Story",
//         image: "/assets/images/tall.jpg",
//     },
//     {
//         title: "Small 1",
//         image: "/assets/images/small1.jpg",
//     },
//     {
//         title: "Small 2",
//         image: "/assets/images/small2.jpg",
//     },
//     {
//         title: "Small 3",
//         image: "/assets/images/small3.jpg",
//     },
//     {
//         title: "Small 4",
//         image: "/assets/images/small4.jpg",
//     },
//     {
//         title: "Small 5",
//         image: "/assets/images/small5.jpg",
//     },
// ];

const useHasMounted = () => {
    const [hasMounted, setHasMounted] = useState(false);
    useEffect(() => {
        setHasMounted(true);
    }, []);
    return hasMounted;
};

const SkeletonOne = () => {
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, []);

    const variants = {
        initial: { x: 0 },
        animate: {
            x: 10,
            rotate: 5,
            transition: { duration: 0.2 },
        },
    };

    const variantsSecond = {
        initial: { x: 0 },
        animate: {
            x: -10,
            rotate: -5,
            transition: { duration: 0.2 },
        },
    };

    if (!hasMounted) return null; // Optional: Can show static fallback or nothing

    return (
        <motion.div
            initial="initial"
            whileHover="animate"
            className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
        >
            <motion.div
                variants={variants}
                className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 bg-white dark:bg-black"
            >
                <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 shrink-0" />
                <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
            </motion.div>
            <motion.div
                variants={variantsSecond}
                className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 w-3/4 ml-auto bg-white dark:bg-black"
            >
                <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
                <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 shrink-0" />
            </motion.div>
            <motion.div
                variants={variants}
                className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 bg-white dark:bg-black"
            >
                <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 shrink-0" />
                <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
            </motion.div>
        </motion.div>
    );
};

const SkeletonTwo = () => {
    const hasMounted = useHasMounted();
    if (!hasMounted) return null;

    const variants = {
        initial: { width: 0 },
        animate: { width: "100%", transition: { duration: 0.2 } },
        hover: { width: ["0%", "100%"], transition: { duration: 2 } },
    };

    const arr = new Array(6).fill(0);

    return (
        <motion.div
            initial="initial"
            animate="animate"
            whileHover="hover"
            className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
        >
            {arr.map((_, i) => (
                <motion.div
                    key={"skelenton-two" + i}
                    variants={variants}
                    style={{
                        maxWidth: `${Math.random() * (100 - 40) + 40}%`,
                    }}
                    className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 bg-neutral-100 dark:bg-black w-full h-4"
                />
            ))}
        </motion.div>
    );
};
const SkeletonThree = () => {
    const variants = {
        initial: {
            backgroundPosition: "0 50%",
        },
        animate: {
            backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
        },
    };
    return (
        <motion.div
            initial="initial"
            animate="animate"
            variants={variants}
            transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
            }}
            className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] rounded-lg bg-dot-black/[0.2] flex-col space-y-2"
            style={{
                background:
                    "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
                backgroundSize: "400% 400%",
            }}
        >
            <motion.div className="h-full w-full rounded-lg"></motion.div>
        </motion.div>
    );
};
const SkeletonFour = () => {
    const first = {
        initial: {
            x: 20,
            rotate: -5,
        },
        hover: {
            x: 0,
            rotate: 0,
        },
    };
    const second = {
        initial: {
            x: -20,
            rotate: 5,
        },
        hover: {
            x: 0,
            rotate: 0,
        },
    };
    return (
        <motion.div
            initial="initial"
            animate="animate"
            whileHover="hover"
            className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2"
        >
            <motion.div
                variants={first}
                className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
            >
                <Image
                    src="/assets/images/logo.jpeg"
                    alt="avatar"
                    height="100"
                    width="100"
                    className="rounded-full h-10 w-10"
                />
                <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
                    Just code in Vanilla Javascript
                </p>
                <p className="border border-red-500 bg-red-100 dark:bg-red-900/20 text-red-600 text-xs rounded-full px-2 py-0.5 mt-4">
                    Delusional
                </p>
            </motion.div>
            <motion.div className="h-full relative z-20 w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center">
                <Image
                    src="/assets/images/logo.jpeg"
                    alt="avatar"
                    height="100"
                    width="100"
                    className="rounded-full h-10 w-10"
                />
                <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
                    Tailwind CSS is cool, you know
                </p>
                <p className="border border-green-500 bg-green-100 dark:bg-green-900/20 text-green-600 text-xs rounded-full px-2 py-0.5 mt-4">
                    Sensible
                </p>
            </motion.div>
            <motion.div
                variants={second}
                className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
            >
                <Image
                    src="/assets/images/logo.jpeg"
                    alt="avatar"
                    height="100"
                    width="100"
                    className="rounded-full h-10 w-10"
                />
                <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
                    I love angular, RSC, and Redux.
                </p>
                <p className="border border-orange-500 bg-orange-100 dark:bg-orange-900/20 text-orange-600 text-xs rounded-full px-2 py-0.5 mt-4">
                    Helpless
                </p>
            </motion.div>
        </motion.div>
    );
};
const SkeletonFive = () => {
    const variants = {
        initial: {
            x: 0,
        },
        animate: {
            x: 10,
            rotate: 5,
            transition: {
                duration: 0.2,
            },
        },
    };
    const variantsSecond = {
        initial: {
            x: 0,
        },
        animate: {
            x: -10,
            rotate: -5,
            transition: {
                duration: 0.2,
            },
        },
    };

    return (
        <motion.div
            initial="initial"
            whileHover="animate"
            className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
        >
            <motion.div
                variants={variants}
                className="flex flex-row rounded-2xl border border-neutral-100 dark:border-white/[0.2] p-2  items-start space-x-2 bg-white dark:bg-black"
            >
                <Image
                    src="/assets/images/logo.jpeg"
                    alt="avatar"
                    height="100"
                    width="100"
                    className="rounded-full h-10 w-10"
                />
                <p className="text-xs text-neutral-500">
                    There are a lot of cool framerworks out there like React,
                    Angular, Vue, Svelte that can make your life ....
                </p>
            </motion.div>
            <motion.div
                variants={variantsSecond}
                className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center justify-end space-x-2 w-3/4 ml-auto bg-white dark:bg-black"
            >
                <p className="text-xs text-neutral-500">Use PHP.</p>
                <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 shrink-0" />
            </motion.div>
        </motion.div>
    );
};

const items = [
    {
        title: "AI Content Generation",
        description: (
            <span className="text-sm">
                Experience the power of AI in generating unique content.
            </span>
        ),
        header: <SkeletonOne />,
        className: "md:col-span-1",
        icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Automated Proofreading",
        description: (
            <span className="text-sm">
                Let AI handle the proofreading of your documents.
            </span>
        ),
        header: <SkeletonTwo />,
        className: "md:col-span-1",
        icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Contextual Suggestions",
        description: (
            <span className="text-sm">
                Get AI-powered suggestions based on your writing context.
            </span>
        ),
        header: <SkeletonThree />,
        className: "md:col-span-1",
        icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Sentiment Analysis",
        description: (
            <span className="text-sm">
                Understand the sentiment of your text with AI analysis.
            </span>
        ),
        header: <SkeletonFour />,
        className: "md:col-span-2",
        icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    },

    {
        title: "Text Summarization",
        description: (
            <span className="text-sm">
                Summarize your lengthy documents with AI technology.
            </span>
        ),
        header: <SkeletonFive />,
        className: "md:col-span-1",
        icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    },
];

const FreeloaderIcon = () => (
    <Image
        src="/assets/images/logo.jpeg"
        alt="Freeloader Logo"
        className="rounded-full scale-[0.3]"
        height="100"
        width="100"
    />
);

const Icon = ({ className = "" }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className={className}
    >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
);

const Card = ({
    title,
    icon,
    children,
}: {
    title: string;
    icon: React.ReactNode;
    children?: React.ReactNode;
}) => {
    const [hovered, setHovered] = React.useState(false);

    const toggleHover = () => {
        // On mobile, a tap toggles hover state
        if (typeof window !== "undefined" && window.innerWidth <= 768) {
            setHovered((prev) => !prev);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={toggleHover}
            className="group relative border border-white/20 bg-black h-[30rem] w-full max-w-sm p-4 overflow-hidden"
        >
            {/* Corner Icons */}
            <Icon className="absolute h-6 w-6 -top-3 -left-3 text-white" />
            <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-white" />
            <Icon className="absolute h-6 w-6 -top-3 -right-3 text-white" />
            <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-white" />

            {/* Reveal animation */}
            <AnimatePresence>
                {hovered && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 z-0"
                    >
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
                <div
                    className={`mb-4 transition duration-200 ${
                        hovered ? "-translate-y-4 opacity-0" : "opacity-100"
                    }`}
                >
                    {icon}
                </div>
                <h2
                    className={`text-3xl font-bold text-white transition duration-300 ${
                        hovered ? "opacity-100 -translate-y-2" : "opacity-0"
                    }`}
                >
                    {title}
                </h2>
            </div>
        </motion.div>
    );
};

const Experience = () => {
    return (
        <div id="experiences" className="w-full bg-black text-white">
            {/* heading */}
            <HeroHighlight>
                <motion.h1
                    initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                    whileInView={{
                        opacity: 1,
                        y: [20, -5, 0],
                        filter: "blur(0px)",
                    }}
                    transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                    className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto"
                >
                    Creating Unforgettable Experiences for Brands and their
                    Audience.
                    <div>
                        <Highlight className="text-white">
                            The Freeloader Experience
                        </Highlight>
                    </div>
                </motion.h1>
            </HeroHighlight>

            {/*Bento grid */}
            {/* <Bento_Grid items={data} /> */}
            <div className="flex flex-col items-center justify-center pt-32 pb-8 px-8 bg-black">
                <h2 className="text-4xl font-bold mb-4 text-center">
                    Experience the Freeloader Effect
                </h2>
            </div>
            <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
                {items.map((item, i) => (
                    <BentoGridItem
                        key={i}
                        title={item.title}
                        description={item.description}
                        header={item.header}
                        className={cn("[&>p:text-lg]", item.className)}
                        icon={item.icon}
                    />
                ))}
            </BentoGrid>

            {/* Cards */}
            <div className="py-20 px-8 flex flex-col bg lg:flex-row items-center justify-center gap-4 bg-black">
                <Card title="Influencer Events" icon={<FreeloaderIcon />}>
                    <CanvasRevealEffect
                        animationSpeed={3}
                        containerClassName="bg-emerald-900"
                    />
                </Card>
                <Card title="Corporate Shows" icon={<FreeloaderIcon />}>
                    <CanvasRevealEffect
                        animationSpeed={3}
                        containerClassName="bg-rose-900/30"
                        colors={[
                            [236, 72, 153],
                            [232, 121, 249],
                        ]}
                        dotSize={3}
                    />
                </Card>
                <Card title="Fashion Shows" icon={<FreeloaderIcon />}>
                    <CanvasRevealEffect
                        animationSpeed={3}
                        containerClassName="bg-cyan-900"
                        colors={[[125, 211, 252]]}
                        dotSize={3}
                    />
                </Card>
            </div>
        </div>
    );
};

export default Experience;
