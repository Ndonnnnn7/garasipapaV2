import React from "react";
import { ArrowUpRight, ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <div
      id="home"
      className="relative bg-[#050505] min-h-screen w-full overflow-hidden font-sans text-white selection:bg-white selection:text-black"
    >
      {/* --- CSS untuk Animasi Marquee & Custom Cursor --- */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>

      {/* --- Background Noise --- */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] pointer-events-none z-0"></div>

      {/* --- Structural Grid Lines (Memberikan kesan rapi & teknikal) --- */}
      <div className="absolute inset-0 z-0 pointer-events-none flex justify-between px-4 sm:px-12 max-w-[1600px] mx-auto opacity-10">
        <div className="w-px h-full bg-white"></div>
        <div className="w-px h-full bg-white hidden md:block"></div>
        <div className="w-px h-full bg-white hidden lg:block"></div>
        <div className="w-px h-full bg-white"></div>
      </div>

      {/* --- Main Content Container --- */}
      <div className="relative z-10 pt-40 pb-10 px-4 sm:px-12 max-w-[1600px] mx-auto flex flex-col h-full justify-between min-h-screen">
        {/* 1. Header Section: Judul Masif & Deskripsi Kecil */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 mb-16 border-b border-white/10 pb-12">
          {/* Big Typography */}
          <div className="relative">
            <h1 className="text-[14vw] lg:text-[9rem] leading-[0.85] font-black tracking-tighter uppercase mix-blend-difference">
              Fashion &
              <span
                className="block text-transparent bg-clip-text bg-gradient-to-b from-white/10 to-transparent"
                style={{ WebkitTextStroke: "2px white" }}
              >
                Accecories.
              </span>
            </h1>
          </div>

          {/* Description & CTA (Posisi di kanan atas untuk desktop) */}
          <div className="lg:max-w-xs flex flex-col gap-8 pt-4">
            <p className="text-gray-400 text-sm leading-relaxed uppercase tracking-widest font-mono">
              [EST. 2020] <br />
              Simple is the key.
            </p>

            <a
              href="https://www.instagram.com/garasipapaa?igsh=MWhyOXAyaW1wZHZsOQ=="
              className="group flex items-center justify-between px-6 py-4 bg-white text-black font-bold hover:bg-gray-200 transition-all duration-300 w-full border border-transparent hover:border-white"
            >
              <span>EXPLORE CATALOG</span>
              <ArrowUpRight className="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* 2. Visual Section: Triptych (3 Gambar Vertikal) */}
        {/* Ini teknik editorial: Memecah gambar jadi potongan-potongan */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[500px] md:h-[400px] lg:h-[500px] w-full">
          {/* Image 1: Fashion Detail */}
          <div className="relative group overflow-hidden border border-white/10 bg-[#111]">
            <img
              src="public/img/Mobil2.jpeg"
              alt="Fashion"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-in-out"
            />
            <div className="absolute bottom-0 left-0 p-4 bg-black/80 backdrop-blur-sm w-full translate-y-full group-hover:translate-y-0 transition-transform duration-300 border-t border-white/10">
              <span className="font-mono text-xs text-white">01 — APPAREL</span>
            </div>
          </div>

          {/* Image 2: Car Detail (Focus) */}
          <div className="relative group overflow-hidden border border-white/10 bg-[#111] md:-mt-12 md:mb-12 border-t-4 border-t-white">
            {" "}
            {/* Offset vertical buat kesan asimetris */}
            <div className="absolute inset-0 bg-black/20 z-10 group-hover:bg-transparent transition-colors"></div>
            <img
              src="public/img/Mobil1.jpeg"
              alt="Automotive"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-in-out"
            />
            <div className="absolute top-4 right-4 z-20">
              <ArrowDown className="w-8 h-8 text-white animate-bounce" />
            </div>
            <div className="absolute bottom-0 left-0 p-4 bg-white w-full translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <span className="font-mono text-xs text-black font-bold">
                02 — AUTOMOTIVE
              </span>
            </div>
          </div>

          {/* Image 3: Lifestyle/Context */}
          <div className="relative group overflow-hidden border border-white/10 bg-[#111]">
            <img
              src="public/img/Mobil3.jpeg"
              alt="Lifestyle"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-in-out"
            />
            <div className="absolute bottom-0 left-0 p-4 bg-black/80 backdrop-blur-sm w-full translate-y-full group-hover:translate-y-0 transition-transform duration-300 border-t border-white/10">
              <span className="font-mono text-xs text-white">
                03 — LIFESTYLE
              </span>
            </div>
          </div>
        </div>

        {/* 3. Footer/Marquee Section */}
        <div className="mt-16 border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="text-xs text-gray-500 font-mono">
            SCROLL DOWN TO EXPLORE <br /> THE COLLECTION
          </div>

          {/* Infinite Text Marquee */}
          <div className="relative flex overflow-hidden w-full md:w-2/3 lg:w-3/4 mask-linear-gradient">
            <div className="animate-marquee whitespace-nowrap flex gap-8 items-center">
              <span className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-[#333] to-[#111] uppercase select-none">
                Garasipapa Official Store — Automotive & Streetwear —
              </span>
              <span className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-[#333] to-[#111] uppercase select-none">
                Garasipapa Official Store — Automotive & Streetwear —
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
