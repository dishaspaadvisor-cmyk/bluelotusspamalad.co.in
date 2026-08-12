// components/ServiceCard.tsx

import Image from "next/image";
import Link from "next/link";

import {
  FaArrowRight,
  FaClock,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa6";

import type { Service } from "@/data/services";

import {
  phoneUrl,
  whatsappBookingUrl,
} from "@/data/site";

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({
  service,
}: ServiceCardProps) {
  return (
    <article className="lux-card group">
      {/* =========================================
          IMAGE
      ========================================== */}

      <Link href={`/services/${service.slug}`} className="relative block aspect-[4/3] overflow-hidden bg-[var(--soft-cream)]" style={{ position: "relative" }} aria-label={`View ${service.title}`}>
        <Image
          src={service.image}
          alt={`${service.title} at Blue Lotus Spa Malad`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(17,35,28,0.18)]/70 via-transparent to-transparent" />

        {/* Duration */}
        <div className="absolute bottom-3 left-3">
          <span className="lux-badge text-[11px] py-1 px-3">
            <FaClock className="text-[10px]" />
            {service.duration}
          </span>
        </div>
      </Link>

      {/* =========================================
          CONTENT
      ========================================== */}

      <div className="p-5">
        <p className="mb-1.5 text-[10px] font-bold uppercase tracking-[2px] lux-gold">Blue Lotus Spa Malad</p>

        <h3 className="font-serif text-[22px] font-semibold leading-[1.18] lux-espresso transition-colors duration-300 group-hover:lux-gold">
          <Link href={`/services/${service.slug}`}>{service.title}</Link>
        </h3>

        <p className="mt-2.5 line-clamp-2 text-[13px] leading-6 lux-muted">{service.description}</p>

        <Link href={`/services/${service.slug}`} className="mt-4 inline-flex items-center gap-2 text-[12px] font-bold lux-espresso">
          View Details
          <FaArrowRight className="text-[10px] transition-transform duration-300 group-hover:translate-x-1" />
        </Link>

        <div className="my-4 h-px w-full lux-border-light" />

        <div className="grid grid-cols-2 gap-2.5">
          <a href={phoneUrl} aria-label={`Call Blue Lotus Spa Malad for ${service.title}`} className="lux-btn-secondary inline-flex items-center justify-center gap-2">
            <FaPhone className="text-[12px]" />
            Call
          </a>

          <a href={whatsappBookingUrl} target="_blank" rel="noopener noreferrer" aria-label={`WhatsApp Blue Lotus Spa Malad about ${service.title}`} className="lux-btn-whatsapp inline-flex min-h-[48px] items-center justify-center gap-2 px-4 text-[12px]">
            <FaWhatsapp className="text-[16px]" />
            WhatsApp
          </a>
        </div>
      </div>
    </article>
  );
}
