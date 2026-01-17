"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { Heart, ChevronLeft, ChevronRight } from "lucide-react";

const campaigns = [
    {
        image: "/images/program-education.png",
        badge: null,
        title: "Educate a Child, Ignite a Future",
        subtitle: "Provides a child with a month’s education kit: school uniforms, books, and after-school tutoring",
    },
    {
        image: "/images/program-health.png",
        badge: null,
        title: "Feed the Hungry, Nourish Dreams",
        subtitle: "Feed a Child Healthy, Nutritious Meals.",
    },
    {
        image: "/images/program-relief.png",
        badge: null,
        title: "SEND A GIRL TO SCHOOL",
        subtitle: "If not now, then when?",
    },
    {
        image: "/images/program-solutions.png",
        badge: null,
        title: "Shelter with Dignity, Strength with Hope",
        subtitle: "Ensures food, warmth, and hygiene support for the needy and vulnerable communities.",
    },
];

export default function CryHelpSection() {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const scrollAmount = 340;
            scrollRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            });
        }
    };

    return (
        <section className=" py-16 md:py-24 overflow-visible bg-[#FAFAF8]" >


            {/* Main content - no container on right side */}
            <div className=" relative flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                {/* <div
                        className=" absolute top-0 left-0 w-[350px]"

                    >
                        <img src="/images/bg-pattern.svg" alt="" className="object-cover " />
                    </div> */}

                {/* Left Content - Text Section (with padding on all sides for small screens) */}
                <div className="  lg:w-[40%] px-6 md:px-12 lg:pl-16 lg:pr-0 flex flex-col justify-center">



                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-snug mb-3">
                        How do you want to {" "}
                        <span
                            className="relative inline-block text-primary"
                            style={{

                                fontFamily: '"Gloria Hallelujah", cursive',
                                fontWeight: 'bold',

                            }}
                        >
                            help?
                        </span>

                    </h2>
                    <div className="w-20 h-1 bg-primary rounded-full mb-6"></div>

                    <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8">
                        Your smallest contribution makes a big difference to children&apos;s lives. We count on the generosity of people like you to be able to create real change for India&apos;s children!
                    </p>

                    <Link
                        href="/contact"
                        className="w-fit bg-primary text-white font-medium px-8 py-3 rounded-lg transition-all hover:shadow-lg"
                    >
                        Donate Now!
                    </Link>
                </div>

                {/* Right Content - Carousel (extends to right edge) */}
                <div className="w-full lg:w-[60%] relative">
                    {/* Cards Container */}
                    <div
                        ref={scrollRef}
                        className="flex gap-5 overflow-x-auto pb-16 px-6 scrollbar-hide"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {campaigns.map((item, index) => (
                            <Link
                                href="/contact"
                                key={index}
                                className="flex-shrink-0 w-[280px] md:w-[300px] group"
                            >
                                <div
                                    className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full"
                                    style={{ borderBottom: '4px solid #FFD94C' }}
                                >
                                    {/* Image Container */}
                                    <div className="relative h-48 w-full overflow-hidden">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full object-cover"
                                        />

                                        {/* Yellow Badge Overlay */}
                                        {item.badge && (
                                            <div
                                                className="absolute right-0 top-0 bottom-0 w-[45%] flex items-center justify-center text-center px-3"
                                                style={{ backgroundColor: '#FFD94C' }}
                                            >
                                                <span className="text-black font-bold text-lg leading-tight whitespace-pre-line">
                                                    {item.badge}
                                                </span>
                                            </div>
                                        )}
                                    </div>

                                    {/* Text Content */}
                                    <div className="p-5">
                                        <h3 className="text-[#333] text-sm md:text-base font-bold tracking-wide mb-1 uppercase">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-500 text-xs md:text-sm">
                                            {item.subtitle}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Navigation Arrows - Bottom right - Awards style */}
                    <div className="absolute bottom-0 right-4 md:right-8 flex items-center gap-2">
                        <button
                            onClick={() => scroll("left")}
                            className="p-2 text-gray-400 hover:text-primary transition-colors"
                            aria-label="Previous"
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <div className="w-16 h-px bg-primary" />
                        <button
                            onClick={() => scroll("right")}
                            className="p-2 text-primary hover:text-accent transition-colors"
                            aria-label="Next"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
}
