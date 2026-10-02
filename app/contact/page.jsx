"use client";

import React, { useState } from "react";
import {
  Search,
  Megaphone,
  Share2,
  TrendingUp,
  Code2,
  PenTool,
  Palette,
  Users,
  ArrowRight,
  Mail,
  PhoneCall,
  MapPin,
  CheckCircle2,
  ChevronDown,
  Target,
  HelpCircle,
} from "lucide-react";
import { FiArrowRight, FiChevronDown } from "react-icons/fi";

const services = [
  {
    icon: Search,
    title: "SEO Services",
    desc: "Improve your search engine visibility, organic traffic and qualified leads with a strategic SEO campaign.",
  },
  {
    icon: Megaphone,
    title: "Google Ads & PPC",
    desc: "Reach customers actively searching for your products or services with targeted Google Ads campaigns.",
  },
  {
    icon: Target,
    title: "Meta Ads",
    desc: "Generate leads, sales and brand awareness through Facebook and Instagram advertising.",
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    desc: "Build your brand and engage your audience with strategic social media management and content.",
  },
  {
    icon: Code2,
    title: "Web Development",
    desc: "Get responsive, SEO-friendly and conversion-focused websites designed around your business goals.",
  },
  {
    icon: TrendingUp,
    title: "Performance Marketing",
    desc: "Connect advertising, SEO, landing pages, analytics and conversion optimization to build a measurable growth system.",
  },
  {
    icon: PenTool,
    title: "Content & Creative",
    desc: "Create engaging website content, social media content, ad creatives, graphics, videos and conversion-focused copy.",
  },
  {
    icon: Palette,
    title: "Branding",
    desc: "Build a professional and memorable brand identity with strategy, logo design and brand communication.",
  },
];

const faqs = [
  {
    question: "What services does Search2Sale Digital provide?",
    answer:
      "We provide SEO, Google Ads, Meta Ads, social media marketing, web development, performance marketing, content and creative services, branding and lead generation.",
  },
  {
    question: "Do you provide digital marketing services in Delhi?",
    answer:
      "Yes. Search2Sale Digital is based in Delhi and provides digital marketing solutions for businesses looking to grow their online presence and generate more customers.",
  },
  {
    question: "Can I get a free consultation?",
    answer:
      "Yes. Contact us by phone, email or through the enquiry form to discuss your business and digital marketing requirements.",
  },
  {
    question: "How do I get started?",
    answer:
      "Simply submit the contact form or call us at +91 85069 38033. Our team will discuss your requirements and suggest suitable next steps.",
  },
  {
    question: "Do you work with businesses outside Delhi?",
    answer:
      "Yes. While we are based in Delhi, our digital marketing services can support businesses across India and other markets.",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    product: "",
    place: "",
    priceRange: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.phone ||
      !formData.email ||
      !formData.product ||
      !formData.place ||
      !formData.message
    ) {
      toast.error("Please fill all required fields.");
      return;
    }

    try {
      setLoading(true);

      const response = await axios.post("/api/form", formData);

      if (response.data.success) {
        toast.success("Thanks! Our team will get back to you soon.");

        setFormData({
          name: "",
          phone: "",
          email: "",
          product: "",
          place: "",
          priceRange: "",
          message: "",
        });
      }
    } catch (error) {
      console.error("Form submission error:", error);

      const message =
        error?.response?.data?.message ||
        "Something went wrong. Please try again.";

      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#020618] text-white">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative py-6 md:py-12 border-b border-white/5 bg-white/[0.015]">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block mb-5 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#ec6a06]">
              Contact Search2Sale Digital
            </span>

            <h1 className="text-[38px] sm:text-5xl leading-[1.08] font-extrabold tracking-tight">
              Let’s{" "}
              <span className="text-[#ec6a06]">
                Grow Your Business
              </span>{" "}
              Online
            </h1>

            <p className="mt-7 text-base sm:text-lg md:text-xl leading-8 text-white/65 max-w-3xl mx-auto">
              Looking for a reliable{" "}
              <span className="text-[#ec6a06] font-semibold">
                digital marketing agency in Delhi
              </span>{" "}
              to grow your business, generate quality leads and increase online
              visibility?
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          CONTACT FORM + DIRECT CONTACT
      ========================================================= */}
      <section className="py-6 md:py-12">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            {/* FORM */}
            <div className="lg:col-span-7 rounded-3xl border border-white/10 bg-white/[0.03] p-5 sm:p-8 md:p-10">
              <div className="mb-3">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                  Tell Us About Your Business
                </h2>

                <p className="mt-3 text-sm sm:text-base leading-7 text-white/55">
                  Fill out the form and tell us about your business, website
                  and marketing goals.
                </p>
              </div>

              {submitted ? (
                <div className="rounded-2xl border border-[#ec6a06]/30 bg-[#ec6a06]/10 p-8 text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#ec6a06]/15 text-[#ec6a06]">
                    <CheckCircle2 size={30} />
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-white">
                    Enquiry Submitted
                  </h3>

                  <p className="mt-2 text-white/60">
                    Thank you for contacting Search2Sale Digital. Our team
                    will get back to you shortly.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="relative mt-7 space-y-4"
                >
                  {/* Name + Phone */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      required
                      className="
                                  w-full rounded-lg
                                  border border-slate-700
                                  bg-slate-900/70
                                  px-4 py-3
                                  text-sm text-white
                                  placeholder:text-slate-500
                                  outline-none
                                  transition-colors
                                  focus:border-orange-400
                                  focus:ring-1
                                  focus:ring-orange-400/20
                                "
                    />

                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone Number"
                      required
                      className="
                                  w-full rounded-lg
                                  border border-slate-700
                                  bg-slate-900/70
                                  px-4 py-3
                                  text-sm text-white
                                  placeholder:text-slate-500
                                  outline-none
                                  transition-colors
                                  focus:border-orange-400
                                  focus:ring-1
                                  focus:ring-orange-400/20
                                "
                    />
                  </div>

                  {/* Email + Service */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email Address"
                      required
                      className="
                                  w-full rounded-lg
                                  border border-slate-700
                                  bg-slate-900/70
                                  px-4 py-3
                                  text-sm text-white
                                  placeholder:text-slate-500
                                  outline-none
                                  transition-colors
                                  focus:border-orange-400
                                  focus:ring-1
                                  focus:ring-orange-400/20
                                "
                    />

                    <div className="relative">
                      <select
                        name="product"
                        value={formData.product}
                        onChange={handleChange}
                        required
                        className="
                                    w-full appearance-none
                                    rounded-lg
                                    border border-slate-700
                                    bg-slate-900/70
                                    px-4 py-3
                                    text-sm text-slate-300
                                    outline-none
                                    transition-colors
                                    focus:border-orange-400
                                    focus:ring-1
                                    focus:ring-orange-400/20
                                  "
                      >
                        <option value="" disabled>
                          Select Service
                        </option>

                        <option value="SEO Services">
                          SEO Services
                        </option>

                        <option value="Google Business Profile Optimization">
                          Google Business Profile Optimization
                        </option>

                        <option value="Website Development">
                          Website Development
                        </option>

                        <option value="Google Ads & PPC">
                          Google Ads & PPC
                        </option>

                        <option value="Meta Ads">
                          Meta Ads
                        </option>

                        <option value="Social Media Marketing">
                          Social Media Marketing
                        </option>

                        <option value="Content Marketing">
                          Content Marketing
                        </option>

                        <option value="Lead Generation">
                          Lead Generation
                        </option>
                      </select>

                      <FiChevronDown
                        className="
                                    pointer-events-none
                                    absolute right-4 top-1/2
                                    h-4 w-4
                                    -translate-y-1/2
                                    text-slate-400
                                  "
                      />
                    </div>
                  </div>

                  {/* Place + Budget */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <input
                      type="text"
                      name="place"
                      value={formData.place}
                      onChange={handleChange}
                      placeholder="Your City / Place"
                      required
                      className="
                                  w-full rounded-lg
                                  border border-slate-700
                                  bg-slate-900/70
                                  px-4 py-3
                                  text-sm text-white
                                  placeholder:text-slate-500
                                  outline-none
                                  transition-colors
                                  focus:border-orange-400
                                  focus:ring-1
                                  focus:ring-orange-400/20
                                "
                    />

                    <div className="relative">
                      <select
                        name="priceRange"
                        value={formData.priceRange}
                        onChange={handleChange}
                        className="
                                    w-full appearance-none
                                    rounded-lg
                                    border border-slate-700
                                    bg-slate-900/70
                                    px-4 py-3
                                    text-sm text-slate-300
                                    outline-none
                                    transition-colors
                                    focus:border-orange-400
                                    focus:ring-1
                                    focus:ring-orange-400/20
                                  "
                      >
                        <option value="" disabled>
                          Select Budget
                        </option>

                        <option value="Under ₹10,000">
                          Under ₹10,000
                        </option>

                        <option value="₹10,000 - ₹25,000">
                          ₹10,000 - ₹25,000
                        </option>

                        <option value="₹25,000 - ₹50,000">
                          ₹25,000 - ₹50,000
                        </option>

                        <option value="₹50,000+">
                          ₹50,000+
                        </option>
                      </select>

                      <FiChevronDown
                        className="
                                    pointer-events-none
                                    absolute right-4 top-1/2
                                    h-4 w-4
                                    -translate-y-1/2
                                    text-slate-400
                                  "
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your requirements"
                    required
                    rows={5}
                    className="
                                w-full resize-none
                                rounded-lg
                                border border-slate-700
                                bg-slate-900/70
                                px-4 py-3
                                text-sm text-white
                                placeholder:text-slate-500
                                outline-none
                                transition-colors
                                focus:border-orange-400
                                focus:ring-1
                                focus:ring-orange-400/20
                              "
                  />

                  {/* Submit */}
                  <div className="flex justify-center">
                    <button
                      type="submit"
                      disabled={loading}
                      className="
                                group
                                mt-2
                                inline-flex
                                items-center
                                justify-center
                                gap-2.5
                                rounded-full
                                bg-gradient-to-r
                                from-orange-400
                                to-orange-500
                                px-6 py-3.5
                                text-sm font-bold
                                text-white
                                shadow-lg
                                shadow-orange-500/20
                                transition-all duration-300
                                hover:-translate-y-0.5
                                hover:from-orange-500
                                hover:to-orange-600
                                hover:shadow-orange-500/30
                                disabled:cursor-not-allowed
                                disabled:opacity-60
                              "
                    >
                      {loading ? "Sending..." : "Get Free Consultation"}

                      {!loading && (
                        <FiArrowRight
                          className="
                                    transition-transform
                                    duration-300
                                    group-hover:translate-x-1
                                  "
                        />
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* RIGHT CONTACT */}
            <div className="lg:col-span-5 space-y-6">
              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
                <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] text-[#ec6a06]">
                  Talk to Our Digital Marketing Experts
                </span>

                <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-white">
                  Prefer to Speak Directly?
                </h2>

                <p className="mt-4 text-sm sm:text-base leading-7 text-white/55">
                  Contact Search2Sale Digital using the details below and
                  discuss your digital marketing requirements with our team.
                </p>

                <div className="mt-8 space-y-4">
                  {/* PHONE */}
                  <a
                    href="tel:+918506938033"
                    className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-[#020618] p-4 transition-all duration-300 hover:border-[#ec6a06]/50"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#ec6a06]/10 text-[#ec6a06]">
                      <PhoneCall size={21} />
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-wider text-white/35">
                        Phone
                      </p>

                      <p className="mt-1 text-base font-semibold text-white group-hover:text-[#ec6a06] transition-colors">
                        +91 85069 38033
                      </p>
                    </div>
                  </a>

                  {/* EMAIL */}
                  <a
                    href="mailto:info@search2saledigital.com"
                    className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-[#020618] p-4 transition-all duration-300 hover:border-[#ec6a06]/50"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#ec6a06]/10 text-[#ec6a06]">
                      <Mail size={21} />
                    </div>

                    <div className="min-w-0">
                      <p className="text-xs uppercase tracking-wider text-white/35">
                        Email
                      </p>

                      <p className="mt-1 break-all text-base font-semibold text-white group-hover:text-[#ec6a06] transition-colors">
                        info@search2saledigital.com
                      </p>
                    </div>
                  </a>

                  {/* ADDRESS */}
                  <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-[#020618] p-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#ec6a06]/10 text-[#ec6a06]">
                      <MapPin size={21} />
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-wider text-white/35">
                        Office Address
                      </p>

                      <p className="mt-2 text-sm leading-6 text-white/75">
                        Ground Floor, Nanesh Enclave,
                        House No. A-82/C,
                        <br />
                        Kh. No. 36/9, Street No. 1,
                        Jain Colony,
                        <br />
                        Delhi – 110042, India
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SERVICES
      ========================================================= */}
      <section className="border-y border-white/5 bg-white/[0.015] py-6 md:py-12">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-6">
          <div className="max-w-3xl mb-10 md:mb-14">
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#ec6a06]">
              Our Digital Marketing Services
            </span>

            <h2 className="mt-3 text-3xl md:text-5xl font-bold text-white">
              Digital Marketing Solutions Built Around Your Goals
            </h2>

            <p className="mt-5 text-white/55 text-base md:text-lg leading-8">
              From search visibility to lead generation, we provide integrated
              digital marketing services designed to help businesses grow
              online.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map(({ icon: Icon, title, desc }, index) => (
              <div
                key={title}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:border-[#ec6a06]/40 hover:bg-white/[0.05]"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#ec6a06]/10 text-[#ec6a06] transition-all duration-300 group-hover:bg-[#ec6a06] group-hover:text-white">
                    <Icon size={23} strokeWidth={1.8} />
                  </div>

                  <span className="text-sm font-bold text-white/10">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-bold text-white">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/55">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          WHY CHOOSE US
      ========================================================= */}
      <section className="py-6 md:py-12">
        <div className="max-w-[1100px] mx-auto px-5 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#ec6a06]">
              Why Choose Search2Sale Digital?
            </span>

            <h2 className="mt-3 text-3xl md:text-5xl font-bold text-white">
              A Smarter Approach to Digital Growth
            </h2>

            <p className="mt-5 text-white/55 text-base md:text-lg leading-8">
              We focus on building digital marketing strategies around
              measurable business goals instead of chasing vanity metrics.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Data-driven digital marketing strategies",
              "Customized solutions for your business",
              "Focus on qualified leads and conversions",
              "Transparent communication",
              "SEO-friendly and conversion-focused approach",
              "Integrated digital marketing services",
              "Strategies designed around measurable business goals",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-5"
              >
                <CheckCircle2
                  size={19}
                  className="mt-0.5 shrink-0 text-[#ec6a06]"
                />

                <span className="text-sm md:text-base leading-6 text-white/70">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          FAQ
      ========================================================= */}
      <section className="border-y border-white/5 bg-white/[0.015] py-6 md:py-12">
        <div className="max-w-[900px] mx-auto px-5 sm:px-6">
          <div className="text-center">
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#ec6a06]">
              Frequently Asked Questions
            </span>

            <h2 className="mt-3 text-3xl md:text-5xl font-bold text-white">
              Common Questions
            </h2>

            <p className="mt-5 text-white/55 leading-7">
              Find answers to some of the most common questions about our
              digital marketing services.
            </p>
          </div>

          <div className="mt-10 space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  key={faq.question}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-5 px-5 sm:px-6 py-5 text-left"
                  >
                    <div className="flex items-start gap-3">
                      <HelpCircle
                        size={20}
                        className="mt-0.5 shrink-0 text-[#ec6a06]"
                      />

                      <span className="text-sm sm:text-base md:text-lg font-semibold text-white">
                        {faq.question}
                      </span>
                    </div>

                    <ChevronDown
                      size={19}
                      className={`shrink-0 text-white/40 transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                        }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-5 pl-12">
                      <p className="text-sm sm:text-base leading-7 text-white/55">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section className="px-5 sm:px-6 py-6 md:py-12">
        <div className="max-w-[1280px] mx-auto">
          <div className="rounded-[30px] border border-[#ec6a06]/30 bg-[#ec6a06] px-6 py-12 md:px-12 md:py-16 text-center">
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
              Ready to Grow Your Business?
            </span>

            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
              Let’s Make Sure Your Customers Can Find You
            </h2>

            <p className="mt-5 max-w-2xl mx-auto text-white/90 text-base md:text-lg leading-8">
              Your customers are already searching online. Let’s make sure
              they can find your business.
            </p>

            <p className="mt-4 max-w-2xl mx-auto text-white/85 leading-7">
              Contact Search2Sale Digital today and discuss your digital
              marketing goals with our team.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
              <a
                href="tel:+918506938033"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 font-bold text-[#020618] transition-all duration-300 hover:bg-white/90"
              >
                <PhoneCall size={18} />
                Call: +91 85069 38033
              </a>

              <a
                href="mailto:info@search2saledigital.com"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/50 px-7 py-4 font-bold text-white transition-all duration-300 hover:bg-white/10"
              >
                <Mail size={18} />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}