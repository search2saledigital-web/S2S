"use client";
import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("Products"); 

  const navItems = ["Home","Products", "Services", "Story", "Porfolio", "About"];

  return (
    <>
      <nav className="bg-[#020618] px-6 md:px-12 lg:px-24 xl:px-40 py-4 flex items-center justify-between relative">
        
        {/* Logo */}
        <a href="#" className="text-white font-semibold text-lg">
          S2s
        </a>

        {/* Desktop Menu */}
        <div className="hidden  md:flex items-center  border border-zinc-200 rounded-full px-1 py-1 gap-2">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => setActive(item)} // 👈 change active
              className={`px-4 py-1.5 rounded-full text-lg transition-all duration-200
                ${
                  active === item
                    ? "bg-white border transition-all duration-300 border-zinc-200 font-medium text-zinc-800 shadow-sm"
                    : "text-zinc-500 hover:text-zinc-400"
                }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Desktop Button */}
        <button className="hidden md:flex items-center gap-2.5 bg-orange-400  text-zinc-50 hover:text-zinc-200 hover:bg-orange-500 text-sm font-bold pl-5 pr-2 py-2 rounded-full">
         Get Free Proposal
          <span className="size-7 rounded-full bg-orange-400 flex items-center justify-center">
            →
          </span>
        </button>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5"
        >
          <span className={`w-6 h-0.5 transition-all duration-300 bg-white ${menuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
          <span className={`w-6 h-0.5 transition-all duration-300 bg-white ${menuOpen ? "opacity-0" : ""}`}></span>
          <span className={`w-6 h-0.5 transition-all duration-300 bg-white ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
        </button>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-white border-t border-zinc-200 flex flex-col p-5 gap-1 md:hidden z-50">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => {
                  setActive(item);   // 👈 set active
                  setMenuOpen(false); // 👈 close menu
                }}
                className={`px-4 py-2.5 rounded-lg text-sm text-left
                  ${
                    active === item
                      ? "bg-zinc-100 font-medium text-zinc-800"
                      : "text-zinc-500 hover:bg-zinc-50"
                  }`}
              >
                {item}
              </button>
            ))}

            <button className="flex items-center justify-center gap-2.5 bg-orange-400  text-zinc-50 hover:text-zinc-200 hover:bg-orange-500 text-white text-sm font-medium px-5 py-2.5 rounded-full mt-3 w-fit">
              Get Free Proposal →
            </button>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;