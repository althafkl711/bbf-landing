"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Heart } from "lucide-react";
import { motion } from "framer-motion";

export default function CryHeroSection() {
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play().catch(() => {
                // Autoplay might be blocked, that's ok
            });
        }
    }, []);

    return (
        <section className="relative min-h-[80vh] bg-white overflow-hidden">
            {/* Main Content Container */}
            <div className="flex flex-col lg:flex-row ">

                {/* Left Content - Text Section */}
                <div className="w-full lg:w-[40%] flex flex-col justify-center px-6 md:px-12 lg:px-16 py-16 lg:py-0 relative z-10 order-2 lg:order-1">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h1 className="text-[32px] md:text-[42px] lg:text-[48px] font-bold text-[#333] leading-tight mb-8">
                            Together, Let&apos;s build{" "}
                            <span
                                className="inline-block text-tertiary"
                                style={{
                                    fontFamily: '"Gloria Hallelujah", cursive',
                                    
                                }}
                            >
                                brighter
                            </span>
                            <br />
                            <span
                                className="inline-block text-tertiary"
                                style={{
                                    fontFamily: '"Gloria Hallelujah", cursive',
                                    
                                }}
                            >
                                childhoods
                            </span>{" "}
                            for
                            <br />
                            India&apos;s future.
                        </h1>

                        <Link
                            href="/contact"
                            className="inline-flex items-center bg-primary text-white gap-2 text-black font-semibold px-6 py-3 rounded-lg transition-all hover:shadow-lg hover:-translate-y-1"
                            
                        >
                            <Heart size={18} className="fill-current text-white" />
                            Yes! I Want To Help!
                        </Link>
                    </motion.div>

                    {/* Scroll Indicator - hidden on mobile */}
                    <motion.div
                        className="hidden lg:flex absolute bottom-8 left-6 md:left-12 lg:left-16 items-center gap-3"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 0.5 }}
                    >
                        <div className="w-[2px] h-10 bg-gray-300 relative overflow-hidden">
                            <motion.div
                                className="absolute top-0 left-0 w-full bg-yellow-400"
                                initial={{ height: 0 }}
                                animate={{ height: '100%' }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            />
                        </div>
                        <span className="text-sm text-gray-500 font-medium">Scroll For More</span>
                    </motion.div>
                </div>

                {/* Right Content - Video with Yellow Patch Frame at top right */}
                <div className="w-full lg:w-[60%] relative order-1 lg:order-2 lg:self-start">
                    {/* Video Container with patch overlay - same dimensions */}
                    <div className="relative w-full aspect-[4/3] lg:aspect-auto lg:h-[500px] xl:h-[600px]">
                        {/* Video */}
                        <video
                            ref={videoRef}
                            className="w-full h-full object-cover"
                            autoPlay
                            muted
                            loop
                            playsInline
                            poster="/images/slide-one.jpg"
                        >
                            <source src="/images/cry-hero-video.mp4" type="video/mp4" />
                        </video>

                        {/* Video Patch Frame - overlays video with slight offset to cover edges */}
                        <div
                            className="absolute z-10 pointer-events-none"
                            style={{
                                top: '-4px',
                                left: '-4px',
                                right: '-4px',
                                bottom: '-4px'
                            }}
                        >
                            <Image
                                src="/images/video2-patch.svg"
                                alt="Video frame"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
