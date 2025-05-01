import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutDescriptionSection() {
    return (
        <div className="border max-w-5xl mx-auto px-4 py-16">
            <div className="flex flex-col md:flex-row items-center gap-10">
                {/* Left - Image Grid */}
                <motion.div
                    className="w-full md:w-1/2 grid grid-cols-2 gap-4"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <div className="col-span-1 row-span-2">
                        <Image
                            src="/assets/images/about1.jpg"
                            alt="About Left Top"
                            width={500}
                            height={500}
                            className="border-2 w-full h-full object-cover rounded-xl"
                        />
                    </div>
                    <div className="col-span-1">
                        <Image
                            src="/assets/images/about2.jpg"
                            alt="About Right Top"
                            width={500}
                            height={500}
                            className="border-2 w-full h-full object-cover rounded-xl"
                        />
                    </div>
                    <div className="col-span-1">
                        <Image
                            src="/assets/images/about3.jpg"
                            alt="About Right Bottom"
                            width={500}
                            height={500}
                            className="border-2 w-full h-full object-cover rounded-xl"
                        />
                    </div>
                </motion.div>

                {/* Right - Text */}
                <motion.div
                    className="w-full md:w-1/2 text-white"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl font-bold mb-4 text-gray-300">
                        About Us
                    </h2>
                    <p className="text-gray-400 leading-relaxed mb-6">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                    </p>
                    <motion.span
                        whileHover={{ x: 5 }}
                        className="text-violet-600 cursor-pointer inline-flex items-center gap-1 group transition-all duration-300"
                    >
                        Read more
                        <span className="group-hover:translate-x-1 transition-transform duration-200">
                            →
                        </span>
                    </motion.span>
                </motion.div>
            </div>
        </div>
    );
}
