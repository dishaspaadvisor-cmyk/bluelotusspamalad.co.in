// components/FloatingButton.tsx

"use client";

import {
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa6";

import {
  phoneUrl,
  whatsappBookingUrl,
} from "@/data/site";

import { reportGoogleAdsConversion } from "@/lib/gtag";

export default function FloatingButton() {
  const handleConversionClick = (e: React.MouseEvent<HTMLAnchorElement>, url: string) => {
    e.preventDefault();
    reportGoogleAdsConversion(url);
  };

  return (
    <>
      {/* =========================================
          DESKTOP FLOATING BUTTONS
      ========================================== */}

      <div className="fixed bottom-6 right-6 z-[60] hidden flex-col gap-3 md:flex">
        {/* WHATSAPP */}

        <a 
          onClick={(e) => handleConversionClick(e, whatsappBookingUrl)}
          href={whatsappBookingUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="WhatsApp Blue Lotus Spa Malad" 
          className="lux-btn-whatsapp inline-flex min-h-[52px] items-center justify-center gap-2 px-6 text-[13px]"
        >
          <FaWhatsapp className="text-[19px]" />
          <span>WhatsApp</span>
        </a>

        {/* CALL */}

        <a 
          onClick={(e) => handleConversionClick(e, phoneUrl)}
          href={phoneUrl} 
          aria-label="Call Blue Lotus Spa Malad" 
          className="lux-btn-secondary"
        >
          <FaPhone className="text-[13px]" />
          <span>Call Now</span>
        </a>
      </div>

      {/* =========================================
          MOBILE BOTTOM FLOATING BAR
      ========================================== */}

      <div className="fixed inset-x-0 bottom-0 z-[60] lux-border-light lux-ivory-bg p-2.5 shadow-[0_-8px_30px_rgba(70,53,34,0.1)] backdrop-blur-md md:hidden">
        <div className="mx-auto grid max-w-[520px] grid-cols-2 gap-2.5">
          {/* CALL */}

          <a 
            onClick={(e) => handleConversionClick(e, phoneUrl)}
            href={phoneUrl} 
            aria-label="Call Blue Lotus Spa Malad" 
            className="lux-btn-secondary flex items-center justify-center gap-2"
          >
            <FaPhone className="text-[12px]" />
            Call Now
          </a>

          {/* WHATSAPP */}

          <a 
            onClick={(e) => handleConversionClick(e, whatsappBookingUrl)}
            href={whatsappBookingUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="WhatsApp Blue Lotus Spa Malad" 
            className="lux-btn-whatsapp flex min-h-[48px] items-center justify-center gap-2 px-4 text-[12px]"
          >
            <FaWhatsapp className="text-[18px]" />
            WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}
