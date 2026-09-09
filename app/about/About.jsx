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

const services = [
  {
    icon: Search,
    title: "SEO Services",
    desc: "Improve your search visibility and attract relevant organic traffic with technical SEO, on-page optimization, content, local SEO, and off-page strategies.",
  },
  {
    icon: Megaphone,
    title: "Google Ads & Paid Marketing",
    desc: "Reach potential customers when they are searching for your products and services through targeted Google Ads and PPC campaigns.",
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    desc: "Build your brand and engage your audience through strategic social media management, content creation, paid social campaigns, and community engagement.",
  },
  {
    icon: TrendingUp,
    title: "Performance Marketing",
    desc: "Create measurable customer acquisition campaigns focused on leads, sales, conversions, revenue, and marketing efficiency.",
  },
  {
    icon: Code2,
    title: "Web Development",
    desc: "Build fast, responsive, user-friendly, and SEO-friendly websites designed to support your marketing and business objectives.",
  },
  {
    icon: PenTool,
    title: "Content & Creative",
    desc: "Create engaging website content, blogs, social media posts, graphics, ad creatives, Reels, and other marketing assets.",
  },
  {
    icon: Palette,
    title: "Branding",
    desc: "Develop a strong and consistent brand identity through brand strategy, logo design, visual identity, messaging, and digital branding.",
  },
  {
    icon: Users,
    title: "Lead Generation",
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
      <section className="relative py-6 py-12">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-[-150px] top-[-150px] h-[350px] w-[350px] rounded-full bg-[#ec6a06]/5 blur-3xl" />
          <div className="absolute right-[-150px] bottom-[-150px] h-[350px] w-[350px] rounded-full bg-[#ec6a06]/5 blur-3xl" />
        </div>

        <div className="relative z-10 max-w-[1280px] mx-auto px-6">
          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#ec6a06] mb-5">
              About Search2Sale Digital
            </span>

            <h1 className="text-[42px] sm:text-[52px]  leading-[1.05] font-extrabold tracking-tight text-white">
              A Result-Driven <span className="text-[#ec6a06]">Digital Marketing</span> Agency in Delhi
            </h1>

            <p className="mt-7 text-lg md:text-xl leading-8 text-white/70 max-w-3xl">
              Welcome to Search2Sale Digital, a result-oriented digital
              marketing agency in Delhi helping businesses build a stronger
              online presence, reach their target customers, and generate
              measurable growth.
            </p>

            <p className="mt-5 text-base md:text-lg leading-8 text-white/60 max-w-3xl">
              We believe digital marketing should do more than generate
              clicks, impressions, or followers. It should help your business
              attract the right audience, generate qualified leads, increase
              sales, and build long-term brand value.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
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
                  className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-medium text-white/80"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
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

              <h2 className="mt-4 text-3xl md:text-5xl font-bold leading-tight text-white">
                Your Digital <span className="text-[#ec6a06]">
                    
                Growth Partner
                </span>
              </h2>
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
            {services.map(({ icon: Icon, title, desc }, index) => (
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

                <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-[#ec6a06]">
                  Learn More
                  <ArrowRight
                    size={15}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </div>
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
      <section className="border-y border-white/5 bg-white/[0.015]  py-6 md:py-12">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[0.75fr_1.25fr] gap-10 lg:gap-20">
            <div>
              <span className="text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-[#ec6a06]">
                Why Choose Search2Sale Digital?
              </span>

              <h2 className="mt-4 text-3xl md:text-5xl font-bold leading-tight text-white">
                One Partner for Multiple <span className="text-[#ec6a06]">Digital Marketing</span> Needs
              </h2>

              <p className="mt-5 text-white/60 leading-7">
                Instead of managing separate teams for SEO, advertising,
                social media, content, and website development, businesses can
                bring these activities together through one digital marketing
                partner.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {reasons.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:border-[#ec6a06]/40"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#ec6a06]/10 text-[#ec6a06]">
                    <Icon size={22} />
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-white">
                    {title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-white/55">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
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