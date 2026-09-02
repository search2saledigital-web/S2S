import React from "react";
import {
  Target,
  SlidersHorizontal,
  LineChart,
  MapPinned,
  Eye,
  Search,
  ClipboardList,
  Rocket,
  Trophy,
} from "lucide-react";

const REASONS = [
  {
    icon: Target,
    title: "Result-Oriented Strategies",
    description:
      "We focus on business outcomes, not just likes, clicks, or impressions.",
  },
  {
    icon: SlidersHorizontal,
    title: "Customized Digital Solutions",
    description:
      "Every business is different. We create marketing strategies based on your industry, audience, competition, and goals.",
  },
  {
    icon: LineChart,
    title: "Data-Driven Approach",
    description:
      "We use performance data and insights to continuously improve your campaigns.",
  },
  {
    icon: MapPinned,
    title: "Local & Business-Focused SEO",
    description:
      "We help businesses improve their online visibility and connect with customers searching for their services.",
  },
  {
    icon: Eye,
    title: "Transparent Process",
    description:
      "Clear communication, practical strategies, and regular performance updates keep you informed.",
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
    name: "Search2Sale Digital's Digital Marketing Process",
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
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(processJsonLd),
        }}
      />

      {/* WHY CHOOSE US */}
      <section
        aria-labelledby="why-choose-heading"
        className="relative overflow-hidden px-4 py-10 sm:px-6 md:py-14 lg:py-20"
      >
        {/* Background Glow */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl">
          {/* Heading */}
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-400 sm:text-sm">
              Why Choose Us
            </p>

            <h2
              id="why-choose-heading"
              className="mt-3 text-2xl font-extrabold tracking-tight sm:text-3xl md:text-4xl"
            >
              Why Choose Search2Sale Digital?
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-slate-400 sm:text-base">
              We combine strategy, data, transparency, and business-focused
              digital solutions to help you achieve sustainable growth.
            </p>
          </div>

          {/* Reasons */}
          <ul className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
            {REASONS.map(({ icon: Icon, title, description }) => (
              <li
                key={title}
                className="
                  group relative
                  rounded-2xl
                  border border-slate-800
                  bg-slate-900/60
                  p-5
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-slate-700
                  hover:bg-slate-900
                  hover:shadow-xl
                  hover:shadow-black/30
                "
              >
                {/* Icon */}
                <span
                  className="
                    flex h-11 w-11
                    items-center justify-center
                    rounded-xl
                    bg-gradient-to-br
                    from-orange-400 to-orange-500
                    shadow-lg shadow-orange-500/20
                    transition-transform duration-300
                    group-hover:scale-110
                  "
                >
                  <Icon
                    className="h-5 w-5 text-slate-950"
                    strokeWidth={2.25}
                  />
                </span>

                {/* Title */}
                <h3 className="mt-5 text-base font-semibold leading-snug text-slate-50">
                  {title}
                </h3>

                {/* Description */}
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
        className="relative overflow-hidden border-t border-slate-900 px-4 py-10 sm:px-6 md:py-14 lg:py-20"
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute bottom-0 right-1/4 h-[360px] w-[360px] rounded-full bg-orange-500/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-400 sm:text-sm">
              How We Work
            </p>

            <h2
              id="process-heading"
              className="mt-3 text-2xl font-extrabold tracking-tight sm:text-3xl md:text-4xl"
            >
              Our Process
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-slate-400 sm:text-base">
              A clear, five-step path from first conversation to measurable
              growth.
            </p>
          </div>

          <ol className="relative mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-5 lg:gap-6">
            {/* Connecting line */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute left-0 right-0 top-6
                hidden h-px
                bg-gradient-to-r
                from-transparent
                via-slate-700
                to-transparent
                lg:block
              "
            />

            {PROCESS_STEPS.map(
              ({ icon: Icon, title, description }, index) => (
                <li
                  key={title}
                  className="relative flex flex-col items-start"
                >
                  {/* Step Icon */}
                  <div className="relative z-10 flex h-12 w-12 flex-none items-center justify-center rounded-full border border-slate-700 bg-slate-950 shadow-lg shadow-black/40">
                    <Icon
                      className="h-5 w-5 text-blue-400"
                      strokeWidth={2.25}
                    />
                  </div>

                  {/* Step Number */}
                  <span className="mt-3 text-xs font-bold uppercase tracking-widest text-orange-400">
                    Step {index + 1}
                  </span>

                  {/* Title */}
                  <h3 className="mt-1.5 text-base font-semibold text-slate-50">
                    {title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    {description}
                  </p>
                </li>
              )
            )}
          </ol>

          {/* CTA */}
          <div className="mt-12 flex justify-center lg:mt-16">
            <a
              href="#contact"
              className="
                inline-flex items-center justify-center
                gap-2 rounded-lg
                bg-gradient-to-br
                from-orange-400 to-orange-500
                px-6 py-3.5
                text-sm font-semibold
                text-slate-950
                shadow-lg shadow-orange-500/25
                transition-all duration-300
                hover:-translate-y-0.5
                hover:shadow-orange-500/40
              "
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