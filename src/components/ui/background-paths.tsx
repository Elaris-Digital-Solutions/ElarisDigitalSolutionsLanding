"use client";

import { motion } from "framer-motion";
import TypingConsole from "@/components/ui/typing-console";
import Hyperspeed, { hyperspeedPresets } from "@/components/ui/Hyperspeed";

export function BackgroundPaths({ title = "Background Paths" }: { title?: string }) {
    return (
        <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#050B22] text-white">
            <div className="pointer-events-none absolute inset-0">
                <Hyperspeed effectOptions={hyperspeedPresets.two} />
                <div className="absolute inset-0 bg-[#050B22]/80" />
            </div>

            <div className="relative z-10 flex w-full max-w-6xl flex-col items-center gap-8 px-6 py-20 text-center sm:px-10">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    className="flex flex-col items-center gap-6"
                >
                    <motion.span
                        initial={{ y: 18, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.15, type: "spring", stiffness: 120, damping: 20 }}
                        className="rounded-full border border-white/15 bg-white/5 px-5 py-2 text-sm font-medium uppercase tracking-[0.24em] text-white/70"
                    >
                        {title}
                    </motion.span>

                    <h1 className="text-[2.6rem] font-extrabold leading-[1.1] tracking-tight drop-shadow-lg sm:text-6xl md:text-[5rem]">
                        <motion.span
                            initial={{ y: 36, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.25, type: "spring", stiffness: 120, damping: 20 }}
                            className="inline-block text-slate-900"
                        >
                            Elaris
                        </motion.span>
                        <motion.span
                            initial={{ y: 36, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.4, type: "spring", stiffness: 120, damping: 20 }}
                            className="inline-block pl-3 text-[#2F64FF]"
                        >
                            Digital Solutions
                        </motion.span>
                    </h1>

                    <motion.p
                        initial={{ y: 28, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.55, duration: 0.6 }}
                        className="max-w-3xl text-lg text-white/70 sm:text-xl"
                    >
                        Equipos híbridos de diseño y tecnología que construyen productos de alto rendimiento para marcas ambiciosas.
                    </motion.p>

                    <motion.div
                        initial={{ y: 24, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.7, duration: 0.6 }}
                        className="w-full max-w-3xl rounded-3xl border border-white/12 bg-white/6 p-6 shadow-[0_32px_90px_rgba(5,11,34,0.55)] backdrop-blur-3xl"
                    >
                        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/70 px-5 py-3 text-xs font-semibold uppercase tracking-[0.32em] text-white/55">
                            <span>Realtime Console</span>
                            <span>Live Preview</span>
                        </div>

                        <div className="mt-6 rounded-2xl border border-white/10 bg-black/75 p-6">
                            <TypingConsole
                                phrases={[
                                    "Desarrollando soluciones de software",
                                    "Creando aplicaciones innovadoras",
                                    "Integrando IA en tu negocio",
                                    "Transformando ideas en realidad",
                                ]}
                                className="text-white"
                                cursorClassName="bg-white"
                            />
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}
