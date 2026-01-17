"use client";

import Link from "next/link";
import { Heart } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

// States where the foundation is present
const states = [
    "Kerala",
    "Tamil Nadu",
    "Andhra Pradesh",
    "Karnataka",
    "Madhya Pradesh",
    "Gujarat",
    "Uttarakhand"
];

export default function PresenceSection() {
    return (
        <section className="py-20 md:py-28 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <ScrollReveal>
                        <div className="max-w-lg">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2">
                                Our{" "}
                                <span
                                    className="text-primary"
                                    style={{ fontFamily: '"Gloria Hallelujah", cursive' }}
                                >
                                    Presence
                                </span>
                            </h2>
                            <div className="w-20 h-1 bg-primary rounded-full mb-6"></div>

                            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8">
                                Bread and Book Foundation works with communities at the grassroots level to create sustainable
                                change for India&apos;s children. We are currently present in <strong>{states.length} states</strong> across
                                India, working on food security and education initiatives.
                            </p>

                            {/* States Tags */}
                            <div className="flex flex-wrap gap-2 mb-8">
                                {states.map((state) => (
                                    <span
                                        key={state}
                                        className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full"
                                    >
                                        {state}
                                    </span>
                                ))}
                            </div>

                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-6 py-3 rounded-lg transition-all hover:shadow-lg hover:-translate-y-1"
                            >
                                <Heart size={18} className="fill-current" />
                                Donate Now
                            </Link>
                        </div>
                    </ScrollReveal>

                    {/* Right Content - India Map */}
                    <ScrollReveal delay={0.2}>
                        <div className="w-full h-auto max-w-md mx-auto">
                            <img src="/images/india.svg" alt="map" />
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
