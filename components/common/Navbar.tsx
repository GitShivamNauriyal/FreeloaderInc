"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const menuItems = [
    "experiences",
    "influencers",
    "merch",
    "about us",
    "contact",
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed w-full bg-black/70 backdrop-blur-[8px] z-[999]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="relative glitch-container">
                            <img
                                src={"/assets/images/logo.jpeg"}
                                alt="Logo"
                                className="h-12 rounded-full"
                            />
                            <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 glitch"></span>
                        </Link>
                    </div>

                    {/* Desktop menu */}
                    <div className="hidden md:flex md:items-center md:space-x-8">
                        {menuItems.map((item) => (
                            <Link
                                key={item}
                                href={`#${item}`}
                                className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-300"
                            >
                                {item.charAt(0).toUpperCase() + item.slice(1)}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            aria-expanded={isOpen}
                            className="text-gray-300 hover:text-white focus:outline-none"
                        >
                            <motion.div
                                initial={false}
                                animate={{
                                    rotate: isOpen ? 90 : 0,
                                    scale: isOpen ? 1.1 : 1,
                                }}
                                transition={{ duration: 0.3 }}
                                className="w-6 h-6 flex flex-col justify-between"
                            >
                                <span className="block w-full h-0.5 bg-white"></span>
                                <span className="block w-full h-0.5 bg-white"></span>
                                <span className="block w-full h-0.5 bg-white"></span>
                            </motion.div>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu with animation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-black/80 backdrop-blur-md absolute top-16 left-0 w-full px-4 py-4 space-y-2"
                    >
                        {menuItems.map((item, i) => (
                            <motion.div
                                key={item}
                                initial={{ opacity: 0, x: 30 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 30 }}
                                transition={{
                                    delay: i * 0.1,
                                    duration: 0.3,
                                }}
                            >
                                <Link
                                    href={`#${item}`}
                                    className="block text-gray-300 hover:text-white px-3 py-2 text-lg font-medium transition-colors duration-300"
                                >
                                    {item.charAt(0).toUpperCase() +
                                        item.slice(1)}
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
