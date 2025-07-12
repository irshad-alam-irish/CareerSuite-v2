import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle } from "lucide-react";
import {
    Dialog,
    DialogTrigger,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function BookDemoForm({
    triggerText = "Book Demo",
    open,
    onOpenChange = () => { },
    showTrigger = true,
}) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
        agreed: false,
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        console.log("Form Submitted:", formData);
    };

    useEffect(() => {
        if (submitted) {
            const timeout = setTimeout(() => {
                setSubmitted(false);
                onOpenChange(false);
            }, 1000);
            return () => clearTimeout(timeout);
        }
    }, [submitted, onOpenChange]);

    useEffect(() => {
        if (!open) {
            setFormData({
                name: "",
                email: "",
                message: "",
                agreed: false,
            });
            setSubmitted(false);
        }
    }, [open]);

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            {showTrigger && (
                <DialogTrigger asChild>
                    <Button className="bg-[#1F1F2F] text-white hover:bg-[#2F2F3F]">
                        {triggerText}
                    </Button>
                </DialogTrigger>
            )}

            <AnimatePresence mode="wait">
                {open && (
                    <motion.div
                        key="content"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                        className="p-6 sm:p-10 bg-white rounded-2xl w-full"
                    >
                        <DialogHeader>
                            <DialogTitle className="text-2xl font-bold text-[#1e1e2f]">
                                {submitted ? "Success!" : "We're thrilled to connect!"}
                            </DialogTitle>
                            <DialogDescription className="text-gray-600 text-sm mt-1">
                                {submitted
                                    ? "Thank you for booking a demo with CareerSuite. We'll be in touch soon!"
                                    : "Let’s take the first step toward smarter career growth."}
                            </DialogDescription>
                        </DialogHeader>

                        {!submitted ? (
                            <form onSubmit={handleSubmit} className="space-y-5 mt-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <input
                                        name="name"
                                        type="text"
                                        placeholder="Your Name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563eb]"
                                    />
                                    <input
                                        name="email"
                                        type="email"
                                        placeholder="Your Email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563eb]"
                                    />
                                </div>
                                <textarea
                                    name="message"
                                    rows="4"
                                    placeholder="Leave your message here..."
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-[#2563eb]"
                                />
                                <div className="flex items-start gap-2 text-sm text-gray-600">
                                    <input
                                        type="checkbox"
                                        id="terms"
                                        name="agreed"
                                        required
                                        checked={formData.agreed}
                                        onChange={handleChange}
                                        className="mt-1"
                                    />
                                    <label htmlFor="terms">
                                        I agree to the{" "}
                                        <a
                                            href="#"
                                            className="underline text-[#2563eb] hover:text-[#1e40af]"
                                        >
                                            terms and conditions
                                        </a>
                                    </label>
                                </div>
                                <Button
                                    type="submit"
                                    className="w-full bg-[#1F1F2F] hover:bg-[#2F2F3F] text-white text-sm font-semibold py-2 px-4 rounded-lg"
                                >
                                    Submit
                                </Button>
                            </form>
                        ) : (
                            <div className="flex flex-col items-center justify-center py-10">
                                <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                                <p className="text-lg font-medium text-gray-700">
                                    We’ll be in touch shortly!
                                </p>
                            </div>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </Dialog>
    );
}
