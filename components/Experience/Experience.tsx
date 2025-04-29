"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HeroHighlight, Highlight } from "../ui/backgrounds/dotted-highlight";
import { CanvasRevealEffect } from "../ui/grid/canvas-reveal-effect";

const FreeloaderIcon = () => (
    <img
        srcSet="/assets/images/logo.jpeg"
        className="rounded-full scale-[0.3]"
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
        <div id="experience" className="w-full bg-black text-white">
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
