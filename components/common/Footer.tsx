import {
    FaInstagram,
    FaLinkedinIn,
    FaYoutube,
    FaXTwitter,
    FaFacebookF,
} from "react-icons/fa6";

export default function Footer() {
    return (
        <footer className="bg-black text-white px-6 md:px-12 lg:px-24 py-16">
            <div className="text-center md:text-left mb-16">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold italic leading-tight">
                    People don't connect with pixels,
                    <br className="hidden md:block" />
                    <span className="font-bold">
                        {" "}
                        they connect with presence.
                    </span>
                </h2>
                <p className="mt-4 text-lg text-gray-300">
                    Let&apos;s make your brand part of their{" "}
                    <span className="text-violet-400 font-semibold">
                        PHYSICAL WORLD.
                    </span>
                </p>
            </div>

            <div className="grid gap-10 md:grid-cols-4">
                {/* Left - Brand */}
                <div>
                    <h3 className="text-xl font-bold tracking-widest mb-2">
                        FREELOADER
                    </h3>
                    <p className="text-gray-400">Brand Experience Agency</p>
                    <p className="text-gray-400">Since 2009</p>
                </div>

                {/* Navigation */}
                <div>
                    <h4 className="font-semibold mb-3 text-white">
                        Navigation
                    </h4>
                    <ul className="space-y-2 text-gray-300">
                        <li>Experiences</li>
                        <li>Merch</li>
                        <li>Influencers</li>
                        <li>About Us</li>
                    </ul>
                </div>

                {/* More */}
                <div>
                    <h4 className="font-semibold mb-3 text-white">More</h4>
                    <ul className="space-y-2 text-gray-300">
                        <li>Our Services</li>
                        <li>Our Work</li>
                        <li>Our Team & Partners</li>
                    </ul>
                </div>

                {/* Get in Touch */}
                <div>
                    <h4 className="font-semibold mb-3 text-white">
                        Get in Touch
                    </h4>
                    <a
                        href="mailto:hi@freeloader.in"
                        className="text-violet-400 hover:underline block mb-4"
                    >
                        hi@freeloader.in
                    </a>
                    <div className="flex gap-4">
                        <a
                            href="#"
                            className="p-2 bg-neutral-800 rounded-full hover:bg-violet-500 transition"
                        >
                            <FaInstagram className="text-xl" />
                        </a>
                        <a
                            href="#"
                            className="p-2 bg-neutral-800 rounded-full hover:bg-violet-500 transition"
                        >
                            <FaLinkedinIn className="text-xl" />
                        </a>
                        <a
                            href="#"
                            className="p-2 bg-neutral-800 rounded-full hover:bg-violet-500 transition"
                        >
                            <FaYoutube className="text-xl" />
                        </a>
                        <a
                            href="#"
                            className="p-2 bg-neutral-800 rounded-full hover:bg-violet-500 transition"
                        >
                            <FaXTwitter className="text-xl" />
                        </a>
                        <a
                            href="#"
                            className="p-2 bg-neutral-800 rounded-full hover:bg-violet-500 transition"
                        >
                            <FaFacebookF className="text-xl" />
                        </a>
                    </div>
                </div>
            </div>

            <div className="mt-16 border-t border-neutral-800 pt-6 flex flex-col md:flex-row justify-between text-sm text-gray-400">
                <p>Copyright © 2025 Freeloader Inc. All rights reserved.</p>
                <div className="flex gap-6 mt-3 md:mt-0">
                    <a href="#" className="hover:text-white">
                        Privacy Policy
                    </a>
                    <a href="#" className="hover:text-white">
                        Terms of Service
                    </a>
                </div>
            </div>
        </footer>
    );
}
