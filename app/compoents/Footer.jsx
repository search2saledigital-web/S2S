import Link from "next/link";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaPhoneAlt,
} from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { IoArrowForward } from "react-icons/io5";

const footerLinks = {
  Services: [
    "Google Ads",
    "Meta Ads",
    "SEO Services",
    "Website Development",
    "Lead Generation",
    "Analytics & Tracking",
  ],
  Industries: [
    "Real Estate",
    "Healthcare",
    "Education",
    "E-commerce",
    "Finance",
    "Automotive",
  ],
  Company: ["About Us", "Our Process", "Case Studies", "Careers", "Blog"],
};

const socialLinks = [
  { icon: FaFacebookF, href: "#", label: "Facebook" },
  { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
  { icon: FaInstagram, href: "#", label: "Instagram" },
  { icon: FaYoutube, href: "#", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0b1220] text-slate-300">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-10">
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          
          {/* Brand */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-md bg-gradient-to-br from-orange-500 to-pink-500 text-lg font-bold text-white">
                S2
              </span>
              <span className="text-lg font-semibold text-white">
                Search 2sale digital
              </span>
            </div>

            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
              We help businesses grow online with result-driven digital
              marketing strategies that deliver measurable results.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-slate-300 transition-colors hover:bg-orange-500 hover:text-white"
                >
                  <Icon size={16} />
                </Link>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="col-span-1">
              <h3 className="text-sm font-semibold text-white">{title}</h3>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-sm text-slate-400 transition-colors hover:text-orange-400"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div className="col-span-2 sm:col-span-1">
            <h3 className="text-sm font-semibold text-white">Contact Us</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-2">
                <FaPhoneAlt
                  size={16}
                  className="mt-0.5 shrink-0 text-orange-400"
                />
                <span>+91 98765 43210</span>
              </li>

              <li className="flex items-start gap-2">
                <MdEmail
                  size={16}
                  className="mt-0.5 shrink-0 text-orange-400"
                />
                <span className="break-all">
                  info@search2saledigital.com
                </span>
              </li>

              <li className="flex items-start gap-2">
                <MdLocationOn
                  size={16}
                  className="mt-0.5 shrink-0 text-orange-400"
                />
                <span>
                  B-45, Sector 63, Noida, Uttar Pradesh, India
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          {/* <div className="col-span-2 sm:col-span-2 lg:col-span-1">
            <h3 className="text-sm font-semibold text-white">Newsletter</h3>
            <p className="mt-4 text-sm text-slate-400">
              Subscribe to our newsletter for latest updates and offers.
            </p>

            <form className="mt-4 flex flex-col gap-2 sm:flex-row lg:flex-col">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-slate-500 outline-none focus:border-orange-400"
              />

              <button
                type="submit"
                className="flex items-center justify-center gap-1 rounded-md bg-orange-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-orange-600"
              >
                Subscribe
                <IoArrowForward size={14} />
              </button>
            </form>
          </div> */}
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row">
          <p>© 2026 Search2sale Digital. All Rights Reserved.</p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="#" className="hover:text-orange-400">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-orange-400">
              Terms & Conditions
            </Link>
            <Link href="#" className="hover:text-orange-400">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}