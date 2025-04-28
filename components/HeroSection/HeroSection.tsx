"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import HeroCanvas from "./HeroCanvas";
import { motion } from "framer-motion";

export default function HeroSection() {
    return (
        <section className="relative w-full h-screen overflow-hidden bg-[#5e17eb]">
            {/* 3D Canvas */}
            <Canvas className="absolute inset-0">
                <Suspense fallback={null}>
                    <HeroCanvas />
                </Suspense>
            </Canvas>

            {/* Large Background Text */}
            <div className="absolute inset-0 flex items-center justify-center">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-white text-[10vw] font-extrabold tracking-tight leading-none pointer-events-none"
                >
                    FREE LOADER AGENCY
                </motion.h1>
            </div>
        </section>
    );
}
