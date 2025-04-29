"use client";

import React from "react";

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

type GridItem = {
    title: string;
    image: string;
};

const BentoCard = ({
    title,
    image,
    className = "",
}: GridItem & { className?: string }) => {
    return (
        <div
            className={`relative border border-white/20 bg-black rounded-xl overflow-hidden group ${className}`}
        >
            {/* Corner Icons */}
            <Icon className="absolute h-5 w-5 -top-2 -left-2 text-white" />
            <Icon className="absolute h-5 w-5 -top-2 -right-2 text-white" />
            <Icon className="absolute h-5 w-5 -bottom-2 -left-2 text-white" />
            <Icon className="absolute h-5 w-5 -bottom-2 -right-2 text-white" />

            {/* Content */}
            <div className="w-full h-full">
                <img
                    src={image}
                    alt={title}
                    className="object-cover w-full h-full opacity-80 hover:opacity-100 transition duration-300"
                />
                <div className="absolute bottom-4 left-4 text-white font-semibold text-lg drop-shadow-md">
                    {title}
                </div>
            </div>
        </div>
    );
};

const Bento_Grid = ({ items }: { items: GridItem[] }) => {
    if (items.length < 7) {
        console.warn("BentoGrid requires at least 7 items.");
        return null;
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[200px] gap-4 px-4 py-12 bg-black">
            <BentoCard
                {...items[0]}
                className="lg:col-span-3 row-span-1 h-[250px]"
            />
            <BentoCard {...items[1]} className="row-span-2 h-full" />
            <BentoCard {...items[2]} />
            <BentoCard {...items[3]} />
            <BentoCard {...items[4]} />
            <BentoCard {...items[5]} />
            <BentoCard {...items[6]} />
        </div>
    );
};

export default Bento_Grid;
