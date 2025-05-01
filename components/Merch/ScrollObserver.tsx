"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import Image from "next/image";

// Dynamic list of any number of sections
const sections = [
    {
        title: "MERCH is culture",
        image: "https://source.unsplash.com/random/800x600?sig=1",
    },
    {
        title: "MERCH is expression",
        image: "https://source.unsplash.com/random/800x600?sig=2",
    },
    {
        title: "MERCH is community",
        image: "https://source.unsplash.com/random/800x600?sig=3",
    },
    {
        title: "MERCH is freedom",
        image: "https://source.unsplash.com/random/800x600?sig=4",
    },
    {
        title: "MERCH is identity",
        image: "https://source.unsplash.com/random/800x600?sig=5",
    },
    {
        title: "MERCH is x",
        image: "https://source.unsplash.com/random/800x600?sig=6",
    },
    {
        title: "MERCH is y",
        image: "https://source.unsplash.com/random/800x600?sig=7",
    },
    {
        title: "MERCH is z",
        image: "https://source.unsplash.com/random/800x600?sig=8",
    },
    {
        title: "MERCH is culture",
        image: "https://source.unsplash.com/random/800x600?sig=1",
    },
    {
        title: "MERCH is expression",
        image: "https://source.unsplash.com/random/800x600?sig=2",
    },
    {
        title: "MERCH is community",
        image: "https://source.unsplash.com/random/800x600?sig=3",
    },
    {
        title: "MERCH is freedom",
        image: "https://source.unsplash.com/random/800x600?sig=4",
    },
    {
        title: "MERCH is identity",
        image: "https://source.unsplash.com/random/800x600?sig=5",
    },
    {
        title: "MERCH is x",
        image: "https://source.unsplash.com/random/800x600?sig=6",
    },
    {
        title: "MERCH is y",
        image: "https://source.unsplash.com/random/800x600?sig=7",
    },
    {
        title: "MERCH is z",
        image: "https://source.unsplash.com/random/800x600?sig=8",
    },
];

export default function MerchScrollSection() {
    const [activeIndex, setActiveIndex] = useState(0);
    const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
    itemRefs.current = new Array(sections.length).fill(null);

    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const visibleEntries = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

                if (visibleEntries.length > 0) {
                    const index = Number(
                        visibleEntries[0].target.getAttribute("data-index")
                    );
                    if (!isNaN(index)) {
                        setActiveIndex(index);
                    }
                }
            },
            {
                threshold: 0.6,
                rootMargin: "-46% 0px -46% 0px", // top/bottom margin to detect center
            }
        );

        itemRefs.current.forEach((el) => {
            if (el) observer.observe(el);
        });

        return () => {
            itemRefs.current.forEach((el) => {
                if (el) observer.unobserve(el);
            });
        };
    }, []);

    return (
        <div className="bg-black text-white flex flex-col gap-0 pb-4 md:py-4">
            <div className="max-w-5xl w-full mx-auto flex">
                {/* Left sticky image */}
                <div className="w-1/2 sticky top-0 h-[300px] md:h-screen self-start flex items-center justify-center">
                    <motion.div
                        initial={{ opacity: 0, y: 10, filter: "blur(10px)" }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            filter: "blur(0px)",
                        }}
                        transition={{ duration: 0.3 }}
                    >
                        <Image
                            width={800}
                            height={1200}
                            key={sections[activeIndex].image}
                            src={sections[activeIndex].image}
                            alt={sections[activeIndex].title}
                            className="rounded-xl w-[180px] md:w-[400px] max-w-full h-auto aspect-[2/3] object-cover border-2 border-white/20"
                        />
                    </motion.div>
                </div>

                {/* Right scrollable section */}
                <div className="w-1/2 flex flex-col ref={containerRef} px-2 md:px-0">
                    {sections.map((section, idx) => (
                        <div
                            key={idx}
                            data-index={idx}
                            ref={(el) => {
                                itemRefs.current[idx] = el;
                            }}
                            className={clsx(
                                "text-base md:text-2xl font-bold transition-all duration-300 ease-in-out mb-2",
                                activeIndex === idx
                                    ? "text-transparent bg-gradient-to-r from-purple-400 to-blue-300 bg-clip-text scale-105"
                                    : "text-white/50"
                            )}
                        >
                            {section.title}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
