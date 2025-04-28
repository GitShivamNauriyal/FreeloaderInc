"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Model from "./Model";
import { OrbitControls } from "@react-three/drei";

export default function HeroCanvas() {
    return (
        <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
            <ambientLight intensity={1} />
            <directionalLight position={[0, 10, 5]} intensity={2} />
            <Suspense fallback={null}>
                <Model />
            </Suspense>
            <OrbitControls enableDamping />
        </Canvas>
    );
}
