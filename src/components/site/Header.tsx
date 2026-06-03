import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Search, Heart, CalendarDays, Menu, X } from "lucide-react";

const nav = [
  { label: "Collections", href: "/#collections" },
  { label: "Wedding Jewellery", href: "/#wedding" },
  { label: "Gold Jewellery", href: "/#collections" },
  { label: "Diamond Jewellery", href: "/#collections" },
  { label: "About Us", href: "/#heritage" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-[#F8F5F0] border-b border-black/[0.06] transition-all duration-500">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div
          className={`flex items-center justify-between transition-all duration-500 ${
            scrolled ? "h-16" : "h-24"
          }`}
        >
          {/* Logo */}
          <Link to="/" className="flex flex-col leading-none">
            <span className="font-['Playfair_Display'] text-[28px] md:text-[34px] tracking-[0.12em] uppercase text-[#1A1A1A]">
              SHRI RAM
            </span>
            <span className="font-['Playfair_Display'] text-[11px] md:text-[13px] tracking-[0.3em] uppercase text-[#1A1A1A] mt-0.5">
              JEWELLERS
            </span>
          </Link>

          {/* Center Nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {nav.map((n) => (
              <a
                key={n.label}
                href={n.href}
                className="text-[11px] tracking-[0.22em] uppercase text-[#2B2B2B] font-medium hover:text-champagne transition-colors duration-300"
              >
                {n.label}
              </a>
            ))}
          </nav>

          {/* Right */}
          <div className="hidden lg:flex items-center gap-7">
            <button aria-label="Search" className="text-[#2B2B2B] hover:text-champagne transition-colors">
              <Search className="h-[18px] w-[18px] stroke-[1.2]" />
            </button>
            <button aria-label="Wishlist" className="text-[#2B2B2B] hover:text-champagne transition-colors">
              <Heart className="h-[18px] w-[18px] stroke-[1.2]" />
            </button>
            <a
              href="#appointment"
              className="inline-flex items-center gap-2 border border-[#2B2B2B] px-5 py-2.5 text-[11px] tracking-[0.22em] uppercase text-[#2B2B2B] font-medium hover:bg-charcoal hover:text-ivory transition-colors duration-300"
            >
              <CalendarDays className="h-3.5 w-3.5 stroke-[1.4]" />
              Book Appointment
            </a>
          </div>

          {/* Mobile */}
          <button
            className="lg:hidden text-[#1A1A1A]"
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-[#F8F5F0] border-t border-black/[0.06]">
          <div className="px-6 py-8 flex flex-col gap-5">
            {nav.map((n) => (
              <a
                key={n.label}
                href={n.href}
                onClick={() => setOpen(false)}
                className="text-[12px] tracking-[0.22em] uppercase text-[#2B2B2B] font-medium"
              >
                {n.label}
              </a>
            ))}
            <a
              href="#appointment"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center justify-center gap-2 border border-[#2B2B2B] px-5 py-3 text-[11px] tracking-[0.22em] uppercase text-[#2B2B2B] font-medium"
            >
              <CalendarDays className="h-3.5 w-3.5" />
              Book Appointment
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
