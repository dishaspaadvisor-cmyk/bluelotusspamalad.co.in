"use client";

// components/Popup.tsx

import { useEffect, useState } from "react";
import Image from "next/image";

import {
  FaXmark,
  FaPhone,
  FaWhatsapp,
  FaGift,
  FaTag,
} from "react-icons/fa6";

import {
  phoneUrl,
  whatsappBookingUrl,
} from "@/data/site";

export default function Popup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 35000);

    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div
        className="fixed inset-0 z-[100] bg-[rgba(15,42,34,0.58)] backdrop-blur-[2px]"
        onClick={() => setIsOpen(false)}
      />

      <div className="pointer-events-none fixed inset-0 z-[110] flex items-center justify-center px-3 py-4 sm:px-5">
        <div
          className="pointer-events-auto relative w-full max-w-[390px] overflow-hidden rounded-[24px] border border-[var(--border)] bg-white shadow-[0_25px_80px_rgba(15,42,34,0.24)] sm:max-w-[760px] sm:rounded-[30px]"
          onClick={(event) => event.stopPropagation()}
        >
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            aria-label="Close offer popup"
            className="absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-white/80 bg-white/95 text-[var(--foreground)] shadow-md transition hover:bg-[var(--ivory)] sm:right-4 sm:top-4"
          >
            <FaXmark className="text-[16px]" />
          </button>

          <div className="grid sm:grid-cols-[0.95fr_1.05fr]">
            <div
              className="relative aspect-[4/3] w-full bg-[var(--soft-cream)] sm:aspect-auto sm:min-h-[430px]"
              style={{ position: "relative" }}
            >
              <Image
                src="/images/popup.png"
                alt="Blue Lotus Spa Malad first massage offer"
                fill
                sizes="(max-width: 640px) 100vw, 380px"
                loading="eager"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(15,42,34,0.28)] via-transparent to-transparent" />
            </div>

            <div className="flex flex-col justify-center p-5 sm:p-8 lg:p-9">
              <div className="mb-3 inline-flex w-fit items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--ivory)] px-3 py-1.5">
                <FaGift className="text-[11px] text-[var(--gold-dark)]" />

                <span className="text-[9px] font-bold uppercase tracking-[1.8px] text-[var(--gold-dark)]">
                  First Visit Offer
                </span>
              </div>

              <h2 className="font-serif text-[29px] font-semibold leading-[1.08] text-[var(--foreground)] sm:text-[37px]">
                Get Up To
                <span className="block text-[var(--gold-dark)]">
                  25% Discount
                </span>
              </h2>

              <div className="mt-4 rounded-[18px] border border-[var(--border)] bg-[var(--ivory)] p-4">
                <div className="flex items-center gap-2">
                  <FaTag className="text-[13px] text-[var(--gold-dark)]" />

                  <span className="text-[9px] font-bold uppercase tracking-[1.7px] text-[var(--gold-dark)]">
                    Special Price
                  </span>
                </div>

                <div className="mt-2 flex flex-wrap items-end gap-x-3 gap-y-1">
                  <span className="text-[16px] font-semibold text-[var(--muted-text)] line-through decoration-red-400 decoration-2">
                    &#8377;4,999
                  </span>

                  <span className="font-serif text-[30px] font-bold leading-none text-[var(--forest)] sm:text-[34px]">
                    &#8377;1,999
                  </span>
                </div>

                <p className="mt-1 text-[10px] font-bold uppercase tracking-[1.3px] text-[var(--muted-text)]">
                  Starting From
                </p>
              </div>

              <p className="mt-4 text-[14px] font-semibold leading-6 text-[var(--foreground)] sm:text-[15px]">
                On your first massage service at Blue Lotus Spa Malad.
              </p>

              <p className="mt-2 text-[12px] leading-5 text-[var(--muted-text)] sm:text-[13px]">
                Call or WhatsApp us to check the available offer and massage
                timings.
              </p>

              <div className="mt-5 grid grid-cols-2 gap-2.5 sm:mt-7 sm:gap-3">
                <a
                  href={phoneUrl}
                  aria-label="Call Blue Lotus Spa Malad"
                  className="flex min-h-[48px] items-center justify-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--ivory)] px-3 text-[12px] font-bold text-[var(--gold-dark)] transition hover:bg-[var(--cream)] sm:min-h-[52px] sm:text-[13px]"
                >
                  <FaPhone className="text-[11px]" />
                  Call Now
                </a>

                <a
                  href={whatsappBookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp Blue Lotus Spa Malad"
                  className="flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-[#269b52] px-3 text-[12px] font-bold text-white shadow-[0_8px_20px_rgba(38,155,82,0.18)] transition hover:bg-[#218947] sm:min-h-[52px] sm:text-[13px]"
                >
                  <FaWhatsapp className="text-[17px]" />
                  WhatsApp
                </a>
              </div>

              <p className="mt-4 text-center text-[9px] leading-4 text-[var(--muted-text)] sm:text-left">
                Offer availability may vary. Please confirm details with the
                spa before visiting.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
