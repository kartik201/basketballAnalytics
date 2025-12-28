'use client';

import React, { useState, useEffect } from 'react';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [showNavbar, setShowNavbar] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Calculate when video section ends (approximately 5x viewport height)
            const videoSectionHeight = window.innerHeight * 5;
            const currentScroll = window.scrollY;

            setShowNavbar(currentScroll > videoSectionHeight);
            setScrolled(currentScroll > videoSectionHeight + 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-4 left-4 right-4 md:left-8 md:right-8 z-50 transition-all duration-500 rounded-2xl ${
                showNavbar ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
            } ${
                scrolled
                    ? 'bg-black/40 backdrop-blur-xl border border-white/10 shadow-lg'
                    : 'bg-transparent'
            }`}
        >
            <div className="max-w-6xl mx-auto px-6 md:px-8">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <div className="flex items-center">
                        <a href="#" className="flex items-center space-x-2 group">
                            <div className="font-display text-2xl md:text-3xl font-black text-white tracking-tight">
                                Game<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">IQ</span>
                            </div>
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-1">
                        <NavLink href="#features">Features</NavLink>
                        <NavLink href="#tracking">Tracking</NavLink>
                        <NavLink href="#portal">Portal</NavLink>
                        <NavLink href="#pricing">Pricing</NavLink>
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:flex items-center space-x-4">
                        <button className="px-5 py-2 text-white text-sm font-medium hover:text-gray-300 transition">
                            Sign In
                        </button>
                        <button className="px-6 py-2.5 bg-white/10 backdrop-blur-sm text-white text-sm font-semibold rounded-full border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all shadow-lg hover:shadow-xl">
                            Get Started
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button className="md:hidden text-white p-2">
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </div>

            <style jsx>{`
                nav::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: linear-gradient(
                        180deg,
                        rgba(0, 0, 0, 0.3) 0%,
                        rgba(0, 0, 0, 0) 100%
                    );
                    border-radius: 1rem;
                    pointer-events: none;
                }
            `}</style>
        </nav>
    );
}

function NavLink({ href, children }) {
    return (
        <a
            href={href}
            className="relative px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors group"
        >
            {children}
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-pink-500 group-hover:w-3/4 transition-all duration-300 rounded-full"></span>
        </a>
    );
}
