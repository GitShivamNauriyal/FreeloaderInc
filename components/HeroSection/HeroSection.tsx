"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ClientsSection from "../About/ClientsSection";
// import Creation from "../Overview/Creation";
import ExperienceMarketingSection from "../Overview/ExpMarket";
import Process from "../Overview/Process";
import TangibleGap from "../Overview/TangibleGap";
import OverviewVideoPlayback from "../Overview/VideoPlayback_1";
import OverviewVideoPlayback_2 from "../Overview/VideoPlayback_2";
import History from "../Overview/History";

// Move animation props outside JSX for optimization
const motionSpanProps = {
    initial: { opacity: 0, y: 10 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
    viewport: { once: false },
};

const HeroSection = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <motion.main
                initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
                whileInView={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: false, amount: 0.2 }}
                className="w-full md:min-h-[500px] h-[50vh] lg:h-[90vh] mt-16 flex flex-col justify-between px-4 lg:px-12 py-10 hero-container"
            >
                <div /> {/* Spacer */}
                <div className="text-left pl-2 md:pl-8">
                    <h1 className="z-10 text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] font-[900] leading-[0.8] tracking-[0.1rem] text-white freelogo">
                        FREE
                        <br />
                        LOADER
                        <br />
                        AGENCY
                    </h1>
                    <p className="text-sm sm:text-lg font-light tracking-[4px] text-gray-300 mt-2 freeheading flex flex-wrap gap-1">
                        <motion.span {...motionSpanProps}>
                            <Link href="/experiences">EXPERIENCES</Link>
                        </motion.span>
                        <span className="mx-1">•</span>
                        <motion.span
                            {...motionSpanProps}
                            transition={{
                                ...motionSpanProps.transition,
                                delay: 0.3,
                            }}
                        >
                            <Link href="/experiencial-gifting">
                                EXPERIENCIAL GIFTING
                            </Link>
                        </motion.span>
                        <span className="mx-1">•</span>
                        <motion.span
                            {...motionSpanProps}
                            transition={{
                                ...motionSpanProps.transition,
                                delay: 0.6,
                            }}
                        >
                            <Link href="/influencers">INFLUENCERS</Link>
                        </motion.span>
                    </p>
                </div>
            </motion.main>

            <div className="w-screen bg-cyan-400 text-[#5e17eb] font-bold tracking-wider text-center freelogo py-4 px-4 text-sm sm:text-lg lg:text-2xl">
                <motion.h2
                    initial={{ x: 20, filter: "blur(10px)" }}
                    whileInView={{ x: 0, filter: "blur(0px)" }}
                    transition={{ ease: "easeIn", duration: 0.4 }}
                >
                    16+ YEAR JOURNEY • 500+ EXPERIENCES DELIVERED • OVER 60
                    BRANDS
                </motion.h2>
            </div>

            {/* Other sections */}
            {/* <Creation /> */}
            <History />
            <OverviewVideoPlayback />
            <TangibleGap />
            <ClientsSection />
            <ExperienceMarketingSection />
            <Process />
            <OverviewVideoPlayback_2 />
        </div>
    );
};

export default HeroSection;
