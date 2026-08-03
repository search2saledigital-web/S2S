"use client"
import React, { useState } from "react";
import {
  Rocket,
  Menu,
  X,
  Zap,
  Link as LinkIcon,
  ChevronDown,
  ArrowRight,
  Headset,
  Mail,
  PhoneCall,
  MapPin,
  BadgeCheck,
  Timer,
  Globe,
} from "lucide-react";

export default function Contact() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    url: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const navLinks = ["Services", "Industries", "Portfolio"];

  return (
    <div className="bg-[#0b1326] text-[#dae2fd] antialiased min-h-screen flex flex-col overflow-x-hidden selection:bg-[#2563eb] selection:text-[#eeefff]">
      {/* Top App Bar */}
     

      {/* Main Content */}
      <main className="flex-grow md:pt-4 relative w-full overflow-hidden">
        {/* Background grid + glows */}
        <div
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(180,197,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(180,197,255,0.05) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute top-[-10%] right-[-5%] w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] bg-[#b4c5ff]/10 rounded-full blur-[100px] sm:blur-[120px] pointer-events-none mix-blend-screen" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[250px] h-[250px] sm:w-[500px] sm:h-[500px] bg-[#ec6a06]/10 rounded-full blur-[80px] sm:blur-[100px] pointer-events-none mix-blend-screen" />

        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 relative z-10 py-12 md:py-14" >
          {/* Hero */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 md:mb-24">
            <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full border border-[#b4c5ff]/30 bg-[#b4c5ff]/10">
              <Zap className="text-[#b4c5ff] mr-2 w-4 h-4" />
              <span className="font-mono text-[11px] sm:text-xs text-[#b4c5ff] uppercase tracking-widest">
                Initiate Contact
              </span>
            </div>
            <h1 className="font-extrabold text-[32px] leading-[1.2] sm:text-5xl md:text-[64px] md:leading-[1.1] tracking-tight text-[#dae2fd] mb-6">
              Ready to Scale <br />{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b4c5ff] to-[#89ceff]">
                Your ROI?
              </span>
            </h1>
            <p className="text-base sm:text-lg text-[#c3c6d7] px-2 sm:px-0">
              Let's discuss how our data-driven strategies can dominate your
              market. Drop your details below for a comprehensive performance
              analysis.
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-start">
            {/* Lead Capture Form */}
            <div className="md:col-span-7 rounded-xl p-5 sm:p-8 md:p-10 relative overflow-hidden group bg-gradient-to-br from-[#171f33]/60 to-[#131b2e]/80 backdrop-blur-md border border-white/5">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#b4c5ff] to-transparent" />
              <h2 className="font-bold text-xl sm:text-2xl text-[#dae2fd] mb-6 sm:mb-8">
                Get Your Free Performance Audit
              </h2>

              {submitted ? (
                <div className="rounded-lg border border-[#b4c5ff]/30 bg-[#b4c5ff]/10 p-6 text-center">
                  <BadgeCheck className="mx-auto mb-3 text-[#b4c5ff]" size={32} />
                  <p className="text-[#dae2fd] font-semibold">
                    Request received. We'll be in touch shortly.
                  </p>
                </div>
              ) : (
                <form className="space-y-5 sm:space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                    <div className="space-y-2">
                      <label
                        className="block font-mono text-[11px] text-[#c3c6d7] uppercase tracking-wider"
                        htmlFor="name"
                      >
                        Full Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Jane Doe"
                        className="w-full bg-[#0b1326] border border-[#434655]/50 rounded-lg px-4 py-3 text-[#dae2fd] placeholder:text-[#434655] focus:outline-none focus:border-[#2563eb] focus:shadow-[0_0_15px_rgba(37,99,235,0.3)] transition-all text-sm sm:text-base"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        className="block font-mono text-[11px] text-[#c3c6d7] uppercase tracking-wider"
                        htmlFor="email"
                      >
                        Corporate Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="jane@company.com"
                        className="w-full bg-[#0b1326] border border-[#434655]/50 rounded-lg px-4 py-3 text-[#dae2fd] placeholder:text-[#434655] focus:outline-none focus:border-[#2563eb] focus:shadow-[0_0_15px_rgba(37,99,235,0.3)] transition-all text-sm sm:text-base"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label
                      className="block font-mono text-[11px] text-[#c3c6d7] uppercase tracking-wider"
                      htmlFor="url"
                    >
                      Website URL
                    </label>
                    <div className="relative">
                      <LinkIcon
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-[#434655]"
                        size={16}
                      />
                      <input
                        id="url"
                        type="url"
                        value={form.url}
                        onChange={handleChange}
                        placeholder="https://www.yourdomain.com"
                        className="w-full bg-[#0b1326] border border-[#434655]/50 rounded-lg pl-12 pr-4 py-3 text-[#dae2fd] placeholder:text-[#434655] focus:outline-none focus:border-[#2563eb] focus:shadow-[0_0_15px_rgba(37,99,235,0.3)] transition-all text-sm sm:text-base"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label
                      className="block font-mono text-[11px] text-[#c3c6d7] uppercase tracking-wider"
                      htmlFor="service"
                    >
                      Service Interest
                    </label>
                    <div className="relative">
                      <select
                        id="service"
                        value={form.service}
                        onChange={handleChange}
                        className="w-full bg-[#0b1326] border border-[#434655]/50 rounded-lg px-4 py-3 text-[#dae2fd] focus:outline-none focus:border-[#2563eb] focus:shadow-[0_0_15px_rgba(37,99,235,0.3)] transition-all appearance-none text-sm sm:text-base"
                      >
                        <option value="" disabled>
                          Select Primary Objective
                        </option>
                        <option value="seo">SEO &amp; Organic Growth</option>
                        <option value="meta">Meta Ads Scaling</option>
                        <option value="google">Google Ads Domination</option>
                        <option value="full">Full-Scale Performance</option>
                      </select>
                      <ChevronDown
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-[#434655] pointer-events-none"
                        size={18}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label
                      className="block font-mono text-[11px] text-[#c3c6d7] uppercase tracking-wider"
                      htmlFor="message"
                    >
                      Project Brief
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Briefly describe your current roadblocks and target KPIs..."
                      className="w-full bg-[#0b1326] border border-[#434655]/50 rounded-lg px-4 py-3 text-[#dae2fd] placeholder:text-[#434655] focus:outline-none focus:border-[#2563eb] focus:shadow-[0_0_15px_rgba(37,99,235,0.3)] transition-all resize-none text-sm sm:text-base"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#ec6a06] hover:bg-[#ff802b] text-[#0b1326] font-bold text-base sm:text-xl rounded-lg py-3.5 sm:py-4 transition-all hover:scale-[1.01] shadow-[0_0_20px_rgba(236,106,6,0.2)] hover:shadow-[0_0_30px_rgba(236,106,6,0.4)] flex items-center justify-center gap-2 group/btn mt-6 sm:mt-8"
                  >
                    <span>Submit Audit Request</span>
                    <ArrowRight
                      className="group-hover/btn:translate-x-1 transition-transform"
                      size={20}
                    />
                  </button>
                  <p className="text-center font-mono text-[10px] sm:text-[11px] text-[#434655] mt-4 tracking-wide">
                    Confidentiality Guaranteed. No spam.
                  </p>
                </form>
              )}
            </div>

            {/* Right Column */}
            <div className="md:col-span-5 space-y-6">
              {/* Direct Contact Card */}
              <div className="rounded-xl p-6 sm:p-8 border border-[#434655]/30 bg-gradient-to-br from-[#171f33]/60 to-[#131b2e]/80 backdrop-blur-md">
                <h3 className="text-lg sm:text-2xl font-bold text-[#b4c5ff] mb-6 flex items-center gap-2">
                  <Headset size={22} />
                  Direct Channels
                </h3>
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-start gap-4 p-4 rounded-lg bg-[#0b1326]/50 border border-[#434655]/10 hover:border-[#b4c5ff]/30 transition-colors cursor-pointer group/contact">
                    <div className="bg-[#2563eb]/20 p-3 rounded-lg text-[#b4c5ff] shrink-0">
                      <Mail size={20} />
                    </div>
                    <div className="min-w-0">
                      <p className="font-mono text-[10px] sm:text-[11px] text-[#434655] uppercase mb-1 tracking-wider">
                        Email Inquiry
                      </p>
                      <p className="text-sm sm:text-base text-[#dae2fd] group-hover/contact:text-[#b4c5ff] transition-colors break-words">
                        hello@search2sale.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-lg bg-[#0b1326]/50 border border-[#434655]/10 hover:border-[#b4c5ff]/30 transition-colors cursor-pointer group/contact">
                    <div className="bg-[#2563eb]/20 p-3 rounded-lg text-[#b4c5ff] shrink-0">
                      <PhoneCall size={20} />
                    </div>
                    <div>
                      <p className="font-mono text-[10px] sm:text-[11px] text-[#434655] uppercase mb-1 tracking-wider">
                        Priority Hotline
                      </p>
                      <p className="text-sm sm:text-base text-[#dae2fd] group-hover/contact:text-[#b4c5ff] transition-colors">
                        +1 (800) 555-DATA
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-lg bg-[#0b1326]/50 border border-[#434655]/10 hover:border-[#b4c5ff]/30 transition-colors cursor-pointer group/contact">
                    <div className="bg-[#2563eb]/20 p-3 rounded-lg text-[#b4c5ff] shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="font-mono text-[10px] sm:text-[11px] text-[#434655] uppercase mb-1 tracking-wider">
                        HQ Command
                      </p>
                      <p className="text-sm sm:text-base text-[#dae2fd] group-hover/contact:text-[#b4c5ff] transition-colors">
                        100 Innovation Way, Suite 404
                        <br />
                        Tech District, SF 94105
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust Card */}
              <div className="rounded-xl p-6 sm:p-8 border border-[#434655]/30 text-center relative overflow-hidden bg-gradient-to-br from-[#171f33]/60 to-[#131b2e]/80 backdrop-blur-md">
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-[#0b1326] rounded-full border border-[#b4c5ff]/20 mb-4 shadow-[0_0_15px_rgba(180,197,255,0.2)]">
                    <BadgeCheck className="text-[#b4c5ff]" size={22} />
                  </div>
                  <h4 className="text-lg sm:text-2xl font-semibold text-[#dae2fd] mb-2">
                    Join 500+ High-Performance Brands
                  </h4>
                  <p className="text-sm sm:text-base text-[#c3c6d7] mb-6">
                    Partnering with industry leaders to drive measurable,
                    scalable growth.
                  </p>
                  <div className="pt-4 border-t border-[#434655]/20 flex items-center justify-center gap-2 text-[#ffb690]">
                    <Timer size={16} />
                    <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-wider">
                      Typical response time: Under 2 hours.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

    
    </div>
  );
}