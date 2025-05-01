import { motion } from "framer-motion";

export default function StatementSection() {
    const statements = [
        {
            id: "1",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat.",
        },
        {
            id: "2",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat, magna mauris porttitor tortor, a auctor est felis ut nisl.",
        },
    ];

    return (
        <section className="border max-w-5xl mx-auto px-4 py-16 text-white">
            <h2 className="text-4xl font-semibold text-gray-300 mb-8">
                Statement
            </h2>
            <div className="grid md:grid-cols-2 gap-10">
                {statements.map((item, index) => (
                    <motion.div
                        key={item.id}
                        className="flex gap-4"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 }}
                    >
                        <div className="text-6xl font-bold text-violet-500">
                            {item.id}
                        </div>
                        <p className="text-gray-400 max-w-md leading-relaxed">
                            {item.text}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
