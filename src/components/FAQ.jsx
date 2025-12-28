'use client';

import React, { useState } from 'react';

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "How does PlayVision analyze basketball games?",
            answer: "PlayVision uses advanced computer vision and AI to automatically track player movements, analyze plays, and generate detailed statistics from game footage. Simply upload your video and our system processes it to extract valuable insights."
        },
        {
            question: "Can I build roster evaluations?",
            answer: "Yes! PlayVision allows you to build comprehensive roster evaluations using our extensive database of player metrics and performance data. You can compare players, analyze strengths and weaknesses, and make data-driven recruiting decisions."
        },
        {
            question: "How quickly are results available after uploading?",
            answer: "Processing time depends on video length and quality. Typically, a full game video is analyzed within 15-30 minutes. You'll receive an email notification when your analysis is ready to view."
        },
        {
            question: "Does PlayVision integrate with other platforms?",
            answer: "Yes, PlayVision offers integrations with popular coaching tools and video platforms. We provide API access for Pro Suite and Teams subscribers to seamlessly integrate our analytics into your existing workflow."
        }
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="bg-gradient-to-b from-[#3a3a3a] via-[#2a2a2a] to-black px-8 md:px-16 py-20">
            <div className="max-w-5xl mx-auto">
                {/* Section Title */}
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-12">
                    FAQ
                </h2>

                {/* FAQ Items */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`border border-white/10 rounded-lg overflow-hidden transition-all duration-300 ${
                                openIndex === index ? 'bg-white/5' : 'bg-transparent'
                            }`}
                        >
                            {/* Question */}
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                            >
                                <div className="flex items-center gap-4">
                                    <span className="text-gray-500 font-mono text-sm">
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                    <span className="text-white text-lg md:text-xl font-medium">
                                        {faq.question}
                                    </span>
                                </div>
                                <div
                                    className={`text-white text-2xl transition-transform duration-300 ${
                                        openIndex === index ? 'rotate-45' : ''
                                    }`}
                                >
                                    +
                                </div>
                            </button>

                            {/* Answer */}
                            <div
                                className={`overflow-hidden transition-all duration-300 ${
                                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                }`}
                            >
                                <div className="px-6 pb-6 pl-[4.5rem]">
                                    <p className="text-gray-400 leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
