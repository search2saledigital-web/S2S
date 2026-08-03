import React from "react";
import {
  MapPin,
  ShoppingCart,
  FileText,
  Link as LinkIcon,
  CheckCircle2,
} from "lucide-react";

export default function Page() {
  const services = [
    {
      icon: MapPin,
      title: "Local SEO",
      description:
        "Capture your local market with optimized Google Business Profiles and localized content strategies designed for regional dominance.",
    },
    {
      icon: ShoppingCart,
      title: "E-commerce SEO",
      description:
        "Drive sales and visibility for your online store with product-level optimization, faceted navigation fixing, and technical excellence.",
    },
    {
      icon: FileText,
      title: "On-Page SEO",
      description:
        "Maximize your relevance with precision keyword targeting, meta-optimization, advanced schema markup, and content structure.",
    },
    {
      icon: LinkIcon,
      title: "Off-Page SEO",
      description:
        "Build authority and trust with strategic backlink profiles, digital PR campaigns, and high-quality placements in authoritative publications.",
    },
  ];

  const auditPoints = [
    "Core Web Vitals & Site Speed Analysis",
    "Crawlability & Indexation Issues",
    "Toxic Backlink Identification",
  ];

  const steps = [
    {
      number: "1",
      title: "Research",
      description: "Deep-dive competitive analysis and keyword opportunity mapping.",
    },
    {
      number: "2",
      title: "Strategy",
      description:
        "Developing a customized blueprint for technical fixes and content creation.",
    },
    {
      number: "3",
      title: "Execution",
      description:
        "Implementing optimizations, building authority, and launching content.",
    },
    {
      number: "4",
      title: "Analysis",
      description:
        "Continuous monitoring, A/B testing, and strategy refinement based on data.",
    },
  ];

  return (
    <div className="bg-[#0b1326] text-[#dae2fd] antialiased selection:bg-[#ec6a06] selection:text-white">
      <main className="">
        {/* Hero Section */}
        <section className="px-4 sm:px-6 max-w-[1280px] mx-auto py-6  md:py-14 flex flex-col items-center text-center relative">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#b4c5ff]/10 via-[#0b1326] to-[#0b1326]" />

          <div className="inline-flex items-center gap-2 bg-[#2d3449]/50 border border-[#434655]/50 rounded-full px-4 py-1.5 mb-6 sm:mb-8">
            <span className="w-2 h-2 rounded-full bg-[#ec6a06] animate-pulse" />
            <span className="font-mono text-[11px] sm:text-xs text-[#b4c5ff] tracking-wider uppercase">
              Enterprise SEO Services
            </span>
          </div>

          <h1 className="font-extrabold text-[32px] leading-[1.2] sm:text-5xl md:text-[64px] md:leading-[1.1] tracking-tight mb-6 max-w-4xl">
            Dominate Search Results.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b4c5ff] to-[#ffb690]">
              Drive Revenue.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-[#c3c6d7] max-w-2xl mb-8 sm:mb-10 px-2 sm:px-0">
            Data-driven SEO strategies engineered to scale your organic growth
            and outperform the competition in an increasingly complex digital
            landscape.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button className="bg-[#ec6a06] text-black text-base sm:text-lg font-semibold px-8 py-4 rounded transition-all duration-300 shadow-[0_0_15px_rgba(249,115,22,0.2)] hover:shadow-[0_0_25px_rgba(249,115,22,0.4)] hover:scale-[1.02]">
              Get Free SEO Audit
            </button>
            <button className="border border-[#b4c5ff] text-[#b4c5ff] text-base sm:text-lg font-semibold px-8 py-4 rounded hover:bg-[#b4c5ff]/10 transition-colors duration-300">
              View Case Studies
            </button>
          </div>

          <div className="mt-12 sm:mt-16 w-full max-w-5xl h-56 sm:h-64 md:h-96 rounded-xl overflow-hidden relative bg-[rgba(15,23,42,0.6)] backdrop-blur-md border border-white/10">
            <div
              className="w-full h-full bg-cover bg-center opacity-60"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAzlO_YurkN4Y6fVeLIHYN-7IbO1iT-ArIB4oUqeqS8gVFUG54bkMuCaIwzpTQr4bgtwG7YJ36UdjXkuC4tsP2b-Ld2yIX_bh_4gExLkhAAIoO5Xx9OxaD2YPdrt5fiA4mIwCexEXsPVFFPECpecuW1C8-3SNW2xLONiPm4k3YdCGdQLeDx7sRA9d-hh2Jcz3p9EomMAgBsXATGtKaLNFj9Cgz4Let4vw8xA41cIItIGgN-yty6JP0v')",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#171f33] to-transparent" />
          </div>
        </section>

        {/* Services Grid Section */}
        <section className="px-4 sm:px-6 max-w-[1280px] mx-auto py-6  md:pb-14">
          <div className="mb-10 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Our Specialized SEO Solutions
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-[#ec6a06]" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {services.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="p-6 md:p-6 rounded-lg group hover:border-[#b4c5ff]/50 transition-colors bg-[rgba(15,23,42,0.6)] backdrop-blur-md border border-white/10"
              >
                <div className="w-12 h-12 rounded bg-[#2d3449] flex items-center justify-center mb-5 sm:mb-6 text-[#b4c5ff]">
                  <Icon size={26} />
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-[#b4c5ff] mb-3">
                  {title}
                </h3>
                <p className="text-sm sm:text-base text-[#c3c6d7]">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* SEO Audit Section */}
        <section className="px-4 sm:px-6 max-w-[1280px] mx-auto py-6  md:pb-14">
          <div className="bg-[#222a3d] rounded-2xl overflow-hidden border border-[#434655]/30 flex flex-col lg:flex-row">
            <div className="p-8 sm:p-10 lg:p-11 lg:w-1/2 flex flex-col justify-center">
              <h2 className="text-2xl sm:text-3xl font-bold mb-5 sm:mb-6">
                In-Depth SEO Audit
              </h2>
              <p className="text-base sm:text-lg text-[#c3c6d7] mb-6 sm:mb-8">
                Uncover the hidden roadblocks holding your site back. Our
                technical audit analyzes 200+ ranking factors, providing a
                prioritized roadmap to immediate traffic gains.
              </p>
              <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                {auditPoints.map((point) => (
                  <li key={point} className="flex items-center gap-3">
                    <CheckCircle2
                      className="text-[#ec6a06] shrink-0"
                      size={20}
                    />
                    <span className="text-sm sm:text-base">{point}</span>
                  </li>
                ))}
              </ul>
              <button className="self-start bg-[#ec6a06] text-black text-sm sm:text-base font-semibold px-6 py-3 rounded transition-all duration-300 shadow-[0_0_15px_rgba(249,115,22,0.2)] hover:shadow-[0_0_25px_rgba(249,115,22,0.4)] hover:scale-[1.02]">
                Request Audit Now
              </button>
            </div>
            <div className="lg:w-1/2 bg-[#171f33] relative min-h-[220px] sm:min-h-[300px] border-t lg:border-t-0 lg:border-l border-[#434655]/30">
              <div
                className="absolute inset-0 bg-cover bg-center opacity-80"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCAwA6NSOskrMEyjUWcL7yo_Tgca6C17jIFiDrRLLiwt6bEH94iFF4M_0tvaREnHOecQQli10roAs0KuERUX5kw9swPchloG6t-AZOqPRZXaO-d9zwdJ5bTZGiFOPD1b0EYKWAOVWTJfaHG5emEFq1o2lbkQikS0od4ZtkKSZ8hTkVBXe1NgygG98cAjcMtRDtdEaB0QvnvPZkCkMq1kRkER4KJfa_9t_qo46XTmCAA4rtGwKYuQA9M')",
                }}
              />
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="px-4 sm:px-6 max-w-[1280px] mx-auto py-6  md:pb-14">
          <div className="text-center mb-10 md:mb-7">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Our Proven Methodology
            </h2>
            <p className="text-base sm:text-lg text-[#c3c6d7] max-w-2xl mx-auto">
              A systematic approach to predictable organic growth.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 md:gap-8 relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-[#434655]/30 -z-10 -translate-y-1/2" />
            {steps.map(({ number, title, description }) => (
              <div
                key={number}
                className="bg-[#171f33] p-6 rounded-lg border border-[#434655]/20 relative"
              >
                <div className="w-10 h-10 rounded-full bg-[#ec6a06] text-black flex items-center justify-center font-bold absolute -top-5 left-1/2 -translate-x-1/2 shadow-[0_0_10px_rgba(249,115,22,0.5)]">
                  {number}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-center mt-6 mb-3">
                  {title}
                </h3>
                <p className="text-xs sm:text-sm text-[#c3c6d7] text-center">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="px-4 sm:px-6 max-w-[1280px] mx-auto py-6  md:pb-14">
          <div className="bg-gradient-to-br from-[#222a3d] to-[#0b1326] border border-[#b4c5ff]/20 rounded-2xl p-8 sm:p-12 md:p-15 text-center relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-96 sm:h-96 bg-[#b4c5ff]/5 rounded-full blur-3xl -z-10" />
            <h2 className="font-extrabold text-[28px] leading-[1.2] sm:text-4xl md:text-[64px] md:leading-[1.1] tracking-tight mb-6">
              Ready to Rank #1?
            </h2>
            <p className="text-base sm:text-lg text-[#c3c6d7] max-w-2xl mx-auto mb-8 sm:mb-10">
              Stop losing market share to your competitors. Let's build a
              data-driven SEO machine that delivers consistent,
              high-converting traffic.
            </p>
            <button className="bg-[#ec6a06] text-black text-base sm:text-lg font-semibold px-8 sm:px-10 py-4 rounded transition-all duration-300 shadow-[0_0_15px_rgba(249,115,22,0.2)] hover:shadow-[0_0_25px_rgba(249,115,22,0.4)] hover:scale-[1.02]">
              Start Your Strategy Session
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}