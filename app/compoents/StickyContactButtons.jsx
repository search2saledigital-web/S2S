import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

export default function StickyContactButtons() {
  return (
    <div className="fixed bottom-6 right-5 z-50 flex flex-col gap-3 sm:bottom-8 sm:right-8">
      <a
        href="https://wa.me/918506938033"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="sticky-contact-whatsapp inline-flex items-center gap-3 rounded-full bg-green-600 px-4 py-3 font-semibold text-white shadow-lg transition-transform duration-200 hover:scale-105 hover:bg-green-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-600"
      >
        <span className="rounded-full bg-white p-1">
          <FaWhatsapp
            size={18}
            className="text-green-600"
            aria-hidden="true"
          />
        </span>
        <span className="text-sm">WhatsApp</span>
      </a>
      <a
        href="tel:+918506938033"
        aria-label="Call us at +91 85069 38033"
        className="sticky-contact-call inline-flex items-center gap-3 rounded-full bg-red-600 px-4 py-3 font-semibold text-white shadow-lg transition-transform duration-200 hover:scale-105 hover:bg-red-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-600"
      >
        <FaPhoneAlt size={19} aria-hidden="true" />
        <span className="text-sm">Call Us</span>
      </a>
    </div>
  );
}
