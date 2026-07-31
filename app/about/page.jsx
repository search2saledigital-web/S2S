"use client"
import React, { useEffect } from "react";
import { Rocket, Target, Code2, TrendingUp, Search, Share2, Globe, Terminal, AtSign, ArrowRight } from "lucide-react";


const services = [
  {
    icon: Target,
    title: "Meta Ads",
    desc: "Precision-targeted campaigns across Facebook & Instagram, engineered to turn ad spend into predictable, scalable revenue.",
  },
  {
    icon: Code2,
    title: "Web Development",
    desc: "Fast, conversion-first websites built to hold up under real traffic — no bloat, no guesswork, just performance.",
  },
  {
    icon: TrendingUp,
    title: "Lead Generation",
    desc: "Full-funnel systems that fill your pipeline with qualified leads, not just clicks — built to compound month over month.",
  },
  {
    icon: Search,
    title: "SEO",
    desc: "Technical, on-page, and content strategy working together to own the rankings that actually drive buyers to you.",
  },
];

export default function AboutPage() {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const glowCards = document.querySelectorAll(".glass-card");
      glowCards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        if (x > 0 && x < rect.width && y > 0 && y < rect.height) {
          card.style.borderColor = "rgba(180, 197, 255, 0.4)";
        } else {
          card.style.borderColor = "rgba(255, 255, 255, 0.1)";
        }
      });
    };
    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="bg-[#0b1326] text-[#dae2fd] font-sans overflow-x-hidden min-h-screen">
     

      

      <main className="">
        {/* Hero Section */}
        <section className="relative  flex items-center justify-center overflow-hidden py-6 md:py-16">
          <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
            <span className=" text-xs text-[#b4c5ff] tracking-widest uppercase mb-6 block">
              Our Mission &amp; Identity
            </span>
            <h1 className=" text-[40px] md:text-[64px] leading-[1.2] md:leading-[1.1] tracking-tight font-extrabold mb-8 ">
              Driven by <span className="text-[#b4c5ff]">Data</span>,<br />
              Defined by <span className="text-[#ffb690]">Results</span>
            </h1>
            <p className="font-body text-lg leading-relaxed text-[#c3c6d7] mb-10 max-w-2xl mx-auto">
              We aren't just a marketing agency; we are your growth architects. We dismantle complex data to build
              high-performance digital engines that scale businesses with surgical precision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#ec6a06] text-white px-8 py-4 rounded-full font-bold btn-glow-secondary transition-all hover:scale-105">
                Our Process
              </button>
              <button className="border border-[#8d90a0] text-[#dae2fd] px-8 py-4 rounded-full font-bold hover:bg-[#2d3449]/30 transition-all">
                View Success Stories
              </button>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-8 md:py-16 bg-[#131b2e]">
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-16 items-center">
              <div className="relative">
                <div className="aspect-video rounded-xl overflow-hidden glass-card p-2">
                  <div
                    className="w-full h-full rounded-lg bg-cover bg-center"
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDzybJof5i7m3hvTM0w1-x5woQpXQlqUMApzfBfr28gWZ_F5MF3j42k6bV9-PlFe5nPk2S6O2cL-EA8oLCHbJpwVbAuHrUDm780tlpjKriCEIql68JReyrJVs7RXTJNhzQYksYf5T8kl9z58q_adHS5bTWVQAY5fAJkygBAZR_DLrja0370T8GVr4N6dpAexCW-LclM1I4O1KuLNQxmIMYhpqzpZIiO72r9fowlq7I-v7Cu2lYw_pqj')",
                    }}
                  />
                </div>
                <div className="absolute -bottom-8 -right-8 p-3 glass-card bg-orange-500 rounded-xl hidden md:block">
                  <div className="text-white font-bold text-3xl">2026</div>
                  <div className="text-white font-label text-xs">ESTABLISHED</div>
                </div>
              </div>
              <div>
                <h2 className="font-headline text-3xl font-bold mb-6">Born from Performance</h2>
                <div className="space-y-4 text-[#c3c6d7] font-body">
                  <p>
                    Search 2 Sale Digital began as a small collective of performance hackers who were tired of
                    vanity metrics. We saw a gap between "clicks" and "conversions"—a gap where most businesses
                    were losing their potential ROI.
                  </p>
                  <p>
                    We built our foundation on a performance-first philosophy, treating every dollar of client
                    spend as if it were our own. Today, we've evolved into a full-scale digital command center for
                    brands that demand measurable superiority.
                  </p>
                  <p>
                    Our journey is defined by the growth of our partners. We don't just provide services; we
                    integrate deeply into your business ecosystem to ensure every digital touchpoint leads to a
                    sale.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section (replaces Core Directives) */}
        <section className="py-6 md:py-16 bg-[#0b1326]">
          <div className="max-w-[1280px] mx-auto px-6 text-center mb-6 md:mb-16">
            <span className="font-label text-xs text-[#ffb690] tracking-widest uppercase mb-4 block">
              What We Do
            </span>
            <h2 className="font-headline text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-[#c3c6d7] max-w-xl mx-auto">
              Four disciplines, one growth engine — each built to feed the next and compound your results.
            </p>
          </div>
          <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="glass-card p-3  md:p-5 rounded-xl border group hover:border-[#b4c5ff]/50 transition-all flex flex-col"
              >
                <div className="w-14 h-14 bg-[#b4c5ff]/10 rounded-lg flex items-center justify-center mb-6 text-[#b4c5ff] group-hover:scale-110 transition-transform">
                  <Icon size={28} strokeWidth={2} />
                </div>
                <h3 className="font-headline text-xl font-semibold mb-3">{title}</h3>
                <p className="text-[#c3c6d7] flex-1">{desc}</p>
                <a
                  href="#"
                  className="mt-6 text-sm font-bold text-[#b4c5ff] flex items-center gap-2 hover:gap-3 transition-all w-fit"
                >
                  Learn more <ArrowRight size={14} />
                </a>
              </div>
            ))}
          </div>
        </section>

   

        {/* CTA Section */}
        <section className="py-8 md:py-16 bg-[#0b1326] relative overflow-hidden">
          <div className="max-w-[1280px] mx-auto px-6 relative z-10">
            <div className="glass-card  rounded-3xl text-center border-[#b4c5ff]/20">
              <h2 className="font-headline text-[40px] md:text-[64px] leading-[1.2] md:leading-[1.1] font-extrabold mb-8">
                Ready to Scale Your Business?
              </h2>
              <p className="font-body text-lg text-[#c3c6d7] mb-12 max-w-2xl mx-auto">
                Join the ranks of high-performance brands that have achieved measurable growth through our
                data-driven digital strategies.
              </p>
              <button className="bg-[#ec6a06] text-white px-10 py-5 rounded-full font-bold text-xl transition-all hover:scale-105 active:scale-95 btn-glow-secondary">
                Start a Conversation
              </button>
            </div>
          </div>
        </section>
      </main>

     
    </div>
  );
}