"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const albumImages = [
    "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1520854221256-17451cc330e7?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1522673607200-1645062cd958?q=80&w=1200&auto=format&fit=crop",
];

export default function KarishmaAlbum() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const totalWidth = sectionRef.current?.scrollWidth || 0;
            const windowWidth = window.innerWidth;
            const xMovement = -(totalWidth - windowWidth);

            gsap.fromTo(
                sectionRef.current,
                { x: 0 },
                {
                    x: xMovement,
                    ease: "none",
                    scrollTrigger: {
                        trigger: triggerRef.current,
                        start: "top top",
                        end: "+=6000", // Slower scroll
                        scrub: 1,
                        pin: true,
                        anticipatePin: 1,
                    },
                }
            );
        }, triggerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="album" ref={triggerRef} className="overflow-hidden bg-gradient-to-b from-black to-royal-blue text-luxury-white">
            <div className="py-10 px-6 absolute top-0 left-0 z-10">
                <h2 className="text-4xl md:text-6xl font-serif font-bold text-gold">Karishma Album</h2>
                <p className="text-sm md:text-base font-sans tracking-widest uppercase mt-2">
                    A Journey Through Moments
                </p>
            </div>
            <div ref={sectionRef} className="flex h-screen w-fit items-center px-20 space-x-20">
                {albumImages.map((src, index) => (
                    <div
                        key={index}
                        className="relative w-[80vw] md:w-[60vw] h-[60vh] md:h-[70vh] flex-shrink-0 overflow-hidden rounded-lg shadow-2xl transform transition-transform hover:scale-105 duration-500"
                    >
                        <div
                            className="w-full h-full bg-cover bg-center"
                            style={{ backgroundImage: `url(${src})` }}
                        />
                        <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent">
                            <span className="text-4xl font-serif font-bold text-white/20">0{index + 1}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
