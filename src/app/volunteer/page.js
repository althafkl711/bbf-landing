import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import PageHero from "@/components/PageHero";
import VolunteerFormSection from "@/components/VolunteerFormSection";
import { Heart, Users, Lightbulb, HandHeart } from "lucide-react";

export const metadata = {
    title: "Volunteer With Us | Bread and Book Foundation",
    description: "Join our mission to transform lives through education and nourishment. Become a volunteer today.",
};

const volunteerOpportunities = [
    {
        icon: Heart,
        title: "Community Outreach",
        description: "Help us connect with communities, organize events, and spread awareness about our mission."
    },
    {
        icon: Users,
        title: "Teaching & Mentoring",
        description: "Share your knowledge and skills by tutoring children or conducting workshops in rural areas."
    },
    {
        icon: Lightbulb,
        title: "Skill Development",
        description: "Contribute your professional expertise in areas like digital literacy, vocational training, or healthcare."
    },
    {
        icon: HandHeart,
        title: "Fundraising & Advocacy",
        description: "Help us raise funds, build partnerships, and advocate for policy changes that benefit underserved communities."
    }
];

export default function Volunteer() {
    return (
        <div className="bg-background min-h-screen mt-[-80px]">
            {/* Hero Section */}
            <PageHero
                title="Volunteer With Us"
                subtitle="Be the change you wish to see. Join us in creating a brighter future for children across India."
            />

            {/* Why Volunteer Section */}
            <section className="py-20 md:py-28">
                <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
                    <ScrollReveal>
                        <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
                            <Image
                                src="/images/vs1.jpg"
                                alt="Volunteers making a difference"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={0.2}>
                        <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Why Volunteer With BBF?</h3>
                        <div className="w-24 h-1 bg-primary rounded-full mb-6"></div>
                        <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
                            <p>
                                Volunteering with Bread and Book Foundation is more than just giving your time—it's about being part of a movement that transforms lives. Every hour you contribute helps a child access education, receive nutritious meals, or gain the confidence to dream bigger.
                            </p>
                            <p>
                                Whether you're a student, professional, or retiree, your unique skills and passion can make a tangible difference. From teaching children in rural schools to organizing community health camps, every role is vital to our mission.
                            </p>
                            <p>
                                Join a community of like-minded changemakers who believe that no child should choose between bread and books. Together, we can create lasting impact and build a more equitable India.
                            </p>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Volunteer Opportunities */}
            <section className="py-24 bg-[#F9F9F9]">
                <div className="container mx-auto px-6">
                    <ScrollReveal>
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">How You Can Help</h2>
                            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
                            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                                There are many ways to contribute your time and talents. Choose an area that aligns with your passion and skills.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {volunteerOpportunities.map((opportunity, index) => (
                            <ScrollReveal key={index} delay={index * 0.1}>
                                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full">
                                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                                        <opportunity.icon className="w-8 h-8 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-bold text-foreground mb-4">{opportunity.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{opportunity.description}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Impact Stats */}
            <section className="py-20 bg-primary text-white">
                <div className="container mx-auto px-6">
                    <ScrollReveal>
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">Volunteer Impact</h2>
                            <div className="w-24 h-1 bg-white mx-auto rounded-full"></div>
                        </div>
                    </ScrollReveal>

                    <div className="grid md:grid-cols-3 gap-12 max-w-4xl mx-auto">
                        <ScrollReveal delay={0.1}>
                            <div className="text-center">
                                <div className="text-5xl font-bold mb-2">500+</div>
                                <div className="text-lg opacity-90">Active Volunteers</div>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal delay={0.2}>
                            <div className="text-center">
                                <div className="text-5xl font-bold mb-2">10,000+</div>
                                <div className="text-lg opacity-90">Volunteer Hours</div>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal delay={0.3}>
                            <div className="text-center">
                                <div className="text-5xl font-bold mb-2">50+</div>
                                <div className="text-lg opacity-90">Communities Served</div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <ScrollReveal>
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Volunteer Stories</h2>
                            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
                        </div>
                    </ScrollReveal>

                    <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                        <ScrollReveal delay={0.1}>
                            <div className="bg-[#F9F9F9] p-8 rounded-2xl">
                                <div className="text-6xl text-primary/20 mb-4">"</div>
                                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                                    Volunteering with BBF has been the most rewarding experience of my life. Seeing the joy on children's faces when they receive their school supplies makes every moment worthwhile.
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-primary/20 rounded-full"></div>
                                    <div>
                                        <div className="font-bold text-foreground">Priya Sharma</div>
                                        <div className="text-sm text-gray-500">Teaching Volunteer</div>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={0.2}>
                            <div className="bg-[#F9F9F9] p-8 rounded-2xl">
                                <div className="text-6xl text-primary/20 mb-4">"</div>
                                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                                    As a professional, I wanted to give back to society. BBF provided the perfect platform to use my skills for a meaningful cause. It's changed my perspective on life.
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-primary/20 rounded-full"></div>
                                    <div>
                                        <div className="font-bold text-foreground">Rahul Mehta</div>
                                        <div className="text-sm text-gray-500">Digital Literacy Volunteer</div>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Volunteer Form Section */}
            <VolunteerFormSection />
        </div>
    );
}
