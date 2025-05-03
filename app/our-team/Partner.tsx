"use client";
import React from "react";

import Image from "next/image";
// import nConsolidatedLogo from "@/assets/n_consolidated.png";
// import hammerLogo from "@/assets/hammer.png";
// import koverifyLogo from "@/assets/koverify.png";
// import wardrobeLogo from "@/assets/wardrobe.png";
// import marvinnoLogo from "@/assets/marvinno.png";
// import headwayLogo from "@/assets/headway.png";
import tempLogo from "@/public/assets/images/cubes_0.png"; // Import the placeholder image once

const PartnerAllianceSection = () => {
    return (
        <section className="bg-[#661eff] text-white py-20 px-6 md:px-16">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                {/* Left: Text */}
                <div>
                    <h2 className="text-4xl md:text-6xl font-bold leading-8 lg:leading-12">
                        First <br />
                        Preference <br />
                        Alliance
                    </h2>
                    <div className="inline-block  bg-black px-4 py-2 text-sm font-bold uppercase tracking-wider rotate-[-2deg]">
                        OUR PARTNER NETWORK
                    </div>

                    <p className="mt-8 text-lg leading-relaxed text-white/90">
                        With our Pan-India partner network, we have formed a{" "}
                        <span className="font-semibold">
                            1<sup>st</sup> Preference Alliance
                        </span>{" "}
                        with our long-term regular manufacturers, export houses,
                        producers, fabricators & suppliers.
                    </p>
                    <p className="mt-6 text-lg leading-relaxed text-white/90">
                        We maintain complete control over{" "}
                        <span className="font-bold">
                            QUALITY, DESIGN, GUIDELINES & FINAL PRODUCT
                            DELIVERY.
                        </span>
                    </p>
                </div>

                {/* Right: Logos */}
                <div className="grid grid-cols-2 sm:grid-cols-2 gap-10 items-center justify-items-center">
                    {[...Array(6)].map((_, idx) => (
                        <Image
                            key={idx}
                            src={tempLogo}
                            alt={`Partner logo ${idx + 1}`}
                            className="w-24 sm:w-28 h-auto"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PartnerAllianceSection;
