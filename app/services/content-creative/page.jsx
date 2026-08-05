import React from "react";
import {
  Rocket,
  Boxes,
  FileText,
  Target,
  Play,
  LineChart,
  Megaphone,
  Activity,
  TrendingUp,
  Palette,
  MonitorSmartphone,
} from "lucide-react";

const colors = {
  background: "#0b1326",
  surfaceContainerLow: "#131b2e",
  surfaceContainerHigh: "#222a3d",
  onSurface: "#dae2fd",
  onSurfaceVariant: "#c3c6d7",
  outlineVariant: "#434655",
  primary: "#b4c5ff",
  primaryContainer: "#2563eb",
  secondary: "#ffb690",
  secondaryContainer: "#ec6a06",
  onSecondary: "#341100",
};

const glass = {
  background: "rgba(15, 23, 42, 0.7)",
  backdropFilter: "blur(20px)",
  border: "1px solid rgba(255,255,255,0.1)",
};

const glowBlue = { boxShadow: "0 0 20px rgba(37, 99, 235, 0.2)" };

function Eyebrow({ children, color }) {
  return (
    <span
      className="font-semibold uppercase tracking-widest text-[11px] sm:text-xs px-3 py-1 rounded-full inline-block border"
      style={{
        color,
        borderColor: `${color}33`,
        backgroundColor: `${color}1A`,
      }}
    >
      {children}
    </span>
  );
}

export default function Page() {
  return (
    <div
      className="min-h-screen w-full antialiased"
      style={{ backgroundColor: colors.background, color: colors.onSurface }}
    >
      <main className="pt-10 sm:pt-16 pb-16 md:pb-10">
        {/* Hero */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto mb-16 sm:mb-28">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-6 items-center">
            <div className="md:col-span-7">
              <div className="flex items-center gap-2 mb-5 text-sm font-semibold" style={{ color: colors.primary }}>
                <Rocket size={18} />
                <span className="tracking-wide">Search 2 Sale Digital</span>
              </div>
              <Eyebrow color={colors.primary}>Engineered Assets for ROI</Eyebrow>
              <h1 className="mt-4 font-extrabold leading-[1.1] tracking-tight text-4xl sm:text-5xl lg:text-6xl">
                Creative that{" "}
                <span
                  className="text-transparent bg-clip-text bg-gradient-to-r"
                  style={{ backgroundImage: `linear-gradient(to right, ${colors.primary}, ${colors.secondary})` }}
                >
                  Converts.
                </span>
              </h1>
              <p className="mt-6 text-base sm:text-lg leading-relaxed max-w-2xl" style={{ color: colors.onSurfaceVariant }}>
                We don't just make things look good. We build performance-driven creative
                frameworks designed to capture attention, dominate algorithms, and drive
                measurable technical authority.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href="#audit"
                  className="px-8 py-4 rounded-lg font-semibold text-center transition-transform hover:scale-[1.02]"
                  style={{ backgroundColor: colors.secondaryContainer, color: colors.onSecondary }}
                >
                  Audit My Creative
                </a>
                <a
                  href="#strategy"
                  className="px-8 py-4 rounded-lg font-semibold text-center border transition-colors"
                  style={{ borderColor: `${colors.primary}4D`, color: colors.primary }}
                >
                  Explore Framework
                </a>
              </div>
            </div>

            <div className="md:col-span-5">
              <div
                className="w-full aspect-square rounded-xl relative overflow-hidden flex items-center justify-center"
                style={{ ...glass, ...glowBlue }}
              >
                <div
                  className="absolute inset-0 opacity-40"
                  style={{
                    background: `radial-gradient(circle at 30% 30%, ${colors.primaryContainer}55, transparent 60%), radial-gradient(circle at 70% 70%, ${colors.secondaryContainer}55, transparent 60%)`,
                  }}
                />
                <div className="relative z-10 text-center px-6">
                  <div className="font-extrabold text-5xl sm:text-6xl" style={{ color: colors.primary }}>
                    +342%
                  </div>
                  <div
                    className="mt-2 text-[11px] sm:text-xs uppercase tracking-widest font-semibold"
                    style={{ color: colors.onSurfaceVariant }}
                  >
                    Conversion Lift via Optimized Assets
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Strategy */}
        <section id="strategy" className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto mb-16 md::mb-7">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="font-bold text-2xl sm:text-3xl">Content Architecture &amp; Engineering</h2>
            <p className="mt-3 text-base sm:text-lg max-w-2xl mx-auto" style={{ color: colors.onSurfaceVariant }}>
              Precision-engineered brand voice aligned with technical SEO and conversion
              psychology.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: Boxes,
                title: "Content Strategy",
                copy: "Data-backed roadmaps mapping content to specific buyer journey stages, ensuring every asset serves a measurable business objective.",
              },
              {
                icon: FileText,
                title: "Technical Blog Writing",
                copy: "Authoritative, long-form content optimized for semantic search and designed to establish industry dominance and capture high-intent traffic.",
              },
              {
                icon: Target,
                title: "Conversion Copywriting",
                copy: "High-impact landing page and ad copy meticulously tested to reduce friction and maximize lead generation velocity.",
              },
            ].map(({ icon: Icon, title, copy }) => (
              <div key={title} className="p-6 sm:p-8 rounded-xl transition-shadow hover:shadow-lg" style={glass}>
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-6"
                  style={{ backgroundColor: `${colors.primary}1A` }}
                >
                  <Icon size={22} color={colors.primary} />
                </div>
                <h3 className="font-semibold text-lg sm:text-xl mb-3">{title}</h3>
                <p className="text-sm sm:text-base" style={{ color: colors.onSurfaceVariant }}>
                  {copy}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Visual Design Command Center */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto mb-16 sm:mb-28">
          <div className="mb-8 sm:mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
            <div>
              <span
                className="text-[11px] sm:text-xs uppercase tracking-widest font-semibold mb-2 block"
                style={{ color: colors.secondary }}
              >
                Visual Assets
              </span>
              <h2 className="font-bold text-2xl sm:text-3xl">Visual Design Command Center</h2>
            </div>
            <p className="text-sm sm:text-base max-w-md md:text-right" style={{ color: colors.onSurfaceVariant }}>
              High-fidelity graphics designed specifically for ad performance and multi-channel
              brand authority.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Large feature */}
            <div
              className="md:col-span-8 rounded-xl p-6 sm:p-8 relative overflow-hidden min-h-[220px] flex flex-col justify-end"
              style={glass}
            >
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  background: `radial-gradient(circle at 20% 80%, ${colors.primaryContainer}66, transparent 55%)`,
                }}
              />
              <div className="relative z-10">
                <h3 className="font-bold text-xl sm:text-2xl mb-2">Performance Ad Creative</h3>
                <p className="text-sm sm:text-base max-w-lg" style={{ color: colors.onSurfaceVariant }}>
                  Rapid-iteration visual assets A/B tested to find the lowest CPA and highest
                  click-through rates.
                </p>
              </div>
            </div>

            {/* Small top right */}
            <div className="md:col-span-4 rounded-xl p-6 sm:p-8 flex flex-col justify-between min-h-[220px]" style={glass}>
              <Palette size={28} color={colors.primary} />
              <div>
                <h4 className="font-semibold text-lg mb-2">Brand Identity</h4>
                <p className="text-sm" style={{ color: colors.onSurfaceVariant }}>
                  Systematized visual guidelines for absolute consistency.
                </p>
              </div>
            </div>

            {/* Small bottom left */}
            <div className="md:col-span-4 rounded-xl p-6 sm:p-8 flex flex-col justify-between min-h-[220px]" style={glass}>
              <MonitorSmartphone size={28} color={colors.secondary} />
              <div>
                <h4 className="font-semibold text-lg mb-2">UI/UX Assets</h4>
                <p className="text-sm" style={{ color: colors.onSurfaceVariant }}>
                  Conversion-optimized graphics for landing pages.
                </p>
              </div>
            </div>

            {/* Medium bottom right */}
            <div
              className="md:col-span-8 rounded-xl p-6 sm:p-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 min-h-[220px]"
              style={glass}
            >
              <div>
                <h4 className="font-semibold text-lg mb-2">Asset Generation Speed</h4>
                <p className="text-sm max-w-xs" style={{ color: colors.onSurfaceVariant }}>
                  High-volume, high-quality output for rapid scaling.
                </p>
              </div>
              <div className="text-left sm:text-right">
                <div className="font-extrabold text-4xl sm:text-5xl" style={{ color: colors.secondary }}>
                  48h
                </div>
                <div
                  className="text-[11px] uppercase tracking-widest font-semibold"
                  style={{ color: colors.onSurfaceVariant }}
                >
                  Turnaround Target
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Video Marketing Engine */}
        <section
          className="py-6 md:py-14 border-y mb-8"
          style={{ backgroundColor: colors.surfaceContainerLow, borderColor: `${colors.outlineVariant}1A` }}
        >
          <div className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
              <div>
                <h2 className="font-bold text-2xl sm:text-3xl mb-6">Video Marketing Engine</h2>
                <p className="text-base sm:text-lg mb-8" style={{ color: colors.onSurfaceVariant }}>
                  Short-form video is the primary driver of algorithmic reach. We produce Reels,
                  Shorts, and TikToks engineered for maximum retention and conversion.
                </p>
                <ul className="space-y-6">
                  {[
                    {
                      icon: Play,
                      title: "Hook Engineering",
                      copy: "First 3-second optimization to drastically reduce scroll rates.",
                    },
                    {
                      icon: LineChart,
                      title: "Retention Analytics",
                      copy: "Data-driven editing techniques to maximize watch time and algorithm distribution.",
                    },
                    {
                      icon: Megaphone,
                      title: "Cross-Platform Syndication",
                      copy: "Native formatting for IG Reels, YouTube Shorts, and TikTok from a single shoot.",
                    },
                  ].map(({ icon: Icon, title, copy }) => (
                    <li key={title} className="flex gap-4">
                      <div
                        className="mt-1 w-8 h-8 rounded-full flex items-center justify-center shrink-0"
                        style={{ backgroundColor: `${colors.primary}1A` }}
                      >
                        <Icon size={15} color={colors.primary} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-base sm:text-lg">{title}</h4>
                        <p className="mt-1 text-sm sm:text-base" style={{ color: colors.onSurfaceVariant }}>
                          {copy}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative">
                <div
                  className="absolute top-1/2 right-4 w-56 h-56 rounded-full -z-0 translate-x-1/3 -translate-y-1/2 hidden sm:block"
                  style={{ backgroundColor: `${colors.primaryContainer}33`, filter: "blur(100px)" }}
                />
                <div className="p-6 rounded-2xl relative z-10" style={{ ...glass, ...glowBlue }}>
                  <div
                    className="flex justify-between items-center border-b pb-4 mb-4"
                    style={{ borderColor: `${colors.outlineVariant}33` }}
                  >
                    <span className="text-xs sm:text-sm font-semibold tracking-wide">
                      Reel Performance Metrics
                    </span>
                    <Activity size={18} color={colors.primary} />
                  </div>

                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span style={{ color: colors.onSurfaceVariant }}>3s View Rate</span>
                        <span className="font-bold" style={{ color: colors.primary }}>
                          68.4%
                        </span>
                      </div>
                      <div className="w-full rounded-full h-2" style={{ backgroundColor: colors.background }}>
                        <div
                          className="h-2 rounded-full"
                          style={{ width: "68.4%", backgroundColor: colors.primary }}
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span style={{ color: colors.onSurfaceVariant }}>Average Watch Time</span>
                        <span className="font-bold" style={{ color: colors.secondary }}>
                          0:14s
                        </span>
                      </div>
                      <div className="w-full rounded-full h-2" style={{ backgroundColor: colors.background }}>
                        <div
                          className="h-2 rounded-full"
                          style={{ width: "85%", backgroundColor: colors.secondary }}
                        />
                      </div>
                    </div>

                    <div
                      className="pt-4 mt-4 border-t flex justify-between items-end"
                      style={{ borderColor: `${colors.outlineVariant}33` }}
                    >
                      <div>
                        <div
                          className="text-[11px] uppercase tracking-widest font-semibold mb-1"
                          style={{ color: colors.onSurfaceVariant }}
                        >
                          Est. Conversions
                        </div>
                        <div className="font-bold text-xl sm:text-2xl">1,240</div>
                      </div>
                      <div className="flex items-center text-sm font-bold" style={{ color: colors.primary }}>
                        <TrendingUp size={16} className="mr-1" /> +12%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="audit" className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="rounded-2xl p-8 sm:p-12 text-center relative overflow-hidden" style={glass}>
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: `linear-gradient(to bottom, ${colors.primaryContainer}0D, transparent)` }}
            />
            <div className="relative z-10">
              <h2 className="font-extrabold text-3xl sm:text-4xl mb-4">
                Ready for creative that performs?
              </h2>
              <p className="text-base sm:text-lg max-w-xl mx-auto mb-8" style={{ color: colors.onSurfaceVariant }}>
                Get a free, no-obligation audit of your current content and creative assets.
              </p>
              <a
                href="#"
                className="inline-block px-8 py-4 rounded-lg font-semibold transition-transform hover:scale-[1.02]"
                style={{ backgroundColor: colors.secondaryContainer, color: colors.onSecondary }}
              >
                Get My Free Proposal
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}