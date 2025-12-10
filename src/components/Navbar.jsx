// components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { ShoppingBag, ChevronDown, Menu, X, Activity } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSection, setActiveSection] = useState("home");

  // Efek Scroll & Deteksi Section
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ["home", "about", "parfume", "clothes", "footer"];
      // Offset -100px agar deteksi lebih awal saat scroll
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // FUNGSI SCROLL UTAMA
  // Kita menghapus parameter '#' dan langsung mencari ID element
  const handleNavClick = (id) => {
    setMobileMenuOpen(false);
    setActiveDropdown(null); // Tutup dropdown setelah klik

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      // Opsional: Hapus focus agar tidak ada outline biru
      element.focus();
    }
  };

  return (
    <>
      <div
        className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isScrolled ? "pt-2 md:pt-4" : "pt-6 md:pt-8"
        } px-4`}
      >
        <nav
          className={`
            relative flex items-center justify-between 
            bg-[#050505]/90 backdrop-blur-md supports-[backdrop-filter]:bg-[#050505]/60
            border border-white/10 
            ${
              isScrolled
                ? "w-full max-w-6xl py-3 px-5"
                : "w-full max-w-[1440px] py-4 px-6 md:px-8"
            }
            rounded-full transition-all duration-500 ease-out shadow-2xl shadow-black/50
          `}
        >
          {/* --- LEFT: BRAND IDENTITY --- */}
          <div className="flex items-center gap-6">
            <Link
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-3 group"
            >
              <div className="relative w-9 h-9 bg-white text-black flex items-center justify-center rounded overflow-hidden group-hover:scale-95 transition-transform duration-300">
                <span className="font-['Anton'] text-sm tracking-tighter relative z-10">
                  GP
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-['Anton'] text-white tracking-wide text-xl leading-none group-hover:text-gray-300 transition-colors">
                  GARASIPAPA
                </span>
              </div>
            </Link>

            <div className="hidden lg:block w-px h-8 bg-white/10 rotate-12"></div>
          </div>

          {/* --- CENTER: NAVIGATION (Desktop) --- */}
          <div className="hidden md:flex items-center absolute left-1/2 transform -translate-x-1/2">
            <div className="flex items-center gap-1 p-1 rounded-full border border-white/5 bg-white/5 backdrop-blur-md">
              {/* UBAH DARI href MENJADI onClick */}
              <NavItem
                onClick={() => handleNavClick("home")}
                active={activeSection === "home"}
              >
                Home
              </NavItem>
              <NavItem
                onClick={() => handleNavClick("about")}
                active={activeSection === "about"}
              >
                About
              </NavItem>

              {/* Dropdown Shop */}
              <div
                className="relative group"
                onMouseEnter={() => setActiveDropdown("categories")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className={`
                    flex items-center gap-2 px-5 py-2 text-xs font-bold font-mono uppercase tracking-wide rounded-full transition-all duration-300 border border-transparent
                    ${
                      activeDropdown === "categories" ||
                      activeSection === "parfume" ||
                      activeSection === "clothes"
                        ? "text-black bg-white border-white"
                        : "text-gray-400 hover:text-white hover:bg-white/10"
                    }
                  `}
                >
                  Store
                  <ChevronDown
                    className={`h-3 w-3 transition-transform duration-300 ${
                      activeDropdown === "categories" ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Dropdown Content */}
                <div
                  className={`
                    absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 bg-[#0a0a0a] border border-white/10 
                    rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.8)] py-2 overflow-hidden backdrop-blur-xl transform transition-all duration-300 origin-top
                    ${
                      activeDropdown === "categories"
                        ? "opacity-100 translate-y-0 visible"
                        : "opacity-0 -translate-y-2 invisible"
                    }
                  `}
                >
                  <div className="px-4 py-2 mb-1 border-b border-white/10 flex justify-between items-center text-[10px] text-gray-600 font-mono uppercase">
                    <span>Select Department</span>
                    <Activity size={10} />
                  </div>

                  {/* UBAH DARI href MENJADI onClick */}
                  <DropdownItem
                    onClick={() => handleNavClick("parfume")}
                    label="Fragrance"
                    sub="AIR_FRESHENER"
                    active={activeSection === "parfume"}
                  />
                  <DropdownItem
                    onClick={() => handleNavClick("clothes")}
                    label="Streetwear"
                    sub="APPAREL_V1"
                    active={activeSection === "clothes"}
                  />
                </div>
              </div>

              {/* UBAH DARI href MENJADI onClick */}
              <NavItem
                onClick={() => handleNavClick("footer")}
                active={activeSection === "footer"}
              >
                Contact
              </NavItem>
            </div>
          </div>

          {/* --- RIGHT: ACTIONS --- */}
          <div className="flex items-center gap-4">
            <div className="w-px h-6 bg-white/10 hidden sm:block"></div>
            <button
              className="md:hidden p-2.5 text-white border border-white/20 rounded-full hover:bg-white/10 transition-colors"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </nav>
      </div>

      {/* --- MOBILE MENU --- */}
      <div
        className={`fixed inset-0 z-[60] bg-[#050505] transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${
          mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex flex-col h-full p-6 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

          <div className="flex justify-between items-center mb-12 border-b border-white/10 pb-6 relative z-10">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-red-600 text-white flex items-center justify-center font-['Anton'] text-sm rounded">
                GP
              </div>
              <span className="font-['Anton'] text-2xl text-white tracking-wide">
                MENU
              </span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 text-white border border-white/20 rounded-full hover:bg-white hover:text-black transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="flex flex-col gap-2 relative z-10">
            {/* UBAH SEMUA MENGGUNAKAN ID (STRING) BUKAN LINK */}
            <MobileLink
              onClick={() => handleNavClick("home")}
              index="01"
              label="Base"
              sub="HOME"
            />
            <MobileLink
              onClick={() => handleNavClick("about")}
              index="02"
              label="Manifesto"
              sub="ABOUT_US"
            />
            <MobileLink
              onClick={() => handleNavClick("clothes")}
              index="03"
              label="Streetwear"
              sub="APPAREL"
            />
            <MobileLink
              onClick={() => handleNavClick("parfume")}
              index="04"
              label="Fragrance"
              sub="SCENT_CTRL"
            />
            <MobileLink
              onClick={() => handleNavClick("footer")}
              index="05"
              label="Contact"
              sub="SIGNAL_HQ"
            />
          </div>

          <div className="mt-auto relative z-10 border-t border-white/10 pt-6">
            <div className="flex justify-between items-end">
              <div className="font-mono text-[10px] text-gray-500">
                STATUS: <span className="text-green-500">OPERATIONAL</span>
                <br />
                LOC: MALANG, ID
              </div>
              <div className="font-['Anton'] text-6xl text-white/5">GP©24</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// --- SUB COMPONENTS UPDATE (PENTING!) ---
// Kita ubah elemen <a> menjadi <button> agar tidak memicu perubahan URL

const NavItem = ({ onClick, children, active }) => (
  <button
    onClick={onClick}
    className={`
      px-6 py-2 text-xs font-bold font-mono uppercase tracking-wider transition-all duration-300 rounded-full
      ${
        active
          ? "text-black bg-white shadow-[0_0_15px_rgba(255,255,255,0.3)]"
          : "text-gray-400 hover:text-white hover:bg-white/5"
      }
    `}
  >
    {children}
  </button>
);

const DropdownItem = ({ onClick, label, sub, active }) => (
  <button
    onClick={onClick}
    className={`
         group w-full flex items-center justify-between px-4 py-3 mx-2 rounded-lg transition-all duration-300 text-left
         ${active ? "bg-white/10" : "hover:bg-white/5"}
      `}
  >
    <div className="flex flex-col">
      <span
        className={`text-sm font-bold font-mono uppercase ${
          active ? "text-white" : "text-gray-300 group-hover:text-white"
        }`}
      >
        {label}
      </span>
      <span className="text-[9px] text-gray-600 font-mono tracking-widest group-hover:text-red-500 transition-colors">
        {sub}
      </span>
    </div>
    <div
      className={`w-1.5 h-1.5 rounded-full ${
        active ? "bg-red-500" : "bg-white/10 group-hover:bg-white"
      } transition-colors`}
    ></div>
  </button>
);

const MobileLink = ({ onClick, index, label, sub }) => (
  <button
    onClick={onClick}
    className="group flex items-center justify-between w-full p-4 border border-white/5 bg-white/[0.02] hover:bg-white hover:text-black hover:border-white transition-all duration-300 rounded-xl"
  >
    <div className="flex items-center gap-4">
      <span className="font-mono text-xs text-gray-600 group-hover:text-black/50">
        /{index}
      </span>
      <div className="text-left">
        <span className="block font-['Anton'] text-3xl uppercase tracking-wide leading-none group-hover:translate-x-1 transition-transform">
          {label}
        </span>
      </div>
    </div>
    <span className="font-mono text-[10px] tracking-widest text-gray-600 group-hover:text-black/60 uppercase">
      {sub}
    </span>
  </button>
);

export default Navbar;
