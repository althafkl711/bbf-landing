"use client";

import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

const faqs = [
    {
        question: "How can I donate to BBF?",
        answer: "You can donate through our website using various payment methods including UPI, credit/debit cards, and net banking. All donations are tax-deductible under 80G."
    },
    {
        question: "Is my donation tax-deductible?",
        answer: "Yes! Bread and Book Foundation is 80G certified. You will receive a tax exemption certificate for your donation which can be used for tax benefits."
    },
    {
        question: "How will my donation be used?",
        answer: "Your donation directly supports our programs - providing meals, education kits, uniforms, and tutoring to underprivileged children across India."
    },
    {
        question: "Can I volunteer with BBF?",
        answer: "Absolutely! We welcome volunteers for various activities including teaching, event organization, and community outreach. Contact us to learn more about volunteering opportunities."
    },
    {
        question: "How do I get updates on my impact?",
        answer: "After donating, you'll receive regular updates via email about how your contribution is making a difference. You can also follow us on social media for stories and updates."
    },
    {
        question: "Can I sponsor a child's education?",
        answer: "Yes, you can sponsor a child's complete education including uniforms, books, and tutoring. Contact us for details on our child sponsorship program."
    }
];

export default function FAQSection() {
    return (
        <section className="reveal-section py-20 md:py-28 ">
            <div className="container mx-auto px-6">
                {/* Header */}
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">FAQs</h2>
                        <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
                        <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto my-4">
                            Everything you need to know about donating and volunteering. Can&apos;t find the answer
                            you&apos;re looking for? Please{" "}
                            <Link href="/contact" className="text-primary hover:underline font-medium">
                                chat to our friendly team
                            </Link>.
                        </p>


                    </div>
                </ScrollReveal>

                {/* FAQ Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mb-16">
                    {faqs.map((faq, index) => (
                        <ScrollReveal key={index} delay={index * 0.1}>
                            <div className="text-left">
                                <h3 className="text-base md:text-lg font-semibold text-foreground mb-3">
                                    {faq.question}
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {faq.answer}
                                </p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

                {/* Still have questions banner */}
                <ScrollReveal>
                    <div className="bg-[#F5F5F5] rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
                        <div>
                            <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2">
                                Still have questions?
                            </h3>
                            <p className="text-gray-600 text-sm md:text-base">
                                Can&apos;t find the answer you&apos;re looking for? Please chat to our friendly team.
                            </p>
                        </div>
                        <Link
                            href="/contact"
                            className="bg-primary hover:bg-accent text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg whitespace-nowrap"
                        >
                            Get in touch
                        </Link>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
