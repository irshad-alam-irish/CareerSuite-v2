import { Mail } from "lucide-react";

export default function ContactUs() {
    return (
        <section className="bg-[#F4F8FA] text-[#1e1e2f] py-24 px-6 md:px-0 font-sans">
            <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-md p-8 md:p-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                {/* LEFT SIDE */}
                <div className="space-y-6">
                    <h2 className="text-3xl md:text-5xl font-bold">
                        Ready to start a conversation?
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Whether it’s a project, integration, or partnership — we’re here to listen and help you grow.
                    </p>

                    <button className="inline-flex items-center gap-2 bg-[#1e1e2f] text-white font-medium py-2 px-5 rounded-xl shadow hover:bg-[#2e2e3f] transition">
                        <Mail className="h-5 w-5" />
                        Contact Us
                    </button>

                    <p className="text-gray-600 text-sm">
                        Or reach out directly at{" "}
                        <span className="text-[#1e1e2f] font-semibold">support@careersuite.ai</span>
                    </p>
                </div>

                {/* RIGHT SIDE - FORM */}
                <form className="space-y-6 w-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9c4eff]"
                            required
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9c4eff]"
                            required
                        />
                    </div>

                    <textarea
                        rows={5}
                        placeholder="Your Message"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-[#9c4eff]"
                        required
                    ></textarea>

                    <div className="flex items-start gap-2 text-sm text-gray-600">
                        <input type="checkbox" id="terms" required className="mt-1" />
                        <label htmlFor="terms">
                            I agree to the{" "}
                            <a href="#" className="underline text-[#9c4eff] hover:text-[#7b2cbf]">
                                terms and conditions
                            </a>
                        </label>
                    </div>

                    <button
                        type="submit"
                        className="w-full md:w-auto bg-[#1e1e2f] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#2e2e3f] transition"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </section>
    );
}
