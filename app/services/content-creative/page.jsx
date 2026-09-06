"use client";

import React, { useEffect, useState } from "react";
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
  Menu,
  X,
  Search,
  Users,
  Globe2,
  CheckCircle2,
  RefreshCw,
  Smartphone,
  PhoneCall,
  MessageCircle,
  ShoppingCart,
  Layers3,
  Zap,
  Eye,
  LayoutDashboard,
  ArrowRight,
} from "lucide-react";
import { BsYoutube } from "react-icons/bs";

const colors = {
  background: "#0b1326",
  surfaceContainerLowest: "#060e20",
  surfaceContainerLow: "#131b2e",
  surfaceContainerHigh: "#222a3d",
  surfaceVariant: "#2d3449",
  onSurface: "#dae2fd",
  onSurfaceVariant: "#c3c6d7",
  outline: "#8d90a0",
  outlineVariant: "#434655",
  primary: "#b4c5ff",
  primaryContainer: "#2563eb",
  accent: "#ff6900",
  accentSoft: "#ffb690",
};

const glass = {
  background: "rgba(15, 23, 42, 0.72)",
  backdropFilter: "blur(20px)",
  border: "1px solid rgba(255,255,255,0.09)",
};

const glowBlue = {
  boxShadow: "0 0 30px rgba(37, 99, 235, 0.16)",
};

const glowOrange = {
  boxShadow: "0 0 30px rgba(255, 105, 0, 0.12)",
};

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Industries", href: "#industries" },
  { label: "FAQs", href: "#faqs" },
];

const contentServices = [
  {
    icon: Boxes,
    title: "Content Strategy",
    copy:
      "Strategic content plans built around your business goals, audience, competitors, customer journey, and marketing objectives.",
  },
  {
    icon: FileText,
    title: "SEO Content Writing",
    copy:
      "Search-friendly website content, blogs, landing pages, service pages, product descriptions, FAQs, and long-form content.",
  },
  {
    icon: MonitorSmartphone,
    title: "Website Content",
    copy:
      "Clear, persuasive website copy designed to communicate your value proposition and guide visitors toward action.",
  },
  {
    icon: Megaphone,
    title: "Social Media Content",
    copy:
      "Platform-specific posts, captions, carousels, Stories, Reels, promotional creatives, and educational content.",
  },
  {
    icon: Palette,
    title: "Graphic Design",
    copy:
      "Visually consistent social creatives, banners, infographics, presentations, website graphics, and marketing materials.",
  },
  {
    icon: Target,
    title: "Ad Creative Design",
    copy:
      "Performance-focused static, carousel, promotional, lead-generation, product, and campaign creative variations.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Understand Your Business",
    copy:
      "We learn about your business, audience, products, services, competitors, and goals.",
  },
  {
    number: "02",
    title: "Research & Strategy",
    copy:
      "We research your market, audience, competitors, keywords, and content opportunities.",
  },
  {
    number: "03",
    title: "Content Planning",
    copy:
      "We create a content plan based on your marketing objectives and customer journey.",
  },
  {
    number: "04",
    title: "Content Creation",
    copy:
      "Our writers, designers, and creative team develop the required content and visual assets.",
  },
  {
    number: "05",
    title: "Review & Optimization",
    copy:
      "Content is reviewed for quality, brand consistency, accuracy, SEO, and conversion potential.",
  },
  {
    number: "06",
    title: "Publishing",
    copy:
      "Approved content is prepared and published across the appropriate marketing channels.",
  },
  {
    number: "07",
    title: "Performance Analysis",
    copy:
      "We monitor engagement, traffic, conversions, and other relevant metrics to improve future content.",
  },
];

const industries = [
  "Real Estate",
  "Healthcare",
  "Education",
  "E-commerce",
  "Finance",
  "Automotive",
  "Technology",
  "Professional Services",
  "B2B Businesses",
  "Local Businesses",
  "Startups",
  "Service-Based Businesses",
];

const benefits = [
  "Build brand awareness",
  "Increase website traffic",
  "Improve search visibility",
  "Generate leads",
  "Increase social media engagement",
  "Educate potential customers",
  "Build brand credibility",
  "Support paid advertising",
  "Improve conversions",
  "Maintain a consistent online presence",
];

const faqs = [
  {
    question: "What are content and creative services?",
    answer:
      "Content and creative services include creating written, visual, and video content for websites, social media, advertising, search engines, and other digital marketing channels.",
  },
  {
    question: "What type of content do you create?",
    answer:
      "We create website content, SEO blogs, social media posts, captions, graphic designs, ad creatives, Reels, short-form videos, product descriptions, landing page copy, and other marketing content.",
  },
  {
    question: "Do you provide SEO content writing?",
    answer:
      "Yes. We create SEO-friendly website content, blogs, service pages, landing pages, and other content based on relevant keywords and search intent.",
  },
  {
    question: "Do you create social media graphics?",
    answer:
      "Yes. We create customized social media graphics, carousels, promotional posts, Stories, and other creative assets for platforms such as Facebook, Instagram, and LinkedIn.",
  },
  {
    question: "Do you create Reels and short videos?",
    answer:
      "Yes. We create and edit short-form video content such as Instagram Reels and YouTube Shorts, depending on your requirements.",
  },
  {
    question: "Can you create content for my website?",
    answer:
      "Yes. We can create content for your Home, About, Services, Product, Landing Page, Location, Industry, and FAQ pages.",
  },
  {
    question: "How much do content and creative services cost in Delhi?",
    answer:
      "Pricing depends on the type and volume of content, number of platforms, creative requirements, video production, and campaign objectives. Contact us for a customized quotation.",
  },
];

function Eyebrow({ children, color = colors.primary }) {
  return (
    <span
      className="font-semibold uppercase tracking-widest text-[10px] sm:text-xs px-3 py-1.5 rounded-full inline-flex items-center border"
      style={{
        color,
        borderColor: `${color}33`,
        backgroundColor: `${color}12`,
      }}
    >
      {children}
    </span>
  );
}

function ServiceCard({ icon: Icon, title, copy }) {
  return (
    <div
      className="group p-6 sm:p-7 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:border-[#ff6900]/50"
      style={glass}
    >
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300 group-hover:bg-[#ff6900]/15"
        style={{ backgroundColor: `${colors.primaryContainer}1A` }}
      >
        <Icon
          size={22}
          className="transition-colors duration-300 group-hover:text-[#ff6900]"
          style={{ color: colors.primary }}
        />
      </div>

      <h3 className="font-bold text-lg sm:text-xl mb-3 transition-colors duration-300 group-hover:text-[#ff6900]">
        {title}
      </h3>

      <p
        className="text-sm sm:text-base leading-relaxed"
        style={{ color: colors.onSurfaceVariant }}
      >
        {copy}
      </p>
    </div>
  );
}

function DetailList({ items }) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <CheckCircle2
            size={17}
            className="mt-0.5 shrink-0"
            style={{ color: colors.accent }}
          />
          <span
            className="text-sm sm:text-base"
            style={{ color: colors.onSurfaceVariant }}
          >
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeFaq, setActiveFaq] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <div
      className="min-h-screen w-full antialiased overflow-x-hidden"
      style={{
        backgroundColor: colors.background,
        color: colors.onSurface,
      }}
    >
     

      <main className="">
        {/* Hero */}
        <section
          id="home"
          className="relative px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto pt-12 sm:pt-20 pb-12 sm:pb-12"
        >
          <div
            className="absolute top-10 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full pointer-events-none"
            style={{
              background: `radial-gradient(circle, ${colors.primaryContainer}20, transparent 70%)`,
              filter: "blur(70px)",
            }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center relative z-10">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 mb-5">
                <Rocket
                  size={17}
                  style={{ color: colors.accent }}
                />
                <span
                  className="text-xs sm:text-sm font-semibold tracking-wide"
                  style={{ color: colors.primary }}
                >
                  Search2Sale Digital
                </span>
              </div>

              <Eyebrow color={colors.accent}>
                Content & Creative Services in Delhi
              </Eyebrow>

              <h1 className="mt-5 font-extrabold leading-[1.05] tracking-tight text-4xl sm:text-5xl lg:text-5xl">
                Creative Content That{" "}
                <span
                  className="text-transparent bg-clip-text"
                  style={{
                    backgroundImage: `linear-gradient(90deg, ${colors.primary}, ${colors.accent})`,
                  }}
                >
                  Builds Your Brand
                </span>{" "}
                & Drives Results
              </h1>

              <p
                className="mt-6 text-base sm:text-lg leading-relaxed max-w-2xl"
                style={{ color: colors.onSurfaceVariant }}
              >
                Looking for professional content and creative services in
                Delhi to make your brand stand out online?
              </p>

              <p
                className="mt-4 text-sm sm:text-base leading-relaxed max-w-2xl"
                style={{ color: colors.onSurfaceVariant }}
              >
                At{" "}
                <strong style={{ color: colors.onSurface }}>
                  Search2Sale Digital
                </strong>
                , we create strategic, engaging, and conversion-focused
                content that helps businesses attract attention, communicate
                their value, and connect with the right audience.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  className="group px-7 py-4 rounded-xl font-semibold text-center flex items-center justify-center gap-2 transition-all duration-300 hover:bg-[#ff7a1a] hover:scale-[1.02]"
                  style={{
                    backgroundColor: colors.accent,
                    color: "#fff",
                  }}
                >
                  Get Your Free Consultation
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>

                <a
                  href="#services"
                  className="px-7 py-4 rounded-xl font-semibold text-center border transition-all duration-300 hover:border-[#ff6900] hover:text-[#ff6900]"
                  style={{
                    borderColor: `${colors.primary}45`,
                    color: colors.primary,
                  }}
                >
                  Explore Our Services
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div
                className="rounded-2xl p-5 sm:p-7 relative overflow-hidden"
                style={{ ...glass, ...glowBlue }}
              >
                <div
                  className="absolute -top-20 -right-20 w-52 h-52 rounded-full"
                  style={{
                    background: `${colors.primaryContainer}22`,
                    filter: "blur(45px)",
                  }}
                />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-7">
                    <div>
                      <div
                        className="text-[10px] uppercase tracking-widest font-semibold"
                        style={{ color: colors.onSurfaceVariant }}
                      >
                        Creative System
                      </div>
                      <h3 className="font-bold text-xl mt-1">
                        Content Command Center
                      </h3>
                    </div>

                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${colors.accent}18` }}
                    >
                      <Palette
                        size={20}
                        style={{ color: colors.accent }}
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    {[
                      {
                        icon: Search,
                        label: "Audience & Market Research",
                      },
                      {
                        icon: FileText,
                        label: "Strategic Content Planning",
                      },
                      {
                        icon: Palette,
                        label: "Visual Creative Production",
                      },
                      {
                        icon: Play,
                        label: "Video & Reels Content",
                      },
                      {
                        icon: Target,
                        label: "Conversion-Focused Messaging",
                      },
                      {
                        icon: LineChart,
                        label: "Performance Analysis",
                      },
                    ].map(({ icon: Icon, label }) => (
                      <div
                        key={label}
                        className="flex items-center gap-3 rounded-xl p-3 border transition-colors duration-300 hover:border-[#ff6900]/40"
                        style={{
                          backgroundColor: `${colors.background}99`,
                          borderColor: `${colors.outlineVariant}55`,
                        }}
                      >
                        <Icon
                          size={17}
                          style={{ color: colors.primary }}
                        />
                        <span
                          className="text-sm"
                          style={{ color: colors.onSurfaceVariant }}
                        >
                          {label}
                        </span>
                        <CheckCircle2
                          size={15}
                          className="ml-auto"
                          style={{ color: colors.accent }}
                        />
                      </div>
                    ))}
                  </div>

                  <div
                    className="mt-6 pt-5 border-t"
                    style={{ borderColor: `${colors.outlineVariant}55` }}
                  >
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: colors.onSurfaceVariant }}
                    >
                      We don't create content just to fill your social media
                      calendar.{" "}
                      <strong style={{ color: colors.onSurface }}>
                        We create content with a purpose.
                      </strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section
          id="services"
          className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto py-6 sm:py-12"
        >
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <Eyebrow>Our Services</Eyebrow>

            <h2 className="mt-4 font-bold text-3xl sm:text-4xl tracking-tight">
              Our Content & Creative Services
            </h2>

            <p
              className="mt-4 text-base sm:text-lg leading-relaxed"
              style={{ color: colors.onSurfaceVariant }}
            >
              From strategy and SEO writing to social media creatives, video,
              design, and conversion copy, we build content systems designed
              around your business objectives.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {contentServices.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </section>

        {/* Content Strategy */}
        <section
          className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto py-6 sm:py-12"
        >
          <div
            className="rounded-2xl overflow-hidden"
            style={{ ...glass, ...glowBlue }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-7 sm:p-10 lg:p-12">
                <Eyebrow color={colors.primary}>
                  Strategy First
                </Eyebrow>

                <h2 className="mt-4 text-2xl sm:text-3xl font-bold">
                  Content Strategy
                </h2>

                <p
                  className="mt-5 text-sm sm:text-base leading-relaxed"
                  style={{ color: colors.onSurfaceVariant }}
                >
                  A successful content marketing campaign starts with a clear
                  strategy. We develop content plans based on your business
                  objectives, target audience, industry, competitors, and
                  customer journey.
                </p>

                <div className="mt-7">
                  <DetailList
                    items={[
                      "Audience research",
                      "Competitor analysis",
                      "Content planning",
                      "Keyword research",
                      "Content calendars",
                      "Content themes",
                      "Buyer journey mapping",
                      "Platform-specific content strategy",
                      "Performance tracking",
                    ]}
                  />
                </div>
              </div>

              <div
                className="p-7 sm:p-10 flex items-center"
                style={{
                  background: `linear-gradient(135deg, ${colors.primaryContainer}16, ${colors.accent}08)`,
                  borderLeft: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <div className="w-full space-y-4">
                  {[
                    {
                      icon: Users,
                      title: "Audience",
                      copy: "Understand who you are trying to reach.",
                    },
                    {
                      icon: Search,
                      title: "Research",
                      copy: "Identify search, market, and content opportunities.",
                    },
                    {
                      icon: Target,
                      title: "Objectives",
                      copy: "Connect content to measurable marketing goals.",
                    },
                    {
                      icon: LineChart,
                      title: "Performance",
                      copy: "Use insights to improve future content.",
                    },
                  ].map(({ icon: Icon, title, copy }) => (
                    <div
                      key={title}
                      className="flex gap-4 p-4 rounded-xl border"
                      style={{
                        backgroundColor: `${colors.background}99`,
                        borderColor: `${colors.outlineVariant}55`,
                      }}
                    >
                      <div
                        className="w-10 h-10 shrink-0 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: `${colors.primary}14` }}
                      >
                        <Icon
                          size={19}
                          style={{ color: colors.primary }}
                        />
                      </div>

                      <div>
                        <h3 className="font-semibold">{title}</h3>
                        <p
                          className="text-sm mt-1"
                          style={{ color: colors.onSurfaceVariant }}
                        >
                          {copy}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SEO + Website Content */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto py-6 sm:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div
              className="rounded-2xl p-7 sm:p-9"
              style={glass}
            >
              <Search
                size={30}
                className="mb-6"
                style={{ color: colors.accent }}
              />

              <h2 className="text-2xl font-bold mb-4">
                SEO Content Writing
              </h2>

              <p
                className="text-sm sm:text-base leading-relaxed mb-7"
                style={{ color: colors.onSurfaceVariant }}
              >
                Create useful, search-friendly content that attracts your
                target audience and supports your SEO strategy.
              </p>

              <DetailList
                items={[
                  "Website content",
                  "Service pages",
                  "Blog posts",
                  "Landing page content",
                  "Location pages",
                  "Product descriptions",
                  "Industry articles",
                  "FAQs",
                  "Long-form content",
                ]}
              />

              <div
                className="mt-7 p-4 rounded-xl border"
                style={{
                  backgroundColor: `${colors.primaryContainer}0D`,
                  borderColor: `${colors.primaryContainer}30`,
                }}
              >
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: colors.onSurfaceVariant }}
                >
                  We focus on search intent, readability, relevant keywords,
                  helpful information, and conversion opportunities.
                </p>
              </div>
            </div>

            <div
              className="rounded-2xl p-7 sm:p-9"
              style={glass}
            >
              <MonitorSmartphone
                size={30}
                className="mb-6"
                style={{ color: colors.accent }}
              />

              <h2 className="text-2xl font-bold mb-4">
                Website Content Writing
              </h2>

              <p
                className="text-sm sm:text-base leading-relaxed mb-7"
                style={{ color: colors.onSurfaceVariant }}
              >
                Your website is often the first interaction customers have
                with your business. We create clear and persuasive website
                content that guides visitors toward taking action.
              </p>

              <DetailList
                items={[
                  "Home pages",
                  "About Us pages",
                  "Service pages",
                  "Product pages",
                  "Landing pages",
                  "Industry pages",
                  "Location pages",
                  "FAQ sections",
                  "Call-to-action sections",
                ]}
              />
            </div>
          </div>
        </section>

        {/* Social Media */}
        <section
          className="py-6 sm:py-12 border-y"
          style={{
            backgroundColor: colors.surfaceContainerLow,
            borderColor: `${colors.outlineVariant}25`,
          }}
        >
          <div className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-5">
                <Eyebrow color={colors.accent}>
                  Social Content
                </Eyebrow>

                <h2 className="mt-4 text-3xl sm:text-4xl font-bold">
                  Social Media Content
                </h2>

                <p
                  className="mt-5 text-base leading-relaxed"
                  style={{ color: colors.onSurfaceVariant }}
                >
                  Keep your social media profiles active with creative and
                  engaging content designed specifically for your audience and
                  each platform.
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {[
                    "Facebook",
                    "Instagram",
                    "LinkedIn",
                    "Reels",
                    "Stories",
                    "Carousels",
                  ].map((item) => (
                    <span
                      key={item}
                      className="px-3 py-2 rounded-lg text-xs sm:text-sm border transition-colors hover:border-[#ff6900]/50 hover:text-[#ff6900]"
                      style={{
                        borderColor: `${colors.outlineVariant}66`,
                        color: colors.onSurfaceVariant,
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {[
                    "Facebook posts",
                    "Instagram posts",
                    "Instagram Reels",
                    "Carousels",
                    "Stories",
                    "LinkedIn posts",
                    "Promotional creatives",
                    "Educational content",
                    "Engagement posts",
                    "Festival creatives",
                    "Product promotions",
                    "Service promotions",
                  ].map((item, index) => (
                    <div
                      key={item}
                      className="p-4 rounded-xl border transition-all duration-300 hover:-translate-y-1 hover:border-[#ff6900]/45"
                      style={{
                        backgroundColor: `${colors.background}AA`,
                        borderColor: `${colors.outlineVariant}55`,
                      }}
                    >
                      <div
                        className="text-[10px] font-bold mb-2"
                        style={{ color: colors.accent }}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </div>

                      <div className="text-sm font-medium">
                        {item}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Graphic + Ad Creative */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto sm:py-12 py-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div
              className="lg:col-span-7 rounded-2xl p-7 sm:p-10 relative overflow-hidden"
              style={{ ...glass, ...glowOrange }}
            >
              <div
                className="absolute right-0 top-0 w-64 h-64 rounded-full"
                style={{
                  background: `${colors.accent}12`,
                  filter: "blur(70px)",
                }}
              />

              <div className="relative z-10">
                <Palette
                  size={32}
                  style={{ color: colors.accent }}
                />

                <h2 className="mt-6 text-2xl sm:text-3xl font-bold">
                  Creative Graphic Design
                </h2>

                <p
                  className="mt-4 max-w-xl text-sm sm:text-base leading-relaxed"
                  style={{ color: colors.onSurfaceVariant }}
                >
                  Good design can help your business communicate its message
                  faster and more effectively. We create visually consistent
                  designs that reflect your brand identity and marketing goals.
                </p>

                <div className="mt-8">
                  <DetailList
                    items={[
                      "Social media creatives",
                      "Ad banners",
                      "Promotional graphics",
                      "Business graphics",
                      "Infographics",
                      "Carousels",
                      "Presentation graphics",
                      "Website banners",
                      "Marketing materials",
                      "Brand creatives",
                    ]}
                  />
                </div>
              </div>
            </div>

            <div
              className="lg:col-span-5 rounded-2xl p-7 sm:p-10"
              style={glass}
            >
              <Target
                size={32}
                style={{ color: colors.primary }}
              />

              <h2 className="mt-6 text-2xl font-bold">
                Ad Creative Design
              </h2>

              <p
                className="mt-4 text-sm sm:text-base leading-relaxed"
                style={{ color: colors.onSurfaceVariant }}
              >
                Your advertising creative plays an important role in
                attracting attention and generating clicks. We create
                performance-focused creative for Google, Facebook, and
                Instagram.
              </p>

              <div className="mt-7">
                <DetailList
                  items={[
                    "Static ad designs",
                    "Carousel ads",
                    "Promotional creatives",
                    "Lead generation creatives",
                    "Product advertisements",
                    "Video ads",
                    "Social media ad graphics",
                    "Campaign variations",
                  ]}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Video & Reels */}
        <section
          className="py-6 sm:py-12"
          style={{
            background: `linear-gradient(180deg, ${colors.surfaceContainerLowest}, ${colors.background})`,
          }}
        >
          <div className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <BsYoutube
                    size={24}
                    style={{ color: colors.accent }}
                  />
                  <Eyebrow color={colors.accent}>
                    Video Content
                  </Eyebrow>
                </div>

                <h2 className="text-3xl sm:text-4xl font-bold">
                  Short-Form Video That Captures Attention
                </h2>

                <p
                  className="mt-5 text-base sm:text-lg leading-relaxed"
                  style={{ color: colors.onSurfaceVariant }}
                >
                  Short-form video has become an important part of modern
                  digital marketing. We create engaging video content for
                  Instagram, Facebook, and YouTube.
                </p>

                <div className="mt-8 space-y-4">
                  {[
                    {
                      icon: Play,
                      title: "Strong Hooks",
                      copy:
                        "Start with attention-grabbing messaging that gives viewers a reason to keep watching.",
                    },
                    {
                      icon: Megaphone,
                      title: "Clear Messaging",
                      copy:
                        "Keep the core message focused, easy to understand, and relevant to the audience.",
                    },
                    {
                      icon: Activity,
                      title: "Platform-Friendly Formats",
                      copy:
                        "Create content suitable for Reels, Shorts, social feeds, and short-form advertisements.",
                    },
                  ].map(({ icon: Icon, title, copy }) => (
                    <div key={title} className="flex gap-4">
                      <div
                        className="w-10 h-10 shrink-0 rounded-xl flex items-center justify-center"
                        style={{ backgroundColor: `${colors.accent}15` }}
                      >
                        <Icon
                          size={18}
                          style={{ color: colors.accent }}
                        />
                      </div>

                      <div>
                        <h3 className="font-semibold">{title}</h3>
                        <p
                          className="text-sm mt-1 leading-relaxed"
                          style={{ color: colors.onSurfaceVariant }}
                        >
                          {copy}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className="rounded-2xl p-6 sm:p-8 relative overflow-hidden"
                style={{ ...glass, ...glowOrange }}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    background: `radial-gradient(circle at 70% 30%, ${colors.accent}16, transparent 55%)`,
                  }}
                />

                <div className="relative z-10">
                  <div
                    className="aspect-video rounded-xl flex items-center justify-center border"
                    style={{
                      backgroundColor: colors.surfaceContainerLowest,
                      borderColor: `${colors.outlineVariant}55`,
                    }}
                  >
                    <div className="text-center">
                      <div
                        className="w-16 h-16 mx-auto rounded-full flex items-center justify-center"
                        style={{ backgroundColor: `${colors.accent}18` }}
                      >
                        <Play
                          size={27}
                          style={{ color: colors.accent }}
                        />
                      </div>

                      <div className="mt-5 font-bold text-lg">
                        Video & Reels Studio
                      </div>

                      <div
                        className="mt-2 text-xs"
                        style={{ color: colors.onSurfaceVariant }}
                      >
                        Instagram • Facebook • YouTube
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mt-4">
                    {[
                      "Instagram Reels",
                      "YouTube Shorts",
                      "Product Videos",
                      "Brand Videos",
                      "Educational Videos",
                      "Motion Graphics",
                    ].map((item) => (
                      <div
                        key={item}
                        className="p-3 rounded-lg text-xs border"
                        style={{
                          borderColor: `${colors.outlineVariant}55`,
                          color: colors.onSurfaceVariant,
                        }}
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      

        {/* Process */}
        <section
          id="process"
          className="py-6 sm:py-12 border-y"
          style={{
            backgroundColor: colors.surfaceContainerLow,
            borderColor: `${colors.outlineVariant}25`,
          }}
        >
          <div className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
            <div className="max-w-2xl mb-10 sm:mb-14">
              <Eyebrow color={colors.accent}>
                Our Process
              </Eyebrow>

              <h2 className="mt-4 text-3xl sm:text-4xl font-bold">
                Our Content Creation Process
              </h2>

              <p
                className="mt-4 text-base leading-relaxed"
                style={{ color: colors.onSurfaceVariant }}
              >
                A structured process helps us turn business goals into useful,
                engaging, and consistent content.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {processSteps.map((step) => (
                <div
                  key={step.number}
                  className="group rounded-2xl p-5 sm:p-6 border transition-all duration-300 hover:-translate-y-1 hover:border-[#ff6900]/45"
                  style={{
                    backgroundColor: `${colors.background}99`,
                    borderColor: `${colors.outlineVariant}55`,
                  }}
                >
                  <div
                    className="text-3xl font-extrabold transition-colors duration-300 group-hover:text-[#ff6900]"
                    style={{ color: `${colors.primary}55` }}
                  >
                    {step.number}
                  </div>

                  <h3 className="font-bold text-base sm:text-lg mt-5">
                    {step.title}
                  </h3>

                  <p
                    className="text-sm leading-relaxed mt-3"
                    style={{ color: colors.onSurfaceVariant }}
                  >
                    {step.copy}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto py-6 sm:py-12">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <Eyebrow color={colors.accent}>
              Why Search2Sale Digital?
            </Eyebrow>

            <h2 className="mt-4 text-3xl sm:text-4xl font-bold">
              Strategy + Creativity
            </h2>

            <p
              className="mt-4 text-base sm:text-lg leading-relaxed"
              style={{ color: colors.onSurfaceVariant }}
            >
              We combine creative thinking with digital marketing strategy to
              create content that supports business growth.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: Target,
                title: "Strategy + Creativity",
                copy:
                  "Creative thinking combined with digital marketing strategy.",
              },
              {
                icon: Users,
                title: "Audience-Focused Content",
                copy:
                  "Content built around customer needs, questions, interests, and buying behaviour.",
              },
              {
                icon: Search,
                title: "SEO-Friendly Approach",
                copy:
                  "Where appropriate, content is optimized around relevant search terms and search intent.",
              },
              {
                icon: RefreshCw,
                title: "Consistent Brand Voice",
                copy:
                  "A consistent tone and visual style across your digital marketing channels.",
              },
              {
                icon: Globe2,
                title: "Multi-Platform Content",
                copy:
                  "Content suitable for websites, search engines, Instagram, Facebook, LinkedIn, and YouTube.",
              },
              {
                icon: TrendingUp,
                title: "Performance-Oriented",
                copy:
                  "Performance insights help us understand what works and continuously improve your strategy.",
              },
            ].map(({ icon: Icon, title, copy }) => (
              <div
                key={title}
                className="group p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:border-[#ff6900]/50"
                style={{
                  ...glass,
                  borderColor: `${colors.outlineVariant}55`,
                }}
              >
                <Icon
                  size={26}
                  className="transition-colors duration-300 group-hover:text-[#ff6900]"
                  style={{ color: colors.primary }}
                />

                <h3 className="mt-5 font-bold text-lg">
                  {title}
                </h3>

                <p
                  className="mt-2 text-sm leading-relaxed"
                  style={{ color: colors.onSurfaceVariant }}
                >
                  {copy}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Industries */}
        <section
          id="industries"
          className="py-6 sm:py-12"
          style={{
            backgroundColor: colors.surfaceContainerLowest,
          }}
        >
          <div className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5">
                <Eyebrow color={colors.accent}>
                  Industry Expertise
                </Eyebrow>

                <h2 className="mt-4 text-3xl sm:text-4xl font-bold">
                  Content & Creative Services for Different Industries
                </h2>

                <p
                  className="mt-5 text-sm sm:text-base leading-relaxed"
                  style={{ color: colors.onSurfaceVariant }}
                >
                  We create customized content and creative solutions based on
                  your industry's audience, communication style, competition,
                  and marketing goals.
                </p>
              </div>

              <div className="lg:col-span-7">
                <div className="flex flex-wrap gap-3">
                  {industries.map((industry) => (
                    <div
                      key={industry}
                      className="px-4 py-3 rounded-xl border text-sm transition-all duration-300 hover:border-[#ff6900] hover:text-[#ff6900] hover:-translate-y-0.5"
                      style={{
                        borderColor: `${colors.outlineVariant}66`,
                        backgroundColor: `${colors.surfaceContainerHigh}66`,
                        color: colors.onSurfaceVariant,
                      }}
                    >
                      {industry}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto py-6 sm:py-12">
          <div
            className="rounded-2xl p-7 sm:p-10 lg:p-12"
            style={{ ...glass, ...glowBlue }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-5">
                <LineChart
                  size={34}
                  style={{ color: colors.accent }}
                />

                <h2 className="mt-6 text-3xl sm:text-4xl font-bold">
                  How Content Marketing Helps Your Business
                </h2>

                <p
                  className="mt-5 text-sm sm:text-base leading-relaxed"
                  style={{ color: colors.onSurfaceVariant }}
                >
                  The right content helps your business stay visible,
                  relevant, and memorable throughout the customer journey.
                </p>
              </div>

              <div className="lg:col-span-7">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {benefits.map((benefit) => (
                    <div
                      key={benefit}
                      className="flex items-center gap-3 p-3.5 rounded-xl border"
                      style={{
                        borderColor: `${colors.outlineVariant}55`,
                        backgroundColor: `${colors.background}88`,
                      }}
                    >
                      <CheckCircle2
                        size={17}
                        className="shrink-0"
                        style={{ color: colors.accent }}
                      />
                      <span className="text-sm">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Integrated Marketing */}
        <section
          className="py-12 sm:py-20 border-y"
          style={{
            backgroundColor: colors.surfaceContainerLow,
            borderColor: `${colors.outlineVariant}25`,
          }}
        >
          <div className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
            <div className="text-center max-w-3xl mx-auto">
              <Eyebrow color={colors.primary}>
                Integrated Digital Growth
              </Eyebrow>

              <h2 className="mt-4 text-3xl sm:text-4xl font-bold">
                Content + SEO + Social Media + Advertising
              </h2>

              <p
                className="mt-5 text-base sm:text-lg leading-relaxed"
                style={{ color: colors.onSurfaceVariant }}
              >
                Content performs best when it is connected to your overall
                digital marketing strategy.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3">
              {[
                { icon: Search, label: "SEO" },
                { icon: Megaphone, label: "Social Media" },
                { icon: Target, label: "Google Ads" },
                { icon: Activity, label: "Meta Ads" },
                { icon: MonitorSmartphone, label: "Web Development" },
                { icon: Users, label: "Lead Generation" },
                { icon: LineChart, label: "Analytics & Tracking" },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="group p-4 sm:p-5 rounded-xl text-center border transition-all duration-300 hover:-translate-y-1 hover:border-[#ff6900]/50"
                  style={{
                    backgroundColor: `${colors.background}88`,
                    borderColor: `${colors.outlineVariant}55`,
                  }}
                >
                  <Icon
                    size={22}
                    className="mx-auto transition-colors mt-3 duration-300 group-hover:text-[#ff6900]"
                    style={{ color: colors.primary }}
                  />

                  <div className="mt-3 text-xs sm:text-sm font-medium">
                    {label}
                  </div>
                </div>
              ))}
            </div>

            <div
              className="mt-8 max-w-3xl mx-auto text-center p-5 rounded-xl border"
              style={{
                backgroundColor: `${colors.primaryContainer}0D`,
                borderColor: `${colors.primaryContainer}25`,
              }}
            >
              <p
                className="text-sm sm:text-base leading-relaxed"
                style={{ color: colors.onSurfaceVariant }}
              >
                This integrated approach allows your content to support
                multiple marketing channels instead of working independently.
              </p>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section
          id="faqs"
          className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto py-6 sm:py-12"
        >
          <div className="text-center mb-10 sm:mb-14">
            <Eyebrow color={colors.accent}>FAQs</Eyebrow>

            <h2 className="mt-4 text-3xl sm:text-4xl font-bold">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = activeFaq === index;

              return (
                <div
                  key={faq.question}
                  className="rounded-xl border overflow-hidden transition-colors duration-300 hover:border-[#ff6900]/35"
                  style={{
                    backgroundColor: `${colors.surfaceContainerHigh}66`,
                    borderColor: isOpen
                      ? `${colors.accent}55`
                      : `${colors.outlineVariant}55`,
                  }}
                >
                  <button
                    type="button"
                    onClick={() =>
                      setActiveFaq(isOpen ? -1 : index)
                    }
                    className="w-full flex items-center justify-between gap-5 text-left p-5 sm:p-6"
                  >
                    <span className="font-semibold text-sm sm:text-base">
                      {faq.question}
                    </span>

                    <span
                      className="w-8 h-8 rounded-full shrink-0 flex items-center justify-center transition-colors"
                      style={{
                        backgroundColor: isOpen
                          ? `${colors.accent}18`
                          : `${colors.primaryContainer}15`,
                      }}
                    >
                      <span
                        className="text-lg leading-none"
                        style={{
                          color: isOpen
                            ? colors.accent
                            : colors.primary,
                        }}
                      >
                        {isOpen ? "−" : "+"}
                      </span>
                    </span>
                  </button>

                  {isOpen && (
                    <div
                      className="px-5 sm:px-6 pb-5 sm:pb-6 text-sm leading-relaxed"
                      style={{ color: colors.onSurfaceVariant }}
                    >
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA */}
        <section
          id="contact"
          className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto pb-4 sm:pb-3"
        >
          <div
            className="rounded-2xl p-8 sm:p-12 lg:p-16 text-center relative overflow-hidden"
            style={{ ...glass, ...glowOrange }}
          >
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `radial-gradient(circle at 50% 0%, ${colors.accent}18, transparent 55%)`,
              }}
            />

            <div className="relative z-10">
              <Eyebrow color={colors.accent}>
                Ready to Create Content That Performs?
              </Eyebrow>

              <h2 className="mt-5 font-extrabold text-2xl sm:text-4xl lg:text-4xl tracking-tight">
                Your Brand Deserves Content That{" "}
                <span style={{ color: colors.accent }}>
                  Does More
                </span>{" "}
                Than Look Good.
              </h2>

              <p
                className="mt-5 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
                style={{ color: colors.onSurfaceVariant }}
              >
                Let{" "}
                <strong style={{ color: colors.onSurface }}>
                  Search2Sale Digital
                </strong>{" "}
                create strategic, engaging, and conversion-focused content for
                your business.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="tel:+918506938033"
                  className="px-7 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:bg-[#ff7a1a] hover:scale-[1.02]"
                  style={{
                    backgroundColor: colors.accent,
                    color: "#fff",
                  }}
                >
                  <PhoneCall size={18} />
                   +91 85069 38033
                </a>

                <a
                  href="mailto:info@search2saledigital.com"
                  className="px-7 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 border transition-all duration-300 hover:border-[#ff6900] hover:text-[#ff6900]"
                  style={{
                    borderColor: `${colors.primary}45`,
                    color: colors.primary,
                  }}
                >
                  <MessageCircle size={18} />
                  Email Us
                </a>
              </div>

              <div
                className="mt-8 pt-6 border-t text-xs sm:text-sm"
                style={{
                  borderColor: `${colors.outlineVariant}55`,
                  color: colors.onSurfaceVariant,
                }}
              >
                Search2Sale Digital – Content, Creative & Digital Marketing
                Solutions in Delhi
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}