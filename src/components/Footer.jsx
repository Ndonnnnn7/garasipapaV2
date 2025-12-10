import React, { useState, useEffect } from "react";
import {
  ArrowUpRight,
  Instagram,
  Twitter,
  MapPin,
  Globe,
  Zap,
} from "lucide-react"; 

const Footer = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString("id-ID", {
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  return (
    <footer className="bg-[#050505] text-white border-t border-white/10 pt-0 overflow-hidden relative">
      {/* --- SECTION 1: MAIN GRID --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 border-b border-white/10">
        {/* === LOCATION HQ === */}
        <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-white/10 flex flex-col justify-between relative group">
          <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

          <div>
            <div className="flex items-center gap-2 text-red-600 font-mono text-xs tracking-widest mb-6 uppercase">
              <Globe size={14} className="animate-pulse" />
              <span>HQ_COORDINATES // -7.9666, 112.6326</span>
            </div>

            <h2 className="font-['Anton'] text-6xl md:text-8xl leading-[0.85] uppercase mb-8 transition-transform duration-500 group-hover:translate-x-2">
              Malang
              <br />
              <span className="text-gray-600 group-hover:text-white transition-colors delay-75">
                Base.
              </span>
            </h2>
          </div>
        </div>

        {/* Quick Links & Socials */}
        <div className="grid grid-cols-2">
          {/* Navigation */}
          <div className="p-8 md:p-12 border-r border-white/10 flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs text-gray-500 mb-4 block">
                // SITEMAP
              </span>
              <ul className="space-y-3 font-['Space_Grotesk'] text-lg font-bold">
                {["HOME", "ABOUT", "PARFUME", "CLOTHES"].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="flex items-center gap-2 hover:text-red-500 hover:translate-x-2 transition-all duration-300"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Socials */}
          <div className="p-8 md:p-12 flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs text-gray-500 mb-4 block">
                // NETWORK
              </span>
              <ul className="space-y-6">
                <li>
                  <a
                    href="#"
                    className="flex items-center gap-3 group hover:opacity-80 transition-opacity"
                  >
                    <div className="p-2 bg-white/5 rounded-full group-hover:bg-white group-hover:text-black transition-colors">
                      <Instagram size={16} />
                    </div>
                    <div>
                      <span className="block font-bold text-sm leading-none mb-1">
                        IG
                      </span>
                      <span className="font-mono text-[10px] text-gray-500">
                        @garasipapa
                      </span>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center gap-3 group hover:opacity-80 transition-opacity"
                  >
                    <div className="p-2 bg-white/5 rounded-full group-hover:bg-white group-hover:text-black transition-colors">
                      <Twitter size={16} />
                    </div>
                    <div>
                      <span className="block font-bold text-sm leading-none mb-1">
                        X / TWT
                      </span>
                      <span className="font-mono text-[10px] text-gray-500">
                        @garasipapa_id
                      </span>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center gap-3 group hover:opacity-80 transition-opacity"
                  >
                    <div className="p-2 bg-white/5 rounded-full group-hover:bg-white group-hover:text-black transition-colors">
                      <Zap size={16} />
                    </div>
                    <div>
                      <span className="block font-bold text-sm leading-none mb-1">
                        COMMUNITY
                      </span>
                      <span className="font-mono text-[10px] text-green-500">
                        ● 1.2k Online
                      </span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* --- SECTION 2: MASSIVE BRANDING --- */}
      <div className="relative border-b border-white/10 overflow-hidden group cursor-default select-none py-4 md:py-10">
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
        <h1 className="w-full text-[13vw] md:text-[15.5vw] leading-none font-['Anton'] text-center tracking-tighter text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-b group-hover:from-white group-hover:to-gray-800 transition-all duration-700 py-4">
          GARASIPAPA
        </h1>
      </div>

      {/* --- SECTION 3: COPYRIGHT ONLY (Tombol Back to Top sudah dihapus) --- */}
      <div className="flex flex-col md:flex-row items-center center-between p-6 md:px-12 md:py-8 gap-6 bg-[#0a0a0a]">
        <div
          className="flex flex-col md:flex-row gap-4 md:gap-12 text-[10px] md:text-xs font-mono text-gray-500 uppercase tracking-wider text-center items-center justify-center w-full"
        >
          <div>© 2024 GARASIPAPA CORP, build by @brandonngeraldo</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
