"use client"
import { useEffect, useState } from "react";
import {
  Rocket,
  Terminal,
  Gauge,
  Code2,
  LayoutDashboard,
  ShoppingCart,
  PlaneLanding,
  RefreshCw,
  Menu,
  X,
} from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "Portfolio", href: "#portfolio" },
];

const SERVICES = [
  {
    icon: LayoutDashboard,
    title: "WordPress Development",
    body: "Enterprise-grade WP solutions, custom themes, and secure plugin architectures.",
    accent: "orange",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    body: "High-conversion Shopify and WooCommerce builds optimized for seamless transactions.",
    accent: "blue",
  },
  {
    icon: RefreshCw,
    title: "Website Redesign",
    body: "Transform legacy infrastructure into modern, high-performing digital assets.",
    accent: "blue",
  },
];

export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <div className="w-full mx-auto">
    <div className="bg-slate-950 mx-w-7xl text-slate-100 antialiased selection:bg-orange-300/30 selection:text-orange-100 min-h-screen font-sans">
 

      <main className="">
        {/* Hero */}
        <section
          id="home"
          className="relative flex items-center py-7 md:py-14 overflow-hidden border-b border-slate-800/60"
        >
          <div
            className="absolute inset-0 opacity-[0.07] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
            aria-hidden="true"
          />
          <div
            className="absolute top-1/4 right-0 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-blue-400/10 rounded-full blur-[80px] md:blur-[120px] pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute bottom-0 left-1/4 w-[250px] h-[250px] md:w-[500px] md:h-[500px] bg-orange-400/10 rounded-full blur-[70px] md:blur-[100px] pointer-events-none"
            aria-hidden="true"
          />

          <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid md:grid-cols-12 gap-10 md:gap-6 items-center">
            <div className="md:col-span-7 space-y-6 md:space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-300/30 bg-blue-400/5 text-blue-300 font-mono text-xs uppercase tracking-widest backdrop-blur-sm">
                <Terminal size={16} />
                High-Performance Web Development
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] text-white">
                Engineering Digital{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-orange-300">
                  Dominance
                </span>{" "}
                through High-Performance Web Development
              </h1>

              <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
                We build robust, scalable, and lightning-fast digital ecosystems designed to
                convert traffic into revenue and establish undeniable technical authority.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2 md:pt-4">
                <button
                  type="button"
                  className="inline-flex items-center justify-center px-8 py-4 bg-orange-300 text-orange-950 font-mono text-xs uppercase tracking-widest font-semibold rounded hover:bg-orange-200 transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-orange-500/10"
                >
                  Free Tech Audit
                </button>
                <button
                  type="button"
                  className="inline-flex items-center justify-center px-8 py-4 border border-slate-600 hover:border-blue-300 text-slate-100 bg-transparent font-mono text-xs uppercase tracking-widest font-semibold rounded transition-all duration-300 hover:bg-slate-800/50"
                >
                  Explore Services
                </button>
              </div>
            </div>

            <div className="md:col-span-5 relative">
              <div className="bg-slate-900/60 backdrop-blur-xl border border-white/5 rounded-xl p-2 relative z-10 shadow-2xl shadow-blue-500/10">
                <div
                  className="absolute -top-4 -left-4 w-24 h-24 bg-blue-400/20 rounded-full blur-2xl"
                  aria-hidden="true"
                />
                <img
                  className="rounded-lg w-full h-[280px] sm:h-[380px] md:h-[500px] object-cover"
                  alt="Abstract 3D visualization of a glowing digital network, dark navy background with neon orange and cyan data streams"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuChaHMm8PVwiD-fW965Dtj1AZesYXWO-0-oy762qd5OMK876Qqi-9F37xiInhwa7dcpq2Pm3wvgbRbkB1jOTNno9c2IpSg2GICyN1okSbbT3qRNZ4J7ALS7QWAQRjoAQdmCnu-sZIt6n9NnAPJChsF9HObuqAZWEhJk-njd7J4mfoXBTUs6vL5TUww-3_xmm90OS2v4Xv7MDMvhmWR4ROMAlO2NYB2Oc3H0LJZ6jbImmUcLMHJUfz6V"
                />
              </div>

              {/* Stat card: inline under image on mobile, floating on desktop */}
              <div className="mt-6 md:mt-0 md:absolute md:-bottom-8 md:-right-8 bg-slate-900/70 backdrop-blur-xl border border-white/5 p-5 md:p-6 rounded-xl border-l-2 border-l-orange-300 z-20 shadow-2xl inline-flex md:flex">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-slate-800 rounded-lg">
                    <Gauge className="text-orange-300" size={28} />
                  </div>
                  <div>
                    <div className="text-2xl font-semibold text-white">99/100</div>
                    <div className="font-mono text-xs uppercase tracking-widest text-slate-400">
                      Core Web Vitals
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Development Ecosystem (Bento Grid) */}
        <section id="services" className="py-7 md:py-14 border-b border-slate-800/60 relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-10 md:mb-8 md:w-2/3">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                The Development Ecosystem
              </h2>
              <p className="text-lg text-slate-400">
                Comprehensive web solutions engineered for scale, security, and superior user
                experience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:auto-rows-[250px]">
              {/* Main feature */}
              <div className="md:col-span-2 md:row-span-2 bg-slate-900/60 backdrop-blur-xl border border-white/5 rounded-xl p-6 relative overflow-hidden group hover:border-blue-300/50 transition-colors min-h-[280px]">
                <div
                  className="absolute top-0 right-0 w-64 h-64 bg-blue-400/10 rounded-full blur-[80px] group-hover:bg-blue-400/20 transition-colors pointer-events-none"
                  aria-hidden="true"
                />
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <Code2 className="text-blue-300 mb-6 size-20 md:size-136" />
                  <div>
                    <h3 className="text-xl font-semibold text-blue-300 mb-3">
                      Website Design &amp; Development
                    </h3>
                    <p className="text-slate-400 max-w-md leading-relaxed">
                      Custom-architected digital platforms that blend immersive aesthetics with
                      uncompromising performance. Built from the ground up to reflect your
                      brand&apos;s authority.
                    </p>
                  </div>
                </div>
              </div>

              {SERVICES.slice(0, 2).map(({ icon: Icon, title, body, accent }) => (
                <div
                  key={title}
                  className={`bg-slate-900/60 backdrop-blur-xl border border-white/5 rounded-xl p-8 relative overflow-hidden group transition-colors flex flex-col justify-between min-h-[200px] ${
                    accent === "orange" ? "hover:border-orange-300/50" : "hover:border-blue-300/50"
                  }`}
                >
                  <Icon className={accent === "orange" ? "text-orange-300 size-10 md:size-23" : "text-blue-300 size-10 md:size-25" }  />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{body}</p>
                  </div>
                </div>
              ))}

              {/* Landing pages */}
              <div className="bg-slate-900/60 backdrop-blur-xl border border-white/5 rounded-xl p-8 relative overflow-hidden group hover:border-orange-300/50 transition-colors flex flex-col justify-between min-h-[200px] md:col-span-2">
                <div className="flex items-start justify-between">
                  <PlaneLanding className="text-orange-300 size-10 md:size-20" />
                  <div className="px-3 py-1 bg-slate-800 rounded-full border border-slate-700 text-xs font-mono text-slate-400">
                    CRO Focused
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Landing Page Optimization
                  </h3>
                  <p className="text-slate-400 leading-relaxed">
                    Data-driven, A/B tested landing pages engineered specifically to maximize ad
                    spend ROI and drive lead generation.
                  </p>
                </div>
              </div>

              {SERVICES.slice(2).map(({ icon: Icon, title, body, accent }) => (
                <div
                  key={title}
                  className={`bg-slate-900/60 backdrop-blur-xl border border-white/5 rounded-xl p-8 relative overflow-hidden group transition-colors flex flex-col justify-between min-h-[200px] ${
                    accent === "orange" ? "hover:border-orange-300/50" : "hover:border-blue-300/50"
                  }`}
                >
                  <Icon className={accent === "orange" ? "text-orange-300 size-10 md:size-20" : "text-blue-300 size-10 md:size-20"} />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

    
    </div>
    </div>
  );
}