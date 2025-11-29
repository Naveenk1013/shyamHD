import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import KarishmaAlbum from "@/components/sections/KarishmaAlbum";
import LiveTelecast from "@/components/sections/LiveTelecast";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <Hero />
      <Services />
      <KarishmaAlbum />
      <LiveTelecast />
      <Contact />
      <Footer />
    </main>
  );
}
