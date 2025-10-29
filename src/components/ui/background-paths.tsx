"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import React, { useState, useEffect, useRef } from 'react';

// Componente de Consola de Tipeo
const TypingConsole: React.FC = () => {
    const [displayText, setDisplayText] = useState('');
    const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const typingRef = useRef<{ interval: NodeJS.Timeout | null }>({ interval: null });

    const phrases = [
        'Desarrollando soluciones de software',
        'Creando aplicaciones innovadoras',
        'Integrando IA en tu negocio',
        'Transformando ideas en realidad'
    ];

    useEffect(() => {
        if (typingRef.current.interval) clearInterval(typingRef.current.interval);
        typingRef.current.interval = setInterval(() => {
            setDisplayText(prev => {
                const currentPhrase = phrases[currentPhraseIndex];
                if (!isDeleting && prev === currentPhrase) {
                    setTimeout(() => setIsDeleting(true), 1000);
                    clearInterval(typingRef.current.interval!);
                    return prev;
                } else if (isDeleting && prev === '') {
                    setIsDeleting(false);
                    setCurrentPhraseIndex((prevIdx) => (prevIdx + 1) % phrases.length);
                    clearInterval(typingRef.current.interval!);
                    return '';
                } else {
                    return isDeleting
                        ? prev.slice(0, -1)
                        : currentPhrase.slice(0, prev.length + 1);
                }
            });
        }, isDeleting ? 40 : 60);
        return () => {
            if (typingRef.current.interval) clearInterval(typingRef.current.interval);
        };
    }, [currentPhraseIndex, isDeleting]);

    return (
        <div className="px-3 sm:px-4 py-3 font-mono text-sm sm:text-[15px] text-gray-800">
            <div className="flex items-center min-h-[24px]">
                <span className="text-gray-400 mr-2 flex-shrink-0">$</span>
                <span className="break-words overflow-hidden">{displayText}</span>
                <span className="w-2.5 h-4 bg-gray-800 ml-0.5 inline-block animate-pulse flex-shrink-0"/>
            </div>
        </div>
    );
};

function FloatingPaths({ position }: { position: number }) {
    const paths = Array.from({ length: 36 }, (_, i) => ({
        id: i,
        d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
            380 - i * 5 * position
        } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
            152 - i * 5 * position
        } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
            684 - i * 5 * position
        } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
        width: 0.5 + i * 0.03,
    }));

    return (
        <div className="absolute inset-0 pointer-events-none">
            <svg
                className="w-full h-full"
                style={{ color: '#2F64FF' }}
                viewBox="0 0 696 316"
                fill="none"
            >
                <title>Background Paths</title>
                {paths.map((path) => (
                    <motion.path
                        key={path.id}
                        d={path.d}
                        stroke="currentColor"
                        strokeWidth={path.width}
                        strokeOpacity={0.2 + path.id * 0.03}
                        initial={{ pathLength: 0.3, opacity: 0.8 }}
                        animate={{
                            pathLength: 1,
                            opacity: [0.4, 0.8, 0.4],
                            pathOffset: [0, 1, 0],
                        }}
                        transition={{
                            duration: 20 + Math.random() * 10,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                        }}
                    />
                ))}
            </svg>
        </div>
    );
}

export function BackgroundPaths({
    title = "Background Paths",
}: {
    title?: string;
}) {
    return (
        <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#030E2C]">
            <div className="absolute inset-0">
                <FloatingPaths position={1} />
                <FloatingPaths position={-1} />
            </div>

            <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    className="max-w-4xl mx-auto"
                >
                    <h1 className="text-6xl sm:text-7xl md:text-[5.5rem] font-bold tracking-tight">
                        <motion.span
                            initial={{ y: 40, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{
                                delay: 0.2,
                                type: "spring",
                                stiffness: 120,
                                damping: 20,
                            }}
                            className="inline-block text-white mr-5"
                        >
                            Elaris
                        </motion.span>
                        <motion.span
                            initial={{ y: 40, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{
                                delay: 0.4,
                                type: "spring",
                                stiffness: 120,
                                damping: 20,
                            }}
                            className="inline-block"
                            style={{ color: '#2F64FF' }}
                        >
                            Digital Solutions
                        </motion.span>
                    </h1>

                    <div className="inline-block mt-12 px-4 w-full max-w-md sm:max-w-lg md:max-w-xl">
                        <motion.div 
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="w-full bg-white rounded-lg shadow-[0_8px_32px_rgba(47,100,255,0.1)] overflow-hidden"
                        >
                            {/* Window Controls */}
                            <div className="flex items-center gap-2 px-3 py-2 bg-gray-50/80 border-b border-gray-100">
                                <div className="w-2.5 h-2.5 rounded-full bg-red-400 shadow-sm"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400 shadow-sm"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-green-400 shadow-sm"></div>
                            </div>
                            
                            {/* Terminal Content */}
                            <TypingConsole />
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
