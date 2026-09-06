"use client";
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
  Building2,
  Globe,
  MonitorCheck,
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
    title: "Business Website Development",
    body: "Create a professional online presence with a responsive business website designed around your brand, customers, clear navigation, engaging content, strong calls-to-action, and SEO-friendly architecture.",
    accent: "orange",
  },
  {
    icon: Building2,
    title: "Corporate Website Development",
    body: "Build a professional corporate website that communicates your company's services, expertise, values, and credibility while delivering a seamless experience across desktop, tablet, and mobile devices.",
    accent: "blue",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Website Development",
    body: "Launch a user-friendly, conversion-focused online store with product and category pages, shopping cart and checkout functionality, payment integration, search and filtering, order management, and SEO-friendly structure.",
    accent: "blue",
  },
  {
    icon: Globe,
    title: "WordPress Website Development",
    body: "Launch and manage your website easily with professional WordPress development for business websites, corporate websites, landing pages, blogs, service websites, custom solutions, redesigns, speed optimization, and SEO-friendly structures.",
    accent: "orange",
  },
  {
    icon: Code2,
    title: "Custom Web Development",
    body: "Get customized web solutions built around your unique business processes, user requirements, and technical specifications when standard website solutions are not enough.",
    accent: "blue",
  },
  {
    icon: MonitorCheck,
    title: "Landing Page Development",
    body: "Create high-converting landing pages for Google Ads, Meta Ads, and marketing campaigns with clear messaging, strong CTAs, responsive layouts, lead forms, fast-loading pages, and SEO-friendly structures.",
    accent: "orange",
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
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-300/30 bg-blue-400/5 text-blue-300 font-mono text-[9px] md:text-xs uppercase tracking-widest backdrop-blur-sm">
                  <Terminal size={16} />
                  Web Development Services in Delhi
                </div>

                <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] text-white">
                  Build a Fast, Modern &{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-orange-300">
                    High-Converting
                  </span>{" "}
                  Website for Your Business
                </h1>

                <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
                  Looking for professional web development services in Delhi?
                  Search2Sale Digital helps businesses build modern, responsive,
                  secure, and SEO-friendly websites designed to attract visitors
                  and convert them into customers.
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
                      <div className="text-2xl font-semibold text-white">
                        99/100
                      </div>
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
          <section
            id="services"
            className="py-7 md:py-14 border-b border-slate-800/60 relative"
          >
            <div className="max-w-7xl mx-auto px-6">
              <div className="mb-10 md:mb-8 md:w-2/3">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Let's build a website that works for your business.
                </h2>
                <p className="text-lg text-slate-400">
                  Whether you need a business website, corporate website,
                  e-commerce store, landing page, or custom web application, we
                  develop solutions tailored to your requirements.
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
                        Custom-architected digital platforms that blend
                        immersive aesthetics with uncompromising performance.
                        Built from the ground up to reflect your brand&apos;s
                        authority.
                      </p>
                    </div>
                  </div>
                </div>

                {SERVICES.slice(0, 2).map(
                  ({ icon: Icon, title, body, accent }) => (
                    <div
                      key={title}
                      className={`bg-slate-900/60 backdrop-blur-xl border border-white/5 rounded-xl p-6 relative overflow-hidden group transition-colors flex flex-col justify-between min-h-[200px] ${
                        accent === "orange"
                          ? "hover:border-orange-300/50"
                          : "hover:border-blue-300/50"
                      }`}
                    >
                      <Icon
                        className={
                          accent === "orange"
                            ? "text-orange-300 size-10 md:size-23"
                            : "text-blue-300 size-10 md:size-25"
                        }
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">
                          {title}
                        </h3>
                        <p className="text-slate-400 text-sm leading-relaxed">
                          {body}
                        </p>
                      </div>
                    </div>
                  ),
                )}

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
                      Data-driven, A/B tested landing pages engineered
                      specifically to maximize ad spend ROI and drive lead
                      generation.
                    </p>
                  </div>
                </div>

                {SERVICES.slice(2).map(
                  ({ icon: Icon, title, body, accent }) => (
                    <div
                      key={title}
                      className={`bg-slate-900/60 backdrop-blur-xl border border-white/5 rounded-xl p-5 relative overflow-hidden group transition-colors flex flex-col justify-between min-h-[200px] ${
                        accent === "orange"
                          ? "hover:border-orange-300/50"
                          : "hover:border-blue-300/50"
                      }`}
                    >
                      <Icon
                        className={
                          accent === "orange"
                            ? "text-orange-300 size-10 md:size-20"
                            : "text-blue-300 size-10 md:size-20"
                        }
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">
                          {title}
                        </h3>
                        <p className="text-slate-400 text-sm leading-relaxed">
                          {body}
                        </p>
                      </div>
                    </div>
                  ),
                )}
              </div>
            </div>
          </section>

          <section className="px-4 sm:px-6 max-w-[1280px] mx-auto py-6 md:pb-14">
            {" "}
            <div className="bg-gradient-to-br from-[#222a3d] to-[#0b1326] border border-[#b4c5ff]/20 rounded-2xl p-8 sm:p-12 md:p-16 relative overflow-hidden">
              {" "}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-96 sm:h-96 bg-[#b4c5ff]/5 rounded-full blur-3xl -z-10" />{" "}
              <div className="max-w-4xl mx-auto text-center">
                {" "}
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6 tracking-tight">
                  {" "}
                  Web Development +{" "}
                  <span className="text-[#ec6a06]">Digital Marketing</span>{" "}
                </h2>{" "}
                <p className="text-base sm:text-lg md:text-xl text-white mb-5">
                  {" "}
                  A great website is only the beginning.{" "}
                </p>{" "}
                <p className="text-sm sm:text-base md:text-lg text-[#c3c6d7] leading-relaxed mb-6">
                  {" "}
                  At Search2Sale Digital, we can combine{" "}
                  <span className="font-semibold text-white">
                    {" "}
                    web development with SEO, Google Ads, social media
                    marketing, and other digital marketing strategies{" "}
                  </span>{" "}
                  to help your business build a stronger online presence.{" "}
                </p>{" "}
                <p className="text-sm sm:text-base md:text-lg text-[#c3c6d7] leading-relaxed max-w-3xl mx-auto">
                  {" "}
                  We can develop your website with marketing and search
                  visibility in mind from the beginning.{" "}
                </p>{" "}
              </div>{" "}
            </div>{" "}
          </section>

          <section className="px-4 sm:px-6 max-w-[1280px] mx-auto py-6 md:pb-14">
            {" "}
            <div className="text-center mb-10 md:mb-12">
              {" "}
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                {" "}
                Why Choose Search2Sale Digital?{" "}
              </h2>{" "}
              <p className="text-base sm:text-lg text-[#c3c6d7] max-w-3xl mx-auto">
                {" "}
                We build websites that are designed to support your business
                goals, deliver a better user experience, and provide a strong
                foundation for long-term digital growth.{" "}
              </p>{" "}
            </div>{" "}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {" "}
              {[
                {
                  number: "01",
                  title: "Business-Focused Development",
                  description:
                    "We don't build websites just to look attractive. We focus on creating websites that support your marketing, branding, lead generation, and sales objectives.",
                },
                {
                  number: "02",
                  title: "Responsive Website Design",
                  description:
                    "Your website should look and work properly on every screen. We develop responsive websites for desktops, tablets, and smartphones.",
                },
                {
                  number: "03",
                  title: "SEO-Friendly Development",
                  description:
                    "We consider SEO during development so that your website has a strong foundation for search engine visibility.",
                },
                {
                  number: "04",
                  title: "Fast & Performance-Focused",
                  description:
                    "Website speed affects user experience and can influence conversions. We focus on clean development and performance optimization.",
                },
                {
                  number: "05",
                  title: "User-Friendly Experience",
                  description:
                    "Simple navigation, clear information, and intuitive layouts help visitors find what they need quickly.",
                },
                {
                  number: "06",
                  title: "Scalable Solutions",
                  description:
                    "We develop websites with future growth in mind, allowing functionality and content to be expanded as your business grows.",
                },
              ].map(({ number, title, description }) => (
                <div
                  key={number}
                  className="group bg-[#171f33] border border-[#434655]/20 rounded-lg p-4 sm:p-5 relative hover:border-[#ec6a06]/50 hover:bg-[#1b243b] transition-all duration-300"
                >
                  {" "}
                  <div className="w-11 h-11 rounded-full bg-[#ec6a06] text-black flex items-center justify-center font-bold text-sm mb-6 shadow-[0_0_10px_rgba(249,115,22,0.35)] group-hover:scale-105 transition-transform duration-300">
                    {" "}
                    {number}{" "}
                  </div>{" "}
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 group-hover:text-[#ec6a06] transition-colors duration-300">
                    {" "}
                    {title}{" "}
                  </h3>{" "}
                  <p className="text-sm sm:text-base text-[#c3c6d7] leading-relaxed">
                    {" "}
                    {description}{" "}
                  </p>{" "}
                </div>
              ))}{" "}
            </div>{" "}
          </section>

          <section className="px-4 sm:px-6 max-w-[1280px] mx-auto py-6 md:pb-14">
            {" "}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              {" "}
              {/* Left Content */}{" "}
              <div>
                {" "}
                <span className="inline-block text-sm font-semibold uppercase tracking-wider text-[#ec6a06] mb-4">
                  {" "}
                  Build Better Websites{" "}
                </span>{" "}
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight mb-5">
                  {" "}
                  What Makes a Good Business Website?{" "}
                </h2>{" "}
                <p className="text-base sm:text-lg text-[#c3c6d7] leading-relaxed max-w-xl">
                  {" "}
                  A successful business website should do more than look
                  professional. It should deliver a fast, secure, user-friendly
                  experience while helping your business attract visitors and
                  turn them into customers.{" "}
                </p>{" "}
              </div>{" "}
              {/* Right Features */}{" "}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {" "}
                {[
                  {
                    title: "Fast",
                    description:
                      "Visitors should be able to access your content quickly with a smooth and optimized browsing experience.",
                  },
                  {
                    title: "Responsive",
                    description:
                      "Your website should work seamlessly across mobile phones, tablets, laptops, and desktop computers.",
                  },
                  {
                    title: "SEO-Friendly",
                    description:
                      "Search engines should be able to crawl, understand, and index your website effectively.",
                  },
                  {
                    title: "User-Friendly",
                    description:
                      "Clear navigation and intuitive layouts help visitors find the information they need quickly.",
                  },
                  {
                    title: "Secure",
                    description:
                      "Your website should follow appropriate security practices and receive regular technical maintenance.",
                  },
                  {
                    title: "Conversion-Focused",
                    description:
                      "Your website should encourage visitors to call, submit an enquiry, request a quote, or make a purchase.",
                  },
                ].map(({ title, description }) => (
                  <div
                    key={title}
                    className="group bg-[#171f33] border border-[#434655]/20 rounded-xl p-4 sm:p-5 hover:border-[#ec6a06]/50 transition-all duration-300"
                  >
                    {" "}
                    <div className="flex items-start gap-4">
                      {" "}
                      <div className="mt-1 w-2 h-2 rounded-full bg-[#ec6a06] shrink-0 shadow-[0_0_8px_rgba(249,115,22,0.6)] group-hover:scale-125 transition-transform duration-300" />{" "}
                      <div>
                        {" "}
                        <h3 className="text-lg font-semibold mb-2 group-hover:text-[#ec6a06] transition-colors duration-300">
                          {" "}
                          {title}{" "}
                        </h3>{" "}
                        <p className="text-sm text-[#c3c6d7] leading-relaxed">
                          {" "}
                          {description}{" "}
                        </p>{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>
                ))}{" "}
              </div>{" "}
            </div>{" "}
          </section>

          <section className="px-4 sm:px-6 max-w-[1000px] mx-auto py-6 md:pb-14">
            {" "}
            <div className="text-center mb-10 md:mb-12">
              {" "}
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                {" "}
                Frequently Asked Questions{" "}
              </h2>{" "}
              <p className="text-base sm:text-lg text-[#c3c6d7] max-w-2xl mx-auto">
                {" "}
                Find answers to common questions about our website development
                services.{" "}
              </p>{" "}
            </div>{" "}
            <div className="space-y-4">
              {" "}
              {[
                {
                  question: "How much does website development cost in Delhi?",
                  answer:
                    "Website development costs depend on the type of website, number of pages, features, design requirements, integrations, and functionality. Contact us with your requirements for a customized quotation.",
                },
                {
                  question: "How long does it take to develop a website?",
                  answer:
                    "The development timeline depends on the project scope. A basic business website can generally be completed faster than a custom or e-commerce website.",
                },
                {
                  question: "Do you develop mobile-friendly websites?",
                  answer:
                    "Yes. We develop responsive websites designed to work across smartphones, tablets, laptops, and desktop computers.",
                },
                {
                  question: "Do you provide SEO-friendly website development?",
                  answer:
                    "Yes. We follow SEO-friendly development practices and can also provide dedicated SEO services to improve your website's organic visibility.",
                },
                {
                  question: "Can you redesign my existing website?",
                  answer:
                    "Yes. We can redesign outdated websites to improve their design, usability, mobile responsiveness, performance, and SEO foundation.",
                },
                {
                  question: "Do you provide website maintenance?",
                  answer:
                    "Yes. Website maintenance can include updates, content changes, technical improvements, security-related maintenance, performance optimization, and troubleshooting.",
                },
                {
                  question: "Can you develop an e-commerce website?",
                  answer:
                    "Yes. We provide e-commerce website development solutions with product pages, categories, shopping functionality, payment integration, and other required features.",
                },
              ].map(({ question, answer }) => (
                <details
                  key={question}
                  className="group bg-[#171f33] border border-[#434655]/20 rounded-lg overflow-hidden hover:border-[#ec6a06]/40 transition-all duration-300"
                >
                  {" "}
                  <summary className="flex items-center justify-between gap-4 cursor-pointer list-none p-5 sm:p-6 text-base sm:text-lg font-semibold text-white">
                    {" "}
                    <span>{question}</span>{" "}
                    <span className="shrink-0 w-8 h-8 rounded-full bg-[#ec6a06] text-black flex items-center justify-center font-bold transition-transform duration-300 group-open:rotate-45">
                      {" "}
                      +{" "}
                    </span>{" "}
                  </summary>{" "}
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6">
                    {" "}
                    <p className="text-sm sm:text-base text-[#c3c6d7] leading-relaxed max-w-4xl">
                      {" "}
                      {answer}{" "}
                    </p>{" "}
                  </div>{" "}
                </details>
              ))}{" "}
            </div>{" "}
          </section>

          <section className="px-4 sm:px-6 max-w-[1280px] mx-auto py-6 md:pb-14">
            {" "}
            <div className="bg-gradient-to-br from-[#222a3d] to-[#0b1326] border border-[#b4c5ff]/20 rounded-2xl p-8 sm:p-12 md:p-16 text-center relative overflow-hidden">
              {" "}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-96 sm:h-96 bg-[#b4c5ff]/5 rounded-full blur-3xl -z-10" />{" "}
              <div className="max-w-4xl mx-auto">
                {" "}
                <h2 className="font-extrabold text-[28px] leading-[1.2] sm:text-4xl md:text-5xl lg:text-[56px] md:leading-[1.1] tracking-tight mb-6">
                  {" "}
                  Ready to Build Your Website?{" "}
                </h2>{" "}
                <p className="text-base sm:text-lg md:text-xl text-[#c3c6d7] max-w-2xl mx-auto mb-6">
                  {" "}
                  Turn your website into a powerful business and marketing
                  tool.{" "}
                </p>{" "}
                <p className="text-base sm:text-lg text-[#c3c6d7] max-w-2xl mx-auto mb-8">
                  {" "}
                  <span className="font-semibold text-white">
                    {" "}
                    Talk to Search2Sale Digital{" "}
                  </span>{" "}
                  today about your web development project.{" "}
                </p>{" "}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                  {" "}
                  <a
                    href="tel:+919625986460"
                    className="bg-[#ec6a06] text-black text-base sm:text-lg font-semibold px-7 sm:px-9 py-4 rounded transition-all duration-300 shadow-[0_0_15px_rgba(249,115,22,0.2)] hover:shadow-[0_0_25px_rgba(249,115,22,0.4)] hover:scale-[1.02]"
                  >
                    {" "}
                    Call Us: +91 96259 86460{" "}
                  </a>{" "}
                  <button className="border border-[#ec6a06]/60 text-white text-base sm:text-lg font-semibold px-7 sm:px-9 py-4 rounded hover:bg-[#ec6a06] hover:text-black transition-all duration-300">
                    {" "}
                    Get a Website Development Quote{" "}
                  </button>{" "}
                </div>{" "}
                <p className="text-sm sm:text-base text-[#c3c6d7]">
                  {" "}
                  <span className="font-semibold text-white">
                    {" "}
                    Search2Sale Digital{" "}
                  </span>{" "}
                  – Web Development & Digital Marketing Solutions in Delhi{" "}
                </p>{" "}
              </div>{" "}
            </div>{" "}
          </section>
        </main>
      </div>
    </div>
  );
}
