"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const stories = [
    {
        id: 1,
        title: "A Meal That Changed Rahul's Day",
        description: "For 8-year-old Rahul, a warm lunch was a distant dream until our food program reached his school. Now, he attends classes regularly, fueled by nutrition and hope.",
        image: "/images/slide-one.jpg",
    },
    {
        id: 2,
        title: "Priya's Journey to Literacy",
        description: "Priya was the first in her family to touch a book. With our library initiative, she has devoured over 50 books this year and dreams of becoming a teacher.",
        image: "/images/slide-two.jpg",
    },
    {
        id: 3,
        title: "Empowering Mothers, Building Futures",
        description: "Our skill development workshops gave Sunita the tools to start her own tailoring business, securing a stable income for her children's education.",
        image: "/images/slide-three.jpg",
    },
];

export default function StoriesSection() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % stories.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + stories.length) % stories.length);
    };

    return (
        <section className="py-20 ">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#2C2C2C] mb-4">Stories & Updates</h2>
                    <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
                </div>

                {/* Carousel Container */}
                <div className="relative max-w-6xl mx-auto">
                    {/* Navigation Buttons */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 md:-left-16 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-xl border-2 border-[#F2F2F2] flex items-center justify-center text-gray-600 hover:text-primary transition-colors"
                    >
                        <ChevronLeft size={32} />
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute right-0 md:-right-16 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-xl border-2 border-[#F2F2F2] flex items-center justify-center text-gray-600 hover:text-primary transition-colors"
                    >
                        <ChevronRight size={32} />
                    </button>

                    {/* Slide Content */}
                    <div className="overflow-hidden relative min-h-[500px] md:min-h-[400px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.5 }}
                                className="w-full h-full"
                            >
                                <div className="bg-white rounded-[1rem] overflow-hidden  flex flex-col md:flex-row h-full md:h-[450px]">
                                    {/* Text Side (Left - 35-40%) */}
                                    <div className="w-full md:w-[40%] bg-primary p-8 md:p-12 flex flex-col justify-center text-white relative">
                                        {/* Decorative element possibly? */}
                                        <div className="space-y-6">
                                            <h3 className="text-2xl md:text-3xl font-bold leading-tight">
                                                {stories[currentIndex].title}
                                            </h3>
                                            <p className="text-white/90 text-sm md:text-base leading-relaxed">
                                                {stories[currentIndex].description}
                                            </p>
                                            <button className="bg-white text-primary px-8 py-3 rounded-full font-semibold text-sm hover:bg-white transition-colors inline-block w-max mt-4">
                                                Know More
                                            </button>
                                        </div>
                                    </div>

                                    {/* Image Side (Right - 60-65%) */}
                                    <div className="w-full md:w-[60%] relative h-[250px] md:h-full">
                                        <Image
                                            src={stories[currentIndex].image}
                                            alt={stories[currentIndex].title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Indicators */}
                    <div className="flex justify-center gap-2 mt-8">
                        {stories.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentIndex(idx)}
                                className={`h-2 rounded-full transition-all duration-300 ${currentIndex === idx ? "w-8 bg-primary" : "w-2 bg-gray-300"}`}
                            />
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
