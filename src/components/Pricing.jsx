'use client';

import React from 'react';

export default function Pricing() {
    return (
        <section className="bg-gradient-to-b from-[#5A5C6D] via-[#4A4C5D] to-[#3a3a3a] px-8 md:px-16 py-16">
            <div className="max-w-7xl mx-auto">
                {/* Section Title */}
                <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 tracking-tight">
                    Pricing & Plans
                </h2>
                <p className="text-white/70 text-lg md:text-xl mb-12 max-w-2xl">
                    Choose the perfect plan for your basketball analytics needs
                </p>

                {/* Pricing Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                    {/* College Portal Card */}
                    <div className="bg-black/60 border border-gray-700/40 rounded-lg p-6 flex flex-col justify-between min-h-[480px]">
                        <div>
                            <p className="text-xs uppercase tracking-wider text-gray-400 mb-4">College Portal</p>
                            <div className="mb-4">
                                <span className="text-4xl font-bold text-white">$29.99</span>
                                <span className="text-gray-400 text-lg">/month</span>
                            </div>
                            <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                                Get access to rankings and over 40 customizable metrics on every college player over the last 10 years
                            </p>
                            <ul className="space-y-3 mb-6">
                                <li className="flex items-start text-gray-300 text-sm">
                                    <span className="mr-3 mt-1">✓</span>
                                    <span>Customizable Stats</span>
                                </li>
                                <li className="flex items-start text-gray-300 text-sm">
                                    <span className="mr-3 mt-1">✓</span>
                                    <span>Current and All-Time Rankings</span>
                                </li>
                                <li className="flex items-start text-gray-300 text-sm">
                                    <span className="mr-3 mt-1">✓</span>
                                    <span>Basic Support</span>
                                </li>
                            </ul>
                        </div>
                        <button className="w-full bg-white text-black font-semibold py-3 px-6 rounded hover:bg-gray-200 transition uppercase text-sm tracking-wider">
                            Subscribe
                        </button>
                    </div>

                    {/* NBA Portal Card */}
                    <div className="bg-black/60 border border-gray-700/40 rounded-lg p-6 flex flex-col justify-between min-h-[480px]">
                        <div>
                            <p className="text-xs uppercase tracking-wider text-gray-400 mb-4">NBA Portal</p>
                            <div className="mb-4">
                                <span className="text-4xl font-bold text-white">$29.99</span>
                                <span className="text-gray-400 text-lg">/month</span>
                            </div>
                            <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                                Get access to rankings and over 50 customizable metrics on every NBA player
                            </p>
                            <ul className="space-y-3 mb-6">
                                <li className="flex items-start text-gray-300 text-sm">
                                    <span className="mr-3 mt-1">✓</span>
                                    <span>Customizable Stats</span>
                                </li>
                                <li className="flex items-start text-gray-300 text-sm">
                                    <span className="mr-3 mt-1">✓</span>
                                    <span>Current and All-Time Rankings</span>
                                </li>
                                <li className="flex items-start text-gray-300 text-sm">
                                    <span className="mr-3 mt-1">✓</span>
                                    <span>Basic Support</span>
                                </li>
                            </ul>
                        </div>
                        <button className="w-full bg-white text-black font-semibold py-3 px-6 rounded hover:bg-gray-200 transition uppercase text-sm tracking-wider">
                            Subscribe
                        </button>
                    </div>

                    {/* Pro Suite Card */}
                    <div className="bg-black/60 border border-gray-700/40 rounded-lg p-6 flex flex-col justify-between min-h-[480px]">
                        <div>
                            <p className="text-xs uppercase tracking-wider text-gray-400 mb-4">Pro Suite</p>
                            <div className="mb-4">
                                <span className="text-4xl font-bold text-white">$49.99</span>
                                <span className="text-gray-400 text-lg">/month</span>
                            </div>
                            <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                                Get access to both the college and nba portal with additional features
                            </p>
                            <ul className="space-y-3 mb-6">
                                <li className="flex items-start text-gray-300 text-sm">
                                    <span className="mr-3 mt-1">✓</span>
                                    <span>Additional Customizable Stats</span>
                                </li>
                                <li className="flex items-start text-gray-300 text-sm">
                                    <span className="mr-3 mt-1">✓</span>
                                    <span>Current and All-Time Rankings</span>
                                </li>
                                <li className="flex items-start text-gray-300 text-sm">
                                    <span className="mr-3 mt-1">✓</span>
                                    <span>Additional Comparison Features</span>
                                </li>
                                <li className="flex items-start text-gray-300 text-sm">
                                    <span className="mr-3 mt-1">✓</span>
                                    <span>Dedicated Support</span>
                                </li>
                            </ul>
                        </div>
                        <button className="w-full bg-white text-black font-semibold py-3 px-6 rounded hover:bg-gray-200 transition uppercase text-sm tracking-wider">
                            Subscribe
                        </button>
                    </div>

                    {/* Teams Card */}
                    <div className="bg-black/60 border border-gray-700/40 rounded-lg p-6 flex flex-col justify-between min-h-[480px]">
                        <div>
                            <p className="text-xs uppercase tracking-wider text-gray-400 mb-4">Teams</p>
                            <div className="mb-4">
                                <h3 className="text-3xl font-bold text-white">Contact Sales</h3>
                            </div>
                            <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                                Complete suite for teams and organizations.
                            </p>
                            <ul className="space-y-3 mb-6">
                                <li className="flex items-start text-gray-300 text-sm">
                                    <span className="mr-3 mt-1">✓</span>
                                    <span>Basic analytics</span>
                                </li>
                                <li className="flex items-start text-gray-300 text-sm">
                                    <span className="mr-3 mt-1">✓</span>
                                    <span>Personal player profile</span>
                                </li>
                                <li className="flex items-start text-gray-300 text-sm">
                                    <span className="mr-3 mt-1">✓</span>
                                    <span>Highlight reel management</span>
                                </li>
                                <li className="flex items-start text-gray-300 text-sm">
                                    <span className="mr-3 mt-1">✓</span>
                                    <span>Advanced analytics</span>
                                </li>
                                <li className="flex items-start text-gray-300 text-sm">
                                    <span className="mr-3 mt-1">✓</span>
                                    <span>Film analysis tools</span>
                                </li>
                                <li className="flex items-start text-gray-300 text-sm">
                                    <span className="mr-3 mt-1">✓</span>
                                    <span>Recruiter visibility</span>
                                </li>
                                <li className="flex items-start text-gray-300 text-sm">
                                    <span className="mr-3 mt-1">✓</span>
                                    <span>Transfer portal access</span>
                                </li>
                                <li className="flex items-start text-gray-300 text-sm">
                                    <span className="mr-3 mt-1">✓</span>
                                    <span>Team management tools</span>
                                </li>
                                <li className="flex items-start text-gray-300 text-sm">
                                    <span className="mr-3 mt-1">✓</span>
                                    <span>Dedicated support</span>
                                </li>
                            </ul>
                        </div>
                        <button className="w-full bg-white text-black font-semibold py-3 px-6 rounded hover:bg-gray-200 transition uppercase text-sm tracking-wider">
                            Contact Sales
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
}
