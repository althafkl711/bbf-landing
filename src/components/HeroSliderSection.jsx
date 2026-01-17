"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

const heroSlides = [
    {
        id: 1,
        image: "/images/slide-one.jpg",
        type: "image",
        title: "Brightening Futures Through Education:",
        highlight: "Be A Part Of The BBF Mission.",
        description: "Beyond books and classrooms, we nurture the unique potential of every child. At BBF, we don't just teach—we inspire, empower, and unlock the extraordinary possibilities within each young learner.",
    },
    {
        id: 2,
        image: "/images/slide-two.jpg",
        type: "image",
        title: "You Can Learn More",
        highlight: "Confidently",
        description: "Empowering students with innovative tools, collaborative learning, and the inspiration to unlock their full potential. Every child's journey is unique, and we're here to support every step.",
    },
    {
        id: 3,
        image: "/images/slide-three.jpg",
        type: "image",
        title: "Every Meal Nourishes Hope.",
        highlight: "Join BBF To Build Brighter Futures Today",
        description: "We believe that hunger should never dim a child's potential. Every meal we provide is more than sustenance - it's a catalyst for education, health, and community resilience.",
    },
];

export default function HeroSliderSection() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative h-[70vh] flex items-center text-left text-white overflow-hidden bg-black">
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0 z-0 bg-black"
                >
                    <Image
                        src={heroSlides[currentSlide].image}
                        alt={heroSlides[currentSlide].title}
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/60" />
                </motion.div>
            </AnimatePresence>

            <div className="relative z-10 container mx-auto lg:mx-10 px-6 max-w-5xl align-bottom">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h1 className="text-2xl md:text-4xl font-bold mb-6 leading-tight max-w-3xl">
                            {heroSlides[currentSlide].title} <br className="hidden md:block" />
                            <span className="text-secondary">{heroSlides[currentSlide].highlight}</span>
                        </h1>
                        <p className="text-sm md:text-md mb-8 text-gray-200 max-w-lg">
                            {heroSlides[currentSlide].description}
                        </p>
                    </motion.div>
                </AnimatePresence>

                <ScrollReveal delay={0.4}>
                    <div className="flex flex-col sm:flex-row gap-4 justify-start">
                        <Link
                            href="/donate"
                            className="bg-primary hover:bg-accent text-white flex justify-center items-center px-8 py-2 rounded-full font-semibold text-lg transition-all shadow-lg hover:shadow-xl hover:scale-105"
                        >
                            Donate Now
                        </Link>
                        <Link
                            href="/programs"
                            className="bg-white/10 hover:bg-white/20 backdrop-blur-md flex justify-center items-center border border-white/30 text-white px-8 py-2 rounded-full font-semibold text-lg transition-all"
                        >
                            Our Programs
                        </Link>
                    </div>
                </ScrollReveal>
            </div>

            {/* Slider Indicators */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
                {heroSlides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`h-3 rounded-full transition-all duration-300 ${currentSlide === index ? "w-10 bg-secondary" : "w-3 bg-white/50 hover:bg-white"}`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
}
