// app/contact/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import GoogleMap from "@/components/GoogleMap";

import {
  FaClock,
  FaEnvelope,
  FaLocationDot,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa6";

import ContactForm from "@/components/ContactForm";

import {
  contactSEO,
  generateBreadcrumbSEO,
} from "@/data/seo";

import {
  siteData,
  phoneUrl,
  emailUrl,
  whatsappBookingUrl,
} from "@/data/site";

export const metadata: Metadata = {
  title: contactSEO.title,
  description: contactSEO.description,
  keywords: [...contactSEO.keywords],

  alternates: {
    canonical: contactSEO.canonical,
  },

  openGraph: {
    title: contactSEO.title,
    description: contactSEO.description,
    url: contactSEO.canonical,
    type: "website",
  },
};

export default function ContactPage() {
  const breadcrumbSchema = generateBreadcrumbSEO([
    { name: "Home", url: "/" },
    { name: "Contact", url: "/contact" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      {/* =========================================
          PAGE HERO
      ========================================== */}

      <section className="page-hero hero-3">
        <div className="site-container">
          <div className="max-w-[820px]">
            <div className="breadcrumb">
              <Link href="/">
                Home
              </Link>

              <span>/</span>

              <span>
                Contact
              </span>
            </div>

            <p className="section-label">
              Contact Us
            </p>

            <h1 className="page-hero-title">
              Book Your Spa Experience in Malad
            </h1>

            <p className="page-hero-description">
              Contact Blue Lotus Spa Malad to check service availability,
              massage timings and book your preferred spa appointment in
              Malad West, Mumbai.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================
          CONTACT SECTION
      ========================================== */}

      <section className="section section-white">
        <div className="site-container">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
            {/* =====================================
                LEFT CONTACT INFO
            ====================================== */}

            <div>
              <p className="section-label">
                Get In Touch
              </p>

              <h2 className="section-title">
                We&apos;re here to help you relax
              </h2>

              <p className="section-description">
                Have a question about our massage therapies or want to check
                appointment availability? Call, WhatsApp or send us your
                details.
              </p>

              {/* Contact Cards */}

              <div className="mt-8 space-y-4">
                {/* PHONE */}

                <a
                  href={phoneUrl}
                  className="group flex items-start gap-4 rounded-[20px] border border-[var(--border-light)] bg-[var(--white)] p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#dbc5a5] hover:shadow-[0_10px_30px_rgba(87,65,39,0.06)]"
                  aria-label="Call Blue Lotus Spa Malad"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--cream)] text-[var(--gold-dark)]">
                    <FaPhone className="text-[14px]" />
                  </span>

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[1.8px] text-[#ac814a]">
                      Call Us
                    </p>

                    <p className="mt-1 text-[15px] font-semibold text-[#504338]">
                      {siteData.contact.phone}
                    </p>
                  </div>
                </a>

                {/* WHATSAPP */}

                <a
                  href={whatsappBookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4 rounded-[20px] border border-[#dbeadf] bg-[#f7fbf8] p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#bdd9c5]"
                  aria-label="WhatsApp Blue Lotus Spa Malad"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-[#269b52]">
                    <FaWhatsapp className="text-[19px]" />
                  </span>

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[1.8px] text-[#4d8f63]">
                      WhatsApp
                    </p>

                    <p className="mt-1 text-[15px] font-semibold text-[#405848]">
                      Chat With Blue Lotus Spa
                    </p>
                  </div>
                </a>

                {/* LOCATION */}

                <a
                  href={siteData.location.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4 rounded-[20px] border border-[var(--border-light)] bg-[var(--white)] p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#dbc5a5]"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--cream)] text-[var(--gold-dark)]">
                    <FaLocationDot className="text-[15px]" />
                  </span>

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[1.8px] text-[#ac814a]">
                      Visit Us
                    </p>

                    <p className="mt-1 max-w-[410px] text-[13px] leading-6 text-[#62564b]">
                      {siteData.address.full}
                    </p>
                  </div>
                </a>

                {/* EMAIL */}

                <a
                  href={emailUrl}
                  className="group flex items-start gap-4 rounded-[20px] border border-[var(--border-light)] bg-[var(--white)] p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#dbc5a5]"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--cream)] text-[var(--gold-dark)]">
                    <FaEnvelope className="text-[14px]" />
                  </span>

                  <div className="min-w-0">
                    <p className="text-[10px] font-bold uppercase tracking-[1.8px] text-[#ac814a]">
                      Email
                    </p>

                    <p className="mt-1 break-all text-[13px] font-semibold text-[#62564b]">
                      {siteData.contact.email}
                    </p>
                  </div>
                </a>

                {/* TIMINGS */}

                <div className="flex items-start gap-4 rounded-[20px] border border-[var(--border-light)] bg-[var(--white)] p-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--cream)] text-[var(--gold-dark)]">
                    <FaClock className="text-[14px]" />
                  </span>

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[1.8px] text-[#ac814a]">
                      Opening Hours
                    </p>

                    <p className="mt-1 text-[13px] font-semibold text-[#62564b]">
                      {siteData.timings.display}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* =====================================
                RIGHT CONTACT FORM
            ====================================== */}

            <ContactForm
              title="Request an Appointment"
              subtitle="Share your contact details and our team will get in touch with you regarding available services and appointment timings."
              sourceLabel="Contact Page"
            />
          </div>
        </div>
      </section>

      {/* =========================================
          GOOGLE MAP
      ========================================== */}

      <section className="pb-14 sm:pb-16 lg:pb-20">
        <div className="site-container">
          <GoogleMap />
        </div>
      </section>

      {/* =========================================
          LOCATION CTA
      ========================================== */}

      <section className="pb-16 lg:pb-20">
        <div className="site-container">
          <div className="rounded-[28px] border border-[var(--border)] bg-gradient-to-r from-[#fbf5ec] via-white to-[var(--cream)] px-6 py-9 sm:px-8 lg:flex lg:items-center lg:justify-between lg:px-10">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[2.2px] text-[var(--gold-dark)]">
                Conveniently Located
              </p>

              <h2 className="mt-2 font-serif text-[28px] font-semibold text-[var(--foreground)] sm:text-[32px]">
                Visit Blue Lotus Spa in Malad West
              </h2>

              <p className="mt-2 max-w-[700px] text-[13px] leading-6 text-[var(--muted-text)]">
                CTS No. 269, A-3, Unit 1, A Wing Solitaire II, New Link Rd,
                Opp. Infinity Mall, Malad West, Mumbai, Maharashtra 400064.
              </p>
            </div>

            <a
              href={siteData.location.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-6 lg:mt-0"
            >
              <FaLocationDot className="text-[12px]" />

              Get Directions
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
