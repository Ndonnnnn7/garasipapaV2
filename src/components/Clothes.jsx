import React, { useState } from "react";
import { ArrowUpRight, ShoppingCart, Star, ArrowRight } from "lucide-react";

// Data Produk Dummy dengan vibe "Garage/Streetwear"
const PRODUCTS = [
  {
    id: 1,
    name: "PISTON OVERSIZED TEE",
    price: "IDR 249.000",
    category: "T-SHIRT",
    stock: "LIMITED",
    image:
      "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?q=80&w=987&auto=format&fit=crop",
    color: "HEAVY BLACK",
  },
  {
    id: 2,
    name: "MECHANIC WORK JACKET",
    price: "IDR 699.000",
    category: "OUTERWEAR",
    stock: "PRE-ORDER",
    image:
      "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?q=80&w=987&auto=format&fit=crop",
    color: "NAVY BLUE",
  },
  {
    id: 3,
    name: "RACING TEAM HOODIE",
    price: "IDR 450.000",
    category: "HOODIE",
    stock: "AVAILABLE",
    image:
      "https://images.unsplash.com/photo-1559551409-dadc959f76b8?q=80&w=2073&auto=format&fit=crop",
    color: "VINTAGE GREY",
  },
  {
    id: 4,
    name: "TRACK PANTS V2",
    price: "IDR 350.000",
    category: "BOTTOMS",
    stock: "FEW LEFT",
    image:
      "https://images.unsplash.com/photo-1552160793-eb29610bdb05?q=80&w=987&auto=format&fit=crop",
    color: "NYLON BLACK",
  },
];

const Clothes = () => {
  // State sederhana untuk interaksi hover gambar (opsional)
  const [hoveredProduct, setHoveredProduct] = useState(null);

  return (
    <div className="bg-[#050505] min-h-screen text-white relative overflow-hidden pt-20 pb-20">
      {/* --- BACKGROUND DECORATION --- */}
      <div
        className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      ></div>

      {/* --- HEADER SECTION --- */}
      <div className="max-w-7xl mx-auto px-6 mb-16 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end border-b border-white/10 pb-8">
          <div>
            <span className="font-mono text-red-500 text-xs tracking-widest uppercase mb-2 block">
              // SEASON 01 — 2024
            </span>
            <h2 className="font-['Anton'] text-6xl md:text-8xl uppercase tracking-tighter leading-none">
              Garage <br />{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-white">
                Apparel.
              </span>
            </h2>
          </div>

          <div className="mt-8 md:mt-0 max-w-sm text-right">
            <p className="font-['Space_Grotesk'] text-gray-400 text-sm leading-relaxed">
              Koleksi pakaian yang dirancang untuk durabilitas di bengkel dan
              estetika di jalanan. <br />
              <span className="text-white font-bold">
                Limited run. No restock.
              </span>
            </p>
          </div>
        </div>

        {/* Filter Bar (Aesthetic Only) */}
        <div className="flex gap-6 mt-6 font-mono text-xs text-gray-500 overflow-x-auto whitespace-nowrap scrollbar-hide">
          <span className="text-white cursor-pointer border-b border-white pb-1">
            ALL ITEMS [04]
          </span>
          <span className="hover:text-white cursor-pointer transition-colors">
            TEES [01]
          </span>
          <span className="hover:text-white cursor-pointer transition-colors">
            OUTERWEAR [01]
          </span>
          <span className="hover:text-white cursor-pointer transition-colors">
            ACCESSORIES [00]
          </span>
        </div>
      </div>

      {/* --- PRODUCT GRID --- */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-12">
          {PRODUCTS.map((item) => (
            <div
              key={item.id}
              className="group relative flex flex-col"
              onMouseEnter={() => setHoveredProduct(item.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {/* Image Container */}
              <div className="relative aspect-[3/4] overflow-hidden bg-[#111] mb-6 border border-white/5 cursor-pointer">
                {/* Badge Status */}
                <div className="absolute top-2 left-2 z-20">
                  <span
                    className={`
                     text-[10px] font-bold px-2 py-1 font-mono uppercase tracking-wider
                     ${
                       item.stock === "LIMITED"
                         ? "bg-red-600 text-white"
                         : "bg-white text-black"
                     }
                   `}
                  >
                    {item.stock}
                  </span>
                </div>

                {/* Main Image */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-in-out"
                />

                {/* Overlay Quick Add Button */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="bg-white text-black px-6 py-3 font-bold font-['Space_Grotesk'] uppercase text-sm tracking-wider flex items-center gap-2 hover:bg-gray-200 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    Buy <ArrowRight size={16} />
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="flex flex-col gap-1">
                <div className="flex justify-between items-start">
                  <span className="text-xs font-mono text-gray-500">
                    {item.category} // {item.color}
                  </span>
                  <div className="flex text-yellow-500 gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={8} fill="currentColor" />
                    ))}
                  </div>
                </div>

                <h3 className="font-['Anton'] text-2xl uppercase tracking-wide group-hover:text-red-500 transition-colors cursor-pointer">
                  {item.name}
                </h3>

                <div className="flex items-center justify-between border-t border-white/10 pt-3 mt-2">
                  <span className="font-['Space_Grotesk'] font-bold text-lg">
                    {item.price}
                  </span>
                  <button className="text-gray-500 hover:text-white transition-colors">
                    <ArrowUpRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- BOTTOM MARQUEE --- */}
      <div className="mt-24 border-y border-white/10 py-3 overflow-hidden bg-[#0a0a0a]">
        <div className="flex gap-8 items-center animate-marquee whitespace-nowrap">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <React.Fragment key={i}>
              <span className="text-xl font-['Anton'] text-transparent bg-clip-text bg-gradient-to-b from-gray-700 to-gray-900 uppercase">
                GarasiPapa Racing Division
              </span>
              <span className="w-2 h-2 bg-red-600 rounded-full"></span>
            </React.Fragment>
          ))}
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
        .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default Clothes;
