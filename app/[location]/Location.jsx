"use client";

import { useRef, useState } from "react";
import axios from "axios";
import Image from "next/image";
import toast from "react-hot-toast";
import { motion, useReducedMotion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  Check,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  Globe2,
  HeartPulse,
  Hotel,
  Mail,
  MapPin,
  Megaphone,
  LoaderCircle,
  Monitor,
  Phone,
  Rocket,
  Search,
  Share2,
  Send,
  Sparkles,
  Store,
  Target,
  TrendingUp,
  Utensils,
  Users,
  Wrench,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Search,
    number: "01",
    title: "Search engine optimization",
    description:
      "Build lasting organic visibility with keyword research, on-page improvements, technical SEO and content built around what your customers search for.",
    tag: "SEO",
  },
  {
    icon: MapPin,
    number: "02",
    title: "Local SEO",
    description:
      "Help nearby customers find and choose your business with a stronger local presence, location-focused pages and consistent business information.",
    tag: "Get discovered nearby",
  },
  {
    icon: Megaphone,
    number: "03",
    title: "Google Ads & PPC",
    description:
      "Reach people actively looking for your products or services with considered campaign setup, compelling ads and ongoing performance improvements.",
    tag: "Paid growth",
  },
  {
    icon: Share2,
    number: "04",
    title: "Social media marketing",
    description:
      "Show up consistently on the platforms that matter with useful content, thoughtful creative and campaigns connected to your business goals.",
    tag: "Build your brand",
  },
  {
    icon: Sparkles,
    number: "05",
    title: "Content marketing",
    description:
      "Turn your expertise into search-friendly website copy, landing pages, blogs and social content that builds trust and helps customers take action.",
    tag: "Content that connects",
  },
  {
    icon: Monitor,
    number: "06",
    title: "Website design & development",
    description:
      "Give visitors a clear, mobile-friendly experience with a professional website designed to support your marketing and make it easier to enquire.",
    tag: "Designed to convert",
  },
];

const steps = [
  {
    number: "01",
    title: "Understand your business",
    description:
      "We learn about your offer, customers, competition and what success looks like for you.",
  },
  {
    number: "02",
    title: "Build a focused plan",
    description:
      "We recommend the right mix of channels for your goals, audience and available budget.",
  },
  {
    number: "03",
    title: "Put the strategy to work",
    description:
      "Our team launches your campaigns and creates the content and experiences they need.",
  },
  {
    number: "04",
    title: "Measure and improve",
    description:
      "We track meaningful performance, share clear updates and refine what we do next.",
  },
];

const benefits = [
  "A strategy shaped around your business goals",
  "SEO and location-focused optimization",
  "Paid campaigns with conversion tracking",
  "Consistent content and brand communication",
  "Clear reporting and ongoing improvements",
];

const industries = [
  {
    title: "Real estate",
    description: "Generate buyer, seller and rental enquiries in your market.",
    icon: Hotel,
    label: "Property",
    color: "from-orange-500/20 to-amber-300/5",
  },
  {
    title: "E-commerce",
    description: "Bring more shoppers to your store and support repeat sales.",
    icon: Store,
    label: "Retail",
    color: "from-violet-500/20 to-fuchsia-300/5",
  },
  {
    title: "Education",
    description: "Connect with students and families exploring their options.",
    icon: GraduationCap,
    label: "Learning",
    color: "from-blue-500/20 to-cyan-300/5",
  },
  {
    title: "Healthcare",
    description:
      "Help patients discover the right care and book an appointment.",
    icon: HeartPulse,
    label: "Wellness",
    color: "from-emerald-500/20 to-teal-300/5",
  },
  {
    title: "Hospitality & restaurants",
    description: "Build awareness and turn local interest into reservations.",
    icon: Utensils,
    label: "Hospitality",
    color: "from-rose-500/20 to-pink-300/5",
  },
  {
    title: "Professional services",
    description:
      "Showcase your expertise and attract more qualified clients.",
    icon: BriefcaseBusiness,
    label: "Expertise",
    color: "from-sky-500/20 to-indigo-300/5",
  },
  {
    title: "Local businesses",
    description: "Get found by nearby customers when they need you most.",
    icon: MapPin,
    label: "Local",
    color: "from-lime-500/20 to-green-300/5",
  },
  {
    title: "Startups & B2B",
    description: "Create a clear growth path from first touch to new business.",
    icon: Rocket,
    label: "Growth",
    color: "from-amber-500/20 to-orange-300/5",
  },
  {
    title: "Service businesses",
    description: "Turn search demand into calls, bookings and enquiries.",
    icon: Wrench,
    label: "Services",
    color: "from-cyan-500/20 to-blue-300/5",
  },
];

function SectionHeading({ eyebrow, title, description, centered = false }) {
  return (
    <div className={`max-w-2xl ${centered ? "mx-auto text-center" : ""}`}>
      <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-orange-400">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base leading-7 text-slate-300 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}

function AnimatedSection({ children, className = "", delay = 0 }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

export default function Location({ city }) {
  const isDelhi = city.toLowerCase() === "delhi";
  const previousIndustryRef = useRef(null);
  const nextIndustryRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleContactSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const lead = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      product: formData.get("product"),
      place: city,
      message: formData.get("message"),
    };

    try {
      setIsSubmitting(true);
      const response = await axios.post("/api/form", lead);

      if (!response.data.success) {
        throw new Error(
          response.data.message || "Unable to submit your enquiry."
        );
      }

      toast.success("Thanks! Our team will get back to you soon.");
      form.reset();
    } catch (error) {
      console.error("Location contact form submission failed:", error);
      toast.error(
        error.response?.data?.message ||
        error.message ||
        "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="overflow-hidden bg-[#050816] text-white">
      <section className="relative isolate px-5 pb-10 pt-10 sm:px-8 sm:pb-16 sm:pt-12 lg:px-12 lg:pt-16">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_75%_18%,rgba(249,115,22,0.16),transparent_32%),radial-gradient(ellipse_at_18%_65%,rgba(59,130,246,0.12),transparent_42%)]" />
        <div className="pointer-events-none absolute -right-28 top-20 -z-10 size-80 rounded-full border border-white/[0.06] sm:right-8 sm:size-[30rem]" />
        <div className="pointer-events-none absolute -right-16 top-32 -z-10 size-56 rounded-full border border-orange-400/10 sm:right-20 sm:size-[24rem]" />

        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10">
          <div className="location-hero-stagger">
            <div className="location-hero-item location-hero-delay-1 mb-7 inline-flex items-center gap-2 rounded-full border border-orange-400/20 bg-orange-400/[0.08] px-4 py-2 text-sm text-orange-200">
              <MapPin size={15} className="text-orange-400" />
              Helping businesses grow in {city}
            </div>
            <h1 className="location-hero-item location-hero-delay-2 max-w-3xl text-4xl font-semibold leading-[1.08] tracking-[-0.04em] sm:text-5xl lg:text-7xl">
              Digital marketing that moves{" "}
              <span className="bg-gradient-to-r from-orange-300 via-orange-400 to-amber-200 bg-clip-text text-transparent">
                {city}
              </span>{" "}
              businesses forward.
            </h1>
            <p className="location-hero-item location-hero-delay-3 mt-7 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              Grow your visibility, attract better-fit customers and turn more
              of your online traffic into enquiries with a digital strategy
              built around your business.
            </p>
            <div className="location-hero-item location-hero-delay-4 mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-orange-500 px-7 text-sm font-semibold text-white shadow-lg shadow-orange-950/30 transition hover:-translate-y-0.5 hover:bg-orange-400"
              >
                Get a free strategy call
                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
              <a
                href="tel:+918506938033"
                className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/15 px-7 text-sm font-medium text-white transition hover:border-white/35 hover:bg-white/[0.04]"
              >
                Call +91 85069 38033
              </a>
            </div>
            <div className="location-hero-item location-hero-delay-5 mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-400">
              {["Clear goals", "Practical strategy", "Transparent reporting"].map(
                (item) => (
                  <span key={item} className="inline-flex items-center gap-2">
                    <Check size={15} className="text-orange-400" />
                    {item}
                  </span>
                )
              )}
            </div>
          </div>

          <div className="location-hero-card relative mx-auto w-full max-w-lg">
            <div className="absolute -inset-6 rounded-[2.5rem] bg-orange-500/[0.08] blur-3xl" />
            <div className="relative rounded-[2rem] border border-white/10 bg-[#0b1022]/90 p-5 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-7">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-slate-400">Your growth, in focus</p>
                  <p className="mt-1 text-xl font-semibold">
                    A smarter digital mix
                  </p>
                </div>
                <span className="grid size-11 place-items-center rounded-2xl border border-orange-300/20 bg-orange-400/10 text-orange-300">
                  <TrendingUp size={20} />
                </span>
              </div>

              <div className="mt-8 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-200">
                      Connected channels
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                      Built around your audience
                    </p>
                  </div>
                  <Globe2 size={18} className="text-orange-300" />
                </div>
                <div className="mt-5 space-y-4">
                  {[
                    { label: "Organic search", width: "w-[82%]", icon: Search },
                    { label: "Paid campaigns", width: "w-[68%]", icon: Target },
                    { label: "Social & content", width: "w-[74%]", icon: Share2 },
                  ].map(({ label, width, icon: Icon }, index) => (
                    <div key={label}>
                      <div className="mb-2 flex items-center justify-between text-xs">
                        <span className="inline-flex items-center gap-2 text-slate-300">
                          <Icon size={14} className="text-slate-400" />
                          {label}
                        </span>
                        <span className="text-slate-500">
                          0{index + 1}
                        </span>
                      </div>
                      <div className="h-1.5 overflow-hidden rounded-full bg-white/[0.07]">
                        <div
                          style={{ "--bar-delay": `${0.55 + index * 0.18}s` }}
                          className={`location-chart-bar h-full ${width} rounded-full bg-gradient-to-r from-orange-500 to-amber-300`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4">
                  <BarChart3 size={18} className="text-orange-300" />
                  <p className="mt-3 text-sm font-medium">Track what matters</p>
                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    Actionable performance insights
                  </p>
                </div>
                <div className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4">
                  <Users size={18} className="text-orange-300" />
                  <p className="mt-3 text-sm font-medium">Reach your people</p>
                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    Relevant audiences, better fit
                  </p>
                </div>
              </div>
              <div className="mt-5 flex items-center gap-3 rounded-2xl border border-orange-300/10 bg-orange-400/[0.06] p-4">
                <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-orange-400/10 text-orange-300">
                  <MapPin size={17} />
                </span>
                <p className="text-sm leading-6 text-slate-300">
                  Local insight, with a wider view of your growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/[0.07] bg-white/[0.02] px-5 py-7 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-3 sm:gap-8">
          {[
            { title: "More visibility", text: "Be present where customers look.", icon: Globe2 },
            { title: "Better-fit leads", text: "Connect with people ready to act.", icon: Target },
            { title: "Smarter decisions", text: "Use performance to guide the next step.", icon: BarChart3 },
          ].map(({ title, text, icon: Icon }) => (
            <div key={title} className="flex items-center gap-4">
              <span className="grid size-11 shrink-0 place-items-center rounded-2xl border border-white/10 bg-white/[0.04] text-orange-300">
                <Icon size={19} />
              </span>
              <div>
                <p className="font-medium text-white">{title}</p>
                <p className="mt-1 text-sm text-slate-400">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 py-12 border border-white/[0.06] sm:px-8 sm:py-16 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <AnimatedSection className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="What we do"
              title={`Digital marketing services in ${city}`}
              description={`A connected set of digital services to help ${city} businesses earn attention, build trust and create more opportunities to grow.`}
            />
            <Link
              href="/contact"
              className="group inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-orange-300 transition hover:text-orange-200"
            >
              Talk to our team
              <ChevronRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </AnimatedSection>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon: Icon, number, title, description, tag }, index) => (
              <AnimatedSection key={title} delay={index * 0.05}>
                <article className="group h-full rounded-3xl border border-white/[0.08] bg-white/[0.025] p-6 transition duration-300 hover:-translate-y-1 hover:border-orange-300/25 hover:bg-white/[0.04] sm:p-7">
                  <div className="flex items-start justify-between">
                    <span className="grid size-12 place-items-center rounded-2xl border border-orange-300/15 bg-orange-400/[0.08] text-orange-300 transition group-hover:bg-orange-400/15">
                      <Icon size={21} />
                    </span>
                    <span className="text-xs font-medium tracking-[0.15em] text-slate-600">
                      {number}
                    </span>
                  </div>
                  <p className="mt-7 text-xs font-semibold uppercase tracking-[0.12em] text-orange-300/80">
                    {tag}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-white">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {description}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition group-hover:text-orange-300">
                    Explore the service
                    <ArrowRight
                      size={15}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </span>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-5 py-12 border border-white/[0.06] sm:px-8 sm:py-16 lg:px-12">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(37,99,235,0.09),transparent_55%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <AnimatedSection className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              eyebrow="Built around your goals"
              title="A partner for the whole journey."
              description={`From your first campaign to your next stage of growth, get a joined-up marketing team that understands the opportunity in ${city}.`}
            />
            <div className="mt-8 flex items-center gap-3 text-sm text-slate-300">
              <span className="grid size-10 place-items-center rounded-full bg-orange-400/10 text-orange-300">
                <TrendingUp size={18} />
              </span>
              Practical work, measured against real business goals.
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="rounded-[2rem] border border-white/[0.08] bg-[#0a0f20] p-6 sm:p-9">
              <p className="text-sm font-semibold text-white">
                What you can expect
              </p>
              <div className="mt-6 space-y-4">
                {benefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-start gap-3 border-b border-white/[0.06] pb-4 last:border-0 last:pb-0"
                  >
                    <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-orange-400/10 text-orange-300">
                      <Check size={13} />
                    </span>
                    <p className="text-sm leading-6 text-slate-300">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-4 rounded-[2rem] border border-white/[0.08] bg-[#0a0f20] p-6 sm:p-9">
              <div className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-2xl bg-blue-400/10 text-blue-300">
                  <Target size={18} />
                </span>
                <h3 className="text-lg font-semibold">Made for your market</h3>
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-400">
                Every market has its own audience, competition and customer
                habits. We shape your message and channel mix around the people
                you want to reach in {city}, not a one-size-fits-all template.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="px-5 py-12 sm:px-8 border border-white/[0.06] sm:py-16 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <AnimatedSection>
            <SectionHeading
              eyebrow="How we work"
              title="A clear process. No guesswork."
              description="Thoughtful planning, focused execution and regular check-ins keep your marketing moving in the right direction."
            />
          </AnimatedSection>
          <div className="space-y-3">
            {steps.map((step, index) => (
              <AnimatedSection key={step.number} delay={index * 0.06}>
                <div className="group flex gap-5 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5 transition hover:border-orange-300/20 sm:gap-7 sm:p-6">
                  <span className="pt-1 text-sm font-semibold tracking-widest text-orange-300">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold">{step.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      {step.description}
                    </p>
                  </div>
                  <ArrowRight
                    size={17}
                    className="ml-auto mt-1 shrink-0 text-slate-600 transition group-hover:translate-x-1 group-hover:text-orange-300"
                  />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/[0.06] bg-white/[0.02] px-5 py-10 sm:px-8 sm:py-16 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <AnimatedSection className="mb-10 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              eyebrow="Who we help"
              title="Strategies for different kinds of business."
              description="The right approach starts with understanding your customers, your buying journey and the outcome your business needs."
            />
            <div className="flex shrink-0 gap-2">
              <button
                ref={previousIndustryRef}
                type="button"
                aria-label="Previous industry"
                className="grid size-11 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-slate-300 transition hover:border-orange-300/30 hover:bg-orange-400/10 hover:text-orange-200"
              >
                <ChevronLeft size={19} />
              </button>
              <button
                ref={nextIndustryRef}
                type="button"
                aria-label="Next industry"
                className="grid size-11 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-slate-300 transition hover:border-orange-300/30 hover:bg-orange-400/10 hover:text-orange-200"
              >
                <ChevronRight size={19} />
              </button>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <Swiper
              modules={[Autoplay, Navigation, Pagination]}
              loop
              grabCursor
              speed={650}
              autoplay={
                reduceMotion
                  ? false
                  : { delay: 3500, disableOnInteraction: false, pauseOnMouseEnter: true }
              }
              navigation
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = previousIndustryRef.current;
                swiper.params.navigation.nextEl = nextIndustryRef.current;
              }}
              pagination={{ clickable: true }}
              spaceBetween={16}
              slidesPerView={1.15}
              breakpoints={{
                560: { slidesPerView: 2, spaceBetween: 18 },
                860: { slidesPerView: 3, spaceBetween: 20 },
                1180: { slidesPerView: 4, spaceBetween: 22 },
              }}
              className="location-industry-swiper !pb-12"
            >
              {industries.map(
                ({ title, description, icon: Icon, label, color }, index) => (
                  <SwiperSlide key={title} className="!h-auto">
                    <motion.article
                      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.15 }}
                      transition={{
                        duration: 0.45,
                        delay: reduceMotion ? 0 : index * 0.04,
                      }}
                      className="group relative flex h-full min-h-[268px] flex-col overflow-hidden rounded-3xl border border-white/[0.08] bg-[#0b1021] p-6 transition duration-300 hover:-translate-y-1 hover:border-orange-300/25 hover:shadow-xl hover:shadow-black/20"
                    >
                      <div
                        className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${color} opacity-70`}
                      />
                      <div className="pointer-events-none absolute -right-7 -top-9 size-32 rounded-full border border-white/[0.05] transition-transform duration-500 group-hover:scale-125" />
                      <div className="relative flex items-start justify-between">
                        <span className="grid size-12 place-items-center rounded-2xl border border-white/10 bg-[#090e1d]/75 text-orange-200 shadow-lg shadow-black/10">
                          <Icon size={22} strokeWidth={1.8} />
                        </span>
                        <span className="rounded-full border border-white/10 bg-black/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-300">
                          {label}
                        </span>
                      </div>
                      <div className="relative mt-auto pt-10">
                        <h3 className="text-lg font-semibold text-white">
                          {title}
                        </h3>
                        <p className="mt-2 text-sm leading-6 text-slate-400">
                          {description}
                        </p>
                      </div>
                    </motion.article>
                  </SwiperSlide>
                )
              )}
            </Swiper>
          </AnimatedSection>
        </div>
      </section>

      {isDelhi && (
        <section className="px-5 py-20 sm:px-8 sm:py-24 lg:px-12 border-y border-white/[0.06]">
          <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-center">
            <AnimatedSection>
              <SectionHeading
                eyebrow="Local knowledge"
                title="Across Delhi, and close to your customers."
                description="Build a stronger local presence with campaigns shaped for the communities and customers you want to reach."
              />
            </AnimatedSection>
            <AnimatedSection className="rounded-[2rem] border border-white/[0.08] bg-white/[0.025] p-6 sm:p-8">
              <div className="mb-5 flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-2xl bg-orange-400/10 text-orange-300">
                  <MapPin size={18} />
                </span>
                <h3 className="font-semibold">Areas we serve</h3>
              </div>
              <p className="text-sm leading-7 text-slate-400">
                Rohini, Pitampura, Model Town, Shalimar Bagh, Civil Lines,
                Karol Bagh, Rajouri Garden, Punjabi Bagh, Janakpuri, Dwarka,
                Uttam Nagar, Paschim Vihar, Connaught Place, Laxmi Nagar, Preet
                Vihar, Mayur Vihar, Anand Vihar, Saket, Malviya Nagar, Hauz
                Khas, Green Park, Greater Kailash, Nehru Place, Lajpat Nagar,
                Vasant Kunj, Chhatarpur and Kalkaji.
              </p>
              <p className="mt-4 border-t border-white/[0.07] pt-4 text-sm text-slate-400">
                Serving businesses across North, South, East, West and Central
                Delhi.
              </p>
            </AnimatedSection>
          </div>
        </section>
      )}

      <section
        id="contact"
        className="relative px-5 pb-10 pt-12 sm:px-8 sm:pb-16 lg:px-12"
      >
        <div className="pointer-events-none absolute inset-x-0 bottom-0 top-20 bg-[radial-gradient(ellipse_at_50%_60%,rgba(249,115,22,0.08),transparent_58%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-5 lg:grid-cols-12">
          <AnimatedSection className="lg:col-span-5">
            <div className="relative flex min-h-[420px] h-full flex-col justify-between overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b1022] p-7 sm:p-9">
              <Image
                src="/images/about.jpg"
                alt={`Search 2 Sale Digital helping businesses grow in ${city}`}
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover opacity-35"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#080d1a]/30 via-[#080d1a]/65 to-[#080d1a]" />
              <div className="absolute -right-14 -top-14 size-48 rounded-full border border-orange-200/15" />
              <div className="absolute -right-8 -top-8 size-36 rounded-full border border-orange-200/10" />
              <div className="relative">
                <span className="inline-flex items-center gap-2 rounded-full border border-orange-200/20 bg-orange-300/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-orange-100">
                  <Sparkles size={14} />
                  Your next step starts here
                </span>
                <h2 className="mt-6 max-w-md text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                  Ready to grow your business in {city}?
                </h2>
                <p className="mt-4 max-w-md text-sm leading-7 text-slate-300">
                  Tell us what you&apos;re working towards. We&apos;ll help you
                  find the digital marketing opportunities that fit.
                </p>
              </div>
              <div className="relative mt-12 space-y-3">
                <a
                  href="tel:+918506938033"
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 p-4 transition hover:border-orange-200/30 hover:bg-black/30"
                >
                  <span className="grid size-10 place-items-center rounded-xl bg-orange-400/15 text-orange-200">
                    <Phone size={17} />
                  </span>
                  <span>
                    <span className="block text-xs text-slate-400">
                      Call our team
                    </span>
                    <span className="mt-1 block text-sm font-medium text-white">
                      +91 85069 38033
                    </span>
                  </span>
                  <ArrowRight size={16} className="ml-auto text-slate-500" />
                </a>
                <a
                  href="mailto:info@search2saledigital.com"
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 p-4 transition hover:border-orange-200/30 hover:bg-black/30"
                >
                  <span className="grid size-10 place-items-center rounded-xl bg-blue-400/15 text-blue-200">
                    <Mail size={17} />
                  </span>
                  <span>
                    <span className="block text-xs text-slate-400">
                      Email us
                    </span>
                    <span className="mt-1 block text-sm font-medium text-white">
                      info@search2saledigital.com
                    </span>
                  </span>
                  <ArrowRight size={16} className="ml-auto text-slate-500" />
                </a>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection className="lg:col-span-7" delay={0.08}>
            <div className="h-full rounded-[2rem] border border-white/[0.09] bg-[#0b1022]/95 p-6 shadow-2xl shadow-black/20 sm:p-9">
              <div className="mb-7 flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-300">
                    Free consultation
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold sm:text-3xl">
                    Tell us about your goals
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Share a few details and our team will reach out to you.
                  </p>
                </div>
                <span className="hidden size-12 shrink-0 place-items-center rounded-2xl border border-orange-200/15 bg-orange-300/10 text-orange-200 sm:grid">
                  <Target size={21} />
                </span>
              </div>

              <form onSubmit={handleContactSubmit} className="space-y-5">
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-sm font-medium text-slate-300">
                      Your name <span className="text-orange-300">*</span>
                    </span>
                    <input
                      name="name"
                      type="text"
                      autoComplete="name"
                      placeholder="e.g. Ananya Sharma"
                      required
                      maxLength={100}
                      className="w-full rounded-xl border border-white/10 bg-[#070c19] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-orange-300/60 focus:ring-4 focus:ring-orange-300/10"
                    />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-sm font-medium text-slate-300">
                      Phone number <span className="text-orange-300">*</span>
                    </span>
                    <input
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="+91 98765 43210"
                      required
                      minLength={10}
                      maxLength={15}
                      pattern="[0-9+() -]{10,15}"
                      title="Enter a valid phone number between 10 and 15 characters."
                      className="w-full rounded-xl border border-white/10 bg-[#070c19] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-orange-300/60 focus:ring-4 focus:ring-orange-300/10"
                    />
                  </label>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-sm font-medium text-slate-300">
                      Work email <span className="text-orange-300">*</span>
                    </span>
                    <input
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="you@company.com"
                      required
                      maxLength={254}
                      className="w-full rounded-xl border border-white/10 bg-[#070c19] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-orange-300/60 focus:ring-4 focus:ring-orange-300/10"
                    />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-sm font-medium text-slate-300">
                      What do you need help with?{" "}
                      <span className="text-orange-300">*</span>
                    </span>
                    <select
                      name="product"
                      required
                      defaultValue=""
                      className="w-full appearance-none rounded-xl border border-white/10 bg-[#070c19] px-4 py-3.5 text-sm text-white outline-none transition focus:border-orange-300/60 focus:ring-4 focus:ring-orange-300/10"
                    >
                      <option value="" disabled>
                        Choose a service
                      </option>
                      <option>SEO & local SEO</option>
                      <option>Google Ads & PPC</option>
                      <option>Social media marketing</option>
                      <option>Content marketing</option>
                      <option>Website design & development</option>
                      <option>Lead generation</option>
                      <option>Not sure yet</option>
                    </select>
                  </label>
                </div>

                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-slate-300">
                    Tell us about your goals{" "}
                    <span className="text-orange-300">*</span>
                  </span>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder={`What would you like to achieve in ${city}?`}
                    required
                    maxLength={2000}
                    className="w-full resize-y rounded-xl border border-white/10 bg-[#070c19] px-4 py-3.5 text-sm leading-6 text-white outline-none transition placeholder:text-slate-600 focus:border-orange-300/60 focus:ring-4 focus:ring-orange-300/10"
                  />
                </label>

                <div className="flex flex-col gap-4 border-t border-white/[0.07] pt-5 sm:flex-row sm:items-center sm:justify-between">
                  <p className="inline-flex items-center gap-2 text-xs leading-5 text-slate-500">
                    <CheckCircle2 size={15} className="shrink-0 text-emerald-300" />
                    Your details are only used to respond to your enquiry.
                  </p>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 px-6 text-sm font-semibold text-white shadow-lg shadow-orange-950/25 transition hover:-translate-y-0.5 hover:from-orange-400 hover:to-amber-400 disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>
                        <LoaderCircle size={17} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send my enquiry
                        <Send
                          size={16}
                          className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
