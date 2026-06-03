import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Search, Heart, CalendarDays, Menu, X } from "lucide-react";
import logoAsset from "@/assets/srj-logo.png.asset.json";

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
    <header className="fixed top-0 inset-x-0 z-50 bg-[#F8F5F0] border-b border-black/[0.08]">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10 h-[100px] flex items-center justify-between gap-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-4 shrink-0">
          <img
            src={logoAsset.url}
            alt="Shri Ram Jewellers emblem"
            className="h-[68px] w-[68px] object-contain"
          />
          <div className="flex flex-col leading-none">
            <span className="font-['Playfair_Display'] text-[36px] lg:text-[44px] font-semibold text-[#7A1F1F] leading-[0.95]">
              SHRI RAM
            </span>
            <span className="flex items-center gap-2 mt-1.5">
              <span className="h-px w-6 bg-[#B38B4D]" />
              <span className="text-[13px] lg:text-[15px] tracking-[0.35em] font-medium text-[#B38B4D] uppercase">
                Jewellers
              </span>
              <span className="h-px w-6 bg-[#B38B4D]" />
            </span>
          </div>
        </Link>

        {/* Nav */}
        <nav className="hidden xl:flex items-center gap-8">
          {nav.map((n) => (
            <a
              key={n.label}
              href={n.href}
              className="group relative text-[13px] tracking-[0.12em] uppercase text-[#2B2B2B] font-medium hover:text-[#B38B4D] transition-colors duration-300"
            >
              {n.label}
              <span className="absolute left-0 -bottom-1.5 h-px w-0 bg-[#B38B4D] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Right */}
        <div className="hidden lg:flex items-center gap-6 shrink-0">
          <button aria-label="Search" className="text-[#2B2B2B] hover:text-[#B38B4D] transition-colors">
            <Search className="h-[19px] w-[19px] stroke-[1.4]" />
          </button>
          <button aria-label="Wishlist" className="text-[#2B2B2B] hover:text-[#B38B4D] transition-colors">
            <Heart className="h-[19px] w-[19px] stroke-[1.4]" />
          </button>
          <a
            href="#appointment"
            className="inline-flex items-center gap-2 bg-[#C89B57] hover:bg-[#A8813F] text-white rounded transition-colors duration-300"
            style={{ height: 52, padding: "0 32px", fontWeight: 600, fontSize: 13, letterSpacing: "0.12em", textTransform: "uppercase" }}
          >
            <CalendarDays className="h-4 w-4 stroke-[1.6]" />
            Book Appointment
          </a>
        </div>

        {/* Mobile */}
        <button
          className="lg:hidden text-[#1A1A1A]"
          onClick={() => setOpen((o) => !o)}
          aria-label="Menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-[#F8F5F0] border-t border-black/[0.06]">
          <div className="px-6 py-8 flex flex-col gap-5">
            {nav.map((n) => (
              <a
                key={n.label}
                href={n.href}
                onClick={() => setOpen(false)}
                className="text-[12px] tracking-[0.2em] uppercase text-[#2B2B2B] font-medium"
              >
                {n.label}
              </a>
            ))}
            <a
              href="#appointment"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center justify-center gap-2 bg-[#C89B57] text-white rounded h-[52px] px-8 text-[13px] tracking-[0.12em] uppercase font-semibold"
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
