import React from "react";
import Image from "next/image";

const MerchGlance = () => {
    return (
        <div className="wavy-background py-12 lg:py-20 px-4 md:px-16 lg:px-32">
            {/* <h2 className="text-white text-3xl sm:text-5xl font-semibold text-center mb-12">
                Coke Glance
            </h2> */}

            <div className="flex flex-col md:flex-row items-center justify-center gap-12">
                {["1", "2", "3"].map((num) => (
                    <div key={num} className="flex flex-col items-center">
                        <div className="relative w-64 md:w-72 aspect-[1/2]">
                            <video
                                src={`/assets/video/experiencial_gifting/exp_reel_${num}.mp4`}
                                className="absolute inset-0 w-full h-full object-cover rounded-4xl z-0"
                                autoPlay
                                muted
                                loop
                                playsInline
                            />
                            <Image
                                src="/assets/images/PhoneFrame.png"
                                alt={`Merch Glance ${num}`}
                                fill
                                className="object-cover rounded-xl z-10 pointer-events-none"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MerchGlance;
