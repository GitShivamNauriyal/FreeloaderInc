import React from "react";
import Image from "next/image";

const CokeGlance = () => {
    return (
        <div className="wavy-background py-12 px-4 md:px-16 lg:px-32">
            {/* <h2 className="text-white text-3xl sm:text-5xl font-semibold text-center mb-12">
                Coke Glance
            </h2> */}

            <div className="flex flex-col md:flex-row items-center justify-center gap-12">
                {/* Coke Glance 2023 */}
                <div className="flex flex-col items-center">
                    <span className="text-white mb-4 text-2xl font-medium">
                        Coke Magic 2023
                    </span>
                    <div className="relative w-64 md:w-72 aspect-[1/2]">
                        <Image
                            src="/assets/images/PhoneFrame.png"
                            alt="Coke Glance 2023"
                            fill
                            className="object-cover rounded-xl shadow-lg"
                        />
                    </div>
                </div>

                {/* Coke Glance 2024 */}
                <div className="flex flex-col items-center">
                    <span className="text-white mb-4 text-2xl font-medium">
                        Coke Magic 2024
                    </span>
                    <div className="relative w-64 md:w-72 aspect-[1/2]">
                        <Image
                            src="/assets/images/PhoneFrame.png"
                            alt="Coke Glance 2024"
                            fill
                            className="object-cover rounded-xl shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CokeGlance;
