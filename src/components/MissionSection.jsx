import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export default function MissionSection() {
    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <ScrollReveal>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3">Who Are We?</h2>
                        <div className="w-20 h-1 bg-primary rounded-full mb-8"></div>
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8">
                            The Bread and Book Foundation is dedicated to uplifting India&apos;s most vulnerable communities.
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
                            src="/images/waw-2.png"
                            alt="Mission Visualization"
                            fill
                            className="object-contain"
                        />
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
