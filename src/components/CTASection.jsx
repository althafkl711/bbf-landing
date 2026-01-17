import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import ScrollImageSequence from "@/components/ScrollImageSequence";

export default function CTASection() {
    return (
        <section className="mx-10 my-16 py-32 bg-black text-white text-center relative overflow-hidden rounded-2xl">
            {/* Scroll Video Background */}
            <div className="absolute inset-0 z-0 opacity-20 transform scale-100">
                <ScrollImageSequence
                    folderPath="/hero-video/"
                    totalFrames={240}
                />
            </div>

            {/* Gradient Overlay - darker at edges */}
            <div className="absolute inset-0 z-0 bg-[radial-gradient(circle,rgba(0,0,0,0.3)_0%,rgba(0,0,0,0.8)_100%)] pointer-events-none" />

            <div className="relative z-10 container mx-auto px-6">
                <ScrollReveal>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">Ready to Make an Impact?</h2>
                    <p className="text-sm md:text-base lg:text-lg opacity-90 mb-10 max-w-2xl mx-auto">
                        Your support can provide the meal that nourishes a child&apos;s body and the book that feeds their mind.
                    </p>
                    <Link
                        href="/contact"
                        className="bg-white text-primary px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-2xl"
                    >
                        Donate Today
                    </Link>
                </ScrollReveal>
            </div>
        </section>
    );
}
