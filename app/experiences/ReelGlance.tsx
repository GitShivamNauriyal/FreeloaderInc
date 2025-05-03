import React from "react";
import Image from "next/image";

const ReelGlance = () => {
    return (
        <div className="wavy-background py-2 lg:py-8 relative">
            <div className="flex flex-col items-center justify-center h-full px-4 md:px-16 lg:px-32 xl:px-64">
                <div className="w-full mt-6 flex justify-center mb-6">
                    <span className="text-white text-3xl sm:text-5xl font-medium">
                        Quick glance at
                        <span className="block">our recent work</span>
                    </span>
                </div>
                <div className="relative w-full max-w-72 aspect-[9/18]">
                    <Image
                        src="/assets/images/PhoneFrame.png"
                        alt="Phone Frame"
                        width={400}
                        height={1200}
                        className="absolute inset-0 w-full h-full z-10 pointer-events-none"
                    />
                </div>
            </div>
        </div>
    );
};

export default ReelGlance;
