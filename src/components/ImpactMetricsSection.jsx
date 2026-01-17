import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

const stats = [
    { number: "6+", label: "States" },
    { number: "11633+", label: "Young Lives Touched" },
    { number: "300+", label: "Passionate Volunteers" },
    { number: "2890+", label: "Women & Youth Empowered" },
];

export default function ImpactMetricsSection() {
    return (
        <section className="reveal-section bg-white relative w-full h-[700px] m-0 py-20 md:py-32 flex items-center justify-center align-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute py-10 w-full h-full inset-0 z-0 flex justify-center items-center">
                <Image
                    src="/images/metrics-12.png"
                    alt="Impact Background"
                    fill
                    className="object-cover"
                />
            </div>

            <div className="z-10 container my-auto mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 lg:gap-6 max-w-[800px]">
                    {stats.map((stat, index) => (
                        <ScrollReveal key={index} delay={index * 0.1}>
                            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 lg:p-8 text-center hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1 shadow-lg h-full flex flex-col justify-center items-center">
                                <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-2">{stat.number}</h3>
                                <p className="text-gray-200 text-sm md:text-base font-medium">{stat.label}</p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
