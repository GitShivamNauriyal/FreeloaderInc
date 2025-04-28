"use client";

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function Model() {
    const meshRef = useRef<THREE.Mesh>(null!);

    useFrame(({ mouse }) => {
        if (meshRef.current) {
            meshRef.current.rotation.y = mouse.x * Math.PI;
            meshRef.current.rotation.x = mouse.y * Math.PI;
        }
    });

    return (
        <mesh ref={meshRef} scale={2}>
            <torusKnotGeometry args={[1, 0.4, 128, 32]} />
            <meshStandardMaterial
                color="#5ce1e6"
                metalness={0.8}
                roughness={0.2}
            />
        </mesh>
    );
}
