"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ArrowRight, BookOpen, Heart, Users } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import ImageSequence from "@/components/ImageSequence";
import ScrollImageSequence from "@/components/ScrollImageSequence";
import StoriesSection from "@/components/StoriesSection";

// ... imports ...

const heroSlides = [
  {
    id: 1,
    image: "/images/slide-one.jpg",
    type: "image",
    title: "Brightening Futures Through Education:",
    highlight: "Be A Part Of The BBF Mission.",
    description: "Beyond books and classrooms, we nurture the unique potential of every child. At BBF, we don't just teach—we inspire, empower, and unlock the extraordinary possibilities within each young learner.",
  },
  {
    id: 2,
    image: "/images/slide-two.jpg",
    type: "image",
    title: "You Can Learn More",
    highlight: "Confidently",
    description: "Empowering students with innovative tools, collaborative learning, and the inspiration to unlock their full potential. Every child's journey is unique, and we're here to support every step.",
  },
  {
    id: 3,
    image: "/images/slide-three.jpg",
    type: "image",
    title: "Every Meal Nourishes Hope.",
    highlight: "Join BBF To Build Brighter Futures Today",
    description: "We believe that hunger should never dim a child’s potential. Every meal we provide is more than sustenance - it’s a catalyst for education, health, and community resilience.",
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center text-left text-white overflow-hidden bg-black">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 z-0 bg-black"
          >
            {/* Reverted to simple Image since all are images now */}
            <Image
              src={heroSlides[currentSlide].image}
              alt={heroSlides[currentSlide].title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/60" />
          </motion.div>
        </AnimatePresence>

        <div className="relative z-10 container mx-auto lg:mx-10 px-6  max-w-5xl align-bottom">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight max-w-3xl">
                {heroSlides[currentSlide].title} <br className="hidden md:block" />
                <span className="text-secondary">{heroSlides[currentSlide].highlight}</span>
              </h1>
              <p className="text-md md:text-lg mb-8 text-gray-200 max-w-2xl">
                {heroSlides[currentSlide].description}
              </p>
            </motion.div>
          </AnimatePresence>

          <ScrollReveal delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4 justify-start">
              <Link
                href="/donate"
                className="bg-primary hover:bg-accent text-white flex justify-center items-center px-8 py-4 rounded-full font-semibold text-lg transition-all shadow-lg hover:shadow-xl hover:scale-105"
              >
                Donate Now
              </Link>
              <Link
                href="/programs"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md flex justify-center items-center border border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all"
              >
                Our Programs
              </Link>
            </div>
          </ScrollReveal>
        </div>

        {/* Slider Indicators */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-3 rounded-full transition-all duration-300 ${currentSlide === index ? "w-10 bg-secondary" : "w-3 bg-white/50 hover:bg-white"}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Who Are We?</h2>
              <div className="w-20 h-1 bg-primary rounded-full mb-8"></div>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                The Bread and Book Foundation is dedicated to uplifting India’s most vulnerable communities.
                We nourish children&apos;s lives through food and education, fostering community resilience.
                Our core philosophy is simple yet powerful: <strong>No Child Should Choose Between Bread and Book.</strong>
              </p>
              <Link
                href="/about"
                className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#B45309] transition-colors shadow-sm inline-block"
              >
                Know More
              </Link>
            </ScrollReveal>

            {/* Right Image Placeholder */}
            <ScrollReveal delay={0.2} className="relative h-[400px] ">
              <Image
                src="/images/mission.png"
                alt="Mission Visualization"
                fill
                className="object-contain"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="py-20 bg-[#F9F9F9]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Programs</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Program 1 */}
            <ScrollReveal delay={0.2}>
              <div className="bg-background rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all border border-gray-100 h-full group">
                <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <BookOpen size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3">Educate a Child, Ignite a Future</h3>
                <p className="text-gray-600 mb-6">
                  Providing essential education kits including uniforms, books, and tutoring to ensure every child has access to learning.
                </p>
                <Link href="/programs" className="text-primary font-medium hover:text-accent">Read more →</Link>
              </div>
            </ScrollReveal>

            {/* Program 2 */}
            <ScrollReveal delay={0.4}>
              <div className="bg-background rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all border border-gray-100 h-full group">
                <div className="w-14 h-14 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Users size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3">Feed the Hungry, Nourish Dreams</h3>
                <p className="text-gray-600 mb-6">
                  Serving nutritious, wholesome meals to children in need, fighting malnutrition so they can focus on their growth.
                </p>
                <Link href="/programs" className="text-primary font-medium hover:text-accent">Read more →</Link>
              </div>
            </ScrollReveal>

            {/* Program 3 */}
            <ScrollReveal delay={0.6}>
              <div className="bg-background rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all border border-gray-100 h-full group">
                <div className="w-14 h-14 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Heart size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3">Protect & Shelter, Build Resilience</h3>
                <p className="text-gray-600 mb-6">
                  Rapid response for disaster-affected families with emergency food, blankets, and hygiene kits.
                </p>
                <Link href="/programs" className="text-primary font-medium hover:text-accent">Read more →</Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Stories and Updates Section */}
      <StoriesSection />

      {/* Impact Metrics Section */}
      <section className="bg-white relative w-full h-[700px] m-0 py-20 md:py-32 flex items-center justify-center align-center overflow-hidden ">
        {/* Background Image */}
        <div className="absolute py-10 w-full h-full inset-0 z-0 flex justify-center items-center">
          <Image
            src="/images/metrics-12.png"
            alt="Impact Background"
            fill
            className="object-cover"

          />
        </div>

        <div className=" z-10 container my-auto mx-auto px-6 ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 lg:gap-6 max-w-[800px] ">
            {[
              { number: "6+", label: "States" },
              { number: "11633+", label: "Young Lives Touched" },
              { number: "300+", label: "Passionate Volunteers" },
              { number: "2890+", label: "Women & Youth Empowered" },
            ].map((stat, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className=" bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 lg:p-8 text-center hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1 shadow-lg h-full flex flex-col justify-center items-center ">
                  <h3 className="text-3xl md:text-5xl font-bold text-white mb-2">{stat.number}</h3>
                  <p className="text-gray-200 font-medium">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className=" mx-10 my-16 py-32 bg-primary text-white text-center relative overflow-hidden rounded-2xl">
        {/* Scroll Video Background */}
        <div className="absolute inset-0 z-0 opacity-15 transform scale-100">
          <ScrollImageSequence
            folderPath="/hero-video/"
            totalFrames={240}
          />
        </div>

        {/* Gradient Overlay - darker at edges */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle,rgba(94,82,8,0.3)_0%,rgba(0,0,0,0.6)_100%)] mix-blend-multiply pointer-events-none backdrop-blur-[1px]" />

        <div className="relative z-10 container mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Make an Impact?</h2>
            <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
              Your support can provide the meal that nourishes a child&apos;s body and the book that feeds their mind.
            </p>
            <Link
              href="/donate"
              className="bg-white text-primary px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-2xl"
            >
              Donate Today
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
