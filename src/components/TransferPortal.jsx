'use client';

import React from 'react';

export default function TransferPortal() {
    return (
        <section className="min-h-screen bg-gradient-to-b from-[#6B6D7E] via-[#5A5C6D] to-[#2a2a2a] flex items-center justify-center px-8 md:px-16 py-20">
            <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Left Image */}
                <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden border border-gray-600/20">
                    <img
                        src="/images/image02.png"
                        alt="Transfer Portal Platform"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Right Content */}
                <div className="text-white space-y-8">
                    {/* Label */}
                    <div className="space-y-4">
                        <h3 className="text-sm md:text-base font-medium tracking-widest text-gray-400 uppercase">
                            Transfer Portal Platform
                        </h3>

                        {/* Divider */}
                        <div className="w-full h-px bg-gray-500"></div>
                    </div>

                    {/* Main Heading */}
                    <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
                        Connect with top talent.
                    </h2>

                    {/* Description */}
                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-medium">
                        Access a comprehensive database of basketball players. Search by position, stats, and school to find the perfect fit for your team.
                    </p>
                </div>

            </div>
        </section>
    );
}
