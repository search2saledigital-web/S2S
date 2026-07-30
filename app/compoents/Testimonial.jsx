import { FiPlus } from "react-icons/fi";
import { FaStar, FaQuoteRight } from "react-icons/fa";

// Left side accordion-style list items
const reviewers = ["Your Address", "Neha Verma"];

// Right side testimonial cards
const testimonials = [
  {
    text: "Team's2Sale Digital transformed our responsive and results, our traffic and sales have increased significantly. Highly recommended!",
    name: "Rohit Sharma",
    role: "CEO, RealEstateHub",
    avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200", 
    rating: 5,
  },
  {
    text: "Excellent communication and amazing results. We saw great growth in a short period.",
    name: "Amit Patel",
    role: "Founder, FitLife",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg", 
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#0b0f1a] px-6 py-6 md:py-14 sm:px-10">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-[minmax(0,340px)_1fr]">
        {/* Left column */}
        <div>
          <span className="inline-block rounded-full bg-orange-500/10 px-3 py-1 text-xs font-semibold tracking-wide text-orange-400">
            CLIENT REVIEWS
          </span>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
            What Our <span className="text-orange-400">Clients</span> Say
          </h2>

          <div className="mt-8 space-y-3">
            {reviewers.map((name) => (
              <div
                key={name}
                className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300 transition-colors hover:border-orange-400/40"
              >
                <span>{name}</span>
                <FiPlus className="text-orange-400" />
              </div>
            ))}
          </div>
        </div>

        {/* Right column - testimonial cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="relative flex flex-col justify-between rounded-2xl border border-white/10 bg-[#11162a] p-6"
            >
              <FaQuoteRight className="absolute right-6 top-6 text-2xl text-orange-500/40" />

              <div className="flex gap-1 text-orange-400">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <FaStar key={i} size={14} />
                ))}
              </div>

              <p className="mt-4 text-sm leading-relaxed text-slate-300">
                {t.text}
              </p>

              <div className="mt-6 flex items-center gap-3">
                {t.avatar ? (
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                ) : (
                  <div className="h-10 w-10 shrink-0 rounded-full border border-dashed border-white/20 bg-white/5" />
                )}
                <div>
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="text-xs text-slate-400">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}