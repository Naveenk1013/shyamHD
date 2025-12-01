"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";
import { IoMdClose, IoMdArrowBack, IoMdArrowForward } from "react-icons/io";

interface LightboxProps {
    currentImage: string | null;
    isOpen: boolean;
    onClose: () => void;
    onNext: () => void;
    onPrev: () => void;
}

export const Lightbox = ({
    currentImage,
    isOpen,
    onClose,
    onNext,
    onPrev,
}: LightboxProps) => {
    // Handle keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!isOpen) return;
            if (e.key === "Escape") onClose();
            if (e.key === "ArrowRight") onNext();
            if (e.key === "ArrowLeft") onPrev();
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isOpen, onClose, onNext, onPrev]);

    return (
        <AnimatePresence>
            {isOpen && currentImage && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm"
                    onClick={onClose}
                >
                    {/* Close Button */}
                    <button
                        className="absolute top-5 right-5 z-[110] p-2 text-white/70 hover:text-white transition-colors"
                        onClick={onClose}
                    >
                        <IoMdClose size={30} />
                    </button>

                    {/* Navigation Buttons */}
                    <button
                        className="absolute left-5 z-[110] p-4 text-white/70 hover:text-white transition-colors hidden md:block"
                        onClick={(e) => {
                            e.stopPropagation();
                            onPrev();
                        }}
                    >
                        <IoMdArrowBack size={40} />
                    </button>

                    <button
                        className="absolute right-5 z-[110] p-4 text-white/70 hover:text-white transition-colors hidden md:block"
                        onClick={(e) => {
                            e.stopPropagation();
                            onNext();
                        }}
                    >
                        <IoMdArrowForward size={40} />
                    </button>

                    {/* Image Container */}
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="relative w-full h-full max-w-7xl max-h-[90vh] p-4 flex items-center justify-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="relative w-full h-full">
                            <Image
                                src={currentImage}
                                alt="Gallery Preview"
                                fill
                                className="object-contain"
                                priority
                                quality={100}
                            />
                        </div>
                    </motion.div>

                    {/* Mobile Navigation Hints */}
                    <div className="absolute bottom-10 left-0 w-full text-center text-white/50 text-sm md:hidden pointer-events-none">
                        Swipe or tap sides to navigate
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
