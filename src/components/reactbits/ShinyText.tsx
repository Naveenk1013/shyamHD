"use client";

interface ShinyTextProps {
    text: string;
    className?: string;
}

export default function ShinyText({ text, className = "" }: ShinyTextProps) {
    return (
        <span
            className={`relative inline-block bg-[linear-gradient(110deg,#939393,45%,#1e2631,55%,#939393)] bg-[length:200%_100%] bg-clip-text text-transparent animate-shine ${className}`}
            style={{
                backgroundImage: 'linear-gradient(110deg, #FFD700 45%, #FFF 55%, #FFD700)', // Gold to White shine
            }}
        >
            {text}
        </span>
    );
}
