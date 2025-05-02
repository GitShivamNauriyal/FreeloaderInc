"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import BottomGradientHover from "../ui/text/bottom-gradient-hover";
// import { it } from "node:test";

const menuItems = [
    "experiences",
    "experiencial gifting",
    "influencers",
    "about us",
    "contact",
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed w-full bg-black/10 backdrop-blur-[8px] z-[999]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link
                            href="/"
                            className="relative text-white font-freelogo text-xl font-medium glitch-container"
                        >
                            <div className="raleway translate-y-1 glitch-text">
                                FREE
                            </div>
                            <div className="raleway -translate-y-1 glitch-text">
                                LOADER
                            </div>
                        </Link>
                    </div>

                    {/* Desktop menu */}
                    {/* Desktop menu */}
                    <div className="hidden md:flex md:items-center md:space-x-8">
                        {menuItems.map((item) => (
                            <div key={item} className="relative group">
                                <Link
                                    href={`#${item}`}
                                    className={`px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                                        item === "contact"
                                            ? "bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white rounded-md"
                                            : "text-gray-200 hover:text-violet-200"
                                    }`}
                                >
                                    {item.charAt(0).toUpperCase() +
                                        item.slice(1)}
                                </Link>
                                {item !== "contact" && <BottomGradientHover />}
                            </div>
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
                                    className={`block  px-3 py-2 text-lg font-medium transition-colors duration-300 ${
                                        item === "contact"
                                            ? "bg-gradient-to-r from-violet-400 to-purple-600 hover:bg-gradient-to-r hover:from-violet-600 hover:to-purple-700 transition-all text-white rounded-md"
                                            : "text-gray-300 hover:text-white"
                                    }`}
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
