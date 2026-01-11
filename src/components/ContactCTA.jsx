"use client";

import Link from "next/link";

export default function ContactCTA() {
    return (
        <section className="container mx-auto px-6 my-12 ">
            <div className="bg-[#FFF6DC] rounded-2xl p-8 md:p-12 text-center flex flex-col items-center justify-center">
                {/* Avatar Group - Simulated with placeholder images or generic avatars */}
                <div className="flex -space-x-4 mb-6">
                    {/* Using standard img tags to avoid Next.js domain config for external placeholders. 
               In production these should be local assets. */}
                    <div className="w-14 h-14 rounded-full border-4 border-white overflow-hidden bg-gray-200">
                        <img src="https://ui-avatars.com/api/?name=Alex&background=c7d2fe&color=3730a3" alt="Support" className="w-full h-full object-cover" />
                    </div>
                    <div className="w-14 h-14 rounded-full border-4 border-white overflow-hidden bg-gray-200 z-10">
                        <img src="https://ui-avatars.com/api/?name=Sarah&background=fde68a&color=92400e" alt="Support" className="w-full h-full object-cover" />
                    </div>
                    <div className="w-14 h-14 rounded-full border-4 border-white overflow-hidden bg-gray-200">
                        <img src="https://ui-avatars.com/api/?name=Mike&background=bbf7d0&color=166534" alt="Support" className="w-full h-full object-cover" />
                    </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3">Still have questions?</h3>
                <p className="text-gray-600 mb-8 max-w-lg mx-auto">
                    Can’t find the answer you’re looking for? Please chat to our friendly team.
                </p>

                <Link
                    href="/contact"
                    className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#B45309] transition-colors shadow-sm"
                >
                    Get in Touch
                </Link>
            </div>
        </section>
    );
}
