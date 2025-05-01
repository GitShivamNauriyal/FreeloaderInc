import { motion } from "framer-motion";
import Image from "next/image";

const clients = [
    "/assets/clients/client1.svg",
    "/assets/clients/client2.svg",
    "/assets/clients/client3.svg",
    "/assets/clients/client4.svg",
    "/assets/clients/client5.svg",
    "/assets/clients/client6.svg",
];

export default function ClientsSection() {
    return (
        <section className="border-t border-b bg-violet-500/10 py-16">
            <div className="max-w-5xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold text-violet-300">
                    Our Clients
                </h2>
                <p className="text-sm text-violet-400 mt-2">
                    We have been working with some Fortune 500+ clients
                </p>
                <div className="mt-10 flex flex-wrap justify-center gap-6">
                    {clients.map((src, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Image
                                src={src}
                                alt={`Client ${i + 1}`}
                                width={60}
                                height={60}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
