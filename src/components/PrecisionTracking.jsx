'use client';

import React from 'react';

export default function PrecisionTracking() {
    return (
        <section className="min-h-screen bg-gradient-to-b from-[#5B5D6E] via-[#4A4C5D] to-[#1a1a1a] flex items-center justify-center px-8 md:px-16 py-20">
            <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Left Content */}
                <div className="text-white space-y-8">
                    {/* Main Heading with Metallic Effect */}
                    <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-b from-[#FFB88C] via-[#FF9A66] to-[#E67A47] bg-clip-text text-transparent tracking-tight"
                        style={{
                            textShadow: '0 2px 10px rgba(255, 154, 102, 0.3)'
                        }}>
                        1 Million
                    </h2>

                    {/* Description */}
                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-xl font-medium">
                        Like having a thousand scouts watching every inch of the court. Over 1 million data points per game reveal insights invisible to the human eye.
                    </p>

                    {/* Divider */}
                    <div className="w-full max-w-xl h-px bg-gray-500"></div>

                    {/* Precision Tracking Section */}
                    <div className="space-y-6">
                        <h3 className="text-sm md:text-base font-semibold tracking-widest text-gray-400 uppercase">
                            Precision Tracking
                        </h3>

                        <ul className="space-y-3 text-gray-300">
                            <li className="flex items-start">
                                <span className="mr-3 text-[#FF9A66]">•</span>
                                <span>Frame-by-frame player movement tracking</span>
                            </li>
                            <li className="flex items-start">
                                <span className="mr-3 text-[#FF9A66]">•</span>
                                <span>Positioning, speed, and decision analytics</span>
                            </li>
                            <li className="flex items-start">
                                <span className="mr-3 text-[#FF9A66]">•</span>
                                <span>Insights invisible to traditional methods</span>
                            </li>
                            <li className="flex items-start">
                                <span className="mr-3 text-[#FF9A66]">•</span>
                                <span>Automated statistical breakdowns</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Right Image */}
                <div className="relative h-[500px] lg:h-[600px] rounded-lg overflow-hidden border border-gray-600/30">
                    <img
                        src="/images/image01.png"
                        alt="Precision Tracking Analytics"
                        className="w-full h-full object-cover"
                    />
                </div>

            </div>
        </section>
    );
}
