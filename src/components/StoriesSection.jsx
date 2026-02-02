"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const stories = [
    {
        id: "story-1",
        title: "For the First Time, My Child Holds a Book",
        description: `In the Hinotiya settlement of Bhopal, education was never part of life. For generations, no child from the Fakir community had ever gone to school.`,
        image: "/images/slide-one.jpg",
    },
    {
        id: "story-2",
        title: "Hope Reached Srinagar Rural Colony",
        description: `In Srinagar Rural Colony, daily life is a constant struggle. Most families survive on irregular daily-wage work, and when work is unavailable, hunger quietly enters their homes.`,
        image: "/images/slide-two.jpg",
    },
    {
        id: "story-3",
        title: "Education Saved Her from a Child Marriage",
        description: `At just 14 years old, Sunita’s life was about to change forever. In her community, girls are often married early — out of fear, poverty, and social pressure.`,
        image: "/images/slide-three.jpg",
    },
];

export default function StoriesSection() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#2C2C2C] mb-4">Stories of Change</h2>
                    <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
                    <p className="max-w-2xl mx-auto mt-6 text-gray-600">
                        Real stories of impact from the communities we serve.
                    </p>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {stories.map((story) => (
                        <motion.div
                            key={story.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col"
                        >
                            {/* Card Image */}
                            <div className="relative h-64 overflow-hidden">
                                <Image
                                    src={story.image}
                                    alt={story.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>

                            {/* Card Content */}
                            <div className="p-8 flex-1 flex flex-col">
                                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                                    {story.title}
                                </h3>
                                <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed flex-1">
                                    {story.description}
                                </p>
                                <Link
                                    href={`/programs#${story.id}`}
                                    className="text-primary font-semibold group-hover:text-primary/80 transition-colors flex items-center gap-2 mt-auto"
                                >
                                    Read Full Story
                                    <span className="text-xl">→</span>
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
