// app/gallery/page.tsx

import type { Metadata } from "next";

import Link from "next/link";

import {
  FaArrowRight,
  FaLocationDot,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa6";

import GalleryImageView from "@/components/GalleryImageView";
import { galleryImages } from "@/data/gallery";
import {
  gallerySEO,
  generateBreadcrumbSEO,
} from "@/data/seo";

import {
  siteData,
  phoneUrl,
  whatsappBookingUrl,
} from "@/data/site";

export const metadata: Metadata = {
  title: gallerySEO.title,
  description: gallerySEO.description,
  keywords: [...gallerySEO.keywords],

  alternates: {
    canonical: gallerySEO.canonical,
  },

  openGraph: {
    title: gallerySEO.title,
    description: gallerySEO.description,
    url: gallerySEO.canonical,
    type: "website",
  },
};

export default function GalleryPage() {
  const breadcrumbSchema = generateBreadcrumbSEO([
    { name: "Home", url: "/" },
    { name: "Gallery", url: "/gallery" },
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
              <Link href="/">Home</Link>

              <span>/</span>

              <span>Gallery</span>
            </div>

            <p className="section-label">
              Blue Lotus Gallery
            </p>

            <h1 className="page-hero-title">
              Explore Our Spa in Malad West
            </h1>

            <p className="page-hero-description">
              Take a look inside Blue Lotus Spa Malad and explore our peaceful
              ambience, relaxing treatment rooms and comfortable wellness
              spaces in Malad West, Mumbai.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href={phoneUrl}
                className="btn-primary"
                aria-label="Call Blue Lotus Spa Malad"
              >
                <FaPhone className="text-[12px]" />

                Book Appointment
              </a>

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
      </section>

      {/* =========================================
          INTRO
      ========================================== */}

      <section className="section section-white">
        <div className="site-container">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end lg:gap-16">
            <div>
              <p className="section-label">
                Inside Blue Lotus Spa
              </p>

              <h2 className="section-title">
                A calm space designed around your comfort
              </h2>
            </div>

            <div>
              <p className="text-[15px] leading-8 text-[var(--muted-text)]">
                Our spa environment is designed to feel comfortable, clean and
                relaxing from the moment you arrive. Explore our gallery and
                get a closer look at the ambience and treatment spaces at Blue
                Lotus Spa Malad.
              </p>

              <a
                href={siteData.location.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[1.3px] text-[#986c34]"
              >
                <FaLocationDot className="text-[12px]" />

                Visit Us in Malad West, Mumbai
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          GALLERY
      ========================================== */}

      <section className="pb-16 lg:pb-20">
        <div className="site-container">
          <GalleryImageView images={galleryImages} />
        </div>
      </section>

      {/* =========================================
          EXPERIENCE FEATURES
      ========================================== */}

      <section className="section section-cream">
        <div className="site-container">
          <div className="mx-auto max-w-[760px] text-center">
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[2.5px] text-[var(--gold-dark)]">
              Our Environment
            </p>

            <h2 className="section-title mx-auto">
              Relax in a peaceful spa atmosphere
            </h2>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                number: "01",
                title: "Peaceful Ambience",
                description:
                  "A calm and comfortable environment created for relaxation.",
              },
              {
                number: "02",
                title: "Comfortable Rooms",
                description:
                  "Well-arranged massage rooms designed for a pleasant spa visit.",
              },
              {
                number: "03",
                title: "Premium Experience",
                description:
                  "Thoughtfully designed wellness spaces with a relaxing atmosphere.",
              },
              {
                number: "04",
                title: "Malad West Location",
                description:
                  "Conveniently located on New Link Road opposite Infinity Mall.",
              },
            ].map((item) => (
              <article
                key={item.number}
                className="rounded-[24px] border border-[var(--border)] bg-white p-6 shadow-[0_8px_28px_rgba(87,65,39,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_38px_rgba(87,65,39,0.08)]"
              >
                <span className="font-serif text-[15px] font-semibold text-[var(--gold)]">
                  {item.number}
                </span>

                <h3 className="mt-4 font-serif text-[21px] font-semibold text-[var(--foreground)]">
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
          CTA
      ========================================== */}

      <section className="section section-white">
        <div className="site-container">
          <div className="overflow-hidden rounded-[30px] border border-[var(--border)] bg-gradient-to-r from-[#fbf4ea] via-white to-[#faf0e3] px-6 py-10 text-center sm:px-10 lg:px-14 lg:py-14">
            <p className="text-[10px] font-bold uppercase tracking-[2.4px] text-[var(--gold-dark)]">
              Visit Blue Lotus Spa
            </p>

            <h2 className="mx-auto mt-3 max-w-[720px] font-serif text-[32px] font-semibold leading-[1.15] text-[var(--foreground)] sm:text-[40px]">
              Experience our spa atmosphere in person
            </h2>

            <p className="mx-auto mt-4 max-w-[650px] text-[14px] leading-7 text-[var(--muted-text)]">
              Contact Blue Lotus Spa Malad to check available massage therapies
              and reserve your preferred appointment.
            </p>

            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href={phoneUrl}
                className="btn-primary"
                aria-label="Call Blue Lotus Spa Malad"
              >
                <FaPhone className="text-[12px]" />

                Call Now
              </a>

              <a
                href={whatsappBookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
                aria-label="WhatsApp Blue Lotus Spa Malad"
              >
                <FaWhatsapp className="text-[17px]" />

                Book on WhatsApp
              </a>

              <Link
                href="/services"
                className="btn-secondary"
              >
                Explore Services

                <FaArrowRight className="text-[10px]" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
