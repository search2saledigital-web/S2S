import React from "react";
import {
  Radar,
  ArrowRight,
  Boxes,
  MessagesSquare,
  Activity,
  Camera,
  Briefcase,
  MousePointerClick,
} from "lucide-react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

const colors = {
  background: "#0b1326",
  surfaceContainerLowest: "#060e20",
  surfaceContainerHigh: "#222a3d",
  surfaceVariant: "#2d3449",
  onSurface: "#dae2fd",
  onSurfaceVariant: "#c3c6d7",
  outline: "#8d90a0",
  outlineVariant: "#434655",
  primary: "#b4c5ff",
  primaryContainer: "#2563eb",
  secondary: "#ffb690",
  secondaryContainer: "#ec6a06",
  tertiaryContainer: "#0074a6",
};

const dataCard = {
  backgroundColor: colors.background,
  border: "1px solid rgba(255,255,255,0.1)",
};

const glowBlue = { boxShadow: "0 0 20px rgba(37, 99, 235, 0.2)" };

const gridBg = {
  backgroundImage:
    "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
  backgroundSize: "40px 40px",
};

function StatBlock({ label, value, color }) {
  return (
    <div className="p-4 border rounded-lg" style={{ borderColor: `${colors.outlineVariant}4D`, backgroundColor: colors.background }}>
      <div className="text-[11px] tracking-widest font-semibold mb-1" style={{ color: colors.outline }}>
        {label}
      </div>
      <div className="font-bold text-xl sm:text-2xl" style={{ color }}>
        {value}
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <div
      className="min-h-screen w-full antialiased"
      style={{ backgroundColor: colors.background, color: colors.onSurface }}
    >
      <main>
        {/* Hero */}
        <section className="relative py-6 md:py-14 px-4 sm:px-6 lg:px-8 overflow-hidden" style={gridBg}>
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: `linear-gradient(to bottom, ${colors.primaryContainer}1A, transparent)` }}
          />
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-center relative z-10">
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-[11px] sm:text-xs font-semibold tracking-widest"
                style={{ color: colors.primary, borderColor: `${colors.primary}33`, backgroundColor: `${colors.primary}1A` }}
              >
                <Radar size={14} />
                DATA-DRIVEN FEED DOMINATION
              </div>

              <h1 className="font-extrabold leading-[1.1] tracking-tight text-4xl sm:text-5xl lg:text-6xl">
                Social Performance <br className="hidden sm:block" />
                <span style={{ color: colors.primary }}>Engineering</span>
              </h1>

              <p className="text-base sm:text-lg leading-relaxed max-w-2xl" style={{ color: colors.onSurfaceVariant }}>
                We don't just post. We engineer social ecosystems. Leveraging predictive
                analytics, conversion-optimized creative, and hyper-targeted paid distribution to
                dominate your market's attention graph.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  className="font-semibold px-6 sm:px-8 py-4 rounded flex items-center gap-2 transition-transform hover:scale-[1.02]"
                  style={{ backgroundColor: colors.secondaryContainer, color: "#000" }}
                >
                  Request a Social Audit
                  <ArrowRight size={16} />
                </button>
                <button
                  className="border px-6 sm:px-8 py-4 rounded transition-colors"
                  style={{ borderColor: colors.primary, color: colors.primary }}
                >
                  View Performance Data
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 relative hidden lg:block">
              <div
                className="p-6 rounded-xl relative z-10 transform rotate-3 hover:rotate-0 transition-transform duration-500"
                style={{ ...dataCard, ...glowBlue }}
              >
                <div className="flex justify-between items-center mb-6">
                  <span className="text-[11px] tracking-widest font-semibold" style={{ color: colors.outline }}>
                    CAMPAIGN VELOCITY
                  </span>
                  <span className="font-bold" style={{ color: colors.secondary }}>
                    +342% ROI
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="h-2 rounded overflow-hidden" style={{ backgroundColor: colors.surfaceVariant }}>
                    <div className="h-full w-3/4" style={{ backgroundColor: colors.primary }} />
                  </div>
                  <div className="h-2 rounded overflow-hidden" style={{ backgroundColor: colors.surfaceVariant }}>
                    <div className="h-full w-1/2" style={{ backgroundColor: colors.tertiaryContainer }} />
                  </div>
                  <div className="h-2 rounded overflow-hidden" style={{ backgroundColor: colors.surfaceVariant }}>
                    <div className="h-full w-5/6" style={{ backgroundColor: colors.secondaryContainer }} />
                  </div>
                </div>

                <div className="mt-8 flex gap-4">
                  <div className="p-4 rounded-lg flex-1" style={{ backgroundColor: colors.surfaceContainerHigh }}>
                    <div className="text-sm mb-1" style={{ color: colors.outline }}>
                      Total Reach
                    </div>
                    <div className="text-2xl font-bold">2.4M</div>
                  </div>
                  <div className="p-4 rounded-lg flex-1" style={{ backgroundColor: colors.surfaceContainerHigh }}>
                    <div className="text-sm mb-1" style={{ color: colors.outline }}>
                      Conv. Rate
                    </div>
                    <div className="text-2xl font-bold" style={{ color: colors.primary }}>
                      8.7%
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="absolute -top-10 -right-10 w-64 h-64 rounded-full -z-10"
                style={{ backgroundColor: `${colors.primary}33`, filter: "blur(64px)" }}
              />
            </div>
          </div>
        </section>

        {/* Strategic Social Management */}
        <section className="py-8 md:py-14 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: colors.surfaceContainerLowest }}>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10 sm:mb-16 max-w-2xl mx-auto space-y-3 sm:space-y-4">
              <h2 className="font-bold text-2xl sm:text-3xl">Strategic Social Management</h2>
              <p className="text-base sm:text-lg" style={{ color: colors.onSurfaceVariant }}>
                Building resilient brand communities through data-informed content architecture
                and active technical community management.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              <div
                className="md:col-span-2 md:row-span-2 p-6 sm:p-8 rounded-xl flex flex-col justify-between transition-colors"
                style={dataCard}
              >
                <div>
                  <Boxes size={32} color={colors.primary} className="mb-4" />
                  <h3 className="font-semibold text-lg sm:text-xl mb-2">Content Architecture</h3>
                  <p className="text-sm sm:text-base" style={{ color: colors.onSurfaceVariant }}>
                    We build scalable content matrices designed to hit specific KPIs at every
                    stage of the funnel, from raw brand awareness to direct conversion.
                  </p>
                </div>
                <div
                  className="mt-8 h-40 sm:h-48 rounded relative overflow-hidden flex items-center justify-center border"
                  style={{ backgroundColor: colors.surfaceContainerHigh, borderColor: `${colors.outlineVariant}4D` }}
                >
                  <div
                    className="absolute bottom-0 left-0 w-full h-1/2"
                    style={{ background: `linear-gradient(to top, ${colors.primary}33, transparent)` }}
                  />
                  <svg className="w-full h-full opacity-50" style={{ color: colors.primary }} preserveAspectRatio="none" viewBox="0 0 100 50">
                    <polyline fill="none" points="0,40 20,30 40,35 60,15 80,25 100,5" stroke="currentColor" strokeWidth="1" />
                  </svg>
                </div>
              </div>

              <div className="p-6 sm:p-8 rounded-xl transition-colors" style={dataCard}>
                <MessagesSquare size={26} color={colors.secondary} className="mb-4" />
                <h3 className="font-bold text-base sm:text-lg mb-2">Community Activation</h3>
                <p className="text-sm" style={{ color: colors.onSurfaceVariant }}>
                  Proactive engagement protocols that turn passive followers into active brand
                  advocates and vocal defenders.
                </p>
              </div>

              <div className="p-6 sm:p-8 rounded-xl transition-colors" style={dataCard}>
                <Activity size={26} color={colors.tertiaryContainer} className="mb-4" />
                <h3 className="font-bold text-base sm:text-lg mb-2">Sentiment Analysis</h3>
                <p className="text-sm" style={{ color: colors.onSurfaceVariant }}>
                  Real-time tracking of brand perception utilizing advanced NLP tools to pivot
                  strategy instantly.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Platform Specialization */}
        <section className="py-6 md:py-14 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="mb-10 sm:mb-16 space-y-3 sm:space-y-4">
              <h2 className="font-bold text-2xl sm:text-3xl">Platform Specialization</h2>
              <p className="max-w-2xl text-sm sm:text-base" style={{ color: colors.onSurfaceVariant }}>
                Tailored tactical execution based on the unique algorithmic demands and user
                psychology of each major network.
              </p>
            </div>

            <div className="space-y-6">
              {/* Instagram */}
              <div className="rounded-xl p-6 sm:p-8 flex flex-col md:flex-row gap-6 md:gap-8 items-start md:items-center" style={dataCard}>
                <div
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center shrink-0"
                  style={{
                    background: "linear-gradient(to top right, #facc15, #ef4444, #a855f7)",
                    boxShadow: "0 0 15px rgba(236,72,153,0.3)",
                  }}
                >
                  <FaInstagram className="size-14" color="#fff" />
                </div>
                <div className="flex-grow">
                  <h3 className="font-semibold text-lg sm:text-xl mb-2">Instagram Marketing</h3>
                  <p className="text-sm sm:text-base" style={{ color: colors.onSurfaceVariant }}>
                    High-fidelity visual storytelling. We leverage Reels algorithms and optimized
                    grid curation to drive aesthetic authority and immediate engagement metrics.
                  </p>
                </div>
                <div className="shrink-0 text-left md:text-right">
                  <div className="font-bold text-lg sm:text-xl" style={{ color: colors.primary }}>
                    +185%
                  </div>
                  <div className="text-xs sm:text-sm font-semibold tracking-wide" style={{ color: colors.outline }}>
                    AVG. REACH GROWTH
                  </div>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="rounded-xl p-6 sm:p-8 flex flex-col md:flex-row gap-6 md:gap-8 items-start md:items-center" style={dataCard}>
                <div
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "#0077b5", boxShadow: "0 0 15px rgba(0,119,181,0.3)" }}
                >
                  <FaLinkedin className="size-14" color="#fff" />
                </div>
                <div className="flex-grow">
                  <h3 className="font-semibold text-lg sm:text-xl mb-2">LinkedIn Marketing</h3>
                  <p className="text-sm sm:text-base" style={{ color: colors.onSurfaceVariant }}>
                    B2B Authority engineering. We construct thought-leadership pipelines,
                    utilizing nuanced targeting for lead generation and executive brand
                    positioning.
                  </p>
                </div>
                <div className="shrink-0 text-left md:text-right">
                  <div className="font-bold text-lg sm:text-xl" style={{ color: colors.primary }}>
                    4.2x
                  </div>
                  <div className="text-xs sm:text-sm font-semibold tracking-wide" style={{ color: colors.outline }}>
                    B2B PIPELINE VELOCITY
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Paid Social CTA */}
        <section
          className="py-6 md:py-14  px-4 sm:px-6 lg:px-8 relative overflow-hidden"
          style={{ backgroundColor: colors.surfaceContainerLowest }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: `radial-gradient(ellipse at center, ${colors.primaryContainer}0D, ${colors.background})` }}
          />
          <div className="max-w-5xl mx-auto relative z-10 text-center">
            <MousePointerClick size={40} color={colors.secondary} className="mx-auto mb-6" />
            <h2 className="font-extrabold text-3xl sm:text-5xl mb-6 leading-tight">
              Social Media Advertisement
            </h2>
            <p className="text-base sm:text-lg max-w-2xl mx-auto mb-10" style={{ color: colors.onSurfaceVariant }}>
              Stop burning budget on boosted posts. Our Paid Social infrastructure utilizes
              advanced pixel tracking, lookalike modeling, and relentless A/B creative testing to
              acquire customers at scale while driving down CPA.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-10 sm:mb-12">
              <StatBlock label="ROAS TARGET" value="300%+" color={colors.secondary} />
              <StatBlock label="A/B VARIANTS" value="50/wk" color={colors.primary} />
              <StatBlock label="PIXEL DEPTH" value="Lvl 4" color={colors.primary} />
              <StatBlock label="RETARGETING" value="Dynamic" color={colors.secondary} />
            </div>

            <button
              className="font-semibold px-8 sm:px-10 py-4 sm:py-5 rounded-lg text-base sm:text-lg transition-transform hover:scale-[1.02]"
              style={{ backgroundColor: colors.secondaryContainer, color: "#000" }}
            >
              Request a Paid Social Audit
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}