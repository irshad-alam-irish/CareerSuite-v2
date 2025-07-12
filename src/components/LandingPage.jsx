import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { PlayCircle } from "lucide-react";
import { useState, useEffect } from "react";
import BookDemoForm from "./BookDemoForm";

const scenarios = [
    {
        id: 1,
        category: "AI Powered",
        title: "Career Path Recommender",
        description: "Get AI-driven career plans tailored to your skills, goals, and interests.",
        image: "/web-1.png"
    },
    {
        id: 2,
        category: "AI Powered",
        title: "Learning Progress Tracker",
        description: "Track your upskilling journey with intelligent insights and progress milestones.",
        image: "/web-2.png"
    },
    {
        id: 3,
        category: "AI Powered",
        title: "Smart Event Scheduler",
        description: "Manage mentoring sessions, interviews, and learning events with an integrated calendar.",
        image: "/web-3.png"
    }
];

const transition = { duration: 0.8, ease: "easeInOut" };

export default function LandingPage() {
    const [currentScenario, setCurrentScenario] = useState(0);
    const [open, setOpen] = useState(false); // 🟡 control the dialog

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentScenario((prev) => (prev + 1) % scenarios.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const current = scenarios[currentScenario];

    return (
        <section
            className="min-h-[calc(100vh-72px)] w-full flex items-center justify-center px-6 py-16"
            style={{
                background: "linear-gradient(135deg, #ffffff 0%, #e3f0ff 40%, #d0e7ff 100%)",
                fontFamily: "Inter, sans-serif"
            }}
        >
            <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 items-center gap-12">
                {/* LEFT */}
                <div className="space-y-6">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={transition}
                        className="inline-block text-sm font-medium text-[#3b82f6] bg-white px-3 py-1 rounded-full shadow border"
                    >
                        AI Powered
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, ...transition }}
                        className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight"
                    >
                        Empowering Talent <br />
                        for the <span className="text-[#9333ea]">Future</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, ...transition }}
                        className="text-base md:text-lg text-gray-600 max-w-xl"
                    >
                        Unlock personalized career journeys with <span className="text-[#2563eb] font-semibold">AI-powered insights</span>, skills analysis, and real-time dashboards.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, ...transition }}
                        className="flex items-center gap-4"
                    >
                        <Button
                            onClick={() => setOpen(true)}
                            className="bg-[#1F1F2F] text-white hover:bg-[#2F2F3F]"
                        >
                            Book Demo
                        </Button>

                        <Button variant="ghost" className="text-[#1f1f2f] hover:underline flex items-center gap-2">
                            <PlayCircle className="w-5 h-5" />
                            Watch Demo
                        </Button>
                    </motion.div>
                </div>

                {/* RIGHT */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8, ...transition }}
                    className="w-full h-[500px] bg-gradient-to-br from-[#ebf5fa] via-[#e3f0ff] to-[#ffffff] rounded-xl shadow-inner relative overflow-hidden"
                >
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentScenario}
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={transition}
                            className="absolute inset-2 flex flex-col items-center justify-center text-center"
                        >
                            <motion.h3
                                className="text-xl font-bold text-gray-800 mb-3"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, ...transition }}
                            >
                                {current.title}
                            </motion.h3>

                            <motion.div
                                className="flex items-center justify-center w-full mb-2"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.4, ...transition }}
                                whileHover={{ scale: 1.02 }}
                            >
                                <img
                                    src={current.image}
                                    alt={current.title}
                                    className="w-full h-auto object-contain"
                                />
                            </motion.div>

                            <motion.p
                                className="text-gray-600 text-sm max-w-sm leading-relaxed"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6, ...transition }}
                            >
                                {current.description}
                            </motion.p>
                        </motion.div>
                    </AnimatePresence>

                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                        {scenarios.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrentScenario(i)}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${i === currentScenario ? 'bg-blue-500' : 'bg-gray-300'}`}
                            />
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* ✅ MODAL */}
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent className="max-w-xl p-0 rounded-2xl overflow-hidden">
                    <BookDemoForm open={open} onOpenChange={setOpen} showTrigger={false} />
                </DialogContent>
            </Dialog>
        </section>
    );
}
