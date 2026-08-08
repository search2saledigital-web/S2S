import { FiArrowRight } from "react-icons/fi";


export default function CTA() {
  return (
    <div className=" w-full bg-gradient-to-r from-[#0a1128] via-[#12224f] to-[#1a3a8f]">
    <section className="relative overflow-hidden max-w-7xl mx-auto bg-gradient-to-r from-[#0a1128] via-[#12224f] to-[#1a3a8f] px-6 py-6  md:py-10 sm:px-10 ">
      {/* subtle background glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(59,130,246,0.25),transparent_60%)]" />

      <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        {/* Text content */}
        <div className="max-w-xl">
          <h2 className="text-2xl font-bold text-center leading-tight text-white sm:text-3xl md:text-4xl">
            Ready to{" "}
            <span className="text-orange-400">Grow Your Business?</span>
          </h2>
          <p className="mt-3 text-center md:text-start text-sm text-slate-300 sm:text-base">
            Let&apos;s your ideas into measurable results. Whether you need a new website, better search rankings, or more qualified leads, Search2SaleDigital is here to help.

          </p>
        </div>

        {/* CTA + Illustration */}
        <div className="flex w-full items-center justify-center md:justify-between gap-6 md:w-auto">
          <button
            type="button"
            className="group flex shrink-0 items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-900/30 transition-transform hover:scale-105 sm:text-base"
          >
            Let&apos;s Get Started
            <FiArrowRight className="transition-transform group-hover:translate-x-1" />
          </button>

         
        </div>
      </div>
    </section>
    </div>
  );
}