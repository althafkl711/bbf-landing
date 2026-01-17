import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

export default function PageHero({ title, subtitle }) {
    return (
        <section className="text-white py-24 h-[50vh] relative ">
            {/* Background Image */}
            <div className="absolute w-full h-full inset-0 z-0 ">
                <Image
                    src="/images/page-bg.png"
                    alt="Background Pattern"
                    fill
                    className="object-cover md:object-fill"

                />
            </div>

            {/* Content */}
            <div className="container mx-auto pt-12 pb-6 px-6 text-center relative z-10">
                <ScrollReveal>
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">{title}</h1>
                    <div className="w-24 h-1 bg-secondary mx-auto rounded-full mb-4"></div>
                    {subtitle && (
                        <p className="text-sm md:text-base lg:text-lg opacity-100 max-w-3xl mx-auto font-medium">
                            {subtitle}
                        </p>
                    )}
                </ScrollReveal>
            </div>
        </section>
    );
}
