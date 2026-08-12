// app/services/[slug]/page.tsx

import type { Metadata } from "next";

import Image from "next/image";
import Link from "next/link";

export const dynamicParams = false;

import { notFound } from "next/navigation";

import {
  FaArrowLeft,
  FaArrowRight,
  FaCheck,
  FaClock,
  FaLocationDot,
  FaPhone,
  FaSpa,
  FaWhatsapp,
} from "react-icons/fa6";

import ServiceCard from "@/components/ServiceCard";

import {
  services,
  getServiceBySlug,
} from "@/data/services";

import {
  generateServiceSEO,
  generateBreadcrumbSEO,
} from "@/data/seo";

import {
  siteData,
  phoneUrl,
} from "@/data/site";

import {
  absoluteCanonicalUrl,
  absoluteUrl,
} from "@/lib/seo";

type PageProps = {
  params: {
    slug: string;
  };
};

// =============================================
// STATIC GENERATION
// =============================================

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

// =============================================
// METADATA
// =============================================

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found",
      description:
        "The requested spa service could not be found at Blue Lotus Spa Malad.",
    };
  }

  const seo = generateServiceSEO({
    title: service.title,
    slug: service.slug,
    description: service.description,
    localKeywords: service.localKeywords,
    image: service.image,
  });

  return {
    title: seo.title,
    description: seo.description,
    keywords: [...seo.keywords],

    alternates: {
      canonical: seo.canonical,
    },

    openGraph: {
      title: seo.openGraph.title,
      description: seo.openGraph.description,
      url: seo.openGraph.url,
      siteName: seo.openGraph.siteName,

      images: [
        {
          url: seo.openGraph.image,
          alt: `${service.title} at Blue Lotus Spa Malad`,
        },
      ],

      type: "website",
    },
  };
}

// =============================================
// PAGE
// =============================================

export default async function ServiceDetailsPage({
  params,
}: PageProps) {
  const { slug } = await params;

  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  // =============================================
  // WHATSAPP
  // =============================================

  const whatsappMessage = encodeURIComponent(
    `Hi Blue Lotus Spa Malad, I would like to know more about ${service.title}. Please share available timings and details.`
  );

  const serviceWhatsappUrl = `https://wa.me/${siteData.contact.whatsapp}?text=${whatsappMessage}`;

  // =============================================
  // RELATED SERVICES
  // =============================================

  const relatedServices = services
    .filter((item) => item.id !== service.id)
    .slice(0, 3);

  // =============================================
  // BREADCRUMB SCHEMA
  // =============================================

  const breadcrumbSchema = generateBreadcrumbSEO([
    {
      name: "Home",
      url: "/",
    },
    {
      name: "Services",
      url: "/services",
    },
    {
      name: service.title,
      url: `/services/${service.slug}`,
    },
  ]);

  // =============================================
  // SERVICE SCHEMA
  // =============================================

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",

    name: service.title,

    description: service.description,

    image: absoluteUrl(service.image),

    url: absoluteCanonicalUrl(`/services/${service.slug}`),

    provider: {
      "@type": "HealthAndBeautyBusiness",

      name: siteData.name,

      url: siteData.url,

      "@id": `${siteData.url}/#business`,

      telephone: siteData.contact.phone,

      address: {
        "@type": "PostalAddress",

        streetAddress: `${siteData.address.shop}, ${siteData.address.building}, ${siteData.address.landmark}`,

        addressLocality: siteData.address.area,

        addressRegion: siteData.address.state,

        postalCode: siteData.address.pincode,

        addressCountry: "IN",
      },
    },

    areaServed: {
      "@type": "City",
      name: "Mumbai",
    },
  };

  return (
    <>
      {/* =========================================
          STRUCTURED DATA
      ========================================== */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />

      {/* =========================================
          PREMIUM SERVICE HERO
      ========================================== */}

      <section className="relative overflow-hidden bg-[var(--white)]">
        {/* Decorative Background */}

        <div className="pointer-events-none absolute -left-24 top-0 h-[420px] w-[420px] rounded-full bg-[#ead9bd]/30 blur-[100px]" />

        <div className="pointer-events-none absolute -right-40 bottom-0 h-[460px] w-[460px] rounded-full bg-[#f7ead7]/60 blur-[110px]" />

        <div className="site-container relative z-10 py-8 sm:py-12 lg:py-16">
          {/* Breadcrumb */}

          <div className="breadcrumb breadcrumb-light">
            <Link href="/">
              Home
            </Link>

            <span>/</span>

            <Link href="/services">
              Services
            </Link>

            <span>/</span>

            <span>
              {service.title}
            </span>
          </div>

          <div className="mt-6 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
            {/* =====================================
                IMAGE
            ====================================== */}

            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] bg-[var(--soft-cream)] shadow-[0_30px_80px_rgba(83,63,41,0.15)] sm:rounded-[34px]" style={{ position: "relative" }}>
                <Image
                  src={service.image}
                  alt={`${service.title} at Blue Lotus Spa Malad`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 52vw"
                  className="object-cover transition-transform duration-700 hover:scale-[1.025]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#342518]/35 via-transparent to-transparent" />
              </div>

              {/* Duration Badge */}

              <div className="absolute bottom-4 left-4 sm:bottom-5 sm:left-5">
                <div className="flex items-center gap-2 rounded-full border border-white/70 bg-white/95 px-4 py-2.5 shadow-[0_8px_25px_rgba(61,44,27,0.12)] backdrop-blur-md">
                  <FaClock className="text-[12px] text-[var(--gold-dark)]" />

                  <span className="text-[10px] font-bold uppercase tracking-[1.4px] text-[#755b3d]">
                    {service.duration}
                  </span>
                </div>
              </div>

              {/* Premium Badge */}

              <div className="absolute right-4 top-4 sm:right-5 sm:top-5">
                <div className="flex items-center gap-2 rounded-full border border-white/70 bg-white/95 px-3.5 py-2 shadow-lg backdrop-blur-md">
                  <FaSpa className="text-[11px] text-[var(--gold-dark)]" />

                  <span className="text-[9px] font-bold uppercase tracking-[1.4px] text-[#805f37]">
                    Premium Therapy
                  </span>
                </div>
              </div>
            </div>

            {/* =====================================
                CONTENT
            ====================================== */}

            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--ivory)] px-3.5 py-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#b78645]" />

                <span className="text-[9px] font-bold uppercase tracking-[2px] text-[#9d723c]">
                  Blue Lotus Spa Malad
                </span>
              </div>

              <h1 className="font-serif text-[39px] font-semibold leading-[1.06] tracking-[-0.7px] text-[var(--foreground)] sm:text-[49px] lg:text-[57px]">
                {service.title}
              </h1>

              <p className="mt-5 max-w-[620px] text-[14px] leading-7 text-[var(--muted-text)] sm:text-[16px] sm:leading-8">
                {service.description}
              </p>

              {/* Benefits */}

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {[
                  "Professional spa environment",
                  "Relaxing wellness experience",
                  "Comfortable treatment rooms",
                  "Convenient Malad West location",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#f7eee1] text-[var(--gold-dark)]">
                      <FaCheck className="text-[9px]" />
                    </span>

                    <span className="text-[12px] font-semibold text-[#665a4e] sm:text-[13px]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Buttons */}

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <a
                  href={phoneUrl}
                  aria-label={`Call Blue Lotus Spa Malad for ${service.title}`}
                  className="inline-flex min-h-[54px] items-center justify-center gap-2.5 rounded-[15px] bg-[var(--gold-dark)] px-6 text-[13px] font-bold text-white shadow-[0_10px_30px_rgba(168,121,56,0.22)] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:bg-[var(--forest)] hover:shadow-[0_16px_36px_rgba(168,121,56,0.3)]"
                >
                  <FaPhone className="text-[12px]" />

                  Call Now
                </a>

                <a
                  href={serviceWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`WhatsApp Blue Lotus Spa Malad about ${service.title}`}
                  className="inline-flex min-h-[54px] items-center justify-center gap-2.5 rounded-[15px] bg-[#269b52] px-6 text-[13px] font-bold text-white shadow-[0_10px_30px_rgba(38,155,82,0.2)] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:bg-[#218947] hover:shadow-[0_16px_36px_rgba(38,155,82,0.3)]"
                >
                  <FaWhatsapp className="text-[18px]" />

                  Book on WhatsApp
                </a>
              </div>

              {/* Location */}

              <a
                href={siteData.location.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-6 flex max-w-[540px] items-start gap-3 rounded-[20px] border border-[#eee0cc] bg-white/90 px-4 py-4 shadow-[0_8px_28px_rgba(87,65,39,0.05)] backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-[#d5bd98] hover:shadow-[0_13px_35px_rgba(87,65,39,0.09)]"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--cream)] text-[var(--gold-dark)] transition-transform duration-300 group-hover:scale-110">
                  <FaLocationDot className="text-[14px]" />
                </span>

                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[1.8px] text-[#af8248]">
                    Visit Blue Lotus Spa Malad
                  </p>

                  <p className="mt-1 text-[12px] leading-5 text-[#706357]">
                    A Wing Solitaire II, New Link Road, Opp. Infinity Mall,
                    Malad West, Mumbai
                  </p>
                </div>

                <FaArrowRight className="ml-auto mt-3 text-[10px] text-[#b28a58] transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          ABOUT THIS SERVICE
      ========================================== */}

      <section className="section section-white">
        <div className="site-container">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.62fr] lg:items-start lg:gap-16">
            {/* Content */}

            <div>
              <p className="section-label">
                About The Therapy
              </p>

              <h2 className="section-title">
                Experience {service.title} in Malad West
              </h2>

              <p className="mt-6 text-[15px] leading-8 text-[var(--muted-text)]">
                {service.description}
              </p>

              <p className="mt-4 text-[15px] leading-8 text-[var(--muted-text)]">
                At Blue Lotus Spa Malad, our focus is to create a calm,
                comfortable and professional wellness experience. Each session
                is designed around relaxation, personal comfort and a peaceful
                spa atmosphere.
              </p>

              <p className="mt-4 text-[15px] leading-8 text-[var(--muted-text)]">
                Our spa is conveniently located in Malad West on New Link Road,
                opposite Infinity Mall, making it easy to visit from nearby
                areas of Mumbai.
              </p>

              {/* Quick Highlights */}

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[20px] border border-[var(--border-light)] bg-[var(--white)] p-5">
                  <p className="text-[10px] font-bold uppercase tracking-[1.7px] text-[#b08346]">
                    Relaxation
                  </p>

                  <p className="mt-2 text-[13px] leading-6 text-[#716458]">
                    Enjoy a peaceful therapy session in a comfortable wellness
                    environment.
                  </p>
                </div>

                <div className="rounded-[20px] border border-[var(--border-light)] bg-[var(--white)] p-5">
                  <p className="text-[10px] font-bold uppercase tracking-[1.7px] text-[#b08346]">
                    Professional Care
                  </p>

                  <p className="mt-2 text-[13px] leading-6 text-[#716458]">
                    Our team focuses on comfort, cleanliness and professional
                    service throughout your visit.
                  </p>
                </div>
              </div>
            </div>

            {/* =====================================
                PREMIUM INFORMATION CARD
            ====================================== */}

            <aside className="overflow-hidden rounded-[28px] border border-[var(--border)] bg-[var(--ivory)] shadow-[0_16px_50px_rgba(87,65,39,0.07)] lg:sticky lg:top-28">
              <div className="border-b border-[var(--border)] bg-white/70 p-6 sm:p-7">
                <p className="text-[9px] font-bold uppercase tracking-[2px] text-[#ae7e3e]">
                  Service Information
                </p>

                <h3 className="mt-3 font-serif text-[27px] font-semibold leading-tight text-[var(--foreground)]">
                  {service.title}
                </h3>
              </div>

              <div className="p-6 sm:p-7">
                <div className="space-y-5">
                  {/* Duration */}

                  <div className="flex items-start gap-3 border-b border-[#e8ddce] pb-5">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[#a6793c] shadow-sm">
                      <FaClock className="text-[12px]" />
                    </span>

                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-[1.5px] text-[#a28d75]">
                        Duration
                      </p>

                      <p className="mt-1 text-[14px] font-semibold text-[#55483d]">
                        {service.duration}
                      </p>
                    </div>
                  </div>

                  {/* Location */}

                  <div className="flex items-start gap-3 border-b border-[#e8ddce] pb-5">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[#a6793c] shadow-sm">
                      <FaLocationDot className="text-[12px]" />
                    </span>

                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-[1.5px] text-[#a28d75]">
                        Location
                      </p>

                      <p className="mt-1 text-[14px] font-semibold text-[#55483d]">
                        Malad West, Mumbai
                      </p>
                    </div>
                  </div>

                  {/* Appointment */}

                  <div className="flex items-start gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[#269b52] shadow-sm">
                      <FaWhatsapp className="text-[15px]" />
                    </span>

                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-[1.5px] text-[#a28d75]">
                        Appointment
                      </p>

                      <p className="mt-1 text-[14px] font-semibold text-[#55483d]">
                        Call or WhatsApp to Book
                      </p>
                    </div>
                  </div>
                </div>

                <a
                  href={serviceWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 flex min-h-[52px] w-full items-center justify-center gap-2.5 rounded-[14px] bg-[#269b52] px-5 text-[13px] font-bold text-white shadow-[0_10px_26px_rgba(38,155,82,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#218947] hover:shadow-[0_14px_32px_rgba(38,155,82,0.28)]"
                >
                  <FaWhatsapp className="text-[18px]" />

                  Check Availability
                </a>

                <a
                  href={phoneUrl}
                  className="mt-3 flex min-h-[50px] w-full items-center justify-center gap-2 rounded-[14px] border border-[var(--border)] bg-white px-5 text-[13px] font-bold text-[var(--gold-dark)] transition-all duration-300 hover:border-[var(--gold)] hover:bg-[var(--ivory)]"
                >
                  <FaPhone className="text-[12px]" />

                  Call Blue Lotus Spa
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* =========================================
          RELATED SERVICES
      ========================================== */}

      <section className="section section-cream">
        <div className="site-container">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="section-label">
                More Therapies
              </p>

              <h2 className="section-title">
                Explore more spa experiences
              </h2>

              <p className="mt-3 max-w-[620px] text-[14px] leading-7 text-[var(--muted-text)]">
                Discover more massage and wellness therapies available at Blue
                Lotus Spa Malad.
              </p>
            </div>

            <Link
              href="/services"
              className="group inline-flex w-fit items-center gap-2 rounded-full border border-[var(--border)] bg-white px-5 py-3 text-[12px] font-bold text-[var(--gold-dark)] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--gold)]"
            >
              View All Services

              <FaArrowRight className="text-[10px] transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedServices.map((item) => (
              <ServiceCard
                key={item.id}
                service={item}
              />
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          BOTTOM CTA
      ========================================== */}

      <section className="bg-white py-10 lg:py-12">
        <div className="site-container">
          <div className="flex flex-col gap-5 rounded-[26px] border border-[var(--border)] bg-[var(--ivory)] px-5 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-7">
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[2px] text-[var(--gold-dark)]">
                Blue Lotus Spa Malad
              </p>

              <p className="mt-2 font-serif text-[22px] font-semibold text-[var(--foreground)]">
                Looking for another massage therapy?
              </p>
            </div>

            <Link
              href="/services"
              className="group inline-flex w-fit items-center gap-2 text-[12px] font-bold uppercase tracking-[1.3px] text-[var(--gold-dark)]"
            >
              <FaArrowLeft className="text-[10px] transition-transform duration-300 group-hover:-translate-x-1" />

              Back to All Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
