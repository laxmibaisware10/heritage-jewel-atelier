import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { CalendarDays, Menu, X } from "lucide-react";
import logoAsset from "@/assets/srj-logo-v2.png.asset.json";

const nav = [
  { label: "Collections", href: "/#collections" },
  { label: "Wedding Jewellery", href: "/#wedding" },
  { label: "Gold Jewellery", href: "/#collections" },
  { label: "Diamond Jewellery", href: "/#collections" },
  { label: "About Us", href: "/#heritage" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-charcoal/10 bg-ivory">
      <div className="mx-auto grid h-20 max-w-[1440px] grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 sm:h-24 sm:px-6 lg:h-[100px] lg:px-10 xl:flex xl:justify-between xl:gap-8">
        {/* Logo */}
        <Link to="/" className="flex min-w-0 items-center gap-3 sm:gap-4 lg:gap-5 xl:shrink-0">
          <img
            src={logoAsset.url}
            alt="Shri Ram Jewellers emblem"
            width={70}
            height={70}
            className="h-12 w-12 shrink-0 object-contain sm:h-16 sm:w-16 lg:h-[70px] lg:w-[70px]"
          />
          <div className="flex min-w-0 flex-col leading-none">
            <span
              className="truncate font-['Playfair_Display'] text-[25px] font-semibold leading-[0.95] text-[#7A1F1F] sm:text-[36px] lg:text-[42px] xl:text-[46px]"
            >
              SHRI RAM
            </span>
            <span className="mt-1.5 flex items-center gap-2 sm:mt-2 sm:gap-3">
              <span className="h-px w-5 bg-champagne sm:w-8" />
              <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-champagne sm:text-[13px] sm:tracking-[0.35em] lg:text-[15px]">
                Jewellers
              </span>
              <span className="h-px w-5 bg-champagne sm:w-8" />
            </span>
          </div>
        </Link>

        {/* Nav */}
        <nav className="hidden xl:flex items-center gap-5 2xl:gap-7">
          {nav.map((n) => (
            <a
              key={n.label}
              href={n.href}
              className="group relative whitespace-nowrap text-[11px] font-medium uppercase tracking-[0.12em] text-charcoal/90 transition-colors duration-300 hover:text-champagne 2xl:text-[12px]"
            >
              {n.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-champagne transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden shrink-0 lg:flex lg:items-center xl:hidden 2xl:flex">
          <a
            href="#appointment"
            className="inline-flex h-12 items-center gap-2 bg-champagne px-5 text-[11px] font-semibold uppercase tracking-[0.12em] text-ivory transition-colors duration-300 hover:bg-charcoal 2xl:px-7"
          >
            <CalendarDays className="h-4 w-4 stroke-[1.6]" />
            Book Appointment
          </a>
        </div>

        {/* Mobile */}
        <button
          className="grid h-11 w-11 shrink-0 place-items-center text-charcoal xl:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-charcoal/10 bg-ivory xl:hidden">
          <div className="flex max-h-[calc(100svh-5rem)] flex-col gap-5 overflow-y-auto px-6 py-7 sm:max-h-[calc(100svh-6rem)]">
            {nav.map((n) => (
              <a
                key={n.label}
                href={n.href}
                onClick={() => setOpen(false)}
                className="py-1 text-[12px] font-medium uppercase tracking-[0.18em] text-charcoal"
              >
                {n.label}
              </a>
            ))}
            <a
              href="#appointment"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex h-[50px] items-center justify-center gap-2 bg-champagne px-6 text-[12px] font-semibold uppercase tracking-[0.14em] text-ivory"
            >
              <CalendarDays className="h-4 w-4" />
              Book Appointment
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
