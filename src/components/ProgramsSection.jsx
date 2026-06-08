"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

// ─── Colour palette ────────────────────────────────────────────────────────────
const COLORS = {
    green: "#1E3D2F",
    cream: "#FEF0D4",
    purple: "#7B6DC0",
};

// ─── Program cards data ────────────────────────────────────────────────────────
const programs = [
    {
        label: "PROJECT",
        title: "AKSHARAM",
        description:
            "Through Aksharam, we equip children with the resources they need to learn, thrive, and shape a brighter future.",
        icon: "/images/our-program/aksharam.svg",
        bg: COLORS.green,
        textColor: "#FFFFFF",
        labelColor: "rgba(255,255,255,0.65)",
        linkColor: "#FFFFFF",
    },
    {
        label: "BBF",
        title: "LEARNING CENTRE",
        description:
            "From streets to classrooms, empowering vulnerable children with education, hope, and opportunities for a brighter future.",
        icon: "/images/our-program/learning-centre.svg",
        bg: COLORS.cream,
        textColor: "#1A1A1A",
        labelColor: "rgba(0,0,0,0.5)",
        linkColor: "#1A1A1A",
    },
    {
        label: "PROJECT",
        title: "ZERO HUNGER",
        description:
            "Project ZERO HUNGER fights food insecurity by delivering nutritious meals to vulnerable children and families in need. Beyond feeding the hungry, the project seeks to restore dignity, improve well-being, and create a future where no one is left behind due to a lack of food.",
        icon: "/images/our-program/Zero-hunger.svg",
        bg: COLORS.purple,
        textColor: "#FFFFFF",
        labelColor: "rgba(255,255,255,0.65)",
        linkColor: "#FFFFFF",
        fullWidth: true,
    },
];

// ─── Recent project slider data ────────────────────────────────────────────────
const recentProjects = [
    {
        bg: COLORS.green,
        textColor: "#FFFFFF",
        icon: "/images/our-program/aksharam.svg",
        title: "Preveshanolsavam 2026",
        description:
            "Preveshanolsavam 2026 at GVHSS Palode, organised in collaboration with Bread and Book Foundation (BBF), warmly welcomed young learners into a new academic year, celebrating education, hope, and equal opportunities for every child.",
        link: "/programs#preveshanolsavam",
        collageImage: "/images/our-program/preveshanolsalavam-img1.png",
    },
    {
        bg: COLORS.cream,
        textColor: "#1A1A1A",
        icon: "/images/our-program/learning-centre.svg",
        title: "BBF Learning Centre, Bhopal",
        description:
            "At the BBF Learning Centre, children receive foundational education, literacy support, life-skills training, and individual attention tailored to their learning needs. Beyond academics, our team actively engages with families and communities....",
        link: "/programs#learning-centre",
        collageImage: "/images/our-program/learning-centre-img.png",
    },
    {
        bg: COLORS.purple,
        textColor: "#FFFFFF",
        icon: "/images/our-program/Zero-hunger.svg",
        title: "From Hunger to Hope",
        description:
            "Project Zero Hunger fights food insecurity by delivering nutritious meals to children and families in need. Beyond feeding the hungry, the project seeks to restore dignity, improve well-being, and create a future where no one is left behind due to a lack of food.",
        link: "/programs#hunger-to-hope",
        collageImage: "/images/our-program/hunger-img2.png",
    },
];

// (PhotoStrip removed — each slide now uses a single full-width collage image)

// ─── Slider nav dots ───────────────────────────────────────────────────────────
function SliderNav({ total, current, onPrev, onNext }) {
    return (
        <div className="flex items-center justify-center gap-4 mt-6 pb-2">
            <button
                onClick={onPrev}
                className="text-gray-500 hover:text-gray-800 transition-colors text-lg font-light leading-none select-none"
                aria-label="Previous"
            >
                ‹
            </button>
            <div className="flex gap-2 items-center">
                {Array.from({ length: total }).map((_, i) => (
                    <div
                        key={i}
                        className={`rounded-full transition-all duration-300 ${i === current
                                ? "w-8 h-1.5 bg-primary"
                                : "w-2 h-1.5 bg-gray-300"
                            }`}
                    />
                ))}
            </div>
            <button
                onClick={onNext}
                className="text-gray-500 hover:text-gray-800 transition-colors text-lg font-light leading-none select-none"
                aria-label="Next"
            >
                ›
            </button>
        </div>
    );
}

// ─── Recent Project Slider ─────────────────────────────────────────────────────
function RecentProjectSlider() {
    const [current, setCurrent] = useState(0);
    const timerRef = useRef(null);
    const total = recentProjects.length;

    const goNext = useCallback(() => setCurrent((c) => (c + 1) % total), [total]);
    const goPrev = useCallback(() => setCurrent((c) => (c - 1 + total) % total), [total]);

    // Auto-advance every 5 s; reset on manual interaction
    const resetTimer = useCallback(() => {
        if (timerRef.current) clearInterval(timerRef.current);
        timerRef.current = setInterval(goNext, 5000);
    }, [goNext]);

    useEffect(() => {
        resetTimer();
        return () => clearInterval(timerRef.current);
    }, [resetTimer]);

    const handlePrev = () => { goPrev(); resetTimer(); };
    const handleNext = () => { goNext(); resetTimer(); };

    const slide = recentProjects[current];
    const isLight = slide.bg === COLORS.cream;

    return (
        <div className="mt-14">
            {/* Label */}
            <p className="text-center text-xs font-semibold tracking-[0.2em] text-gray-400 uppercase mb-4">
                OUR RECENT PROJECT
            </p>

            {/* Card */}
            <div
                className="relative rounded-2xl overflow-hidden transition-all duration-500"
                style={{ backgroundColor: slide.bg }}
            >
                {/* Content */}
                <div className="flex flex-col items-center text-center px-6 md:px-16 pt-10 pb-6">
                    {/* Icon */}
                    <div className="mb-5 w-12 h-12 relative">
                        <Image
                            src={slide.icon}
                            alt="icon"
                            fill
                            className="object-contain"
                        />
                    </div>

                    {/* Title */}
                    <h3
                        className="text-xl md:text-2xl font-bold mb-4 leading-snug"
                        style={{ color: slide.textColor }}
                    >
                        {slide.title}
                    </h3>

                    {/* Description */}
                    <p
                        className="text-sm md:text-base leading-relaxed "
                        style={{ color: isLight ? "#555" : "rgba(255,255,255,0.85)" }}
                    >
                        {slide.description}
                    </p>

                    {/* Read More */}
                    <Link
                        href={slide.link}
                        className="mt-5 text-sm font-semibold hover:underline transition-all"
                        style={{ color: slide.textColor }}
                    >
                        Read More →
                    </Link>
                </div>

                {/* Full-width collage image — flush to bottom, no padding */}
                <div className="w-full">
                    <Image
                        src={slide.collageImage}
                        alt={slide.title}
                        width={900}
                        height={260}
                        className="w-full h-auto object-cover block"
                        sizes="(max-width: 768px) 100vw, 900px"
                    />
                </div>
            </div>

            {/* Nav dots */}
            <SliderNav total={total} current={current} onPrev={handlePrev} onNext={handleNext} />
        </div>
    );
}

// ─── Main exported component ───────────────────────────────────────────────────
export default function ProgramsSection() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6 ">

                {/* Section heading */}
                <ScrollReveal>
                    <div className="text-center mb-10">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3">
                            Our Programs
                        </h2>
                        <div className="w-12 h-[3px] bg-primary mx-auto rounded-full" />
                    </div>
                </ScrollReveal>

                {/* ── Top two cards ── */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    {programs.slice(0, 2).map((p, i) => (
                        <ScrollReveal key={i} delay={0.1 * (i + 1)}>
                            <div
                                className="rounded-2xl p-8 flex flex-col justify-between min-h-[280px] group hover:scale-[1.01] transition-transform duration-300"
                                style={{ backgroundColor: p.bg }}
                            >
                                {/* Icon */}
                                <div className="w-10 h-10 relative mb-12">
                                    <Image src={p.icon} alt={p.title} fill className="object-contain" />
                                </div>

                                {/* Label + Title */}
                                <div>
                                    <p className="text-xs font-semibold tracking-widest mb-1" style={{ color: p.labelColor }}>
                                        {p.label}
                                    </p>
                                    <h3 className="text-xl font-extrabold mb-3" style={{ color: p.textColor }}>
                                        {p.title}
                                    </h3>
                                    <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: p.labelColor }}>
                                        {p.description}
                                    </p>
                                </div>

                                {/* Link */}
                                <Link
                                    href="/programs"
                                    className="text-sm font-semibold hover:underline transition-all"
                                    style={{ color: p.linkColor }}
                                >
                                    Know More →
                                </Link>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

                {/* ── Full-width third card ── */}
                <ScrollReveal delay={0.3}>
                    {(() => {
                        const p = programs[2];
                        return (
                            <div
                                className="rounded-2xl p-8 md:p-10 flex flex-col justify-between group hover:scale-[1.005] transition-transform duration-300"
                                style={{ backgroundColor: p.bg }}
                            >
                                {/* Icon */}
                                <div className="w-10 h-10 relative mb-12">
                                    <Image src={p.icon} alt={p.title} fill className="object-contain" />
                                </div>

                                {/* Label + Title */}
                                <div>
                                    <p className="text-xs font-semibold tracking-widest mb-1" style={{ color: p.labelColor }}>
                                        {p.label}
                                    </p>
                                    <h3 className="text-2xl font-extrabold mb-4" style={{ color: p.textColor }}>
                                        {p.title}
                                    </h3>
                                    <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: p.labelColor }}>
                                        {p.description}
                                    </p>
                                </div>

                                {/* Link */}
                                <Link
                                    href="/programs"
                                    className="text-sm font-semibold hover:underline transition-all"
                                    style={{ color: p.linkColor }}
                                >
                                    Know More →
                                </Link>
                            </div>
                        );
                    })()}
                </ScrollReveal>

                {/* ── Recent Project Slider ── */}
                <ScrollReveal delay={0.2}>
                    <RecentProjectSlider />
                </ScrollReveal>

            </div>
        </section>
    );
}
