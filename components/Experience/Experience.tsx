"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HeroHighlight, Highlight } from "../ui/backgrounds/dotted-highlight";
import { CanvasRevealEffect } from "../ui/grid/canvas-reveal-effect";

const AceternityIcon = () => (
    <svg
        width="66"
        height="65"
        viewBox="0 0 66 65"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10 text-white"
    >
        <path
            d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
            stroke="currentColor"
            strokeWidth="15"
            strokeMiterlimit="3.86874"
            strokeLinecap="round"
            style={{ mixBlendMode: "darken" }}
        />
    </svg>
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

    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
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
                <div className="mb-4 transition duration-200 group-hover:-translate-y-4 group-hover:opacity-0">
                    {icon}
                </div>
                <h2 className="text-xl font-bold text-white opacity-0 group-hover:opacity-100 transition duration-300 group-hover:-translate-y-2">
                    {title}
                </h2>
            </div>
        </div>
    );
};

const Experience = () => {
    return (
        <div id="experience" className="w-full bg-black text-white">
            <HeroHighlight>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: [20, -5, 0] }}
                    transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
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
            <div className="py-20 px-8 flex flex-col lg:flex-row items-center justify-center gap-4 bg-black">
                <Card title="Influencer Events" icon={<AceternityIcon />}>
                    <CanvasRevealEffect
                        animationSpeed={5.1}
                        containerClassName="bg-emerald-900"
                    />
                </Card>
                <Card title="Corporate Shows" icon={<AceternityIcon />}>
                    <CanvasRevealEffect
                        animationSpeed={3}
                        containerClassName="bg-black"
                        colors={[
                            [236, 72, 153],
                            [232, 121, 249],
                        ]}
                        dotSize={2}
                    />
                </Card>
                <Card title="Fashion Shows" icon={<AceternityIcon />}>
                    <CanvasRevealEffect
                        animationSpeed={3}
                        containerClassName="bg-sky-600"
                        colors={[[125, 211, 252]]}
                    />
                </Card>
            </div>
        </div>
    );
};

export default Experience;
