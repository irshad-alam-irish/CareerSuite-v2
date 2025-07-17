import { motion } from "framer-motion";

export default function GrowthCommunitySection() {
    return (
        <section className="bg-[#f9fafe] py-20 px-6 md:px-12 lg:px-24 font-sans">
            <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="w-full lg:w-1/2"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-[#1e1e2f] mb-4">
                        Enable growth with career checkpoints
                    </h2>
                    <p className="text-gray-600 text-base md:text-lg mb-6">
                        Provide purpose and direction to high-potential employees with measurable growth checkpoints.
                        Use AI-driven analytics to design timely interventions and promote continual upskilling across teams.
                    </p>
                    <a
                        href="#"
                        className="inline-block text-[#7B61FF] font-medium text-sm md:text-base hover:underline"
                    >
                        Explore AI-powered planning →
                    </a>
                    <p className="text-sm text-gray-500 mt-4">
                        Trusted by future-ready teams worldwide
                    </p>
                </motion.div>

                {/* Right Image Placeholder */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="w-full lg:w-1/2 flex justify-center"
                >
                    <div className="bg-[#eef1fb] w-full max-w-md h-80 rounded-2xl shadow-inner flex items-center justify-center border border-dashed border-[#cccccc]">
                        <span className="text-gray-500 font-medium">AI Career Analytics & Progress</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
