"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AlertTriangle, Phone, Instagram, ArrowRight, CreditCard, Wallet, Building, X } from "lucide-react";
import PageHero from "@/components/PageHero";

export default function Donate() {
    const [showPopup, setShowPopup] = useState(true);
    const router = useRouter();

    useEffect(() => {
        if (showPopup) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [showPopup]);

    return (
        <div className="bg-gray-50 min-h-screen mt-[-80px] pt-32 pb-20 relative overflow-hidden">

            {/* --- DISABLED BACKGROUND CONTENT --- */}
            {/* We keep this blurred/disabled when popup is open. If closed, we might remove blur or keep it disabled as requested. 
                User said "keep disabled", so we keep pointer-events-none but maybe reduce blur? 
                Let's keep it as is, just hidden by default overlay. */}
            <div className={`container mx-auto px-6 max-w-4xl relative transition-all duration-500 ${showPopup ? 'opacity-50 blur-[1px]' : 'opacity-100 blur-0'} pointer-events-none select-none`}>

                <div className="text-center mb-10">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Make a Donation</h1>
                    <p className="text-gray-600">Your support changes lives.</p>
                </div>

                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">

                    {/* Amount Selection */}
                    <div className="mb-8">
                        <label className="block text-sm font-semibold text-gray-700 mb-4">Select Amount</label>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                            {["₹500", "₹1,000", "₹2,500", "₹5,000"].map((amt, i) => (
                                <div key={i} className={`py-3 px-4 rounded-lg border text-center font-medium ${i === 1 ? 'border-primary bg-primary/5 text-primary' : 'border-gray-200 text-gray-600'}`}>
                                    {amt}
                                </div>
                            ))}
                        </div>
                        <div className="relative">
                            <span className="absolute left-4 top-3.5 text-gray-500">₹</span>
                            <input type="text" value="Custom Amount" className="w-full pl-8 pr-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-gray-400" disabled />
                        </div>
                    </div>

                    {/* Personal Details */}
                    <div className="mb-8 grid md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                            <input type="text" value="John Doe" className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-gray-400" disabled />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                            <input type="email" value="john@example.com" className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-gray-400" disabled />
                        </div>
                    </div>

                    {/* Payment Method */}
                    <div className="mb-8">
                        <label className="block text-sm font-semibold text-gray-700 mb-4">Payment Method</label>
                        <div className="space-y-3">
                            <div className="flex items-center gap-4 p-4 rounded-lg border border-primary bg-primary/5">
                                <div className="w-5 h-5 rounded-full border-[5px] border-primary bg-white"></div>
                                <CreditCard size={20} className="text-primary" />
                                <span className="font-semibold text-gray-900">Credit / Debit Card</span>
                            </div>
                            <div className="flex items-center gap-4 p-4 rounded-lg border border-gray-200 opacity-60">
                                <div className="w-5 h-5 rounded-full border border-gray-300"></div>
                                <Wallet size={20} className="text-gray-500" />
                                <span className="font-medium text-gray-600">UPI / Wallets</span>
                            </div>
                            <div className="flex items-center gap-4 p-4 rounded-lg border border-gray-200 opacity-60">
                                <div className="w-5 h-5 rounded-full border border-gray-300"></div>
                                <Building size={20} className="text-gray-500" />
                                <span className="font-medium text-gray-600">Net Banking</span>
                            </div>
                        </div>
                    </div>

                    {/* Button */}
                    <button className="w-full bg-primary text-white font-bold py-4 rounded-xl shadow-lg opacity-50 cursor-not-allowed">
                        Proceed to Pay ₹1,000
                    </button>

                </div>
            </div>


            {/* --- OVERLAY MESSAGE --- */}
            {showPopup && (
                <div className="absolute inset-0 z-50 flex items-center justify-center p-4 bg-black/25 animate-in fade-in duration-300">
                    <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 max-w-lg w-full text-center border border-gray-100 relative animate-in zoom-in-95 duration-300">

                        {/* Close Button */}
                        <button
                            onClick={() => router.push("/")}
                            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors p-2 hover:bg-gray-100 rounded-full"
                        >
                            <X size={24} />
                        </button>

                        {/* Floating decoration */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg">
                            <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center text-red-500 animate-pulse">
                                <AlertTriangle size={32} />
                            </div>
                        </div>

                        <div className="mt-8">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Gateway Maintenance</h2>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                Our payment gateway is currently undergoing scheduled upgrades.
                                {/* <br /><span className="font-medium text-primary">You can still donate directly!</span> */}
                            </p>

                            {/* <div className="space-y-4 text-left">
                                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Call to Donate</p>
                                    <div className="space-y-3">
                                        <a href="tel:+917698324264" className="flex items-center justify-between group hover:text-primary transition-colors">
                                            <div className="flex items-center gap-3">
                                                <Phone size={18} className="text-gray-400 group-hover:text-primary" />
                                                <span className="font-semibold text-lg">+91 7698324264</span>
                                            </div>
                                            <ArrowRight size={18} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-primary" />
                                        </a>
                                        <div className="h-px bg-gray-200 w-full"></div>
                                        <a href="tel:+919645324269" className="flex items-center justify-between group hover:text-primary transition-colors">
                                            <div className="flex items-center gap-3">
                                                <Phone size={18} className="text-gray-400 group-hover:text-primary" />
                                                <span className="font-semibold text-lg">+91 9645324269</span>
                                            </div>
                                            <ArrowRight size={18} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-primary" />
                                        </a>
                                    </div>
                                </div>

                                <a
                                    href="https://www.instagram.com/breadandbookfoundation/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 p-4 rounded-xl border border-pink-100 bg-pink-50 text-pink-700 font-semibold hover:bg-pink-100 transition-colors"
                                >
                                    <Instagram size={20} />
                                    DM us on Instagram
                                </a>
                            </div> */}

                            <div className="mt-8 pt-6 border-t border-gray-100">
                                <Link
                                    href="/"
                                    className="text-gray-500 hover:text-primary font-medium transition-colors text-sm flex items-center justify-center gap-2"
                                >
                                    Return to Home
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}
