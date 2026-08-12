"use client";

// components/GoogleReviews.tsx

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaQuoteRight,
  FaStar,
} from "react-icons/fa6";

import { siteData } from "@/data/site";

const reviews = [
  {
    id: 1,
    name: "Google Customer",
    title: "Relaxing Experience",
    rating: 5,
    review:
      "The ambience was calm and welcoming. A good place to relax after a tiring day.",
  },
  {
    id: 2,
    name: "Google Customer",
    title: "Professional Service",
    rating: 5,
    review:
      "Clean environment, professional service and a comfortable overall experience.",
  },
  {
    id: 3,
    name: "Google Customer",
    title: "Good Spa in Malad",
    rating: 5,
    review:
      "Convenient location in Malad West and a pleasant environment for relaxation.",
  },
];

export default function GoogleReviews() {
  return (
    <section className="section section-cream">
      <div className="site-container">
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-end lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55 }}
          >
            <p className="section-label">
              Guest Feedback
            </p>

            <h2 className="section-title">
              Trusted by Guests Across Malad
            </h2>

            <p className="section-description">
              Guests choose Blue Lotus Spa Malad for its calm ambience,
              comfortable rooms and convenient Malad West location.
            </p>
          </motion.div>

          <motion.a
            href={siteData.location.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View Blue Lotus Spa Malad on Google Maps"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="group flex w-full items-center justify-between gap-4 rounded-[22px] border border-[var(--border)] bg-white p-4 shadow-[0_12px_34px_rgba(87,65,39,0.07)] transition hover:-translate-y-1 hover:border-[var(--gold-light)] hover:shadow-[0_18px_42px_rgba(87,65,39,0.1)] sm:ml-auto sm:max-w-[430px] sm:p-5"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[var(--border-light)] bg-[var(--ivory)]">
                <Image
                  src="/images/google.png"
                  alt="Google"
                  width={30}
                  height={30}
                  className="object-contain"
                />
              </div>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-[1.9px] text-[var(--gold-dark)]">
                  Google Reviews
                </p>

                <div className="mt-1 flex items-center gap-1.5">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <FaStar
                      key={index}
                      className="text-[13px] text-[#c99542]"
                    />
                  ))}
                </div>

                <p className="mt-1 text-[12px] font-semibold text-[var(--muted-text)]">
                  View profile and directions
                </p>
              </div>
            </div>

            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--forest)] text-white transition group-hover:bg-[var(--gold-dark)]">
              <FaArrowRight className="text-[12px]" />
            </span>
          </motion.a>
        </div>

        <div className="mt-9 grid gap-5 md:grid-cols-2 lg:mt-11 lg:grid-cols-3 lg:gap-6">
          {reviews.map((review, index) => (
            <motion.article
              key={review.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative flex min-h-[315px] flex-col overflow-hidden rounded-[22px] border border-[var(--border)] bg-white p-6 shadow-[0_12px_34px_rgba(87,65,39,0.06)] transition duration-300 hover:-translate-y-1 hover:border-[var(--gold-light)] hover:shadow-[0_18px_46px_rgba(87,65,39,0.1)]"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-1">
                  {Array.from({ length: review.rating }).map((_, starIndex) => (
                    <FaStar
                      key={starIndex}
                      className="text-[13px] text-[#c99542]"
                    />
                  ))}
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border-light)] bg-[var(--ivory)]">
                  <Image
                    src="/images/google.png"
                    alt="Google"
                    width={22}
                    height={22}
                    className="object-contain"
                  />
                </div>
              </div>

              <h3 className="mt-5 font-serif text-[22px] font-semibold leading-tight text-[var(--foreground)]">
                {review.title}
              </h3>

              <p className="mt-3 flex-1 text-[14px] leading-7 text-[var(--muted-text)]">
                {review.review}
              </p>

              <div className="mt-6 flex items-end justify-between gap-4 border-t border-[var(--border-light)] pt-5">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[1.7px] text-[var(--gold-dark)]">
                    {review.name}
                  </p>

                  <p className="mt-1 text-[11px] font-semibold text-[var(--muted-text)]">
                    Google Review
                  </p>
                </div>

                <FaQuoteRight className="text-[28px] text-[var(--gold-light)] transition group-hover:-translate-y-1" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
