"use client";

import * as THREE from "three";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
import { useRef, useState, useEffect } from "react";

// Import shaders as strings (or define inline)
const vertexShader = `
  uniform vec2 mousePosition;
  attribute vec3 color;
  attribute float displacement;
  varying vec3 vColor;

  void main() {
    vColor = color;
    vec3 newPosition = position + normal * displacement * (0.5 + mousePosition.x * 0.5);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
  }
`;

const fragmentShader = `
  varying vec3 vColor;
  void main() {
    gl_FragColor = vec4(vColor, 1.0);
  }
`;

function ExplodingModel() {
    const materialRef = useRef<THREE.ShaderMaterial>(null!);
    const obj = useLoader(OBJLoader, "/models/head.obj"); // your head.obj path
    const [geometry, setGeometry] = useState<THREE.BufferGeometry | null>(null);

    const { mouse } = useThree();

    useEffect(() => {
        const geo = (obj.children[0] as THREE.Mesh)
            .geometry as THREE.BufferGeometry;
        geo.center();

        if (!geo.attributes.normal) {
            geo.computeVertexNormals();
        }

        const numVertices = geo.attributes.position.count;
        const colors = new Float32Array(numVertices * 3);
        const displacement = new Float32Array(numVertices * 3);
        const color = new THREE.Color();

        for (let i = 0; i < numVertices; i++) {
            color.setHSL(0.0, 1.0, 0.3 + Math.random() * 0.7);
            colors[i * 3] = color.r;
            colors[i * 3 + 1] = color.g;
            colors[i * 3 + 2] = color.b;

            const d = 10 * (0.5 - Math.random());
            displacement[i * 3] = d;
            displacement[i * 3 + 1] = d;
            displacement[i * 3 + 2] = d;
        }

        geo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
        geo.setAttribute(
            "displacement",
            new THREE.BufferAttribute(displacement, 3)
        );

        setGeometry(geo);
    }, [obj]);

    useFrame(() => {
        if (materialRef.current) {
            materialRef.current.uniforms.mousePosition.value.set(
                mouse.x,
                mouse.y
            );
        }
    });

    if (!geometry) return null;

    return (
        <mesh geometry={geometry} scale={2}>
            <shaderMaterial
                ref={materialRef}
                vertexShader={vertexShader}
                fragmentShader={fragmentShader}
                uniforms={{
                    mousePosition: { value: new THREE.Vector2(0.0, 0.0) },
                }}
                side={THREE.DoubleSide}
            />
        </mesh>
    );
}

export default function ScenePage() {
    return (
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
            <ambientLight intensity={0.5} />
            <hemisphereLight
                color={0xffffff}
                groundColor={0x444444}
                intensity={2}
            />
            <OrbitControls enableDamping />
            <ExplodingModel />
        </Canvas>
    );
}
