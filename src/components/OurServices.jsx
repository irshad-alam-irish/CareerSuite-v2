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
        description: "Real-time dashboards & insights for informed decisions.",
        icon: <LineChart className="w-5 h-5 text-[#7B61FF]" />,
    },
    {
        title: "Upskilling Programs",
        description: "Tailored learning paths to close skill gaps effectively.",
        icon: <Sparkles className="w-5 h-5 text-[#7B61FF]" />,
    },
    {
        title: "Career Planning",
        description: "Strategic, AI-powered personal growth paths.",
        icon: <BookOpenCheck className="w-5 h-5 text-[#7B61FF]" />,
    },
    {
        title: "Skill Gap Analysis",
        description: "Identify, analyze and bridge skill shortages.",
        icon: <BadgeCheck className="w-5 h-5 text-[#7B61FF]" />,
    },
];

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.15,
            duration: 0.6,
            ease: "easeOut",
        },
    }),
};

export const OurServices = () => {
    return (
        <section
            className="min-h-screen w-full bg-gradient-to-br from-white to-blue-50 px-6 md:px-12 lg:px-24 py-12 font-sans flex flex-col justify-center"
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
                    Our Services
                </h2>
                <p className="text-gray-600 text-base md:text-lg mt-4 max-w-2xl mx-auto">
                    Discover how we empower organizations through intelligent, AI-powered solutions.
                </p>
            </motion.div>

            {/* Grid: Image Left + Content Right */}
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
                {/* Image */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
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


                {/* Services */}
                <div className="w-full lg:w-1/2">
                    <div className="space-y-5">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                custom={index}
                                className="flex items-start gap-4 bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-gray-200 shadow hover:shadow-md transition"
                            >
                                <div className="p-2 rounded-md bg-[#ede7fb]">
                                    {service.icon}
                                </div>
                                <div>
                                    <h4 className="font-semibold text-[#1e1e2f] text-sm md:text-base">
                                        {service.title}
                                    </h4>
                                    <p className="text-sm text-gray-600">
                                        {service.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
