"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function MerchSubsection() {
    return (
        <section className="max-w-5xl mx-auto px-4 py-32 text-center">
            <motion.h2
                initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="text-3xl md:text-4xl font-bold text-gray-100 mb-4"
            >
                Explore Our Merch & Gift Shop
            </motion.h2>
            <motion.p
                initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                className="text-gray-400 max-w-2xl mx-auto mb-8"
            >
                Discover a curated collection of high-quality merch, hand-picked
                accessories, and thoughtful gifts — all designed to reflect your
                style and story. Whether you&apos;re repping the brand or
                surprising someone special, there&apos;s something for everyone.
            </motion.p>
            <Link
                href="https://future-culture-next-js-frontend.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 text-sm font-semibold rounded-md bg-violet-600 hover:bg-violet-700 text-white transition"
            >
                Tangibles →
            </Link>
        </section>
    );
}
