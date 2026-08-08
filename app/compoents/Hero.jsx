import React from "react";
import { Check, Search, Infinity as InfinityIcon } from "lucide-react";
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
    <div className="min-h-screen w-full bg-slate-950 text-slate-50 relative overflow-hidden">
      {/* keyframes for the floating badges */}
      <style>{`
        @keyframes floatA { 0%,100% { transform: translateY(0px);} 50% { transform: translateY(-10px);} }
        @keyframes floatB { 0%,100% { transform: translateY(0px);} 50% { transform: translateY(10px);} }
        .float-a { animation: floatA 6s ease-in-out infinite; }
        .float-b { animation: floatB 6.5s ease-in-out infinite; }
      `}</style>

      {/* ambient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 right-0 h-[520px] w-[520px] rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute bottom-0 right-40 h-[380px] w-[380px] rounded-full bg-orange-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 py-16 lg:grid-cols-2 lg:gap-10 lg:px-10 lg:py-14">
        {/* LEFT: content */}
        <div>
          <h2 className="text-2xl font-semibold text-slate-100 sm:text-3xl">
            Grow Your Business with
          </h2>
          <h1 className="mt-1 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            <span className="block whitespace-nowrap text-blue-400">Search2Sale  <span className=" bg-gradient-to-r from-orange-400 to-orange-300 bg-clip-text text-transparent">
              Digital
            </span></span>
            
          </h1>

          <p className="mt-3 text-sm font-semibold uppercase tracking-wide text-orange-400">
            Your Trusted Digital Marketing Partner
          </p>

          <p className="mt-5 max-w-md text-slate-400">
            At Search2SaleDigital (S2S Digital), we help businesses build a
            powerful online presence and achieve measurable growth. From
            creating stunning websites to running high-converting digital
            marketing campaigns, our team delivers customized solutions that
            drive traffic, generate quality leads, and increase sales.
          </p>

          <p className="mt-3 max-w-md text-slate-400">
            Whether you&apos;re a startup, local business, or established
            brand, we provide data-driven strategies that help you stay ahead
            of the competition.
          </p>

          <ul className="mt-7 grid max-w-md grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
            {FEATURES.map((feature) => (
              <li
                key={feature}
                className="flex items-center gap-2.5 text-sm font-medium text-slate-100"
              >
                <span className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-orange-500 ring-4 ring-orange-500/10">
                  <Check className="h-3 w-3 text-slate-950" strokeWidth={3} />
                </span>
                {feature}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-br from-orange-400 to-orange-500 px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-lg shadow-orange-500/25 transition hover:-translate-y-0.5 hover:shadow-orange-500/40">
              Get Free Audit
              <span aria-hidden>→</span>
            </button>
            <button className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-700 bg-transparent px-6 py-3.5 text-sm font-semibold text-slate-100 transition hover:-translate-y-0.5 hover:bg-slate-900">
              Book Consultation
              <span aria-hidden>+</span>
            </button>
          </div>

          <div className="mt-12 flex flex-wrap justify-center md:justify-start items-center gap-4">
            <div className="flex flex-col items-center gap-2 rounded-lg border border-slate-800 bg-slate-900 px-2 py-2">
              <div className="flex h-12 w-20 items-center justify-center">
                <Image
                  src="/google.png"
                  alt="Google Partner"
                  width={80}
                  height={40}
                  className="h-full w-full object-contain"
                />
              </div>
              <p className="text-[10px] font-medium text-white">Partner</p>
            </div>

            {/* Meta */}
            <div className="flex flex-col items-center gap-2 rounded-lg border border-slate-800 bg-slate-900 px-2 py-2">
              <div className="flex h-12 w-20 items-center justify-center">
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

        {/* RIGHT: visual */}
        <div className="relative mx-auto flex min-h-[280px] w-full max-w-md items-center justify-center lg:min-h-[460px]">
          {/* laptop */}
          <div className="relative w-full">
            <div className="overflow-hidden rounded-2xl border-4 border-slate-800 bg-black shadow-2xl shadow-black/60">
              <img
                src="/images/hero.jpg"
                alt="Analytics dashboard demo"
                className="block w-full opacity-90"
              />
            </div>
            <div className="mx-1 h-3.5 rounded-b-xl bg-gradient-to-b from-slate-700 to-slate-900 shadow-lg" />
            <div className="mx-auto h-2 w-1/3 rounded-b-md bg-slate-950" />

            {/* floating stat cards */}
            <div className="float-a absolute -left-4 top-2 rounded-xl border border-slate-800 bg-slate-900/90 px-4 py-2.5 shadow-xl shadow-black/50 backdrop-blur">
              <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-500">
                Total Users
              </p>
              <p className="flex items-baseline gap-1.5 text-lg font-extrabold text-slate-50">
                12,540{" "}
                <span className="text-xs font-bold text-emerald-400">
                  +12.5%
                </span>
              </p>
            </div>

            <div className="float-b absolute right-[-2rem] top-1/2 rounded-xl border border-slate-800 bg-slate-900/90 px-4 py-2.5 shadow-xl shadow-black/50 backdrop-blur">
              <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-500">
                Conversions
              </p>
              <p className="text-lg font-extrabold text-slate-50">+35.6%</p>
            </div>

            <div className="float-a absolute bottom-0 left-4 rounded-xl border border-slate-800 bg-slate-900/90 px-4 py-2.5 shadow-xl shadow-black/50 backdrop-blur">
              <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-500">
                Leads
              </p>
              <p className="flex items-baseline gap-1.5 text-lg font-extrabold text-slate-50">
                +285%{" "}
                <span className="text-xs font-bold text-emerald-400">+15%</span>
              </p>
            </div>

            {/* social icon badges */}
            <div className="float-b absolute -top-4 left-1/4 flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-800 bg-slate-900 shadow-xl shadow-black/50">
              <GoogleIcon className="h-6 w-6" />
            </div>
            <div className="float-a absolute right-0 top-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 shadow-xl shadow-black/50">
              <FacebookIcon className="h-5 w-5" />
            </div>
            <div className="float-b absolute -right-2 bottom-16 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-tr from-orange-400 via-pink-500 to-purple-600 shadow-xl shadow-black/50">
              <InstagramIcon className="h-5 w-5" />
            </div>

            {/* target badge */}
            <svg
              className="absolute -left-6 bottom-6 h-16 w-16 drop-shadow-xl"
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

            {/* growth arrow */}
            <svg
              className="absolute -top-8 right-8 h-12 w-20 opacity-90"
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
              <polygon points="70,10 55,12 68,25" fill="#f97316" />
            </svg>

            {/* donut chart badge */}
            <svg
              className="absolute -bottom-2 left-1/3 h-12 w-12 rounded-full border border-slate-800 bg-slate-900 shadow-xl shadow-black/50"
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
    </div>
  );
}