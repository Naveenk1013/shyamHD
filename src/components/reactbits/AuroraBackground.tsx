"use client";
import React, { ReactNode } from "react";

interface AuroraBackgroundProps {
    children: ReactNode;
    className?: string;
}

export default function AuroraBackground({ children, className = "" }: AuroraBackgroundProps) {
    return (
        <div className={`relative w-full overflow-hidden bg-royal-blue ${className}`}>
            <div className="absolute inset-0 w-full h-full pointer-events-none">
                <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] animate-aurora opacity-100 mix-blend-screen">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,215,0,0.5),transparent_50%)]" />
                    <div className="absolute top-1/2 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,100,255,0.5),transparent_50%)]" />
                    <div className="absolute top-0 left-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,0,150,0.3),transparent_50%)]" />
                </div>
            </div>
            <div className="relative z-10">{children}</div>
        </div>
    );
}
