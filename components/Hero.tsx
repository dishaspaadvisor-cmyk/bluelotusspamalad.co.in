"use client";

// components/Hero.tsx

import { useEffect, useState } from "react";

import {
  FaPhone,
  FaWhatsapp,
  FaSpa,
} from "react-icons/fa6";

import {
  phoneUrl,
  whatsappBookingUrl,
} from "@/data/site";

import { reportGoogleAdsConversion } from "@/lib/gtag";

const heroTitles = [
  "Best Spa in Malad",
  "Luxury Spa in Malad",
  "Expert Therapists Available",
  "Premium Massage Experience",
];

const heroDesktop = "/images/hero-desktop.mp4";
const heroMobile = "/images/hero-mobile.mp4";

const heroDesktopPoster = "/images/hero-1.png";
const heroMobilePoster = "/images/hero-2.png";

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState(heroTitles[0]);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleConversionClick = (e: React.MouseEvent<HTMLAnchorElement>, url: string) => {
    e.preventDefault();
    reportGoogleAdsConversion(url);
  };

  useEffect(() => {
    const currentTitle = heroTitles[titleIndex];

    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayText.length < currentTitle.length) {
      timeout = setTimeout(() => {
        setDisplayText(
          currentTitle.slice(0, displayText.length + 1)
        );
      }, 70);
    } else if (
      !isDeleting &&
      displayText.length === currentTitle.length
    ) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 1900);
    } else if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayText(displayText.slice(0, -1));
      }, 40);
    } else if (isDeleting && displayText.length === 0) {
      timeout = setTimeout(() => {
        setIsDeleting(false);

        setTitleIndex(
          (prev) => (prev + 1) % heroTitles.length
        );
      }, 40);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, titleIndex]);

  return (
    <section className="relative w-full overflow-hidden">
      {/* =========================================
          DESKTOP
      ========================================== */}

      <div
        className="relative hidden h-[calc(100vh-86px)] min-h-[650px] w-full bg-cover bg-center md:block"
        style={{ backgroundImage: `url(${heroDesktopPoster})` }}
      >
        <video
          className="h-full w-full object-cover object-center brightness-[1.08] saturate-[1.06]"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={heroDesktopPoster}
          aria-label="Blue Lotus Spa Malad"
        >
          <source
            src={heroDesktop}
            type="video/mp4"
          />
        </video>

        {/* Overlay */}

        <div className="pointer-events-none absolute inset-0 lux-hero-overlay" />

        {/* Content */}

        <div className="absolute inset-0 z-10 flex items-center justify-center px-6">
          <div className="w-full max-w-[1120px] text-center">
            {/* Keep H1 constant for SEO */}

            <h1 className="sr-only">
              Best Spa in Malad
            </h1>

            <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-[rgba(227,204,160,0.42)] bg-[rgba(15,42,34,0.46)] px-4 py-2 text-[10px] font-bold uppercase tracking-[2.4px] text-[var(--gold-light)] shadow-[0_10px_30px_rgba(0,0,0,0.16)] backdrop-blur-md">
              <FaSpa className="text-[12px]" />
              Blue Lotus Spa Malad West
            </div>

            {/* Animated visible heading */}

            <h2 className="mx-auto min-h-[90px] max-w-[1000px] font-serif text-[52px] font-semibold leading-[1.05] !text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.32)] lg:text-[68px] xl:text-[78px]">
              {displayText}

              <span className="ml-1 inline-block animate-pulse !text-white">
                |
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-[680px] text-[15px] font-medium leading-8 text-white/86">
              A calm, premium spa experience in Malad West with professional
              massage therapies and a refined wellness ambience.
            </p>

            {/* Buttons */}

            <div className="mt-8 flex items-center justify-center gap-3">
              <a onClick={(e) => handleConversionClick(e, phoneUrl)} href={phoneUrl} aria-label="Call Blue Lotus Spa Malad" className="lux-btn-secondary min-h-[54px] px-7 text-[13px]">
                <FaPhone className="text-[13px]" />
                <span>Call Now</span>
              </a>

              <a onClick={(e) => handleConversionClick(e, whatsappBookingUrl)} href={whatsappBookingUrl} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp Blue Lotus Spa Malad" className="lux-btn-whatsapp inline-flex min-h-[54px] items-center justify-center gap-2 px-7 text-[13px]">
                <FaWhatsapp className="text-[18px]" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================
          MOBILE
      ========================================== */}

      <div
        className="relative h-[calc(100svh-76px)] min-h-[560px] w-full bg-cover bg-center md:hidden"
        style={{ backgroundImage: `url(${heroMobilePoster})` }}
      >
        <video
          className="h-full w-full object-cover object-center brightness-[1.08] saturate-[1.06]"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={heroMobilePoster}
          aria-label="Blue Lotus Spa Malad"
        >
          <source
            src={heroMobile}
            type="video/mp4"
          />
        </video>

        {/* Overlay */}

        <div className="pointer-events-none absolute inset-0 lux-hero-overlay opacity-95" />

        {/* Content */}

        <div className="absolute inset-0 z-10 flex items-center justify-center px-4">
          <div className="w-full text-center">
            {/* SEO H1 */}

            <h1 className="sr-only">
              Best Spa in Malad
            </h1>

            <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-[rgba(227,204,160,0.42)] bg-[rgba(15,42,34,0.46)] px-3.5 py-2 text-[9px] font-bold uppercase tracking-[2px] text-[var(--gold-light)] shadow-[0_10px_30px_rgba(0,0,0,0.16)] backdrop-blur-md">
              <FaSpa className="text-[11px]" />
              Blue Lotus Spa Malad
            </div>

            {/* Animated title */}

            <h2 className="mx-auto min-h-[100px] max-w-[390px] text-center font-serif text-[40px] font-semibold leading-[1.08] !text-white drop-shadow-[0_10px_28px_rgba(0,0,0,0.34)] sm:text-[48px]">
              {displayText}

              <span className="ml-1 inline-block animate-pulse !text-white">
                |
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-[340px] text-[13px] font-medium leading-6 text-white/86">
              Premium massage therapies in a calm Malad West spa setting.
            </p>

            {/* Buttons */}

            <div className="mx-auto mt-6 grid max-w-[360px] grid-cols-2 gap-3">
              <a onClick={(e) => handleConversionClick(e, phoneUrl)} href={phoneUrl} aria-label="Call Blue Lotus Spa Malad" className="lux-btn-secondary min-h-[48px] px-4 text-[12px]">
                <FaPhone className="text-[12px]" />
                Call Now
              </a>

              <a onClick={(e) => handleConversionClick(e, whatsappBookingUrl)} href={whatsappBookingUrl} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp Blue Lotus Spa Malad" className="lux-btn-whatsapp inline-flex min-h-[48px] items-center justify-center gap-2 px-4 text-[12px]">
                <FaWhatsapp className="text-[17px]" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
