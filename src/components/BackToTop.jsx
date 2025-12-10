import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Logic: Tombol muncul jika scroll lebih dari 300px (melewati Hero)
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`fixed bottom-8 right-8 z-[99] transition-all duration-500 transform ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10 pointer-events-none"
      }`}
    >
      <button
        onClick={scrollToTop}
        className="w-14 h-14 md:w-16 md:h-16 bg-white text-black rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:bg-red-600 hover:text-white hover:scale-110 hover:shadow-red-900/50 transition-all duration-300 group"
      >
        <ArrowUp
          size={24}
          className="group-hover:-translate-y-1 transition-transform duration-300"
        />
      </button>
    </div>
  );
};

export default BackToTop;
