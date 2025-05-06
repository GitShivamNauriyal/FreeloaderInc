"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";

const clients = Array.from(
    { length: 29 },
    (_, i) => `/assets/images/clients/c${i + 1}.png`
);

export default function ClientsSection() {
    return (
        <section className="border-t border-b w-screen py-20 wavy-background overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 text-center mt-8">
                <h2 className="text-5xl lg:text-6xl font-bold text-white freeheading">
                    OUR CLIENTS
                </h2>

                <div className="mt-4 lg:mt-10">
                    <Marquee speed={50} gradient={false} pauseOnHover={true}>
                        {clients.map((src, i) => (
                            <div
                                key={i}
                                className="mx-6 flex items-center justify-center"
                            >
                                <Image
                                    src={src}
                                    alt={`Client ${i + 1}`}
                                    width={100}
                                    height={100}
                                />
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>
        </section>
    );
}
