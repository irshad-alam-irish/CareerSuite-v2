import {
    Bot,
    Brain,
    ShieldCheck,
    BarChart4,
} from "lucide-react";
import { motion } from "framer-motion";

const features = [
    {
        title: "AI-Driven Career Insights",
        description:
            "Harnessing artificial intelligence to personalize and optimize every stage of career development.",
        icon: <Bot className="size-6 text-[#9E33DF]" />,
    },
    {
        title: "End-to-End Career Development",
        description:
            "From assessment to upskilling, we provide a seamless journey for continuous career growth.",
        icon: <Brain className="size-6 text-[#9E33DF]" />,
    },
    {
        title: "Zero HR/Admin Overhead",
        description:
            "We automate reporting, tracking, and planning—freeing up your HR team to focus on people, not paperwork.",
        icon: <ShieldCheck className="size-6 text-[#9E33DF]" />,
    },
    {
        title: "Skill-Based Guidance",
        description:
            "Data-backed recommendations on skills, learning paths, and growth opportunities tailored to each user.",
        icon: <BarChart4 className="size-6 text-[#9E33DF]" />,
    },
];

// Animation variants
const containerVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const WhatWeDo = () => {
    return (
        <section
            className="py-28 px-4 bg-gradient-to-br from-[#f9f9fb] via-[#e6f0ff] to-[#a7c7ff] font-sans"
        >
            <div className="max-w-6xl mx-auto p-10 rounded-3xl bg-white shadow-xl">
                <motion.h2
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center text-4xl md:text-4xl font-bold mb-16 text-black"
                >
                    What We Do?
                </motion.h2>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid gap-10 md:grid-cols-2"
                >
                    {features.map((feature, i) => (
                        <motion.div
                            key={i}
                            variants={cardVariants}
                            className="flex flex-col gap-4 border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition bg-white"
                        >
                            <div className="flex items-center gap-4">
                                {feature.icon}
                                <h3 className="text-xl font-semibold text-gray-900">
                                    {feature.title}
                                </h3>
                            </div>
                            <p className="text-base text-gray-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export { WhatWeDo };
