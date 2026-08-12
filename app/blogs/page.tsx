// app/blogs/page.tsx

import type { Metadata } from "next";
import Link from "next/link";

import {
  FaArrowRight,
  FaBookOpen,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa6";

import BlogsCard from "@/components/BlogsCard";

import { blogs } from "@/data/blogs";
import {
  blogsSEO,
  generateBreadcrumbSEO,
} from "@/data/seo";

import {
  phoneUrl,
  whatsappBookingUrl,
} from "@/data/site";

export const metadata: Metadata = blogsSEO;

export default function BlogsPage() {
  const breadcrumbSchema = generateBreadcrumbSEO([
    { name: "Home", url: "/" },
    { name: "Blogs", url: "/blogs" },
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
          <div className="max-w-[850px]">
            <div className="breadcrumb">
              <Link href="/">
                Home
              </Link>

              <span>/</span>

              <span>
                Blogs
              </span>
            </div>

            <p className="section-label">
              Wellness Journal
            </p>

            <h1 className="page-hero-title">
              Massage Guides & Wellness Tips in Malad
            </h1>

            <p className="page-hero-description">
              Explore helpful articles about massage therapies, spa experiences,
              relaxation techniques and choosing the right wellness treatment
              at Blue Lotus Spa Malad.
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
          <div className="mx-auto max-w-[820px] text-center">
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--ivory)] text-[var(--gold-dark)] shadow-[0_8px_24px_rgba(87,65,39,0.06)]">
              <FaBookOpen className="text-[17px]" />
            </div>

            <p className="mb-3 text-[11px] font-bold uppercase tracking-[2.5px] text-[var(--gold-dark)]">
              Blue Lotus Wellness Guide
            </p>

            <h2 className="section-title mx-auto">
              Learn more about massage, relaxation and wellness
            </h2>

            <p className="section-description mx-auto">
              Read simple and useful guides about popular massage therapies,
              their techniques, benefits and how to choose a spa experience
              that suits your relaxation preferences.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================
          BLOG GRID
      ========================================== */}

      <section className="pb-16 lg:pb-20">
        <div className="site-container">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog) => (
              <BlogsCard
                key={blog.id}
                blog={blog}
              />
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          SERVICES CTA
      ========================================== */}

      <section className="section section-cream">
        <div className="site-container">
          <div className="relative overflow-hidden rounded-[32px] border border-[var(--border)] bg-white px-6 py-11 text-center shadow-[0_16px_50px_rgba(87,65,39,0.06)] sm:px-10 lg:px-14 lg:py-16">
            {/* Decorative background */}

            <div className="pointer-events-none absolute -left-20 -top-24 h-60 w-60 rounded-full bg-[#f3e4cd]/60 blur-3xl" />

            <div className="pointer-events-none absolute -bottom-24 -right-20 h-64 w-64 rounded-full bg-[#f8ead8]/70 blur-3xl" />

            <div className="relative z-10">
              <p className="text-[10px] font-bold uppercase tracking-[2.4px] text-[var(--gold-dark)]">
                Explore Our Treatments
              </p>

              <h2 className="mx-auto mt-3 max-w-[720px] font-serif text-[32px] font-semibold leading-[1.15] text-[var(--foreground)] sm:text-[40px]">
                Ready to experience one of these massage therapies?
              </h2>

              <p className="mx-auto mt-4 max-w-[650px] text-[14px] leading-7 text-[var(--muted-text)]">
                Browse our massage and wellness services or contact Blue Lotus
                Spa Malad to check available therapies, timings and
                appointments.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Link
                  href="/services"
                  className="btn-primary group"
                >
                  Explore Services

                  <FaArrowRight className="text-[10px] transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                <a
                  href={whatsappBookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp"
                  aria-label="Book Blue Lotus Spa Malad on WhatsApp"
                >
                  <FaWhatsapp className="text-[17px]" />

                  Book on WhatsApp
                </a>
              </div>

              <p className="mt-6 text-[11px] font-medium text-[#9a8b7b]">
                Blue Lotus Spa Malad · Malad West · Mumbai
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
