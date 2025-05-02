import Image from "next/image";
import React from "react";

const TangibleGap = () => {
    return (
        <div className="bg-white w-full py-16 px-4">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
                {/* Text Content */}
                <div className="max-w-3xl relative">
                    {/* Background Prop Image */}
                    <Image
                        src="/assets/images/TangibleBgProp.png"
                        alt="Tangible Background Prop"
                        width={200}
                        height={200}
                        className="absolute -top-8 -left-8 w-32 h-32 object-contain z-0 opacity-70"
                    />

                    {/* Heading Block */}
                    <div className="relative z-10">
                        <div className="flex items-center gap-2">
                            <h2 className="text-5xl font-extrabold leading-tight text-[#2a1114]">
                                THE
                            </h2>
                            <span className="bg-[#5e17eb] text-white px-4 py-2 font-bold text-md rounded-md">
                                WE HAVE A REAL PROBLEM
                            </span>
                        </div>
                        <h2 className="text-6xl font-extrabold text-[#2a1114] mt-1">
                            TANGIBLE GAP
                        </h2>
                    </div>

                    {/* Paragraphs */}
                    <p className="mt-4 text-[#2a1114] text-base leading-relaxed">
                        In an all digital era, brands are beginning to lose
                        tangible connection with their audience at an ever
                        increasing pace.
                    </p>
                    <p className="mt-4 text-[#2a1114] text-base leading-tight">
                        Instead of reactive & ad-hoc solutions to reconnect with
                        the audience, the demand for well thought out
                        experiences is increasing with every new marketing
                        initiative.
                    </p>
                    <p className="mt-4 text-[#2a1114] text-base leading-tight">
                        Since 2009, we at FIC have constantly evolved towards
                        innovating and building new age{" "}
                        <strong>
                            ‘Design based–Tech forward–Pro human connection’
                        </strong>{" "}
                        solutions, pushing the boundaries of what an experience
                        really means.
                    </p>
                </div>

                {/* Phone Frame + Video */}
                <div className="relative w-full max-w-72 aspect-[9/16]">
                    <Image
                        src="/assets/images/PhoneFrame.png" // You can use any SVG phone mockup here
                        alt="Phone Frame"
                        width={400}
                        height={1200}
                        className="absolute inset-0 w-full h-full z-10 pointer-events-none"
                    />
                    {/* <video
                        src="/assets/tangable.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-[7%] w-[86%] h-[86%] object-cover rounded-[2rem] z-0"
                    /> */}
                </div>
            </div>
        </div>
    );
};

export default TangibleGap;
