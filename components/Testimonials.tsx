"use client";

// components/Testimonials.tsx

import { motion } from "framer-motion";
import {
  FaQuoteRight,
  FaStar,
} from "react-icons/fa6";

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
    <section className="section section-white">
      <div className="site-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
          className="mx-auto max-w-[780px] text-center"
        >
          <p className="section-label">
            Testimonials
          </p>

          <h2 className="section-title mx-auto">
            What Our Guests Say About Their Experience
          </h2>

          <p className="section-description mx-auto">
            Guest feedback helps us continue creating a comfortable and
            relaxing wellness experience at Blue Lotus Spa Malad.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:mt-12 lg:grid-cols-3 lg:gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group flex min-h-[345px] flex-col rounded-[22px] border border-[var(--border)] bg-[var(--ivory)] p-6 shadow-[0_12px_34px_rgba(87,65,39,0.06)] transition duration-300 hover:-translate-y-1 hover:border-[var(--gold-light)] hover:bg-white hover:shadow-[0_18px_46px_rgba(87,65,39,0.1)] sm:p-7"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--forest)] font-serif text-[18px] font-semibold text-[var(--gold-light)] shadow-[0_10px_24px_rgba(15,42,34,0.16)]">
                  {testimonial.name.charAt(0)}
                </div>

                <FaQuoteRight className="text-[30px] text-[var(--gold-light)] transition group-hover:-translate-y-1" />
              </div>

              <div className="mt-6 flex items-center gap-1.5 text-[#c99542]">
                {Array.from({ length: testimonial.rating }).map((_, starIndex) => (
                  <FaStar
                    key={starIndex}
                    className="text-[13px]"
                  />
                ))}
              </div>

              <p className="mt-5 flex-1 text-[14px] leading-7 text-[var(--muted-text)]">
                {testimonial.review}
              </p>

              <div className="mt-6 border-t border-[var(--border-light)] pt-5">
                <p className="font-serif text-[20px] font-semibold leading-none text-[var(--foreground)]">
                  {testimonial.name}
                </p>

                <p className="mt-2 text-[10px] font-bold uppercase tracking-[1.7px] text-[var(--gold-dark)]">
                  {testimonial.role}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
