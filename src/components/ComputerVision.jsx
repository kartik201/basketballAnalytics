'use client';

import React from 'react';

export default function ComputerVision() {
    return (
        <section className="min-h-screen bg-gradient-to-b from-[#6B6D7E] via-[#4A4C5D] to-[#2a2a2a] flex items-center justify-center px-8 md:px-16 py-20">
            <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Left Content */}
                <div className="text-white space-y-8">
                    {/* Label */}
                    <div className="space-y-4">
                        <h3 className="text-sm md:text-base font-medium tracking-widest text-gray-400 uppercase">
                            Computer Vision
                        </h3>

                        {/* Divider */}
                        <div className="w-full max-w-xl h-px bg-gray-500"></div>
                    </div>

                    {/* Main Heading */}
                    <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
                        Track every movement.
                    </h2>

                    {/* Description */}
                    <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-xl font-medium">
                        Computer vision automatically tracks player positions, movements, and actions. Get detailed analytics on speed, distance, and positioning in real-time.
                    </p>
                </div>

                {/* Right Image */}
                <div className="relative h-[450px] lg:h-[550px] rounded-lg overflow-hidden border border-gray-700/30">
                    <img
                        src="/images/image03.png"
                        alt="Computer Vision Analytics"
                        className="w-full h-full object-cover"
                    />
                </div>

            </div>
        </section>
    );
}
