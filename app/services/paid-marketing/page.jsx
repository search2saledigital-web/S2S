"use client";
import { useEffect, useState } from "react";
import {
  Rocket,
  ArrowRight,
  TrendingUp,
  Search,
  Share2,
  CheckCircle2,
  Menu,
  X,
} from "lucide-react";
import { BsYoutube } from "react-icons/bs";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Paid Marketing", href: "#paid-marketing" },
  { label: "Industries", href: "#industries" },
];

export default function PaidMarketingPage() {
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
    <div>
      <div className="bg-slate-950 text-slate-100 antialiased selection:bg-blue-300/30 selection:text-blue-100 min-h-screen font-sans overflow-x-hidden">
        <main className="">
          {/* Hero */}
          <section
            id="home"
            className="relative flex items-center py-6 md:py-14 overflow-hidden"
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
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 to-slate-950 pointer-events-none z-0" />
            <div
              className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-blue-400/10 rounded-full blur-[80px] md:blur-[100px] z-0"
              aria-hidden="true"
            />
            <div
              className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-orange-400/10 rounded-full blur-[90px] md:blur-[120px] z-0"
              aria-hidden="true"
            />

            <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-center">
              <div className="lg:col-span-6 flex flex-col items-start gap-6 md:gap-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-300/30 bg-blue-400/10">
                  <span className="w-2 h-2 rounded-full bg-blue-300 animate-pulse" />
                  <span className="font-mono text-xs uppercase tracking-widest text-blue-300">
                    Precision PPC Engineering
                  </span>
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] text-white">
                  Dominate the Digital Auction with{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-sky-300">
                    Precision PPC
                  </span>
                </h1>

                <p className="text-lg text-slate-400 max-w-xl leading-relaxed">
                  We don&apos;t just buy traffic; we engineer profitable growth
                  across the world&apos;s most competitive ad networks using
                  data-driven architecture.
                </p>

                <div className="flex flex-wrap gap-4 mt-2 md:mt-4">
                  <button
                    type="button"
                    className="inline-flex items-center gap-2 bg-orange-500 text-black font-mono text-xs uppercase tracking-widest font-semibold px-8 py-4 rounded hover:scale-105 transition-transform duration-200 shadow-lg shadow-orange-500/20"
                  >
                    <span>Get Free Performance Audit</span>
                    <ArrowRight size={16} />
                  </button>
                  <button
                    type="button"
                    className="border border-slate-700 text-slate-100 font-mono text-xs uppercase tracking-widest font-semibold px-8 py-4 rounded hover:bg-slate-800/50 transition-colors"
                  >
                    View Case Studies
                  </button>
                </div>
              </div>

              {/* Command Center Visualization */}
              <div className="lg:col-span-6 mt-4 lg:mt-0">
                <div className="relative w-full aspect-[4/3] rounded-xl border border-slate-700/60 bg-slate-900/60 overflow-hidden shadow-2xl shadow-blue-500/10 group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 to-slate-800/60 z-0" />
                  <div className="absolute inset-0 p-4 sm:p-6 flex flex-col gap-4 z-10">
                    <div className="flex justify-between items-center border-b border-slate-700/60 pb-4">
                      <div className="font-mono text-xs uppercase tracking-widest text-blue-300">
                        Cross-Channel ROI
                      </div>
                      <div className="flex gap-2">
                        <span className="w-3 h-3 rounded-full bg-red-400" />
                        <span className="w-3 h-3 rounded-full bg-yellow-500" />
                        <span className="w-3 h-3 rounded-full bg-green-500" />
                      </div>
                    </div>

                    <div className="flex-1 grid grid-cols-2 gap-4">
                      <div className="bg-slate-950/60 border border-slate-700/60 rounded p-4 flex flex-col justify-center">
                        <span className="text-slate-400 text-xs sm:text-sm mb-1">
                          Total Ad Spend
                        </span>
                        <span className="text-2xl sm:text-3xl font-bold text-white">
                          $248.5K
                        </span>
                        <div className="mt-2 text-green-400 text-xs sm:text-sm flex items-center gap-1">
                          <TrendingUp size={16} /> +12.4%
                        </div>
                      </div>
                      <div className="bg-slate-950/60 border border-slate-700/60 rounded p-4 flex flex-col justify-center">
                        <span className="text-slate-400 text-xs sm:text-sm mb-1">
                          Global ROAS
                        </span>
                        <span className="text-2xl sm:text-3xl font-bold text-orange-300">
                          4.8x
                        </span>
                        <div className="mt-2 text-green-400 text-xs sm:text-sm flex items-center gap-1">
                          <TrendingUp size={16} /> +0.6x
                        </div>
                      </div>
                    </div>

                    <div className="h-24 sm:h-1/3 bg-slate-950/60 border border-slate-700/60 rounded p-4">
                      <div className="h-full flex items-end gap-2">
                        <div className="w-1/3 bg-blue-300/40 h-[80%] rounded-t border-t border-blue-300 relative group-hover:h-[90%] transition-all duration-500">
                          <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] sm:text-xs text-blue-300 font-mono">
                            G.Ads
                          </span>
                        </div>
                        <div className="w-1/3 bg-sky-300/40 h-[60%] rounded-t border-t border-sky-300 relative group-hover:h-[75%] transition-all duration-500 delay-100">
                          <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] sm:text-xs text-sky-300 font-mono">
                            Meta
                          </span>
                        </div>
                        <div className="w-1/3 bg-red-400/40 h-[45%] rounded-t border-t border-red-400 relative group-hover:h-[65%] transition-all duration-500 delay-200">
                          <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] sm:text-xs text-red-400 font-mono">
                            YT
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Platform Mastery (Zig-Zag) */}
          <section
            id="services"
            className="py-6 md:py-14 bg-slate-950 relative"
          >
            <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-6 md:mb-10">
                <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
                  Platform <span className="text-orange-300">Mastery</span>
                </h2>
                <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                  Deep technical expertise across the platforms that drive
                  revenue.
                </p>
              </div>

              {/* Google Ads */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-6 items-center mb-7 md:mb-12">
                <div className="md:col-span-5 md:col-start-1">
                  <div className="relative w-full aspect-square rounded-2xl overflow-hidden border border-slate-700/60">
                    <img
                      className="w-full h-full object-cover"
                      alt="Abstract dark-mode visualization of a search results page with glowing blue data nodes, representing precise search-intent ad targeting"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDm9Xi_gwlmE9WCWcDmYoiMOeJ5hFkHVwvdV2_TS5a6cige9e8lYrG6KV_9Joa71y-BdH-Ngg5TDctw0ctXlXQTalYjU7YivEVl55sNq649YbZ63QK0-tqBKgRpUOWdZBHwd1a3kKbhoXqOycaz_TRccE-4XqlAyK0As_9LdCuLNBqOVT_u3Nb936kq3UohAW-i9IKuWSad6ukAFWK-dqUSptAfsKaoETi54pKldXxoWX-mmtldqC8_"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent" />
                  </div>
                </div>
                <div className="md:col-span-6 md:col-start-7 flex flex-col items-start">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded bg-slate-900 border border-slate-700/60 flex items-center justify-center text-blue-300">
                      <Search size={26} />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">
                      Google Ads Management
                    </h3>
                  </div>
                  <p className="text-slate-400 mb-8 leading-relaxed">
                    Capture high-intent demand at the exact moment of search. We
                    structure Search Network and PMax campaigns with rigorous
                    exclusion lists and semantic precision to eliminate wasted
                    spend.
                  </p>
                  <ul className="flex flex-col gap-3 text-slate-100">
                    {[
                      "Search Network & Shopping Architecture",
                      "Performance Max (PMax) Optimization",
                      "Advanced Audience Signals & Value-Based Bidding",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCircle2
                          className="text-blue-300 mt-0.5 shrink-0"
                          size={20}
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Meta Ads */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-6 items-center mb-7 md:mb-12">
                <div className="md:col-span-6 md:col-start-1 order-2 md:order-1 flex flex-col items-start">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded bg-slate-900 border border-slate-700/60 flex items-center justify-center text-sky-300">
                      <Share2 size={26} />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">
                      Meta Ads
                    </h3>
                  </div>
                  <p className="text-slate-400 mb-8 leading-relaxed">
                    Generate demand on Facebook &amp; Instagram with
                    scroll-stopping creative. We pair aggressive multivariate
                    testing with broad audience algorithms to find your ideal
                    customer profile at scale.
                  </p>
                  <div className="grid grid-cols-2 gap-4 w-full">
                    <div className="bg-slate-900 p-4 rounded border border-slate-700/60">
                      <span className="block font-mono text-xs text-sky-300 mb-1">
                        Facebook
                      </span>
                      <span className="text-sm text-slate-400">
                        B2B &amp; Broad Appeal
                      </span>
                    </div>
                    <div className="bg-slate-900 p-4 rounded border border-slate-700/60">
                      <span className="block font-mono text-xs text-pink-400 mb-1">
                        Instagram
                      </span>
                      <span className="text-sm text-slate-400">
                        Visual &amp; High-Ticket
                      </span>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-5 md:col-start-8 order-1 md:order-2">
                  <div className="relative w-full aspect-square rounded-2xl overflow-hidden border border-slate-700/60">
                    <img
                      className="w-full h-full object-cover"
                      alt="Futuristic dark-mode canvas showing layers of engaging ad creative floating with neon engagement metrics, representing Meta advertising performance"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7ZzyAUCy_Q8ExXh801ctmcPyq6-1-ju5Iyu73_4bPkpimhM_ykyFhB7gqyYrvKhZ3rCYuu28_IgwDAyHdrxBKVwINonbe6BthKAbX9mQ6wBFvaqRA5N6zK5dr-fTSe_OtJGSnprJJoCBwObOxOJy9YkbYbP8SJwkyec01vQP5EePXI8AyDxwLPvvwSq0LBPpJWz7_lD-mizep-LJNJMihCGukOrj8FZWvRznUDm7PeW2XVL9uoO1G"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/80 to-transparent" />
                  </div>
                </div>
              </div>

              {/* YouTube Ads */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-6 items-center">
                <div className="md:col-span-5 md:col-start-1">
                  <div className="relative w-full aspect-video md:aspect-square rounded-2xl overflow-hidden border border-slate-700/60 bg-gradient-to-br from-slate-900 via-slate-950 to-red-950/30 flex items-center justify-center">
                    <BsYoutube
                      className="text-red-400/70"
                      size={72}
                      strokeWidth={1.25}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent" />
                  </div>
                </div>
                <div className="md:col-span-6 md:col-start-7 flex flex-col items-start">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded bg-slate-900 border border-slate-700/60 flex items-center justify-center text-red-400">
                      <BsYoutube size={26} />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">
                      YouTube Ads
                    </h3>
                  </div>
                  <p className="text-slate-400 mb-8 leading-relaxed">
                    Build brand demand before the search even happens. We
                    produce and place skippable, non-skippable, and
                    Shorts-native creative across YouTube&apos;s inventory,
                    tuned for view-through and assisted conversions, not just
                    raw views.
                  </p>
                  <div className="grid grid-cols-2 gap-4 w-full">
                    <div className="bg-slate-900 p-4 rounded border border-slate-700/60">
                      <span className="block font-mono text-xs text-red-400 mb-1">
                        In-Stream
                      </span>
                      <span className="text-sm text-slate-400">
                        Skippable &amp; Bumper
                      </span>
                    </div>
                    <div className="bg-slate-900 p-4 rounded border border-slate-700/60">
                      <span className="block font-mono text-xs text-orange-300 mb-1">
                        Discovery
                      </span>
                      <span className="text-sm text-slate-400">
                        Shorts &amp; Search Placement
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA band */}
          <section className="py-6 md:py-12 border-t border-slate-800/60 bg-slate-900/40">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  Ready to see where your ad spend is leaking?
                </h2>
                <p className="text-slate-400">
                  Get a free, no-obligation audit of your current campaigns.
                </p>
              </div>
              <button
                type="button"
                className="inline-flex items-center gap-2 bg-orange-500 text-black font-mono text-xs uppercase tracking-widest font-semibold px-8 py-4 rounded hover:scale-105 transition-transform duration-200 shadow-lg shadow-orange-500/20 shrink-0"
              >
                <span>Get Free Performance Audit</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
