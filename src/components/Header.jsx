"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Heart } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            // Calculate progress from 0 to 1 over 300px of scroll
            const progress = Math.min(window.scrollY / 300, 1);
            setScrollProgress(progress);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Who we are", href: "/about" },
        { name: "What we do", href: "/programs" },
        { name: "How you can help", href: "/contact" },
    ];

    // Calculate dynamic values based on scroll progress
    // Width: 95% -> 75% (20% reduction over scroll)
    const headerWidth = 95 - (scrollProgress * 20);
    // Logo height: 48px (h-12) -> 36px (h-9)
    const logoHeight = 48 - (scrollProgress * 12);
    // Padding: larger -> smaller
    const paddingX = 20 - (scrollProgress * 6); // 40px -> 24px
    const paddingY = 16 - (scrollProgress * 2); // 16px -> 12px
    // Gap between nav items: 32px -> 20px
    const navGap = 32 - (scrollProgress * 12);
    // Background opacity: 80% -> 95%
    const bgOpacity = 100;
    // Shadow intensity
    const shadowOpacity = scrollProgress * 0.25;
    // Border radius: 16px -> 12px
    const borderRadius = 16 - (scrollProgress * 4);

    const isScrolled = scrollProgress > 0.5;

    return (
        <>
            {/* Desktop Header - Island Style with Dynamic Width */}
            <header className="hidden lg:flex fixed top-0 w-full z-50 justify-center px-4 pt-4 ">
                <div
                    style={{
                        width: `${headerWidth}%`,
                        padding: `${paddingY}px ${paddingX}px`,
                        backgroundColor: `rgba(255, 255, 255, ${bgOpacity})`,
                        borderRadius: `${borderRadius}px`,
                        boxShadow: `0 ${4 + scrollProgress * 8}px ${12 + scrollProgress * 20}px rgba(0, 0, 0, ${0.05 + shadowOpacity})`,
                        transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                    }}
                    className="flex items-center justify-between border border-gray-200/50"
                >
                    {/* Logo */}
                    <Link href="/" className="text-2xl font-bold text-primary flex items-center gap-2">
                        <img
                            style={{
                                height: `${logoHeight}px`,
                                transition: 'height 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
                            }}
                            src="/images/logo.png"
                            alt="Logo"
                        />
                    </Link>

                    {/* Desktop Nav */}
                    <nav
                        style={{
                            gap: `${navGap}px`,
                            transition: 'gap 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
                        }}
                        className="flex items-center"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`transition-all duration-300 hover:text-primary whitespace-nowrap ${isScrolled ? "text-sm" : "text-md"
                                    } ${pathname === link.href
                                        ? "text-primary font-bold"
                                        : "text-foreground font-medium"
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="/contact"
                            className={`bg-primary text-white rounded-lg font-semibold hover:bg-accent transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 whitespace-nowrap ${isScrolled ? "px-5 py-2 text-sm" : "px-6 py-2.5"
                                }`}
                        >
                            Donate <Heart size={isScrolled ? 14 : 16} fill="white" />
                        </Link>
                    </nav>
                </div>
            </header>

            {/* Mobile Header - Full Width, No Island */}
            <header
                className={`lg:hidden fixed top-0 w-full z-50 transition-all duration-300 ${scrollProgress > 0.1
                    ? "bg-white  shadow-md"
                    : "bg-white"
                    }`}
            >
                <div className="w-full px-4 py-3 flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/" className="text-2xl font-bold text-primary flex items-center gap-2">
                        <img className="h-10" src="/images/logo.png" alt="Logo" />
                    </Link>

                    {/* Mobile Menu Button */}
                    <button
                        className="text-foreground p-2"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {/* Mobile Nav Dropdown */}
                {isOpen && (
                    <div className="absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-lg p-6 flex flex-col gap-4 animate-in slide-in-from-top-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`text-lg ${pathname === link.href
                                    ? "text-primary font-bold"
                                    : "text-foreground font-medium"
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
        </>
    );
}

