"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "@/components/reactbits/SplitText";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to(containerRef.current, {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                },
                y: 200, // Parallax effect
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative h-screen w-full overflow-hidden bg-black">
            {/* Background Image */}
            <div
                className="absolute inset-0 w-full h-full bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url('https://res.cloudinary.com/dro6n6co1/image/upload/v1764425078/Move_Over_Wedding_Pictures_Professionally_Shot_Gifs_Are_The_New_Trend_fu2ovj.gif?q=80&w=1974&auto=format&fit=crop')",
                }}
            >
                <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
                <div ref={textRef} className="max-w-5xl mx-auto">
                    <h1 className="text-5xl md:text-8xl font-serif font-bold text-luxury-white mb-6 drop-shadow-lg leading-tight">
                        <SplitText text="Shyam HD" className="justify-center flex-wrap" delay={5} />
                    </h1>
                    <h2 className="text-2xl md:text-4xl font-serif font-bold text-gold mb-8 drop-shadow-md">
                        श्याम HD वीडियोग्राफी
                    </h2>
                    <p className="text-lg md:text-2xl font-sans text-gray-200 tracking-widest uppercase opacity-0 animate-[fadeIn_1s_ease-out_1.5s_forwards]">
                        Capturing Your Most Beautiful Moments
                    </p>
                </div>
            </div>
        </section>
    );
}
