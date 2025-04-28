"use client";

import { Float, Environment } from "@react-three/drei";
import Model from "./Model";
import { useThree } from "@react-three/fiber";
import { useEffect } from "react";

export default function HeroCanvas() {
    const { gl } = useThree();

    useEffect(() => {
        gl.setClearColor("#5e17eb"); // Primary background color
    }, [gl]);

    return (
        <>
            {/* Floating, cursor-reactive model */}
            <Float speed={1.5} rotationIntensity={2} floatIntensity={2}>
                <Model />
            </Float>

            {/* Lighting */}
            <ambientLight intensity={1.5} />
            <Environment preset="sunset" />
        </>
    );
}
