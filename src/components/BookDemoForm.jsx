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

const videos = [
    {
        id: 1,
        title: "Career Recommender",
        poster: "/web-1.png",
        src: "/demo1.mp4"
    },
    {
        id: 2,
        title: "Learning Tracker",
        poster: "/web-2.png",
        src: "/demo2.mp4"
    },
    {
        id: 3,
        title: "Smart Scheduler",
        poster: "/web-3.png",
        src: "/demo3.mp4"
    }
];

const transition = { duration: 0.6, ease: "easeInOut" };

export default function LandingPage() {
    const [currentScenario, setCurrentScenario] = useState(0);
    const [open, setOpen] = useState(false);
    const [activeVideo, setActiveVideo] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveVideo((prev) => (prev % videos.length) + 1);
        }, 6000);
        return () => clearInterval(interval);
    }, []);

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
                background: "radial-gradient(circle at top left, #e0f2fe, #e0e7ff, #f5f3ff)",
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
                        className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight"
                    >
                        Elevate Your <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563eb] to-[#9333ea]">
                            Professional Journey
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, ...transition }}
                        className="text-base md:text-lg text-gray-600 font-medium max-w-xl"
                    >
                        Connect with opportunities, showcase your skills, and take the next step
                        in your career with <span className="text-[#2563eb] font-semibold">CareerSuite's</span> comprehensive platform.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, ...transition }}
                        className="flex items-center gap-4"
                    >
                        <Button
                            onClick={() => setOpen(true)}
                            className="bg-gradient-to-r from-[#2563eb] to-[#9333ea] text-white px-6 py-2 rounded-md hover:opacity-90"
                        >
                            Book Demo
                        </Button>

                        <Button
                            variant="ghost"
                            className="text-[#1f1f2f] hover:underline flex items-center gap-2"
                        >
                            <PlayCircle className="w-5 h-5" />
                            Watch Demo
                        </Button>
                    </motion.div>
                </div>

                {/* RIGHT: Slide + Fade Smooth Auto-Switching Video Cards */}
                <div className="flex gap-4 justify-center items-start">
                    {videos.map((video) => (
                        <motion.div
                            key={video.id}
                            layout
                            transition={transition}
                            onClick={() => setActiveVideo(video.id)}
                            className={`relative cursor-pointer overflow-hidden rounded-2xl shadow-md bg-white border ${activeVideo === video.id ? "w-64 h-80" : "w-24 h-40"
                                } transition-all duration-700 ease-in-out`}
                        >
                            <AnimatePresence mode="wait">
                                {activeVideo === video.id ? (
                                    <motion.video
                                        key={`video-${video.id}`}
                                        src={video.src}
                                        controls
                                        autoPlay
                                        muted
                                        className="w-full h-full object-cover"
                                        initial={{ opacity: 0, x: 50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -50 }}
                                        transition={{ duration: 0.5 }}
                                    />
                                ) : (
                                    <motion.img
                                        key={`poster-${video.id}`}
                                        src={video.poster}
                                        alt={video.title}
                                        className="w-full h-full object-cover"
                                        initial={{ opacity: 0, x: 50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -50 }}
                                        transition={{ duration: 0.4 }}
                                    />
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* MODAL */}
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent className="max-w-md bg-white rounded-2xl shadow-lg p-6">
                    <BookDemoForm open={open} onOpenChange={setOpen} showTrigger={false} />
                </DialogContent>
            </Dialog>
        </section>
    );
}
