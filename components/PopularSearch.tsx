// components/PopularSearch.tsx

import {
  FaWhatsapp,
  FaArrowRight,
  FaLocationDot,
} from "react-icons/fa6";

import { siteData } from "@/data/site";

const keywords = [
  "Best Spa in Malad",
  "Spa in Malad West",
  "Massage in Malad",
  "Massage in Malad West",
  "Body Massage in Malad",
  "Full Body Massage in Malad",
  "Spa near Infinity Mall",
  "Massage near Infinity Mall",
  "Spa on Link Road Malad",
  "Massage Center in Malad West",
  "Swedish Massage in Malad",
  "Deep Tissue Massage in Malad",
  "Thai Massage in Malad",
  "Balinese Massage in Malad",
  "Aromatherapy Massage in Malad",
  "Oil Massage in Malad",
  "Four Hand Massage in Malad",
  "Couples Massage in Malad",
  "Lomi Lomi Massage in Malad",
  "Chocolate Massage in Malad",
  "Hot Stone Massage in Malad",
  "Foot Massage in Malad",
  "Jacuzzi Spa in Malad",
  "Spa in Malad Mumbai",
];

export default function PopularSearch() {
  const createWhatsAppUrl = (keyword: string) => {
    const message = `Hi Blue Lotus Spa Malad, I am interested in ${keyword}. Please share details and available timings.`;

    return `https://wa.me/${
      siteData.contact.whatsapp
    }?text=${encodeURIComponent(message)}`;
  };

  return (
    <section className="section lux-ivory-bg">
      <div className="site-container">
        {/* =========================================
            HEADER
        ========================================== */}

        <div className="mx-auto max-w-[820px] text-center">
          <div className="mb-3 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[2.4px] lux-gold">
            <FaLocationDot className="text-[11px]" />
            Malad Wellness Searches
          </div>

          {/* H2 — homepage should already have H1 in Hero */}

          <h2 className="mx-auto max-w-[780px] font-serif text-[32px] font-semibold leading-[1.15] lux-espresso sm:text-[40px] lg:text-[46px]">
            Popular Spa & Massage Searches in Malad
          </h2>

          <p className="mx-auto mt-4 max-w-[720px] text-[14px] leading-7 lux-muted sm:text-[15px]">
            Looking for a spa or massage service in Malad West? Explore popular
            wellness searches around Infinity Mall, New Link Road and nearby
            areas, and contact Blue Lotus Spa Malad directly on WhatsApp.
          </p>
        </div>

        {/* =========================================
            KEYWORD LIST
        ========================================== */}

        <div className="mt-9 flex flex-wrap justify-center gap-2.5 sm:gap-3">
          {keywords.map((keyword) => (
            <a key={keyword} href={createWhatsAppUrl(keyword)} target="_blank" rel="noopener noreferrer" aria-label={`WhatsApp Blue Lotus Spa Malad about ${keyword}`} className="lux-badge">
              <span>{keyword}</span>
              <FaWhatsapp className="text-[14px] lux-emerald" />
            </a>
          ))}
        </div>

        {/* =========================================
            BOTTOM CONTENT
        ========================================== */}

        <div className="mx-auto mt-9 max-w-[900px] rounded-[24px] border border-[var(--border)] bg-white p-5 sm:p-7">
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <h3 className="font-serif text-[23px] font-semibold text-[var(--foreground)] sm:text-[27px]">
                Spa & Massage Services in Malad West, Mumbai
              </h3>

              <p className="mt-3 max-w-[700px] text-[13px] leading-6 text-[var(--muted-text)] sm:text-[14px]">
                Blue Lotus Spa Malad is located at A Wing Solitaire II on New
                Link Road, opposite Infinity Mall in Malad West, Mumbai.
                Explore our massage services or message us to check available
                timings.
              </p>
            </div>

            <a
              href={`https://wa.me/${
                siteData.contact.whatsapp
              }?text=${encodeURIComponent(
                "Hi Blue Lotus Spa Malad, I would like to know about your spa and massage services in Malad West. Please share details and available timings."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-[#269b52] px-5 text-[12px] font-bold text-white shadow-[0_8px_22px_rgba(38,155,82,0.16)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#218947] sm:text-[13px]"
            >
              <FaWhatsapp className="text-[17px]" />

              WhatsApp

              <FaArrowRight className="text-[9px]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}