"use client";

import { useState, useMemo } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

// Utility to chunk images into slides
function chunkArray<T>(array: T[], chunkSize: number): T[][] {
    const chunks: T[][] = [];
    for (let i = 0; i < array.length; i += chunkSize) {
        chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
}

// Custom hook for media queries
function useMediaQuery(query: string): boolean {
    const [matches, setMatches] = useState(false);

    useState(() => {
        const media = window.matchMedia(query);
        const handleChange = () => setMatches(media.matches);
        handleChange(); // Set initial state
        media.addEventListener("change", handleChange);
        return () => media.removeEventListener("change", handleChange);
    });

    return matches;
}

interface GallerySectionProps {
    images: string[];
    title?: string;
    imagesPerSlide?: number;
}

// Desktop layouts (cycle through these)
const defaultLayouts = [
    [
        "col-span-2 row-span-1",
        "col-span-1 row-span-2",
        "col-span-1 row-span-1",
        "col-span-1 row-span-1",
        "col-span-1 row-span-1",
        "col-span-1 row-span-1",
    ],
    [
        "col-span-1 row-span-2",
        "col-span-2 row-span-1",
        "col-span-1 row-span-1",
        "col-span-1 row-span-1",
        "col-span-1 row-span-1",
        "col-span-1 row-span-1",
    ],
    [
        "col-span-3 row-span-1",
        "col-span-1 row-span-1",
        "col-span-1 row-span-1",
        "col-span-1 row-span-1",
        "col-span-1 row-span-1",
        "col-span-1 row-span-1",
    ],
];

// Mobile layout (uniform 1-column layout)
const mobileLayouts = [
    [
        "col-span-1 row-span-1",
        "col-span-1 row-span-1",
        "col-span-1 row-span-1",
        "col-span-1 row-span-1",
        "col-span-1 row-span-1",
        "col-span-1 row-span-1",
    ],
];

export default function GallerySection({
    images,
    title = "Gallery",
    imagesPerSlide = 6,
}: GallerySectionProps) {
    const [page, setPage] = useState(0);

    const imageSlides = useMemo(
        () => chunkArray(images, imagesPerSlide),
        [images, imagesPerSlide]
    );
    const totalPages = imageSlides.length;
    const currentImages = imageSlides[page];

    const isMobile = useMediaQuery("(max-width: 640px)");
    const currentLayout = isMobile
        ? mobileLayouts[page % mobileLayouts.length]
        : defaultLayouts[page % defaultLayouts.length];

    const handlePrev = () => setPage((p) => Math.max(p - 1, 0));
    const handleNext = () => setPage((p) => Math.min(p + 1, totalPages - 1));

    return (
        <section className="border max-w-5xl mx-auto px-4 py-20 freeheading">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-100 mb-2">
                {title}
            </h2>
            <hr className="border-t border-gray-200/30 mb-10" />

            <div
                className={`grid ${
                    isMobile ? "grid-cols-2" : "sm:grid-cols-2 md:grid-cols-4"
                } gap-4 auto-rows-[200px]`}
            >
                {currentImages.map((src, index) => {
                    const className =
                        currentLayout[index] || "col-span-1 row-span-1";
                    return (
                        <motion.div
                            key={index}
                            className={`rounded-lg overflow-hidden ${className}`}
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
                                delay: index * 0.1,
                                duration: 0.4,
                            }}
                        >
                            <Image
                                src={src}
                                alt={`Gallery ${index + 1}`}
                                width={500}
                                height={500}
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                    );
                })}
            </div>

            {/* Pagination Controls */}
            <div className="flex items-center justify-center mt-10 gap-4 text-sm text-gray-500">
                <span className="font-mono">
                    {String(page + 1).padStart(2, "0")} /{" "}
                    {String(totalPages).padStart(2, "0")}
                </span>
                <span className="text-gray-300">/</span>
                <button
                    onClick={handlePrev}
                    disabled={page === 0}
                    className="p-2 rounded-md border border-violet-400 hover:bg-violet-300/30 transition disabled:opacity-30"
                >
                    <ChevronLeft className="w-4 h-4 text-violet-400" />
                </button>
                <button
                    onClick={handleNext}
                    disabled={page === totalPages - 1}
                    className="p-2 rounded-md border border-violet-400 hover:bg-violet-300/30 transition disabled:opacity-30"
                >
                    <ChevronRight className="w-4 h-4 text-violet-400" />
                </button>
            </div>
        </section>
    );
}
