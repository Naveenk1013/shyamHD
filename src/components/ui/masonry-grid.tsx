"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Lightbox } from "./lightbox";

interface Photo {
    id: number;
    src: string;
    alt: string;
    width?: number;
    height?: number;
}

interface MasonryGridProps {
    photos: Photo[];
}

export const MasonryGrid = ({ photos }: MasonryGridProps) => {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

    const openLightbox = (index: number) => {
        setCurrentPhotoIndex(index);
        setLightboxOpen(true);
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
    };

    const nextPhoto = () => {
        setCurrentPhotoIndex((prev) => (prev + 1) % photos.length);
    };

    const prevPhoto = () => {
        setCurrentPhotoIndex((prev) => (prev - 1 + photos.length) % photos.length);
    };

    return (
        <>
            <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4 p-4">
                {photos.map((photo, index) => (
                    <motion.div
                        key={photo.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.05 }}
                        className="break-inside-avoid relative group cursor-pointer overflow-hidden rounded-xl"
                        onClick={() => openLightbox(index)}
                    >
                        <div className="relative w-full">
                            {/* Aspect ratio placeholder hack or just let auto-height work with w-full */}
                            <Image
                                src={photo.src}
                                alt={photo.alt}
                                width={800}
                                height={600}
                                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                        </div>
                    </motion.div>
                ))}
            </div>

            <Lightbox
                currentImage={photos[currentPhotoIndex].src}
                isOpen={lightboxOpen}
                onClose={closeLightbox}
                onNext={nextPhoto}
                onPrev={prevPhoto}
            />
        </>
    );
};
