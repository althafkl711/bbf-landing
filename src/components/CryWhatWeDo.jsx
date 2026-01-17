"use client";

import React from "react";
import Link from "next/link";
import { BookOpen, Utensils, ShieldCheck, Users, ArrowRight } from "lucide-react";

const areas = [
    {
        title: "Education",
        description: "Ensuring that children go to school and complete their education",
        icon: BookOpen,
        link: "/programs",
        pinColor: "#4FC3F7", // Light blue
        bgColor: "#E3F2FD",
        rotation: -2,
        yOffset: 0
    },
    {
        title: "Health & Nutrition",
        description: "Increasing access to proper nutrition and quality healthcare",
        icon: Utensils,
        link: "/programs",
        pinColor: "#81C784", // Green
        bgColor: "#E8F5E9",
        rotation: 1,
        yOffset: 40
    },
    {
        title: "Safety & Protection",
        description: "Addressing issues like child labour, child marriage, trafficking and abuse",
        icon: ShieldCheck,
        link: "/programs",
        pinColor: "#FF8A65", // Coral/Orange
        bgColor: "#FFF3E0",
        rotation: -1,
        yOffset: 20
    },
    {
        title: "Child Participation",
        description: "Creating an environment where children's voices are heard and considered",
        icon: Users,
        link: "/programs",
        pinColor: "#FFD54F", // Yellow
        bgColor: "#FFFDE7",
        rotation: 2,
        yOffset: 60
    }
];

// Paper clip/pushpin SVG component
const PushPin = ({ color }) => (
    <svg width="24" height="32" viewBox="0 0 24 32" className="absolute -top-4 left-1/2 -translate-x-1/2 z-10 drop-shadow-md">
        <ellipse cx="12" cy="8" rx="8" ry="8" fill={color} />
        <ellipse cx="12" cy="8" rx="5" ry="5" fill={color} opacity="0.7" />
        <circle cx="12" cy="8" r="3" fill="white" opacity="0.5" />
        <rect x="10" y="14" width="4" height="12" fill={color} rx="1" />
        <path d="M10 26 L12 32 L14 26" fill={color} />
    </svg>
);

export default function CryWhatWeDo() {
    return (
        <section className="bg-gradient-to-b from-gray-50 to-white py-20 md:py-28 font-sans overflow-hidden">
            <div className="container mx-auto px-6">

                <div className="text-center mb-16 md:mb-24">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 relative inline-block">
                        What We Do
                        <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto mt-6 text-sm md:text-base">
                        Our work revolves around ensuring 4 basic rights for children
                    </p>
                </div>

                {/* Pinned Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
                    {areas.map((area, index) => (
                        <Link href={area.link} key={index} className="group">
                            <div
                                className="relative pt-8 transition-all duration-500 hover:-translate-y-2"
                                style={{
                                    transform: `rotate(${area.rotation}deg) translateY(${area.yOffset}px)`,
                                }}
                            >
                                {/* Pushpin */}
                                <PushPin color={area.pinColor} />

                                {/* Card */}
                                <div
                                    className="relative p-6 rounded-xl shadow-lg transition-all duration-300 group-hover:shadow-2xl border border-gray-100/50 min-h-[220px] flex flex-col"
                                    style={{
                                        backgroundColor: area.bgColor,
                                    }}
                                >
                                    {/* Number Badge */}
                                    <span
                                        className="absolute top-4 left-4 text-sm font-bold"
                                        style={{ color: area.pinColor }}
                                    >
                                        0{index + 1}
                                    </span>

                                    <div className="mt-6">
                                        <h3 className="text-base md:text-lg font-bold text-[#2F2F2F] mb-3 group-hover:text-black">
                                            {area.title}
                                        </h3>

                                        <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                                            {area.description}
                                        </p>
                                    </div>

                                    {/* Arrow indicator on hover */}
                                    <div className="mt-4 flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
                                        <ArrowRight size={16} style={{ color: area.pinColor }} />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
