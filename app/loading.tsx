"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen({
    children,
}: {
    children: React.ReactNode;
}) {
    const [isLoading, setIsLoading] = useState(true);
    const [displayText, setDisplayText] = useState("");
    const typingSpeed = 150; // ms per character
    const fullText = "FREE LOADER AGENCY";

    useEffect(() => {
        let index = 0;
        const typeInterval = setInterval(() => {
            setDisplayText(fullText.slice(0, index + 1));
            index++;
            if (index === fullText.length) clearInterval(typeInterval);
        }, typingSpeed);

        const totalTypingDuration = fullText.length * typingSpeed + 300; // +300ms buffer
        const loadTimeout = setTimeout(() => {
            setIsLoading(false);
        }, totalTypingDuration);

        return () => {
            clearInterval(typeInterval);
            clearTimeout(loadTimeout);
        };
    }, []);
    return (
        <>
            <AnimatePresence>
                {isLoading && (
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-[#1e1b4b] via-black to-[#0f0f1f] text-white text-4xl sm:text-5xl font-mono font-bold tracking-widest"
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 1 }}
                        exit={{ y: "-100%", opacity: 0 }}
                        transition={{ duration: 1.4, ease: "easeInOut" }}
                    >
                        <div className="relative">
                            {/* Soft glow behind text */}
                            <div className="absolute inset-0 blur-2xl opacity-30 rounded-full bg-violet-600"></div>
                            <motion.span
                                initial={{ letterSpacing: "0.05em" }}
                                animate={{
                                    letterSpacing: [
                                        "0.05em",
                                        "0.15em",
                                        "0.05em",
                                    ],
                                }}
                                transition={{
                                    duration: 1.4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                className="relative text-violet-400 drop-shadow-lg"
                            >
                                {displayText}
                            </motion.span>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isLoading ? 0 : 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
            >
                {children}
            </motion.div>
        </>
    );
}
