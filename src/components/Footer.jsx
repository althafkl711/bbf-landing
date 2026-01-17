import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Heart, ArrowRight } from "lucide-react";

export default function Footer() {
    return (
        <footer className="h-[100vh] sticky-footer bg-[#0F151E]">
            {/* Donate Now Section - Inside Footer */}
            <div className="relative bg-gradient-to-br from-[#1a2332] via-[#0F151E] to-[#0a0f15] py-20 md:py-28 overflow-hidden">
                {/* Background decorative elements */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-10 left-10 w-40 h-40 border border-primary rounded-full" />
                    <div className="absolute top-1/2 right-10 w-24 h-24 border border-secondary rounded-full" />
                    <div className="absolute bottom-10 left-1/3 w-32 h-32 border border-primary rounded-full" />
                </div>

                <div className="relative container mx-auto px-6 text-center">


                    {/* Heading */}
                    {/* <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                        Make a Difference <br />
                        <span className="text-secondary">Today</span>
                    </h2> */}

                    {/* Description */}
                    {/* <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Your generous contribution can provide the meal that nourishes a child&apos;s body
                        and the book that feeds their mind.
                    </p> */}


                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                        <Link
                            href="/donate"
                            className="inline-flex items-center justify-center gap-2 bg-primary text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-accent transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-primary/30 hover:scale-105 group"
                        >
                            Donate Now
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-gray-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:border-white hover:bg-white/5 transition-all duration-300"
                        >
                            Contact Us
                        </Link>
                    </div>

                    {/* Trust Badges */}
                    <div className="flex flex-wrap justify-center gap-6 text-gray-400 text-sm">
                        <span className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-green-500 rounded-full" />
                            80G Certified
                        </span>
                        <span className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-green-500 rounded-full" />
                            100% Transparent
                        </span>
                        <span className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-green-500 rounded-full" />
                            Secure Payment
                        </span>
                    </div>
                </div>
            </div>



            {/* Footer Links Section */}
            <div className="container w-[100%] m-0 px-6 pt-16 pb-8 bg-[#0F151E]">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand Column */}
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                            <img className="h-16" src="/images/logo-white.svg" alt="Bread & Book Foundation" />
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            Nourishing children&apos;s lives through food and education. Building brighter futures, one meal and one book at a time.
                        </p>
                        <div className="flex gap-4">
                            <a href="/contact" className="text-gray-400 hover:text-primary transition-colors">
                                <Facebook size={20} />
                            </a>
                            <a href="/contact" className="text-gray-400 hover:text-primary transition-colors">
                                <Twitter size={20} />
                            </a>
                            <a href="https://www.instagram.com/breadandbookfoundation/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                                <Instagram size={20} />
                            </a>
                            <a href="/contact" className="text-gray-400 hover:text-primary transition-colors">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-bold text-white mb-6">Quick Links</h3>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link href="/programs" className="hover:text-primary transition-colors">Our Programs</Link></li>
                            <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
                            <li><Link href="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="font-bold text-white mb-6">Legal</h3>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li><Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/refund-policy" className="hover:text-primary transition-colors">Refund Policy</Link></li>
                            <li><Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter / CTA */}
                    <div>
                        <h3 className="font-bold text-white mb-6">Support Us</h3>
                        <p className="text-gray-400 text-sm mb-6">
                            Your contribution can change a child&apos;s life today.
                        </p>
                        <Link
                            href="/donate"
                            className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-accent transition-all shadow-lg hover:shadow-xl w-full justify-center"
                        >
                            Donate Now <Heart size={16} fill="white" />
                        </Link>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>© {new Date().getFullYear()} Bread and Book Foundation. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
