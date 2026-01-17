"use client";

import Link from "next/link";
import { Heart, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function DonateSection() {
    return (
        <section className="donate-reveal-section relative bg-primary text-white overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white rounded-full" />
                <div className="absolute top-40 right-20 w-20 h-20 border-2 border-white rounded-full" />
                <div className="absolute bottom-20 left-1/4 w-24 h-24 border-2 border-white rounded-full" />
                <div className="absolute bottom-40 right-1/3 w-16 h-16 border-2 border-white rounded-full" />
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-amber-600 opacity-90" />

            <div className="relative z-10 container mx-auto px-6 py-24 md:py-32">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Animated Heart Icon */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="mb-8"
                    >
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-6">
                            <Heart size={40} className="text-white" fill="currentColor" />
                        </div>
                    </motion.div>

                    {/* Heading */}
                    <motion.h2
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                    >
                        Make a Difference <br />
                        <span className="text-secondary">Today</span>
                    </motion.h2>

                    {/* Description */}
                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed"
                    >
                        Your generous contribution can provide the meal that nourishes a child&apos;s body
                        and the book that feeds their mind. Together, we can ensure no child has to
                        choose between bread and book.
                    </motion.p>

                    {/* Donation Amount Quick Select */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-wrap justify-center gap-3 mb-10"
                    >
                        {["₹500", "₹1,000", "₹2,500", "₹5,000"].map((amount, index) => (
                            <button
                                key={index}
                                className="px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-white font-semibold transition-all duration-300 hover:scale-105"
                            >
                                {amount}
                            </button>
                        ))}
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <Link
                            href="/donate"
                            className="inline-flex items-center justify-center gap-2 bg-white text-primary px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 group"
                        >
                            Donate Now
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all duration-300"
                        >
                            Contact Us
                        </Link>
                    </motion.div>

                    {/* Trust Badges */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="mt-12 pt-8 border-t border-white/20"
                    >
                        <p className="text-white/70 text-sm mb-4">Secure & Tax Deductible Donations</p>
                        <div className="flex flex-wrap justify-center gap-6 text-white/60 text-sm">
                            <span className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-green-400 rounded-full" />
                                80G Certified
                            </span>
                            <span className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-green-400 rounded-full" />
                                100% Transparent
                            </span>
                            <span className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-green-400 rounded-full" />
                                Secure Payment
                            </span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
