// components/GoogleMap.tsx

import {
  FaLocationDot,
  FaArrowUpRightFromSquare,
} from "react-icons/fa6";

import { siteData } from "@/data/site";

interface GoogleMapProps {
  title?: string;
  height?: string;
  showHeader?: boolean;
  className?: string;
}

export default function GoogleMap({
  title = "Find Blue Lotus Spa Malad",
  height = "420px",
  showHeader = true,
  className = "",
}: GoogleMapProps) {
  return (
    <section className={`lux-card ${className}`}>
      {showHeader && (
        <div className="flex flex-col gap-4 border-b lux-border-light lux-ivory-bg p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <div className="flex items-start gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--cream)] text-[var(--gold-dark)]">
              <FaLocationDot className="text-[14px]" />
            </span>

            <div>
              <p className="text-[10px] font-bold uppercase tracking-[2px] lux-gold">
                Our Location
              </p>

              <h2 className="mt-1 font-serif text-[22px] font-semibold lux-espresso sm:text-[26px]">
                {title}
              </h2>

              <p className="mt-2 max-w-[650px] text-[12px] leading-5 text-[var(--muted-text)] sm:text-[13px]">
                {siteData.address.full}
              </p>
            </div>
          </div>

          <a href={siteData.location.directionsUrl} target="_blank" rel="noopener noreferrer" className="lux-btn-secondary">
            Get Directions
            <FaArrowUpRightFromSquare className="text-[10px]" />
          </a>
        </div>
      )}

      <div
        className="relative w-full bg-[var(--soft-cream)]"
        style={{ height }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.248498350247!2d72.8361084!3d19.184345699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7d3687a4083%3A0x70aa4c0500cc3d01!2sBlue%20Lotus%20Spa%20Malad!5e0!3m2!1sen!2sin!4v1786520523000!5m2!1sen!2sin"
          title="Blue Lotus Spa Malad Google Map"
          className="absolute inset-0 h-full w-full"
          style={{
            border: 0,
          }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
    </section>
  );
}
