"use client";

// components/GoogleReviews.tsx

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaStar,
  FaQuoteRight,
} from "react-icons/fa6";

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
    <section className="relative overflow-hidden lux-ivory-bg py-14 sm:py-16 lg:py-20">
      {/* Background decoration */}

      <div className="pointer-events-none absolute -left-24 top-10 h-[260px] w-[260px] rounded-full bg-[#f5e7d3] opacity-40 blur-[90px]" />

      <div className="pointer-events-none absolute -right-24 bottom-0 h-[300px] w-[300px] rounded-full bg-[#f8eddd] opacity-60 blur-[90px]" />

      <div className="site-container relative z-10">
        {/* =========================================
            SECTION HEADER
        ========================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.6,
          }}
          className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-[720px]">
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[2.5px] lux-gold sm:text-[11px]">Guest Feedback</p>

            <h2 className="section-title">
              Trusted by Guests Across Malad
            </h2>

            <p className="section-description">
              Discover what guests appreciate about the ambience, service and
              relaxation experience at Blue Lotus Spa Malad.
            </p>
          </div>

          {/* Google badge */}

          <motion.div
            whileHover={{
              y: -3,
              scale: 1.02,
            }}
            transition={{
              duration: 0.25,
            }}
            className="flex w-fit items-center gap-3 rounded-full lux-ivory-bg lux-border-light px-4 py-2.5 shadow-[0_8px_25px_rgba(87,65,39,0.06)]"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-full lux-ivory-bg">
              <Image
                src="/images/google.png"
                alt="Google"
                width={24}
                height={24}
                className="object-contain"
              />
            </div>

            <div>
              <p className="text-[11px] font-bold text-[#4c4035]">
                Google Reviews
              </p>

              <div className="mt-1 flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, index) => (
                  <FaStar
                    key={index}
                    className="text-[10px] text-[#c6944b]"
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* =========================================
            REVIEW CARDS
        ========================================== */}

        <div className="mt-9 grid gap-5 sm:mt-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {reviews.map((review, index) => (
            <motion.article
              key={review.id}
              initial={{
                opacity: 0,
                y: 35,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.25,
              }}
              transition={{
                duration: 0.55,
                delay: index * 0.12,
              }}
              whileHover={{
                y: -7,
                scale: 1.015,
              }}
              className="group relative overflow-hidden lux-card transition-shadow duration-300 hover:lux-border-light sm:p-6"
            >
              {/* Decorative circle */}

              <div className="pointer-events-none absolute -right-14 -top-14 h-[140px] w-[140px] rounded-full bg-[var(--cream)] transition-transform duration-500 group-hover:scale-125" />

              {/* TOP */}

                <div className="relative z-10 flex items-center justify-between">
                <div className="flex items-center gap-1">
                  {Array.from({
                    length: review.rating,
                  }).map((_, starIndex) => (
                    <motion.span
                      key={starIndex}
                      whileHover={{
                        scale: 1.2,
                      }}
                    >
                      <FaStar className="text-[12px] text-[#c59044]" />
                    </motion.span>
                  ))}
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-full lux-ivory-bg lux-border-light shadow-sm">
                  <Image src="/images/google.png" alt="Google" width={22} height={22} className="object-contain" />
                </div>
              </div>

              {/* Title */}

              <h3 className="relative z-10 mt-5 font-serif text-[21px] font-semibold text-[var(--foreground)] transition-colors duration-300 group-hover:text-[#9b7035] sm:text-[22px]">
                {review.title}
              </h3>

              {/* Review */}

              <p className="relative z-10 mt-3 min-h-[105px] text-[13px] leading-7 text-[var(--muted-text)] sm:text-[14px]">
                {review.review}
              </p>

              {/* Divider */}

              <div className="relative z-10 my-5 h-px bg-[#eee5da]" />

              {/* Bottom */}

              <div className="relative z-10 flex items-center justify-between gap-3">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[1.5px] text-[#a08b72] sm:text-[11px]">
                    {review.name}
                  </p>

                  <p className="mt-1 text-[10px] text-[#b0a396]">
                    Google Review
                  </p>
                </div>

                <FaQuoteRight className="text-[25px] text-[#ddc7a4]/60 transition-transform duration-300 group-hover:-translate-y-1" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}