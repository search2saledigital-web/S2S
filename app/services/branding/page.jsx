import React from "react";
import {
  ArrowRight,
  Landmark,
  Palette,
  PenTool,
  Globe,
  ShieldCheck,
} from "lucide-react";

export default function Page() {
  const services = [
    {
      icon: Landmark,
      iconColor: "text-[#b4c5ff]",
      glowColor: "bg-[#b4c5ff]/5 group-hover:bg-[#b4c5ff]/20",
      title: "Brand Strategy",
      description:
        "Market positioning, competitive analysis, and voice definition to ensure your message penetrates the noise.",
      span: "",
    },
    {
      icon: Palette,
      iconColor: "text-[#89ceff]",
      glowColor: "bg-[#89ceff]/5 group-hover:bg-[#89ceff]/20",
      title: "Logo Design",
      description:
        "Scalable, iconic visual marks meticulously crafted to serve as the anchor of your corporate identity.",
      span: "",
    },
    {
      icon: PenTool,
      iconColor: "text-[#ffb690]",
      glowColor: "bg-[#ffb690]/5 group-hover:bg-[#ffb690]/20",
      title: "Identity Design",
      description:
        "Comprehensive visual systems including typography, color palettes, and strict style guides for total consistency.",
      span: "",
    },
    {
      icon: Globe,
      iconColor: "text-[#0053db]",
      glowColor: "bg-[#0053db]/5 group-hover:bg-[#0053db]/20",
      title: "Holistic Branding",
      description:
        "End-to-end brand development explicitly tailored for digital-first companies looking to dominate market share.",
      span: "lg:col-span-2",
    },
    {
      icon: ShieldCheck,
      iconColor: "text-[#ffb4ab]",
      glowColor: "bg-[#ffb4ab]/5 group-hover:bg-[#ffb4ab]/20",
      title: "Reputation Mgt.",
      description:
        "Proactive strategies for protecting, monitoring, and aggressively enhancing your brand's digital presence.",
      span: "",
    },
  ];

  return (
    <div className="bg-[#0b1326] text-[#dae2fd] antialiased font-sans overflow-x-hidden selection:bg-[#2563eb] selection:text-[#eeefff]">
      <main className=" pb-6  md:pb-10">
        {/* Hero Section */}
        <section className="relative px-4 sm:px-6 max-w-[1280px] mx-auto min-h-[auto] md:min-h-[600px] flex items-center mb-7 md:mb-7 py-12 sm:py-0">
          <div
            className="absolute inset-0 opacity-30 z-0 pointer-events-none rounded-3xl"
            style={{
              backgroundSize: "40px 40px",
              backgroundImage:
                "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
            }}
          />
          <div className="absolute top-1/2 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-[#b4c5ff]/20 blur-[100px] sm:blur-[120px] rounded-full pointer-events-none translate-x-1/2 -translate-y-1/2" />

          <div className="relative z-10 max-w-3xl">
            <div className="inline-block px-4 py-1 rounded-full bg-[#b4c5ff]/10 border border-[#b4c5ff]/20 text-[#b4c5ff] font-mono text-[11px] sm:text-xs tracking-widest mb-6">
              Identity Engineering
            </div>
            <h1 className="font-extrabold text-[32px] leading-[1.2] sm:text-5xl md:text-[64px] md:leading-[1.1] tracking-tight mb-6">
              Build a Brand that{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#89ceff] to-[#b4c5ff]">
                Outperforms
              </span>{" "}
              the Competition.
            </h1>
            <p className="text-base sm:text-lg text-[#c3c6d7] mb-8 sm:mb-10 max-w-2xl">
              Data-driven branding and identity strategies engineered for
              market dominance and long-term ROI. We transform businesses
              into category leaders through precision design and strategic
              positioning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#ec6a06] text-[#4a1c00] font-mono text-xs px-8 py-4 rounded transition-transform hover:scale-105 shadow-[0_0_15px_rgba(236,106,6,0.2)] hover:shadow-[0_0_25px_rgba(236,106,6,0.4)] uppercase tracking-wider font-bold text-center">
                Get Free Brand Audit
              </button>
              <button className="border border-[#8d90a0] text-[#dae2fd] font-mono text-xs px-8 py-4 rounded hover:bg-[#2d3449] transition-colors uppercase tracking-wider text-center flex justify-center items-center gap-2">
                View Our Work <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="px-4 sm:px-6 max-w-[1280px] mx-auto">
          <div className="mb-10 sm:mb-12 border-l-4 border-[#b4c5ff] pl-5 sm:pl-6">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">
              Our Branding Ecosystem
            </h2>
            <p className="text-sm sm:text-base text-[#c3c6d7] max-w-2xl">
              A comprehensive suite of identity services designed to
              establish authority and drive conversion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {services.map(({ icon: Icon, iconColor, glowColor, title, description, span }) => (
              <div
                key={title}
                className={`bg-[#171f33] border border-[#434655]/30 p-6 sm:p-8 rounded-xl hover:border-[#b4c5ff]/50 transition-colors group relative overflow-hidden ${span}`}
              >
                <div
                  className={`absolute top-0 right-0 w-32 h-32 blur-3xl transition-all rounded-full ${glowColor}`}
                />
                <Icon className={`${iconColor} mb-5 sm:mb-6 relative`} size={36} />
                <h3 className="text-lg sm:text-2xl font-semibold mb-3 relative">
                  {title}
                </h3>
                <p className="text-sm sm:text-base text-[#c3c6d7] relative">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}