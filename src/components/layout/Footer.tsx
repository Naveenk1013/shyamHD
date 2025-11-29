export default function Footer() {
    return (
        <footer className="bg-black text-luxury-white py-20 px-10 border-t border-white/10 relative z-50">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start">
                <div className="mb-10 md:mb-0">
                    <h2 className="text-3xl font-serif font-bold mb-4 text-gold">Shyam HD Videography</h2>
                    <p className="text-white/60 max-w-sm font-sans mb-6">
                        Capturing the essence of your love story with cinematic excellence.
                    </p>
                    <div className="flex space-x-4">
                        <a href="#" className="text-white/60 hover:text-gold transition-colors">Instagram</a>
                        <a href="#" className="text-white/60 hover:text-gold transition-colors">YouTube</a>
                        <a href="#" className="text-white/60 hover:text-gold transition-colors">Facebook</a>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-10">
                    <div>
                        <h3 className="text-lg font-bold text-white mb-4">Services</h3>
                        <ul className="space-y-2 text-sm text-white/60 font-sans">
                            <li><a href="#services" className="hover:text-gold transition-colors">Wedding Films</a></li>
                            <li><a href="#services" className="hover:text-gold transition-colors">Pre-Wedding</a></li>
                            <li><a href="#services" className="hover:text-gold transition-colors">Karishma Album</a></li>
                            <li><a href="#services" className="hover:text-gold transition-colors">Live Telecast</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-white mb-4">Contact</h3>
                        <ul className="space-y-2 text-sm text-white/60 font-sans">
                            <li>+91 76679 58917</li>
                            <li>+91 85073 74062</li>
                            <li>Marhaura, Saran</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="border-t border-white/10 pt-8 text-center text-gray-400 mt-10">
                <p>&copy; {new Date().getFullYear()} Shyam HD Videography. All rights reserved.</p>
                <p className="text-sm mt-2 text-gold">Proprietor - Shyam Sundar Kumar (प्रो. - श्याम सुन्दर कुमार)</p>
                <p className="text-xs mt-4 text-white/30">
                    Designed and Managed by <a href="https://lancealot.in" target="_blank" rel="noopener noreferrer" className="hover:text-white/60 transition-colors">Lancealot (Lancealot.in)</a>
                </p>
            </div>
        </footer>
    );
}
