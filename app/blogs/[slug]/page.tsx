// app/blogs/[slug]/page.tsx

import type { Metadata } from "next";

import Image from "next/image";
import Link from "next/link";

export const dynamicParams = false;

import { notFound } from "next/navigation";

import {
  FaArrowLeft,
  FaArrowRight,
  FaBookOpen,
  FaCheck,
  FaClock,
  FaPhone,
  FaSpa,
  FaWhatsapp,
} from "react-icons/fa6";

import BlogsCard from "@/components/BlogsCard";

import {
  blogs,
  getBlogBySlug,
} from "@/data/blogs";

import { absoluteCanonicalUrl, absoluteUrl } from "@/lib/seo";

import {
  siteData,
  phoneUrl,
} from "@/data/site";

type PageProps = {
  params: {
    slug: string;
  };
};

// =============================================
// STATIC GENERATION
// =============================================

export function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

// =============================================
// METADATA
// =============================================

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const blog = getBlogBySlug(slug);

  if (!blog) {
    return {
      title: "Blog Not Found",
      description:
        "The requested wellness article could not be found at Blue Lotus Spa Malad.",
    };
  }

  const pageUrl = absoluteCanonicalUrl(`/blogs/${blog.slug}`);

  return {
    title: `${blog.title} | Blue Lotus Spa Malad`,
    description: blog.excerpt,
    keywords: [...blog.keywords],

    alternates: {
      canonical: pageUrl,
    },

    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      url: pageUrl,
      type: "article",

      images: [
        {
          url: absoluteUrl(blog.image),
          alt: blog.title,
        },
      ],
    },
  };
}

// =============================================
// PAGE
// =============================================

export default async function BlogDetailsPage({
  params,
}: PageProps) {
  const { slug } = await params;

  const blog = getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  const pageUrl = absoluteCanonicalUrl(`/blogs/${blog.slug}`);

  // =============================================
  // RELATED BLOGS
  // =============================================

  const relatedBlogs = blogs
    .filter((item) => item.id !== blog.id)
    .slice(0, 3);

  // =============================================
  // BLOG-SPECIFIC WHATSAPP
  // =============================================

  const whatsappMessage = encodeURIComponent(
    `Hi Blue Lotus Spa Malad, I was reading your article about "${blog.title}" and would like to know more about your massage services and appointment availability.`
  );

  const blogWhatsappUrl = `https://wa.me/${siteData.contact.whatsapp}?text=${whatsappMessage}`;

  // =============================================
  // ARTICLE SCHEMA
  // =============================================

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",

    headline: blog.title,
    description: blog.excerpt,
    image: absoluteUrl(blog.image),
    url: pageUrl,

    author: {
      "@type": "Organization",
      name: siteData.name,
      url: siteData.url,
    },

    publisher: {
      "@type": "Organization",
      name: siteData.name,
      url: siteData.url,
    },

    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
  };

  // =============================================
  // BREADCRUMB SCHEMA
  // =============================================

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",

    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteData.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blogs",
        item: absoluteCanonicalUrl("/blogs"),
      },
      {
        "@type": "ListItem",
        position: 3,
        name: blog.title,
        item: pageUrl,
      },
    ],
  };

  return (
    <>
      {/* =========================================
          STRUCTURED DATA
      ========================================== */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      {/* =========================================
          ARTICLE HERO
      ========================================== */}

      <section className="relative overflow-hidden bg-[var(--white)]">
        <div className="pointer-events-none absolute -left-28 top-0 h-[420px] w-[420px] rounded-full bg-[#ead8bb]/40 blur-[110px]" />

        <div className="pointer-events-none absolute -right-36 bottom-0 h-[460px] w-[460px] rounded-full bg-[#f8ead8]/70 blur-[120px]" />

        <div className="site-container relative z-10 py-10 sm:py-14 lg:py-20">
          <div className="mx-auto max-w-[980px]">
            {/* Breadcrumb */}

            <div className="breadcrumb breadcrumb-light">
              <Link href="/">
                Home
              </Link>

              <span>/</span>

              <Link href="/blogs">
                Blogs
              </Link>

              <span>/</span>

              <span>
                {blog.category}
              </span>
            </div>

            {/* Meta */}

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-white/90 px-4 py-2 shadow-sm backdrop-blur">
                <FaSpa className="text-[11px] text-[var(--gold-dark)]" />

                <span className="text-[9px] font-bold uppercase tracking-[1.8px] text-[#9e743b]">
                  {blog.category}
                </span>
              </div>

              <div className="inline-flex items-center gap-2 rounded-full border border-[#eee2d3] bg-[var(--ivory)] px-4 py-2">
                <FaBookOpen className="text-[10px] text-[var(--gold-dark)]" />

                <span className="text-[9px] font-bold uppercase tracking-[1.7px] text-[#8d7355]">
                  Wellness Guide
                </span>
              </div>
            </div>

            {/* Title */}

            <h1 className="mt-6 max-w-[950px] font-serif text-[38px] font-semibold leading-[1.06] tracking-[-0.8px] text-[var(--foreground)] sm:text-[50px] lg:text-[62px]">
              {blog.title}
            </h1>

            {/* Excerpt */}

            <p className="mt-6 max-w-[820px] text-[15px] leading-8 text-[var(--muted-text)] sm:text-[17px]">
              {blog.excerpt}
            </p>

            {/* Brand row */}

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--cream)] text-[var(--gold-dark)] shadow-sm">
                  <FaBookOpen className="text-[13px]" />
                </span>

                <div>
                  <p className="text-[12px] font-bold text-[#55483d]">
                    Blue Lotus Spa Malad
                  </p>

                  <p className="mt-0.5 text-[9px] font-semibold uppercase tracking-[1.6px] text-[#9f8e7f]">
                    Wellness Journal
                  </p>
                </div>
              </div>

              <span className="hidden h-8 w-px bg-[#e7dac9] sm:block" />

              <div className="flex items-center gap-2 text-[11px] font-semibold text-[#8c7c6d]">
                <FaClock className="text-[10px] text-[#b48648]" />
                Helpful wellness reading
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          FEATURED IMAGE
      ========================================== */}

      <section className="bg-white pb-2">
        <div className="site-container">
          <div className="relative mx-auto max-w-[1160px]">
            <div className="relative aspect-[16/8] overflow-hidden rounded-[28px] bg-[#f1e9df] shadow-[0_24px_70px_rgba(87,65,39,0.12)] sm:rounded-[36px]" style={{ position: "relative" }}>
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                priority
                sizes="(max-width: 1200px) 100vw, 1160px"
                className="object-cover transition-transform duration-700 hover:scale-[1.015]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#3b2919]/30 via-transparent to-transparent" />
            </div>

            <div className="absolute bottom-4 left-4 hidden rounded-full border border-white/60 bg-white/90 px-4 py-2 text-[9px] font-bold uppercase tracking-[1.7px] text-[#8e6739] shadow-md backdrop-blur sm:block">
              Blue Lotus Spa Malad Wellness Journal
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          ARTICLE CONTENT
      ========================================== */}

      <section className="section section-white">
        <div className="site-container">
          <div className="mx-auto grid max-w-[1120px] gap-12 lg:grid-cols-[1fr_320px] lg:gap-16">
            {/* =====================================
                CONTENT
            ====================================== */}

            <article className="min-w-0">
              <p className="section-label">
                Wellness Guide
              </p>

              <h2 className="font-serif text-[30px] font-semibold leading-[1.18] text-[var(--foreground)] sm:text-[38px]">
                About {blog.category}
              </h2>

              {/* Intro border */}

              <div className="mt-5 h-px w-full bg-gradient-to-r from-[#dcc49f] via-[var(--border-light)] to-transparent" />

              {/* Article paragraphs */}

              <div className="mt-7 space-y-7">
                {blog.content.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-[15px] leading-[1.95] text-[var(--muted-text)] sm:text-[16px]"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Important Note */}

              <div className="relative mt-10 overflow-hidden rounded-[24px] border border-[var(--border)] bg-[var(--ivory)] p-6 sm:p-7">
                <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#f0dfc6]/60 blur-2xl" />

                <div className="relative z-10">
                  <div className="flex items-center gap-2">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#ad7c3d] shadow-sm">
                      <FaSpa className="text-[11px]" />
                    </span>

                    <p className="text-[9px] font-bold uppercase tracking-[2px] text-[#ad7c3d]">
                      Blue Lotus Spa Malad
                    </p>
                  </div>

                  <p className="mt-4 text-[14px] leading-7 text-[#66594d]">
                    Massage preferences can vary from person to person. You can
                    speak with our team before booking to understand the
                    available massage options and choose a session based on
                    your comfort and relaxation preferences.
                  </p>
                </div>
              </div>

              {/* Keywords / Topics */}

              <div className="mt-10">
                <p className="text-[10px] font-bold uppercase tracking-[1.9px] text-[#a27b49]">
                  Related Topics
                </p>

                <div className="mt-4 flex flex-wrap gap-2.5">
                  {blog.keywords.slice(0, 6).map((keyword) => (
                    <span
                      key={keyword}
                      className="rounded-full border border-[var(--border)] bg-[var(--white)] px-3.5 py-2 text-[10px] font-semibold text-[#817267] shadow-[0_4px_14px_rgba(87,65,39,0.03)]"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            </article>

            {/* =====================================
                SIDEBAR
            ====================================== */}

            <aside className="lg:sticky lg:top-28 lg:self-start">
              <div className="overflow-hidden rounded-[28px] border border-[var(--border)] bg-[var(--ivory)] shadow-[0_16px_50px_rgba(87,65,39,0.07)]">
                {/* Top */}

                <div className="border-b border-[var(--border)] bg-white/70 p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--cream)] text-[var(--gold-dark)]">
                    <FaSpa className="text-[15px]" />
                  </div>

                  <p className="mt-4 text-[9px] font-bold uppercase tracking-[2px] text-[#ae7e3e]">
                    Interested in This Therapy?
                  </p>

                  <h3 className="mt-3 font-serif text-[26px] font-semibold leading-[1.2] text-[var(--foreground)]">
                    Plan your spa visit
                  </h3>

                  <p className="mt-3 text-[13px] leading-6 text-[var(--muted-text)]">
                    Contact Blue Lotus Spa Malad to check available massage
                    therapies and appointment timings.
                  </p>
                </div>

                {/* Body */}

                <div className="p-6">
                  <div className="space-y-3.5">
                    {[
                      "Professional spa environment",
                      "Multiple massage therapies",
                      "Comfortable treatment rooms",
                      "Convenient Malad West location",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3"
                      >
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-[var(--gold-dark)] shadow-sm">
                          <FaCheck className="text-[8px]" />
                        </span>

                        <span className="text-[12px] font-medium leading-5 text-[#62564b]">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  <a
                    href={phoneUrl}
                    aria-label="Call Blue Lotus Spa Malad"
                    className="mt-7 flex min-h-[50px] w-full items-center justify-center gap-2 rounded-[14px] bg-[var(--gold-dark)] px-5 text-[13px] font-bold text-white shadow-[0_9px_24px_rgba(168,121,56,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--forest)]"
                  >
                    <FaPhone className="text-[12px]" />

                    Call Now
                  </a>

                  <a
                    href={blogWhatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp Blue Lotus Spa Malad"
                    className="mt-3 flex min-h-[50px] w-full items-center justify-center gap-2 rounded-[14px] bg-[#269b52] px-5 text-[13px] font-bold text-white shadow-[0_9px_24px_rgba(38,155,82,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#218947]"
                  >
                    <FaWhatsapp className="text-[18px]" />

                    WhatsApp Us
                  </a>

                  <Link
                    href="/services"
                    className="group mt-5 flex items-center justify-center gap-2 text-[10px] font-bold uppercase tracking-[1.5px] text-[var(--gold-dark)]"
                  >
                    View All Services

                    <FaArrowRight className="text-[9px] transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* =========================================
          RELATED BLOGS
      ========================================== */}

      <section className="section section-cream">
        <div className="site-container">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="section-label">
                More From Our Journal
              </p>

              <h2 className="section-title">
                Related wellness guides
              </h2>

              <p className="mt-3 max-w-[620px] text-[14px] leading-7 text-[var(--muted-text)]">
                Explore more massage and wellness articles from Blue Lotus Spa
                Malad.
              </p>
            </div>

            <Link
              href="/blogs"
              className="group inline-flex w-fit items-center gap-2 rounded-full border border-[var(--border)] bg-white px-5 py-3 text-[12px] font-bold text-[var(--gold-dark)] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--gold)]"
            >
              View All Blogs

              <FaArrowRight className="text-[10px] transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {relatedBlogs.map((item) => (
              <BlogsCard
                key={item.id}
                blog={item}
              />
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          BACK TO BLOGS
      ========================================== */}

      <section className="bg-white py-10">
        <div className="site-container">
          <div className="flex flex-col gap-4 rounded-[24px] border border-[var(--border)] bg-[var(--ivory)] px-5 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-7">
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[2px] text-[var(--gold-dark)]">
                Blue Lotus Spa Malad
              </p>

              <p className="mt-2 font-serif text-[21px] font-semibold text-[var(--foreground)]">
                Explore more wellness articles
              </p>
            </div>

            <Link
              href="/blogs"
              className="group inline-flex w-fit items-center gap-2 text-[11px] font-bold uppercase tracking-[1.3px] text-[var(--gold-dark)]"
            >
              <FaArrowLeft className="text-[10px] transition-transform duration-300 group-hover:-translate-x-1" />

              Back to All Blogs
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
