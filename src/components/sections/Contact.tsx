"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";

import ShinyText from "@/components/reactbits/ShinyText";

export default function Contact() {
    const formRef = useRef<HTMLFormElement>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here (e.g., send email or API call)
        alert("Thank you for contacting us! We will get back to you soon.");
        if (formRef.current) formRef.current.reset();
    };

    return (
        <section id="contact" className="py-24 bg-luxury-white text-royal-blue relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-royal-blue/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-6xl font-serif font-bold mb-4"
                    >
                        <ShinyText text="Get in Touch" className="text-royal-blue" />
                    </motion.h2>
                    <p className="text-gray-600 max-w-2xl mx-auto font-sans tracking-wide">
                        Let&apos;s create something beautiful together. Reach out to us for bookings and inquiries.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100"
                    >
                        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-royal-blue focus:ring-1 focus:ring-royal-blue outline-none transition-colors"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-royal-blue focus:ring-1 focus:ring-royal-blue outline-none transition-colors"
                                    placeholder="your@email.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-royal-blue focus:ring-1 focus:ring-royal-blue outline-none transition-colors"
                                    placeholder="Tell us about your event..."
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full py-4 bg-royal-blue text-white font-bold rounded-lg hover:bg-blue-900 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300"
                            >
                                Send Message
                            </button>
                        </form>
                    </motion.div>

                    {/* Contact Info & Socials */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="space-y-10"
                    >
                        <div>
                            <h3 className="text-2xl font-serif font-bold text-royal-blue mb-4">Connect With Us</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Follow our journey and see our latest work on social media. We are active on Instagram and YouTube, sharing behind-the-scenes and our finest cinematic moments.
                            </p>
                        </div>

                        <div className="flex space-x-6">
                            <a href="#" className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-tr from-purple-600 to-pink-600 text-white text-3xl shadow-lg hover:scale-110 transition-transform duration-300">
                                <FaInstagram />
                            </a>
                            <a href="#" className="w-16 h-16 flex items-center justify-center rounded-full bg-red-600 text-white text-3xl shadow-lg hover:scale-110 transition-transform duration-300">
                                <FaYoutube />
                            </a>
                            <a href="#" className="w-16 h-16 flex items-center justify-center rounded-full bg-green-500 text-white text-3xl shadow-lg hover:scale-110 transition-transform duration-300">
                                <FaWhatsapp />
                            </a>
                        </div>

                        <div className="p-8 bg-royal-blue text-white rounded-2xl shadow-xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/20 rounded-full blur-2xl translate-x-1/2 -translate-y-1/2" />
                            <h4 className="text-xl font-bold mb-2">Studio Location</h4>
                            <p className="text-white/80 mb-1">
                                Dakshinwari Kitauli, P.O. - Marhaura
                            </p>
                            <p className="text-white/80 mb-4">
                                Saran District, Bihar
                            </p>
                            <p className="text-white/60 text-sm italic mb-4">
                                (स्थान - दक्षिणवारी किटौली, पो. - मढ़ौरा, सारण)
                            </p>
                            <div className="mt-6 pt-6 border-t border-white/10">
                                <p className="text-gold font-bold text-lg">7667958917, 8507374062</p>
                                <p className="text-white/80">Proprietor - Shyam Sundar Kumar</p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Blue Strip */}
                <div className="mt-20 p-6 bg-royal-blue text-white rounded-xl text-center shadow-lg">
                    <p className="text-lg md:text-xl font-serif">
                        &quot;Videography is available here for Weddings, Parties, and auspicious occasions.&quot;
                    </p>
                    <p className="text-base md:text-lg font-serif mt-2 text-gold">
                        &quot;हमारे यहाँ शादी विवाह, पार्टी एवं शुभ अवसरों पर वीडियोग्राफी की जाती है।&quot;
                    </p>
                </div>
            </div>
        </section>
    );
}
