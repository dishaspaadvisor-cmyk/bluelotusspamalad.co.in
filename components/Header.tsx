// components/Header.tsx

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import {
  FaBars,
  FaXmark,
  FaPhone,
  FaWhatsapp,
  FaLocationDot,
  FaArrowRight,
} from "react-icons/fa6";

import {
  siteData,
  phoneUrl,
  whatsappBookingUrl,
} from "@/data/site";

const navigation = siteData.navigation;

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* =========================================
          TOP INFORMATION BAR
      ========================================== */}

      <div className="hidden lux-ivory-bg lg:block">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-2.5 xl:px-10">
          {/* LOCATION */}

          <a
            href={siteData.location.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-[13px] font-medium lux-espresso transition-colors duration-300 hover:lux-gold"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[var(--gold-dark)] shadow-sm">
              <FaLocationDot className="text-[11px]" />
            </span>

            <span>
              A Wing Solitaire II, Opp. Infinity Mall, Malad West
            </span>
          </a>

          {/* RIGHT INFO */}

          <div className="flex items-center gap-6">
            <span className="text-[13px] font-medium lux-muted">
              {siteData.timings.display}
            </span>

            <span className="h-4 w-px bg-[rgba(216,203,184,0.85)]" />

            <a
              href={phoneUrl}
              className="flex items-center gap-2 text-[13px] font-semibold lux-espresso transition-colors duration-300 hover:lux-gold"
            >
              <FaPhone className="text-[11px] text-[var(--gold-dark)]" />

              {siteData.contact.phone}
            </a>
          </div>
        </div>
      </div>

      {/* =========================================
          MAIN HEADER
      ========================================== */}

      <header className={`sticky top-0 z-50 w-full transition-all duration-300 lux-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-4 sm:px-6 lg:h-[86px] xl:px-10">
          {/* =========================================
              BRAND / LOGO
          ========================================== */}

          <Link href="/" onClick={closeMenu} className="group flex min-w-0 items-center gap-3" aria-label="Blue Lotus Spa Malad Home">
            {/* LOGO */}

            <div className="relative flex h-[48px] w-[48px] shrink-0 items-center justify-center overflow-hidden rounded-full border lux-border bg-white shadow-[0_5px_20px_rgba(154,112,53,0.12)] lg:h-[54px] lg:w-[54px]">
              <Image
                src="/images/favicon.png"
                alt="Blue Lotus Spa Malad Logo"
                width={54}
                height={54}
                priority
                className="h-full w-full object-contain p-1"
              />
            </div>

            {/* BRAND TEXT */}

            <div className="min-w-0">
              <div className="flex items-baseline gap-1.5">
                <span className="truncate font-serif text-[20px] font-semibold tracking-[0.3px] lux-espresso sm:text-[22px] lg:text-[25px]">Blue Lotus</span>

                <span className="hidden text-[11px] font-bold uppercase tracking-[2px] lux-gold sm:inline">Spa</span>
              </div>

              <p className="mt-0.5 truncate text-[9px] font-semibold uppercase tracking-[2.2px] lux-muted sm:text-[10px]">Malad West</p>
            </div>
          </Link>

          {/* =========================================
              DESKTOP NAVIGATION
          ========================================== */}

          <nav className="hidden items-center gap-0.5 lg:flex">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} className="group relative rounded-full px-3.5 py-2.5 text-[13px] font-semibold lux-espresso transition-all duration-300 hover:lux-cream-bg xl:px-4 xl:text-[14px]">
                {item.label}

                <span className="absolute bottom-[5px] left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-[var(--gold)] transition-all duration-300 group-hover:w-5" />
              </Link>
            ))}
          </nav>

          {/* =========================================
              DESKTOP CALL + WHATSAPP
          ========================================== */}

          <div className="hidden items-center gap-2.5 lg:flex">
            {/* CALL */}

            <a href={phoneUrl} aria-label="Call Blue Lotus Spa Malad" className="lux-btn-secondary" >
              <FaPhone className="text-[11px]" />
              <span>Call</span>
            </a>

            {/* WHATSAPP */}

            <a href={whatsappBookingUrl} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp Blue Lotus Spa Malad" className="lux-btn-whatsapp inline-flex min-h-[52px] items-center justify-center gap-2 px-6 text-[13px]">
              <FaWhatsapp className="text-[17px]" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* =========================================
              MOBILE ACTIONS
          ========================================== */}

          <div className="flex items-center gap-2 lg:hidden">
            {/* CALL */}

            <a href={phoneUrl} className="flex h-[42px] w-[42px] items-center justify-center rounded-full border lux-border lux-cream-bg text-[var(--gold-dark)] transition-colors duration-300 hover:bg-[var(--cream)]" aria-label="Call Blue Lotus Spa Malad">
              <FaPhone className="text-[15px]" />
            </a>

            {/* WHATSAPP */}

            <a href={whatsappBookingUrl} target="_blank" rel="noopener noreferrer" className="hidden h-[42px] w-[42px] items-center justify-center rounded-full min-[380px]:flex lux-btn-whatsapp" aria-label="WhatsApp Blue Lotus Spa Malad">
              <FaWhatsapp className="text-[19px]" />
            </a>

            {/* MENU */}

            <button type="button" onClick={() => setIsOpen(true)} className="flex h-[42px] w-[42px] items-center justify-center rounded-full lux-gold-bg text-white shadow-sm transition-colors duration-300 hover:opacity-95" aria-label="Open navigation menu" aria-expanded={isOpen} aria-controls="mobile-navigation">
              <FaBars className="text-[17px]" />
            </button>
          </div>
        </div>
      </header>

      {/* =========================================
          MOBILE BACKDROP
      ========================================== */}

      <button type="button" aria-label="Close navigation menu" onClick={closeMenu} className={`fixed inset-0 z-[70] bg-[rgba(54,45,35,0.3)] backdrop-blur-[2px] transition-all duration-300 lg:hidden ${isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}`} />

      {/* =========================================
          MOBILE MENU
      ========================================== */}

      <aside id="mobile-navigation" className={`fixed right-0 top-0 z-[80] flex h-dvh w-[88%] max-w-[390px] flex-col lux-ivory-bg shadow-[-15px_0_45px_rgba(45,35,23,0.13)] transition-transform duration-500 ease-out lg:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {/* =========================================
            MOBILE MENU HEADER
        ========================================== */}

        <div className="flex items-center justify-between border-b lux-border px-5 py-5">
          <Link
            href="/"
            onClick={closeMenu}
            className="flex min-w-0 items-center gap-3"
            aria-label="Blue Lotus Spa Malad Home"
          >
            {/* MOBILE LOGO */}

            <div className="relative flex h-[46px] w-[46px] shrink-0 items-center justify-center overflow-hidden rounded-full border lux-border bg-white shadow-sm">
              <Image
                src="/images/favicon.png"
                alt="Blue Lotus Spa Malad Logo"
                width={46}
                height={46}
                className="h-full w-full object-contain p-1"
              />
            </div>

            <div className="min-w-0">
              <p className="truncate font-serif text-[20px] font-semibold lux-espresso">
                Blue Lotus
              </p>

              <p className="mt-0.5 text-[9px] font-bold uppercase tracking-[2px] lux-gold">
                Spa Malad
              </p>
            </div>
          </Link>

          {/* CLOSE */}

          <button type="button" onClick={closeMenu} className="flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-full border lux-border bg-white text-[var(--brown-dark)] transition-colors duration-300 hover:bg-[#faf5ee]" aria-label="Close menu">
            <FaXmark className="text-[18px]" />
          </button>
        </div>

        {/* =========================================
            MOBILE NAVIGATION TITLE
        ========================================== */}

        <div className="px-5 pb-2 pt-6">
          <p className="text-[10px] font-bold uppercase tracking-[2.5px] lux-gold">Explore Blue Lotus</p>
        </div>

        {/* =========================================
            MOBILE NAVIGATION LINKS
        ========================================== */}

        <nav className="flex flex-col px-4">
          {navigation.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className="group flex items-center justify-between border-b lux-border px-2 py-[15px]"
            >
              <div className="flex items-center gap-4">
                <span className="text-[10px] font-bold text-[#c3a473]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="text-[16px] font-semibold lux-espresso transition-colors duration-300 group-hover:lux-gold">
                  {item.label}
                </span>
              </div>

              <FaArrowRight className="text-[11px] text-[var(--gold-light)] transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          ))}
        </nav>

        {/* =========================================
            MOBILE CONTACT
        ========================================== */}

        <div className="mt-auto px-5 pb-6 pt-7">
          <div className="rounded-[24px] border lux-border lux-ivory-bg p-5">
            <p className="mb-1 text-[10px] font-bold uppercase tracking-[2px] lux-gold">Visit Us</p>

            <p className="mb-5 text-[13px] leading-6 lux-muted">CTS No. 269, A-3, Unit 1, A Wing Solitaire II, New Link Rd, Opp. Infinity Mall, Malad West, Mumbai 400064</p>

            <div className="grid grid-cols-2 gap-2.5">
              <a href={phoneUrl} className="flex h-[47px] items-center justify-center gap-2 rounded-xl lux-btn-secondary" aria-label="Call Blue Lotus Spa Malad">
                <FaPhone className="text-[12px]" />
                Call
              </a>

              <a href={whatsappBookingUrl} target="_blank" rel="noopener noreferrer" className="flex h-[47px] items-center justify-center gap-2 rounded-xl lux-btn-whatsapp" aria-label="WhatsApp Blue Lotus Spa Malad">
                <FaWhatsapp className="text-[12px]" />
                WhatsApp
              </a>
            </div>

            <a href={siteData.location.directionsUrl} target="_blank" rel="noopener noreferrer" className="mt-3 flex items-center justify-center gap-2 py-2 text-[12px] font-semibold lux-muted transition-colors duration-300 hover:lux-gold">
              <FaLocationDot className="text-[var(--gold-dark)]" />
              Get Directions
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}
