import { MasonryGrid } from "@/components/ui/masonry-grid";
import Footer from "@/components/layout/Footer";

const galleryPhotos = [
    {
        id: 1,
        src: "https://images.pexels.com/photos/32025694/pexels-photo-32025694/free-photo-of-romantic-wedding-in-ancient-ruins.jpeg",
        alt: "Romantic wedding in ancient ruins",
    },
    {
        id: 2,
        src: "https://images.pexels.com/photos/31596551/pexels-photo-31596551/free-photo-of-winter-scene-with-lake-view-in-van-turkiye.jpeg",
        alt: "Winter scene with lake view",
    },
    {
        id: 3,
        src: "https://images.pexels.com/photos/31890053/pexels-photo-31890053/free-photo-of-moody-portrait-with-heart-shaped-light.jpeg",
        alt: "Moody portrait with heart shaped light",
    },
    {
        id: 4,
        src: "https://images.pexels.com/photos/19936068/pexels-photo-19936068/free-photo-of-women-sitting-on-hilltop-with-clouds-below.jpeg",
        alt: "Women sitting on hilltop",
    },
    {
        id: 5,
        src: "https://images.pexels.com/photos/20494995/pexels-photo-20494995/free-photo-of-head-of-peacock.jpeg",
        alt: "Head of peacock",
    },
    {
        id: 6,
        src: "https://images.pexels.com/photos/1542495/pexels-photo-1542495.jpeg",
        alt: "Wedding couple",
    },
    {
        id: 7,
        src: "https://images.pexels.com/photos/2959192/pexels-photo-2959192.jpeg",
        alt: "Indian Bride",
    },
    {
        id: 8,
        src: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg",
        alt: "Ceremony details",
    },
    {
        id: 9,
        src: "https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg",
        alt: "Wedding reception",
    },
];

export default function GalleryPage() {
    return (
        <main className="min-h-screen bg-black text-white overflow-hidden">
            {/* Cinematic Header */}
            <div className="relative h-[40vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/256737/pexels-photo-256737.jpeg')] bg-cover bg-center opacity-30 blur-sm scale-110" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
                <div className="relative z-10 text-center">
                    <h1 className="text-5xl md:text-7xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold via-white to-gold mb-4 animate-fade-in-up">
                        Visual Stories
                    </h1>
                    <p className="text-white/70 text-lg md:text-xl font-light tracking-widest uppercase animate-fade-in-up delay-200">
                        Capturing Moments, Creating Memories
                    </p>
                </div>
            </div>

            {/* Gallery Grid */}
            <div className="max-w-7xl mx-auto px-4 py-10">
                <MasonryGrid photos={galleryPhotos} />
            </div>

            <Footer />
        </main>
    );
}
