import React from "react";
import Image from "next/image";

const MerchGlance = () => {
    return (
        <div className="wavy-background py-12 lg:py-20 px-4 md:px-16 lg:px-32">
            {/* <h2 className="text-white text-3xl sm:text-5xl font-semibold text-center mb-12">
                Coke Glance
            </h2> */}

            <div className="flex flex-col md:flex-row items-center justify-center gap-12">
                <div className="flex flex-col items-center">
                    <div className="relative w-64 md:w-72 aspect-[1/2]">
                        <Image
                            src="/assets/images/PhoneFrame.png"
                            alt="Merch Glance 1"
                            fill
                            className="object-cover rounded-xl shadow-lg"
                        />
                    </div>
                </div>

                <div className="flex flex-col items-center">
                    <div className="relative w-64 md:w-72 aspect-[1/2]">
                        <Image
                            src="/assets/images/PhoneFrame.png"
                            alt="Merch Glance 2"
                            fill
                            className="object-cover rounded-xl shadow-lg"
                        />
                    </div>
                </div>

                <div className="flex flex-col items-center">
                    <div className="relative w-64 md:w-72 aspect-[1/2]">
                        <Image
                            src="/assets/images/PhoneFrame.png"
                            alt="Merch Glance 3"
                            fill
                            className="object-cover rounded-xl shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MerchGlance;
