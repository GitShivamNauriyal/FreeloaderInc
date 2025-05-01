import { motion } from "framer-motion";
import Image from "next/image";

const influencerData = [
    {
        heading: "Empower Your Brand",
        text: "Join forces with our network of influencers to elevate your brand reach and engagement. From lifestyle to tech, we have voices that connect with your audience.",
        image: "/assets/images/influencer1.jpg",
    },
    {
        heading: "Reach New Heights",
        text: "Get discovered, grow your influence, and monetize your reach by collaborating with influencer in our ecosystem.",
        image: "/assets/images/influencer2.jpg",
    },
];

const InfluencerGrid = () => {
    return (
        <div className="max-w-5xl mx-auto px-4 pb-16 pt-8 space-y-20">
            {influencerData.map((item, index) => {
                const isEven = index % 2 === 0;
                const imageAnimation = {
                    initial: { opacity: 0, x: isEven ? -50 : 50 },
                    whileInView: { opacity: 1, x: 0 },
                };
                const textAnimation = {
                    initial: { opacity: 0, x: isEven ? 50 : -50 },
                    whileInView: { opacity: 1, x: 0 },
                };

                return (
                    <div
                        key={index}
                        className={`flex flex-col border rounded-md md:flex-row ${
                            isEven ? "" : "md:flex-row-reverse"
                        } items-center gap-8`}
                    >
                        {/* Image */}
                        <motion.div
                            className="w-full md:w-3/5"
                            initial={imageAnimation.initial}
                            whileInView={imageAnimation.whileInView}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                            <Image
                                src={item.image}
                                width={800}
                                height={500}
                                alt={`influencer_${index}`}
                                className="w-full h-auto bg-violet-600/10 rounded-xl object-cover"
                            />
                        </motion.div>

                        {/* Text */}
                        <motion.div
                            className="w-full md:w-2/5 text-white px-4"
                            initial={textAnimation.initial}
                            whileInView={textAnimation.whileInView}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                            <h2 className="text-2xl md:text-3xl font-bold mb-4">
                                {item.heading}
                            </h2>
                            <p className="text-gray-300 mb-4">{item.text}</p>
                            <motion.span
                                whileHover={{ x: 5 }}
                                className="text-violet-600 cursor-pointer inline-flex items-center gap-1 group transition-all duration-300"
                            >
                                View more
                                <span className="group-hover:translate-x-1 transition-transform duration-200">
                                    →
                                </span>
                            </motion.span>
                        </motion.div>
                    </div>
                );
            })}
        </div>
    );
};

export default InfluencerGrid;
