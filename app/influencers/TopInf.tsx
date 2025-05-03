import React from "react";
import Image from "next/image";

const experiences = [
    {
        title: "CELEBRITIES",
        subtitle:
            "From Bollywood to Youtube, we bring down stars on demand, for your events, collaborations & employee engagement",
        image: "/assets/images/influencer/Picture1.png",
    },
    {
        title: "TOP INFLUENCERS",
        subtitle: "Cat A to Cat C, for all your marketing objectives",
        image: "/assets/images/influencer/Picture2.png",
    },
    {
        title: "HOSTS",
        subtitle: "Guestlisting Hosts for Parties & events",
        image: "/assets/images/influencer/Picture3.png",
    },
];

const TopInfluencers = () => {
    return (
        <section className="w-full py-16">
            {/* Top Section: Grid for Heading and Text */}
            <div className="grid grid-cols-1  mt-16 md:grid-cols-2 gap-6 lg:gap-8 px-4 md:px-16 max-w-screen-xl mx-auto relative">
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
                            Top
                        </span>
                        INFLUENCERS
                    </h2>
                </div>

                {/* Right - Description */}
                <div className="flex flex-col justify-center text-white">
                    <p className="text-lg mb-4">
                        We work closely with influencers from various fields,
                        for your Social Media campaigns, events, parties,
                        endorsement, shoots & more.
                    </p>
                    <p className="font-bold uppercase">
                        WITH THE RIGHT FACE AND VOICE, YOUR BRAND CAN AMPLIFY
                        ITS PRESENCE IN A HIGHLY IMPACTFUL AND PERSONALISED
                        MANNER.
                    </p>
                </div>
            </div>

            {/* Bottom Section: Grid for Images and Captions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-6 px-4 md:px-16 mt-12 max-w-screen-xl mx-auto">
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

export default TopInfluencers;
