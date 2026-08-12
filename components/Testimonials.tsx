"use client";

// components/Testimonials.tsx

import Image from "next/image";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa6";

const testimonials = [
  {
    id: 1,
    name: "Amit S.",
    role: "Guest",
    rating: 5,
    review:
      "Very peaceful ambience and a comfortable spa experience. The staff was polite and the overall environment felt clean and relaxing.",
  },
  {
    id: 2,
    name: "Rahul M.",
    role: "Guest",
    rating: 5,
    review:
      "A relaxing experience after a busy week. The ambience was calm, the staff was professional and the service was well managed.",
  },
  {
    id: 3,
    name: "Karan P.",
    role: "Guest",
    rating: 5,
    review:
      "Good spa experience in Malad West. Comfortable rooms, peaceful atmosphere and friendly staff.",
  },
];

export default function Testimonials() {
  return (
    <section className="section section-white overflow-hidden lux-ivory-bg">
      <div className="site-container">
        {/* HEADER */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-[760px] text-center"
        >
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[2.5px] lux-gold">Testimonials</p>

          <h2 className="section-title mx-auto lux-espresso">
            What Our Guests Say About Their Experience
          </h2>

            <p className="section-description mx-auto lux-muted">
            Guest feedback helps us continue creating a comfortable and
            relaxing wellness experience at Blue Lotus Spa Malad.
          </p>
        </motion.div>

        {/* CARDS */}

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.id}
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
                y: -8,
                scale: 1.015,
              }}
              className="group relative overflow-hidden lux-card transition-shadow duration-300 hover:lux-border-light"
            >
              {/* SOFT DECORATION */}

              <div className="pointer-events-none absolute -right-14 -top-14 h-32 w-32 rounded-full bg-[#f8eddd] opacity-50 transition-transform duration-500 group-hover:scale-125" />

              {/* GOOGLE */}

              <div className="relative z-10 flex items-center justify-between">
                <motion.div
                  whileHover={{
                    rotate: 6,
                    scale: 1.08,
                  }}
                  transition={{ duration: 0.25 }}
                  className="flex h-12 w-12 items-center justify-center rounded-[15px] lux-ivory-bg lux-border-light shadow-sm"
                >
                  <Image
                    src="/images/google.png"
                    alt="Google"
                    width={28}
                    height={28}
                    className="object-contain"
                  />
                </motion.div>

                <span className="font-serif text-[42px] leading-none text-[#dec9a8]">
                  “
                </span>
              </div>

              {/* STARS */}

              <div className="relative z-10 mt-5 flex items-center gap-1 lux-gold">
                {Array.from({
                  length: testimonial.rating,
                }).map((_, starIndex) => (
                  <FaStar
                    key={starIndex}
                    className="text-[13px]"
                  />
                ))}
              </div>

              {/* REVIEW */}

              <p className="relative z-10 mt-5 min-h-[112px] text-[14px] leading-7 lux-muted">
                {testimonial.review}
              </p>

              {/* DIVIDER */}

              <div className="relative z-10 my-5 h-px w-full bg-[#eee5da]" />

              {/* GUEST */}

                <div className="relative z-10 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full lux-ivory-bg font-serif text-[15px] font-bold lux-emerald">
                  {testimonial.name.charAt(0)}
                </div>

                <div>
                  <p className="font-serif text-[18px] font-semibold lux-espresso">
                    {testimonial.name}
                  </p>

                  <p className="mt-1 text-[10px] font-bold uppercase tracking-[1.6px] text-[#aa8a65]">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}