"use client";

import React from "react";
import { useEffect, useState, useMemo } from "react";
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

// import localFont from "next/font/local";

// const freelogo = localFont({
//     src: "../../public/fonts/agrandir-wide.ttf",
//     display: "swap",
//     variable: "--font-freelogo",
// });
// import BottomGlowConstant from "../ui/text/bottom-glow-constant";

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
                <div className="h-6 w-6 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 shrink-0" />
            </motion.div>
            <motion.div
                variants={variants}
                className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 bg-white dark:bg-black"
            >
                <div className="h-6 w-6 rounded-full bg-gradient-to-r from-purple-500 to-violet-500 shrink-0" />
                <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
            </motion.div>
        </motion.div>
    );
};

export const SkeletonTwo = () => {
    const hasMounted = useHasMounted();

    const widths = useMemo(
        () =>
            new Array(6)
                .fill(0)
                .map(() => `${Math.random() * (100 - 40) + 40}%`),
        []
    );

    if (!hasMounted) return null;

    const variants = {
        initial: { width: 0 },
        animate: { width: "100%", transition: { duration: 0.2 } },
        hover: { width: ["0%", "100%"], transition: { duration: 2 } },
    };

    return (
        <motion.div
            initial="initial"
            animate="animate"
            whileHover="hover"
            className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
        >
            {widths.map((maxWidth, i) => (
                <motion.div
                    key={`skeleton-two-${i}`}
                    variants={variants}
                    style={{ maxWidth }}
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
                    "linear-gradient(-45deg, #3c096c, #6f2dbd, #a663cc, #b298dc)",
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
                    Let&apos;s set up a brand pop-up in the middle of the city.
                </p>
                <p className="border border-red-500 bg-red-100 dark:bg-red-900/20 text-red-600 text-xs rounded-full px-2 py-0.5 mt-4">
                    Bold
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
                    Add live interactions, giveaways, and street buzz.
                </p>
                <p className="border border-purple-400 bg-purple-100 dark:bg-purple-900/20 text-purple-600 text-xs rounded-full px-2 py-0.5 mt-4">
                    Buzzing
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
                    What if we launch during Fashion Week at a metro station?
                </p>
                <p className="border border-green-500 bg-green-200 dark:bg-green-900/20 text-green-600 text-xs rounded-full px-2 py-0.5 mt-4">
                    Genius
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
                className="flex flex-row rounded-2xl border border-neutral-100 dark:border-white/[0.2] p-2 items-start space-x-2 bg-white dark:bg-black"
            >
                <Image
                    src="/assets/images/logo.jpeg"
                    alt="avatar"
                    height="100"
                    width="100"
                    className="rounded-full h-10 w-10"
                />
                <p className="text-xs text-neutral-500">
                    Let’s build a booth they’ll talk about — bold, interactive,
                    unforgettable.
                </p>
            </motion.div>

            <motion.div
                variants={variantsSecond}
                className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center justify-end space-x-2 w-3/4 ml-auto bg-white dark:bg-black"
            >
                <p className="text-xs text-neutral-500">
                    Engagement doubles when the audience becomes part of the
                    story.
                </p>
                <div className="h-6 w-6 rounded-full bg-gradient-to-r from-[#5e17eb] to-[#7f47ef] shrink-0" />
            </motion.div>
        </motion.div>
    );
};

const items = [
    {
        title: "Immersive Brand Experiences",
        description: (
            <span className="text-sm">
                Craft unforgettable brand moments that captivate and engage
                audiences in real life.
            </span>
        ),
        header: <SkeletonOne />,
        className: "md:col-span-1",
        icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Corporate Show Production",
        description: (
            <span className="text-sm">
                From ideation to execution, we produce high-impact corporate
                shows with flair and precision.
            </span>
        ),
        header: <SkeletonTwo />,
        className: "md:col-span-1",
        icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Fashion Show Management",
        description: (
            <span className="text-sm">
                End-to-end planning and production for standout fashion shows
                that turn heads.
            </span>
        ),
        header: <SkeletonThree />,
        className: "md:col-span-1",
        icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Pop-Up Activations",
        description: (
            <span className="text-sm">
                Execute bold, guerrilla-style pop-up campaigns that create buzz
                and brand recall.
            </span>
        ),
        header: <SkeletonFour />,
        className: "md:col-span-2",
        icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Audience Engagement Strategy",
        description: (
            <span className="text-sm">
                Curate strategic experiences designed to maximize audience
                interaction and brand loyalty.
            </span>
        ),
        header: <SkeletonFive />,
        className: "md:col-span-1",
        icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    },
];

const FreeloaderIcon = () => (
    // <Image
    //     src="/assets/images/logo.jpeg"
    //     alt="Freeloader Logo"
    //     className="rounded-full scale-[0.7]"
    //     height="100"
    //     width="100"
    // />
    <div className="relative text-white --font-freelogo text-left text-xl font-bold">
        <div className="raleway leading-5 glitch-text">FREE</div>
        <div className="raleway leading-5 glitch-text">LOADER</div>
        <div className="raleway leading-5 glitch-text">AGENCY</div>
    </div>
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
            <Icon className="absolute h-6 w-6 -top-3 -left-3 text-violet-400" />
            <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-violet-400" />
            <Icon className="absolute h-6 w-6 -top-3 -right-3 text-violet-400" />
            <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-violet-400" />

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
            {/*Bento grid */}
            {/* <Bento_Grid items={data} /> */} {/*old bento grid */}
            <div className="border-b-neutral-100/30 border-b-[1px] relative z-20 py-16 lg:py-32 max-w-5xl mx-auto">
                <div className="px-8 mb-12">
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
                        className="relative border-b-[1px] select-none  border-b-violet-500"
                    >
                        <span className="absolute cursor-grab -top-3 -left-8 -rotate-20 hover:-rotate-12 bg-violet-500 text-black text-md px-2 py-0.5 rounded transition-all">
                            Exclusive
                        </span>
                        <h4
                            className="text-3xl lg:text-5xl --font-freelogo lg:leading-tight tracking-normal font-[900] text-transparent dark:text-transparent"
                            style={{
                                WebkitTextStroke: "0.6px #ffffffdd",
                            }}
                        >
                            EXPERIENCE MARKETING
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
                        From conveptual brand launches, to theme based on-ground
                        campaigns, to the most happening night of the town...
                        on-ground experiences come in many flavors and a lot of
                        shades.
                    </motion.p>
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                    whileInView={{
                        opacity: 1,
                        y: [20, -5, 0],
                        filter: "blur(0px)",
                    }}
                    transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                >
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
                </motion.div>
            </div>
            <HeroHighlight>
                {/* QUOTE */}
                <motion.h1
                    initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                    whileInView={{
                        opacity: 1,
                        y: [20, -5, 0],
                        filter: "blur(0px)",
                    }}
                    transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                    className="mt-20 text-2xl px-4 md:text-4xl lg:text-5xl font-bold max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto"
                >
                    Creating Unforgettable Experiences for Brands and their
                    Audience.
                    <div>
                        <Highlight className="text-white">
                            The Free-Loader Experience
                        </Highlight>
                    </div>
                </motion.h1>
                {/* Cards */}
                <div className="py-20 px-8 flex flex-col bg lg:flex-row items-center justify-center gap-4">
                    <Card title="Influencer Events" icon={<FreeloaderIcon />}>
                        <CanvasRevealEffect
                            animationSpeed={2}
                            containerClassName="bg-violet-900/30"
                            colors={[
                                // [231, 111, 92],
                                // [255, 255, 255],
                                [182, 121, 229],
                                [94, 93, 235],
                            ]}
                        />
                    </Card>
                    <Card title="Corporate Shows" icon={<FreeloaderIcon />}>
                        <CanvasRevealEffect
                            animationSpeed={3}
                            containerClassName="bg-violet-900/30"
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
                            containerClassName="bg-purple-900/40"
                            colors={[
                                [125, 111, 252],
                                [225, 111, 152],
                            ]}
                            dotSize={3}
                        />
                    </Card>
                </div>
            </HeroHighlight>
        </div>
    );
};

export default Experience;
