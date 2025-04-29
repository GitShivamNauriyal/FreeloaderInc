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
    const fullText = "FREELOADER INC";

    useEffect(() => {
        let index = 0;
        const typeInterval = setInterval(() => {
            setDisplayText(fullText.slice(0, index + 1));
            index++;
            if (index === fullText.length) clearInterval(typeInterval);
        }, 150); // typing speed

        // Simulate app load (replace this with real checks if needed)
        const loadTimeout = setTimeout(() => {
            setIsLoading(false);
        }, 2500);

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
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black text-white text-3xl font-mono font-bold"
                        initial={{ y: 0 }}
                        animate={{ y: 0 }}
                        exit={{ y: "-100%" }}
                        transition={{ duration: 1.2, ease: "easeInOut" }}
                    >
                        {displayText}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Fade in content when ready */}
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
