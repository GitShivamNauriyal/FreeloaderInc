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
    const typingSpeed = 150;
    const fullText = "FREE LOADER AGENCY";

    useEffect(() => {
        let index = 0;

        const typeInterval = setInterval(() => {
            setDisplayText(fullText.slice(0, index + 1));
            index++;
            if (index === fullText.length) clearInterval(typeInterval);
        }, typingSpeed);

        const handleLoad = () => {
            const totalTypingDuration = fullText.length * typingSpeed + 300;
            setTimeout(() => {
                setIsLoading(false);
            }, totalTypingDuration);
        };

        // Wait for entire page (images, etc.) to load
        if (document.readyState === "complete") {
            handleLoad();
        } else {
            window.addEventListener("load", handleLoad);
        }

        return () => {
            clearInterval(typeInterval);
            window.removeEventListener("load", handleLoad);
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
                        exit={{ y: "-10%", opacity: 0 }}
                        transition={{ duration: 1.4, ease: "easeInOut" }}
                    >
                        <div className="relative">
                            <div className="absolute inset-0 blur-2xl opacity-30 rounded-full bg-violet-600"></div>
                            <motion.span
                                initial={{ letterSpacing: "0.01em" }}
                                animate={{
                                    letterSpacing: [
                                        "0.01em",
                                        "0.04em",
                                        "0.01em",
                                    ],
                                }}
                                transition={{
                                    duration: 1.4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                className="relative text-violet-400 drop-shadow-lg whitespace-pre-line"
                            >
                                {displayText.replace(/ /g, "\n")}
                            </motion.span>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isLoading ? 0 : 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
            >
                {children}
            </motion.div>
        </>
    );
}
