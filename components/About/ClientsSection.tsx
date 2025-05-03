import Image from "next/image";
import Marquee from "react-fast-marquee";

const clients = Array.from(
    { length: 30 },
    (_, i) => `/assets/clients/client${i + 1}.svg`
);

export default function ClientsSection() {
    return (
        <section className="border-t border-b w-screen py-24 wavy-background overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 text-center">
                <h2 className="text-5xl lg:text-6xl font-bold text-white">
                    OUR CLIENTS
                </h2>

                <div className="mt-10">
                    <Marquee speed={50} gradient={false} pauseOnHover={true}>
                        {clients.map((src, i) => (
                            <div
                                key={i}
                                className="mx-6 flex items-center justify-center"
                            >
                                <Image
                                    src={src}
                                    alt={`Client ${i + 1}`}
                                    width={60}
                                    height={60}
                                />
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>
        </section>
    );
}
