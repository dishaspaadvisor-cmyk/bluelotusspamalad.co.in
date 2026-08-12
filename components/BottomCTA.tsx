// components/BottomCTA.tsx

import {
  FaPhone,
  FaWhatsapp,
  FaArrowRight,
  FaSpa,
} from "react-icons/fa6";

import {
  phoneUrl,
  whatsappBookingUrl,
  siteData,
} from "@/data/site";

export default function BottomCTA() {
  return (
    <section className="relative overflow-hidden lux-ivory-bg">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-[rgba(197,161,93,0.16)] blur-3xl" />
        <div className="absolute -right-24 top-0 h-80 w-80 rounded-full bg-[rgba(23,56,46,0.08)] blur-3xl" />
      </div>

      <div className="site-container relative z-10 py-10 sm:py-12 lg:py-14">
        <div className="lux-card overflow-hidden rounded-[24px]">
          <div className="grid lg:grid-cols-[1fr_auto] lg:items-stretch">
            <div className="p-6 sm:p-8 lg:p-10">
              <div className="mb-4 inline-flex items-center gap-2">
                <span className="lux-badge">
                  <FaSpa className="text-[11px]" />
                  Blue Lotus Spa Malad
                </span>
              </div>

              <h2 className="max-w-[700px] font-serif text-[30px] font-semibold leading-[1.15] lux-espresso sm:text-[36px] lg:text-[42px]">
                Ready for a relaxing spa experience?
              </h2>

              <p className="mt-4 max-w-[700px] text-[14px] leading-7 lux-muted sm:text-[15px]">
                Call or WhatsApp Blue Lotus Spa Malad to check available
                services, massage timings and book your preferred appointment
                in Malad West, Mumbai.
              </p>

              <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-[11px] font-semibold lux-muted">
                <span>Premium Spa Ambience</span>
                <span className="hidden sm:inline">•</span>
                <span>Professional Therapists</span>
                <span className="hidden sm:inline">•</span>
                <span>Multiple Massage Therapies</span>
              </div>
            </div>

            <div className="lux-deep-band p-6 sm:p-8 lg:flex lg:min-w-[340px] lg:flex-col lg:justify-center lg:p-10">
              <p className="mb-4 text-center text-[10px] font-bold uppercase tracking-[2px] lux-gold lg:text-left">
                Book Your Appointment
              </p>

              <div className="flex flex-col gap-3">
                <a
                  href={phoneUrl}
                  className="lux-btn-secondary justify-between"
                  aria-label="Call Blue Lotus Spa Malad"
                >
                  <span className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[rgba(23,56,46,0.08)] text-[var(--gold-dark)]">
                      <FaPhone className="text-[13px]" />
                    </span>

                    <span>
                      <span className="block text-[10px] font-medium text-[var(--muted-text)]">
                        Call Now
                      </span>

                      <span className="block">
                        {siteData.contact.phone}
                      </span>
                    </span>
                  </span>

                  <FaArrowRight className="text-[10px]" />
                </a>

                <a
                  href={whatsappBookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="lux-btn-whatsapp inline-flex min-h-[52px] items-center justify-between gap-4 px-5 text-[13px]"
                  aria-label="WhatsApp Blue Lotus Spa Malad"
                >
                  <span className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15">
                      <FaWhatsapp className="text-[18px]" />
                    </span>

                    <span>
                      <span className="block text-[10px] font-medium text-white/75">
                        WhatsApp
                      </span>

                      <span className="block">
                        WhatsApp
                      </span>
                    </span>
                  </span>

                  <FaArrowRight className="text-[10px]" />
                </a>
              </div>

              <p className="mt-4 text-center text-[10px] leading-5 text-[rgba(251,248,241,0.72)] lg:text-left">
                Quick booking assistance for service and timing availability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
