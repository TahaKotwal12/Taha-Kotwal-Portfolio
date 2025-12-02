"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const techIcons = [
    { name: "FastAPI", symbol: "⚡" },
    { name: "React", symbol: "⚛️" },
    { name: "Python", symbol: "🐍" },
    { name: "TypeScript", symbol: "📘" },
    { name: "AI/ML", symbol: "🤖" },
    { name: "Docker", symbol: "🐳" },
];

export function FloatingTechIcons() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {techIcons.map((tech, index) => (
                <motion.div
                    key={tech.name}
                    className="absolute text-4xl opacity-10 dark:opacity-20"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                        x: [0, Math.random() * 100 - 50, 0],
                        y: [0, Math.random() * 100 - 50, 0],
                        rotate: [0, 360],
                    }}
                    transition={{
                        duration: 20 + index * 5,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                >
                    {tech.symbol}
                </motion.div>
            ))}
        </div>
    );
}
