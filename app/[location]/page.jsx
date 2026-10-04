import { notFound } from "next/navigation";
import { locations } from "../../data";
import Location from "./Location";

const SITE_URL = "https://search2saledigital.com";

function getLocation(slug) {
  return locations.find((location) => location.href === `/${slug}`);
}

function getDescription(city) {
  return `SEO, Google Ads, social media, local SEO and lead generation in ${city}. Build visibility and win better leads with Search 2 Sale Digital.`;
}

export function generateStaticParams() {
  return locations.map(({ href }) => ({
    location: href.slice(1),
  }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }) {
  const { location: slug } = await params;
  const location = getLocation(slug);

  if (!location) {
    return {
      title: "Digital Marketing Services | Search 2 Sale Digital",
      description:
        "SEO, paid advertising, social media marketing and lead generation from Search 2 Sale Digital.",
      robots: { index: false, follow: false },
    };
  }

  const title = `Digital Marketing Services in ${location.name} | Search 2 Sale Digital`;
  const description = getDescription(location.name);
  const url = `${SITE_URL}${location.href}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: "Search 2 Sale Digital",
      type: "website",
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}

export default async function LocationPage({ params }) {
  const { location: slug } = await params;
  const location = getLocation(slug);

  if (!location) {
    notFound();
  }

  return <Location city={location.name} />;
}
