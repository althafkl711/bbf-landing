import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Heart } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#0F151E] pt-16 pb-8 border-t border-gray-800">
            <div className="container mx-auto px-6">
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
                            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
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
                            href="/contact"
                            className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-accent transition-all shadow-lg hover:shadow-xl w-full justify-center"
                        >
                            Donate Now <Heart size={16} fill="white" />
                        </Link>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>© {new Date().getFullYear()} Bread and Book Foundation. All rights reserved.</p>
                    <p className="mt-2 md:mt-0">Designed & Developed with ❤️</p>
                </div>
            </div>
        </footer>
    );
}
