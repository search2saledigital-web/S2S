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
      title: "Local SEO Services",
      description:
        "Get found by customers searching for your products or services in your target location.Our Local SEO services help improve your visibility on Google Search and Google Maps through Google Business Profile optimization, local keyword targeting, citation building, location-based content, and reputation management.",
    },
    {
      icon: ShoppingCart,
      title: "E-commerce SEO Services",
      description:
        "Want more customers to discover your online store? Our E-commerce SEO services help improve the visibility of product, category, and collection pages while targeting high-intent search queries.",
    },
    {
      icon: FileText,
      title: "On-Page SEO Services",
      description:
        "Make every important page on your website more search-engine friendly with our comprehensive on-page SEO process. We also optimize heading structures, URLs, internal linking, images and ALT tags, and website content to ensure every page is clear, relevant, and properly optimized for search engines. In addition, we implement schema markup and optimize content according to search intent, helping your website provide users with the information they are looking for while improving its chances of ranking higher in search results.",
    },
    {
      icon: LinkIcon,
      title: "Off-Page SEO Services",
      description:
        "Build your website's authority and strengthen its online reputation with a strategic off-page SEO campaign.Our off-page SEO activities focus on building relevant and quality backlinks through ethical strategies, content promotion, business listings, digital PR opportunities, and industry-relevant outreach.",
    },
  ];

  const auditPoints = [
    " Increase organic search visibility",
    "Generate targeted website traffic",
    "Improve keyword rankings",
    "Generate more qualified leads",
    "Increase brand awareness",
    "Reach local customers",
    "Improve website usability",
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

          <h1 className="font-extrabold text-[32px] leading-[1.2] sm:text-5xl md:text-[60px] md:leading-[1.1] tracking-tight mb-6 max-w-4xl">
            SEO Services in Delhi
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b4c5ff] to-[#ffb690]">
              That Drive Rankings, Traffic & Leads
            </span>
          </h1>

          <p className="text-base sm:text-lg text-[#c3c6d7] max-w-2xl mb-8 sm:mb-10 px-2 sm:px-0">
            Looking for professional SEO services in Delhi to increase your
            website visibility, attract qualified traffic, and generate more
            leads?
          </p>
          <p className="text-base sm:text-lg text-[#c3c6d7] max-w-2xl mb-8 sm:mb-10 px-2 sm:px-0">
            At Search2Sale Digital, we provide result-oriented SEO solutions
            designed to help businesses improve their search engine rankings and
            build sustainable online growth. Our SEO strategies combine keyword
            research, technical optimization, quality content, on-page SEO,
            off-page SEO, local SEO, and continuous performance tracking.
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
        <section className="px-4 sm:px-6 max-w-[1280px] mx-auto py-6 md:pb-14">
          {" "}
          <div className="text-center mb-10 md:mb-12">
            {" "}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              {" "}
              SEO for Different Industries{" "}
            </h2>{" "}
            <p className="text-base sm:text-lg text-[#c3c6d7] max-w-3xl mx-auto">
              {" "}
              Our SEO strategies are customized to meet the unique needs,
              audiences, and goals of businesses across multiple
              industries.{" "}
            </p>{" "}
          </div>{" "}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-5 sm:gap-6">
            {" "}
            {[
              "Real Estate SEO",
              "Healthcare SEO",
              "Education SEO",
              "E-commerce SEO",
              "Finance SEO",
              "Automotive SEO",
              "Local Business SEO",
              "Professional Services SEO",
              "B2B SEO",
              "Startup SEO",
            ].map((industry, index) => (
              <div
                key={industry}
                className="group bg-[#171f33] border border-[#434655]/20 rounded-lg p-3 flex items-center gap-4 hover:border-[#ec6a06]/50 hover:bg-[#1b243b] transition-all duration-300"
              >
                {" "}
                <div className="w-10 h-10 shrink-0 rounded-full bg-[#ec6a06] text-black flex items-center justify-center font-bold text-sm shadow-[0_0_10px_rgba(249,115,22,0.35)] group-hover:scale-105 transition-transform duration-300">
                  {" "}
                  {String(index + 1).padStart(2, "0")}{" "}
                </div>{" "}
                <h3 className="text-base sm:text-lg font-semibold group-hover:text-[#ec6a06] transition-colors duration-300">
                  {" "}
                  {industry}{" "}
                </h3>{" "}
              </div>
            ))}{" "}
          </div>{" "}
        </section>
        ;
        <section className="px-4 sm:px-6 max-w-[1280px] mx-auto py-6 md:pb-14">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Our SEO Process
            </h2>
            <p className="text-base sm:text-lg text-[#c3c6d7] max-w-2xl mx-auto">
              A structured and data-driven approach designed to improve your
              search visibility, attract quality traffic, and support long-term
              organic growth.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                number: "01",
                title: "Website & SEO Audit",
                description:
                  "We analyze your website to identify technical, content, on-page, and off-page SEO opportunities.",
              },
              {
                number: "02",
                title: "Keyword Research",
                description:
                  "We identify relevant keywords based on search intent, competition, relevance, and business value.",
              },
              {
                number: "03",
                title: "Competitor Analysis",
                description:
                  "We study your competitors to understand their rankings, content strategies, backlinks, and opportunities that can be targeted.",
              },
              {
                number: "04",
                title: "SEO Strategy",
                description:
                  "We create a customized SEO roadmap covering technical improvements, content, on-page optimization, link building, and local SEO where required.",
              },
              {
                number: "05",
                title: "Implementation",
                description:
                  "Our team implements recommended SEO improvements and optimizes important website pages.",
              },
              {
                number: "06",
                title: "Content Optimization",
                description:
                  "We create and optimize useful, search-focused content designed to answer your audience's questions and target valuable search queries.",
              },
              {
                number: "07",
                title: "Authority Building",
                description:
                  "We work on relevant off-page strategies to improve your website's authority and online presence.",
              },
              {
                number: "08",
                title: "Monitoring & Reporting",
                description:
                  "We monitor rankings, organic traffic, conversions, and other important SEO metrics to measure progress and identify new opportunities.",
              },
            ].map(({ number, title, description }) => (
              <div
                key={number}
                className="bg-[#171f33] p-4 sm:p-5 rounded-lg border border-[#434655]/20 relative hover:border-[#ec6a06]/40 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-[#ec6a06] text-black flex items-center justify-center font-bold mb-5 shadow-[0_0_10px_rgba(249,115,22,0.5)]">
                  {number}
                </div>

                <h3 className="text-lg sm:text-xl font-semibold mb-3">
                  {title}
                </h3>

                <p className="text-xs sm:text-sm text-[#c3c6d7] leading-relaxed">
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
                What Can SEO Do for Your Business?
              </h2>
              <p className="text-base sm:text-lg text-[#c3c6d7] mb-6 sm:mb-8">
                SEO is not about simply ranking for a few keywords. It's about
                creating a stronger digital presence that continuously brings
                relevant users to your business.
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
        <section className="px-4 sm:px-6 max-w-[1280px] mx-auto py-6 md:pb-14">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Why Choose Search2Sale Digital for SEO?
            </h2>
            <p className="text-base sm:text-lg text-[#c3c6d7] max-w-2xl mx-auto">
              Practical, transparent, and data-driven SEO strategies built
              around your business goals.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                number: "01",
                title: "Customized SEO Strategies",
                description:
                  "Every business is different. We create SEO strategies according to your industry, competition, target audience, website condition, and business objectives.",
              },
              {
                number: "02",
                title: "Data-Driven Approach",
                description:
                  "We use website data, keyword research, competitor analysis, and performance insights to make informed SEO decisions.",
              },
              {
                number: "03",
                title: "Focus on Quality Traffic",
                description:
                  "Ranking is important, but traffic alone isn't the goal. We focus on attracting users who are genuinely interested in your products or services.",
              },
              {
                number: "04",
                title: "Transparent SEO Process",
                description:
                  "You should know what is being worked on and why. We maintain a transparent approach to SEO activities and performance.",
              },
              {
                number: "05",
                title: "Continuous Optimization",
                description:
                  "SEO is an ongoing process. We continuously monitor performance, identify opportunities, and refine strategies to improve organic growth.",
              },
              {
                number: "?",
                title: "Still Confused ?",
                description:
                  "Still confused with Search2Sale Digital for SEO?.",
              },
            ].map(({ number, title, description }) => (
              <div
                key={number}
                className="bg-[#171f33] p-6 rounded-lg border border-[#434655]/20 relative hover:border-[#ec6a06]/40 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-[#ec6a06] text-black flex items-center justify-center font-bold absolute -top-5 left-6 shadow-[0_0_10px_rgba(249,115,22,0.5)]">
                  {number}
                </div>

                <h3 className="text-lg sm:text-xl font-semibold mt-6 mb-3">
                  {title}
                </h3>

                <p className="text-xs sm:text-sm text-[#c3c6d7] leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </section>
        {/* Final CTA Section */}
        <section className="px-4 sm:px-6 max-w-[1280px] mx-auto py-6 md:pb-14">
          <div className="bg-gradient-to-br from-[#222a3d] to-[#0b1326] border border-[#b4c5ff]/20 rounded-2xl p-8 sm:p-12 md:p-15 text-center relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-96 sm:h-96 bg-[#b4c5ff]/5 rounded-full blur-3xl -z-10" />

            <h2 className="font-extrabold text-[28px] leading-[1.2] sm:text-4xl md:text-[64px] md:leading-[1.1] tracking-tight mb-6">
              Get a Free SEO Audit
            </h2>

            <p className="text-base sm:text-lg text-[#c3c6d7] max-w-2xl mx-auto mb-4 sm:mb-6">
              Not sure why your website isn't ranking?
            </p>

            <p className="text-base sm:text-lg text-[#c3c6d7] max-w-2xl mx-auto mb-6 sm:mb-8">
              Let our SEO team identify the opportunities and issues affecting
              your website's search performance.Get your Free SEO Audit today
              and take the first step toward stronger organic visibility.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-6 mb-8">
              <a
                href="tel:+918506938033"
                className="text-base sm:text-lg font-semibold text-white hover:text-[#ec6a06] transition-colors"
              >
                Call Us: +91 85069 38033
              </a>

              <a
                href="mailto:info@search2saledigital.com"
                className="text-base sm:text-lg font-semibold text-white hover:text-[#ec6a06] transition-colors"
              >
                Email: info@search2saledigital.com
              </a>
            </div>

            <p className="text-sm sm:text-base text-[#c3c6d7]">
              <span className="font-semibold text-white">
                Search2Sale Digital
              </span>{" "}
              – Your Growth Partner for SEO & Digital Marketing.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
