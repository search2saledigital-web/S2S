"use client";

import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Eye,
  Globe2,
  LayoutTemplateIcon,
  LineChart,
  Megaphone,
  Menu,
  MousePointerClick,
  Radar,
  RefreshCw,
  Rocket,
  Search,
  Settings2,
  ShoppingCart,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import { useEffect, useState } from "react";

import { FaGoogle, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Industries", href: "#industries" },
  { label: "FAQs", href: "#faqs" },
];

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

  // Main hover / accent color
  hover: "#ff6900",
};

const dataCard = {
  backgroundColor: colors.background,
  border: `1px solid ${colors.outlineVariant}`,
};

const gridBg = {
  backgroundImage:
    "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
  backgroundSize: "40px 40px",
};

export default function PaidMarketingPage() {
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
    <div
      className="min-h-screen w-full antialiased overflow-x-hidden"
      style={{
        backgroundColor: colors.background,
        color: colors.onSurface,
      }}
    >
      <style>{`
        .paid-card {
          transition:
            transform 0.3s ease,
            border-color 0.3s ease,
            box-shadow 0.3s ease,
            background-color 0.3s ease;
        }

        .paid-card:hover {
          transform: translateY(-5px);
          border-color: ${colors.hover} !important;
          box-shadow: 0 12px 35px rgba(255, 105, 0, 0.14);
        }

        .paid-card:hover .hover-icon {
          color: ${colors.hover} !important;
        }

        .paid-card:hover .hover-title {
          color: ${colors.hover} !important;
        }

        .accent-button {
          transition:
            transform 0.3s ease,
            background-color 0.3s ease,
            box-shadow 0.3s ease;
        }

        .accent-button:hover {
          background-color: ${colors.hover} !important;
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(255, 105, 0, 0.28);
        }

        .outline-button {
          transition:
            color 0.3s ease,
            border-color 0.3s ease,
            background-color 0.3s ease;
        }

        .outline-button:hover {
          color: ${colors.hover} !important;
          border-color: ${colors.hover} !important;
          background-color: rgba(255, 105, 0, 0.06);
        }

        .platform-card {
          transition:
            transform 0.3s ease,
            border-color 0.3s ease,
            box-shadow 0.3s ease;
        }

        .platform-card:hover {
          transform: translateY(-4px);
          border-color: ${colors.hover} !important;
          box-shadow: 0 10px 30px rgba(255, 105, 0, 0.12);
        }

        .industry-pill {
          transition:
            transform 0.3s ease,
            color 0.3s ease,
            border-color 0.3s ease,
            background-color 0.3s ease;
        }

        .industry-pill:hover {
          transform: translateY(-3px);
          color: ${colors.hover} !important;
          border-color: ${colors.hover} !important;
          background-color: rgba(255, 105, 0, 0.07) !important;
        }

        .faq-item {
          transition:
            border-color 0.3s ease,
            box-shadow 0.3s ease;
        }

        .faq-item:hover,
        .faq-item[open] {
          border-color: ${colors.hover} !important;
          box-shadow: 0 8px 25px rgba(255, 105, 0, 0.10);
        }

        .faq-item[open] .faq-plus {
          background-color: ${colors.hover} !important;
        }

        .service-link {
          transition: color 0.25s ease;
        }

        .service-link:hover {
          color: ${colors.hover} !important;
        }
      `}</style>

    

      <main>
        {/* =========================================================
            HERO
        ========================================================== */}
        <section
          id="home"
          className="relative py-10 md:py-20 overflow-hidden"
          style={gridBg}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(to bottom, rgba(37,99,235,0.10), transparent 60%)",
            }}
          />

          <div
            className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 rounded-full blur-[90px]"
            style={{
              backgroundColor: "rgba(37,99,235,0.10)",
            }}
          />

          <div
            className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full blur-[110px]"
            style={{
              backgroundColor: "rgba(255,105,0,0.08)",
            }}
          />

      
          {/* Mobile Header */}
          <div className="lg:hidden absolute top-0 left-0 right-0 z-30 px-5 py-5 flex items-center justify-between">
            <div className="font-bold text-lg">
              Search2Sale <span style={{ color: colors.hover }}>Digital</span>
            </div>

            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="p-2 rounded-lg border border-slate-700"
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>

          <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center pt-12 lg:pt-10">
            <div className="lg:col-span-7">
              <div
                className="inline-flex items-center gap-2 px-3 py-2 rounded-full border mb-6"
                style={{
                  borderColor: `${colors.hover}55`,
                  backgroundColor: `${colors.hover}12`,
                }}
              >
                <span
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{
                    backgroundColor: colors.hover,
                  }}
                />

                <span
                  className="font-mono text-xs uppercase tracking-widest"
                  style={{
                    color: colors.hover,
                  }}
                >
                  Paid Marketing Services in Delhi
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-5xl font-extrabold tracking-tight leading-[1.08] text-white">
                Get More Leads, Sales &amp; Customers with{" "}
                <span
                  className="text-transparent bg-clip-text"
                  style={{
                    backgroundImage: `linear-gradient(90deg, ${colors.primary}, ${colors.hover})`,
                  }}
                >
                  Performance-Driven Paid Advertising
                </span>
              </h1>

              <p
                className="mt-7 text-lg leading-relaxed max-w-2xl"
                style={{
                  color: colors.onSurfaceVariant,
                }}
              >
                Looking for professional paid marketing services in Delhi to
                reach more customers and grow your business?
              </p>

              <p
                className="mt-4 text-base sm:text-lg leading-relaxed max-w-2xl"
                style={{
                  color: colors.onSurfaceVariant,
                }}
              >
                At Search2Sale Digital, we create and manage targeted paid
                advertising campaigns designed to connect your business with the
                right audience at the right time.
              </p>

              <p
                className="mt-4 text-base leading-relaxed max-w-2xl"
                style={{
                  color: colors.onSurfaceVariant,
                }}
              >
                Our focus is not simply on generating clicks. We focus on
                qualified traffic, leads, conversions, and measurable business
                growth.
              </p>

              <div className="flex flex-wrap gap-4 mt-8">
                <a
                  href="#contact"
                  className="accent-button inline-flex items-center gap-2 font-semibold px-7 sm:px-8 py-4 rounded-lg"
                  style={{
                    backgroundColor: colors.secondaryContainer,
                    color: "#000",
                  }}
                >
                  Get a Free Paid Advertising Audit
                  <ArrowRight size={17} />
                </a>

                <a
                  href="#services"
                  className="outline-button inline-flex items-center gap-2 border px-7 sm:px-8 py-4 rounded-lg font-semibold"
                  style={{
                    borderColor: colors.outlineVariant,
                    color: colors.onSurface,
                  }}
                >
                  Explore Services
                </a>
              </div>
            </div>

            {/* Hero Dashboard */}
            <div className="lg:col-span-5">
              <div
                className="relative rounded-2xl border overflow-hidden p-5 sm:p-7"
                style={{
                  ...dataCard,
                  boxShadow: "0 20px 60px rgba(37,99,235,0.12)",
                }}
              >
                <div className="flex items-center justify-between border-b pb-4 mb-5 border-slate-700">
                  <div>
                    <span
                      className="text-[10px] uppercase tracking-[0.2em] font-mono"
                      style={{ color: colors.outline }}
                    >
                      PAID MEDIA CONTROL
                    </span>

                    <div className="font-bold text-lg mt-1">
                      Campaign Overview
                    </div>
                  </div>

                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{
                      backgroundColor: `${colors.hover}15`,
                      color: colors.hover,
                    }}
                  >
                    <TrendingUp size={21} />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div
                    className="rounded-xl p-4 border"
                    style={{
                      backgroundColor: colors.surfaceContainerHigh,
                      borderColor: `${colors.outlineVariant}66`,
                    }}
                  >
                    <span className="text-xs text-slate-400">
                      Qualified Leads
                    </span>
                    <div className="text-2xl font-bold mt-2">+68%</div>
                    <span
                      className="text-xs mt-2 inline-block"
                      style={{ color: colors.hover }}
                    >
                      Optimized
                    </span>
                  </div>

                  <div
                    className="rounded-xl p-4 border"
                    style={{
                      backgroundColor: colors.surfaceContainerHigh,
                      borderColor: `${colors.outlineVariant}66`,
                    }}
                  >
                    <span className="text-xs text-slate-400">
                      Conversion Rate
                    </span>
                    <div
                      className="text-2xl font-bold mt-2"
                      style={{ color: colors.primary }}
                    >
                      8.4%
                    </div>
                    <span className="text-xs text-green-400 mt-2 inline-block">
                      Tracking Active
                    </span>
                  </div>
                </div>

                <div
                  className="mt-5 rounded-xl p-5 border"
                  style={{
                    backgroundColor: colors.surfaceContainerLowest,
                    borderColor: `${colors.outlineVariant}66`,
                  }}
                >
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-sm font-semibold">
                      Channel Allocation
                    </span>
                    <span className="text-xs" style={{ color: colors.outline }}>
                      Live Monitoring
                    </span>
                  </div>

                  <div className="space-y-4">
                    {[
                      {
                        name: "Google Ads",
                        width: "85%",
                        icon: FaGoogle,
                        color: colors.primary,
                      },
                      {
                        name: "Meta Ads",
                        width: "70%",
                        icon: FaFacebook,
                        color: "#60a5fa",
                      },
                      {
                        name: "YouTube",
                        width: "55%",
                        icon: FaYoutube,
                        color: "#f87171",
                      },
                    ].map(({ name, width, icon: Icon, color }) => (
                      <div key={name}>
                        <div className="flex justify-between text-xs mb-2">
                          <span className="flex items-center gap-2">
                            <Icon size={13} style={{ color }} />
                            {name}
                          </span>

                          <span style={{ color: colors.outline }}>Active</span>
                        </div>

                        <div
                          className="h-2 rounded-full overflow-hidden"
                          style={{
                            backgroundColor: colors.surfaceVariant,
                          }}
                        >
                          <div
                            className="h-full rounded-full"
                            style={{
                              width,
                              backgroundColor: color,
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div
                  className="mt-5 rounded-xl p-4 flex items-center justify-between border"
                  style={{
                    backgroundColor: `${colors.hover}0B`,
                    borderColor: `${colors.hover}33`,
                  }}
                >
                  <div>
                    <div className="text-xs text-slate-400">Campaign Focus</div>

                    <div className="font-semibold mt-1">
                      Leads • Sales • Conversions
                    </div>
                  </div>

                  <Target
                    size={24}
                    style={{
                      color: colors.hover,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            SERVICES INTRO
        ========================================================== */}
        <section
          id="services"
          className="py-10 md:py-16 px-5 sm:px-6"
          style={{
            backgroundColor: colors.surfaceContainerLowest,
          }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span
                className="text-xs font-mono uppercase tracking-[0.2em]"
                style={{ color: colors.hover }}
              >
                What We Do
              </span>

              <h2 className="text-3xl md:text-5xl font-extrabold text-white mt-3 mb-4">
                Our Paid Marketing Services
              </h2>

              <p
                className="text-lg leading-relaxed"
                style={{
                  color: colors.onSurfaceVariant,
                }}
              >
                Targeted paid advertising solutions designed to help your
                business attract the right audience, generate qualified traffic,
                and improve conversions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Search,
                  title: "Google Ads Management",
                  body: "Reach customers actively searching for your products and services with professionally managed Google Ads campaigns.",
                  items: [
                    "Google Search Ads",
                    "Performance Max",
                    "Google Shopping",
                    "Display Advertising",
                    "Remarketing",
                    "Keyword Research",
                    "Conversion Tracking",
                    "Bid & Budget Optimization",
                  ],
                },
                {
                  icon: MousePointerClick,
                  title: "PPC Advertising Services",
                  body: "Build PPC campaigns around high-intent keywords, conversion goals, efficient budget management, and continuous performance optimization.",
                  items: [
                    "High-intent Keywords",
                    "Negative Keywords",
                    "Campaign Segmentation",
                    "Ad Testing",
                    "Landing Page Optimization",
                    "Conversion Tracking",
                    "Budget Management",
                    "Performance Monitoring",
                  ],
                },
                {
                  icon: FaFacebook,
                  title: "Meta Ads Services",
                  body: "Reach potential customers across Facebook and Instagram with targeted campaigns built around your audience, offer, and conversion objective.",
                  items: [
                    "Lead Generation",
                    "Website Traffic",
                    "Sales Campaigns",
                    "Engagement Campaigns",
                    "Retargeting",
                    "Lookalike Audiences",
                    "Creative Testing",
                    "Campaign Optimization",
                  ],
                },
                {
                  icon: FaInstagram,
                  title: "Instagram Ads",
                  body: "Connect your brand with customers through visually engaging Instagram advertising designed around your audience and conversion goals.",
                  items: [
                    "Image Ads",
                    "Video Ads",
                    "Reels Ads",
                    "Story Ads",
                    "Carousel Ads",
                    "Product Campaigns",
                    "Lead Generation",
                    "Retargeting",
                  ],
                },
                {
                  icon: Megaphone,
                  title: "Facebook Ads",
                  body: "Reach highly specific customer segments and generate leads, traffic, sales, and brand awareness through Facebook advertising.",
                  items: [
                    "Facebook Lead Ads",
                    "Website Conversions",
                    "Retargeting",
                    "Promotional Campaigns",
                    "Local Business Campaigns",
                    "E-commerce Campaigns",
                    "B2B Campaigns",
                  ],
                },
                {
                  icon: FaYoutube,
                  title: "YouTube Advertising",
                  body: "Build awareness and generate demand with video advertising that reaches potential customers before they actively search for a product or service.",
                  items: [
                    "In-stream Video Ads",
                    "Shorts Advertising",
                    "Video Discovery",
                    "Remarketing",
                    "Audience Targeting",
                    "Video Ad Strategy",
                    "Campaign Optimization",
                    "Performance Tracking",
                  ],
                },
              ].map(({ icon: Icon, title, body, items }) => (
                <div
                  key={title}
                  className="paid-card rounded-2xl p-4 sm:p-5"
                  style={dataCard}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{
                      backgroundColor: `${colors.primary}12`,
                    }}
                  >
                    <Icon
                      size={25}
                      className="hover-icon"
                      style={{
                        color: colors.primary,
                      }}
                    />
                  </div>

                  <h3 className="hover-title text-xl font-bold mb-3">
                    {title}
                  </h3>

                  <p
                    className="text-sm sm:text-base leading-relaxed mb-6"
                    style={{
                      color: colors.onSurfaceVariant,
                    }}
                  >
                    {body}
                  </p>

                  <div className="space-y-3">
                    {items.map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-2 text-sm"
                      >
                        <CheckCircle2
                          size={16}
                          className="shrink-0 mt-0.5"
                          style={{
                            color: colors.primary,
                          }}
                        />

                        <span
                          style={{
                            color: colors.onSurfaceVariant,
                          }}
                        >
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            REMARKETING + LEAD GENERATION
        ========================================================== */}
        <section className="py-10 md:py-16 px-5 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Remarketing */}
              <div
                className="paid-card rounded-2xl p-7 sm:p-9"
                style={dataCard}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{
                      backgroundColor: `${colors.hover}12`,
                    }}
                  >
                    <RefreshCw
                      size={25}
                      className="hover-icon"
                      style={{
                        color: colors.hover,
                      }}
                    />
                  </div>

                  <div>
                    <span
                      className="text-xs uppercase tracking-widest font-mono"
                      style={{ color: colors.hover }}
                    >
                      Re-engagement
                    </span>

                    <h2 className="text-2xl font-bold">
                      Remarketing &amp; Retargeting
                    </h2>
                  </div>
                </div>

                <p
                  className="leading-relaxed mb-7"
                  style={{
                    color: colors.onSurfaceVariant,
                  }}
                >
                  Not every visitor converts on their first visit. Retargeting
                  allows you to reconnect with people who have previously
                  interacted with your website, advertisements, or online
                  content.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "Bring previous visitors back",
                    "Promote specific products or services",
                    "Recover potential leads",
                    "Encourage repeat purchases",
                    "Support the customer journey",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-2 p-3 rounded-lg"
                      style={{
                        backgroundColor: colors.surfaceContainerHigh,
                      }}
                    >
                      <CheckCircle2
                        size={17}
                        className="shrink-0 mt-0.5"
                        style={{
                          color: colors.primary,
                        }}
                      />

                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Lead Generation */}
              <div
                className="paid-card rounded-2xl p-7 sm:p-9"
                style={dataCard}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{
                      backgroundColor: `${colors.primary}12`,
                    }}
                  >
                    <Users
                      size={25}
                      className="hover-icon"
                      style={{
                        color: colors.primary,
                      }}
                    />
                  </div>

                  <div>
                    <span
                      className="text-xs uppercase tracking-widest font-mono"
                      style={{ color: colors.primary }}
                    >
                      Lead Generation
                    </span>

                    <h2 className="text-2xl font-bold">
                      Turn Advertising Traffic Into Qualified Leads
                    </h2>
                  </div>
                </div>

                <p
                  className="leading-relaxed mb-6"
                  style={{
                    color: colors.onSurfaceVariant,
                  }}
                >
                  If your goal is to generate enquiries, our campaigns can be
                  designed specifically for lead generation. We optimize the
                  complete journey from advertisement to enquiry.
                </p>

                <div
                  className="rounded-xl p-5 border mb-6 flex flex-wrap items-center justify-center gap-2 text-sm font-semibold"
                  style={{
                    backgroundColor: colors.surfaceContainerHigh,
                    borderColor: `${colors.outlineVariant}66`,
                  }}
                >
                  <span>Ad</span>
                  <ArrowRight size={15} style={{ color: colors.hover }} />
                  <span>Landing Page</span>
                  <ArrowRight size={15} style={{ color: colors.hover }} />
                  <span>Lead Form</span>
                  <ArrowRight size={15} style={{ color: colors.hover }} />
                  <span>Tracking</span>
                  <ArrowRight size={15} style={{ color: colors.hover }} />
                  <span>Follow-Up</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {[
                    "Real Estate",
                    "Education",
                    "Healthcare",
                    "Professional Services",
                    "Home Services",
                    "B2B",
                    "Local Businesses",
                    "High-Ticket Services",
                  ].map((item) => (
                    <span
                      key={item}
                      className="px-3 py-2 rounded-full text-xs border"
                      style={{
                        color: colors.onSurfaceVariant,
                        borderColor: `${colors.outlineVariant}66`,
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            E-COMMERCE + TRACKING + LANDING PAGE
        ========================================================== */}
        <section
          className="py-10 md:py-16 px-5 sm:px-6"
          style={{
            backgroundColor: colors.surfaceContainerLowest,
          }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span
                className="text-xs uppercase tracking-[0.2em] font-mono"
                style={{ color: colors.hover }}
              >
                Conversion Infrastructure
              </span>

              <h2 className="text-3xl md:text-5xl font-extrabold mt-3 mb-4">
                More Than Just Advertising
              </h2>

              <p
                className="text-lg leading-relaxed"
                style={{
                  color: colors.onSurfaceVariant,
                }}
              >
                Strong paid campaigns need the right products, landing pages,
                tracking systems, and conversion infrastructure behind them.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* E-commerce */}
              <div className="paid-card rounded-2xl p-7" style={dataCard}>
                <ShoppingCart
                  size={30}
                  className="hover-icon mb-6"
                  style={{ color: colors.primary }}
                />

                <h3 className="hover-title text-xl font-bold mb-3">
                  E-commerce Paid Advertising
                </h3>

                <p
                  className="text-sm leading-relaxed mb-6"
                  style={{
                    color: colors.onSurfaceVariant,
                  }}
                >
                  Drive qualified shoppers to your online store with
                  performance-focused campaigns built around purchase intent and
                  measurable returns.
                </p>

                <div className="space-y-3">
                  {[
                    "Google Shopping",
                    "Performance Max",
                    "Meta Product Campaigns",
                    "Retargeting",
                    "Catalog Advertising",
                    "Conversion Tracking",
                    "ROAS Monitoring",
                  ].map((item) => (
                    <div key={item} className="flex gap-2 text-sm">
                      <CheckCircle2
                        size={16}
                        style={{ color: colors.primary }}
                      />
                      <span
                        style={{
                          color: colors.onSurfaceVariant,
                        }}
                      >
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Analytics */}
              <div className="paid-card rounded-2xl p-7" style={dataCard}>
                <LineChart
                  size={30}
                  className="hover-icon mb-6"
                  style={{ color: colors.primary }}
                />

                <h3 className="hover-title text-xl font-bold mb-3">
                  Conversion Tracking &amp; Analytics
                </h3>

                <p
                  className="text-sm leading-relaxed mb-6"
                  style={{
                    color: colors.onSurfaceVariant,
                  }}
                >
                  Accurate tracking helps you understand which campaigns,
                  keywords, audiences, and ads are contributing to business
                  results.
                </p>

                <div className="space-y-3">
                  {[
                    "Website Conversions",
                    "Lead Forms",
                    "Phone Calls",
                    "WhatsApp Enquiries",
                    "Purchases",
                    "Add-to-Cart Events",
                    "Campaign Attribution",
                  ].map((item) => (
                    <div key={item} className="flex gap-2 text-sm">
                      <CheckCircle2
                        size={16}
                        style={{ color: colors.primary }}
                      />
                      <span
                        style={{
                          color: colors.onSurfaceVariant,
                        }}
                      >
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Landing Pages */}
              <div className="paid-card rounded-2xl p-7" style={dataCard}>
                <LayoutTemplateIcon
                  size={30}
                  className="hover-icon mb-6"
                  style={{ color: colors.hover }}
                />

                <h3 className="hover-title text-xl font-bold mb-3">
                  Landing Page Optimization
                </h3>

                <p
                  className="text-sm leading-relaxed mb-6"
                  style={{
                    color: colors.onSurfaceVariant,
                  }}
                >
                  Your advertisement can generate clicks, but your landing page
                  needs to convert them. We review pages for usability,
                  relevance, trust, and conversion barriers.
                </p>

                <div className="space-y-3">
                  {[
                    "Message Relevance",
                    "Page Speed",
                    "Mobile Usability",
                    "Calls-to-Action",
                    "Lead Forms",
                    "Content Clarity",
                    "Trust Signals",
                    "Conversion Barriers",
                  ].map((item) => (
                    <div key={item} className="flex gap-2 text-sm">
                      <CheckCircle2 size={16} style={{ color: colors.hover }} />
                      <span
                        style={{
                          color: colors.onSurfaceVariant,
                        }}
                      >
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            PAID MARKETING PROCESS
        ========================================================== */}
        <section id="process" className="py-10 md:py-16 px-5 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span
                className="text-xs uppercase tracking-[0.2em] font-mono"
                style={{ color: colors.hover }}
              >
                How We Work
              </span>

              <h2 className="text-3xl md:text-5xl font-extrabold mt-3 mb-4">
                Our Paid Marketing Process
              </h2>

              <p
                className="text-lg"
                style={{
                  color: colors.onSurfaceVariant,
                }}
              >
                A structured approach designed to connect business objectives
                with targeting, campaign execution, tracking, testing, and
                continuous optimization.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                [
                  "01",
                  "Business & Goal Analysis",
                  "We understand your products, services, customers, competitors, budget, and business objectives.",
                  Target,
                ],
                [
                  "02",
                  "Market & Audience Research",
                  "We research your target audience, search behaviour, competitors, keywords, and potential advertising opportunities.",
                  Users,
                ],
                [
                  "03",
                  "Campaign Strategy",
                  "We determine the right platforms, campaign types, targeting, budget allocation, and conversion goals.",
                  Settings2,
                ],
                [
                  "04",
                  "Campaign Setup",
                  "We structure campaigns, ad groups, audiences, keywords, creatives, tracking, and conversion actions.",
                  Search,
                ],
                [
                  "05",
                  "Launch",
                  "Campaigns are launched after reviewing targeting, messaging, tracking, budgets, and landing pages.",
                  Rocket,
                ],
                [
                  "06",
                  "Monitoring & Optimization",
                  "We monitor campaign performance and make data-driven adjustments to targeting, keywords, bids, creatives, and budgets.",
                  TrendingUp,
                ],
                [
                  "07",
                  "Testing",
                  "We test different ad messages, creatives, audiences, and landing page elements to identify better-performing combinations.",
                  Eye,
                ],
                [
                  "08",
                  "Reporting",
                  "We provide performance insights so you can understand where your advertising budget is being invested and what results it is generating.",
                  BarChart3,
                ],
              ].map(([number, title, description, Icon]) => (
                <div
                  key={number}
                  className="paid-card rounded-2xl p-6"
                  style={dataCard}
                >
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className="w-11 h-11 rounded-full flex items-center justify-center font-bold"
                      style={{
                        backgroundColor: colors.primary,
                        color: "#000",
                      }}
                    >
                      {number}
                    </div>

                    <Icon
                      size={23}
                      className="hover-icon"
                      style={{
                        color: colors.primary,
                      }}
                    />
                  </div>

                  <h3 className="hover-title font-bold text-lg mb-3">
                    {title}
                  </h3>

                  <p
                    className="text-sm leading-relaxed"
                    style={{
                      color: colors.onSurfaceVariant,
                    }}
                  >
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            WHY CHOOSE US
        ========================================================== */}
        <section
          className="py-10 md:py-16 px-5 sm:px-6"
          style={{
            backgroundColor: colors.surfaceContainerLowest,
          }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-5">
                <span
                  className="text-xs uppercase tracking-[0.2em] font-mono"
                  style={{
                    color: colors.hover,
                  }}
                >
                  Why Search2Sale
                </span>

                <h2 className="text-3xl md:text-5xl font-extrabold mt-3 mb-5">
                  Why Choose Search2Sale Digital?
                </h2>

                <p
                  className="text-lg leading-relaxed"
                  style={{
                    color: colors.onSurfaceVariant,
                  }}
                >
                  We approach paid advertising as a complete customer
                  acquisition system—not simply a way to generate clicks.
                </p>

                <div
                  className="mt-7 p-5 rounded-xl border"
                  style={{
                    borderColor: `${colors.hover}33`,
                    backgroundColor: `${colors.hover}08`,
                  }}
                >
                  <div
                    className="flex items-center gap-3 font-semibold"
                    style={{
                      color: colors.hover,
                    }}
                  >
                    <Radar size={20} />
                    Focused on measurable business outcomes
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
                {[
                  {
                    icon: Target,
                    title: "Goal-Oriented Campaigns",
                    body: "We build campaigns around your actual business objective—whether that is leads, sales, enquiries, traffic, or brand awareness.",
                  },
                  {
                    icon: BarChart3,
                    title: "Data-Driven Optimization",
                    body: "Campaign decisions are based on performance data rather than assumptions.",
                  },
                  {
                    icon: Globe2,
                    title: "Multi-Platform Expertise",
                    body: "We can manage campaigns across Google, Facebook, Instagram, and YouTube according to your audience and business requirements.",
                  },
                  {
                    icon: Eye,
                    title: "Transparent Approach",
                    body: "We believe you should understand what is being advertised, where your budget is going, and how campaigns are performing.",
                  },
                  {
                    icon: MousePointerClick,
                    title: "Conversion-Focused Strategy",
                    body: "We look beyond clicks and impressions to understand the actions that matter to your business.",
                  },
                  {
                    icon: TrendingUp,
                    title: "Continuous Improvement",
                    body: "Paid advertising requires ongoing optimization. We monitor campaigns and identify opportunities to improve performance over time.",
                  },
                ].map(({ icon: Icon, title, body }) => (
                  <div
                    key={title}
                    className="paid-card rounded-xl p-6"
                    style={dataCard}
                  >
                    <Icon
                      size={27}
                      className="hover-icon mb-5"
                      style={{
                        color: colors.primary,
                      }}
                    />

                    <h3 className="hover-title text-lg font-bold mb-3">
                      {title}
                    </h3>

                    <p
                      className="text-sm leading-relaxed"
                      style={{
                        color: colors.onSurfaceVariant,
                      }}
                    >
                      {body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            INDUSTRIES
        ========================================================== */}
        <section id="industries" className="py-10 md:py-16 px-5 sm:px-6">
          <div className="max-w-6xl mx-auto text-center">
            <span
              className="text-xs uppercase tracking-[0.2em] font-mono"
              style={{
                color: colors.hover,
              }}
            >
              Industries
            </span>

            <h2 className="text-3xl md:text-5xl font-extrabold mt-3 mb-4">
              Paid Marketing for Different Industries
            </h2>

            <p
              className="text-lg max-w-3xl mx-auto mb-10"
              style={{
                color: colors.onSurfaceVariant,
              }}
            >
              We create customized paid advertising strategies based on your
              industry, audience, competition, offer, and business objectives.
            </p>

            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              {[
                "Real Estate",
                "Healthcare",
                "Education",
                "E-commerce",
                "Finance",
                "Automotive",
                "B2B Businesses",
                "Local Businesses",
                "Startups",
                "Professional Services",
                "Home Services",
                "Service-Based Businesses",
              ].map((industry) => (
                <div
                  key={industry}
                  className="industry-pill px-5 py-3 rounded-full border text-sm sm:text-base font-medium"
                  style={{
                    borderColor: `${colors.outlineVariant}66`,
                    backgroundColor: colors.surfaceContainerHigh,
                    color: colors.onSurface,
                  }}
                >
                  {industry}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            BENEFITS
        ========================================================== */}
        <section
          className="py-10 md:py-16 px-5 sm:px-6"
          style={{
            backgroundColor: colors.surfaceContainerLowest,
          }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div>
                <span
                  className="text-xs uppercase tracking-[0.2em] font-mono"
                  style={{
                    color: colors.hover,
                  }}
                >
                  Business Growth
                </span>

                <h2 className="text-3xl md:text-5xl font-extrabold mt-3 mb-5">
                  Benefits of Paid Marketing
                </h2>

                <p
                  className="text-lg leading-relaxed"
                  style={{
                    color: colors.onSurfaceVariant,
                  }}
                >
                  A well-managed paid advertising strategy can help your
                  business reach targeted audiences faster while creating
                  measurable opportunities for traffic, leads, sales, and
                  growth.
                </p>

                <a
                  href="#contact"
                  className="outline-button inline-flex items-center gap-2 mt-7 border px-6 py-3 rounded-lg font-semibold"
                  style={{
                    borderColor: colors.outlineVariant,
                    color: colors.onSurface,
                  }}
                >
                  Discuss Your Campaign
                  <ArrowRight size={16} />
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Reach customers faster",
                  "Generate targeted website traffic",
                  "Increase qualified leads",
                  "Generate online sales",
                  "Promote new products and services",
                  "Reach specific audiences",
                  "Retarget potential customers",
                  "Test new markets",
                  "Increase brand visibility",
                  "Measure marketing performance",
                ].map((benefit) => (
                  <div
                    key={benefit}
                    className="paid-card rounded-xl p-4 flex items-center gap-3"
                    style={dataCard}
                  >
                    <CheckCircle2
                      size={18}
                      className="hover-icon shrink-0"
                      style={{
                        color: colors.primary,
                      }}
                    />

                    <span className="text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="mt-12 p-6 sm:p-8 rounded-2xl border text-center"
              style={{
                borderColor: `${colors.outlineVariant}66`,
                backgroundColor: colors.background,
              }}
            >
              <p
                className="text-base sm:text-lg leading-relaxed max-w-4xl mx-auto"
                style={{
                  color: colors.onSurfaceVariant,
                }}
              >
                Paid advertising can work alongside SEO and other digital
                marketing activities to create a more complete customer
                acquisition strategy.
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================
            PAID + SEO + WEB DEVELOPMENT
        ========================================================== */}
        <section className="py-10 md:py-16 px-5 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div
              className="relative overflow-hidden rounded-2xl border p-8 sm:p-10 md:p-14 text-center"
              style={{
                background: "linear-gradient(135deg, #222a3d 0%, #0b1326 70%)",
                borderColor: `${colors.outlineVariant}66`,
              }}
            >
              <div
                className="absolute w-80 h-80 rounded-full blur-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                style={{
                  backgroundColor: `${colors.hover}0D`,
                }}
              />

              <div className="relative z-10 max-w-4xl mx-auto">
                <span
                  className="text-xs uppercase tracking-[0.2em] font-mono"
                  style={{
                    color: colors.hover,
                  }}
                >
                  Integrated Growth
                </span>

                <h2 className="text-3xl md:text-5xl font-extrabold mt-3 mb-5">
                  Paid Marketing + SEO + Web Development
                </h2>

                <p
                  className="text-lg leading-relaxed"
                  style={{
                    color: colors.onSurfaceVariant,
                  }}
                >
                  Paid advertising works best when your complete digital
                  presence is optimized for conversions.
                </p>

                <p
                  className="mt-5 text-base leading-relaxed"
                  style={{
                    color: colors.onSurfaceVariant,
                  }}
                >
                  At Search2Sale Digital, we can combine paid marketing with SEO
                  Services, Social Media Marketing, Web Development, Content
                  &amp; Creative Services, Lead Generation, and Analytics &amp;
                  Tracking.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 mt-8">
                  {[
                    "SEO Services",
                    "Social Media",
                    "Web Development",
                    "Creative",
                    "Lead Generation",
                    "Analytics",
                  ].map((item) => (
                    <div
                      key={item}
                      className="industry-pill rounded-lg px-3 py-3 text-xs sm:text-sm font-semibold border"
                      style={{
                        borderColor: `${colors.outlineVariant}66`,
                        backgroundColor: colors.surfaceContainerHigh,
                        color: colors.onSurface,
                      }}
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <p
                  className="mt-8 text-sm sm:text-base leading-relaxed"
                  style={{
                    color: colors.onSurfaceVariant,
                  }}
                >
                  This integrated approach helps connect your advertising
                  campaigns with your website, content, search visibility, and
                  lead-generation strategy.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            FAQ
        ========================================================== */}
        <section
          id="faqs"
          className="py-10 md:py-16 px-5 sm:px-6"
          style={{
            backgroundColor: colors.surfaceContainerLowest,
          }}
        >
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10 sm:mb-12">
              <span
                className="text-xs uppercase tracking-[0.2em] font-mono"
                style={{
                  color: colors.hover,
                }}
              >
                FAQs
              </span>

              <h2 className="text-3xl md:text-5xl font-extrabold mt-3 mb-4">
                Frequently Asked Questions
              </h2>

              <p
                className="text-lg"
                style={{
                  color: colors.onSurfaceVariant,
                }}
              >
                Answers to common questions about our paid marketing services.
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  question: "What are paid marketing services?",
                  answer:
                    "Paid marketing involves promoting your business through paid advertising platforms such as Google Ads, Facebook Ads, Instagram Ads, and YouTube Ads to reach targeted audiences and generate traffic, leads, sales, or awareness.",
                },
                {
                  question: "How much does paid advertising cost in Delhi?",
                  answer:
                    "The total cost depends on your advertising budget, industry, competition, target audience, campaign objectives, and platform. Your advertising budget and agency management fee are typically considered separately.",
                },
                {
                  question: "How much should I spend on Google Ads?",
                  answer:
                    "There is no fixed budget that works for every business. We recommend a budget based on your market, customer value, competition, conversion goals, and expected campaign data.",
                },
                {
                  question: "Do you manage Google Ads?",
                  answer:
                    "Yes. We provide Google Ads management including campaign setup, keyword research, ad creation, conversion tracking, optimization, and performance monitoring.",
                },
                {
                  question: "Do you provide Facebook and Instagram Ads?",
                  answer:
                    "Yes. We manage Meta advertising campaigns across Facebook and Instagram, including lead generation, sales, traffic, engagement, and retargeting campaigns.",
                },
                {
                  question: "Do you provide YouTube advertising?",
                  answer:
                    "Yes. We can plan, launch, and optimize YouTube advertising campaigns based on your target audience and marketing objectives.",
                },
                {
                  question: "Can paid marketing generate leads?",
                  answer:
                    "Yes. Paid advertising can be an effective channel for lead generation when targeting, ad messaging, landing pages, conversion tracking, and follow-up processes are properly aligned.",
                },
                {
                  question:
                    "How quickly can paid advertising generate results?",
                  answer:
                    "Paid campaigns can start generating traffic shortly after launch, but meaningful optimization usually requires sufficient data and ongoing testing. Results vary by industry, competition, offer, budget, and campaign quality.",
                },
                {
                  question: "Do you provide conversion tracking?",
                  answer:
                    "Yes. Conversion tracking can be configured for relevant actions such as forms, calls, purchases, enquiries, and other important website events.",
                },
              ].map(({ question, answer }) => (
                <details
                  key={question}
                  className="faq-item rounded-xl overflow-hidden border"
                  style={dataCard}
                >
                  <summary className="list-none cursor-pointer p-5 sm:p-6 flex items-center justify-between gap-4 font-semibold text-base sm:text-lg">
                    <span>{question}</span>

                    <span
                      className="faq-plus w-8 h-8 shrink-0 rounded-full flex items-center justify-center text-xl transition-all duration-300 group-open:rotate-45"
                      style={{
                        backgroundColor: colors.primary,
                        color: "#000",
                      }}
                    >
                      +
                    </span>
                  </summary>

                  <div className="px-5 sm:px-6 pb-5 sm:pb-6">
                    <p
                      className="text-sm sm:text-base leading-relaxed"
                      style={{
                        color: colors.onSurfaceVariant,
                      }}
                    >
                      {answer}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            FINAL CTA
        ========================================================== */}
        <section id="contact" className="py-7 md:py-12 px-5 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div
              className="relative overflow-hidden rounded-2xl border p-8 sm:p-12 md:p-16 text-center"
              style={{
                background: "linear-gradient(135deg, #222a3d 0%, #0b1326 75%)",
                borderColor: `${colors.outlineVariant}66`,
              }}
            >
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-[450px] sm:h-[450px] rounded-full blur-3xl pointer-events-none"
                style={{
                  backgroundColor: `${colors.hover}12`,
                }}
              />

              <div className="relative z-10 max-w-4xl mx-auto">
                <span
                  className="text-xs uppercase tracking-[0.2em] font-mono"
                  style={{
                    color: colors.hover,
                  }}
                >
                  Start Growing
                </span>

                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mt-3 mb-5 leading-tight">
                  Ready to Grow Your Business with Paid Advertising?
                </h2>

                <p
                  className="text-base sm:text-lg leading-relaxed max-w-3xl mx-auto mb-4"
                  style={{
                    color: colors.onSurfaceVariant,
                  }}
                >
                  Stop wasting your advertising budget on untargeted traffic.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
                  <a
                    href="tel:+918506938033"
                    className="accent-button inline-flex items-center justify-center gap-2 px-7 sm:px-9 py-4 rounded-lg font-semibold"
                    style={{
                      backgroundColor: colors.secondaryContainer,
                      color: "#000",
                    }}
                  >
                    Call Us: +91 85069 38033
                    <ArrowRight size={16} />
                  </a>

                  <a
                    href="mailto:info@search2saledigital.com"
                    className="outline-button inline-flex items-center justify-center px-7 sm:px-9 py-4 rounded-lg border font-semibold"
                    style={{
                      borderColor: colors.outlineVariant,
                      color: colors.onSurface,
                    }}
                  >
                    Email Us
                  </a>
                </div>

                <div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-xs sm:text-sm"
                  style={{
                    borderColor: `${colors.hover}33`,
                    backgroundColor: `${colors.hover}08`,
                    color: colors.onSurfaceVariant,
                  }}
                >
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{
                      backgroundColor: colors.hover,
                    }}
                  />
                  Get Your Free Paid Marketing Audit
                </div>

                <p
                  className="mt-7 text-sm sm:text-base"
                  style={{
                    color: colors.onSurfaceVariant,
                  }}
                >
                  <span
                    className="font-semibold"
                    style={{
                      color: colors.onSurface,
                    }}
                  >
                    Search2Sale Digital
                  </span>{" "}
                  – Paid Marketing &amp; Digital Growth Solutions in Delhi
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
