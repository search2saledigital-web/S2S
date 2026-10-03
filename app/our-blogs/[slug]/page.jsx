import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { CalendarDays, ArrowLeft } from "lucide-react";

export const dynamic = "force-dynamic";

const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "" || "https://search2saledigital.com";

async function getBlog(slug) {
  try {
    const url = `${API_URL.replace(/\/$/, "")}/api/blog?slug=${encodeURIComponent(slug)}`;

    console.log("Fetching blog:", url);

    const res = await fetch(url, {
      cache: "no-store",
      headers: {
        Accept: "application/json",
      },
    });

    if (!res.ok) {
      console.error("Blog API Error:", res.status, res.statusText);
      return null;
    }

    const data = await res.json();

    const blog = data.blog || data.data?.blog || data;

    if (!blog || !blog.title || !blog.slug) {
      console.error("Invalid blog response:", data);
      return null;
    }

    return blog;
  } catch (error) {
    console.error("Blog fetch error:", error);
    return null;
  }
}

/* SEO METADATA */
export async function generateMetadata({ params }) {
  const { slug } = await params;

  const blog = await getBlog(slug);

  if (!blog) {
    return {
      title: "Blog Not Found | Search2Sale Digital",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const title = blog.metaTitle || `${blog.title} | Search2Sale Digital`;

  const description =
    blog.metaDescription ||
    blog.content?.replace(/<[^>]*>/g, "").slice(0, 160) ||
    blog.title;

  const image = blog.thumbnail;

  return {
    title,
    description,

    alternates: {
      canonical: `https://search2saledigital.com/blog/${blog.slug}`,
    },

    openGraph: {
      title,
      description,
      url: `https://search2saledigital.com/blog/${blog.slug}`,
      siteName: "Search2Sale Digital",
      type: "article",
      publishedTime: blog.date || undefined,

      images: image
        ? [
            {
              url: image,
              width: 1200,
              height: 630,
              alt: blog.title,
            },
          ]
        : [],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: image ? [image] : [],
    },
  };
}

export default async function BlogDetails({ params }) {
  const { slug } = await params;

  const blog = await getBlog(slug);

  if (!blog) {
    notFound();
  }

  const parsedDate = blog.date ? new Date(blog.date) : null;

  const validDate =
    parsedDate && !Number.isNaN(parsedDate.getTime());

  const formattedDate = validDate
    ? parsedDate.toLocaleDateString("en-IN", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : null;

  return (
    <main className="min-h-screen bg-[#020618] text-white">

      {/* BLOG HEADER */}
      <section className="py-10">
        <div className="max-w-[1000px] mx-auto px-6">

          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-[#ec6a06] transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Blogs
          </Link>

          {formattedDate && (
            <div className="mt-8 flex items-center gap-2 text-sm text-[#ec6a06]">
              <CalendarDays size={16} />

              <time dateTime={parsedDate.toISOString()}>
                {formattedDate}
              </time>
            </div>
          )}

          <h1 className="mt-5 text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
            {blog.title}
          </h1>
        </div>
      </section>

      {/* THUMBNAIL */}
      {blog.thumbnail && (
        <section className="max-w-[1100px] mx-auto px-6">
          <div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl border border-white/10 bg-white/5">

            <Image
              src={blog.thumbnail}
              alt={blog.title || "Blog Thumbnail"}
              fill
              priority
              unoptimized
              sizes="(max-width: 768px) 100vw, 1100px"
              className="object-cover"
            />

          </div>
        </section>
      )}

      {/* BLOG CONTENT */}
      <article className="max-w-[850px] mx-auto px-6 py-12 md:py-16">

        <div
          className="blog-content text-white/70 text-base md:text-lg leading-8"
          dangerouslySetInnerHTML={{
            __html: blog.content || "",
          }}
        />

        <div className="mt-14 border-t border-white/10 pt-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-full bg-[#ec6a06] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#d95e00]"
          >
            <ArrowLeft size={16} />
            Explore More Blogs
          </Link>
        </div>

      </article>
    </main>
  );
}