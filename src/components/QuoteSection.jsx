"use client";

import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

export default function QuoteSection() {
    return (
        <section className="py-20 md:py-28 bg-[#FDF8F3] overflow-hidden">
            <div className="container mx-auto px-6">
                {/* Quote Text */}
                <ScrollReveal>
                    <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
                        <h2
                            className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight uppercase tracking-wide"
                            style={{ fontFamily: '"Gloria Hallelujah", cursive' }}
                        >
                            &quot;Some children worry about homework.
                            <br className="hidden md:block" />
                            {" "}Some worry about their next meal.
                            <br />
                            No child should choose between
                            <br />
                            <span className="text-primary">Bread</span> &amp; <span className="text-primary">Book.</span>&quot;
                        </h2>
                    </div>
                </ScrollReveal>

                {/* Image Collage */}
                <div className="relative max-w-5xl mx-auto">
                    <div className="flex flex-row md:flex-row items-end justify-center gap-4 md:gap-6">
                        {/* Left Image - Smaller, positioned lower */}
                        <ScrollReveal delay={0.1} className="w-full md:w-1/4 self-end">
                            <div className="relative h-[120px] md:h-[220px] overflow-hidden shadow-lg transform md:translate-y-8">
                                <Image
                                    src="/images/q5.jpg"
                                    alt="Children learning"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </ScrollReveal>

                        {/* Center Image - Larger, main focus */}
                        <ScrollReveal delay={0.2} className="w-full md:w-2/4">
                            <div className="relative h-[180px] md:h-[350px]  overflow-hidden shadow-xl">
                                <Image
                                    src="/images/q4.png"
                                    alt="A child's journey"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </ScrollReveal>

                        {/* Right Image - Medium, positioned higher */}
                        <ScrollReveal delay={0.3} className="w-full md:w-1/4 self-start">
                            <div className="relative h-[120px] md:h-[240px] overflow-hidden shadow-lg transform md:-translate-y-4">
                                <Image
                                    src="/images/q2.png"
                                    alt="Happy children"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </section>
    );
}
