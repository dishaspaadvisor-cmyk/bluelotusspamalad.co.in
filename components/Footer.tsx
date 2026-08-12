// components/Footer.tsx

import Link from "next/link";

import {
  FaPhone,
  FaWhatsapp,
  FaEnvelope,
  FaLocationDot,
  FaClock,
  FaInstagram,
  FaFacebookF,
  FaArrowRight,
  FaSpa,
} from "react-icons/fa6";

import {
  siteData,
  phoneUrl,
  emailUrl,
  whatsappBookingUrl,
} from "@/data/site";

export default function Footer() {
  const quickLinks = siteData.navigation;
  const popularServices = siteData.serviceCategories.slice(0, 8);

  return (
    <footer className="relative overflow-hidden bg-[var(--forest-dark)] text-[var(--ivory)]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-[rgba(197,161,93,0.12)] blur-3xl" />
        <div className="absolute -right-28 bottom-4 h-80 w-80 rounded-full bg-[rgba(40,83,70,0.28)] blur-3xl" />
      </div>

      <div className="site-container relative z-10 py-12 sm:py-14 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.8fr_0.95fr_1.15fr] lg:gap-9 xl:gap-12">
          <div>
            <Link
              href="/"
              className="inline-flex text-white items-center gap-4"
              aria-label="Blue Lotus Spa Malad Home"
            >
              <div className="flex h-[64px] w-[64px] items-center justify-center rounded-full border border-[rgba(227,204,160,0.45)] bg-[var(--ivory)] shadow-[0_18px_44px_rgba(0,0,0,0.2)]">
                <span className="font-serif text-[21px] font-bold text-[var(--forest)]">
                  BL
                </span>
              </div>

              <div>
                <h3 className="font-serif text-[27px] font-semibold leading-none text-white">
                  Blue Lotus
                </h3>

                <p className="mt-2 text-[10px] font-bold uppercase tracking-[2.4px] text-[var(--gold)]">
                  Spa Malad
                </p>
              </div>
            </Link>

            <p className="mt-6 max-w-[430px] text-[14px] leading-7 text-[rgba(251,248,241,0.76)]">
              {siteData.footer.description}
            </p>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-[rgba(227,204,160,0.24)] bg-white/5 px-4 py-2 text-[10px] font-bold uppercase tracking-[2px] text-[var(--gold-light)]">
              <FaSpa className="text-[12px]" />
              Premium Spa in Malad West
            </div>

            <div className="mt-6 flex items-center gap-3">
              {siteData.socialLinks.instagram && (
                <a
                  href={siteData.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(227,204,160,0.24)] bg-white/8 text-[var(--gold-light)] transition hover:-translate-y-0.5 hover:bg-white/12"
                >
                  <FaInstagram />
                </a>
              )}

              {siteData.socialLinks.facebook && (
                <a
                  href={siteData.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(227,204,160,0.24)] bg-white/8 text-[var(--gold-light)] transition hover:-translate-y-0.5 hover:bg-white/12"
                >
                  <FaFacebookF />
                </a>
              )}
            </div>
          </div>

          <div>
            <p className="mb-5 text-[11px] font-bold uppercase tracking-[2.4px] text-[var(--gold)]">
              Quick Links
            </p>

            <nav className="grid grid-cols-2 gap-2 lg:grid-cols-1">
              {quickLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group flex items-center gap-2 rounded-full px-0 py-1.5 text-[14px] text-[rgba(251,248,241,0.78)] transition hover:text-[var(--gold-light)]"
                >
                  <FaArrowRight className="text-[10px] text-[var(--gold)] transition-transform group-hover:translate-x-1" />
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="mb-5 text-[11px] font-bold uppercase tracking-[2.4px] text-[var(--gold)]">
              Popular Services
            </p>

            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-1">
              {popularServices.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group flex items-center gap-2 py-1.5 text-[14px] text-[rgba(251,248,241,0.78)] transition hover:text-[var(--gold-light)]"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--gold)] transition-transform group-hover:scale-125" />
                  {service.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-5 text-[11px] font-bold uppercase tracking-[2.4px] text-[var(--gold)]">
              Contact Us
            </p>

            <div className="space-y-4">
              <a
                href={siteData.location.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3"
              >
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--ivory)] text-[var(--gold-dark)] transition-transform group-hover:scale-105">
                  <FaLocationDot className="text-[13px]" />
                </span>

                <span className="text-[13px] leading-6 text-[rgba(251,248,241,0.78)] transition group-hover:text-[var(--gold-light)]">
                  {siteData.address.full}
                </span>
              </a>

              <a href={phoneUrl} className="group flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--ivory)] text-[var(--gold-dark)] transition-transform group-hover:scale-105">
                  <FaPhone className="text-[12px]" />
                </span>

                <span className="font-semibold text-white transition group-hover:text-[var(--gold-light)]">
                  {siteData.contact.phone}
                </span>
              </a>

              <a href={emailUrl} className="group flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--ivory)] text-[var(--gold-dark)] transition-transform group-hover:scale-105">
                  <FaEnvelope className="text-[12px]" />
                </span>

                <span className="break-all text-[13px] leading-6 text-[rgba(251,248,241,0.78)] transition group-hover:text-[var(--gold-light)]">
                  {siteData.contact.email}
                </span>
              </a>

              <div className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--ivory)] text-[var(--gold-dark)]">
                  <FaClock className="text-[12px]" />
                </span>

                <span className="text-[13px] leading-6 text-[rgba(251,248,241,0.78)]">
                  {siteData.timings.display}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-y border-[rgba(227,204,160,0.18)] py-6">
          <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[2.4px] text-[var(--gold)]">
                Book Your Appointment
              </p>

              <h3 className="mt-2 font-serif text-[25px] font-semibold leading-tight text-white sm:text-[30px]">
                Relax at Blue Lotus Spa Malad
              </h3>

              <p className="mt-2 max-w-[760px] text-[14px] leading-7 text-[rgba(251,248,241,0.74)]">
                Call or WhatsApp us to know more about our spa services and
                available timings in Malad West, Mumbai.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:flex">
              <a
                href={phoneUrl}
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border border-[rgba(227,204,160,0.38)] bg-[var(--ivory)] px-5 text-[12px] font-bold text-[var(--forest)] shadow-[0_12px_28px_rgba(0,0,0,0.18)] transition hover:-translate-y-0.5 hover:bg-white"
                aria-label="Call Blue Lotus Spa Malad"
              >
                <FaPhone className="text-[12px]" />
                Call Now
              </a>

              <a
                href={whatsappBookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="lux-btn-whatsapp inline-flex min-h-[48px] items-center justify-center gap-2 px-5 text-[12px]"
                aria-label="WhatsApp Blue Lotus Spa Malad"
              >
                <FaWhatsapp className="text-[17px]" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="pt-6 text-center sm:flex sm:items-center sm:justify-between sm:text-left">
          <p className="text-[12px] text-[rgba(251,248,241,0.68)]">
            {siteData.footer.copyright}
          </p>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 sm:mt-0 sm:justify-end">
            <Link href="/about" className="text-[12px] font-semibold text-[rgba(251,248,241,0.74)] transition hover:text-[var(--gold-light)]">
              About
            </Link>
            <Link href="/services" className="text-[12px] font-semibold text-[rgba(251,248,241,0.74)] transition hover:text-[var(--gold-light)]">
              Services
            </Link>
            <Link href="/gallery" className="text-[12px] font-semibold text-[rgba(251,248,241,0.74)] transition hover:text-[var(--gold-light)]">
              Gallery
            </Link>
            <Link href="/blogs" className="text-[12px] font-semibold text-[rgba(251,248,241,0.74)] transition hover:text-[var(--gold-light)]">
              Blogs
            </Link>
            <Link href="/contact" className="text-[12px] font-semibold text-[rgba(251,248,241,0.74)] transition hover:text-[var(--gold-light)]">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
