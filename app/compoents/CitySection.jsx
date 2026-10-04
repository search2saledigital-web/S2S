import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { locations } from "../../data";

export default function CitySection() {
    return (
        <section className="relative overflow-hidden border-y border-white/[0.06] bg-[#050816] px-5 py-10 text-white sm:px-8 sm:py-12 lg:px-12">
            <div className="pointer-events-none absolute -right-24 -top-24 size-80 rounded-full bg-orange-500/[0.07] blur-3xl" />

            <div className="relative mx-auto max-w-7xl">
                <div className="mb-9 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                            Areas we serve across Delhi
                        </h2>
                    </div>

                    <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-300">
                        <MapPin size={15} className="text-orange-400" />
                        {locations.length} locations
                    </span>
                </div>

                <nav aria-label="Digital marketing service areas">
                    <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                        {locations.map(({ name, href }) => (
                            <li key={href}>
                                <Link
                                    href={href}
                                    className="group flex min-h-14 items-center justify-between gap-2 rounded-xl border border-white/[0.08] bg-white/[0.025] px-4 py-3 text-sm text-slate-300 transition duration-200 hover:-translate-y-0.5 hover:border-orange-300/30 hover:bg-orange-400/[0.06] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
                                >
                                    <span className="flex min-w-0 items-center gap-2.5">
                                        <MapPin
                                            size={15}
                                            className="shrink-0 text-orange-400/80 transition-colors group-hover:text-orange-300"
                                        />
                                        <span className="truncate">{name}</span>
                                    </span>
                                    <ArrowRight
                                        size={14}
                                        aria-hidden="true"
                                        className="shrink-0 text-slate-600 transition group-hover:translate-x-0.5 group-hover:text-orange-300"
                                    />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </section>
    );
}
