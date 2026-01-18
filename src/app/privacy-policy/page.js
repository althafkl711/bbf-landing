import PageHero from "@/components/PageHero";
import Link from "next/link";

export const metadata = {
    title: "Privacy Policy | Bread and Book Foundation",
    description: "Our commitment to protecting your privacy and personal information.",
};

export default function PrivacyPolicy() {
    return (
        <div className="bg-background min-h-screen mt-[-80px]">
            {/* Hero Section */}
            <PageHero
                title="Privacy Policy"
                subtitle="Our commitment to protecting your privacy."
            />

            <div className="container mx-auto px-6 py-16 max-w-4xl text-foreground">
                <p className="text-gray-600 mb-8 text-sm">Last Updated: January 18, 2026</p>

                <section className="mb-10">
                    <h2 className="text-xl md:text-2xl font-bold mb-4">1. Introduction</h2>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
                        Bread and Book Foundation (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy and personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, make a donation, or interact with our services.
                    </p>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                        By using our website or services, you consent to the data practices described in this policy. If you do not agree with the terms of this policy, please do not access our website or use our services.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-xl md:text-2xl font-bold mb-4">2. Information We Collect</h2>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">We may collect the following types of information:</p>

                    <h3 className="text-lg font-semibold mb-2 mt-6">Personal Information</h3>
                    <ul className="list-disc pl-6 text-gray-700 text-sm md:text-base space-y-2 mb-4">
                        <li>Name, email address, phone number, and mailing address</li>
                        <li>Payment information (credit/debit card details, UPI, net banking) - processed securely by third-party payment processors</li>
                        <li>PAN card details (for tax exemption certificates under 80G)</li>
                        <li>Communication preferences and history</li>
                    </ul>

                    <h3 className="text-lg font-semibold mb-2 mt-6">Automatically Collected Information</h3>
                    <ul className="list-disc pl-6 text-gray-700 text-sm md:text-base space-y-2">
                        <li>Device information (browser type, operating system, device type)</li>
                        <li>IP address and approximate location</li>
                        <li>Website usage data (pages visited, time spent, referral source)</li>
                        <li>Cookies and similar tracking technologies</li>
                    </ul>
                </section>

                <section className="mb-10">
                    <h2 className="text-xl md:text-2xl font-bold mb-4">3. How We Use Your Information</h2>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">We use the information we collect for the following purposes:</p>
                    <ul className="list-disc pl-6 text-gray-700 text-sm md:text-base space-y-2">
                        <li>Process donations and issue tax exemption receipts (80G certificates)</li>
                        <li>Send donation confirmations and transaction updates</li>
                        <li>Communicate about our programs, impact stories, and upcoming initiatives</li>
                        <li>Respond to your inquiries and provide support</li>
                        <li>Improve our website, services, and donor experience</li>
                        <li>Comply with legal and regulatory requirements</li>
                        <li>Prevent fraud and ensure the security of our platform</li>
                    </ul>
                </section>

                <section className="mb-10">
                    <h2 className="text-xl md:text-2xl font-bold mb-4">4. Information Sharing and Disclosure</h2>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
                        We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
                    </p>
                    <ul className="list-disc pl-6 text-gray-700 text-sm md:text-base space-y-2">
                        <li><strong>Payment Processors:</strong> To process your donations securely (e.g., Razorpay, PayU)</li>
                        <li><strong>Service Providers:</strong> Third-party vendors who assist with email communications, analytics, or website hosting</li>
                        <li><strong>Legal Requirements:</strong> When required by law, court order, or government authority</li>
                        <li><strong>Protection of Rights:</strong> To protect the rights, safety, and property of our organization and users</li>
                    </ul>
                </section>

                <section className="mb-10">
                    <h2 className="text-xl md:text-2xl font-bold mb-4">5. Data Security</h2>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
                        We implement appropriate technical and organizational security measures to protect your personal information, including:
                    </p>
                    <ul className="list-disc pl-6 text-gray-700 text-sm md:text-base space-y-2 mb-4">
                        <li>SSL/TLS encryption for all data transmission</li>
                        <li>Secure payment processing through PCI-DSS compliant providers</li>
                        <li>Regular security audits and updates</li>
                        <li>Access controls and authentication measures</li>
                    </ul>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                        However, please note that no method of electronic transmission or storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-xl md:text-2xl font-bold mb-4">6. Cookies and Tracking Technologies</h2>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
                        We use cookies and similar technologies to enhance your browsing experience, analyze website traffic, and understand how you interact with our website. You can control cookie preferences through your browser settings.
                    </p>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                        We may use third-party analytics services (such as Google Analytics) to collect and analyze usage data. These services may use cookies to track your interactions with our website.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-xl md:text-2xl font-bold mb-4">7. Your Rights</h2>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">You have the following rights regarding your personal information:</p>
                    <ul className="list-disc pl-6 text-gray-700 text-sm md:text-base space-y-2">
                        <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                        <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                        <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal retention requirements)</li>
                        <li><strong>Opt-out:</strong> Unsubscribe from marketing communications at any time</li>
                    </ul>
                </section>

                <section className="mb-10">
                    <h2 className="text-xl md:text-2xl font-bold mb-4">8. Children&apos;s Privacy</h2>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                        Our website is not intended for children under 18 years of age. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-xl md:text-2xl font-bold mb-4">9. Changes to This Policy</h2>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                        We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated &quot;Last Updated&quot; date. We encourage you to review this policy periodically.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-xl md:text-2xl font-bold mb-4">10. Contact Us</h2>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
                        If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
                    </p>
                    <div className="bg-gray-50 rounded-lg p-6 text-sm md:text-base">
                        <p className="text-gray-700 mb-2"><strong>Bread and Book Foundation</strong></p>
                        <p className="text-gray-700 mb-2"><strong>Email:</strong> info@breadandbookfoundation.org</p>
                        <p className="text-gray-700"><strong>Website:</strong> <Link href="/contact" className="text-primary hover:underline">Contact Us</Link></p>
                    </div>
                </section>
            </div>
        </div>
    );
}
