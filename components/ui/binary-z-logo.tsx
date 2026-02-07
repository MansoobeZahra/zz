"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const BinaryZLogo = () => {
    const [nodes, setNodes] = useState<{ x: number; y: number; val: string }[]>([]);

    useEffect(() => {
        // Define Z shape points
        const points = [
            // Top bar
            { x: 10, y: 10 }, { x: 30, y: 10 }, { x: 50, y: 10 }, { x: 70, y: 10 }, { x: 90, y: 10 },
            // Diagonal
            { x: 80, y: 30 }, { x: 65, y: 45 }, { x: 50, y: 60 }, { x: 35, y: 75 }, { x: 20, y: 90 },
            // Bottom bar
            { x: 10, y: 90 }, { x: 30, y: 90 }, { x: 50, y: 90 }, { x: 70, y: 90 }, { x: 90, y: 90 },
        ];

        setNodes(points.map(p => ({ ...p, val: Math.random() > 0.5 ? "1" : "0" })));
    }, []);

    return (
        <div className="relative w-full h-full flex items-center justify-center">
            <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_15px_rgba(0,128,255,0.6)]">
                {/* Connecting Lines */}
                <motion.path
                    d="M 10 10 L 90 10 L 20 90 L 90 90"
                    fill="none"
                    stroke="url(#gradient)"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                />

                <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#ef4444" />
                        <stop offset="50%" stopColor="#3b82f6" />
                        <stop offset="100%" stopColor="#ef4444" />
                    </linearGradient>
                </defs>

                {/* Nodes */}
                {nodes.map((node, i) => (
                    <motion.g
                        key={i}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: i * 0.1, duration: 0.5 }}
                    >
                        <circle cx={node.x} cy={node.y} r="3" fill="#1e293b" stroke="#60a5fa" strokeWidth="1" />
                        <text
                            x={node.x}
                            y={node.y}
                            dy=".3em"
                            textAnchor="middle"
                            className="text-[4px] fill-white font-mono select-none"
                            style={{ fontSize: "4px" }}
                        >
                            {node.val}
                        </text>
                    </motion.g>
                ))}
            </svg>

            {/* Floating particles effect */}
            {[...Array(5)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-blue-500 rounded-full"
                    initial={{ x: 0, y: 0, opacity: 0 }}
                    animate={{
                        x: [Math.random() * 100 - 50, Math.random() * 100 - 50],
                        y: [Math.random() * 100 - 50, Math.random() * 100 - 50],
                        opacity: [0, 1, 0],
                    }}
                    transition={{
                        duration: 3 + Math.random() * 2,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />
            ))}
        </div>
    );
};
