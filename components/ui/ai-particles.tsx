"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function AIParticles() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const particles = Array.from({ length: 30 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
    }));

    return (
        <div className="fixed inset-0 pointer-events-none opacity-30" style={{ zIndex: 0 }}>
            <svg width="100%" height="100%" className="absolute inset-0">
                {particles.map((particle) => (
                    <motion.circle
                        key={particle.id}
                        cx={`${particle.x}%`}
                        cy={`${particle.y}%`}
                        r={particle.size}
                        fill="rgba(139, 92, 246, 0.6)"
                        animate={{
                            cx: [`${particle.x}%`, `${(particle.x + 10) % 100}%`, `${particle.x}%`],
                            cy: [`${particle.y}%`, `${(particle.y + 10) % 100}%`, `${particle.y}%`],
                        }}
                        transition={{
                            duration: 10 + particle.id,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    />
                ))}
            </svg>
        </div>
    );
}
