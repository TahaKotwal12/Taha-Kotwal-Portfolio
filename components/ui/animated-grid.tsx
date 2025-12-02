"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function AnimatedGrid() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    // Create a grid of boxes
    const boxes = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        x: (i % 10) * 10,
        y: Math.floor(i / 10) * 20,
        delay: Math.random() * 2,
    }));

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
            <div className="absolute inset-0 opacity-20 dark:opacity-30">
                {boxes.map((box) => (
                    <motion.div
                        key={box.id}
                        className="absolute h-32 w-32 rounded-lg"
                        style={{
                            left: `${box.x}%`,
                            top: `${box.y}%`,
                            background: "linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%)",
                        }}
                        animate={{
                            opacity: [0.1, 0.3, 0.1],
                            scale: [1, 1.1, 1],
                        }}
                        transition={{
                            duration: 4,
                            delay: box.delay,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                ))}
            </div>

            {/* Diagonal lines */}
            <svg className="absolute inset-0 w-full h-full opacity-10">
                <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.2" />
                        <stop offset="50%" stopColor="#EC4899" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.2" />
                    </linearGradient>
                </defs>
                {Array.from({ length: 20 }).map((_, i) => (
                    <motion.line
                        key={i}
                        x1={i * 100}
                        y1="0"
                        x2={(i + 1) * 100}
                        y2="100%"
                        stroke="url(#lineGradient)"
                        strokeWidth="1"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 0.5 }}
                        transition={{
                            duration: 2,
                            delay: i * 0.1,
                            repeat: Infinity,
                            repeatType: "reverse",
                        }}
                    />
                ))}
            </svg>
        </div>
    );
}
