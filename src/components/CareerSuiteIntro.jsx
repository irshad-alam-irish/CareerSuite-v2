import React from "react";

const CareerSuiteIntro = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-[#e0f2fe] via-[#dbeafe] to-[#ede9fe] flex items-center justify-center p-8 relative overflow-hidden">
            {/* Decorative dots pattern - top right */}
            <div className="absolute top-0 right-0 w-64 h-64 opacity-20">
                <div className="grid grid-cols-8 gap-2 p-8">
                    {Array.from({ length: 64 }).map((_, i) => (
                        <div
                            key={i}
                            className="w-2 h-2 rounded-full bg-blue-300"
                        ></div>
                    ))}
                </div>
            </div>

            <div className="max-w-5xl mx-auto text-center">
                {/* Main heading */}
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-normal leading-tight mb-8 bg-gradient-to-b from-cyan-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                    We help you deeply understand your workforce and their work,
                    powering a talent system that drives performance. With evolving
                    intelligence at its core, our AI platform enables you to hire smarter,
                    retain knowledge, grow skills, and adapt with agility in a world of
                    constant change.
                </h1>

                {/* Subtitle */}
                <p className="text-xl md:text-2xl bg-gradient-to-r from-blue-500 to-[#3558FC] bg-clip-text text-transparent font-light mt-8">
                    <span className="text-blue-600 font-medium">CareerSuite.ai</span> – Your intelligent partner in workforce transformation
                </p>

                {/* CTA Button */}
                <div className="mt-12">
                    <button className="bg-[#1F1F2F] hover:bg-[#2F2F3F] text-white px-10 py-4 rounded-full text-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg">
                        Transform Your Workforce Today
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CareerSuiteIntro;
