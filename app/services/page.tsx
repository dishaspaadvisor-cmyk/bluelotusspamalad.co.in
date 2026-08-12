// app/services/page.tsx

import type { Metadata } from "next";
import Link from "next/link";

import {
  FaArrowRight,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa6";

import ServiceCard from "@/components/ServiceCard";

import { services } from "@/data/services";
import {
  servicesSEO,
  generateBreadcrumbSEO,
} from "@/data/seo";

import {
  phoneUrl,
  whatsappBookingUrl,
} from "@/data/site";

export const metadata: Metadata = {
  title: servicesSEO.title,
  description: servicesSEO.description,
  keywords: [...servicesSEO.keywords],

  alternates: {
    canonical: servicesSEO.canonical,
  },

  openGraph: {
    title: servicesSEO.title,
    description: servicesSEO.description,
    url: servicesSEO.canonical,
    type: "website",
  },
};

export default function ServicesPage() {
  const breadcrumbSchema = generateBreadcrumbSEO([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
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

      <section className="page-hero hero-2">
        <div className="site-container">
          <div className="max-w-[820px]">
            <div className="breadcrumb">
              <Link href="/">Home</Link>

              <span>/</span>

              <span>Services</span>
            </div>

            <p className="section-label">
              Our Treatments
            </p>

            <h1 className="page-hero-title">
              Premium Massage & Spa Services in Malad
            </h1>

            <p className="page-hero-description">
              Explore our range of relaxing massage and wellness therapies at
              Blue Lotus Spa Malad in Malad West, Mumbai.
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
          SERVICES GRID
      ========================================== */}

      <section className="section section-white">
        <div className="site-container">
          <div className="mx-auto max-w-[780px] text-center">
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[2.5px] text-[var(--gold-dark)]">
              Choose Your Experience
            </p>

            <h2 className="section-title mx-auto">
              Massage therapies for relaxation and wellness
            </h2>

            <p className="section-description mx-auto">
              From Full Body and Swedish Massage to Thai, Deep Tissue,
              Aromatherapy, Oil Massage and premium spa experiences, choose a
              therapy that suits your relaxation preference.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
              />
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          CTA
      ========================================== */}

      <section className="pb-16 lg:pb-20">
        <div className="site-container">
          <div className="overflow-hidden rounded-[30px] border border-[var(--border)] bg-gradient-to-r from-[var(--ivory)] via-white to-[#f8efe4] px-6 py-10 text-center sm:px-10 lg:px-14 lg:py-14">
            <p className="text-[10px] font-bold uppercase tracking-[2.5px] text-[var(--gold-dark)]">
              Need Help Choosing?
            </p>

            <h2 className="mx-auto mt-3 max-w-[700px] font-serif text-[32px] font-semibold leading-[1.15] text-[var(--foreground)] sm:text-[40px]">
              Find the right massage for your relaxation needs
            </h2>

            <p className="mx-auto mt-4 max-w-[650px] text-[14px] leading-7 text-[var(--muted-text)]">
              Call or WhatsApp Blue Lotus Spa Malad to check available
              therapies, session timings and appointments.
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
                href="/contact"
                className="btn-secondary"
              >
                Contact Us

                <FaArrowRight className="text-[10px]" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
