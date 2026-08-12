// app/page.tsx

import Link from "next/link";
import Image from "next/image";
import GoogleMap from "@/components/GoogleMap";

import {
  FaArrowRight,
  FaSpa,
  FaLocationDot,
} from "react-icons/fa6";

import PopularSearch from "@/components/PopularSearch";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import BlogsCard from "@/components/BlogsCard";
import Testimonials from "@/components/Testimonials";
import GoogleReviews from "@/components/GoogleReviews";

import { services } from "@/data/services";
import { featuredBlogs } from "@/data/blogs";
import { featuredGalleryImages } from "@/data/gallery";
import { homeSEO } from "@/data/seo";

export const metadata = homeSEO;

const galleryImages = featuredGalleryImages;

export default function HomePage() {
  return (
    <>
      {/* =========================================
          1. HERO
      ========================================== */}

      <Hero />

      {/* =========================================
          2. SERVICES
      ========================================== */}

      <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
        {/* soft decoration */}
        <div className="pointer-events-none absolute -left-32 top-20 h-[380px] w-[380px] rounded-full bg-[#f6ead8]/50 blur-[100px]" />

        <div className="site-container relative z-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-[760px]">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--ivory)] px-3.5 py-2">
                <FaSpa className="text-[11px] text-[var(--gold-dark)]" />

                <span className="text-[9px] font-bold uppercase tracking-[2px] text-[#9f733c]">
                  Our Services
                </span>
              </div>

              <h2 className="section-title">
                Massage therapies designed for complete relaxation
              </h2>

              <p className="section-description">
                Discover popular massage and wellness treatments available at
                Blue Lotus Spa Malad, designed to help you relax, refresh and
                enjoy a comfortable spa experience.
              </p>
            </div>

            <Link
              href="/services"
              className="group inline-flex w-fit items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--ivory)] px-5 py-3 text-[12px] font-bold text-[var(--gold-dark)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--gold)] hover:bg-white"
            >
              View All Services

              <FaArrowRight className="text-[10px] transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
              />
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Link
              href="/services"
              className="group inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-[var(--gold-dark)] px-7 text-[13px] font-bold text-white shadow-[0_10px_30px_rgba(168,121,56,0.2)] transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--forest)] hover:shadow-[0_16px_36px_rgba(168,121,56,0.28)]"
            >
              Explore All Services

              <FaArrowRight className="text-[10px] transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================
          3. GALLERY
      ========================================== */}

      <section className="relative overflow-hidden bg-[var(--ivory)] py-16 sm:py-20 lg:py-24">
        <div className="pointer-events-none absolute -right-28 top-10 h-[360px] w-[360px] rounded-full bg-[var(--border)]/45 blur-[100px]" />

        <div className="site-container relative z-10">
          <div className="mx-auto max-w-[780px] text-center">
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[2.5px] text-[var(--gold-dark)]">
              Spa Gallery
            </p>

            <h2 className="section-title mx-auto">
              Step inside Blue Lotus Spa Malad
            </h2>

            <p className="section-description mx-auto">
              Explore the peaceful ambience, relaxing treatment rooms and
              comfortable wellness spaces at Blue Lotus Spa Malad in Malad
              West.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
            {galleryImages.map((item, index) => (
              <div
                key={item.id}
                className={`group relative overflow-hidden rounded-[24px] border border-white/70 bg-[var(--soft-cream)] shadow-[0_12px_35px_rgba(87,65,39,0.08)] ${
                  index === 0 || index === 5
                    ? "col-span-2 aspect-[16/10]"
                    : "aspect-[4/5]"
                }`}
                style={{ position: "relative" }}
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#3b2b1e]/55 via-[#3b2b1e]/5 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-85" />

                <div className="absolute inset-x-0 bottom-0 translate-y-2 p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 sm:p-5">
                  <p className="text-[9px] font-bold uppercase tracking-[1.8px] text-[#ecd9ba]">
                    Blue Lotus Spa Malad
                  </p>

                  <p className="mt-1 font-serif text-[18px] font-semibold text-white">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Link
              href="/gallery"
              className="group inline-flex min-h-[50px] items-center justify-center gap-2 rounded-full border border-[#d9c6aa] bg-white px-6 text-[12px] font-bold text-[#8e6636] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#c5a573]"
            >
              View Full Gallery

              <FaArrowRight className="text-[10px] transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================
          4. TESTIMONIALS
      ========================================== */}

      <Testimonials />

      {/* =========================================
          5. BLOGS
      ========================================== */}

      <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
        <div className="pointer-events-none absolute -left-36 bottom-0 h-[340px] w-[340px] rounded-full bg-[#f4e6d1]/50 blur-[100px]" />

        <div className="site-container relative z-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-[760px]">
              <p className="section-label">
                Wellness Journal
              </p>

              <h2 className="section-title">
                Massage guides and wellness tips
              </h2>

              <p className="section-description">
                Explore useful articles about massage therapies, relaxation,
                wellness and choosing the right spa treatment for your
                preferences.
              </p>
            </div>

            <Link
              href="/blogs"
              className="group inline-flex w-fit items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--ivory)] px-5 py-3 text-[12px] font-bold text-[var(--gold-dark)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--gold)] hover:bg-white"
            >
              View All Blogs

              <FaArrowRight className="text-[10px] transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredBlogs.map((blog) => (
              <BlogsCard
                key={blog.id}
                blog={blog}
              />
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          6. POPULAR SEARCH
      ========================================== */}

      <PopularSearch />

      {/* =========================================
          7. GOOGLE REVIEWS
      ========================================== */}

      <GoogleReviews />

      {/* =========================================
          8. LOCATION
      ========================================== */}

      <section className="bg-white pb-14 pt-4 sm:pb-16 lg:pb-20">
        <div className="site-container">
          <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-[700px]">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--ivory)] px-3.5 py-2">
                <FaLocationDot className="text-[11px] text-[var(--gold-dark)]" />

                <span className="text-[9px] font-bold uppercase tracking-[2px] text-[#9f733c]">
                  Visit Blue Lotus Spa
                </span>
              </div>

              <h2 className="section-title">
                Conveniently located in Malad West
              </h2>

              <p className="section-description">
                Visit Blue Lotus Spa Malad at A Wing Solitaire II on New Link
                Road, opposite Infinity Mall in Malad West, Mumbai.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-[30px] border border-[var(--border)] bg-white shadow-[0_18px_55px_rgba(87,65,39,0.08)]">
            <GoogleMap />
          </div>
        </div>
      </section>
    </>
  );
}