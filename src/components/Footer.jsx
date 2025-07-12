import { motion } from "framer-motion";
import {
    Linkedin,
    Github,
    Twitter,
    Mail,
    Target,
    BookOpen,
    LineChart,
    Hammer
} from "lucide-react";

export default function Footer() {
    return (
        <motion.footer
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-900 text-gray-200 pt-14 pb-8 px-6 md:px-20"
        >
            {/* DESKTOP VIEW */}
            <div className="hidden md:grid max-w-7xl mx-auto grid-cols-4 gap-10">
                {/* Branding */}
                <div>
                    <h2 className="text-2xl font-bold text-white mb-2">CareerSuite</h2>
                    <p className="text-sm text-gray-400">
                        Helping individuals and organizations unlock their full potential through guided upskilling, career mapping, and actionable insights.
                    </p>
                </div>

                {/* Platform Highlights */}
                <div>
                    <h3 className="font-semibold text-white mb-3">What We Offer</h3>
                    <ul className="text-sm space-y-2 text-gray-400">
                        <li className="flex items-center gap-2">
                            <Target className="w-4 h-4" />
                            Personalized Career Pathing
                        </li>
                        <li className="flex items-center gap-2">
                            <BookOpen className="w-4 h-4" />
                            Skill Gap Analysis
                        </li>
                        <li className="flex items-center gap-2">
                            <LineChart className="w-4 h-4" />
                            Progress Analytics
                        </li>
                        <li className="flex items-center gap-2">
                            <Hammer className="w-4 h-4" />
                            Role-Based Learning
                        </li>
                    </ul>
                </div>

                {/* Resources */}
                <div>
                    <h3 className="font-semibold text-white mb-3">Resources</h3>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li><a href="#courses" className="hover:text-white">Explore Courses</a></li>
                        <li><a href="#blog" className="hover:text-white">Read our Blog</a></li>
                        <li><a href="#guides" className="hover:text-white">Career Guides</a></li>
                        <li><a href="#faq" className="hover:text-white">FAQs</a></li>
                    </ul>
                </div>

                {/* Contact & Social */}
                <div>
                    <h3 className="font-semibold text-white mb-3">Connect with Us</h3>
                    <p className="text-sm text-gray-400 mb-2">Email: support@careersuite.ai</p>
                    <p className="text-sm text-gray-400 mb-4">Phone: +91 98765 43210</p>

                    <div className="flex space-x-4 text-xl">
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white">
                            <Linkedin className="w-5 h-5" />
                        </a>
                        <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white">
                            <Github className="w-5 h-5" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-white">
                            <Twitter className="w-5 h-5" />
                        </a>
                        <a href="mailto:support@careersuite.com" className="hover:text-white">
                            <Mail className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>

            {/* MOBILE VIEW */}
            <div className="md:hidden flex flex-col items-center space-y-3">
                <div className="text-sm text-gray-400">support@careersuite.ai</div>
                <div className="flex justify-center gap-6 text-xl">
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white">
                        <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white">
                        <Github className="w-5 h-5" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-white">
                        <Twitter className="w-5 h-5" />
                    </a>
                    <a href="mailto:support@careersuite.com" className="hover:text-white">
                        <Mail className="w-5 h-5" />
                    </a>
                </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
                &copy; {new Date().getFullYear()} CareerSuite. All rights reserved.
            </div>
        </motion.footer>
    );
}
