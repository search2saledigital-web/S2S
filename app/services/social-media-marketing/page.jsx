import React from "react";
import {
  Radar,
  ArrowRight,
  CalendarDays,
  Palette,
  Megaphone,
  CheckCircle2,
  Target,
  Globe2,
  BarChart3,
  Search,
} from "lucide-react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { LiaLinkedin } from "react-icons/lia";

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

  // Main hover color
  hover: "#ff6900",
};

const dataCard = {
  backgroundColor: colors.background,
  border: `1px solid ${colors.outlineVariant}`,
};

const glowBlue = {
  boxShadow: "0 0 20px rgba(37, 99, 235, 0.2)",
};

const gridBg = {
  backgroundImage:
    "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
  backgroundSize: "40px 40px",
};

function StatBlock({ label, value, color }) {
  return (
    <div
      className="p-4 border rounded-lg"
      style={{
        borderColor: `${colors.outlineVariant}4D`,
        backgroundColor: colors.background,
      }}
    >
      <div
        className="text-[11px] tracking-widest font-semibold mb-1"
        style={{ color: colors.outline }}
      >
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
      style={{
        backgroundColor: colors.background,
        color: colors.onSurface,
      }}
    >
      <style>{`
        .social-card {
          transition:
            transform 0.3s ease,
            border-color 0.3s ease,
            box-shadow 0.3s ease,
            background-color 0.3s ease;
        }

        .social-card:hover {
          transform: translateY(-5px);
          border-color: ${colors.hover} !important;
          box-shadow: 0 10px 30px rgba(255, 105, 0, 0.14);
        }

        .social-card:hover .hover-icon {
          color: ${colors.hover} !important;
        }

        .social-card:hover .hover-title {
          color: ${colors.hover} !important;
        }

        .social-pill {
          transition:
            transform 0.3s ease,
            border-color 0.3s ease,
            color 0.3s ease,
            background-color 0.3s ease,
            box-shadow 0.3s ease;
        }

        .social-pill:hover {
          transform: translateY(-3px);
          color: ${colors.hover} !important;
          border-color: ${colors.hover} !important;
          background-color: rgba(255, 105, 0, 0.08) !important;
          box-shadow: 0 5px 20px rgba(255, 105, 0, 0.1);
        }

        .cta-button {
          transition:
            transform 0.3s ease,
            background-color 0.3s ease,
            box-shadow 0.3s ease;
        }

        .cta-button:hover {
          background-color: ${colors.hover} !important;
          box-shadow: 0 10px 30px rgba(255, 105, 0, 0.28);
          transform: translateY(-2px);
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

        .faq-item {
          transition:
            border-color 0.3s ease,
            box-shadow 0.3s ease;
        }

        .faq-item:hover {
          border-color: ${colors.hover} !important;
          box-shadow: 0 8px 25px rgba(255, 105, 0, 0.1);
        }

        .faq-item[open] {
          border-color: ${colors.hover} !important;
        }

        .faq-item[open] .faq-plus {
          background-color: ${colors.hover} !important;
        }
      `}</style>

      <main>
        {/* =========================================================
            HERO
        ========================================================== */}
        <section
          className="relative py-8 md:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
          style={gridBg}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `linear-gradient(to bottom, ${colors.primaryContainer}1A, transparent)`,
            }}
          />

          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-center relative z-10">
            {/* Hero Content */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-[11px] sm:text-xs font-semibold tracking-widest"
                style={{
                  color: colors.primary,
                  borderColor: `${colors.primary}33`,
                  backgroundColor: `${colors.primary}1A`,
                }}
              >
                <Radar size={14} />
                Social Media Marketing Services in Delhi
              </div>

              <h1 className="font-extrabold leading-[1.1] tracking-tight text-4xl sm:text-5xl lg:text-5xl">
                Grow Your Brand, Reach the Right Audience
                <br className="hidden sm:block" />
                <span style={{ color: colors.primary }}>
                  & Generate More Customers
                </span>
              </h1>

              <p
                className="text-base sm:text-lg leading-relaxed max-w-2xl"
                style={{ color: colors.onSurfaceVariant }}
              >
                Looking for professional social media marketing services in
                Delhi to grow your business online? At Search2Sale Digital, we
                help businesses build a strong social media presence through
                strategic content, creative campaigns, audience engagement,
                paid advertising, and performance-driven marketing.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  className="cta-button font-semibold px-6 sm:px-8 py-4 rounded-lg flex items-center gap-2"
                  style={{
                    backgroundColor: colors.secondaryContainer,
                    color: "#000",
                  }}
                >
                  Request a Social Audit
                  <ArrowRight size={16} />
                </button>

                <button
                  className="outline-button border px-6 sm:px-8 py-4 rounded-lg"
                  style={{
                    borderColor: colors.primary,
                    color: colors.primary,
                  }}
                >
                  View Performance Data
                </button>
              </div>
            </div>

            {/* Hero Data Card */}
            <div className="lg:col-span-5 relative hidden lg:block">
              <div
                className="p-6 rounded-xl relative z-10 transform rotate-3 hover:rotate-0 transition-transform duration-500"
                style={{
                  ...dataCard,
                  ...glowBlue,
                }}
              >
                <div className="flex justify-between items-center mb-6">
                  <span
                    className="text-[11px] tracking-widest font-semibold"
                    style={{ color: colors.outline }}
                  >
                    CAMPAIGN VELOCITY
                  </span>

                  <span
                    className="font-bold"
                    style={{ color: colors.hover }}
                  >
                    +342% ROI
                  </span>
                </div>

                <div className="space-y-4">
                  <div
                    className="h-2 rounded overflow-hidden"
                    style={{
                      backgroundColor: colors.surfaceVariant,
                    }}
                  >
                    <div
                      className="h-full w-3/4"
                      style={{
                        backgroundColor: colors.primary,
                      }}
                    />
                  </div>

                  <div
                    className="h-2 rounded overflow-hidden"
                    style={{
                      backgroundColor: colors.surfaceVariant,
                    }}
                  >
                    <div
                      className="h-full w-1/2"
                      style={{
                        backgroundColor: colors.tertiaryContainer,
                      }}
                    />
                  </div>

                  <div
                    className="h-2 rounded overflow-hidden"
                    style={{
                      backgroundColor: colors.surfaceVariant,
                    }}
                  >
                    <div
                      className="h-full w-5/6"
                      style={{
                        backgroundColor: colors.hover,
                      }}
                    />
                  </div>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  <StatBlock
                    label="TOTAL REACH"
                    value="2.4M"
                    color={colors.onSurface}
                  />

                  <StatBlock
                    label="CONV. RATE"
                    value="8.7%"
                    color={colors.primary}
                  />
                </div>
              </div>

              <div
                className="absolute -top-10 -right-10 w-64 h-64 rounded-full -z-10"
                style={{
                  backgroundColor: `${colors.primary}33`,
                  filter: "blur(64px)",
                }}
              />
            </div>
          </div>
        </section>

        {/* =========================================================
            OUR SOCIAL MEDIA MARKETING SERVICES
        ========================================================== */}
        <section
          className="py-10 md:py-16 px-4 sm:px-6 lg:px-8"
          style={{
            backgroundColor: colors.surfaceContainerLowest,
          }}
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10 sm:mb-14 max-w-3xl mx-auto space-y-3">
              <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl">
                Our Social Media Marketing Services
              </h2>

              <p
                className="text-base sm:text-lg leading-relaxed"
                style={{
                  color: colors.onSurfaceVariant,
                }}
              >
                Strategic social media solutions designed to build your brand,
                engage your audience, and support measurable business growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {[
                {
                  icon: CalendarDays,
                  title: "Social Media Management",
                  body: "We manage your social media presence with a consistent and strategic approach to keep your profiles active, professional, and aligned with your business objectives.",
                  items: [
                    "Social media strategy",
                    "Content planning",
                    "Post creation",
                    "Creative designs",
                    "Captions and hashtags",
                    "Content scheduling",
                    "Community management",
                    "Audience engagement",
                    "Performance monitoring",
                    "Monthly reporting",
                  ],
                },
                {
                  icon: Palette,
                  title: "Social Media Content Marketing",
                  body: "Great social media marketing starts with great content. We create engaging content designed to increase brand awareness, audience engagement, website visits, enquiries, and conversions.",
                  items: [
                    "Educational posts",
                    "Promotional posts",
                    "Product/service posts",
                    "Customer-focused content",
                    "Reels",
                    "Stories",
                    "Infographics",
                    "Carousels",
                    "Industry insights",
                    "Festival and seasonal content",
                  ],
                },
                {
                  icon: FaInstagram,
                  title: "Instagram Marketing",
                  body: "Build a stronger Instagram presence with engaging visuals, Reels, Stories, and strategic content designed to increase visibility, engagement, and customer enquiries.",
                  items: [
                    "Instagram profile optimization",
                    "Content strategy",
                    "Reels",
                    "Stories",
                    "Carousel posts",
                    "Creative design",
                    "Hashtag strategy",
                    "Audience engagement",
                    "Instagram advertising",
                    "Performance tracking",
                  ],
                },
                {
                  icon: FaFacebook,
                  title: "Facebook Marketing",
                  body: "Reach your target customers and build a professional Facebook presence with consistent content and targeted campaigns.",
                  items: [
                    "Facebook page management",
                    "Content creation",
                    "Post scheduling",
                    "Audience engagement",
                    "Facebook advertising",
                    "Lead generation campaigns",
                    "Retargeting",
                    "Performance analysis",
                  ],
                },
                {
                  icon: LiaLinkedin,
                  title: "LinkedIn Marketing",
                  body: "Build professional credibility and generate B2B opportunities with strategic LinkedIn marketing focused on the right professional audience.",
                  items: [
                    "LinkedIn company page management",
                    "B2B content",
                    "Thought-leadership content",
                    "Industry-focused posts",
                    "Lead generation",
                    "Brand awareness",
                    "Professional audience targeting",
                  ],
                },
                {
                  icon: Megaphone,
                  title: "Social Media Advertising",
                  body: "Reach more customers with targeted paid social media campaigns based on demographics, interests, behaviour, location, and other relevant targeting signals.",
                  items: [
                    "Meta Ads",
                    "Facebook Ads",
                    "Instagram Ads",
                    "Lead generation campaigns",
                    "Website traffic campaigns",
                    "Conversion campaigns",
                    "Retargeting campaigns",
                    "Creative testing",
                    "Audience targeting",
                    "Campaign optimization",
                    "Performance tracking",
                  ],
                },
              ].map(({ icon: Icon, title, body, items }) => (
                <div
                  key={title}
                  className="social-card rounded-xl p-4 sm:p-6"
                  style={dataCard}
                >
                  <Icon
                    size={30}
                    color={colors.primary}
                    className="mb-5 hover-icon transition-colors duration-300"
                  />

                  <h3 className="font-bold text-lg sm:text-xl mb-3 hover-title transition-colors duration-300">
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

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-3">
                    {items.map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-2"
                      >
                        <CheckCircle2
                          size={16}
                          color={colors.primary}
                          className="mt-0.5 shrink-0 hover-icon transition-colors duration-300"
                        />

                        <span
                          className="text-sm"
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
            PROCESS
        ========================================================== */}
        <section className="py-10 md:py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10 sm:mb-14 max-w-3xl mx-auto space-y-3">
              <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl">
                Our Social Media Marketing Process
              </h2>

              <p
                className="text-base sm:text-lg leading-relaxed"
                style={{
                  color: colors.onSurfaceVariant,
                }}
              >
                A structured approach that connects research, strategy,
                content, engagement, advertising, and performance analysis.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                [
                  "01",
                  "Business & Audience Research",
                  "We understand your business, industry, competitors, customers, and marketing goals.",
                ],
                [
                  "02",
                  "Social Media Audit",
                  "We review your existing social media profiles and identify opportunities for improvement.",
                ],
                [
                  "03",
                  "Strategy Development",
                  "We create a customized social media strategy based on your target audience and objectives.",
                ],
                [
                  "04",
                  "Content Planning",
                  "We develop a content calendar covering educational, promotional, engagement, and brand-building content.",
                ],
                [
                  "05",
                  "Creative & Content Creation",
                  "Our team creates platform-specific graphics, captions, videos, Reels, and other content formats.",
                ],
                [
                  "06",
                  "Publishing & Engagement",
                  "Content is scheduled and published consistently while your audience interactions are monitored.",
                ],
                [
                  "07",
                  "Paid Advertising",
                  "Where appropriate, we launch targeted social media campaigns to generate traffic, leads, sales, or brand awareness.",
                ],
                [
                  "08",
                  "Performance Analysis",
                  "We monitor important metrics and use the data to improve future campaigns.",
                ],
              ].map(([number, title, description]) => (
                <div
                  key={number}
                  className="social-card rounded-xl p-4 sm:p-6 relative"
                  style={dataCard}
                >
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center font-bold mb-5 transition-colors duration-300"
                    style={{
                      backgroundColor: colors.primary,
                      color: "#000",
                    }}
                  >
                    {number}
                  </div>

                  <h3 className="font-semibold text-lg mb-3 hover-title transition-colors duration-300">
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
          className="py-10 md:py-16 px-4 sm:px-6 lg:px-8"
          style={{
            backgroundColor: colors.surfaceContainerLowest,
          }}
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10 sm:mb-14">
              <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl">
                Why Choose Search2Sale Digital?
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {[
                {
                  icon: Target,
                  title: "Strategy Before Posting",
                  body: "We don't believe in posting content simply to fill a calendar. Every campaign is planned around a clear marketing objective.",
                },
                {
                  icon: Globe2,
                  title: "Platform-Specific Marketing",
                  body: "Instagram, Facebook, and LinkedIn have different audiences and content behaviours. We customize strategies for each platform.",
                },
                {
                  icon: Palette,
                  title: "Creative & Data-Driven",
                  body: "We combine creative content with performance data to continuously improve your social media presence.",
                },
                {
                  icon: BarChart3,
                  title: "Focus on Business Results",
                  body: "Likes and followers are useful indicators, but the bigger goal is to help your business increase awareness, enquiries, leads, and customers.",
                },
              
              ].map(({ icon: Icon, title, body }) => (
                <div
                  key={title}
                  className="social-card rounded-xl p-6 sm:p-5"
                  style={dataCard}
                >
                  <Icon
                    size={28}
                    color={colors.primary}
                    className="mb-5 hover-icon transition-colors duration-300"
                  />

                  <h3 className="font-semibold text-lg mb-3 hover-title transition-colors duration-300">
                    {title}
                  </h3>

                  <p
                    className="text-sm sm:text-base leading-relaxed"
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
        </section>

        {/* =========================================================
            INDUSTRIES
        ========================================================== */}
        <section className="py-10 md:py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10 sm:mb-12 max-w-3xl mx-auto">
              <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl mb-4">
                Social Media Marketing for Different Businesses
              </h2>

              <p
                className="text-base sm:text-lg"
                style={{
                  color: colors.onSurfaceVariant,
                }}
              >
                We create customized social media strategies for businesses
                across multiple industries.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              {[
                "Real Estate",
                "Healthcare",
                "Education",
                "E-commerce",
                "Finance",
                "Automotive",
                "Professional Services",
                "B2B Businesses",
                "Startups",
                "Local Businesses",
                "Service-Based Businesses",
              ].map((industry) => (
                <div
                  key={industry}
                  className="social-pill px-5 py-3 rounded-full border text-sm sm:text-base font-medium"
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
          className="py-10 md:py-16 px-4 sm:px-6 lg:px-8"
          style={{
            backgroundColor: colors.surfaceContainerLowest,
          }}
        >
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div>
                <span
                  className="text-sm font-semibold uppercase tracking-wider"
                  style={{
                    color: colors.hover,
                  }}
                >
                  Business Growth
                </span>

                <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl mt-3 mb-5">
                  Benefits of Social Media Marketing
                </h2>

                <p
                  className="text-base sm:text-lg leading-relaxed"
                  style={{
                    color: colors.onSurfaceVariant,
                  }}
                >
                  A professional social media strategy can help your business
                  build stronger customer relationships while supporting
                  awareness, engagement, traffic, and lead generation.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Increase brand awareness",
                  "Reach new customers",
                  "Build audience engagement",
                  "Generate qualified leads",
                  "Drive website traffic",
                  "Promote products and services",
                  "Build customer relationships",
                  "Strengthen brand credibility",
                  "Retarget potential customers",
                  "Support overall digital marketing campaigns",
                ].map((benefit) => (
                  <div
                    key={benefit}
                    className="social-card rounded-lg p-4 flex items-center gap-3"
                    style={dataCard}
                  >
                    <CheckCircle2
                      size={18}
                      color={colors.primary}
                      className="shrink-0 hover-icon transition-colors duration-300"
                    />

                    <span className="text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            SOCIAL + SEO + WEB DEVELOPMENT
        ========================================================== */}
        <section className="py-10 md:py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div
              className="rounded-2xl p-7 sm:p-10 md:p-14 text-center relative overflow-hidden"
              style={dataCard}
            >
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full blur-3xl pointer-events-none"
                style={{
                  backgroundColor: `${colors.hover}0D`,
                }}
              />

              <div className="relative z-10 max-w-4xl mx-auto">
                <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl mb-5">
                  Social Media + SEO + Web Development
                </h2>

                <p
                  className="text-base sm:text-lg leading-relaxed mb-5"
                  style={{
                    color: colors.onSurfaceVariant,
                  }}
                >
                  Social media works even better when it is connected with your
                  wider digital marketing strategy.
                </p>

                <p
                  className="text-sm sm:text-base leading-relaxed"
                  style={{
                    color: colors.onSurfaceVariant,
                  }}
                >
                  At Search2Sale Digital, we can combine social media marketing
                  with SEO, Google Ads, Meta Ads, website development, lead
                  generation, and analytics to create a complete digital
                  marketing strategy for your business.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 mt-8">
                  {[
                    "Social Media",
                    "SEO",
                    "Google Ads",
                    "Meta Ads",
                    "Web Development",
                    "Analytics",
                  ].map((item) => (
                    <div
                      key={item}
                      className="social-pill rounded-lg px-3 py-3 text-xs sm:text-sm font-semibold border"
                      style={{
                        borderColor: `${colors.outlineVariant}55`,
                        backgroundColor: colors.surfaceContainerHigh,
                        color: colors.onSurface,
                      }}
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <p
                  className="text-sm sm:text-base leading-relaxed mt-8"
                  style={{
                    color: colors.onSurfaceVariant,
                  }}
                >
                  Your social media should not work in isolation. It should
                  support your website, search visibility, advertising, and
                  lead-generation efforts.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            FAQ
        ========================================================== */}
        <section
          className="py-10 md:py-16 px-4 sm:px-6 lg:px-8"
          style={{
            backgroundColor: colors.surfaceContainerLowest,
          }}
        >
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl mb-4">
                Frequently Asked Questions
              </h2>

              <p
                className="text-base sm:text-lg"
                style={{
                  color: colors.onSurfaceVariant,
                }}
              >
                Answers to common questions about our social media marketing
                services.
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  question: "What is social media marketing?",
                  answer:
                    "Social media marketing is the use of platforms such as Facebook, Instagram, and LinkedIn to build brand awareness, engage audiences, promote products or services, generate leads, and drive business growth.",
                },
                {
                  question:
                    "How much do social media marketing services cost in Delhi?",
                  answer:
                    "The cost depends on the number of platforms, content requirements, posting frequency, creative requirements, advertising budget, and campaign objectives. Contact us for a customized social media marketing package.",
                },
                {
                  question: "Which social media platforms do you manage?",
                  answer:
                    "We can create strategies for platforms such as Facebook, Instagram, LinkedIn, and other relevant channels depending on your target audience and business requirements.",
                },
                {
                  question: "Do you provide social media advertising?",
                  answer:
                    "Yes. We provide paid social media advertising services, including Facebook and Instagram advertising, audience targeting, lead generation, retargeting, and campaign optimization.",
                },
                {
                  question: "How often should a business post on social media?",
                  answer:
                    "There is no single posting frequency that works for every business. We determine an appropriate content schedule based on your industry, audience, platform, and marketing objectives.",
                },
                {
                  question: "Can social media marketing generate leads?",
                  answer:
                    "Yes. With the right audience targeting, content strategy, landing pages, and advertising campaigns, social media can become an effective source of qualified leads.",
                },
                {
                  question: "Do you create social media posts and Reels?",
                  answer:
                    "Yes. Our social media services can include creative posts, carousels, Stories, Reels, captions, and other content formats depending on your package.",
                },
              ].map(({ question, answer }) => (
                <details
                  key={question}
                  className="faq-item rounded-xl overflow-hidden group"
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
        <section className="py-10 md:py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div
              className="rounded-2xl p-4  md:p-6 text-center relative overflow-hidden"
              style={{
                background: `linear-gradient(
                  135deg,
                  ${colors.surfaceContainerHigh},
                  ${colors.background}
                )`,
                border: `1px solid ${colors.outlineVariant}33`,
              }}
            >
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-96 sm:h-96 rounded-full blur-3xl"
                style={{
                  backgroundColor: `${colors.hover}0D`,
                }}
              />

              <div className="relative z-10 max-w-3xl mx-auto">
                <h2 className="font-extrabold text-2xl sm:text-4xl md:text-5xl mb-5 leading-tight">
                  Ready to Grow Your Business on Social Media?
                </h2>

                <p
                  className="text-base sm:text-lg leading-relaxed mb-4"
                  style={{
                    color: colors.onSurfaceVariant,
                  }}
                >
                  Your customers are already spending time on social media.
                  Make sure your business is reaching them with the right
                  message.
                </p>

                

                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
                  <a
                    href="tel:+918506938033"
                    className="cta-button w-full sm:w-auto font-semibold px-7 sm:px-9 py-4 rounded-lg"
                    style={{
                      backgroundColor: colors.secondaryContainer,
                      color: "#000",
                    }}
                  >
                    Call Us: +91 85069 38033
                  </a>

                  <a
                    href="mailto:info@search2saledigital.com"
                    className="outline-button w-full sm:w-auto font-semibold px-7 sm:px-9 py-4 rounded-lg border"
                    style={{
                      borderColor: `${colors.outlineVariant}66`,
                      color: colors.onSurface,
                    }}
                  >
                    Email Us
                  </a>
                </div>

                <p
                  className="text-sm sm:text-base"
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
                  – Social Media Marketing & Digital Growth Solutions in Delhi
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}