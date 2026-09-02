"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import {
  Rocket,
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
    icon: Search,
    iconBg: "from-green-400 to-green-600",
    title: "SEO Services in Delhi",
    desc: "Improve your search engine rankings and reach customers who are actively looking for your products or services. Our SEO strategies focus on sustainable organic growth, relevant traffic, and quality leads.",
  },
  {
    icon: MapPinned,
    iconBg: "from-emerald-400 to-emerald-600",
    title: "Google Business Profile Optimization",
    desc: "Get discovered by local customers searching for businesses near them. We optimize your Google Business Profile to improve local visibility, customer engagement, and enquiries.",
  },
  {
    icon: Code2,
    iconBg: "from-indigo-400 to-indigo-600",
    title: "Website Development",
    desc: "Create a professional, fast, mobile-friendly, and SEO-ready website that represents your brand and converts visitors into customers.",
  },
  {
    icon: Rocket,
    iconBg: "from-orange-400 to-orange-600",
    title: "Google Ads & PPC",
    desc: "Reach your target audience at the right time with carefully planned paid advertising campaigns designed to generate enquiries, leads, and sales.",
  },
  {
    icon: Megaphone,
    iconBg: "from-pink-400 to-pink-600",
    title: "Social Media Marketing",
    desc: "Build your brand and connect with your audience through engaging social media strategies, creative content, and targeted campaigns.",
  },
  {
    icon: LayoutTemplate,
    iconBg: "from-cyan-400 to-cyan-600",
    title: "Content Marketing",
    desc: "Build trust and authority with valuable, engaging, and SEO-friendly content that attracts your target customers and supports long-term growth.",
  },
];

export default function Service() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="relative w-full overflow-hidden bg-slate-950 py-12 text-slate-50 sm:py-14 lg:py-20">
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 -top-32 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl sm:h-96 sm:w-96" />

        <div className="absolute -bottom-32 -right-32 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl sm:h-96 sm:w-96" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-orange-400 sm:text-sm">
            What We Do
          </p>

          <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl md:text-4xl">
            Our Digital Marketing{" "}
            <span className="bg-gradient-to-r from-orange-400 to-orange-300 bg-clip-text text-transparent">
              Services
            </span>
          </h2>

          <p className="mt-3 text-sm leading-relaxed text-slate-400 sm:text-base">
            Powerful digital marketing solutions designed to increase your
            visibility, attract the right audience, and grow your business.
          </p>
        </div>

        {/* Slider */}
        <div className="relative mt-8 sm:mt-10 lg:mt-12">
          {/* Previous Button */}
          <button
            ref={prevRef}
            type="button"
            aria-label="Previous service"
            className="
              absolute left-1 top-1/2 z-20
              flex h-9 w-9 -translate-y-1/2
              items-center justify-center
              rounded-full
              border border-orange-400/20
              bg-slate-900
              text-orange-400
              shadow-lg shadow-black/30
              transition-all duration-300
              hover:scale-110
              hover:bg-orange-500
              hover:text-white
              disabled:pointer-events-none
              disabled:opacity-30
              sm:-left-4
              sm:h-10 sm:w-10
              lg:-left-5
            "
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          {/* Next Button */}
          <button
            ref={nextRef}
            type="button"
            aria-label="Next service"
            className="
              absolute right-1 top-1/2 z-20
              flex h-9 w-9 -translate-y-1/2
              items-center justify-center
              rounded-full
              border border-orange-400/20
              bg-slate-900
              text-orange-400
              shadow-lg shadow-black/30
              transition-all duration-300
              hover:scale-110
              hover:bg-orange-500
              hover:text-white
              disabled:pointer-events-none
              disabled:opacity-30
              sm:-right-4
              sm:h-10 sm:w-10
              lg:-right-5
            "
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <Swiper
            modules={[Navigation]}
            loop={true}
            speed={600}
            grabCursor={true}
            watchSlidesProgress={true}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            spaceBetween={12}
            slidesPerView={1}
            breakpoints={{
              480: {
                slidesPerView: 1.2,
                spaceBetween: 14,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 16,
              },
              768: {
                slidesPerView: 2.3,
                spaceBetween: 18,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1280: {
                slidesPerView: 3.5,
                spaceBetween: 22,
              },
            }}
            className="!px-8 !py-3 sm:!px-10"
          >
            {SERVICES.map(({ icon: Icon, iconBg, title, desc }) => (
              <SwiperSlide key={title} className="!h-auto">
                <article
                  className="
                    group
                    flex h-full min-h-[270px]
                    flex-col
                    rounded-2xl
                    border border-slate-800
                    bg-slate-900/80
                    p-5
                    backdrop-blur-sm
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:border-slate-700
                    hover:bg-slate-900
                    hover:shadow-2xl
                    hover:shadow-black/40
                    sm:min-h-[280px]
                    sm:p-6
                  "
                >
                  {/* Icon */}
                  <div
                    className={`
                      mb-5
                      flex h-12 w-12 shrink-0
                      items-center justify-center
                      rounded-xl
                      bg-gradient-to-br ${iconBg}
                      shadow-lg shadow-black/30
                      transition-transform duration-300
                      group-hover:scale-110
                    `}
                  >
                    <Icon
                      className="h-6 w-6 text-white"
                      strokeWidth={2}
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col">
                    <h3
                      className="
                        text-base font-bold leading-snug
                        text-white
                        sm:text-lg
                      "
                    >
                      {title}
                    </h3>

                    <p
                      className="
                        mt-3
                        text-sm leading-6
                        text-slate-400
                      "
                    >
                      {desc}
                    </p>
                  </div>

                  {/* Bottom Accent */}
                  <div className="mt-5 h-px w-10 bg-gradient-to-r from-orange-400 to-transparent transition-all duration-300 group-hover:w-20" />
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}