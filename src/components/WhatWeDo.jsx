import { motion } from "framer-motion";
import {
    LineChart,
    Sparkles,
    BookOpenCheck,
    BadgeCheck,
} from "lucide-react";

const services = [
    {
        title: "Talent Analytics",
        description: "Real‑time dashboards & insights for informed decisions.",
        icon: <LineChart className="w-6 h-6 text-[#7B61FF]" />,
    },
    {
        title: "Upskilling Programs",
        description: "Tailored learning paths to close skill gaps effectively.",
        icon: <Sparkles className="w-6 h-6 text-[#7B61FF]" />,
    },
    {
        title: "Career Planning",
        description: "Strategic, AI‑powered personal growth paths.",
        icon: <BookOpenCheck className="w-6 h-6 text-[#7B61FF]" />,
    },
    {
        title: "Skill Gap Analysis",
        description: "Identify, analyze and bridge skill shortages.",
        icon: <BadgeCheck className="w-6 h-6 text-[#7B61FF]" />,
    },
];

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
};

const OurOfferings = () => (
    <section
        className="bg-gradient-to-br from-white to-blue-50 py-16 px-6 md:px-12 lg:px-24 font-sans"
        id="services"
    >
        {/* Heading */}
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
        >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e1e2f]">
                What You Can Achieve
            </h2>
            <p className="text-gray-600 text-base md:text-lg mt-4 max-w-2xl mx-auto">
                Discover how our platform accelerates growth, bridges gaps, and guides
                your journey.
            </p>
        </motion.div>

        {/* Content */}
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
            {/* Left image */}
            <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full lg:w-1/2 flex justify-center"
            >
                <div className="border-4 border-[#D8EBFF] rounded-2xl p-2 shadow-lg bg-white/80 backdrop-blur-sm">
                    <img
                        src="/web-serv-2.jpg"
                        alt="Services Illustration"
                        className="w-full max-w-sm md:max-w-md lg:max-w-lg object-contain rounded-xl"
                    />
                </div>
            </motion.div>

            {/* Right cards */}
            <div className="w-full lg:w-1/2 space-y-5">
                {services.map((s, i) => (
                    <motion.div
                        key={i}
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={i}
                        className="flex items-start gap-4 bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-gray-200 shadow hover:shadow-md transition"
                    >
                        <div className="p-2 rounded-md bg-[#ede7fb]">{s.icon}</div>
                        <div>
                            <h4 className="font-semibold text-[#1e1e2f] text-base">
                                {s.title}
                            </h4>
                            <p className="text-sm text-gray-600">{s.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

export default OurOfferings;
