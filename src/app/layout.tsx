import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "@/components/ui/SmoothScrolling";
import CustomCursor from "@/components/ui/CustomCursor";
import NoiseOverlay from "@/components/ui/NoiseOverlay";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shyam HD Videography | Capturing Your Most Beautiful Moments",
  description: "Premium wedding videography services. Cinematic, immersive, and unforgettable.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased bg-luxury-white text-gray-900 cursor-none`}
      >
        <SmoothScrolling>
          <CustomCursor />
          <NoiseOverlay />
          {children}
        </SmoothScrolling>
      </body>
    </html>
  );
}
