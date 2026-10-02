"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { CalendarDays, ArrowUpRight } from "lucide-react";

export default function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);

        const { data } = await axios.get("/api/blog");
        console.log(data);

        setBlogs(Array.isArray(data) ? data : data.blogs || []);
      } catch (err) {
        console.error("Failed to fetch blogs:", err);
        setError("Unable to load blogs. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const formatDate = (date) => {
    if (!date) return "";

    return new Date(date).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <section className="min-h-screen bg-[#020618]">
      {/* Heading */}
      <div className="text-center border border-white/10 py-15">
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#ec6a06]">
          Our Blog
        </span>

        <h1 className="mt-4 text-4xl md:text-6xl font-bold text-white">
          Insights That Drive{" "}
          <span className="text-[#ec6a06]">Growth</span>
        </h1>

        <p className="mt-5 text-white/60 leading-7">
          Explore our latest insights, digital marketing strategies,
          industry trends, and tips to grow your business online.
        </p>
      </div>

      <div className="max-w-[1280px] mx-auto px-4 py-10 md:px-8 lg:px-16 xl:px-10">
        {/* Loading */}
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="animate-pulse rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden"
              >
                <div className="h-56 bg-white/5" />
                <div className="p-6 space-y-4">
                  <div className="h-4 w-1/3 rounded bg-white/10" />
                  <div className="h-6 w-full rounded bg-white/10" />
                  <div className="h-4 w-full rounded bg-white/10" />
                  <div className="h-4 w-2/3 rounded bg-white/10" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Error */}
        {!loading && error && (
          <p className="text-center text-red-400">{error}</p>
        )}

        {/* Empty */}
        {!loading && !error && blogs.length === 0 && (
          <p className="text-center text-white/50">
            No blogs available at the moment.
          </p>
        )}

        {/* Blog Cards */}
        {!loading && !error && blogs.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {blogs.map((blog) => (
              <article
                key={blog._id || blog.id}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-all duration-300 hover:-translate-y-1 hover:border-[#ec6a06]/50"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden bg-white/5">
                  {blog.image || blog.thumbnail ? (
                    <img
                      src={blog.image || blog.thumbnail}
                      alt={blog.title || "Blog image"}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-white/20">
                      No Image
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="px-4 py-3">
                  <div className="flex items-center gap-2 text-xs text-white/45">
                    <CalendarDays size={14} />
                    <span>
                      {formatDate(blog.createdAt || blog.date)}
                    </span>
                  </div>

                  <h2 className="mt-2 text-xl font-bold leading-snug text-white transition-colors group-hover:text-[#ec6a06]">
                    {blog.title}
                  </h2>

                  <Link
                    href={`/our-blogs/${blog.slug || blog._id}`}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#ec6a06] transition-all hover:gap-3"
                  >
                    Read More
                    <ArrowUpRight size={17} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}