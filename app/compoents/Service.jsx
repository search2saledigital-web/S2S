"use client"
import React, { useRef } from "react";
import { Swiper, SlideItem, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import {
  Rocket,
  Share2,
  Search,
  Code2,
  LayoutTemplate,
  Megaphone,
  MapPinned,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const SERVICES = [
  {
    icon: Rocket,
    iconBg: "from-orange-400 to-orange-600",
    title: "Google Ads Management",
    desc: "Drive targeted traffic and get more conversions.",
  },
  {
    icon: Share2,
    iconBg: "from-blue-400 to-blue-600",
    title: "Meta Ads (Facebook & Instagram)",
    desc: "Reach the right audience and scale your business faster.",
  },
  {
    icon: Search,
    iconBg: "from-slate-500 to-slate-700",
    title: "SEO Services",
    desc: "Improve rankings and get found by the right customers.",
  },
  {
    icon: Code2,
    iconBg: "from-indigo-400 to-indigo-600",
    title: "Website Design & Development",
    desc: "Build fast, responsive & high-converting websites.",
  },
  {
    icon: LayoutTemplate,
    iconBg: "from-cyan-400 to-cyan-600",
    title: "Landing Page Design",
    desc: "High-converting landing pages that turn visitors into leads.",
  },
  {
    icon: Megaphone,
    iconBg: "from-orange-400 to-pink-500",
    title: "Social Media Marketing",
    desc: "Build brand awareness and engage your audience.",
  },
  {
    icon: MapPinned,
    iconBg: "from-emerald-400 to-emerald-600",
    title: "Google Business Profile Optimization",
    desc: "Improve your local visibility and get more customers.",
  },
];

export default function Service() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="relative w-full overflow-hidden bg-slate-950 py-6 text-slate-50 lg:py-14">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/4 h-[380px] w-[380px] rounded-full bg-blue-600/10 blur-3xl" />
        <div className="absolute -bottom-24 right-1/4 h-[320px] w-[320px] rounded-full bg-orange-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 lg:px-10">
        <h2 className="text-center text-2xl font-extrabold tracking-tight sm:text-3xl">
          Our{" "}
          <span className="bg-gradient-to-r from-orange-400 to-orange-300 bg-clip-text text-transparent">
            Services
          </span>
        </h2>

        <div className="relative mt-10">
          {/* prev / next arrows */}
          <button
            ref={prevRef}
            aria-label="Previous services"
            className="absolute left-0 top-1/2 z-10 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-orange-600 text-slate-950 shadow-lg shadow-orange-500/30 transition hover:scale-105 disabled:opacity-30"
          >
            <ChevronLeft className="h-5 w-5" strokeWidth={2.5} />
          </button>
          <button
            ref={nextRef}
            aria-label="Next services"
            className="absolute right-0 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-orange-600 text-slate-950 shadow-lg shadow-orange-500/30 transition hover:scale-105 disabled:opacity-30"
          >
            <ChevronRight className="h-5 w-5" strokeWidth={2.5} />
          </button>

          <Swiper
            modules={[Navigation]}
            loop={true}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            spaceBetween={16}
            slidesPerView={2}
            breakpoints={{
              480: { slidesPerView: 2, spaceBetween: 16 },
              640: { slidesPerView: 2.2, spaceBetween: 18 },
              1024: { slidesPerView: 4, spaceBetween: 20 },
              1280: { slidesPerView: 4.5, spaceBetween: 20 },
            }}
            className="!px-1 !py-2"
          >
            {SERVICES.map(({ icon: Icon, iconBg, title, desc }) => (
              <SwiperSlide key={title}>
                <div className="flex h-55 md:h-50 flex-col rounded-2xl border border-slate-800 bg-slate-900/70 p-4 transition hover:-translate-y-1 hover:border-slate-700 hover:shadow-xl hover:shadow-black/40">
                  <div
                    className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${iconBg} shadow-lg shadow-black/30`}
                  >
                    <Icon className="h-6 w-6 text-white" strokeWidth={2} />
                  </div>
                  <h3 className="text-sm font-bold leading-snug text-slate-50 sm:text-base">
                    {title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-400 sm:text-sm">
                    {desc}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}