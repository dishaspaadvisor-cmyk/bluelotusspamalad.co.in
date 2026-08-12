// app/about/page.tsx

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import GoogleMap from "@/components/GoogleMap";

import {
  FaArrowRight,
  FaCheck,
  FaLocationDot,
  FaPhone,
  FaSpa,
  FaWhatsapp,
} from "react-icons/fa6";

import ContactForm from "@/components/ContactForm";

import {
  aboutSEO,
  generateBreadcrumbSEO,
} from "@/data/seo";

import {
  siteData,
  phoneUrl,
  whatsappBookingUrl,
} from "@/data/site";

export const metadata: Metadata = {
  title: aboutSEO.title,
  description: aboutSEO.description,
  keywords: [...aboutSEO.keywords],

  alternates: {
    canonical: aboutSEO.canonical,
  },

  openGraph: {
    title: aboutSEO.title,
    description: aboutSEO.description,
    url: aboutSEO.canonical,
    type: "website",
  },
};

const highlights = [
  {
    id: 1,
    title: "Professional Therapists",
    description:
      "Experienced therapists focused on providing comfortable and professional massage and wellness treatments.",
  },
  {
    id: 2,
    title: "Peaceful Ambience",
    description:
      "A calm, clean and relaxing environment designed to help you unwind from your daily routine.",
  },
  {
    id: 3,
    title: "Multiple Therapies",
    description:
      "Choose from Full Body, Swedish, Thai, Deep Tissue, Aromatherapy, Oil and other premium massage therapies.",
  },
  {
    id: 4,
    title: "Convenient Malad Location",
    description:
      "Located at A Wing Solitaire II on New Link Road, opposite Infinity Mall in Malad West, Mumbai.",
  },
];

export default function AboutPage() {
  const breadcrumbSchema = generateBreadcrumbSEO([
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
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

      <section className="page-hero hero-1">
        <div className="site-container">
          <div className="max-w-[850px]">
            <div className="breadcrumb">
              <Link href="/">
                Home
              </Link>

              <span>/</span>

              <span>
                About
              </span>
            </div>

            <p className="section-label">
              About Blue Lotus Spa
            </p>

            <h1 className="page-hero-title">
              A Premium Spa Experience in Malad West
            </h1>

            <p className="page-hero-description">
              Discover Blue Lotus Spa Malad, a relaxing wellness destination in
              Malad West offering professional massage therapies in a peaceful
              and comfortable environment.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================
          ABOUT INTRO
      ========================================== */}

      <section className="section section-white">
        <div className="site-container">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            {/* =====================================
                IMAGE
            ====================================== */}

            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[30px] bg-[var(--soft-cream)] shadow-[0_24px_65px_rgba(87,65,39,0.11)] sm:aspect-[5/4] lg:aspect-[4/5]" style={{ position: "relative" }}>
                <Image
                  src="/images/hero-1.png"
                  alt="Blue Lotus Spa Malad premium spa interior"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#493622]/20 via-transparent to-transparent" />
              </div>

              {/* Floating Card */}

              <div className="absolute -bottom-6 left-4 max-w-[285px] rounded-[22px] border border-white/80 bg-white/95 p-5 shadow-[0_15px_40px_rgba(75,55,35,0.13)] backdrop-blur sm:left-8">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--cream)] text-[#a87a3a]">
                    <FaSpa className="text-[16px]" />
                  </span>

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[1.8px] text-[#ae8045]">
                      Blue Lotus Spa
                    </p>

                    <p className="mt-1 font-serif text-[20px] font-semibold text-[var(--foreground)]">
                      Relax. Refresh. Rejuvenate.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* =====================================
                CONTENT
            ====================================== */}

            <div>
              <p className="section-label">
                Welcome To Blue Lotus
              </p>

              <h2 className="section-title">
                A peaceful wellness destination in the heart of Malad
              </h2>

              <p className="mt-6 text-[15px] leading-8 text-[var(--muted-text)]">
                Blue Lotus Spa Malad offers a relaxing and comfortable wellness
                experience for guests looking to take a break from everyday
                stress and busy routines.
              </p>

              <p className="mt-4 text-[15px] leading-8 text-[var(--muted-text)]">
                Located in Malad West, Mumbai, our spa provides a range of
                massage therapies including Full Body Massage, Swedish Massage,
                Thai Massage, Deep Tissue Massage, Aromatherapy, Oil Massage,
                Four Hand Massage and other premium wellness treatments.
              </p>

              <p className="mt-4 text-[15px] leading-8 text-[var(--muted-text)]">
                Our focus is on creating a calm atmosphere, maintaining a
                comfortable spa environment and offering professional service
                throughout your visit.
              </p>

              {/* Checklist */}

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {[
                  "Professional spa environment",
                  "Comfortable treatment rooms",
                  "Multiple massage therapies",
                  "Easy appointment booking",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#f7eee1] text-[var(--gold-dark)]">
                      <FaCheck className="text-[9px]" />
                    </span>

                    <span className="text-[13px] font-medium text-[#665a4e]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/services"
                  className="btn-primary"
                >
                  Explore Services

                  <FaArrowRight className="text-[10px]" />
                </Link>

                <a
                  href={whatsappBookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp"
                  aria-label="WhatsApp Blue Lotus Spa Malad"
                >
                  <FaWhatsapp className="text-[17px]" />

                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          WHY CHOOSE US
      ========================================== */}

      <section className="section section-cream">
        <div className="site-container">
          <div className="mx-auto max-w-[760px] text-center">
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[2.5px] text-[var(--gold-dark)]">
              Why Blue Lotus Spa
            </p>

            <h2 className="section-title mx-auto">
              Designed around comfort and relaxation
            </h2>

            <p className="section-description mx-auto">
              We focus on creating a comfortable spa experience from the
              moment you arrive until the end of your session.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item, index) => (
              <article
                key={item.id}
                className="rounded-[24px] border border-[var(--border)] bg-white p-6 shadow-[0_10px_32px_rgba(87,65,39,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_42px_rgba(87,65,39,0.09)]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--cream)] font-serif text-[16px] font-semibold text-[#a77a3c]">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3 className="mt-5 font-serif text-[21px] font-semibold leading-[1.25] text-[var(--foreground)]">
                  {item.title}
                </h3>

                <p className="mt-3 text-[13px] leading-6 text-[var(--muted-text)]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          SPA EXPERIENCE
      ========================================== */}

      <section className="section section-white">
        <div className="site-container">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
            {/* CONTENT */}

            <div>
              <p className="section-label">
                Our Experience
              </p>

              <h2 className="section-title">
                Your time to relax, recharge and feel refreshed
              </h2>

              <p className="mt-6 text-[15px] leading-8 text-[var(--muted-text)]">
                A spa visit should feel calm from the moment you enter. Our
                environment is designed to help you disconnect from a busy
                routine and enjoy your chosen massage therapy comfortably.
              </p>

              <p className="mt-4 text-[15px] leading-8 text-[var(--muted-text)]">
                Whether you prefer a gentle Swedish Massage, traditional Thai
                Massage, relaxing Aromatherapy or a stronger Deep Tissue
                experience, our service range gives you multiple options based
                on your preferences.
              </p>

              <div className="mt-8 rounded-[22px] border border-[var(--border)] bg-[var(--ivory)] p-5">
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-[var(--gold-dark)] shadow-sm">
                    <FaLocationDot className="text-[15px]" />
                  </span>

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[1.8px] text-[#ad8148]">
                      Convenient Malad West Location
                    </p>

                    <p className="mt-2 text-[13px] leading-6 text-[#665a4e]">
                      {siteData.address.full}
                    </p>

                    <a
                      href={siteData.location.directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-2 text-[12px] font-bold text-[#976b34]"
                    >
                      Get Directions

                      <FaArrowRight className="text-[9px]" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* IMAGE GRID */}

            <div className="grid grid-cols-2 gap-4">
              <div className="relative mt-8 aspect-[4/5] overflow-hidden rounded-[24px] bg-[var(--soft-cream)]" style={{ position: "relative" }}>
                <Image
                  src="/images/hero-3.png"
                  alt="Relaxing spa environment at Blue Lotus Spa Malad"
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>

              <div className="relative aspect-[4/5] overflow-hidden rounded-[24px] bg-[var(--soft-cream)]" style={{ position: "relative" }}>
                <Image
                  src="/images/hero-2.png"
                  alt="Premium massage room at Blue Lotus Spa Malad"
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          CONTACT FORM
      ========================================== */}

      <section className="section section-soft">
        <div className="site-container">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-14">
            {/* LEFT */}

            <div className="lg:sticky lg:top-32">
              <p className="section-label">
                Plan Your Visit
              </p>

              <h2 className="section-title">
                Ready for your next relaxation session?
              </h2>

              <p className="section-description">
                Send us your details and our team can help you check available
                spa services and appointment timings.
              </p>

              <div className="mt-7 space-y-3">
                <a
                  href={phoneUrl}
                  className="flex items-center gap-4 rounded-[18px] border border-[var(--border)] bg-white p-4"
                  aria-label="Call Blue Lotus Spa Malad"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--cream)] text-[var(--gold-dark)]">
                    <FaPhone className="text-[13px]" />
                  </span>

                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[1.6px] text-[#ad8757]">
                      Call Blue Lotus Spa
                    </p>

                    <p className="mt-1 text-[14px] font-semibold text-[#55493e]">
                      {siteData.contact.phone}
                    </p>
                  </div>
                </a>

                <a
                  href={whatsappBookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-[18px] border border-[#dceade] bg-[#f6fbf7] p-4"
                  aria-label="WhatsApp Blue Lotus Spa Malad"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#269b52]">
                    <FaWhatsapp className="text-[17px]" />
                  </span>

                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[1.6px] text-[#57906a]">
                      WhatsApp
                    </p>

                    <p className="mt-1 text-[14px] font-semibold text-[#43584a]">
                      Check Appointment Availability
                    </p>
                  </div>
                </a>
              </div>
            </div>

            {/* REUSABLE FORM */}

            <ContactForm
              title="Plan Your Relaxation"
              subtitle="Share your details and our team will contact you regarding available massage therapies and appointment timings."
              sourceLabel="About Page"
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
    </>
  );
}
