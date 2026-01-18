"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";

export default function VolunteerFormSection() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        city: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1000));

        setIsSubmitting(false);
        setSubmitted(true);
        setFormData({ name: "", email: "", phone: "", city: "", message: "" });
    };

    return (
        <section className="py-20 md:py-28 bg-white">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <ScrollReveal>
                    <div className="text-center mb-12 md:mb-16">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                            Become a Volunteer
                        </h2>
                        <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
                    {/* Left Content - Quote */}
                    <ScrollReveal>
                        <div className="text-center lg:text-left">
                            <div className="mb-8">
                                <span className="text-6xl md:text-8xl text-primary/20 font-serif">&ldquo;</span>
                            </div>
                            <h3
                                className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground leading-relaxed mb-6"
                                style={{ fontFamily: '"Gloria Hallelujah", cursive' }}
                            >
                                The best way to find yourself is to lose yourself in the service of others.
                            </h3>
                            <p className="text-gray-500 text-sm md:text-base italic">— Mahatma Gandhi</p>

                            <div className="mt-10 pt-8 border-t border-gray-100">
                                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                    Join our community of passionate volunteers who are making a real difference
                                    in children&apos;s lives. Your time and skills can help us nourish bodies
                                    and enlighten minds across India.
                                </p>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Right Content - Form */}
                    <ScrollReveal delay={0.2}>
                        <div className=" rounded-2xl p-8 md:p-10 shadow-sm">
                            {submitted ? (
                                <div className="text-center py-10">
                                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-foreground mb-2">Thank You!</h3>
                                    <p className="text-gray-600 text-sm md:text-base">
                                        We&apos;ve received your application. Our team will contact you soon.
                                    </p>
                                    <button
                                        onClick={() => setSubmitted(false)}
                                        className="mt-6 text-primary font-medium hover:underline"
                                    >
                                        Submit another response
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Full Name <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm md:text-base"
                                            placeholder="Enter your full name"
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Email <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm md:text-base"
                                                placeholder="your@email.com"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Phone <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm md:text-base"
                                                placeholder="+91 98765 43210"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            City <span className="text-red-500">*</span>
                                        </label>
                                        <div className="relative">
                                            <select
                                                name="city"
                                                value={formData.city}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 pr-10 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm md:text-base bg-white appearance-none cursor-pointer"
                                            >
                                                <option value="">Select your city</option>
                                                <option value="Agra">Agra</option>
                                                <option value="Ahmedabad">Ahmedabad</option>
                                                <option value="Ajmer">Ajmer</option>
                                                <option value="Aligarh">Aligarh</option>
                                                <option value="Allahabad">Allahabad (Prayagraj)</option>
                                                <option value="Amritsar">Amritsar</option>
                                                <option value="Aurangabad">Aurangabad</option>
                                                <option value="Bangalore">Bangalore</option>
                                                <option value="Bareilly">Bareilly</option>
                                                <option value="Bhopal">Bhopal</option>
                                                <option value="Bhubaneswar">Bhubaneswar</option>
                                                <option value="Chandigarh">Chandigarh</option>
                                                <option value="Chennai">Chennai</option>
                                                <option value="Coimbatore">Coimbatore</option>
                                                <option value="Cuttack">Cuttack</option>
                                                <option value="Dehradun">Dehradun</option>
                                                <option value="Delhi">Delhi</option>
                                                <option value="Dhanbad">Dhanbad</option>
                                                <option value="Faridabad">Faridabad</option>
                                                <option value="Ghaziabad">Ghaziabad</option>
                                                <option value="Goa">Goa</option>
                                                <option value="Gorakhpur">Gorakhpur</option>
                                                <option value="Guntur">Guntur</option>
                                                <option value="Gurgaon">Gurgaon</option>
                                                <option value="Guwahati">Guwahati</option>
                                                <option value="Gwalior">Gwalior</option>
                                                <option value="Hubli">Hubli</option>
                                                <option value="Hyderabad">Hyderabad</option>
                                                <option value="Indore">Indore</option>
                                                <option value="Jabalpur">Jabalpur</option>
                                                <option value="Jaipur">Jaipur</option>
                                                <option value="Jalandhar">Jalandhar</option>
                                                <option value="Jammu">Jammu</option>
                                                <option value="Jamshedpur">Jamshedpur</option>
                                                <option value="Jodhpur">Jodhpur</option>
                                                <option value="Kanpur">Kanpur</option>
                                                <option value="Kochi">Kochi</option>
                                                <option value="Kolkata">Kolkata</option>
                                                <option value="Kota">Kota</option>
                                                <option value="Kozhikode">Kozhikode</option>
                                                <option value="Lucknow">Lucknow</option>
                                                <option value="Ludhiana">Ludhiana</option>
                                                <option value="Madurai">Madurai</option>
                                                <option value="Mangalore">Mangalore</option>
                                                <option value="Meerut">Meerut</option>
                                                <option value="Mumbai">Mumbai</option>
                                                <option value="Mysore">Mysore</option>
                                                <option value="Nagpur">Nagpur</option>
                                                <option value="Nashik">Nashik</option>
                                                <option value="Navi Mumbai">Navi Mumbai</option>
                                                <option value="Noida">Noida</option>
                                                <option value="Patna">Patna</option>
                                                <option value="Pondicherry">Pondicherry</option>
                                                <option value="Pune">Pune</option>
                                                <option value="Raipur">Raipur</option>
                                                <option value="Rajkot">Rajkot</option>
                                                <option value="Ranchi">Ranchi</option>
                                                <option value="Salem">Salem</option>
                                                <option value="Shimla">Shimla</option>
                                                <option value="Siliguri">Siliguri</option>
                                                <option value="Srinagar">Srinagar</option>
                                                <option value="Surat">Surat</option>
                                                <option value="Thane">Thane</option>
                                                <option value="Thiruvananthapuram">Thiruvananthapuram</option>
                                                <option value="Thrissur">Thrissur</option>
                                                <option value="Tiruchirappalli">Tiruchirappalli</option>
                                                <option value="Tirupati">Tirupati</option>
                                                <option value="Udaipur">Udaipur</option>
                                                <option value="Vadodara">Vadodara</option>
                                                <option value="Varanasi">Varanasi</option>
                                                <option value="Vijayawada">Vijayawada</option>
                                                <option value="Visakhapatnam">Visakhapatnam</option>
                                                <option value="Warangal">Warangal</option>
                                                <option value="Other">Other</option>
                                            </select>
                                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Why do you want to volunteer? <span className="text-red-500">*</span>
                                        </label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={4}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none text-sm md:text-base"
                                            placeholder="Share your motivation and how you'd like to contribute..."
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-primary text-white font-semibold py-3 px-6 rounded-lg hover:bg-accent transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-sm md:text-base"
                                    >
                                        {isSubmitting ? "Submitting..." : "Join as Volunteer"}
                                    </button>
                                </form>
                            )}
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
