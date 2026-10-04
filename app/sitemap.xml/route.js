import connectDB from "@/lib/mongodb";
import Blog from "@/model/Blog";
import { locations } from "../../data";

const BASE_URL = "https://search2saledigital.com";

const STATIC_PATHS = [
  "/",
  "/about",
//   "/portfolio",
  "/contact",
  "/our-blogs",
  "/services/branding",
  "/services/content-creative",
  "/services/paid-marketing",
  "/services/performance-marketing",
  "/services/seo",
  "/services/social-media-marketing",
  "/services/web-dev",
  ...locations.map(({ href }) => href),
];

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function escapeXml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function formatUrl(location, lastModified) {
  const lastmod = lastModified
    ? `\n    <lastmod>${lastModified.toISOString()}</lastmod>`
    : "";

  return `  <url>\n    <loc>${escapeXml(location)}</loc>${lastmod}\n  </url>`;
}

export async function GET() {
  await connectDB();

  const blogs = await Blog.find({ slug: { $type: "string", $ne: "" } })
    .select("slug updatedAt date")
    .lean();

  const staticUrls = STATIC_PATHS.map((path) =>
    formatUrl(`${BASE_URL}${path}`)
  );
  const blogUrls = blogs.map((blog) => {
    const slug = encodeURIComponent(blog.slug);
    const lastModified = blog.updatedAt || blog.date;

    return formatUrl(
      `${BASE_URL}/our-blogs/${slug}`,
      lastModified ? new Date(lastModified) : undefined
    );
  });

  const sitemap = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...staticUrls,
    ...blogUrls,
    "</urlset>",
  ].join("\n");

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
}