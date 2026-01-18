import Link from "next/link";
import { BookOpen, Heart, Users } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const programs = [
    {
        icon: BookOpen,
        iconBg: "bg-blue-100",
        iconColor: "text-blue-600",
        title: "Educate a Child, Ignite a Future",
        description: "Providing essential education kits including uniforms, books, and tutoring to ensure every child has access to learning.",
    },
    {
        icon: Users,
        iconBg: "bg-green-100",
        iconColor: "text-green-600",
        title: "Feed the Hungry, Nourish Dreams",
        description: "Serving nutritious, wholesome meals to children in need, fighting malnutrition so they can focus on their growth.",
    },
    {
        icon: Heart,
        iconBg: "bg-orange-100",
        iconColor: "text-orange-600",
        title: "Protect & Shelter, Build Resilience",
        description: "Rapid response for disaster-affected families with emergency food, blankets, and hygiene kits.",
    },
];

export default function ProgramsSection() {
    return (
        <section className="py-20 bg-[#FDF8F3]">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">Our Programs</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {programs.map((program, index) => {
                        const IconComponent = program.icon;
                        return (
                            <ScrollReveal key={index} delay={0.2 * (index + 1)}>
                                <div className="bg-background rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all border border-gray-100 h-full group">
                                    <div className={`w-14 h-14 ${program.iconBg} ${program.iconColor} rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                        <IconComponent size={28} />
                                    </div>
                                    <h3 className="text-lg md:text-xl font-bold mb-3">{program.title}</h3>
                                    <p className="text-gray-600 text-sm md:text-base mb-6">{program.description}</p>
                                    <Link href="/programs" className="text-primary font-medium hover:text-accent">Read more →</Link>
                                </div>
                            </ScrollReveal>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
