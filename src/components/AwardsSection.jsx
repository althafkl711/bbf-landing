"use client";

import { useState, useRef, useEffect } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { ChevronLeft, ChevronRight, Award } from "lucide-react";

// Awards data - each award has its own content
const awards = [
    {
        id: 1,
        title: "Best NGO 2023",
        subtitle: "Social Impact Awards",
        leftTitle: "We've got",
        leftHighlight: "Recognition",
        description: "Being recognized for our work in uplifting communities means the world to us. It validates our mission and inspires us to do more.",
    },
    {
        id: 2,
        title: "80G Certified",
        subtitle: "Tax Exemption",
        leftTitle: "We've got",
        leftHighlight: "Certifications",
        description: "Our 80G certification ensures your donations are tax-deductible, giving you an added benefit while supporting a noble cause.",
    },
    {
        id: 3,
        title: "Community Hero",
        subtitle: "Kerala State Award",
        leftTitle: "We've got",
        leftHighlight: "Awards",
        description: "Recognized by the state of Kerala for our outstanding contributions to child welfare and community development.",
    },
];

export default function AwardsSection() {
    const [activeAward, setActiveAward] = useState(0);
    const currentAward = awards[activeAward];
    const carouselRef = useRef(null);
    const cardRefs = useRef([]);

    // Scroll to center the active card on mobile
    useEffect(() => {
        if (carouselRef.current && cardRefs.current[activeAward]) {
            const container = carouselRef.current;
            const activeCard = cardRefs.current[activeAward];

            const containerWidth = container.offsetWidth;
            const cardLeft = activeCard.offsetLeft;
            const cardWidth = activeCard.offsetWidth;

            // Calculate scroll position to center the card
            const scrollPosition = cardLeft - (containerWidth / 2) + (cardWidth / 2);

            container.scrollTo({
                left: scrollPosition,
                behavior: 'smooth'
            });
        }
    }, [activeAward]);

    const handlePrev = () => {
        setActiveAward((prev) => (prev === 0 ? awards.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setActiveAward((prev) => (prev === awards.length - 1 ? 0 : prev + 1));
    };

    const handleCardClick = (index) => {
        setActiveAward(index);
    };

    return (
        <section className="py-20 md:py-28  overflow-hidden">
            <div className="container mx-auto px-6">
                {/* Header */}
                <ScrollReveal>
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">Awards</h2>
                        <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4"></div>
                    </div>
                </ScrollReveal>

                {/* Awards Content */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    {/* Left Content - Changes based on clicked award */}
                    <ScrollReveal className="lg:col-span-4 order-2 lg:order-1">
                        <div className="text-center lg:text-left">
                            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-4">
                                {currentAward.leftTitle}<br />
                                <span className="text-primary">{currentAward.leftHighlight}</span>
                            </h3>
                            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8">
                                {currentAward.description}
                            </p>

                            {/* Navigation Arrows */}
                            <div className="flex items-center justify-center lg:justify-start gap-2">
                                <button
                                    onClick={handlePrev}
                                    className="p-2 text-gray-400 hover:text-primary transition-colors"
                                >
                                    <ChevronLeft size={20} />
                                </button>
                                <div className="w-16 h-px bg-primary" />
                                <button
                                    onClick={handleNext}
                                    className="p-2 text-primary hover:text-accent transition-colors"
                                >
                                    <ChevronRight size={20} />
                                </button>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Award Cards - Carousel Style with Scroll */}
                    <ScrollReveal delay={0.1} className="lg:col-span-8 order-1 lg:order-2">
                        <div
                            ref={carouselRef}
                            className="flex items-center gap-4 md:gap-6 overflow-x-auto scrollbar-hide py-4 px-8 md:px-0 md:justify-center snap-x snap-mandatory"
                            style={{
                                scrollbarWidth: 'none',
                                msOverflowStyle: 'none',
                                WebkitOverflowScrolling: 'touch'
                            }}
                        >
                            {awards.map((award, index) => {
                                const isActive = activeAward === index;

                                return (
                                    <button
                                        key={award.id}
                                        ref={(el) => cardRefs.current[index] = el}
                                        onClick={() => handleCardClick(index)}
                                        className={`bg-white rounded-2xl shadow-md text-center transition-all duration-500 cursor-pointer flex-shrink-0 snap-center ${isActive
                                            ? "p-6 md:p-10 shadow-2xl scale-100 md:scale-110 z-10 ring-2 ring-primary/30"
                                            : "p-4 md:p-6 opacity-60 hover:opacity-80 hover:shadow-lg scale-90"
                                            }`}
                                        style={{
                                            width: isActive ? '220px' : '160px',
                                            minWidth: isActive ? '220px' : '160px',
                                        }}
                                    >
                                        {/* Minimal Icon - Same for all */}
                                        <div className={`mx-auto mb-3 md:mb-4 rounded-xl flex items-center justify-center transition-all duration-300 ${isActive
                                            ? "w-12 h-12 md:w-16 md:h-16 bg-primary/10"
                                            : "w-8 h-8 md:w-10 md:h-10 bg-gray-100"
                                            }`}>
                                            <Award
                                                size={isActive ? 24 : 16}
                                                className={isActive ? "text-primary" : "text-gray-400"}
                                            />
                                        </div>

                                        <h4 className={`font-bold text-foreground transition-all duration-300 ${isActive ? "text-base md:text-lg mb-1" : "text-[10px] md:text-xs mb-0.5"
                                            }`}>
                                            {award.title}
                                        </h4>
                                        <p className={`text-gray-500 transition-all duration-300 ${isActive ? "text-xs md:text-sm" : "text-[8px] md:text-[10px]"
                                            }`}>
                                            {award.subtitle}
                                        </p>
                                    </button>
                                );
                            })}
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
