import React from "react";
import { Users, FolderCheck, IndianRupee, Heart } from "lucide-react";
import Image from "next/image";

const STATS = [
  { icon: Users, value: "500+", label: "Happy Clients" },
  { icon: FolderCheck, value: "1200+", label: "Projects Completed" },
  { icon: IndianRupee, value: "15Cr+", label: "Ad Spend Managed" },
  { icon: Heart, value: "95%", label: "Client Retention" },
];

export default function About() {
  return (
    <section className="relative w-full overflow-hidden bg-slate-950 text-slate-50">
      {/* ambient glow, matches hero */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 right-0 h-[420px] w-[420px] rounded-full bg-blue-600/15 blur-3xl" />
        <div className="absolute -bottom-16 left-0 h-[320px] w-[320px] rounded-full bg-orange-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 py-8 lg:grid-cols-2 lg:gap-16 lg:px-10 lg:py-24">
        {/* LEFT: image with decorative shapes */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          {/* orange quarter-circle accent */}
          <div className="absolute -left-6 -top-6 h-24 w-24 rounded-tr-[100px] bg-gradient-to-br from-orange-400 to-orange-600 sm:h-28 sm:w-28" />
          {/* blue dot accents */}
          <span className="absolute -right-2 top-6 h-3 w-3 rounded-full bg-blue-400" />
          <span className="absolute left-8 -bottom-3 h-2.5 w-2.5 rounded-full bg-blue-400" />
          <span className="absolute -left-4 top-1/2 h-2 w-2 rounded-full bg-blue-300" />

          <div className="relative overflow-hidden rounded-2xl border border-slate-800 shadow-2xl shadow-black/50">
           <Image
  src="/images/about.jpg"
  alt="Search2Sale Digital team meeting"
  width={1000}
  height={600}
  className=" h-90 w-150 object-cover"
/>
            {/* logo badge overlay, like the reference */}
            <div className="absolute right-4 top-4 flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900/90 px-3 py-1.5 backdrop-blur">
              <div className="flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-blue-500 to-orange-500 text-xs font-black text-white">
                S2
              </div>
              <span className="text-xs font-semibold text-slate-100">
                Search2Sale <span className="text-orange-400">Digital</span>
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT: content */}
        <div>
          <h2 className="text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl lg:text-4xl">
            About{" "}
            <span className="text-blue-400">Search2Sale</span>
            <span className="bg-gradient-to-r from-orange-400 to-orange-300 bg-clip-text text-transparent">
              Digital
            </span>
          </h2>

          <p className="mt-4 max-w-lg text-sm leading-relaxed text-slate-400 sm:text-base">
            Search2Sale Digital is a result-oriented digital marketing agency
            dedicated to helping businesses grow online. We combine
            creativity, strategy, and technology to deliver measurable
            results.
          </p>

           <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
      {STATS.map(({ icon: Icon, value, label }) => (
        <div
          key={label}
          className="group relative overflow-hidden rounded-xl border border-slate-800 bg-slate-900/70 px-2 py-3 text-center
            transition-all duration-300 hover:-translate-y-1.5 hover:border-orange-500/40
            hover:shadow-[0_8px_30px_rgba(249,115,22,0.15)]"
        >
          {/* soft glow that appears on hover */}
          <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_50%_0%,rgba(249,115,22,0.12),transparent_70%)]" />
 
          {/* icon badge */}
          <div className="relative mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-orange-500/20 to-orange-500/5 ring-1 ring-orange-500/20 transition-transform duration-300 group-hover:scale-110 group-hover:ring-orange-400/40">
            <Icon className="h-5 w-5 text-orange-400" />
          </div>
 
          <p className="relative bg-gradient-to-b from-slate-50 to-slate-300 bg-clip-text text-xl font-extrabold text-transparent sm:text-2xl">
            {value}
          </p>
          <p className="relative mt-1 text-[11px] font-medium tracking-wide text-slate-500 sm:text-xs">
            {label}
          </p>
 
          {/* bottom accent line */}
          <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-orange-500 transition-all duration-300 group-hover:w-1/2" />
        </div>
      ))}
    </div>
        </div>
      </div>
    </section>
  );
}
