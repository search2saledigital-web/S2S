import React from "react";
import {
  Users,
  Target,
  Eye,
  Wallet,
  TrendingUp,
  Headset,
  Search,
  ClipboardList,
  Rocket,
  LineChart,
  Trophy,
} from "lucide-react";

const REASONS = [
  {
    icon: Users,
    title: "Experienced Professionals",
    description:
      "A team of seasoned digital marketing experts who know what actually moves the needle for your industry.",
  },
  {
    icon: Target,
    title: "Customized Strategies",
    description:
      "No cookie-cutter templates. Every plan is built around your goals, your audience, and your budget.",
  },
  {
    icon: Eye,
    title: "Transparent Reporting",
    description:
      "Clear, honest communication with regular reports so you always know exactly where your budget is going.",
  },
  {
    icon: Wallet,
    title: "Affordable Pricing",
    description:
      "Flexible packages designed to deliver strong ROI without stretching your marketing budget thin.",
  },
  {
    icon: TrendingUp,
    title: "Measurable Growth",
    description:
      "We optimize for real business outcomes — traffic, leads, and sales — not vanity metrics.",
  },
  {
    icon: Headset,
    title: "Dedicated Support",
    description:
      "A responsive support team that's there when you need answers, updates, or a strategy tweak.",
  },
];

const PROCESS_STEPS = [
  {
    icon: Search,
    title: "Understand Your Goals",
    description:
      "We start by learning your business, your market, and what success looks like for you.",
  },
  {
    icon: ClipboardList,
    title: "Develop a Strategy",
    description:
      "Our team builds a customized marketing plan mapped to your goals, audience, and budget.",
  },
  {
    icon: Rocket,
    title: "Execute with Precision",
    description:
      "Campaigns go live with careful attention to detail across every channel we manage.",
  },
  {
    icon: LineChart,
    title: "Monitor & Optimize",
    description:
      "We track performance continuously and refine what's working to improve results over time.",
  },
  {
    icon: Trophy,
    title: "Deliver Results",
    description:
      "You get measurable growth in traffic, leads, and sales — backed by clear reporting.",
  },
];

export default function WhyChooseAndProcess() {
  const processJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Search2SaleDigital's Digital Marketing Process",
    step: PROCESS_STEPS.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.title,
      text: step.description,
    })),
  };

  return (
    <div className="w-full bg-slate-950 text-slate-50">
      {/* Structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(processJsonLd) }}
      />

      {/* WHY CHOOSE US */}
      <section
        aria-labelledby="why-choose-heading"
        className="relative overflow-hidden px-6 py-6 md:py-14"
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-orange-400">
              Why Search2SaleDigital
            </p>
            <h2
              id="why-choose-heading"
              className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl"
            >
              Why Choose Search2SaleDigital?
            </h2>
            <p className="mt-4 text-slate-400">
              We combine strategy, transparency, and hands-on support to help
              your business grow with confidence.
            </p>
          </div>

          <ul className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {REASONS.map(({ icon: Icon, title, description }) => (
              <li
                key={title}
                className="group relative rounded-2xl border border-slate-800 bg-slate-900/60 p-6 transition hover:-translate-y-1 hover:border-slate-700 hover:bg-slate-900"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-orange-400 to-orange-500 shadow-lg shadow-orange-500/20">
                  <Icon className="h-5 w-5 text-slate-950" strokeWidth={2.25} />
                </span>
                <h3 className="mt-5 text-base font-semibold text-slate-50">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* OUR PROCESS */}
      <section
        aria-labelledby="process-heading"
        className="relative overflow-hidden border-t border-slate-900 px-6 py-6 md:py-14"
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute bottom-0 right-1/4 h-[360px] w-[360px] rounded-full bg-orange-500/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-orange-400">
              How We Work
            </p>
            <h2
              id="process-heading"
              className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl"
            >
              Our Process
            </h2>
            <p className="mt-4 text-slate-400">
              A clear, five-step path from first conversation to measurable
              growth.
            </p>
          </div>

          <ol className="relative mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
            {/* connecting line for large screens */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent lg:block"
            />

            {PROCESS_STEPS.map(({ icon: Icon, title, description }, index) => (
              <li key={title} className="relative flex flex-col items-start">
                <div className="relative z-10 flex h-12 w-12 flex-none items-center justify-center rounded-full border border-slate-700 bg-slate-950 shadow-lg shadow-black/40">
                  <Icon className="h-5 w-5 text-blue-400" strokeWidth={2.25} />
                </div>
                <span className="mt-3 text-xs font-bold uppercase tracking-widest text-orange-400">
                  Step {index + 1}
                </span>
                <h3 className="mt-1.5 text-base font-semibold text-slate-50">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {description}
                </p>
              </li>
            ))}
          </ol>

          <div className="mt-16 flex justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-br from-orange-400 to-orange-500 px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-lg shadow-orange-500/25 transition hover:-translate-y-0.5 hover:shadow-orange-500/40"
            >
              Start Your Growth Plan
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}