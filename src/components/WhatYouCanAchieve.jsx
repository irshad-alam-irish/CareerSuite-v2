import { motion } from "framer-motion";
import { Sparkles, LineChart, BadgeCheck, BookOpenCheck } from "lucide-react";

const benefits = [
    {
        title: "Accelerate Career Progress",
        description:
            "Match employees with mentors and curated learning paths to fast-track their career growth.",
        icon: <Sparkles className="w-6 h-6 text-[#7B61FF]" />,
    },
    {
        title: "Identify Future Leaders",
        description:
            "Discover and develop high-potential talent ready for leadership roles using data-backed insights.",
        icon: <LineChart className="w-6 h-6 text-[#7B61FF]" />,
    },
    {
        title: "Foster Peer-to-Peer Learning",
        description:
            "Enable internal knowledge exchange and team-wide upskilling through collaborative learning.",
        icon: <BookOpenCheck className="w-6 h-6 text-[#7B61FF]" />,
    },
    {
        title: "Boost Retention & Engagement",
        description:
            "Increase employee satisfaction with personalized growth journeys and skill-based opportunities.",
        icon: <BadgeCheck className="w-6 h-6 text-[#7B61FF]" />,
    },
    {
        title: "Streamline Workforce Planning",
        description:
            "Empower HR and managers with AI-driven talent analytics, career maps, and skill-gap reports.",
        icon: <LineChart className="w-6 h-6 text-[#7B61FF]" />,
    },
    {
        title: "Drive a High-Performance Culture",
        description:
            "Equip every team with the tools to grow, adapt, and lead in a constantly evolving world of work.",
        icon: <Sparkles className="w-6 h-6 text-[#7B61FF]" />,
    },
];

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.2, duration: 0.8, type: 'spring', stiffness: 80, damping: 12 },
    }),
};

export default function WhatYouCanAchieve() {
    return (
        <section className="relative py-20 px-4 sm:px-6 md:px-12 lg:px-24 font-sans overflow-hidden bg-gradient-to-br from-[#f9f9fb] via-[#e6f0ff] to-[#cce3ff]">
            {/* Decorative Background */}
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/wave-pattern.svg')] bg-cover opacity-10 pointer-events-none" />

            {/* SVG line connector */}
            <svg className="absolute z-0 top-[260px] left-1/2 transform -translate-x-1/2 hidden md:block" width="4" height="1400" viewBox="0 0 4 1400" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 0 V1400" stroke="#B9B9D8" strokeWidth="2" strokeDasharray="12 8" strokeLinecap="round" />
            </svg>

            <div className="relative z-10 max-w-4xl mx-auto text-center">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-4xl font-bold text-[#1e1e2f] mb-4"
                >
                    What You Can Achieve with CareerSuite
                </motion.h2>
                <p className="text-gray-600 text-base md:text-lg mt-2 max-w-2xl mx-auto">
                    Empower your teams. Reduce attrition. Scale leadership. Everything you need for a future-ready workforce—on one AI-powered platform.
                </p>
            </div>

            <div className="relative z-10 mt-24 max-w-5xl mx-auto flex flex-col gap-20 items-center">
                {benefits.map((benefit, index) => (
                    <motion.div
                        key={index}
                        variants={fadeUp}
                        animate={{ y: [0, -4, 4, 0] }}
                        transition={{ duration: 2, repeat: Infinity, repeatType: 'loop', delay: index * 0.1 }}
                        initial="hidden"
                        whileInView="visible" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                        viewport={{ once: true }}
                        custom={index}
                        className={`relative flex flex-col sm:flex-row items-center gap-6 bg-white/90 backdrop-blur-sm py-12 px-6 w-full max-w-sm rounded-xl border border-gray-200 shadow transition
              ${index % 3 === 0 ? 'self-start' : index % 3 === 1 ? 'self-end' : 'self-center'}`}
                    >
                        <div className="flex-shrink-0 p-3 bg-[#F0EFFF] rounded-full">
                            {benefit.icon}
                        </div>
                        <div className="text-center sm:text-left">
                            <h4 className="font-semibold text-[#1e1e2f] text-base mb-1">
                                {benefit.title}
                            </h4>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                {benefit.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
