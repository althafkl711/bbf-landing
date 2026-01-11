export const metadata = {
    title: "Privacy Policy | Bread and Book Foundation",
    description: "Our commitment to protecting your privacy.",
};

export default function PrivacyPolicy() {
    return (
        <div className="bg-white min-h-screen py-20">
            <div className="container mx-auto px-6 max-w-4xl text-foreground">
                <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
                <p className="text-gray-600 mb-8">Last Updated: {new Date().toLocaleDateString()}</p>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Bread and Book Foundation (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy.
                        This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website
                        or make a donation.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>
                    <p className="text-gray-700 leading-relaxed mb-2">We may collect personal information such as:</p>
                    <ul className="list-disc pl-6 text-gray-700 space-y-2">
                        <li>Name and contact details (email, phone number).</li>
                        <li>Donation history and payment information (processed securely by third-party processors).</li>
                        <li>Information you provide when communicating with us.</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
                    <p className="text-gray-700 leading-relaxed mb-2">We use your information to:</p>
                    <ul className="list-disc pl-6 text-gray-700 space-y-2">
                        <li>Process donations and issue receipts.</li>
                        <li>Communicate with you about our programs and impact.</li>
                        <li>Comply with legal obligations.</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">4. Data Security</h2>
                    <p className="text-gray-700 leading-relaxed">
                        We implement appropriate security measures to protect your personal information.
                        However, please note that no method of transmission over the Internet is 100% secure.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">5. Contact Us</h2>
                    <p className="text-gray-700 leading-relaxed">
                        If you have any questions about this Privacy Policy, please contact us at:
                        <br />
                        <strong>Email:</strong> info@breadandbookfoundation.org
                    </p>
                </section>
            </div>
        </div>
    );
}
