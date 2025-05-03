import React from "react";
import Image from "next/image";

const experiences = [
    {
        title: "Bhavnesh S Manhas",
        subtitle: "Creative Director",
        image: "/assets/images/team/Picture1.png",
    },
    {
        title: "Nikhell Lall",
        subtitle: "Operations Director",
        image: "/assets/images/team/Picture2.png",
    },
    {
        title: "Saarthak Vig",
        subtitle: "Tech Lead",
        image: "/assets/images/team/Picture3.png",
    },
    {
        title: "Surbhe Singgla",
        subtitle: "Sourcing Lead",
        image: "/assets/images/team/Picture4.png",
    },
];

const CoreTeam = () => {
    return (
        <section className="w-full py-16">
            {/* Top Section: Grid for Heading and Text */}
            <div className=" px-4 md:px-16  mt-16 max-w-screen-xl mx-auto">
                {/* Left - Title */}
                <div className="flex items-start md:items-center justify-start relative">
                    {/* Background Prop Image */}
                    <Image
                        src="/assets/images/TangibleBgProp.png"
                        alt="Tangible Background Prop"
                        width={200}
                        height={200}
                        className="absolute -top-8 -left-10 w-32 h-32 object-contain z-0 opacity-100"
                    />
                    <h2 className="text-5xl sm:text-6xl font-bold leading-10 z-10">
                        <span className="block text-4xl italic font-medium">
                            Meet Our
                        </span>
                        CORE TEAM
                    </h2>
                </div>
            </div>

            {/* Bottom Section: Grid for Images and Captions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 px-4 md:px-16 mt-12 max-w-screen-xl mx-auto">
                {experiences.map((item, index) => (
                    <div
                        key={index}
                        className="text-white border rounded lg:border-0 pb-2"
                    >
                        <Image
                            width={200}
                            height={200}
                            src={item.image}
                            alt={item.title}
                            className="w-full h-auto object-cover rounded-md"
                        />
                        <div className="border border-white rounded-full mt-4 px-2 py-3">
                            <h3 className="text-xl text-center font-bold ">
                                {item.title}
                            </h3>
                            <p className="text-md text-center italic opacity-80 ">
                                {item.subtitle}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CoreTeam;
