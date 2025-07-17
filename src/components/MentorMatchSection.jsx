import { motion } from "framer-motion";

export default function MentorMatchSection() {
    return (
        <section className="bg-white py-20 px-6 md:px-12 lg:px-24 font-sans">
            <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="w-full lg:w-1/2"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-[#1e1e2f] mb-4">
                        Let your employees learn from your experts
                    </h2>
                    <p className="text-gray-600 text-base md:text-lg mb-6">
                        Cultivate tomorrow’s leaders by connecting your internal talent with experienced mentors.
                        CareerSuite intelligently pairs mentees and mentors based on values, goals, and growth trajectories.
                    </p>
                    <a
                        href="#"
                        className="inline-block text-[#7B61FF] font-medium text-sm md:text-base hover:underline"
                    >
                        Discover mentoring intelligence →
                    </a>
                    <p className="text-sm text-gray-500 mt-4">
                        Built for teams who value continuous learning and growth
                    </p>
                </motion.div>

                {/* Right Image Placeholder */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="w-full lg:w-1/2 flex justify-center"
                >
                    <div className="bg-[#f0f0f5] w-full max-w-md h-72 rounded-2xl shadow-inner flex items-center justify-center border border-dashed border-[#cccccc]">
                        <span className="text-gray-500 font-medium">Mentor-Mentee Matching Preview</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
