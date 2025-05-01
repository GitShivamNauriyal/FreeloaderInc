import React from "react";
import { motion } from "framer-motion";
import MerchScrollSection from "./ScrollObserver";

const Merch = () => {
    return (
        <div className="border-t-[1px] border-t-white/10">
            <div className="relative z-20 py-8 lg:pt-16 lg:pb-8 max-w-5xl mx-auto">
                <div className="px-8 mb-4 select-none">
                    <motion.div
                        initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                        whileInView={{
                            opacity: 1,
                            y: [20, -5, 0],
                            filter: "blur(0px)",
                        }}
                        transition={{
                            duration: 0.6,
                            ease: [0.4, 0, 0.2, 1],
                            delay: 0.2,
                        }}
                        className="relative border-b-[1px] border-b-violet-500"
                    >
                        <span className="absolute cursor-grab -top-3 -left-6 -rotate-20 hover:-rotate-12 bg-violet-500 text-black text-md px-2 py-0.5 rounded transition-all">
                            Custom
                        </span>
                        <h4
                            className="text-3xl lg:text-5xl  lg:leading-tight tracking-normal font-[900] text-transparent dark:text-transparent"
                            style={{
                                WebkitTextStroke: "0.6px #ffffffdd",
                            }}
                        >
                            Merchandise
                        </h4>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                        whileInView={{
                            opacity: 1,
                            y: [20, -5, 0],
                            filter: "blur(0px)",
                        }}
                        transition={{
                            duration: 0.6,
                            ease: [0.4, 0, 0.1, 1],
                            delay: 0.3,
                        }}
                        className="text-sm lg:text-base  max-w-3xl  my-4 text-neutral-500 font-normal dark:text-neutral-300"
                    >
                        Our team has deep specialization in creating brand
                        experience oriented hamper kits, fashion wear,
                        accessories and tech-based merchandise for your
                        audience.
                    </motion.p>
                </div>
            </div>
            <MerchScrollSection />
        </div>
    );
};

export default Merch;
