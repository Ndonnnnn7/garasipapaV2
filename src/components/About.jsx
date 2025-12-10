import React, { useEffect } from "react";
import { ArrowUpRight, MapPin, Target, Zap } from "lucide-react";

// --- CUSTOM FONTS INJECTION ---
// Kita menyuntikkan font Google agar langsung aktif tanpa perlu setup di index.html
// Font Utama: 'Anton' (Industrial/Bold)
// Font Body: 'Space Grotesk' (Modern/Clean)
// Font Aksen: 'JetBrains Mono' (Technical)

const About = () => {
  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Anton&family=JetBrains+Mono:wght@400;700&family=Space+Grotesk:wght@300;400;600&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#050505] text-[#e0e0e0] overflow-x-hidden selection:bg-red-600 selection:text-white">
      {/* --- NOISE OVERLAY (Memberi tekstur 'raw') --- */}
      <div
        className="fixed inset-0 opacity-[0.03] pointer-events-none z-50 mix-blend-overlay"
        style={{
          backgroundImage: `url("https://grainy-gradients.vercel.app/noise.svg")`,
        }}
      ></div>

      {/* --- NAVBAR SPACER --- */}
      <div className="h-24"></div>

      {/* --- HERO SECTION: TYPOGRAPHIC CHAOS --- */}
      <section className="px-4 md:px-12 pt-12 pb-24 border-b border-white/10">
        <div className="max-w-8xl mx-auto">
          {/* Top Label */}
          <div className="flex justify-between items-end mb-4 font-mono text-xs text-gray-500 uppercase tracking-tighter">
            <span>// Est. 2024</span>
            <span>Malang — East Java</span>
          </div>

          {/* Massive Heading */}
          <h1 className="font-['Anton'] text-[15vw] leading-[0.85] uppercase text-white mix-blend-difference">
            Garasi
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-400 to-gray-900">
              Papa.
            </span>
          </h1>

          {/* Description Offset */}
          <div className="flex flex-col md:flex-row justify-end mt-12 gap-12">
            <div className="md:w-1/3">
              <p className="font-['Space_Grotesk'] text-xl md:text-2xl leading-relaxed text-gray-300">
                Kami tidak membangun bengkel. Kami membangun{" "}
                <span className="text-white border-b border-red-600">
                  kultur
                </span>
                . Titik temu antara oli mesin, aspal panas, dan estetika
                jalanan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- VISUAL MANIFESTO (Split Layout) --- */}
      <section className="grid grid-cols-1 md:grid-cols-2 min-h-screen border-b border-white/10">
        {/* Left: Sticky Text */}
        <div className="p-8 md:p-16 border-b md:border-b-0 md:border-r border-white/10 flex flex-col justify-between">
          <div>
            <span className="font-mono text-red-500 text-sm mb-4 block animate-pulse">
              ● THE MANIFESTO
            </span>
            <h2 className="font-['Anton'] text-6xl md:text-8xl mb-8 uppercase">
              Raw Power. <br />
              Fine Threads.
            </h2>
            <p className="font-['Space_Grotesk'] text-gray-400 max-w-md text-lg">
              Mobil adalah ekstensi jiwa, dan pakaian adalah pernyataan sikap.
              Di GarasiPapa, kami menghapus batas antara <i>automotive parts</i>{" "}
              dan <i>streetwear</i>.
            </p>
          </div>

          <div className="mt-12 space-y-4 font-mono text-sm">
            <div className="flex items-center gap-4 text-gray-500 group cursor-pointer hover:text-white transition-colors">
              <span>01</span>
              <span className="h-[1px] w-8 bg-gray-700 group-hover:bg-white transition-all"></span>
              <span>PERFORMANCE PARTS</span>
            </div>
            <div className="flex items-center gap-4 text-gray-500 group cursor-pointer hover:text-white transition-colors">
              <span>02</span>
              <span className="h-[1px] w-8 bg-gray-700 group-hover:bg-white transition-all"></span>
              <span>LIMITED APPAREL</span>
            </div>
            <div className="flex items-center gap-4 text-gray-500 group cursor-pointer hover:text-white transition-colors">
              <span>03</span>
              <span className="h-[1px] w-8 bg-gray-700 group-hover:bg-white transition-all"></span>
              <span>COMMUNITY EVENTS</span>
            </div>
          </div>
        </div>

        {/* Right: Image Collage */}
        <div className="relative h-[60vh] md:h-auto overflow-hidden group">
          <img
            src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=2000&auto=format&fit=crop"
            alt="Garage Aesthetic"
            className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-700"
          />
          {/* Overlay Text */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent flex flex-col justify-end p-8">
            <div className="border border-white/20 bg-black/50 backdrop-blur-md p-6 max-w-sm">
              <Zap className="text-yellow-500 mb-2 w-6 h-6" />
              <p className="font-['Space_Grotesk'] text-sm italic text-gray-300">
                "We only sell what we ride. If it's not good enough for our
                cars, it's not good enough for yours."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- RUNNING TEXT MARQUEE --- */}
      <div className="py-4 bg-red-600 text-black overflow-hidden whitespace-nowrap border-y border-white/10">
        <div className="animate-marquee inline-block font-['Anton'] text-2xl uppercase tracking-wide">
          support your local garage • malang city pride • built for speed •
          styled for streets • support your local garage • malang city pride •
        </div>
      </div>

      {/* --- CSS FOR MARQUEE ANIMATION --- */}
      <style>{`
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

export default About;
