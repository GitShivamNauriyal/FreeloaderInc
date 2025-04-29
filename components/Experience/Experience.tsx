import React from "react";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../ui/backgrounds/dotted-highlight";
// import VideoTextMask from "../ui/text/VIdeoMaskText";

const Experience = () => {
    return (
        <div id="experience">
            {/* <VideoTextMask
                src="/assets/video/Experience.mp4"
                text="Experience"
                className="h-[60vh] w-full border border-red-500"
            /> */}
            <HeroHighlight>
                <motion.h1
                    initial={{
                        opacity: 0,
                        y: 20,
                    }}
                    animate={{
                        opacity: 1,
                        y: [20, -5, 0],
                    }}
                    transition={{
                        duration: 0.5,
                        ease: [0.4, 0.0, 0.2, 1],
                    }}
                    className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
                >
                    Creating Unforgettable Experiences for Brands and their
                    Audience.
                    <div>
                        <Highlight className="text-black dark:text-white">
                            copy, of a copy, of a copy
                        </Highlight>
                    </div>
                </motion.h1>
            </HeroHighlight>
        </div>
    );
};

export default Experience;
