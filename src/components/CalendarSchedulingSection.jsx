import { motion } from "framer-motion";

export default function CalendarSchedulingSection() {
    return (
        <section className="bg-[#fcfcff] py-20 px-6 md:px-12 lg:px-24 font-sans">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
                {/* Left Image Placeholder */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="w-full lg:w-1/2 flex justify-center"
                >
                    <div className="bg-[#f3f4fa] w-full max-w-md h-72 rounded-2xl shadow-inner flex items-center justify-center border border-dashed border-[#cccccc]">
                        <span className="text-gray-500 font-medium">Calendar Integration Preview</span>
                    </div>
                </motion.div>

                {/* Right Content */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="w-full lg:w-1/2"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-[#1e1e2f] mb-4">
                        Schedule your growth with our smart calendar
                    </h2>
                    <p className="text-gray-600 text-base md:text-lg mb-6">
                        Plan and manage 1:1 mentoring, group sessions, and career checkpoints effortlessly.
                        Our integrated calendar makes it easy for employees, mentors, and managers to stay aligned and engaged.
                    </p>
                    <a
                        href="#"
                        className="inline-block text-[#7B61FF] font-medium text-sm md:text-base hover:underline"
                    >
                        Explore scheduling tools →
                    </a>
                    <p className="text-sm text-gray-500 mt-4">
                        Designed for seamless coordination across teams
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
