import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
    title: "Contact Us | Bread and Book Foundation",
    description: "Get in touch with us to support our cause or learn more.",
};

export default function Contact() {
    return (
        <div className="bg-background min-h-screen">
            {/* Hero Section - Matching About Us/Programs style */}
            <section className="bg-primary text-white py-24 relative overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0 opacity-20">
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
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>
                        <div className="w-24 h-1 bg-secondary mx-auto rounded-full mb-6"></div>
                        <p className="text-xl md:text-2xl opacity-100 max-w-3xl mx-auto font-medium">
                            We&apos;d love to hear from you. Get in touch with us today.
                        </p>
                    </ScrollReveal>
                </div>
            </section>

            <div className="container mx-auto px-6 py-20">
                <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {/* Contact Info */}
                    <ScrollReveal>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 w-full h-full">
                            <h2 className="text-2xl font-bold mb-8">Contact Information</h2>
                            <div className="space-y-6">
                                <div className="flex items-center gap-4 text-gray-700">
                                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-foreground">Email</h3>
                                        <p className="text-[12px] md:text-[16px] "> <span>info</span> <span>@breadandbookfoundation.org</span></p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 text-gray-700">
                                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-foreground">Phone</h3>
                                        <p className="text-[12px] md:text-[16px]">+91 7698324264, +91 9645324269</p>
                                    </div>
                                </div>
                                <div className=" w-full flex flex-row items-center gap-4 text-gray-700">
                                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary ">
                                        <MapPin size={24} />
                                    </div>
                                    <div className="w-auto">
                                        <h3 className="font-semibold text-foreground">Address</h3>
                                        <div className="w-full flex flex-col text-[12px] md:text-[16px]"> <span>Vertexhive Bread and Book Foundation</span>Jamilalayalm, Chira Road, <span> Thrissur, Kerala 680001, India.</span> </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Form */}
                    <ScrollReveal delay={0.2}>
                        <form className=" w-full bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                            <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="Your Name" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                    <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="your@email.com" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                    <textarea rows="4" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="How can we help?"></textarea>
                                </div>
                                <button type="submit" className="w-full bg-primary text-white font-bold py-3 rounded-lg hover:bg-accent transition-all">
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </ScrollReveal>
                </div>
            </div>
        </div>
    );
}
