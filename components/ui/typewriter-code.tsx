"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const codeSnippets = [
    'const developer = "Taha Kotwal";',
    'import { FastAPI } from "python";',
    'async function buildAI() { ... }',
    'SELECT * FROM innovation;',
    'git commit -m "Ship it!"',
    'npm run deploy --production',
];

export function TypewriterCode() {
    const [currentSnippet, setCurrentSnippet] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const snippet = codeSnippets[currentSnippet];
        const timeout = setTimeout(
            () => {
                if (!isDeleting) {
                    if (displayText.length < snippet.length) {
                        setDisplayText(snippet.slice(0, displayText.length + 1));
                    } else {
                        setTimeout(() => setIsDeleting(true), 2000);
                    }
                } else {
                    if (displayText.length > 0) {
                        setDisplayText(displayText.slice(0, -1));
                    } else {
                        setIsDeleting(false);
                        setCurrentSnippet((prev) => (prev + 1) % codeSnippets.length);
                    }
                }
            },
            isDeleting ? 50 : 100
        );

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, currentSnippet]);

    return (
        <div className="font-mono text-sm text-primary">
            <span className="text-muted-foreground">$ </span>
            {displayText}
            <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity }}
                className="inline-block w-2 h-4 ml-1 bg-primary"
            />
        </div>
    );
}
