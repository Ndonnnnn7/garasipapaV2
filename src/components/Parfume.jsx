import React, { useState } from "react";
import { Wind, Droplets, Gauge, ArrowRight, Plus, Minus } from "lucide-react";

// DATA PARFUM (Scent Profiles)
// Warna (accentColor) disesuaikan dengan mood wanginya
const SCENTS = [
  {
    id: 1,
    name: "JDM SQUASH",
    price: "IDR 125.000",
    tagline: "FRESH & CLEAN",
    description:
      "Aroma klasik mobil sport Jepang era 90-an. Perpaduan citrus segar dan soda yang membangkitkan energi saat night run.",
    notes: ["Citrus", "Soda Pop", "White Musk"],
    intensity: 4, // 1-5
    color: "from-blue-500 to-cyan-400",
    accent: "text-cyan-400",
    bgAccent: "bg-cyan-500",
    image:
      "https://images.unsplash.com/photo-1616084403156-9cf1df335d5f?q=80&w=988&auto=format&fit=crop", // Ganti dengan foto botol biru/fresh
  },
  {
    id: 2,
    name: "LEATHER SEAT",
    price: "IDR 145.000",
    tagline: "LUXURY & WARM",
    description:
      "Bau interior mobil Eropa baru. Aroma kulit premium bercampur dengan kayu manis dan tembakau halus. Elegan dan maskulin.",
    notes: ["Genuine Leather", "Tobacco", "Cedarwood"],
    intensity: 3,
    color: "from-amber-600 to-orange-400",
    accent: "text-amber-500",
    bgAccent: "bg-amber-500",
    image:
      "https://images.unsplash.com/photo-1595425970339-22e64b696954?q=80&w=2065&auto=format&fit=crop", // Ganti foto botol coklat/amber
  },
  {
    id: 3,
    name: "BLACK ICE NITRO",
    price: "IDR 125.000",
    tagline: "COLD & SHARP",
    description:
      "Dingin dan tajam. Menthol dingin beradu dengan aroma pine tree hutan pinus. Fokus maksimal untuk pengemudi.",
    notes: ["Menthol", "Pine", "Black Pepper"],
    intensity: 5,
    color: "from-gray-500 to-white",
    accent: "text-gray-300",
    bgAccent: "bg-gray-300",
    image:
      "https://images.unsplash.com/photo-1585120040315-2241b774ad0f?q=80&w=2070&auto=format&fit=crop", // Ganti foto botol hitam/abu
  },
  {
    id: 4,
    name: "RED LINE RPM",
    price: "IDR 135.000",
    tagline: "FIERY & BOLD",
    description:
      "Aroma adrenalin di batas putaran mesin. Kombinasi manisnya Cherry liar dengan sentuhan rempah pedas yang membakar semangat berkendara.",
    notes: ["Wild Cherry", "Cinnamon", "Sandalwood"],
    intensity: 4,
    color: "from-red-600 to-rose-900",
    accent: "text-red-500",
    bgAccent: "bg-red-500",
    image:
      "https://images.unsplash.com/photo-1541140532154-b024d7058d28?q=80&w=1000&auto=format&fit=crop", // Visual merah/gelap
  },
];

const Parfume = () => {
  const [activeId, setActiveId] = useState(1);
  const activeScent = SCENTS.find((s) => s.id === activeId);

  return (
    <div className="bg-[#050505] min-h-screen text-white relative overflow-hidden flex flex-col pt-24 pb-20">
      {/* --- BACKGROUND AMBIENCE (Berubah sesuai parfum aktif) --- */}
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

      {/* --- MAIN CONTENT (Split Layout) --- */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 flex flex-col md:flex-row gap-12 items-center md:items-stretch h-full">
        {/* LEFT: PRODUCT VISUAL (Besar) */}
        <div className="w-full md:w-1/2 relative group">
          {/* Frame Gambar */}
          <div className="relative aspect-[4/5] md:h-[600px] w-full overflow-hidden border border-white/10 bg-black/20 backdrop-blur-sm">
            <div className="absolute top-4 left-4 z-20 flex gap-2">
              <span
                className={`px-3 py-1 text-black font-bold text-xs uppercase ${activeScent.bgAccent}`}
              >
                {activeScent.tagline}
              </span>
            </div>

            {/* Gambar Produk dengan Animasi Fade */}
            <img
              key={activeScent.id} // Key berubah memicu re-render animasi
              src={activeScent.image}
              alt={activeScent.name}
              className="w-full h-full object-cover animate-fade-in grayscale group-hover:grayscale-0 transition-all duration-700"
            />

            {/* Decorative overlay lines */}
            <div className="absolute inset-0 border border-white/5 m-4 pointer-events-none"></div>
            <div className="absolute bottom-4 right-4 font-mono text-xs text-white/50">
              NET WT. 50ML / 1.7 FL OZ
            </div>
          </div>
        </div>

        {/* RIGHT: CONTROLS & DETAILS */}
        <div className="w-full md:w-1/2 flex flex-col justify-between py-4">
          {/* 1. Selector (Pilih Varian) */}
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
                  {/* Hover Fill Effect */}
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

            {/* 3. Tech Specs (Notes & Intensity) */}
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
                      {i === 0 && (
                        <span className="text-gray-500 text-[10px] mr-2">
                          TOP
                        </span>
                      )}
                      {i === 1 && (
                        <span className="text-gray-500 text-[10px] mr-2">
                          MID
                        </span>
                      )}
                      {i === 2 && (
                        <span className="text-gray-500 text-[10px] mr-2">
                          BASE
                        </span>
                      )}
                      <span className={activeScent.accent}>{note}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Intensity Meter */}
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

            {/* 4. Action Bar */}
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
                className={`
                    group relative px-8 py-4 bg-white text-black font-bold font-mono text-sm uppercase tracking-wider overflow-hidden
                    hover:scale-105 transition-transform duration-300
                 `}
              >
                <span className="relative z-10 flex items-center gap-3">
                  Buy <ArrowRight size={16} />
                </span>
                <div
                  className={`absolute inset-0 ${activeScent.bgAccent} opacity-0 group-hover:opacity-20 transition-opacity`}
                ></div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* --- CUSTOM CSS FOR ANIMATIONS --- */}
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
