"use client";

import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { FiPlus, FiChevronDown, FiArrowRight } from "react-icons/fi";

const FAQS = [
  {
    question: "What services does Search2Sale Digital provide?",
    answer:
      "Search2Sale Digital provides complete digital marketing solutions, including SEO, Google Ads, Meta Ads, social media marketing, website design and development, local SEO, Google Business Profile optimization, content marketing, and lead generation.",
  },
  {
    question:
      "Is Search2Sale Digital a digital marketing agency in Delhi?",
    answer:
      "Yes. Search2Sale Digital is a digital marketing agency in Delhi helping startups, local businesses, and established brands improve their online visibility, generate quality leads, and grow their business.",
  },
  {
    question: "How can digital marketing help my business?",
    answer:
      "Digital marketing can help your business reach more potential customers, improve online visibility, generate leads, increase website traffic, build brand awareness, and increase sales through targeted online strategies.",
  },
  {
    question: "How long does SEO take to show results?",
    answer:
      "SEO is a long-term marketing strategy. The time required to see noticeable results depends on factors such as your website, industry competition, keywords, location, and the SEO strategy being implemented.",
  },
  {
    question: "Do you provide SEO services in Delhi?",
    answer:
      "Yes. We provide customized SEO services in Delhi designed to improve search engine visibility, attract relevant organic traffic, and generate potential customers for your business.",
  },
 
 
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    product: "",
    place: "",
    priceRange: "",
    message: "",
  });

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
    <section
      id="faq"
      className="w-full bg-[#020618] px-4 py-12 sm:px-6 md:py-16 lg:px-10 lg:py-20 xl:px-16"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
        {/* ================= FAQ ================= */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-5 sm:p-7 lg:p-8">
          {/* Heading */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-400 sm:text-sm">
              Frequently Asked Questions
            </span>

            <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
              Frequently Asked Questions
            </h2>

            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              Find answers to common questions about our digital marketing
              services and how we can help your business grow.
            </p>
          </div>

          {/* FAQ List */}
          <div className="mt-7 space-y-3">
            {FAQS.map(({ question, answer }, i) => {
              const isOpen = openIndex === i;

              return (
                <div
                  key={question}
                  className="
                    overflow-hidden
                    rounded-xl
                    border border-slate-800
                    bg-slate-900/70
                    transition-all duration-300
                    hover:border-slate-700
                  "
                >
                  {/* Question */}
                  <button
                    type="button"
                    onClick={() => toggle(i)}
                    aria-expanded={isOpen}
                    className="
                      flex w-full
                      items-center justify-between
                      gap-4
                      px-4 py-4
                      text-left
                      text-sm font-medium
                      text-slate-200
                      transition-colors
                      hover:text-white
                      sm:px-5
                    "
                  >
                    <span>{question}</span>

                    <span
                      className="
                        flex h-7 w-7 shrink-0
                        items-center justify-center
                        rounded-full
                        bg-orange-500/10
                      "
                    >
                      <FiPlus
                        className={`
                          h-4 w-4
                          text-orange-400
                          transition-transform duration-300
                          ${isOpen ? "rotate-45" : ""}
                        `}
                      />
                    </span>
                  </button>

                  {/* Answer */}
                  <div
                    className={`
                      grid transition-all duration-300 ease-in-out
                      ${
                        isOpen
                          ? "grid-rows-[1fr]"
                          : "grid-rows-[0fr]"
                      }
                    `}
                  >
                    <div className="overflow-hidden">
                      <p className="px-4 pb-5 text-sm leading-6 text-slate-400 sm:px-5">
                        {answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ================= CONSULTATION FORM ================= */}
        <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50 p-5 sm:p-7 lg:p-8">
          {/* Background Glow */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-orange-500/10 blur-3xl" />

          <div className="relative">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-400 sm:text-sm">
              Your Growth Starts Here
            </span>

            <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
              Get Free Consultation
            </h2>

            <p className="mt-3 max-w-lg text-sm leading-relaxed text-slate-400">
             Don't let your competitors get all the online customers.
            </p>

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
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}