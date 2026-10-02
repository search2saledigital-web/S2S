
"use client";

import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import {
    FiX,
    FiChevronDown,
    FiArrowRight,
    FiZap,
} from "react-icons/fi";

export default function Popup({ isOpen, onClose }) {
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
            !formData.phone
        ) {
            toast.error("Please fill all required fields.");
            return;
        }

        try {
            setLoading(true);

            const response = await axios.post("/api/form", formData);

            if (response.data.success) {
                toast.success(
                    "Thanks! Our team will get back to you soon."
                );

                setFormData({
                    name: "",
                    phone: "",
                    email: "",
                    product: "",
                    place: "",
                    priceRange: "",
                    message: "",
                });

                onClose?.();
            }
        } catch (error) {
            console.error("Form submission error:", error);

            toast.error(
                error?.response?.data?.message ||
                "Something went wrong. Please try again."
            );
        } finally {
            setLoading(false);
        }
    };

    if (!isOpen) return null;

    const inputClass = `
        w-full rounded-xl
        border border-slate-700
        bg-slate-900/80
        px-4 py-3.5
        text-sm text-white
        placeholder:text-slate-500
        outline-none
        transition-all duration-300
        focus:border-orange-400
        focus:ring-2 focus:ring-orange-400/10
    `;

    return (
        <div
            className="fixed overflow-hidden inset-0 z-[9999] flex items-center justify-center bg-black/75 px-3 py-4 backdrop-blur-md sm:px-5"
            onClick={onClose}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className="
                    relative w-full max-w-xl
                    max-h-[92vh] overflow-hidden
                    rounded-3xl
                    border border-slate-700/80
                    bg-[#080e20]
                    shadow-2xl shadow-black/50
                    animate-[popupIn_0.35s_ease-out]
                "
            >
                {/* Background Glow */}
                <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-orange-500/15 blur-[100px]" />

                <div className="relative p-5 sm:p-8 md:p-10">

                    {/* Close Button */}
                    <button
                        type="button"
                        onClick={onClose}
                        aria-label="Close popup"
                        className="
                            absolute right-4 top-4
                            flex h-9 w-9 items-center justify-center
                            rounded-full border border-slate-700
                            bg-slate-800/80 text-slate-300
                            transition-all duration-300
                            hover:rotate-90 hover:border-orange-400
                            hover:bg-orange-500 hover:text-white
                        "
                    >
                        <FiX size={18} />
                    </button>

                    {/* Header */}
                    <div className="mb-7 pr-8">
                        {/* <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-400/20 bg-orange-400/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-orange-400">
                            <FiZap />
                            Your Growth Starts Here
                        </div> */}

                        <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-4xl">
                            Get Free{" "}
                            <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
                                Consultation
                            </span>
                        </h2>

                        <p className="mt-3 max-w-lg text-sm leading-relaxed text-slate-400">
                            Tell us about your business requirements.
                            Our experts will help you find the right
                            digital marketing solution.
                        </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-4">

                        {/* Name + Phone */}
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your Name *"
                                className={inputClass}
                            />

                            <input
                                type="tel"
                                maxLength={10}
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="Phone Number *"
                                className={inputClass}
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
                                className={inputClass}
                            />

                            <div className="relative">
                                <select
                                    name="product"
                                    value={formData.product}
                                    onChange={handleChange}
                                    className={`${inputClass} appearance-none ${!formData.product
                                        ? "text-slate-500"
                                        : "text-white"
                                        }`}
                                >
                                    <option value="" disabled>
                                        Select Service
                                    </option>
                                    <option value="SEO Services">SEO Services</option>
                                    <option value="Google Business Profile Optimization">
                                        Google Business Profile Optimization
                                    </option>
                                    <option value="Website Development">
                                        Website Development
                                    </option>
                                    <option value="Google Ads & PPC">
                                        Google Ads & PPC
                                    </option>
                                    <option value="Meta Ads">Meta Ads</option>
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

                                <FiChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" />
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
                                className={inputClass}
                            />

                            <div className="relative">
                                <select
                                    name="priceRange"
                                    value={formData.priceRange}
                                    onChange={handleChange}
                                    className={`${inputClass} appearance-none ${!formData.priceRange
                                        ? "text-slate-500"
                                        : "text-white"
                                        }`}
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

                                <FiChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" />
                            </div>
                        </div>

                        {/* Message */}
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Tell us about your requirements"
                            rows={3}
                            className={`${inputClass} resize-none`}
                        />

                        {/* Submit */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="
                                group flex w-full items-center
                                justify-center gap-3
                                rounded-full
                                bg-gradient-to-r
                                from-orange-400 to-orange-500
                                px-6 py-4
                                text-sm font-bold text-white
                                shadow-lg shadow-orange-500/20
                                transition-all duration-300
                                hover:-translate-y-0.5
                                hover:from-orange-500
                                hover:to-orange-600
                                hover:shadow-orange-500/30
                                disabled:cursor-not-allowed
                                disabled:opacity-60
                            "
                        >
                            {loading
                                ? "Sending..."
                                : "Get Free Consultation"}

                            {!loading && (
                                <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                            )}
                        </button>

                        <p className="text-center text-xs text-slate-500">
                            Your information is safe with us.
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}