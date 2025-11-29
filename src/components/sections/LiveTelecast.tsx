"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function LiveTelecast() {
    const containerRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                videoRef.current,
                { clipPath: "circle(0% at 50% 50%)" },
                {
                    clipPath: "circle(150% at 50% 50%)",
                    ease: "none",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top top",
                        end: "+=1000",
                        scrub: 1,
                        pin: true,
                    },
                }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} id="live" className="relative h-screen w-full bg-royal-blue overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                <h2 className="text-4xl md:text-6xl font-serif font-bold text-luxury-white text-center opacity-100 mix-blend-difference">
                    Live Telecast
                    <span className="block text-lg font-sans font-normal mt-4 tracking-widest uppercase">
                        Experience the moment, wherever you are
                    </span>
                </h2>
            </div>

            <div
                ref={videoRef}
                className="absolute inset-0 w-full h-full z-0 bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1964&auto=format&fit=crop')",
                }}
            >
                {/* In production, use a <video> tag here */}
                <div className="absolute inset-0 bg-black/20" />
            </div>
        </section>
    );
}
