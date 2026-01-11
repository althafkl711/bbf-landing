import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import { CheckCircle, FileText } from "lucide-react";

export const metadata = {
    title: "About Us | Bread and Book Foundation",
    description: "Learn about our journey, vision, and the team dedicated to nourishing children's lives through food and education.",
};

export default function About() {
    return (
        <div className="bg-background min-h-screen">
            {/* Hero Section */}
            <section className="bg-primary text-white py-24 relative overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-10">
                    <Image
                        src="/images/hero-community.png"
                        alt="Background Pattern"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="absolute inset-0 z-0 bg-black/20 backdrop-blur-[2px]" />

                <div className="container mx-auto px-6 text-center relative z-10">
                    <ScrollReveal>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">About Us</h1>
                        <div className="w-24 h-1 bg-secondary mx-auto rounded-full mb-6"></div>
                        <p className="text-xl md:text-2xl opacity-100 max-w-3xl mx-auto font-medium">
                            Rewriting India’s future: &quot;No Child Should Choose Between Bread and Book.&quot;
                        </p>
                    </ScrollReveal>
                </div>
            </section>

            {/* The Genesis Section */}
            <section className="py-20 md:py-28">
                <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
                    <ScrollReveal>
                        <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
                            <Image
                                src="/images/hero-education.png"
                                alt="Bread and Book Education Initiative"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={0.2}>
                        <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">The Genesis of Bread and Book Foundation</h3>
                        <div className="w-24 h-1 bg-primary rounded-full mb-6"></div>
                        <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
                            <p>
                                The Bread and Book Foundation (BBF) was born from a simple yet radical truth: hunger, ignorance, and inequality are not isolated crises—they are interlinked chains holding millions back from their potential.
                            </p>
                            <p>
                                Founded in 2021 by a passionate collective of professional social workers, BBF is a non-government organization dedicated to uplifting India’s most vulnerable communities. We confront the interconnected challenges of hunger, educational disparity, and systemic inequity through innovative, sustainable solutions designed to empower individuals and dismantle cycles of poverty.
                            </p>
                            <p>
                                Guided by the vision of an India where no one is limited by hunger, ignorance, or inequality, we champion transparency and accountability, underscored by our 80G and 12A certifications.
                            </p>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Vision and Mission */}
            <section className="py-24 bg-white relative">
                {/* Decorative background visual */}
                <div className="absolute top-0 right-0 w-1/3 h-full bg-[#FFFBF0] rounded-l-[4rem] z-0 hidden md:block"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Vision */}
                        <ScrollReveal>
                            <div className="bg-white p-10 md:p-14 rounded-3xl shadow-xl border border-gray-100 h-full relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
                                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                                    <FileText size={120} className="text-primary" />
                                </div>
                                <h3 className="text-3xl font-bold text-primary mb-6">Our Vision</h3>
                                <div className="w-24 h-1 bg-primary rounded-full mb-6"></div>
                                <p className="text-gray-700 leading-relaxed text-lg">
                                    An India where every child is free from hunger, ignorance, and inequality; where communities at every level are empowered with education, opportunities, and dignity. We envision a nation where grassroots challenges are met with sustainable solutions and every individual—irrespective of their background—has the resources to realize their full potential.
                                </p>
                            </div>
                        </ScrollReveal>

                        {/* Mission */}
                        <ScrollReveal delay={0.2}>
                            <div className="bg-primary text-white p-10 md:p-14 rounded-3xl shadow-xl h-full relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
                                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <CheckCircle size={120} className="text-white" />
                                </div>
                                <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
                                <div className="w-24 h-1 bg-secondary rounded-full mb-6"></div>
                                <p className="opacity-95 leading-relaxed text-lg">
                                    To realize the vision, Bread and Book Foundation will tackle the root causes of poverty and inequality by addressing grassroots challenges through education, nourishment, and holistic community development. We aim to foster meaningful partnerships with local communities, government bodies, and national initiatives to create sustainable solutions, empowering individuals and transforming lives for lasting impact.
                                </p>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Our Approach */}
            <section className="py-24 bg-[#F9F9F9]">
                <div className="container mx-auto px-6 text-center max-w-4xl">
                    <ScrollReveal>
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Nourishing Bodies, Nurturing Minds</h2>
                        <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-10"></div>
                    </ScrollReveal>

                    <ScrollReveal delay={0.1}>
                        <p className="text-gray-700 text-lg leading-relaxed mb-8 text-left md:text-center">
                            At BBF, we believe no child should choose between bread and books. Our community kitchens deliver daily meals to underserved regions, ensuring children arrive in classrooms nourished and ready to learn. For pregnant women and toddlers, targeted nutrition programs combat stunting and lay the foundation for healthy development.
                        </p>
                    </ScrollReveal>
                    <ScrollReveal delay={0.2}>
                        <p className="text-gray-700 text-lg leading-relaxed mb-4 text-left md:text-center">
                            But feeding hungry children is only the first step. We provide holistic educational support such as school uniforms, textbooks, scholarships, and after-school tutoring to remove barriers that keep marginalized students from thriving. Digital literacy hubs bridge the urban-rural divide, while safe learning spaces empower girls to reclaim their right to education. By addressing hunger and illiteracy together, we break poverty’s cycle at its roots.
                        </p>
                    </ScrollReveal>
                </div>
            </section>

            {/* Legal Information Section */}
            <section className="py-20 md:py-28 bg-white">
                <div className="container mx-auto px-6 items-center">
                    <ScrollReveal>
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold text-foreground mb-4">Legal & Compliance</h2>
                            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
                            <p className="text-gray-600">We value transparency and accountability in everything we do.</p>
                        </div>
                    </ScrollReveal>

                    <div className="max-w-6xl mx-auto grid md:grid-cols-1 gap-16 items-start">
                        {/* Text Content */}
                        <ScrollReveal delay={0.1}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

                                <div className="p-6 border-1 border-gray-100 rounded-lg h-full">
                                    <h4 className="font-bold text-xl mb-4 text-primary border-b border-gray-100 pb-2">Registration Details</h4>
                                    <ul className="space-y-3 text-gray-700">
                                        <li className="flex flex-col sm:flex-row sm:justify-between"><span className="font-semibold text-gray-900">Legal Name:</span> <span>VERTEXHIVE BREAD AND BOOK FOUNDATION</span></li>
                                        <li className="flex justify-between"><span className="font-semibold text-gray-900">Established:</span> <span>2021</span></li>
                                        <li className="flex justify-between"><span className="font-semibold text-gray-900">Headquarters:</span> <span>Kochi, Kerala</span></li>
                                    </ul>
                                </div>

                                <div className="p-6 border-1 border-gray-100 rounded-lg h-full">
                                    <h4 className="font-bold text-xl mb-4 text-primary border-b border-gray-100 pb-2">Compliance Numbers</h4>
                                    <ul className="space-y-3 text-gray-700">
                                        <li className="flex flex-col sm:flex-row sm:justify-between"><span className="font-semibold text-gray-900">CIN</span> <span>U85500KL2025NPL091835</span></li>
                                        <li className="flex justify-between"><span className="font-semibold text-gray-900">PAN</span> <span>AAKCV7339J</span></li>
                                        <li className="flex justify-between"><span className="font-semibold text-gray-900">TAN</span> <span>CHNV06731E</span></li>
                                    </ul>
                                </div>


                            </div>
                        </ScrollReveal>

                        {/* Images */}
                        <ScrollReveal delay={0.2} className="space-y-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
                            <div className="relative aspect-[4/3] h-[440px] rounded-2xl overflow-hidden border-1 border-gray-100 bg-white">
                                <Image src="/images/certi-1.jpg" alt="Foundation Certificate 1" fill className="object-contain p-2" />
                            </div>
                            <div className="relative aspect-[4/3] h-[440px] rounded-2xl overflow-hidden border-1 border-gray-100 bg-white">
                                <Image src="/images/certi-2.jpg" alt="Foundation Certificate 2" fill className="object-contain p-2" />
                            </div>
                        </ScrollReveal>

                        {/* Tax Exemptions - Restored Below Images */}
                        <ScrollReveal delay={0.3} className="md:col-span-1 mt-8 lg:mt-0 lg:col-span-1">
                            <div className="bg-primary/5 p-8 rounded-2xl border border-primary/20 text-center">
                                <h4 className="font-bold text-lg mb-2 text-primary">Tax Exemptions</h4>
                                <p className="text-gray-700 mb-4">
                                    We are registered under <strong>80G</strong> and <strong>12A</strong> of the Income Tax Act.
                                </p>
                                <div className="inline-block bg-white px-4 py-2 rounded-lg border border-gray-200 text-sm font-mono text-gray-500">
                                    80G Reg: AAKCV7339JF20251
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>
        </div>
    );
}
