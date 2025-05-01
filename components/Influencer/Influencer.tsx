"use client";
import React from "react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import createGlobe from "cobe";
import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { IconBrandYoutubeFilled } from "@tabler/icons-react";
import Image from "next/image";
import InfluencerGrid from "./InfluencerGrid";
// import { ContainerTextFlip } from "../ui/text/container-text-flip";

const Influencer = () => {
    return (
        <div id="influencers" className="border border-t-2 border-nertral-200">
            {/* <div className="flex flex-col items-center justify-center pt-20 pb-6 px-8 bg-black">
                <h2 className="text-4xl font-bold mb-2 text-center">
                    Influencer Events
                </h2>
                <div className="text-lg text-neutral-300/80 text-center mb-4">
                    Join us for exclusive influencer events that are{" "}
                    <ContainerTextFlip
                        className="inline-block"
                        textClassName="text-base md:text-lg font-medium py-1"
                        words={["better", "modern", "awesome"]}
                        animationDuration={1000}
                    />
                </div>
            </div> */}
            <FeaturesSectionDemo />
            <div className="relative z-20 pt-16 py-4 lg:pt-16 max-w-5xl mx-auto">
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
                    The Influencer Events You’ve Always <br />{" "}
                    <span className="bg-violet-600  p-1 px-2 rounded-md">
                        Dreamed Of
                    </span>
                </motion.h2>
            </div>
            <InfluencerGrid />
        </div>
    );
};

export function FeaturesSectionDemo() {
    const features = [
        {
            title: "Manage Client Requests",
            description:
                "Handle incoming project inquiries and client briefs effortlessly with our streamlined system.",
            skeleton: <SkeletonOne />,
            className:
                "col-span-1 lg:col-span-3 border-b lg:border-r dark:border-neutral-800",
        },
        {
            title: "Showcase Your Work",
            description:
                "Upload and present your portfolio or recent works to attract potential collaborators or clients.",
            skeleton: <SkeletonTwo />,
            className:
                "border-b col-span-1 lg:col-span-3 dark:border-neutral-800",
        },
        {
            title: "Explore Our YouTube Series",
            description:
                "Watch behind-the-scenes content, agency showcases, and tutorials on our official YouTube channel.",
            skeleton: <SkeletonThree />,
            className:
                "col-span-1 lg:col-span-2 lg:border-r dark:border-neutral-800",
        },
        {
            title: "Expand Your Network",
            description:
                "Collaborate with creatives and brands worldwide through Free Loader’s curated events.",
            skeleton: <SkeletonFour />,
            className: "col-span-1 lg:col-span-4 border-b lg:border-none",
        },
    ];

    return (
        <div className="relative z-20 py-16 lg:pt-32 lg:pb-16 max-w-5xl mx-auto">
            <div className="px-8">
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
                    className="relative border-b-[1px] border-b-violet-500 select-none"
                >
                    <span className="absolute cursor-grab -top-3 -left-6 -rotate-20 hover:-rotate-12 bg-violet-500 text-black text-md px-2 py-0.5 rounded transition-all">
                        TOP 1%
                    </span>
                    <h4
                        className="text-3xl lg:text-5xl  lg:leading-tight tracking-normal font-[900] text-transparent dark:text-transparent"
                        style={{
                            WebkitTextStroke: "0.6px #ffffffdd",
                        }}
                    >
                        INFLUENCERS
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
                    className="text-sm lg:text-base  max-w-2xl  my-4 text-neutral-500 font-normal dark:text-neutral-300"
                >
                    Our Influencer Events are designed to help you connect with
                    your audience and build your brand. The perfect platform to
                    showcase your talent and reach new heights.
                </motion.p>
            </div>

            <div className="relative ">
                <div className="grid grid-cols-1 lg:grid-cols-6 mt-12 xl:border rounded-md dark:border-neutral-800">
                    {features.map((feature) => (
                        <FeatureCard
                            key={feature.title}
                            className={feature.className}
                        >
                            <FeatureTitle>{feature.title}</FeatureTitle>
                            <FeatureDescription>
                                {feature.description}
                            </FeatureDescription>
                            <div className=" h-full w-full">
                                {feature.skeleton}
                            </div>
                        </FeatureCard>
                    ))}
                </div>
            </div>
        </div>
    );
}

const FeatureCard = ({
    children,
    className,
}: {
    children?: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn(`p-4 sm:p-8 relative overflow-hidden`, className)}>
            {children}
        </div>
    );
};

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
    return (
        <p className=" max-w-5xl mx-auto text-left tracking-tight text-black dark:text-white text-xl md:text-2xl md:leading-snug">
            {children}
        </p>
    );
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
    return (
        <motion.p
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
                duration: 0.5,
            }}
            className={cn(
                "text-sm md:text-base  max-w-4xl text-left mx-auto",
                "text-center font-normal text-violet-300",
                "text-left max-w-sm mx-0 md:text-sm my-2"
            )}
        >
            {children}
        </motion.p>
    );
};

export const SkeletonOne = () => {
    return (
        <div className="relative flex py-8 px-2 gap-10 h-full">
            <div className="w-full p-5 mx-auto bg-violet-600/30 shadow-2xl group h-fill">
                <div className="flex flex-1 w-full h-full flex-col space-y-2">
                    <Image
                        src="https://cached.imagescaler.hbpl.co.uk/resize/scaleWidth/1272/cached.offlinehbpl.hbpl.co.uk/news/ORP/GettyImages-1592937639.jpg"
                        alt="header"
                        width={800}
                        height={800}
                        className="h-full w-full aspect-square object-cover object-left-top rounded-sm"
                        loading="lazy"
                        decoding="async"
                    />
                </div>
            </div>

            <div className="absolute bottom-0 z-40 inset-x-0 h-60 bg-gradient-to-t from-white dark:from-black via-white dark:via-black to-transparent w-full pointer-events-none" />
            <div className="absolute top-0 z-40 inset-x-0 h-60 bg-gradient-to-b from-white dark:from-black via-transparent to-transparent w-full pointer-events-none" />
        </div>
    );
};

export const SkeletonThree = () => {
    return (
        <a
            href="https://www.youtube.com/"
            target="__blank"
            className="relative flex gap-10 h-full group/image"
        >
            <div className="w-full mx-auto bg-transparent dark:bg-transparent group h-full">
                <div className="flex flex-1 w-full h-full flex-col space-y-2 relative">
                    <IconBrandYoutubeFilled className="h-20 w-20 absolute z-10 inset-0 text-red-500 m-auto" />
                    <Image
                        src="https://cdn.eventespresso.com/wp-content/uploads/2024/05/20001844/Blog-Banner-Influencer-Event.jpg"
                        alt="header"
                        width={800}
                        height={800}
                        className="h-full w-full aspect-square object-cover object-center rounded-sm blur-none group-hover/image:blur-md transition-all duration-200"
                        loading="lazy"
                        decoding="async"
                    />
                </div>
            </div>
        </a>
    );
};
const images = [
    "https://images.unsplash.com/photo-1517322048670-4fba75cbbb62?q=80&w=3000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1573790387438-4da905039392?q=80&w=3425&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1555400038-63f5ba517a47?q=80&w=3540&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1554931670-4ebfabf6e7a9?q=80&w=3387&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1546484475-7f7bd55792da?q=80&w=2581&auto=format&fit=crop",
];
export const SkeletonTwo = () => {
    const [imageRotations, setImageRotations] = useState<number[]>([]);

    useEffect(() => {
        const rotations = images.map(() => Math.random() * 20 - 10);
        setImageRotations(rotations);
    }, []);

    const imageVariants = {
        whileHover: {
            scale: 1.1,
            rotate: 0,
            zIndex: 100,
        },
        whileTap: {
            scale: 1.1,
            rotate: 0,
            zIndex: 100,
        },
    };

    if (imageRotations.length === 0) return null; // prevent hydration mismatch

    return (
        <div className="relative flex flex-col items-start p-8 gap-10 h-full overflow-hidden">
            <div className="flex flex-row -ml-20">
                {images.map((image, idx) => (
                    <motion.div
                        variants={imageVariants}
                        key={"images-first" + idx}
                        style={{ rotate: imageRotations[idx] }}
                        whileHover="whileHover"
                        whileTap="whileTap"
                        className="rounded-xl -mr-4 mt-4 p-1 bg-purple-600/50 dark:border-neutral-700 border border-neutral-100 shrink-0 overflow-hidden"
                    >
                        <Image
                            src={image}
                            alt="bali images"
                            width={500}
                            height={500}
                            className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover shrink-0"
                            loading="lazy"
                            decoding="async"
                        />
                    </motion.div>
                ))}
            </div>
            <div className="flex flex-row">
                {images.map((image, idx) => (
                    <motion.div
                        key={"images-second" + idx}
                        style={{ rotate: imageRotations[idx] }}
                        variants={imageVariants}
                        whileHover="whileHover"
                        whileTap="whileTap"
                        className="rounded-xl -mr-4 mt-4 p-1 bg-purple-600/50 dark:border-neutral-700 border border-neutral-100 shrink-0 overflow-hidden"
                    >
                        <Image
                            src={image}
                            alt="bali images"
                            width={500}
                            height={500}
                            className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover shrink-0"
                            loading="lazy"
                            decoding="async"
                        />
                    </motion.div>
                ))}
            </div>

            <div className="absolute left-0 z-[100] inset-y-0 w-20 bg-gradient-to-r from-white dark:from-black to-transparent h-full pointer-events-none" />
            <div className="absolute right-0 z-[100] inset-y-0 w-20 bg-gradient-to-l from-white dark:from-black to-transparent h-full pointer-events-none" />
        </div>
    );
};

export const SkeletonFour = () => {
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="h-60 md:h-60 flex flex-col items-center relative bg-transparent dark:bg-transparent mt-10">
            <Globe className="absolute -right-10 md:-right-10 -bottom-80 md:-bottom-72" />
        </div>
    );
};

export const Globe = ({ className }: { className?: string }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        let phi = 0;

        if (!canvasRef.current) return;

        const globe = createGlobe(canvasRef.current, {
            devicePixelRatio: 2,
            width: 600 * 2,
            height: 600 * 2,
            phi: 0,
            theta: 0,
            dark: 1,
            diffuse: 1.2,
            mapSamples: 16000,
            mapBrightness: 6,
            baseColor: [0.3, 0.3, 0.3],
            markerColor: [0.1, 0.8, 1],
            glowColor: [0.6, 0.6, 1],
            markers: [
                // longitude latitude
                // { location: [37.7595, -122.4367], size: 0.03 },
                // { location: [40.7128, -74.006], size: 0.06 },
                { location: [28.6139, 77.209], size: 0.06 }, // Delhi
                { location: [19.076, 72.8777], size: 0.06 }, // Mumbai
                { location: [12.9716, 77.5946], size: 0.05 }, // Bangalore
                { location: [13.0827, 80.2707], size: 0.05 }, // Chennai
                { location: [17.385, 78.4867], size: 0.05 }, // Hyderabad
                { location: [22.5726, 88.3639], size: 0.05 }, // Kolkata
            ],
            onRender: (state) => {
                // Called on every animation frame.
                // `state` will be an empty object, return updated params.
                state.phi = phi;
                phi += 0.01;
            },
        });

        return () => {
            globe.destroy();
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                width: 600,
                height: 600,
                maxWidth: "100%",
                aspectRatio: 1,
            }}
            className={className}
        />
    );
};

export default Influencer;
