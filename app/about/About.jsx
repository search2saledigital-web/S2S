"use client";

import React from "react";
import {
  Target,
  Eye,
  Search,
  Megaphone,
  Share2,
  TrendingUp,
  Code2,
  PenTool,
  Palette,
  Users,
  CheckCircle2,
  ArrowRight,
  Building2,
  HeartPulse,
  GraduationCap,
  ShoppingCart,
  Landmark,
  Car,
  Laptop,
  BriefcaseBusiness,
  Lightbulb,
  BarChart3,
  RefreshCw,
  Handshake,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Search,
    title: "SEO Services",
    href: "/services/seo",
    desc: "Improve your search visibility and attract relevant organic traffic with technical SEO, on-page optimization, content, local SEO, and off-page strategies.",
  },
  {
    icon: Megaphone,
    title: "Google Ads & Paid Marketing",
    href: "/services/paid-marketing",
    desc: "Reach potential customers when they are searching for your products and services through targeted Google Ads and PPC campaigns.",
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    href: "/services/social-media-marketing",
    desc: "Build your brand and engage your audience through strategic social media management, content creation, paid social campaigns, and community engagement.",
  },
  {
    icon: TrendingUp,
    title: "Performance Marketing",
    href: "/services/performance-marketing",
    desc: "Create measurable customer acquisition campaigns focused on leads, sales, conversions, revenue, and marketing efficiency.",
  },
  {
    icon: Code2,
    title: "Web Development",
    href: "/services/web-dev",
    desc: "Build fast, responsive, user-friendly, and SEO-friendly websites designed to support your marketing and business objectives.",
  },
  {
    icon: PenTool,
    title: "Content & Creative",
    href: "/services/content-creative",
    desc: "Create engaging website content, blogs, social media posts, graphics, ad creatives, Reels, and other marketing assets.",
  },
  {
    icon: Palette,
    title: "Branding",
    href: "/services/branding",
    desc: "Develop a strong and consistent brand identity through brand strategy, logo design, visual identity, messaging, and digital branding.",
  },
  {
    icon: Users,
    title: "Lead Generation",
    href: "/services/branding",
    desc: "Build marketing systems designed to attract potential customers and turn website visitors and advertising traffic into qualified enquiries.",
  },
];

const approaches = [
  {
    icon: Target,
    title: "Strategy Before Execution",
    desc: "Before starting a campaign, we work to understand your business, customers, competition, market, and objectives.",
  },
  {
    icon: Users,
    title: "Customer-Focused Marketing",
    desc: "We focus on reaching people who are most relevant to your business rather than simply increasing traffic or audience numbers.",
  },
  {
    icon: BarChart3,
    title: "Data-Informed Decisions",
    desc: "We use available performance data and analytics to understand what is working and where improvements can be made.",
  },
  {
    icon: RefreshCw,
    title: "Continuous Optimization",
    desc: "Digital marketing is constantly changing. We monitor performance and refine campaigns, content, websites, and strategies over time.",
  },
  {
    icon: TrendingUp,
    title: "Long-Term Growth",
    desc: "We aim to build digital assets and marketing systems that continue to create value rather than relying only on short-term campaigns.",
  },
];

const reasons = [
  {
    icon: Target,
    title: "Customized Strategies",
    desc: "Every business has different customers, competitors, budgets, and objectives. We create strategies based on your specific requirements.",
  },
  {
    icon: Handshake,
    title: "Transparent Communication",
    desc: "We believe clients should understand what is being done, why it is being done, and how performance is being measured.",
  },
  {
    icon: TrendingUp,
    title: "Results-Oriented Thinking",
    desc: "We focus on meaningful business metrics such as qualified leads, conversions, sales, traffic quality, and customer acquisition.",
  },
  {
    icon: Code2,
    title: "Creative + Technical Expertise",
    desc: "Successful digital marketing requires both creativity and technology. We combine strategy, content, design, development, advertising, and analytics.",
  },
  {
    icon: Users,
    title: "Long-Term Partnership",
    desc: "We aim to build lasting relationships with clients by continuously improving their digital presence and marketing performance.",
  },
];

const industries = [
  {
    icon: Building2,
    title: "Real Estate",
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
  },
  {
    icon: GraduationCap,
    title: "Education",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
  },
  {
    icon: Landmark,
    title: "Finance",
  },
  {
    icon: Car,
    title: "Automotive",
  },
  {
    icon: Laptop,
    title: "Technology",
  },
  {
    icon: BriefcaseBusiness,
    title: "Professional Services",
  },
  {
    icon: Building2,
    title: "Local Businesses",
  },
  {
    icon: Lightbulb,
    title: "Startups",
  },
  {
    icon: BriefcaseBusiness,
    title: "B2B Businesses",
  },
  {
    icon: Users,
    title: "Service-Based Businesses",
  },
];

const philosophy = [
  {
    number: "01",
    title: "Be Visible",
    desc: "Your customers need to be able to find your business through search engines, social media, advertising, and other digital channels.",
  },
  {
    number: "02",
    title: "Be Relevant",
    desc: "Your content and marketing message should answer your customer's needs and provide a clear reason to choose your business.",
  },
  {
    number: "03",
    title: "Be Measurable",
    desc: "You should be able to understand what your marketing is doing and where opportunities for improvement exist.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#020618] text-white">
      {/* =========================================================
          HERO SECTION
      ========================================================= */}
      <section className="relative overflow-hidden py-12">
        {/* Background Glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-[-150px] top-[-150px] h-[350px] w-[350px] rounded-full bg-[#ec6a06]/5 blur-3xl" />
          <div className="absolute right-[-150px] bottom-[-150px] h-[350px] w-[350px] rounded-full bg-[#ec6a06]/5 blur-3xl" />
        </div>

        <div className="relative z-10 max-w-[1300px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-5">

            {/* LEFT CONTENT */}
            <div className="max-w-5xl">
              <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#ec6a06] mb-5">
                About Search2Sale Digital
              </span>

              <h1 className="text-[42px] leading-[1.05] font-extrabold tracking-tight text-white">
                A Result-Driven{" "}
                <span className="text-[#ec6a06]">
                  Digital Marketing
                </span>{" "}
                Agency in Delhi
              </h1>

              <p className="mt-7 text-lg md:text-lg leading-8 text-white/70 max-w-3xl">
                Welcome to Search2Sale Digital, a result-oriented digital
                marketing agency in Delhi helping businesses build a stronger
                online presence, reach their target customers, and generate
                measurable growth.
              </p>

              <div className="mt-8 flex gap-2">
                {[
                  "SEO",
                  "Google Ads",
                  "Meta Ads",
                  "Social Media",
                  "Performance Marketing",
                  "Web Development",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border text-nowrap border-white/10 bg-white/[0.03] px-4 py-1 text-sm font-medium text-white/80"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* RIGHT SVG - DESKTOP ONLY */}
            <div className="hidden lg:flex items-center justify-center relative">

              {/* Glow */}
              <div className="absolute h-[380px] w-[380px] rounded-full bg-[#ec6a06]/10 blur-[100px]" />

              <svg
                viewBox="0 0 520 440"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="relative w-full max-w-[520px] h-auto animate-[float_5s_ease-in-out_infinite]"
              >
                {/* Background Circle */}
                <circle
                  cx="260"
                  cy="220"
                  r="175"
                  fill="#ec6a06"
                  fillOpacity="0.035"
                />

                <circle
                  cx="260"
                  cy="220"
                  r="145"
                  stroke="#ec6a06"
                  strokeOpacity="0.12"
                  strokeDasharray="5 9"
                />

                {/* Main Dashboard */}
                <rect
                  x="95"
                  y="85"
                  width="330"
                  height="250"
                  rx="18"
                  fill="#111827"
                  stroke="#ffffff"
                  strokeOpacity="0.12"
                  strokeWidth="1.5"
                />

                <rect
                  x="95"
                  y="85"
                  width="330"
                  height="42"
                  rx="18"
                  fill="#1f2937"
                />

                <path
                  d="M95 109V127H425V109"
                  fill="#1f2937"
                />

                <circle cx="116" cy="106" r="4" fill="#ec6a06" />
                <circle cx="130" cy="106" r="4" fill="#ffffff" fillOpacity="0.3" />
                <circle cx="144" cy="106" r="4" fill="#ffffff" fillOpacity="0.3" />

                {/* Dashboard Text */}
                <rect x="118" y="147" width="110" height="8" rx="4" fill="#ffffff" fillOpacity="0.8" />
                <rect x="118" y="163" width="65" height="5" rx="2.5" fill="#ffffff" fillOpacity="0.2" />

                {/* Stats Cards */}
                <rect x="118" y="187" width="88" height="65" rx="9" fill="#ffffff" fillOpacity="0.04" stroke="#ffffff" strokeOpacity="0.08" />
                <rect x="218" y="187" width="88" height="65" rx="9" fill="#ffffff" fillOpacity="0.04" stroke="#ffffff" strokeOpacity="0.08" />
                <rect x="318" y="187" width="84" height="65" rx="9" fill="#ffffff" fillOpacity="0.04" stroke="#ffffff" strokeOpacity="0.08" />

                <rect x="130" y="199" width="36" height="5" rx="2.5" fill="#ffffff" fillOpacity="0.3" />
                <rect x="130" y="216" width="55" height="14" rx="4" fill="#ec6a06" />

                <rect x="230" y="199" width="36" height="5" rx="2.5" fill="#ffffff" fillOpacity="0.3" />
                <rect x="230" y="216" width="50" height="14" rx="4" fill="#ffffff" fillOpacity="0.8" />

                <rect x="330" y="199" width="36" height="5" rx="2.5" fill="#ffffff" fillOpacity="0.3" />
                <rect x="330" y="216" width="48" height="14" rx="4" fill="#ec6a06" />

                {/* Growth Chart */}
                <path
                  d="M120 299L155 283L190 290L225 265L260 275L295 244L330 253L365 220L400 202"
                  stroke="#ec6a06"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                <path
                  d="M120 299L155 283L190 290L225 265L260 275L295 244L330 253L365 220L400 202V315H120V299Z"
                  fill="url(#growthGradient)"
                />

                {[120, 155, 190, 225, 260, 295, 330, 365, 400].map((x, i) => {
                  const y = [299, 283, 290, 265, 275, 244, 253, 220, 202][i];

                  return (
                    <circle
                      key={i}
                      cx={x}
                      cy={y}
                      r="4"
                      fill="#ec6a06"
                      stroke="#111827"
                      strokeWidth="2"
                    />
                  );
                })}

                {/* Floating SEO Card */}
                <g>
                  <rect
                    x="20"
                    y="155"
                    width="125"
                    height="75"
                    rx="13"
                    fill="#1e293b"
                    stroke="#ec6a06"
                    strokeOpacity="0.35"
                  />

                  <circle cx="47" cy="183" r="14" fill="#ec6a06" fillOpacity="0.15" />

                  <path
                    d="M41 183L46 188L54 178"
                    stroke="#ec6a06"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  <rect x="68" y="176" width="55" height="6" rx="3" fill="#ffffff" fillOpacity="0.8" />
                  <rect x="68" y="189" width="38" height="5" rx="2.5" fill="#ffffff" fillOpacity="0.3" />
                  <rect x="35" y="211" width="80" height="4" rx="2" fill="#ec6a06" fillOpacity="0.4" />
                </g>

                {/* Floating Growth Badge */}
                <g>
                  <rect
                    x="350"
                    y="45"
                    width="135"
                    height="75"
                    rx="14"
                    fill="#1e293b"
                    stroke="#ec6a06"
                    strokeOpacity="0.4"
                  />

                  <circle cx="375" cy="70" r="13" fill="#ec6a06" fillOpacity="0.15" />

                  <path
                    d="M369 74L375 68L379 71L384 64"
                    stroke="#ec6a06"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  <text
                    x="396"
                    y="73"
                    fill="#ffffff"
                    fontSize="15"
                    fontWeight="700"
                  >
                    Growth
                  </text>

                  <text
                    x="369"
                    y="101"
                    fill="#ec6a06"
                    fontSize="19"
                    fontWeight="800"
                  >
                    +250%
                  </text>
                </g>

                {/* Floating Ads Icon */}
                <g>
                  <circle cx="445" cy="275" r="31" fill="#1e293b" stroke="#ec6a06" strokeOpacity="0.35" />
                  <path
                    d="M434 277L456 265V285L434 277Z"
                    fill="#ec6a06"
                  />
                  <path
                    d="M434 277L431 287H439L442 280"
                    stroke="#ec6a06"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M460 269L466 264M462 277H469M460 285L466 290"
                    stroke="#ec6a06"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </g>

                {/* Decorative Stars */}
                <path d="M65 80L69 91L80 95L69 99L65 110L61 99L50 95L61 91L65 80Z" fill="#ec6a06" fillOpacity="0.8" />
                <path d="M460 160L463 168L471 171L463 174L460 182L457 174L449 171L457 168L460 160Z" fill="#ec6a06" fillOpacity="0.6" />

                <defs>
                  <linearGradient
                    id="growthGradient"
                    x1="260"
                    y1="202"
                    x2="260"
                    y2="315"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#ec6a06" stopOpacity="0.25" />
                    <stop offset="1" stopColor="#ec6a06" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>

        <style jsx global>{`
        @keyframes float {
            0%, 100% {
                transform: translateY(0px);
            }
            50% {
                transform: translateY(-12px);
            }
        }
    `}</style>
      </section>

      {/* =========================================================
          WHO WE ARE
      ========================================================= */}
      <section className="border-y border-white/5 bg-white/[0.015]  py-6 md:py-12">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[0.75fr_1.25fr] gap-10 lg:gap-24">
            <div>
              <span className="text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-[#ec6a06]">
                Who We Are
              </span>

              <h2 className="mt-2 text-3xl md:text-[32px] font-bold leading-tight text-white">
                Your Digital{" "}
                <span className="text-[#ec6a06]">
                  Growth Partner
                </span>
              </h2>

              {/* SVG BELOW HEADING */}
              <div className="relative mt-2 hidden lg:block">
                <div className="absolute inset-0 rounded-full bg-[#ec6a06]/10 blur-3xl" />

                <svg
                  viewBox="0 0 420 300"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="relative w-full max-w-[420px] animate-[float_5s_ease-in-out_infinite]"
                >
                  {/* Background */}
                  <circle
                    cx="210"
                    cy="150"
                    r="120"
                    fill="#ec6a06"
                    fillOpacity=".04"
                    stroke="#ec6a06"
                    strokeOpacity=".15"
                    strokeDasharray="5 8"
                  />

                  {/* Main Dashboard */}
                  <rect
                    x="75"
                    y="55"
                    width="270"
                    height="190"
                    rx="16"
                    fill="#111827"
                    stroke="#ec6a06"
                    strokeOpacity=".35"
                  />

                  <rect
                    x="75"
                    y="55"
                    width="270"
                    height="35"
                    rx="16"
                    fill="#1e293b"
                  />

                  <circle cx="94" cy="72" r="4" fill="#ec6a06" />
                  <circle cx="107" cy="72" r="4" fill="#ffffff" fillOpacity=".3" />
                  <circle cx="120" cy="72" r="4" fill="#ffffff" fillOpacity=".3" />

                  {/* Stats */}
                  <rect x="95" y="108" width="105" height="45" rx="8" fill="#ffffff" fillOpacity=".04" />
                  <rect x="215" y="108" width="110" height="45" rx="8" fill="#ffffff" fillOpacity=".04" />

                  <rect x="107" y="119" width="45" height="5" rx="2" fill="#ffffff" fillOpacity=".3" />
                  <rect x="107" y="132" width="65" height="10" rx="3" fill="#ec6a06" />

                  <rect x="227" y="119" width="45" height="5" rx="2" fill="#ffffff" fillOpacity=".3" />
                  <rect x="227" y="132" width="65" height="10" rx="3" fill="#ffffff" fillOpacity=".7" />

                  {/* Growth Graph */}
                  <path
                    d="M100 215L135 199L165 205L200 180L235 188L270 158L315 130"
                    stroke="#ec6a06"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  <path
                    d="M100 215L135 199L165 205L200 180L235 188L270 158L315 130V230H100V215Z"
                    fill="url(#growthFill)"
                  />

                  {/* Floating SEO Icon */}
                  <circle cx="65" cy="125" r="27" fill="#1e293b" stroke="#ec6a06" strokeOpacity=".5" />

                  <circle cx="62" cy="122" r="9" stroke="#ec6a06" strokeWidth="2.5" />
                  <path d="M69 129L76 136" stroke="#ec6a06" strokeWidth="2.5" strokeLinecap="round" />

                  {/* Floating Growth Icon */}
                  <circle cx="355" cy="180" r="27" fill="#1e293b" stroke="#ec6a06" strokeOpacity=".5" />

                  <path
                    d="M344 188L352 179L359 183L368 169M359 169H368V178"
                    stroke="#ec6a06"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  {/* Stars */}
                  <path d="M350 65L354 76L365 80L354 84L350 95L346 84L335 80L346 76L350 65Z" fill="#ec6a06" />
                  <path d="M65 225L68 233L76 236L68 239L65 247L62 239L54 236L62 233L65 225Z" fill="#ec6a06" fillOpacity=".6" />

                  <defs>
                    <linearGradient id="growthFill" x1="210" y1="130" x2="210" y2="230">
                      <stop stopColor="#ec6a06" stopOpacity=".25" />
                      <stop offset="1" stopColor="#ec6a06" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>

            <div className="space-y-5 text-white/65 text-base md:text-lg leading-8">
              <p>
                Search2Sale Digital is a digital marketing company focused on
                helping businesses compete and grow in an increasingly digital
                marketplace.
              </p>

              <p>
                We work with businesses that want more than a basic online
                presence. Our goal is to create digital marketing systems
                that connect your brand with potential customers at the right
                stage of their buying journey.
              </p>

              <p>
                From improving your Google visibility to running paid
                advertising campaigns and building conversion-focused
                websites, we bring multiple digital marketing disciplines
                together under one strategy.
              </p>

              <div className="mt-7 border-l-2 border-[#ec6a06] pl-5">
                <p className="font-semibold text-white">
                  Our focus is simple: better visibility, better engagement,
                  better leads, and better business growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          MISSION & VISION
      ========================================================= */}
      <section className=" py-6 md:py-12">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Mission */}
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 md:p-10">
              <div className="flex items-center justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ec6a06]/10 text-[#ec6a06]">
                  <Target size={28} strokeWidth={1.8} />
                </div>

                <span className="text-5xl font-extrabold text-white/5">
                  01
                </span>
              </div>

              <span className="mt-7 block text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-[#ec6a06]">
                Our Mission
              </span>

              <h2 className="mt-3 text-3xl md:text-4xl font-bold leading-tight text-white">
                Helping Businesses Turn Digital Opportunities Into Real Growth
              </h2>

              <p className="mt-5 leading-7 text-white/60">
                Our mission is to help businesses make better use of digital
                marketing through practical strategies, creative thinking,
                technology, and measurable performance.
              </p>

              <ul className="mt-7 space-y-3">
                {[
                  "Increase online visibility",
                  "Connect businesses with relevant customers",
                  "Generate qualified leads",
                  "Improve website conversions",
                  "Build stronger brands",
                  "Create sustainable digital growth",
                  "Make marketing performance easier to understand",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm md:text-base text-white/70"
                  >
                    <CheckCircle2
                      size={18}
                      className="mt-0.5 shrink-0 text-[#ec6a06]"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-7 text-sm leading-6 text-white/50">
                We believe every business deserves a digital strategy that is
                aligned with its goals—not a one-size-fits-all marketing
                package.
              </p>
            </div>

            {/* Vision */}
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 md:p-10">
              <div className="flex items-center justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ec6a06]/10 text-[#ec6a06]">
                  <Eye size={28} strokeWidth={1.8} />
                </div>

                <span className="text-5xl font-extrabold text-white/5">
                  02
                </span>
              </div>

              <span className="mt-7 block text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-[#ec6a06]">
                Our Vision
              </span>

              <h2 className="mt-3 text-3xl md:text-4xl font-bold leading-tight text-white">
                To Become a Trusted Digital Growth Partner for Businesses
              </h2>

              <p className="mt-5 leading-7 text-white/60">
                Our vision is to build long-term partnerships with businesses
                by delivering reliable digital marketing solutions that create
                meaningful and measurable results.
              </p>

              <div className="mt-8 space-y-5">
                {[
                  {
                    title: "Strategy",
                    desc: "Marketing decisions based on business objectives and audience needs.",
                  },
                  {
                    title: "Creativity",
                    desc: "Content, campaigns, and experiences that make brands memorable.",
                  },
                  {
                    title: "Performance",
                    desc: "A continuous focus on measurable outcomes.",
                  },
                  {
                    title: "Transparency",
                    desc: "Clear communication and straightforward reporting.",
                  },
                  {
                    title: "Growth",
                    desc: "Strategies designed for sustainable long-term improvement.",
                  },
                ].map((item) => (
                  <div key={item.title}>
                    <h3 className="font-semibold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-white/55">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SERVICES
      ========================================================= */}
      <section className="border-y border-white/5 bg-white/[0.015]  py-6 md:py-12">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="max-w-3xl mb-10 md:mb-14">
            <span className="text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-[#ec6a06]">
              What We Do
            </span>

            <h2 className="mt-3 text-3xl md:text-5xl font-bold text-white">
              Complete <span className="text-[#ec6a06]">Digital Marketing Solutions</span>
            </h2>

            <p className="mt-5 text-white/60 text-base md:text-lg leading-8">
              We provide a complete range of digital marketing and online
              growth services designed around your business objectives.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map(({ icon: Icon, title, desc, href }, index) => (
              <div
                key={title}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:border-[#ec6a06]/40 hover:bg-white/[0.05]"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#ec6a06]/10 text-[#ec6a06] transition-all duration-300 group-hover:bg-[#ec6a06] group-hover:text-white">
                    <Icon size={23} strokeWidth={1.8} />
                  </div>

                  <span className="text-sm font-bold text-white/10">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-bold text-white">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/55">
                  {desc}
                </p>

                <Link href={href} className="mt-6 flex items-center gap-2 text-sm font-semibold text-[#ec6a06]">
                  Learn More
                  <ArrowRight
                    size={15}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          OUR APPROACH
      ========================================================= */}
      <section className=" py-6 md:py-12">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="max-w-3xl mb-10 md:mb-14">
            <span className="text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-[#ec6a06]">
              Our Approach
            </span>

            <h2 className="mt-3 text-3xl md:text-5xl font-bold text-white">
              Strategy Before <span className="text-[#ec6a06]">Execution</span>
            </h2>

            <p className="mt-5 text-white/60 text-base md:text-lg leading-8">
              Before starting a campaign, we work to understand your business,
              customers, competition, market, and objectives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
            {approaches.map(({ icon: Icon, title, desc }, index) => (
              <div
                key={title}
                className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-6"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#ec6a06]/10 text-[#ec6a06]">
                    <Icon size={21} />
                  </div>

                  <span className="text-4xl font-extrabold text-white/5">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="mt-6 text-lg font-bold text-white">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/55">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          WHY CHOOSE US
      ========================================================= */}
      <section className="border-y border-white/5 bg-white/[0.015] py-10 md:py-16">
        <div className="max-w-[1350px] mx-auto px-6">

          {/* Heading */}
          <div className="max-w-3xl mx-auto text-center mb-10 md:mb-14">
            <span className="text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-[#ec6a06]">
              Why Choose Search2Sale Digital?
            </span>

            <h2 className="mt-4 text-3xl md:text-5xl font-bold leading-tight text-white">
              One Partner for Multiple{" "}
              <span className="text-[#ec6a06]">
                Digital Marketing
              </span>{" "}
              Needs
            </h2>

            <p className="mt-5 text-white/60 text-sm md:text-base leading-7 max-w-2xl mx-auto">
              Instead of managing separate teams for SEO, advertising,
              social media, content, and website development, businesses can
              bring these activities together through one digital marketing
              partner.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
            {reasons.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#ec6a06]/50 hover:bg-[#ec6a06]/[0.04]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#ec6a06]/10 text-[#ec6a06] transition-all duration-300 group-hover:bg-[#ec6a06] group-hover:text-white">
                  <Icon size={22} />
                </div>

                <h3 className="mt-5 text-lg font-bold text-white">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/55">
                  {desc}
                </p>

                <div className="mt-5 h-[2px] w-8 rounded-full bg-[#ec6a06] transition-all duration-300 group-hover:w-16" />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================
          INDUSTRIES
      ========================================================= */}
      <section className=" py-6 md:py-12">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-10 md:mb-14">
            <span className="text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-[#ec6a06]">
              Industries We Serve
            </span>

            <h2 className="mt-3 text-3xl md:text-5xl font-bold text-white">
              <span className="text-[#ec6a06]">Digital Solutions</span> Across Industries
            </h2>

            <p className="mt-5 text-white/60 leading-7">
              Our digital marketing solutions can be customized for businesses
              across different industries.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {industries.map(({ icon: Icon, title }) => (
              <div
                key={title}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-center transition-all duration-300 hover:border-[#ec6a06]/40 hover:bg-white/[0.05]"
              >
                <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-[#ec6a06]/10 text-[#ec6a06] transition-all duration-300 group-hover:bg-[#ec6a06] group-hover:text-white">
                  <Icon size={21} />
                </div>

                <h3 className="mt-4 text-sm font-semibold text-white/75">
                  {title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          PHILOSOPHY
      ========================================================= */}
      <section className="border-y border-white/5 bg-white/[0.015]  py-6 md:py-12">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-[#ec6a06]">
              Our Digital Marketing Philosophy
            </span>

            <h2 className="mt-3 text-3xl md:text-5xl font-bold text-white">
              Visibility. Relevance. Measurement.
            </h2>

            <p className="mt-5 text-white/60 text-base md:text-lg leading-8">
              We believe successful digital marketing is built around three
              important principles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {philosophy.map((item) => (
              <div
                key={item.number}
                className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 md:p-9"
              >
                <span className="text-6xl font-extrabold text-white/5">
                  {item.number}
                </span>

                <h3 className="mt-5 text-2xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-white/55 leading-7">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 text-lg md:text-2xl font-bold">
              <span className="text-white">Visibility</span>

              <span className="text-[#ec6a06]">+</span>

              <span className="text-white">Relevance</span>

              <span className="text-[#ec6a06]">+</span>

              <span className="text-white">Measurement</span>

              <span className="text-[#ec6a06]">=</span>

              <span className="text-[#ec6a06]">
                Sustainable Digital Growth
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          BUILDING BETTER DIGITAL EXPERIENCES
      ========================================================= */}
      <section className=" py-6 md:py-12">
        <div className="max-w-[1100px] mx-auto px-6 text-center">
          <span className="text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-[#ec6a06]">
            Building Better Digital Experiences
          </span>

          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-white">
            <span className="text-[#ec6a06]">  Every Digital Touchpoint</span> Should Work Together
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-white/60 text-base md:text-lg leading-8">
            Your website, search presence, social media profiles, advertising
            campaigns, content, and branding should not operate as separate
            pieces.
          </p>

          <p className="mt-3 text-lg font-semibold text-white">
            They should work together.
          </p>

          <div className="mt-12 flex flex-wrap justify-center items-center gap-3">
            {[
              "SEO",
              "Content",
              "Website",
              "Advertising",
              "Social Media",
              "Leads",
              "Conversions",
            ].map((item, index, arr) => (
              <React.Fragment key={item}>
                <div className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm md:text-base font-semibold text-white/80">
                  {item}
                </div>

                {index < arr.length - 1 && (
                  <ArrowRight
                    size={17}
                    className="hidden sm:block text-[#ec6a06]"
                  />
                )}
              </React.Fragment>
            ))}
          </div>

          <p className="mt-10 max-w-3xl mx-auto text-white/55 leading-7">
            When these elements support each other, your business can create a
            stronger and more consistent customer journey.
          </p>
        </div>
      </section>

      {/* =========================================================
          CLIENT COMMITMENT
      ========================================================= */}
      <section className="border-y border-white/5 bg-white/[0.015]  py-6 md:py-12">
        <div className="max-w-[1000px] mx-auto px-6 text-center">
          <span className="text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-[#ec6a06]">
            Our Commitment to Clients
          </span>

          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-white">
            Marketing That Works Toward Your <span className="text-[#ec6a06]">Business Goals</span>
          </h2>

          <p className="mt-6 text-white/60 text-base md:text-lg leading-8 max-w-3xl mx-auto">
            When you work with Search2Sale Digital, we aim to provide clear
            communication, practical strategies, professional execution,
            transparent reporting, continuous optimization, customer-focused
            marketing, and long-term digital growth.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {[
              "Clear communication",
              "Practical strategies",
              "Professional execution",
              "Transparent reporting",
              "Continuous optimization",
              "Customer-focused marketing",
              "Long-term digital growth",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-medium text-white/70"
              >
                <CheckCircle2 size={16} className="text-[#ec6a06]" />
                {item}
              </div>
            ))}
          </div>

          <p className="mt-10 text-white/70 font-medium">
            We understand that marketing is an investment. Our job is to help
            you use that investment as effectively as possible.
          </p>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section className="px-6  py-6 md:py-12">
        <div className="max-w-[1280px] mx-auto">
          <div className="relative overflow-hidden rounded-[32px] border border-[#ec6a06]/30 bg-[#ec6a06] px-6 py-12 md:px-12 md:py-16 text-center">
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
                Ready to Grow Your Business Online?
              </h2>

              <p className="mt-5 max-w-2xl mx-auto text-white/90 text-base md:text-lg leading-7">
                Whether you are launching a new business, improving an
                existing website, generating more leads, or looking to scale
                your digital marketing, Search2Sale Digital is ready to help.
              </p>

              <p className="mt-4 text-white/90">
                Let's discuss your goals and build a digital marketing strategy
                designed around your business.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
                <a
                  href="tel:+918506938033"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 font-bold text-[#020618] transition-all duration-300 hover:bg-white/90"
                >
                  Call Us: +91 85069 38033
                </a>

                <a
                  href="mailto:info@search2saledigital.com"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/50 px-7 py-4 font-bold text-white transition-all duration-300 hover:bg-white/10"
                >
                  Email Us
                </a>
              </div>

              <p className="mt-8 text-sm font-medium text-white/80">
                Search2Sale Digital – Your Digital Growth Partner in Delhi
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}