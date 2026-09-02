import React from "react";
import { Check } from "lucide-react";
import Image from "next/image";

const FEATURES = [
  "Google Ads",
  "Website Development",
  "Meta Ads",
  "Lead Generation",
  "SEO Services",
  "& Much More",
];

function GoogleIcon({ className }) {
  return (
    <svg viewBox="0 0 48 48" className={className}>
      <path
        fill="#FFC107"
        d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.5 6.1 29.5 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.7-.4-3.5z"
      />
      <path
        fill="#FF3D00"
        d="M6.3 14.7l6.6 4.8C14.6 15.9 18.9 13 24 13c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.5 6.1 29.5 4 24 4c-7.6 0-14.1 4.3-17.7 10.7z"
      />
      <path
        fill="#4CAF50"
        d="M24 44c5.3 0 10.2-2 13.8-5.3l-6.4-5.4C29.3 34.9 26.8 36 24 36c-5.3 0-9.7-3.3-11.3-8l-6.6 5.1C9.8 39.6 16.4 44 24 44z"
      />
      <path
        fill="#1976D2"
        d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.1-4 5.5l6.4 5.4C39.5 37 44 31 44 24c0-1.3-.1-2.7-.4-3.5z"
      />
    </svg>
  );
}

function FacebookIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="white" className={className}>
      <path d="M13.5 21v-7.5h2.5l.5-3h-3V8.5c0-.9.3-1.5 1.6-1.5H16V4.3C15.7 4.2 14.8 4 13.7 4c-2.3 0-3.7 1.4-3.7 4v2.5H7.5v3H10V21h3.5z" />
    </svg>
  );
}

function InstagramIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="white" className={className}>
      <path d="M12 2c2.7 0 3.1 0 4.1.1 1.1.1 1.8.2 2.5.5.7.3 1.2.6 1.8 1.2.6.6.9 1.1 1.2 1.8.3.7.4 1.4.5 2.5.1 1 .1 1.4.1 4.1s0 3.1-.1 4.1c-.1 1.1-.2 1.8-.5 2.5-.3.7-.6 1.2-1.2 1.8-.6.6-1.1.9-1.8 1.2-.7.3-1.4.4-2.5.5-1 .1-1.4.1-4.1.1s-3.1 0-4.1-.1c-1.1-.1-1.8-.2-2.5-.5-.7-.3-1.2-.6-1.8-1.2-.6-.6-.9-1.1-1.2-1.8-.3-.7-.4-1.4-.5-2.5C2 15.1 2 14.7 2 12s0-3.1.1-4.1c.1-1.1.2-1.8.5-2.5.3-.7.6-1.2 1.2-1.8.6-.6 1.1-.9 1.8-1.2.7-.3 1.4-.4 2.5-.5C8.9 2 9.3 2 12 2zm0 1.8c-2.6 0-3 0-4 .1-.9.1-1.4.2-1.7.4-.4.2-.7.4-1 .7-.3.3-.5.6-.7 1-.1.3-.3.8-.4 1.7-.1 1-.1 1.4-.1 4s0 3 .1 4c.1.9.2 1.4.4 1.7.2.4.4.7.7 1 .3.3.6.5 1 .7.3.1.8.3 1.7.4 1 .1 1.4.1 4 .1s3 0 4-.1c.9-.1 1.4-.2 1.7-.4.4-.2.7-.4 1-.7.3-.3.5-.6.7-1 .1-.3.3-.8.4-1.7.1-1 .1-1.4.1-4s0-3-.1-4c-.1-.9-.2-1.4-.4-1.7-.2-.4-.4-.7-.7-1-.3-.3-.6-.5-1-.7-.3-.1-.8-.3-1.7-.4-1-.1-1.4-.1-4-.1zm0 3.5a4.7 4.7 0 110 9.4 4.7 4.7 0 010-9.4zm0 1.8a2.9 2.9 0 100 5.8 2.9 2.9 0 000-5.8zm5-2.3a1.1 1.1 0 110 2.2 1.1 1.1 0 010-2.2z" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-slate-950 text-slate-50">
      {/* Floating animations */}
      <style>{`
        @keyframes floatA {
          0%,100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        @keyframes floatB {
          0%,100% { transform: translateY(0px); }
          50% { transform: translateY(10px); }
        }

        .float-a {
          animation: floatA 6s ease-in-out infinite;
        }

        .float-b {
          animation: floatB 6.5s ease-in-out infinite;
        }
      `}</style>

      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-32 -top-20 h-[350px] w-[350px] rounded-full bg-blue-600/20 blur-3xl sm:h-[450px] sm:w-[450px] lg:h-[520px] lg:w-[520px]" />

        <div className="absolute -bottom-20 right-0 h-[280px] w-[280px] rounded-full bg-orange-500/10 blur-3xl sm:h-[380px] sm:w-[380px] lg:right-40" />
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 py-12 sm:px-6 sm:py-16 md:gap-14 lg:grid-cols-2 lg:gap-10 lg:px-10 lg:py-14 xl:px-16">
        {/* ================= LEFT CONTENT ================= */}
        <div className="w-full">
          <h1 className="text-xl font-semibold leading-snug text-slate-100 sm:text-2xl md:text-3xl">
            Best Digital Marketing Agency in Delhi
          </h1>

          <h2 className="mt-2 text-3xl  font-extrabold leading-[1.15] tracking-tight sm:text-4xl md:text-5xl lg:text-5xl">
            <span className="block bg-gradient-to-r from-orange-400 to-orange-300 bg-clip-text text-transparent">
              Grow Your Business Online
            </span>

            <span className="mt-1 block text-blue-400">
              with Search2Sale Digital
            </span>
          </h2>

          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.08em] text-orange-400 sm:text-sm">
            Get More Visibility. Generate More Leads. Grow More Sales.
          </p>

          <p className="mt-5 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base">
            At Search2Sale Digital, we help businesses build a powerful
            digital presence through effective{" "}
            <strong className="text-slate-300">
              SEO, Google Business Profile optimization, website development,
              social media marketing, Google Ads, content marketing, and
              complete digital marketing solutions.
            </strong>
          </p>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base">
            Whether you are a startup, local business, service provider, or
            established brand, our team creates strategies based on your
            business goals and target audience.
          </p>

          {/* Features */}
          <ul className="mt-7 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
            {FEATURES.map((feature) => (
              <li
                key={feature}
                className="flex items-center gap-2.5 text-sm font-medium text-slate-100"
              >
                <span className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-orange-500 ring-4 ring-orange-500/10">
                  <Check
                    className="h-3 w-3 text-slate-950"
                    strokeWidth={3}
                  />
                </span>

                <span>{feature}</span>
              </li>
            ))}
          </ul>

          {/* Buttons */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <button className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-br from-orange-400 to-orange-500 px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-lg shadow-orange-500/25 transition hover:-translate-y-0.5 hover:shadow-orange-500/40 sm:w-auto">
              Get Free Audit
              <span aria-hidden>→</span>
            </button>

            <button className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-slate-700 bg-transparent px-6 py-3.5 text-sm font-semibold text-slate-100 transition hover:-translate-y-0.5 hover:bg-slate-900 sm:w-auto">
              Book Consultation
              <span aria-hidden>+</span>
            </button>
          </div>

          {/* Partners */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:mt-12 sm:justify-start sm:gap-4">
            {/* Google */}
            <div className="flex flex-col items-center gap-1.5 rounded-lg border border-slate-800 bg-slate-900 px-2 py-2">
              <div className="flex h-10 w-16 items-center justify-center sm:h-12 sm:w-20">
                <Image
                  src="/google.png"
                  alt="Google Partner"
                  width={80}
                  height={40}
                  className="h-full w-full object-contain"
                />
              </div>

              <p className="text-[10px] font-medium text-white">
                Partner
              </p>
            </div>

            {/* Meta */}
            <div className="flex flex-col items-center gap-1.5 rounded-lg border border-slate-800 bg-slate-900 px-2 py-2">
              <div className="flex h-10 w-16 items-center justify-center sm:h-12 sm:w-20">
                <Image
                  src="/meta.png"
                  alt="Meta Partner"
                  width={80}
                  height={40}
                  className="h-full w-full object-contain"
                />
              </div>

              <p className="text-[10px] font-medium text-white">
                Business Partner
              </p>
            </div>
          </div>
        </div>

        {/* ================= RIGHT VISUAL ================= */}
        <div className="relative mx-auto flex min-h-[300px] w-full max-w-[320px] items-center justify-center sm:min-h-[380px] sm:max-w-md lg:min-h-[460px] lg:max-w-lg">
          {/* Laptop */}
          <div className="relative w-full">
            <div className="overflow-hidden rounded-xl border-2 border-slate-800 bg-black shadow-2xl shadow-black/60 sm:rounded-2xl sm:border-4">
              <img
                src="/images/hero.jpg"
                alt="Analytics dashboard demo"
                className="block w-full object-cover opacity-90"
              />
            </div>

            {/* Laptop base */}
            <div className="mx-1 h-2.5 rounded-b-xl bg-gradient-to-b from-slate-700 to-slate-900 shadow-lg sm:h-3.5" />
            <div className="mx-auto h-1.5 w-1/3 rounded-b-md bg-slate-950 sm:h-2" />

            {/* ================= FLOATING CARDS ================= */}

            {/* Total Users */}
            <div className="float-a absolute -left-3 top-1 rounded-lg border border-slate-800 bg-slate-900/95 px-2.5 py-2 shadow-xl shadow-black/50 backdrop-blur sm:-left-5 sm:top-2 sm:rounded-xl sm:px-4 sm:py-2.5">
              <p className="text-[8px] font-semibold uppercase tracking-wide text-slate-500 sm:text-[10px]">
                Total Users
              </p>

              <p className="flex items-baseline gap-1 text-sm font-extrabold text-slate-50 sm:gap-1.5 sm:text-lg">
                12,540

                <span className="text-[9px] font-bold text-emerald-400 sm:text-xs">
                  +12.5%
                </span>
              </p>
            </div>

            {/* Conversions */}
            <div className="float-b absolute -right-3 top-1/2 rounded-lg border border-slate-800 bg-slate-900/95 px-2.5 py-2 shadow-xl shadow-black/50 backdrop-blur sm:-right-7 sm:rounded-xl sm:px-4 sm:py-2.5">
              <p className="text-[8px] font-semibold uppercase tracking-wide text-slate-500 sm:text-[10px]">
                Conversions
              </p>

              <p className="text-sm font-extrabold text-slate-50 sm:text-lg">
                +35.6%
              </p>
            </div>

            {/* Leads */}
            <div className="float-a absolute bottom-0 left-2 rounded-lg border border-slate-800 bg-slate-900/95 px-2.5 py-2 shadow-xl shadow-black/50 backdrop-blur sm:left-4 sm:rounded-xl sm:px-4 sm:py-2.5">
              <p className="text-[8px] font-semibold uppercase tracking-wide text-slate-500 sm:text-[10px]">
                Leads
              </p>

              <p className="flex items-baseline gap-1 text-sm font-extrabold text-slate-50 sm:gap-1.5 sm:text-lg">
                +285%

                <span className="text-[9px] font-bold text-emerald-400 sm:text-xs">
                  +15%
                </span>
              </p>
            </div>

            {/* ================= SOCIAL BADGES ================= */}

            {/* Google */}
            <div className="float-b absolute -top-3 left-1/4 flex h-9 w-9 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 shadow-xl shadow-black/50 sm:-top-4 sm:h-12 sm:w-12 sm:rounded-2xl">
              <GoogleIcon className="h-5 w-5 sm:h-6 sm:w-6" />
            </div>

            {/* Facebook */}
            <div className="float-a absolute right-0 top-3 flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 shadow-xl shadow-black/50 sm:top-6 sm:h-12 sm:w-12 sm:rounded-2xl">
              <FacebookIcon className="h-4 w-4 sm:h-5 sm:w-5" />
            </div>

            {/* Instagram */}
            <div className="float-b absolute -right-1 bottom-12 flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-orange-400 via-pink-500 to-purple-600 shadow-xl shadow-black/50 sm:-right-2 sm:bottom-16 sm:h-12 sm:w-12 sm:rounded-2xl">
              <InstagramIcon className="h-4 w-4 sm:h-5 sm:w-5" />
            </div>

            {/* ================= TARGET BADGE ================= */}

            <svg
              className="absolute -bottom-1 -left-4 h-11 w-11 drop-shadow-xl sm:-left-6 sm:bottom-6 sm:h-16 sm:w-16"
              viewBox="0 0 80 80"
            >
              <circle
                cx="40"
                cy="40"
                r="36"
                className="fill-slate-900 stroke-slate-700"
                strokeWidth="2"
              />

              <circle cx="40" cy="40" r="28" fill="#f97316" />
              <circle cx="40" cy="40" r="20" className="fill-slate-900" />
              <circle cx="40" cy="40" r="12" fill="#3b82f6" />
              <circle cx="40" cy="40" r="4" fill="#f8fafc" />

              <line
                x1="8"
                y1="72"
                x2="34"
                y2="46"
                stroke="#9a5b2a"
                strokeWidth="3"
              />
            </svg>

            {/* ================= GROWTH ARROW ================= */}

            <svg
              className="absolute -right-1 -top-7 h-8 w-14 opacity-90 sm:right-8 sm:-top-8 sm:h-12 sm:w-20"
              viewBox="0 0 100 60"
            >
              <polyline
                points="2,55 25,30 42,42 70,10"
                fill="none"
                stroke="#f97316"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              <polygon
                points="70,10 55,12 68,25"
                fill="#f97316"
              />
            </svg>

            {/* ================= DONUT CHART ================= */}

            <svg
              className="absolute -bottom-1 left-1/3 h-9 w-9 rounded-full border border-slate-800 bg-slate-900 shadow-xl shadow-black/50 sm:-bottom-2 sm:h-12 sm:w-12"
              viewBox="0 0 36 36"
            >
              <circle
                cx="18"
                cy="18"
                r="15.9"
                fill="none"
                stroke="#1e293b"
                strokeWidth="4"
              />

              <circle
                cx="18"
                cy="18"
                r="15.9"
                fill="none"
                stroke="#3b82f6"
                strokeWidth="4"
                strokeDasharray="45 55"
                strokeDashoffset="25"
              />

              <circle
                cx="18"
                cy="18"
                r="15.9"
                fill="none"
                stroke="#f97316"
                strokeWidth="4"
                strokeDasharray="30 70"
                strokeDashoffset="-20"
              />

              <circle
                cx="18"
                cy="18"
                r="15.9"
                fill="none"
                stroke="#34d399"
                strokeWidth="4"
                strokeDasharray="25 75"
                strokeDashoffset="-50"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}