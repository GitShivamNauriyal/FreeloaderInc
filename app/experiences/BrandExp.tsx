import React from "react";
import Image from "next/image";

const experiences = [
    {
        title: "INFLUENCER EVENTS",
        subtitle: "Conceptual parties & meet-ups",
        image: "/assets/images/experience/Picture1.png",
    },
    {
        title: "CORPORATE SHOWS",
        subtitle: "Dealer Meets, Press Launches & Employee Celebrations",
        image: "/assets/images/experience/Picture2.png",
    },
    {
        title: "FASHION SHOWS",
        subtitle: "Bespoke designer shows & Fashion weeks",
        image: "/assets/images/experience/Picture3.png",
    },
    {
        title: "POP-UPS",
        subtitle: "Activation & Guerilla Marketing",
        image: "/assets/images/experience/Picture4.png",
    },
];

const BrandExperiences = () => {
    return (
        <section className="w-full py-16 mt-16">
            {/* Top Section: Grid for Heading and Text */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 px-4 md:px-16 max-w-screen-xl mx-auto relative">
                {/* Background Prop Image */}
                <Image
                    src="/assets/images/TangibleBgProp.png"
                    alt="Tangible Background Prop"
                    width={200}
                    height={200}
                    className="absolute -top-8 left-4 w-32 h-32 object-contain z-0 opacity-100"
                />
                {/* Left - Title */}
                <div className="flex items-start md:items-center justify-start z-10">
                    <h2 className="text-5xl sm:text-6xl font-bold leading-10">
                        <span className="block text-4xl italic font-medium">
                            Brand
                        </span>
                        EXPERIENCES
                    </h2>
                </div>

                {/* Right - Description */}
                <div className="flex flex-col justify-center text-white">
                    <p className="text-lg mb-4">
                        From conceptual brand launches, to theme based on–ground
                        campaigns, to the most happening night of the town…
                        on–ground experiences come in many flavors and a lot of
                        shades.
                    </p>
                    <p className="font-bold uppercase">
                        We specialise in creating unforgettable concept based
                        experiences for brands and their audience.
                    </p>
                </div>
            </div>

            {/* Bottom Section: Grid for Images and Captions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 px-4 md:px-16 mt-12 max-w-screen-xl mx-auto">
                {experiences.map((item, index) => (
                    <div
                        key={index}
                        className="text-white border rounded lg:border-0 pb-2"
                    >
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-auto object-cover rounded-md"
                        />
                        <h3 className="text-lg font-bold mt-4 pl-2">
                            {item.title}
                        </h3>
                        <p className="text-sm opacity-80 pl-2">
                            {item.subtitle}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default BrandExperiences;
