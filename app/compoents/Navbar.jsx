"use client";
import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("Products");

  const navItems = ["Home", "Products", "Services", "Story", "Portfolio", "About"];

  return (
    <div className="sticky top-0 z-50 flex items-center justify-between bg-[#020618] px-4 py-4 md:px-8 lg:px-16 xl:px-32">
      {/* Logo - outside the pill, far left */}
      <a href="#" className="relative z-10 text-white font-semibold text-lg tracking-wide">
        S2s
      </a>

      {/* Desktop Menu Pill - center */}
      <nav
        className="relative hidden md:flex items-center px-1 py-1
          rounded-full border border-white/10 bg-white/5 backdrop-blur-xl
          shadow-[0_8px_32px_rgba(0,0,0,0.35)]
          before:pointer-events-none before:absolute before:inset-0 before:rounded-full
          before:bg-gradient-to-b before:from-white/10 before:to-transparent before:opacity-60"
      >
        <div className="relative z-10 flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => setActive(item)}
              className={`px-4 py-1.5 rounded-full text-sm transition-all duration-300
                ${
                  active === item
                    ? "bg-white text-zinc-900 font-medium shadow-sm"
                    : "text-zinc-300 hover:text-white hover:bg-white/10"
                }`}
            >
              {item}
            </button>
          ))}
        </div>
      </nav>

      {/* Get Free Proposal - outside the pill, far right */}
      <button className="relative z-10 hidden md:flex items-center gap-2.5 bg-orange-500 text-white hover:bg-orange-600 transition-colors duration-300 text-sm font-bold pl-5 pr-1.5 py-1.5 rounded-full">
        Get Free Proposal
        <span className="size-7 rounded-full bg-white/20 flex items-center justify-center">
          →
        </span>
      </button>

      {/* Mobile Toggle */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="relative z-10 md:hidden flex flex-col gap-1.5 p-2"
      >
        <span
          className={`w-6 h-0.5 bg-white transition-all duration-300 ${
            menuOpen ? "rotate-45 translate-y-2" : ""
          }`}
        ></span>
        <span
          className={`w-6 h-0.5 bg-white transition-all duration-300 ${
            menuOpen ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`w-6 h-0.5 bg-white transition-all duration-300 ${
            menuOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></span>
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="absolute top-full left-0 w-full flex flex-col p-4 gap-1 md:hidden z-50
            rounded-3xl border border-white/10 bg-white/10 backdrop-blur-2xl
            shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
        >
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => {
                setActive(item);
                setMenuOpen(false);
              }}
              className={`px-4 py-2.5 rounded-xl text-sm text-left transition-colors duration-200
                ${
                  active === item
                    ? "bg-white/90 font-medium text-zinc-900"
                    : "text-zinc-200 hover:bg-white/10"
                }`}
            >
              {item}
            </button>
          ))}

          <button className="flex items-center justify-center gap-2.5 bg-orange-500 hover:bg-orange-600 transition-colors duration-300 text-white text-sm font-medium px-5 py-2.5 rounded-full mt-3">
            Get Free Proposal →
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;