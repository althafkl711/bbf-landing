import PageHero from "@/components/PageHero";
import Link from "next/link";

export const metadata = {
    title: "Terms of Service | Bread and Book Foundation",
    description: "Terms and conditions for using our website and services.",
};

export default function TermsOfService() {
    return (
        <div className="bg-background min-h-screen mt-[-80px]">
            {/* Hero Section */}
            <PageHero
                title="Terms of Service"
                subtitle="Please read these terms carefully before using our services."
            />

            <div className="container mx-auto px-6 py-16 max-w-4xl text-foreground">
                <p className="text-gray-600 mb-8 text-sm">Last Updated: January 18, 2026</p>

                <section className="mb-10">
                    <h2 className="text-xl md:text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
                        By accessing and using the Bread and Book Foundation website (&quot;Website&quot;) and services, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our Website or services.
                    </p>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                        We reserve the right to modify these terms at any time. Continued use of the Website following any changes constitutes your acceptance of the revised terms.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-xl md:text-2xl font-bold mb-4">2. About Our Organization</h2>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
                        Bread and Book Foundation is a registered non-profit charitable organization dedicated to uplifting India&apos;s most vulnerable communities by providing food and education to underprivileged children.
                    </p>
                    <ul className="list-disc pl-6 text-gray-700 text-sm md:text-base space-y-2">
                        <li>We are registered under the relevant charitable trust laws of India</li>
                        <li>All donations are eligible for tax exemption under Section 80G of the Income Tax Act</li>
                        <li>We maintain transparency in our operations and fund utilization</li>
                    </ul>
                </section>

                <section className="mb-10">
                    <h2 className="text-xl md:text-2xl font-bold mb-4">3. Donations</h2>

                    <h3 className="text-lg font-semibold mb-2 mt-6">3.1 General Donation Terms</h3>
                    <ul className="list-disc pl-6 text-gray-700 text-sm md:text-base space-y-2 mb-4">
                        <li>All donations made through our Website are voluntary contributions</li>
                        <li>Donations are non-refundable unless made in error (see our refund process below)</li>
                        <li>We accept donations via credit/debit cards, UPI, net banking, and other approved payment methods</li>
                        <li>All payment transactions are processed through secure, PCI-DSS compliant payment gateways</li>
                    </ul>

                    <h3 className="text-lg font-semibold mb-2 mt-6">3.2 Tax Exemption</h3>
                    <ul className="list-disc pl-6 text-gray-700 text-sm md:text-base space-y-2 mb-4">
                        <li>Donors are eligible for tax benefits under Section 80G of the Income Tax Act, 1961</li>
                        <li>80G tax exemption certificates will be issued for all eligible donations</li>
                        <li>Donors must provide valid PAN card details to receive 80G certificates</li>
                        <li>Certificates will be sent to the registered email address within 7-10 working days</li>
                    </ul>

                    <h3 className="text-lg font-semibold mb-2 mt-6">3.3 Refund Policy</h3>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
                        As a charitable organization, donations are generally non-refundable. However, in case of:
                    </p>
                    <ul className="list-disc pl-6 text-gray-700 text-sm md:text-base space-y-2">
                        <li><strong>Duplicate transactions:</strong> Full refund within 7-10 working days</li>
                        <li><strong>Technical errors:</strong> Full refund upon verification</li>
                        <li><strong>Other valid concerns:</strong> Contact us within 48 hours of the transaction</li>
                    </ul>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed mt-4">
                        To request a refund, please email us at info@breadandbookfoundation.org with your transaction details.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-xl md:text-2xl font-bold mb-4">4. Use of Website</h2>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">By using our Website, you agree to:</p>
                    <ul className="list-disc pl-6 text-gray-700 text-sm md:text-base space-y-2">
                        <li>Provide accurate and complete information when making donations or contacting us</li>
                        <li>Use the Website only for lawful purposes</li>
                        <li>Not engage in any activity that could harm or disrupt the Website</li>
                        <li>Not attempt to gain unauthorized access to any part of the Website</li>
                        <li>Not use automated systems or bots to access the Website</li>
                        <li>Respect the intellectual property rights of the organization</li>
                    </ul>
                </section>

                <section className="mb-10">
                    <h2 className="text-xl md:text-2xl font-bold mb-4">5. Intellectual Property</h2>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
                        All content on this Website, including but not limited to text, graphics, logos, images, videos, and software, is the property of Bread and Book Foundation or its content suppliers and is protected by copyright and intellectual property laws.
                    </p>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                        You may not reproduce, distribute, modify, or create derivative works from any content without our prior written consent, except for personal, non-commercial use.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-xl md:text-2xl font-bold mb-4">6. Third-Party Links</h2>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                        Our Website may contain links to third-party websites or services. We are not responsible for the content, privacy policies, or practices of any third-party sites. We encourage you to review the terms and privacy policies of any third-party sites you visit.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-xl md:text-2xl font-bold mb-4">7. Disclaimer of Warranties</h2>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
                        The Website and services are provided &quot;as is&quot; and &quot;as available&quot; without any warranties of any kind, either express or implied, including but not limited to:
                    </p>
                    <ul className="list-disc pl-6 text-gray-700 text-sm md:text-base space-y-2">
                        <li>Warranties of merchantability or fitness for a particular purpose</li>
                        <li>Warranties that the Website will be uninterrupted or error-free</li>
                        <li>Warranties regarding the accuracy or reliability of information on the Website</li>
                    </ul>
                </section>

                <section className="mb-10">
                    <h2 className="text-xl md:text-2xl font-bold mb-4">8. Limitation of Liability</h2>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                        To the maximum extent permitted by law, Bread and Book Foundation shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the Website or services, including but not limited to loss of data, revenue, or profits.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-xl md:text-2xl font-bold mb-4">9. Governing Law</h2>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                        These Terms of Service shall be governed by and construed in accordance with the laws of India. Any disputes arising from or related to these terms shall be subject to the exclusive jurisdiction of the courts in India.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-xl md:text-2xl font-bold mb-4">10. Contact Information</h2>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
                        If you have any questions or concerns about these Terms of Service, please contact us:
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
