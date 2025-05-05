import React from "react";
import Image from "next/image";

const experiences = [
    {
        title: "HAMPER KITS",
        subtitle: "For Influencers, Employees & Events",
        image: "/assets/images/merchandise/Picture1.png",
    },
    {
        title: "FASHION WEAR",
        subtitle: "T-Shirts, Sneakers, Jackets, Joggers, Accessories and  more",
        image: "/assets/images/merchandise/Picture2.png",
    },
    {
        title: "COLLECTIBLES",
        subtitle:
            "3D Printed, Figures, Patches, Stickers, Enamel, Retro, Magnets, Charms, and a lot more.",
        image: "/assets/images/merchandise/Picture3.png",
    },
    {
        title: "TECH-BASED",
        subtitle:
            "Magnetic, Voice Enabled, Sound boxes, Light boxes, AR VR, and more",
        image: "/assets/images/merchandise/Picture4.png",
    },
    {
        title: "FUNCTIONAL",
        subtitle: "Stationary, Backpacks, Sling bags, Drinkware, & more",
        image: "/assets/images/merchandise/Picture5.png",
    },
];

const Merchandise = () => {
    return (
        <section className="w-full py-16 ">
            {/* Top Section: Grid for Heading and Text */}
            <div className="grid grid-cols-1 lg:grid-cols-3 mt-16 gap-6 lg:gap-0 px-4 md:px-16 max-w-screen-xl mx-auto">
                {/* Left - Title */}
                <div className="flex lg:col-span-2 items-start md:items-center justify-start relative">
                    {/* Background Prop Image */}
                    <Image
                        src="/assets/images/TangibleBgProp.png"
                        alt="Tangible Background Prop"
                        width={200}
                        height={200}
                        className="absolute -top-8 -left-10 w-32 h-32 object-contain z-0 opacity-100"
                    />
                    <h2 className="text-5xl sm:text-6xl font-bold leading-10 lg:leading-14 z-10">
                        <span className="block text-4xl italic font-medium mb-0.5">
                            Customised & Personalised
                        </span>
                        EXPERIENCIAL GIFTING
                    </h2>
                </div>

                {/* Right - Description */}
                <div className="flex flex-col justify-center text-white">
                    <p className="text-lg mb-4">
                        Our team has deep specialization in creating brand
                        experience oriented hamper kits, fashion wear,
                        accessories and tech-based merchandise for your
                        audience.
                    </p>
                    <p className="font-bold uppercase">
                        WE MAKE COOL & AUTHENTIC MERCH THAT YOUR AUDIENCE LOVES.
                    </p>
                </div>
            </div>

            {/* Bottom Section: Grid for Images and Captions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6 px-4 md:px-16 mt-12 max-w-screen-xl mx-auto">
                {experiences.map((item, index) => (
                    <div
                        key={index}
                        className="text-white border rounded lg:border-0 pb-2"
                    >
                        <Image
                            src={item.image}
                            alt={item.title}
                            width={200}
                            height={200}
                            className="w-full h-auto object-cover rounded-md"
                        />
                        <h3 className="text-lg font-bold mt-4 pl-2 freeheading">
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

export default Merchandise;
