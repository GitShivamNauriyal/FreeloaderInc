"use client";

import Link from "next/link";

export default function MerchSubsection() {
    return (
        <section className="max-w-5xl mx-auto px-4 py-20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4">
                Explore Our Merch & Gift Shop
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
                Discover a curated collection of high-quality merch, hand-picked
                accessories, and thoughtful gifts — all designed to reflect your
                style and story. Whether you're repping the brand or surprising
                someone special, there's something for everyone.
            </p>
            <Link
                href="https://future-culture-next-js-frontend.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 text-sm font-semibold rounded-md bg-violet-600 hover:bg-violet-500 text-white transition"
            >
                Tangibles →
            </Link>
        </section>
    );
}
