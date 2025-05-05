"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const imageSlides = [
    [
        // Slide 1
        "/assets/gallery/img1.jpg",
        "/assets/gallery/img2.jpg",
        "/assets/gallery/img3.jpg",
        "/assets/gallery/img4.jpg",
        "/assets/gallery/img5.jpg",
    ],
    [
        // Slide 2
        "/assets/gallery/img6.jpg",
        "/assets/gallery/img7.jpg",
        "/assets/gallery/img8.jpg",
        "/assets/gallery/img9.jpg",
        "/assets/gallery/img10.jpg",
    ],
    [
        // Slide 3
        "/assets/gallery/img11.jpg",
        "/assets/gallery/img12.jpg",
        "/assets/gallery/img13.jpg",
        "/assets/gallery/img14.jpg",
        "/assets/gallery/img15.jpg",
    ],
];

const layoutMaps = [
    // Slide 1 layout
    [
        "col-span-2 row-span-2",
        "col-span-1 row-span-1",
        "col-span-1 row-span-1",
        "col-span-1 row-span-1",
        "col-span-1 row-span-1",
    ],
    // Slide 2 layout
    [
        "col-span-1 row-span-1",
        "col-span-1 row-span-1",
        "col-span-2 row-span-2",
        "col-span-1 row-span-1",
        "col-span-1 row-span-1",
    ],
    // Slide 3 layout
    [
        "col-span-1 row-span-1",
        "col-span-1 row-span-1",
        "col-span-2 row-span-1",
        "col-span-3 row-span-1",
        "col-span-1 row-span-1",
    ],
];

export default function GallerySection() {
    const [page, setPage] = useState(0);
    const totalPages = imageSlides.length;

    const handlePrev = () => setPage((p) => Math.max(p - 1, 0));
    const handleNext = () => setPage((p) => Math.min(p + 1, totalPages - 1));

    const currentImages = imageSlides[page];

    return (
        <section className="border max-w-5xl mx-auto px-4 py-20 freeheading">
            <h2 className="text-4xl font-semibold text-gray-100 mb-2">
                Gallery
            </h2>
            <hr className="border-t border-gray-200/30 mb-10" />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
                {currentImages.map((src, index) => {
                    const className =
                        layoutMaps[page][index] || "col-span-1 row-span-1";
                    return (
                        <motion.div
                            key={index}
                            className={`${className} rounded-lg overflow-hidden`}
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
                            transition={{ delay: index * 0.1 }}
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

            {/* Pagination */}
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
