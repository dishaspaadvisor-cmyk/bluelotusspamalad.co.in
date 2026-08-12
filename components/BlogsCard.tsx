// components/BlogsCard.tsx

import Image from "next/image";
import Link from "next/link";

import {
  FaArrowRight,
  FaCalendarDays,
  FaSpa,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa6";

import type { Blog } from "@/data/blogs";

import {
  phoneUrl,
  whatsappBookingUrl,
} from "@/data/site";

interface BlogsCardProps {
  blog: Blog;
}

export default function BlogsCard({
  blog,
}: BlogsCardProps) {
  return (
    <article className="lux-card group">
      {/* =========================================
          IMAGE
      ========================================== */}

      <Link href={`/blogs/${blog.slug}`} className="relative block aspect-[16/10] overflow-hidden bg-[var(--soft-cream)]" style={{ position: "relative" }} aria-label={`Read ${blog.title}`}>
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(17,35,28,0.18)]/70 via-transparent to-transparent" />

        {/* Category Badge */}

        <div className="absolute left-4 top-4">
          <span className="lux-badge text-[11px]">
            <FaSpa className="text-[10px]" />
            {blog.category}
          </span>
        </div>
      </Link>

      {/* =========================================
          CONTENT
      ========================================== */}

      <div className="p-5 sm:p-6">
        {/* META */}

        <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[1.3px] lux-gold">
          <FaCalendarDays className="text-[10px] text-[var(--gold-dark)]" />

          <span>{blog.category}</span>
        </div>

        {/* TITLE */}

        <h3 className="mt-3 font-serif text-[22px] font-semibold leading-[1.25] lux-espresso transition-colors duration-300 group-hover:lux-gold">
          <Link href={`/blogs/${blog.slug}`}>{blog.title}</Link>
        </h3>

        {/* EXCERPT */}

        <p className="mt-3 line-clamp-3 text-[14px] leading-7 lux-muted">
          {blog.excerpt}
        </p>

        {/* READ ARTICLE */}

        <Link href={`/blogs/${blog.slug}`} className="mt-5 inline-flex items-center gap-2 text-[12px] font-bold lux-espresso">
          Read Article

          <FaArrowRight className="text-[10px] transition-transform duration-300 group-hover:translate-x-1" />
        </Link>

        {/* DIVIDER */}

        <div className="my-5 h-px w-full lux-border-light" />

        {/* =========================================
            CALL + WHATSAPP
        ========================================== */}

        <div className="grid grid-cols-2 gap-2.5">
          {/* CALL */}

          <a href={phoneUrl} aria-label={`Call Blue Lotus Spa Malad about ${blog.title}`} className="lux-btn-secondary inline-flex items-center justify-center gap-2">
            <FaPhone className="text-[11px]" />

            Call Now
          </a>

          {/* WHATSAPP */}

          <a href={whatsappBookingUrl} target="_blank" rel="noopener noreferrer" aria-label={`WhatsApp Blue Lotus Spa Malad about ${blog.title}`} className="lux-btn-whatsapp inline-flex min-h-[48px] items-center justify-center gap-2 px-4 text-[12px]">
            <FaWhatsapp className="text-[17px]" />

            WhatsApp
          </a>
        </div>
      </div>
    </article>
  );
}
