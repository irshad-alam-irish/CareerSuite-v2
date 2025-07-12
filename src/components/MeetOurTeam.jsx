import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

const teamMembers = [
    {
        name: "Parmod Ghatwal",
        role: "Founder, Director",
        location: "Australia",
        image: "/web-team-1.jpg",
        linkedin: "https://linkedin.com/in/parmodghatwal",
    },
    {
        name: "Ashwini Singh",
        role: "Co-Founder, CTO",
        location: "U.S.A",
        image: "/dev-team-2.jpg",
        linkedin: "https://linkedin.com/in/ashwinisingh",
    },
    {
        name: "Shriyash Shende",
        role: "Chief Engineer",
        location: "Australia",
        image: "/dev-ash.jpg",
        linkedin: "https://linkedin.com/in/shriyashshende",
    },
    {
        name: "Core Development Team",
        role: "Lead Developers (3)",
        location: "India",
        image: "/team/dev-team.jpg",
        extraNames: ["Amit Kumar", "Priya Mehta", "Irshad Alam"],
    },
];

export default function MeetOurTeam() {
    return (
        <section
            className="py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-white to-[#D8EBFF]"
            id="team"
        >
            <div className="max-w-7xl mx-auto text-center">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-4xl font-bold text-[#1e1e2f] mb-4"
                >
                    Meet Our Team
                </motion.h2>
                <p className="text-gray-600 max-w-xl mx-auto mb-12">
                    A passionate group of leaders, engineers, and visionaries shaping the future of workforce intelligence.
                </p>

                {/* Cards Grid */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {teamMembers.map((member, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: idx * 0.1 }}
                            className="bg-white border border-[#D8EBFF] rounded-xl p-6 shadow-md hover:shadow-lg transition"
                        >
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-24 h-24 mx-auto rounded-full object-cover mb-4 border-4 border-[#D8EBFF]"
                            />
                            <h3 className="text-lg font-semibold text-[#1e1e2f] text-center">
                                {member.name}
                            </h3>
                            <p className="text-sm text-gray-600 text-center">{member.role}</p>
                            <p className="text-xs text-gray-400 text-center mb-2">{member.location}</p>

                            {/* Extra names if any */}
                            {/* {member.extraNames && (
                                <ul className="mt-3 text-xs text-gray-600 space-y-1 text-left">
                                    {member.extraNames.map((name, i) => (
                                        <li key={i}>• {name}</li>
                                    ))}
                                </ul>
                            )} */}

                            {/* LinkedIn link shown only if not 4th card */}
                            {!member.extraNames && member.linkedin && (
                                <div className="text-center mt-3">
                                    <a
                                        href={member.linkedin}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center gap-1 text-sm text-[#7B61FF] hover:text-[#5e47cc] transition"
                                    >
                                        <Linkedin className="w-4 h-4" />
                                        LinkedIn
                                    </a>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
