"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);
    const pathname = usePathname();
    const [activeSubmenu, setActiveSubmenu] = useState(null);

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
        {
            name: "What we do",
            href: "/programs",
            submenu: [
                { name: "Education & Empowerment", href: "/programs#education" },
                { name: "Basic Needs & Relief", href: "/programs#relief" },
                { name: "Health & Special Care", href: "/programs#health" },
                { name: "Large-Scale Solutions", href: "/programs#solutions" },
            ]
        },
        { name: "Gallery", href: "/gallery" },
        { name: "Volunteer", href: "/volunteer" },
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
                            <div key={link.name} className="relative group">
                                <Link
                                    href={link.href}
                                    className={`transition-all duration-300 hover:text-primary whitespace-nowrap flex items-center gap-1 ${isScrolled ? "text-sm" : "text-md"
                                        } ${pathname === link.href
                                            ? "text-primary font-bold"
                                            : "text-foreground font-medium"
                                        }`}
                                >
                                    {link.name}
                                    {link.submenu && (
                                        <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
                                    )}
                                </Link>

                                {/* Dropdown Menu */}
                                {link.submenu && (
                                    <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 overflow-hidden">
                                        <div className="py-2">
                                            {link.submenu.map((subLink) => (
                                                <Link
                                                    key={subLink.name}
                                                    href={subLink.href}
                                                    className="block px-4 py-3 text-sm text-gray-600 hover:bg-gray-50 hover:text-primary transition-colors"
                                                >
                                                    {subLink.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                        <Link
                            href="/donate"
                            className={`bg-primary text-white rounded-lg font-semibold hover:bg-accent transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 whitespace-nowrap ${isScrolled ? "px-5 py-2 text-sm" : "px-6 py-2.5"
                                }`}
                        >
                            Donate
                        </Link>
                    </nav>
                </div>
            </header>

            {/* Mobile Header - Island Style */}
            <header className="lg:hidden fixed top-0 w-full z-50 justify-center px-3 pt-3">
                <div
                    style={{
                        width: scrollProgress > 0.1 ? '100%' : '100%',
                        padding: `${12}px ${12}px`,
                        backgroundColor: `rgba(255, 255, 255, ${100})`,
                        borderRadius: `${14 - scrollProgress * 2}px`,
                        boxShadow: '0 20px 28px rgba(0, 0, 0, 0.2)',
                        transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                        margin: '0 auto',
                    }}
                    className="flex items-center justify-between border border-gray-200/50"
                >
                    {/* Logo */}
                    <Link href="/" className="text-2xl font-bold text-primary flex items-center gap-2">
                        <img
                            style={{
                                height: `${40}px`,
                                transition: 'height 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
                            }}
                            src="/images/logo.png"
                            alt="Logo"
                        />
                    </Link>

                    {/* Mobile Menu Button */}
                    <button
                        className="text-foreground p-2"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Nav Dropdown */}
                {isOpen && (
                    <div
                        style={{
                            width: scrollProgress > 0.1 ? '100%' : '100%',
                            margin: '0 auto',
                            marginTop: '8px',
                            borderRadius: '12px',
                            maxHeight: '80vh',
                            overflowY: 'auto'
                        }}
                        className="bg-white border border-gray-200/50 shadow-2xl p-6 flex flex-col gap-4 animate-in slide-in-from-top-2"
                    >
                        {navLinks.map((link) => (
                            <div key={link.name} className="flex flex-col">
                                <div className="flex items-center justify-between py-2">
                                    <Link
                                        href={link.href}
                                        className={`text-lg flex-grow ${pathname === link.href
                                            ? "text-primary font-bold"
                                            : "text-foreground font-medium"
                                            }`}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.name}
                                    </Link>

                                    {link.submenu && (
                                        <button
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setActiveSubmenu(activeSubmenu === link.name ? null : link.name);
                                            }}
                                            className="p-2 text-gray-500 hover:text-primary transition-colors"
                                        >
                                            <ChevronDown
                                                size={20}
                                                className={`transition-transform duration-300 ${activeSubmenu === link.name ? "rotate-180" : ""
                                                    }`}
                                            />
                                        </button>
                                    )}
                                </div>

                                {/* Mobile Submenu */}
                                {link.submenu && (
                                    <div
                                        className={`overflow-hidden transition-all duration-300 ease-in-out ${activeSubmenu === link.name ? "max-h-96 opacity-100 mb-4" : "max-h-0 opacity-0"
                                            }`}
                                    >
                                        <div className="flex flex-col gap-3 ml-4 border-l-2 border-primary/20 pl-4">
                                            {link.submenu.map((subLink) => (
                                                <Link
                                                    key={subLink.name}
                                                    href={subLink.href}
                                                    className="text-base text-gray-500 hover:text-primary transition-colors py-1"
                                                    onClick={() => setIsOpen(false)}
                                                >
                                                    {subLink.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                        <Link
                            href="/donate"
                            className="bg-primary text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-accent transition-all shadow-lg"
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

