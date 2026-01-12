import React, { useState } from "react";
import { Wind, Droplets, Gauge, ArrowRight } from "lucide-react";

// DATA PARFUM (Scent Profiles)
const SCENTS = [
  {
    id: 1,
    name: "AQUA BREZE",
    price: "IDR 35.000",
    tagline: "FRESH & CLEAN",
    description:
      "Aroma segar yang dapat menyejukan kabin mobil Anda. Rasa sejuk akan selalu muncul saat andra berkendara",
    notes: ["Fresh", "Sejuk", "Oceanic"],
    intensity: 3,
    color: "from-blue-500 to-cyan-400",
    accent: "text-cyan-400",
    bgAccent: "bg-cyan-500",
    image: "/img/Parfum.jpeg",
    tokopediaLink: "https://vt.tokopedia.com/t/ZSHoJLqx9Njms-Hn4Wy/", 
  },
  {
    id: 2,
    name: "VANILLA",
    price: "IDR 35.000",
    tagline: "SWEET & ELEGANT",
    description:
      "Bau interior mobil lebih ke arah manis. Aroma manis premium bertema vanilla yang elegan dan hangat.",
    notes: ["Vanilla", "Choco", "Warm"],
    intensity: 4,
    color: "from-amber-600 to-orange-400",
    accent: "text-amber-500",
    bgAccent: "bg-amber-500",
    image: "/img/Parfum2.jpeg",
    tokopediaLink: "https://vt.tokopedia.com/t/ZSHoJLqx9Njms-Hn4Wy/",
  },
  {
    id: 3,
    name: "BUBBLE GUM",
    price: "IDR 35.000",
    tagline: "SWEET & FRESH",
    description:
      "aroma manis bubblegum yang memiliki rasa mirip seperti permen karet. Membawa suasana ceria dan menyenangkan di dalam mobil Anda.",
    notes: ["Sweet", "Candy", "Gum"],
    intensity: 5,
    color: "from-pink-500 to-white",
    accent: "text-pink-300",
    bgAccent: "bg-pink-300",
    image: "/img/Parfum3.jpeg",
    tokopediaLink: "https://vt.tokopedia.com/t/ZSHoJLqx9Njms-Hn4Wy/",
  },
  {
    id: 4,
    name: "COFFEE",
    price: "IDR 35.000",
    tagline: "WILD & SPICY",
    description:
      "Aroma kopi yang kuat dan menggugah semangat. Cocok untuk Anda yang menyukai aroma hangat dengan sentuhan rempah yang memikat.",
    notes: ["Coffee", "Dark", "Breez"],
    intensity: 4,
    color: "from-amber-600 to-orange-400",
    accent: "text-amber-500",
    bgAccent: "bg-amber-500",
    image: "/img/Parfum4.jpeg",
    tokopediaLink: "https://vt.tokopedia.com/t/ZSHoJLqx9Njms-Hn4Wy/",
  },
];

const Parfume = () => {
  const [activeId, setActiveId] = useState(1);
  const activeScent = SCENTS.find((s) => s.id === activeId);

  // Fungsi untuk handle klik ke Tokopedia
  const handleBuy = () => {
    if (activeScent.tokopediaLink) {
      window.open(activeScent.tokopediaLink, "_blank");
    } else {
      alert("Link produk belum tersedia");
    }
  };

  return (
    <div className="bg-[#050505] min-h-screen text-white relative overflow-hidden flex flex-col pt-24 pb-20">
      {/* --- BACKGROUND AMBIENCE --- */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 opacity-20 bg-gradient-to-br ${activeScent.color} blur-[150px]`}
      ></div>
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05]"></div>

      {/* --- HEADER --- */}
      <div className="relative z-10 px-6 md:px-12 mb-8 border-b border-white/10 pb-4 flex justify-between items-end">
        <div>
          <span className="font-mono text-[10px] text-gray-500 uppercase tracking-widest block mb-1">
            // INTERIOR ATMOSPHERE CONTROL
          </span>
          <h1 className="font-['Anton'] text-4xl uppercase">Air Freshener</h1>
        </div>
        <div className="hidden md:flex items-center gap-2 font-mono text-xs text-gray-400"></div>
      </div>

      {/* --- MAIN CONTENT --- */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 flex flex-col md:flex-row gap-12 items-center md:items-stretch h-full">
        {/* LEFT: PRODUCT VISUAL */}
        <div className="w-full md:w-1/2 relative group">
          <div className="relative aspect-[4/5] md:h-[600px] w-full overflow-hidden border border-white/10 bg-black/20 backdrop-blur-sm">
            <div className="absolute top-4 left-4 z-20 flex gap-2">
              <span
                className={`px-3 py-1 text-black font-bold text-xs uppercase ${activeScent.bgAccent}`}
              >
                {activeScent.tagline}
              </span>
            </div>

            <img
              key={activeScent.id}
              src={activeScent.image}
              alt={activeScent.name}
              className="w-full h-full object-cover animate-fade-in grayscale group-hover:grayscale-0 transition-all duration-700"
            />

            <div className="absolute inset-0 border border-white/5 m-4 pointer-events-none"></div>
            <div className="absolute bottom-4 right-4 font-mono text-xs text-white/50">
              NET WT. 50ML / 1.7 FL OZ
            </div>
          </div>
        </div>

        {/* RIGHT: CONTROLS & DETAILS */}
        <div className="w-full md:w-1/2 flex flex-col justify-between py-4">
          {/* 1. Selector */}
          <div className="mb-12">
            <label className="font-mono text-xs text-gray-500 mb-4 block uppercase">
              Select Variance
            </label>
            <div className="flex flex-wrap gap-4">
              {SCENTS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveId(item.id)}
                  className={`
                          px-4 py-3 border transition-all duration-300 font-mono text-xs uppercase tracking-wider relative overflow-hidden group/btn
                          ${
                            activeId === item.id
                              ? "border-white text-black bg-white"
                              : "border-white/20 text-gray-400 hover:border-white/50"
                          }
                        `}
                >
                  <span className="relative z-10">{item.name}</span>
                  {activeId !== item.id && (
                    <div className="absolute inset-0 bg-white/10 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* 2. Main Info */}
          <div key={activeScent.id} className="animate-slide-up">
            <h2 className="font-['Anton'] text-6xl md:text-8xl leading-[0.9] uppercase mb-4">
              {activeScent.name}
            </h2>
            <p className="font-['Space_Grotesk'] text-gray-400 text-lg leading-relaxed max-w-md border-l-2 border-white/10 pl-6 mb-8">
              {activeScent.description}
            </p>

            {/* 3. Tech Specs */}
            <div className="grid grid-cols-2 gap-8 mb-12 bg-white/5 p-6 border border-white/10">
              {/* Notes */}
              <div>
                <div className="flex items-center gap-2 mb-3 text-gray-500 font-mono text-xs">
                  <Droplets size={14} /> SCENT NOTES
                </div>
                <ul className="space-y-1">
                  {activeScent.notes.map((note, i) => (
                    <li
                      key={i}
                      className="font-['Space_Grotesk'] font-bold uppercase text-sm"
                    >
                      <span className={activeScent.accent}>{note}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Intensity */}
              <div>
                <div className="flex items-center gap-2 mb-3 text-gray-500 font-mono text-xs">
                  <Gauge size={14} /> INTENSITY
                </div>
                <div className="flex gap-1 h-full items-center">
                  {[1, 2, 3, 4, 5].map((level) => (
                    <div
                      key={level}
                      className={`h-2 w-full rounded-full transition-colors duration-500 ${
                        level <= activeScent.intensity
                          ? activeScent.bgAccent
                          : "bg-white/10"
                      }`}
                    ></div>
                  ))}
                </div>
                <span className="text-[10px] font-mono text-gray-400 mt-2 block text-right">
                  LEVEL {activeScent.intensity}/5
                </span>
              </div>
            </div>

            {/* 4. Action Bar (BUTTON TOKOPEDIA) */}
            <div className="flex items-center justify-between border-t border-white/20 pt-8">
              <div>
                <span className="font-mono text-xs text-gray-500 block mb-1">
                  PRICE PER UNIT
                </span>
                <span className="font-['Anton'] text-3xl tracking-wide">
                  {activeScent.price}
                </span>
              </div>

              <button
                onClick={handleBuy}
                className={`
                    group relative px-6 md:px-8 py-4 bg-[#42b549] text-white font-bold font-mono text-sm uppercase tracking-wider overflow-hidden
                    hover:scale-105 transition-transform duration-300
                  `}
                // Warna background diganti ke hijau Tokopedia (#42b549) atau tetap putih terserah selera
              >
                <span className="relative z-10 flex items-center gap-3">
                  Buy on Tokopedia <ArrowRight size={16} />
                </span>
                {/* Efek Hover */}
                <div
                  className={`absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity`}
                ></div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* --- CSS ANIMATIONS --- */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-slide-up {
          animation: slideUp 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Parfume;