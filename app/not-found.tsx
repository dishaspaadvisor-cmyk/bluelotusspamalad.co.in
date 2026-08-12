import Link from "next/link";

export default function NotFound() {
  return (
    <main className="site-container py-24 text-center">
      <div className="lux-panel mx-auto max-w-[640px] p-8 sm:p-12">
        <p className="text-[10px] font-bold uppercase tracking-[2.5px] text-[var(--gold-dark)]">
          Page Not Found
        </p>

        <h1 className="mt-6 font-serif text-[38px] font-semibold text-[var(--foreground)] sm:text-[48px]">
          We couldn&apos;t find that page.
        </h1>

        <p className="mt-4 text-[15px] leading-8 text-[var(--muted-text)]">
          Blue Lotus Spa Malad is here to help. Use the button below to return
          to the homepage or explore our services.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Link href="/" className="btn-primary">
            Go Home
          </Link>

          <Link href="/services" className="btn-secondary">
            View Services
          </Link>
        </div>
      </div>
    </main>
  );
}
