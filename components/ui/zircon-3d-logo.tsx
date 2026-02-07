"use client";
import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Text3D, Center, Stars } from "@react-three/drei";
import * as THREE from "three";

// You might need to adjust the font path. For now I'm using a standard one or we can load a JSON font.
// Since we might not have a font file, let's use a simple geometric shape representing Z or just TorusKnot for "cool 3D effect" if font fails,
// but let's try to be specific.
// Actually, safely, let's use a Group of meshes to form a Z if we don't want to rely on external font files loading correctly immediately without setup.
// OR better: A cool abstract 3D object (Icosahedron) that looks like a "Node".

function GeometricZ() {
    const group = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (group.current) {
            group.current.rotation.y += 0.01;
            group.current.rotation.x = Math.sin(state.clock.elapsedTime / 2) * 0.2;
        }
    });

    return (
        <group ref={group}>
            {/* Top Bar */}
            <mesh position={[0, 1.5, 0]}>
                <boxGeometry args={[3, 0.5, 0.5]} />
                <meshStandardMaterial color="#ef4444" emissive="#7f1d1d" roughness={0.2} metalness={0.8} />
            </mesh>

            {/* Diagonal */}
            <mesh rotation={[0, 0, Math.PI / 4]} position={[0, 0, 0]}>
                <boxGeometry args={[0.5, 4, 0.5]} />
                <meshStandardMaterial color="#3b82f6" emissive="#1e3a8a" roughness={0.2} metalness={0.8} />
            </mesh>

            {/* Bottom Bar */}
            <mesh position={[0, -1.5, 0]}>
                <boxGeometry args={[3, 0.5, 0.5]} />
                <meshStandardMaterial color="#ef4444" emissive="#7f1d1d" roughness={0.2} metalness={0.8} />
            </mesh>

            {/* Floating "Nodes" */}
            <mesh position={[1.8, 1.8, 0.5]}>
                <sphereGeometry args={[0.3, 32, 32]} />
                <meshStandardMaterial color="white" emissive="white" emissiveIntensity={2} />
            </mesh>
            <mesh position={[-1.8, -1.8, -0.5]}>
                <sphereGeometry args={[0.3, 32, 32]} />
                <meshStandardMaterial color="white" emissive="white" emissiveIntensity={2} />
            </mesh>
        </group>
    );
}

export const Zircon3DLogo = () => {
    return (
        <div className="w-full h-full">
            <Canvas camera={{ position: [0, 0, 5] }}>
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                <pointLight position={[-10, -10, -10]} color="blue" intensity={1} />

                <Center>
                    <Float speed={2} rotationIntensity={1} floatIntensity={1}>
                        <GeometricZ />
                    </Float>
                </Center>

                <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
            </Canvas>
        </div>
    );
};
