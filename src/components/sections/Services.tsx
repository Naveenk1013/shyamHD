"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import ShinyText from "@/components/reactbits/ShinyText";
import AuroraBackground from "@/components/reactbits/AuroraBackground";

const services = [
    {
        title: "Cinematic Wedding Films",
        subtitle: "शादी विवाह वीडियोग्राफी",
        description: "We craft your love story into a timeless masterpiece, capturing every emotion with cinematic grandeur.",
        image: "https://images.unsplash.com/photo-1511285560982-1351cdeb9821?q=80&w=1200&auto=format&fit=crop",
        color: "from-pink-600 to-purple-900",
    },
    {
        title: "Karishma Album Photography",
        subtitle: "करिश्मा एल्बम फोटोग्राफी",
        description: "Premium magazine-style wedding albums that preserve your memories in high-definition print.",
        image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop",
        color: "from-orange-500 to-red-900",
    },
    {
        title: "Live Telecast",
        subtitle: "लाईव टेलिकास्ट",
        description: "Live video mixing and display for your guests, ensuring no one misses a moment of the ceremony.",
        image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200&auto=format&fit=crop",
        color: "from-blue-500 to-indigo-900",
    },
    {
        title: "Pre-Wedding & Parties",
        subtitle: "प्री-वेडिंग और पार्टी",
        description: "Celebrate your journey before the big day with creative shoots and coverage for all auspicious occasions.",
        image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=1200&auto=format&fit=crop",
        color: "from-yellow-500 to-amber-900",
    },
];

export default function Services() {
    const containerRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            ScrollTrigger.batch(cardsRef.current, {
                onEnter: (batch) => {
                    gsap.to(batch, {
                        opacity: 1,
                        y: 0,
                        stagger: 0.2,
                        duration: 1,
                        ease: "power3.out",
                    });
                },
                start: "top 80%",
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="services" ref={containerRef} className="relative py-24 text-white overflow-hidden">
            <AuroraBackground className="absolute inset-0 z-0">{null}</AuroraBackground>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-serif font-bold mb-4">
                        <ShinyText text="Our Services" />
                    </h2>
                    <p className="text-gray-200 max-w-2xl mx-auto font-sans tracking-wide">
                        Tailored videography solutions to make your special day unforgettable.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            ref={(el) => {
                                if (el) cardsRef.current[index] = el;
                            }}
                            className="group relative h-[400px] rounded-2xl overflow-hidden shadow-2xl opacity-0 translate-y-20 cursor-pointer border border-white/10"
                        >
                            {/* Background Image */}
                            <div
                                className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                style={{ backgroundImage: `url(${service.image})` }}
                            />

                            {/* Gradient Overlay */}
                            <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-60 group-hover:opacity-80 transition-opacity duration-500`} />

                            {/* Content */}
                            <div className="absolute inset-0 p-10 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <h3 className="text-3xl font-serif font-bold text-white mb-1 drop-shadow-lg">{service.title}</h3>
                                <h4 className="text-xl font-serif text-gold mb-3 drop-shadow-md">{service.subtitle}</h4>
                                <p className="text-white/90 font-sans leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
