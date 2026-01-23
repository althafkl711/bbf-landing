"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function ImageSlider({ images, interval = 3000 }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, interval);

        return () => clearInterval(timer);
    }, [images.length, interval]);

    return (
        <div className="relative w-full h-[400px] md:h-[700px] overflow-hidden rounded-2xl shadow-xl">
            {images.map((image, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${index === currentIndex ? "opacity-100" : "opacity-0"
                        }`}
                >
                    <Image
                        src={image}
                        alt={`Slide ${index + 1}`}
                        fill
                        className="object-cover"
                        priority={index === 0}
                    />
                </div>
            ))}

            {/* Overlay for depth */}
            <div className="absolute inset-0 bg-black/10 ring-1 ring-black/5 rounded-2xl"></div>

            {/* Slide indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
                {images.map((_, index) => (
                    <div
                        key={index}
                        className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex
                                ? "w-8 bg-white"
                                : "w-2 bg-white/50"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}
