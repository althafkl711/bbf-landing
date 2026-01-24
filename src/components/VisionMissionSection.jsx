"use client";

import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

export default function VisionMissionSection() {
    return (
        <section className="py-20 md:py-12 bg-white">
            <div className="container mx-auto px-6">
                {/* Section Title */}
                            <div className="w-full flex flex-col items-center">
                                
                                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
                                    Our Vision & Mission
                                </h2>
                                 <div className="w-24 h-1 bg-primary rounded-full mt-4"></div>
                            </div>
                <div className="grid md:grid-cols-2 gap-16 items-center mt-12">
                    {/* Left Side - Content */}
                    <ScrollReveal>
                        <div className="space-y-10">
                            

                            {/* Vision */}
                            <div className="space-y-4">
                                <h3 className="text-xl md:text-2xl font-bold text-primary">Vision</h3>
                               
                                <p className="text-gray-700 text-sm md:text-base leading-relaxed ">
                                    An India where no child is denied education due to hunger or hardship, and where every child grows with dignity, opportunity, and hope for a better future.
                                </p>
                            </div>

                            {/* Mission */}
                            <div className="space-y-4">
                                <h3 className="text-xl md:text-2xl font-bold text-primary">Mission</h3>
                                <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                                    To break cycles of poverty by empowering children and vulnerable communities through education, nutrition, and holistic grassroots development—focusing on long-term impact, community participation, and sustainable change over short-term relief.
                                </p>
                            </div>
                        </div>
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
