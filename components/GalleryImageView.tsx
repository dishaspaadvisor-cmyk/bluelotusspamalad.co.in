"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaCamera,
  FaChevronLeft,
  FaChevronRight,
  FaExpand,
  FaXmark,
} from "react-icons/fa6";

import type { GalleryImage } from "@/data/gallery";

type GalleryImageViewProps = {
  images: GalleryImage[];
};

export default function GalleryImageView({ images }: GalleryImageViewProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const activeImage =
    activeIndex === null ? null : images[activeIndex] ?? images[0];

  const closeViewer = useCallback(() => setActiveIndex(null), []);

  const showPrevious = useCallback(() => {
    setActiveIndex((current) =>
      current === null ? 0 : (current - 1 + images.length) % images.length
    );
  }, [images.length]);

  const showNext = useCallback(() => {
    setActiveIndex((current) =>
      current === null ? 0 : (current + 1) % images.length
    );
  }, [images.length]);

  useEffect(() => {
    if (activeIndex === null) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeViewer();
      }

      if (event.key === "ArrowLeft") {
        showPrevious();
      }

      if (event.key === "ArrowRight") {
        showNext();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex, closeViewer, showNext, showPrevious]);

  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
        {images.map((item, index) => {
          const isLarge =
            index === 0 ||
            index === 5 ||
            index === 7 ||
            index === 11 ||
            index === 16;

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`group relative block w-full overflow-hidden rounded-[22px] border border-[var(--border-light)] bg-[var(--soft-cream)] text-left shadow-[0_10px_30px_rgba(87,65,39,0.05)] outline-none transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_48px_rgba(36,27,19,0.14)] focus-visible:ring-2 focus-visible:ring-[var(--gold)] focus-visible:ring-offset-2 ${
                isLarge
                  ? "aspect-[16/10] sm:col-span-2 lg:col-span-2"
                  : "aspect-[4/5]"
              }`}
              aria-label={`View ${item.title}`}
            >
              <Image
                src={item.image}
                alt={item.alt}
                fill
                loading={index < 3 ? "eager" : "lazy"}
                sizes={
                  isLarge
                    ? "(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 66vw"
                    : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                }
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1712]/78 via-[#1a1712]/18 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-95" />

              <div className="absolute left-4 top-4">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/92 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[1.4px] text-[var(--gold-dark)] shadow-sm backdrop-blur-md">
                  <FaCamera className="text-[9px]" />
                  {item.category}
                </span>
              </div>

              <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/45 bg-[rgba(15,42,34,0.58)] text-white opacity-0 shadow-sm backdrop-blur-md transition group-hover:opacity-100 group-focus-visible:opacity-100">
                <FaExpand className="text-[12px]" />
              </div>

              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                <p className="text-[9px] font-bold uppercase tracking-[2px] text-[#ead6b6]">
                  Blue Lotus Spa Malad
                </p>

                <h2 className="mt-1 font-serif text-[22px] font-semibold leading-tight text-white sm:text-[24px]">
                  {item.title}
                </h2>
              </div>
            </button>
          );
        })}
      </div>

      {activeImage && activeIndex !== null ? (
        <div
          className="fixed inset-0 z-[120] bg-[rgba(10,24,20,0.88)] px-3 py-4 backdrop-blur-md sm:px-6"
          role="dialog"
          aria-modal="true"
          aria-label={`${activeImage.title} gallery image`}
          onClick={closeViewer}
        >
          <div className="mx-auto flex h-full max-w-[1180px] flex-col">
            <div className="mb-3 flex items-center justify-between gap-3 text-white">
              <div className="min-w-0">
                <p className="text-[9px] font-bold uppercase tracking-[2px] text-[var(--gold-light)]">
                  {activeImage.category}
                </p>

                <h2 className="truncate font-serif text-[23px] font-semibold leading-tight sm:text-[32px]">
                  {activeImage.title}
                </h2>
              </div>

              <button
                type="button"
                onClick={closeViewer}
                aria-label="Close gallery image"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white transition hover:bg-white/18 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <FaXmark className="text-[18px]" />
              </button>
            </div>

            <div
              className="relative min-h-0 flex-1 overflow-hidden rounded-[24px] border border-white/18 bg-[#101913] shadow-[0_28px_90px_rgba(0,0,0,0.42)]"
              onClick={(event) => event.stopPropagation()}
            >
              <Image
                src={activeImage.image}
                alt={activeImage.alt}
                fill
                sizes="100vw"
                loading="eager"
                className="object-contain"
              />

              <button
                type="button"
                onClick={showPrevious}
                aria-label="Previous gallery image"
                className="absolute left-3 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-[rgba(15,42,34,0.66)] text-white shadow-md backdrop-blur-md transition hover:bg-[rgba(15,42,34,0.86)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:flex"
              >
                <FaChevronLeft className="text-[16px]" />
              </button>

              <button
                type="button"
                onClick={showNext}
                aria-label="Next gallery image"
                className="absolute right-3 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-[rgba(15,42,34,0.66)] text-white shadow-md backdrop-blur-md transition hover:bg-[rgba(15,42,34,0.86)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:flex"
              >
                <FaChevronRight className="text-[16px]" />
              </button>
            </div>

            <div className="mt-3 flex items-center justify-between gap-3 text-white">
              <button
                type="button"
                onClick={showPrevious}
                className="inline-flex min-h-[42px] items-center gap-2 rounded-full border border-white/18 bg-white/10 px-4 text-[12px] font-bold transition hover:bg-white/18 sm:hidden"
              >
                <FaArrowLeft className="text-[11px]" />
                Prev
              </button>

              <p className="mx-auto text-[11px] font-bold uppercase tracking-[1.8px] text-white/72">
                {activeIndex + 1} / {images.length}
              </p>

              <button
                type="button"
                onClick={showNext}
                className="inline-flex min-h-[42px] items-center gap-2 rounded-full border border-white/18 bg-white/10 px-4 text-[12px] font-bold transition hover:bg-white/18 sm:hidden"
              >
                Next
                <FaArrowRight className="text-[11px]" />
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
