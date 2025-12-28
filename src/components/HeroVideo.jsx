'use client';

import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function HeroVideo() {
    const containerRef = useRef(null);
    const canvasRef = useRef(null);
    const logoRef = useRef(null);
    const textRef = useRef(null);
    const [logoAnimated, setLogoAnimated] = useState(false);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const canvas = canvasRef.current;
        if (!canvas) return;

        const context = canvas.getContext('2d');

        // ========================================
        // CONFIGURATION - Adjusted for your setup
        // ========================================
        const frameCount = 145; // Total number of WebP frames (video000.webp to video144.webp = 145 frames)
        const framePath = (index) => `/Videos/frames/video${String(index).padStart(3, '0')}.webp`; // Pattern: video000.webp, video001.webp, etc.

        // Set canvas size
        canvas.width = 1920; // Adjust to your frame width if different
        canvas.height = 1080; // Adjust to your frame height if different

        // Preload all frames
        const frames = [];
        const frameImages = [];

        // Create image objects for all frames
        for (let i = 0; i < frameCount; i++) {
            const img = new Image();
            img.src = framePath(i);
            frameImages.push(img);
        }

        // Wait for first frame to load before starting
        frameImages[0].onload = () => {
            render(0);
        };

        // Function to render a specific frame
        const render = (index) => {
            const frameIndex = Math.min(Math.floor(index), frameCount - 1);
            const img = frameImages[frameIndex];

            if (img.complete) {
                context.clearRect(0, 0, canvas.width, canvas.height);
                context.drawImage(img, 0, 0, canvas.width, canvas.height);
            }
        };

        // Create the scroll animation
        const frameIndex = { value: 0 };

        const scrollTriggerConfig = {
            trigger: containerRef.current,
            start: "top top",
            end: "+=300%", // Scroll distance for frame playback
            pin: true,
            anticipatePin: 1, // Helps with smooth pinning
            scrub: 1.5,
        };

        gsap.to(frameIndex, {
            value: frameCount - 1,
            ease: "none",
            scrollTrigger: {
                ...scrollTriggerConfig,
                onUpdate: (self) => {
                    const index = Math.floor(self.progress * (frameCount - 1));
                    render(index);
                },
            },
        });

        // Fade out text immediately when scroll starts - using window scroll
        if (textRef.current) {
            const handleScroll = () => {
                const scrollY = window.scrollY;
                const maxScroll = window.innerHeight; // Fade completes within 1 viewport height

                // Calculate opacity and y position based on scroll
                const progress = Math.min(scrollY / maxScroll, 1);
                const opacity = 1 - progress;
                const yPos = -50 * progress;

                gsap.set(textRef.current, {
                    opacity: opacity,
                    y: yPos
                });
            };

            window.addEventListener('scroll', handleScroll);

            // Cleanup
            return () => {
                window.removeEventListener('scroll', handleScroll);
                ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            };
        }

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    // Logo animation on scroll into view
    useEffect(() => {
        const logoElement = logoRef.current;
        if (!logoElement) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !logoAnimated) {
                        logoElement.classList.add('animate');
                        setLogoAnimated(true);
                    }
                });
            },
            {
                threshold: 0.3,
            }
        );

        observer.observe(logoElement);

        return () => {
            observer.disconnect();
        };
    }, [logoAnimated]);

    return (
        <div className="relative bg-black">
            <section
                ref={containerRef}
                className="h-screen w-full overflow-hidden flex flex-col items-center justify-center relative"
            >
                {/* Canvas for frame animation */}
                <canvas
                    ref={canvasRef}
                    className="absolute top-0 left-0 w-full h-full object-cover"
                />

                {/* UI Overlay */}
                <div ref={textRef} className="relative z-10 text-center pointer-events-none px-4">
                    <h1
                        className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-orange-300 to-orange-500 bg-clip-text text-transparent leading-tight"
                        style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
                    >
                        AI-Powered Basket Ball Analytics & Game Intelligence
                    </h1>
                    <p className="text-white text-lg md:text-xl lg:text-2xl font-light max-w-4xl mx-auto" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
                        Turn match and practice video into deep performance insights
                    </p>
                </div>
            </section>

            {/* Logo Section with Animation */}
            <div className="h-screen bg-black flex items-center justify-center overflow-hidden">
                <div className="logo-container" ref={logoRef}>
                    <img
                        src="/logo.png"
                        alt="Company Logo"
                        className="logo-image max-w-md w-full h-auto"
                    />
                </div>
            </div>

            <style jsx>{`
                .logo-image {
                    opacity: 0;
                    transform: scale(0.8) translateY(30px);
                    transition: transform 0.3s ease;
                }

                .animate .logo-image {
                    animation: logoFadeInScale 1.5s ease-out forwards;
                }

                @keyframes logoFadeInScale {
                    0% {
                        opacity: 0;
                        transform: scale(0.8) translateY(30px);
                    }
                    100% {
                        opacity: 1;
                        transform: scale(1) translateY(0);
                    }
                }

                .logo-container {
                    perspective: 1000px;
                }

                .logo-container:hover .logo-image {
                    transform: scale(1.05);
                }
            `}</style>
        </div>
    );
}
