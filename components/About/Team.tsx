import { motion } from "framer-motion";
import Image from "next/image";

type TeamMember = {
    name: string;
    credentials: string;
    img: string;
};

const team: TeamMember[] = [
    {
        name: "John Doe",
        credentials: "Lead Engineer",
        img: "/assets/images/team1.jpg",
    },
    {
        name: "Jane Smith",
        credentials: "Product Manager",
        img: "/assets/images/team2.jpg",
    },
    {
        name: "Alex Ray",
        credentials: "Designer",
        img: "/assets/images/team3.jpg",
    },
    {
        name: "Lina Park",
        credentials: "Developer",
        img: "/assets/images/team4.jpg",
    },
];
export default function TeamSection() {
    return (
        <section className="border max-w-5xl mx-auto px-4 py-16 text-white">
            <h2 className="text-4xl font-semibold text-gray-300 mb-10">
                Core Team
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {team.map((member, index) => (
                    <motion.div
                        key={index}
                        className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <Image
                            src={member.img}
                            alt={member.name}
                            width={300}
                            height={300}
                            className="w-full h-56 object-cover"
                        />
                        <div className="p-4 bg-gray-900">
                            <h3 className="text-lg font-semibold text-white">
                                {member.name}
                            </h3>
                            <p className="text-sm text-violet-400">
                                {member.credentials}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
