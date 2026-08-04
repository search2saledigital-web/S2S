"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const [showDropdown, setShowDropdown] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Our Work", href: "/" },
    { label: "Blogs", href: "/portfolio" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  const servicesDropdown = [
    { label: "SEO Servies", href: "/services/seo" },
    { label: "Web Development", href: "/services/web-dev" },
    { label: "Social Media Marketing", href: "/services/ui-ux" },
    { label: "Content and Creative", href: "/services/ui-ux" },
    { label: "Paid Marketing", href: "/services/paid-marketing" },
      { label: "Branding", href: "/services/branding" },
  ];

  const dropdownTimeout = useRef(null);
  const handleMouseEnter = () => {
  if (dropdownTimeout.current) {
    clearTimeout(dropdownTimeout.current);
  }
  setShowDropdown(true);
};

const handleMouseLeave = () => {
  dropdownTimeout.current = setTimeout(() => {
    setShowDropdown(false);
  }, 500); 
};

  return (
    <section className="w-full mx-auto max-w-7xl bg-[#020618]">
    <div  className="sticky top-0 z-50 flex items-center justify-between bg-[#020618] px-4 py-4 md:px-8 lg:px-16 xl:px-32">
      
      {/* Logo */}
      <Image src="/logo.png" width={100} height={100} className=" h-20 w-30 object-cover"/>

      {/* Desktop Menu */}
      <nav className="relative hidden md:flex items-center px-1 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.35)]">
        <div className="flex items-center gap-1">

          {navItems.map((item) => {
            // 👉 SERVICES WITH DROPDOWN
            if (item.label === "Services") {
              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={handleMouseEnter}
onMouseLeave={handleMouseLeave}
                >
                  <button
                    onClick={() => setActive(item.label)}
                    className={`px-4 py-1.5 rounded-full text-sm transition-all duration-300
                      ${
                        active === item.label
                          ? "bg-white text-zinc-900 font-medium shadow-sm"
                          : "text-zinc-300 hover:text-white hover:bg-white/10"
                      }`}
                  >
                    Services
                  </button>

                  {/* Dropdown */}
                  {showDropdown && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-56 
                      rounded-2xl border border-white/10 bg-[#020618] backdrop-blur-xl
                      shadow-xl p-2 flex flex-col gap-1 z-50 animate-in fade-in zoom-in-95 duration-200"
                    >
                      {servicesDropdown.map((service) => (
                        <Link
                          key={service.label}
                          href={service.href}
                          className="px-4 py-2 rounded-xl hover:scale-105  text-sm text-white hover:bg-white/10 transition"
                        >
                          {service.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            // 👉 NORMAL ITEMS
            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setActive(item.label)}
                className={`px-4 py-1.5 rounded-full text-sm transition-all duration-300
                  ${
                    active === item.label
                      ? "bg-white text-zinc-900 font-medium shadow-sm"
                      : "text-zinc-300 hover:text-white hover:bg-white/10"
                  }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </nav>

      {/* CTA */}
      <button className="hidden md:flex items-center gap-2.5 bg-orange-500 text-white hover:bg-orange-600 transition text-sm font-bold pl-5 pr-1.5 py-1.5 rounded-full">
        Get Free Proposal
        <span className="size-7 rounded-full bg-white/20 flex items-center justify-center">
          →
        </span>
      </button>

      {/* Mobile Toggle */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden flex flex-col gap-1.5 transition-all duration-150"
      >
        <span className={`w-6 h-0.5 bg-white ${menuOpen && "rotate-45 translate-y-2"}`} />
        <span className={`w-6 h-0.5 bg-white ${menuOpen && "opacity-0"}`} />
        <span className={`w-6 h-0.5 bg-white ${menuOpen && "-rotate-45 -translate-y-2"}`} />
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-17 transition-all duration-150 -left-2 w-[96%] mx-4 flex flex-col p-4 gap-2 md:hidden z-50 rounded-3xl border border-white/10 bg-white/10 backdrop-blur-2xl">

          {navItems.map((item) => (
            <div key={item.label}>
              
              {/* SERVICES DROPDOWN MOBILE */}
              {item.label === "Services" ? (
                <>
                  <button
                    onClick={() => setShowDropdown(!showDropdown)}
                    className="w-full text-left px-4 py-2.5 text-white"
                  >
                    Services
                  </button>

                  {showDropdown && (
                    <div className="pl-7  flex flex-col gap-1">
                      {servicesDropdown.map((service) => (
                        <Link
                          key={service.label}
                          href={service.href}
                          className="text-sm text-zinc-300 py-1"
                          onClick={() => setMenuOpen(false)}
                        >
                          {service.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={item.href}
                  onClick={() => {
                    setActive(item.label);
                    setMenuOpen(false);
                  }}
                  className="block px-4 py-2.5 text-white"
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}

          <button className="bg-orange-500 text-white py-2.5 rounded-full mt-2">
            Get Free Proposal →
          </button>
        </div>
      )}
    </div>
    </section>
  );
};

export default Navbar;