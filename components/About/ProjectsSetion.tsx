import Link from "next/link";
import { motion } from "framer-motion";

const projectItems = [
    { id: 1, title: "Sample Project", isFeatured: true },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
];

export default function ProjectsSection() {
    return (
        <section className="border max-w-5xl mx-auto px-4 py-16 text-white">
            <h2 className="text-4xl font-semibold text-gray-300 mb-10">
                Projects
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
                {projectItems.map((item, i) =>
                    item.isFeatured ? (
                        <motion.div
                            key={item.id}
                            className="bg-gray-700 h-48 md:h-full flex items-center justify-center text-left p-6 rounded-lg"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div>
                                <h3 className="text-2xl font-bold text-white">
                                    Sample Project
                                </h3>
                                <Link
                                    href="/projects/sample"
                                    className="text-sm mt-2 inline-block text-violet-300/70 hover:text-violet-200 transition"
                                >
                                    VIEW MORE →
                                </Link>
                            </div>
                        </motion.div>
                    ) : null
                )}
                <div className="bg-gray-500 h-48 rounded-lg" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {projectItems.slice(2).map((_, i) => (
                    <motion.div
                        key={i}
                        className="bg-gray-600 h-40 rounded-lg"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        viewport={{ once: true }}
                    />
                ))}
            </div>

            <div className="mt-10 flex justify-end">
                <Link
                    href="/projects"
                    className="bg-violet-600 text-white px-6 py-2 rounded-md hover:bg-violet-800 transition text-sm tracking-wide"
                >
                    ALL PROJECTS →
                </Link>
            </div>
        </section>
    );
}
