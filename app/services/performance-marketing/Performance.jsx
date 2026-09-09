"use client"
import { ArrowRight, AtSign, BarChart3, CheckCircle2, ChevronDown, Eye, Globe, LineChart, Mail, MessageSquareText, MousePointerClick, Phone, RefreshCcw, Repeat, Rocket, Search, Share2, ShoppingCart, SlidersHorizontal, Target, Terminal } from "lucide-react";
import React, { useEffect } from "react";
import { BsInstagram } from "react-icons/bs";




const services = [
  {
    icon: MousePointerClick,
    title: "Google Ads & PPC",
    desc: "Reach people actively searching for what you sell — search, shopping, display, and Performance Max.",
    tags: ["Search Ads", "Shopping", "Remarketing", "Conversion Tracking"],
  },
  {
    icon: BsInstagram,
    title: "Meta Performance Marketing",
    desc: "Targeted Facebook & Instagram campaigns built around leads, sales, and website conversions.",
    tags: ["Lead Gen", "Retargeting", "Lookalikes", "Creative Testing"],
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    desc: "Organic + paid social working together across the full journey, from awareness to conversion.",
    tags: ["Brand Awareness", "Engagement", "Traffic", "Retargeting"],
  },
  {
    icon: Search,
    title: "SEO & Organic Growth",
    desc: "Long-term organic visibility that compounds alongside your paid campaigns.",
    tags: ["Technical SEO", "On-Page", "Local SEO", "Link Building"],
  },
  {
    icon: Target,
    title: "Lead Generation",
    desc: "Campaigns engineered to turn strangers into qualified enquiries, not just clicks.",
    tags: ["Landing Pages", "Lead Forms", "WhatsApp", "CRM Integration"],
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Marketing",
    desc: "Product discovery, purchases, and repeat customers, all tied back to revenue.",
    tags: ["Google Shopping", "Catalog Ads", "Product Feed", "Dynamic Remarketing"],
  },
  {
    icon: SlidersHorizontal,
    title: "Conversion Rate Optimization",
    desc: "More traffic is only half the job — we fix what's stopping visitors from converting.",
    tags: ["Landing Pages", "CTA Testing", "Funnel Analysis", "Mobile UX"],
  },
  {
    icon: Repeat,
    title: "Remarketing & Retargeting",
    desc: "Reconnect with visitors who didn't convert the first time around.",
    tags: ["Site Visitors", "Lost Leads", "Offers", "Repeat Conversions"],
  },
  {
    icon: BarChart3,
    title: "Analytics & Tracking",
    desc: "Accurate tracking of the actions that actually matter to your business.",
    tags: ["Calls", "Form Fills", "Purchases", "Lead Sources"],
  },
];

const funnel = [
  { icon: Eye, title: "Awareness", desc: "Reach potential customers through search, social, content, and video." },
  { icon: MessageSquareText, title: "Consideration", desc: "Useful content, strong offers, testimonials, and relevant landing pages." },
  { icon: CheckCircle2, title: "Conversion", desc: "Calls, enquiries, form submissions, purchases — the action that matters." },
  { icon: RefreshCcw, title: "Remarketing", desc: "Reconnect with visitors and prospects who didn't convert initially." },
  { icon: LineChart, title: "Optimization", desc: "Analyze performance data and continuously improve every campaign." },
];

const process = [
  { n: "01", title: "Business & Goal Analysis", desc: "We understand your business model, customers, competition, and growth objectives." },
  { n: "02", title: "Market Research", desc: "Target audience, competitors, keywords, and market opportunities." },
  { n: "03", title: "Marketing Strategy", desc: "The right channel mix for your objectives and customer journey." },
  { n: "04", title: "Tracking Setup", desc: "Conversion tracking and analytics so performance can be measured accurately." },
  { n: "05", title: "Campaign Launch", desc: "Targeting, messaging, creatives, and budgets go live across platforms." },
  { n: "06", title: "Data Analysis", desc: "We monitor traffic, leads, conversions, sales, and cost metrics." },
  { n: "07", title: "Continuous Optimization", desc: "Audiences, keywords, creatives, landing pages, and budgets — refined." },
  { n: "08", title: "Reporting", desc: "Clear performance insights and recommendations for what's next." },
];

const whyUs = [
  { title: "Results-Focused Strategy", desc: "Measurable business outcomes, not vanity metrics." },
  { title: "Data-Driven Decisions", desc: "Campaign and website data guide every optimization." },
  { title: "Multi-Channel Approach", desc: "SEO, Google Ads, Meta Ads, social, content, and web dev, working together." },
  { title: "Conversion-Focused Marketing", desc: "We own the full journey from click to conversion." },
  { title: "Transparent Reporting", desc: "Clear insight into activity, performance, and what's next." },
  { title: "Continuous Optimization", desc: "Ongoing testing and refinement, never set-and-forget." },
];

const industries = [
  "Real Estate", "E-commerce", "Healthcare", "Education", "Finance", "Automotive",
  "B2B Companies", "Local Businesses", "Startups", "Professional Services",
  "Home Services", "Technology Companies", "Service-Based Businesses",
];

const metrics = [
  "Leads", "Sales", "Conversion Rate", "Cost Per Lead", "Cost Per Acquisition",
  "Return on Ad Spend", "Customer Acquisition Cost", "Website Traffic",
  "Click-Through Rate", "Engagement", "Revenue", "Qualified Leads",
];

const ecosystem = [
  "Performance Marketing", "SEO", "Google Ads", "Meta Ads", "Social Media",
  "Content & Creative", "Web Development", "Landing Pages", "CRO", "Analytics & Tracking",
];

const faqs = [
  { q: "What is performance marketing?", a: "A results-driven digital marketing approach where campaigns are measured and optimized around specific business outcomes such as leads, sales, conversions, revenue, or customer acquisition." },
  { q: "What is the difference between performance marketing and digital marketing?", a: "Digital marketing is a broad term covering online marketing activities. Performance marketing is a results-focused approach that emphasizes measurable actions and business outcomes." },
  { q: "Is performance marketing the same as PPC?", a: "Not exactly. PPC is one component of performance marketing, which can also include social advertising, SEO, remarketing, conversion optimization, and analytics." },
  { q: "How much does performance marketing cost in Delhi?", a: "It depends on your goals, channels, advertising budget, competition, and campaign scope. We build a customized strategy based on your requirements." },
  { q: "Can performance marketing generate leads?", a: "Yes — using Google Ads, Meta Ads, landing pages, remarketing, and conversion tracking, campaigns can be designed specifically around lead generation." },
  { q: "Can performance marketing increase e-commerce sales?", a: "Yes, by combining Google Shopping, Performance Max, Meta Ads, remarketing, product campaigns, and CRO." },
  { q: "How quickly can I see results?", a: "Paid campaigns can start generating traffic and conversions soon after launch, but real optimization needs data and ongoing testing. Timelines vary by industry, budget, and offer." },
  { q: "Do you provide performance reports?", a: "Yes, regular reports covering leads, conversions, traffic, acquisition costs, sales, and overall campaign performance." },
];

function Chip({ children }) {
  return (
    <span className="px-4 py-2 rounded-full text-sm font-medium bg-[#171f33] border border-[#434655]/40 text-[#c3c6d7]">
      {children}
    </span>
  );
}

export default function Performance() {
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
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;600;700;800&family=Inter:wght@400;500&family=JetBrains+Mono:wght@600&display=swap');
        .font-headline { font-family: 'Hanken Grotesk', sans-serif; }
        .font-body { font-family: 'Inter', sans-serif; }
        .font-label { font-family: 'JetBrains Mono', monospace; }
        .glass-card {
          background: rgba(15, 23, 42, 0.6);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: border-color 0.3s ease;
        }
        .btn-glow-secondary:hover { box-shadow: 0 0 20px rgba(249, 115, 22, 0.3); }
        details > summary { list-style: none; }
        details > summary::-webkit-details-marker { display: none; }
        details[open] .chev { transform: rotate(180deg); }
      `}</style>

     
      <main className="pt-5">
        {/* Hero */}
        <section className="relative  flex items-center justify-center overflow-hidden py-6 md:py-12">
          <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
            <span className="font-label text-xs text-[#b4c5ff] tracking-widest uppercase mb-6 block">
              Performance Marketing · Delhi
            </span>
            <h1 className=" text-[36px] md:text-[60px] leading-[1.2] md:leading-[1.1] tracking-tight font-extrabold mb-8 text-glow-primary">
             <span className="text-[#ec6a06]"> Performance Marketing </span> Services in Delhi

             
            </h1>
            <p className="font-body text-lg leading-relaxed text-[#c3c6d7] mb-10 max-w-2xl mx-auto">
              We build performance-driven strategies around outcomes that matter — qualified leads, sales,
              conversions, revenue, and return on marketing investment. Not just clicks and impressions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#ec6a06] text-white px-8 py-4 rounded-full font-bold btn-glow-secondary transition-all hover:scale-105">
                Get Free Consultation
              </button>
              <button className="border border-[#8d90a0] text-[#dae2fd] px-8 py-4 rounded-full font-bold hover:bg-[#2d3449]/30 transition-all">
                View Our Process
              </button>
            </div>
          </div>
        </section>

        {/* What Is Performance Marketing */}
        <section className="py-6 md:py-12 bg-[#131b2e]">
          <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="font-label text-xs text-[#ffb690] tracking-widest uppercase mb-4 block">
                The Approach
              </span>
              <h2 className="font-headline text-3xl font-bold mb-6">What Is <span className="text-[#ec6a06]">Performance Marketing</span>?</h2>
              <p className="text-[#c3c6d7] font-body mb-4">
                A results-focused approach where campaigns are planned, measured, and optimized against specific
                business objectives — not vague awareness goals.
              </p>
              <p className="text-[#c3c6d7] font-body">
                We use performance data to understand what's working, spot opportunities, and continuously improve
                every campaign we run.
              </p>
            </div>
            <div className="glass-card p-8 rounded-xl">
              <h3 className="font-headline text-lg font-semibold mb-5 text-[#b4c5ff]">Objectives We Optimize For</h3>
              <div className="flex flex-wrap gap-3">
                {["Lead Generation", "Online Sales", "Website Conversions", "App Downloads", "Phone Calls", "WhatsApp Enquiries", "Product Purchases", "Qualified Traffic", "Customer Acquisition", "Revenue Growth"].map((o) => (
                  <Chip key={o}>{o}</Chip>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-6 md:py-12 bg-[#0b1326]">
          <div className="max-w-[1280px] mx-auto px-6 text-center mb-16">
            <span className="font-label text-xs text-[#b4c5ff] tracking-widest uppercase mb-4 block">
              What We Offer
            </span>
            <h2 className="font-headline text-3xl font-bold mb-4">Our <span className="text-[#ec6a06]">Performance Marketing</span> Services</h2>
            <p className="text-[#c3c6d7] max-w-xl mx-auto">
              A complete customer acquisition toolkit — combined into one connected strategy.
            </p>
          </div>
          <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ icon: Icon, title, desc, tags }) => (
              <div key={title} className="glass-card p-8 rounded-xl group hover:border-[#b4c5ff]/50 transition-all flex flex-col">
                <div className="w-14 h-14 bg-[#b4c5ff]/10 rounded-lg flex items-center justify-center mb-6 text-[#b4c5ff] group-hover:scale-110 transition-transform">
                  <Icon size={26} strokeWidth={2} />
                </div>
                <h3 className="font-headline text-xl font-semibold mb-3">{title}</h3>
                <p className="text-[#c3c6d7] mb-5 flex-1">{desc}</p>
                <div className="flex flex-wrap gap-2">
                  {tags.map((t) => (
                    <span key={t} className="text-xs font-label px-2.5 py-1 rounded-full bg-[#171f33] text-[#89ceff] border border-[#434655]/40">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Funnel */}
        <section className="py-6 md:py-12 bg-[#060e20]">
          <div className="max-w-[1280px] mx-auto px-6 text-center mb-16">
            <span className="font-label text-xs text-[#ffb690] tracking-widest uppercase mb-4 block">
              The Journey
            </span>
            <h2 className="font-headline text-3xl font-bold mb-4"><span className="text-[#ec6a06]">Performance Marketing</span> Funnel</h2>
            <p className="text-[#c3c6d7] max-w-xl mx-auto">Built around the complete customer journey, end to end.</p>
          </div>
          <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {funnel.map(({ icon: Icon, title, desc }, i) => (
              <div key={title} className="relative">
                <div className="glass-card p-6 rounded-xl h-full">
                  <div className="w-10 h-10 bg-[#ec6a06]/15 rounded-lg flex items-center justify-center mb-4 text-[#ffb690]">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-headline text-base font-semibold mb-2">{title}</h3>
                  <p className="text-[#c3c6d7] text-sm">{desc}</p>
                </div>
                {i < funnel.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-4 -translate-y-1/2 z-10 text-[#8d90a0]">
                    <ArrowRight size={18} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Process */}
        <section className="py-6 md:py-12 bg-[#131b2e]">
          <div className="max-w-[1280px] mx-auto px-6 text-center mb-16">
            <span className="font-label text-xs text-[#b4c5ff] tracking-widest uppercase mb-4 block">
              How We Work
            </span>
            <h2 className="font-headline text-3xl font-bold mb-4">Our <span className="text-[#ec6a06]"> Performance Marketing</span> Process</h2>
            <p className="text-[#c3c6d7] max-w-xl mx-auto">Eight steps, from first analysis to ongoing reporting.</p>
          </div>
          <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((p) => (
              <div key={p.n} className="glass-card p-6 rounded-xl">
                <div className="font-headline text-3xl font-extrabold text-[#ec6a06] mb-3">{p.n}</div>
                <h3 className="font-headline text-lg font-semibold mb-2">{p.title}</h3>
                <p className="text-[#c3c6d7] text-sm">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-6 md:py-12 bg-[#0b1326]">
          <div className="max-w-[1280px] mx-auto px-6 text-center mb-16">
            <span className="font-label text-xs text-[#ffb690] tracking-widest uppercase mb-4 block">
              Why Us
            </span>
            <h2 className="font-headline text-3xl font-bold mb-4">Why Choose <span className="text-[#ec6a06]"> Search2Sale Digital?</span></h2>
          </div>
          <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map((w) => (
              <div key={w.title} className="glass-card p-8 rounded-xl">
                <CheckCircle2 className="text-[#b4c5ff] mb-4" size={26} />
                <h3 className="font-headline text-lg font-semibold mb-2">{w.title}</h3>
                <p className="text-[#c3c6d7] text-sm">{w.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Industries + Metrics */}
        <section className="py-6 md:py-12 bg-[#060e20]">
          <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="glass-card p-8 md:p-10 rounded-xl">
              <h3 className="font-headline text-2xl font-bold mb-2">Industries <span className="text-[#ec6a06]">We Work With</span></h3>
              <p className="text-[#c3c6d7] text-sm mb-6">Customized strategies across sectors.</p>
              <div className="flex flex-wrap gap-3">
                {industries.map((i) => <Chip key={i}>{i}</Chip>)}
              </div>
            </div>
            <div className="glass-card p-8 md:p-10 rounded-xl">
              <h3 className="font-headline text-2xl font-bold mb-2">Metrics<span className="text-[#ec6a06]"> We Track</span></h3>
              <p className="text-[#c3c6d7] text-sm mb-6">The right numbers, matched to your objectives.</p>
              <div className="flex flex-wrap gap-3">
                {metrics.map((m) => <Chip key={m}>{m}</Chip>)}
              </div>
            </div>
          </div>
        </section>

        {/* PM vs Traditional */}
        <section className="py-6 md:py-12 bg-[#131b2e]">
          <div className="max-w-[900px] mx-auto px-6 text-center">
            <span className="font-label text-xs text-[#b4c5ff] tracking-widest uppercase mb-4 block">
              The Difference
            </span>
            <h2 className="font-headline text-3xl font-bold mb-10"><span className="text-[#ec6a06]">Performance Marketing </span>Pvs Traditional Marketing</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div className="glass-card p-8 rounded-xl">
                <p className="font-label text-xs text-[#8d90a0] mb-3">TRADITIONAL ASKS</p>
                <p className="font-headline text-xl">"How many people saw our advertisement?"</p>
              </div>
              <div className="glass-card p-8 rounded-xl border-[#ffb690]/30">
                <p className="font-label text-xs text-[#ffb690] mb-3">WE ALSO ASK</p>
                <p className="font-headline text-xl">"How many took action, at what cost, for what value?"</p>
              </div>
            </div>
          </div>
        </section>

        {/* Ecosystem */}
        <section className="py-6 md:py-12 bg-[#0b1326]">
          <div className="max-w-[1280px] mx-auto px-6 text-center mb-12">
            <span className="font-label text-xs text-[#ffb690] tracking-widest uppercase mb-4 block">
              Connected Growth
            </span>
            <h2 className="font-headline text-[#ec6a06] text-3xl font-bold mb-4">Performance Marketing + SEO + Web Development</h2>
            <p className="text-[#c3c6d7] max-w-2xl mx-auto">
              Your ads are only as strong as the experience after the click. We connect every channel into one
              growth ecosystem.
            </p>
          </div>
          <div className="max-w-[900px] mx-auto px-6 flex flex-wrap justify-center gap-3">
            {ecosystem.map((e) => <Chip key={e}>{e}</Chip>)}
          </div>
        </section>

        {/* FAQ */}
        <section className="py-6 md:py-12 bg-[#060e20]">
          <div className="max-w-[900px] mx-auto px-6">
            <div className="text-center mb-16">
              <span className="font-label text-xs text-[#b4c5ff] tracking-widest uppercase mb-4 block">FAQ</span>
              <h2 className="font-headline text-3xl font-bold">Frequently Asked <span className="text-[#ec6a06]">Questions</span></h2>
            </div>
            <div className="space-y-4">
              {faqs.map((f) => (
                <details key={f.q} className="glass-card rounded-xl px-6 py-5 group">
                  <summary className="flex items-center justify-between cursor-pointer font-headline font-semibold text-lg">
                    {f.q}
                    <ChevronDown className="chev text-[#b4c5ff] transition-transform" size={20} />
                  </summary>
                  <p className="text-[#c3c6d7] mt-4 font-body">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-6 md:py-12 bg-[#0b1326] relative overflow-hidden">
          <div className="max-w-[1280px] mx-auto px-6 relative z-10">
            <div className="glass-card p-5 rounded-3xl text-center border-[#b4c5ff]/20">
              <h2 className="font-headline text-[36px] md:text-[56px] leading-[1.2] md:leading-[1.1] font-extrabold mb-8">
                Ready to Grow with <span className="text-[#ec6a06]"> Performance Marketing?</span>
              </h2>
              <p className="font-body text-lg text-[#c3c6d7] mb-10 max-w-2xl mx-auto">
                Don't just spend more on marketing — make it measurable, targeted, and effective.
              </p>
              <button className="bg-[#ec6a06] text-white px-10 py-5 rounded-full font-bold text-xl transition-all hover:scale-105 active:scale-95 btn-glow-secondary mb-10">
                Get Your Free Consultation
              </button>
              <div className="flex flex-col sm:flex-row gap-6 justify-center text-[#c3c6d7]">
                <a href="tel:+919625986460" className="flex items-center justify-center gap-2 hover:text-[#b4c5ff] transition-colors">
                  <Phone size={18} /> +91 96259 86460
                </a>
                <a href="mailto:info@search2saledigital.com" className="flex items-center justify-center gap-2 hover:text-[#b4c5ff] transition-colors">
                  <Mail size={18} /> info@search2saledigital.com
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

    </div>
  );
}