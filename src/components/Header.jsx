"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Heart } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about" },
        { name: "Programs", href: "/programs" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <header
            className={`fixed top-0 w-full h-20 flex items-center z-50 transition-all duration-300 ${scrolled ? "bg-background/80 backdrop-blur-md shadow-sm py-4" : "bg-transparent "
                }`}
        >
            <div className="w-full px-6 md:px-10 flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold text-primary flex items-center gap-2">
                    <img className="h-12" src="/images/logo.png" alt="Logo" />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`text-sm font-medium transition-colors hover:text-primary ${pathname === link.href ? "text-primary" : "text-foreground"
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="/contact"
                        className="bg-primary text-white px-6 py-2.5 rounded-full font-semibold hover:bg-accent transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
                    >
                        Donate <Heart size={16} fill="white" />
                    </Link>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-foreground"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-background border-b border-gray-100 shadow-lg p-6 flex flex-col gap-4 animate-in slide-in-from-top-5">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`text-lg font-medium ${pathname === link.href ? "text-primary" : "text-foreground"
                                }`}
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="/contact"
                        className="bg-primary text-white px-6 py-3 rounded-full font-semibold text-center hover:bg-accent transition-all"
                        onClick={() => setIsOpen(false)}
                    >
                        Donate Now
                    </Link>
                </div>
            )}
        </header>
    );
}
