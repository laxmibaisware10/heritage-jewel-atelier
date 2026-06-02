import { Instagram, Facebook, Youtube, MapPin, Phone, Mail } from "lucide-react";

const cols = [
  {
    title: "The Maison",
    links: ["Our Heritage", "Craftsmanship", "Sustainability", "Press"],
  },
  {
    title: "Collections",
    links: ["Bridal", "Diamond", "Temple", "Daily Wear", "Men", "New Arrivals"],
  },
  {
    title: "Client Care",
    links: ["Book Appointment", "Lifetime Exchange", "Care Guide", "Certifications", "Contact"],
  },
];

export function Footer() {
  return (
    <footer className="bg-charcoal text-ivory">
      {/* Newsletter */}
      <div className="border-b border-ivory/15">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12 py-20 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-6">
            <div className="flex items-center gap-3 mb-6">
              <span className="rule bg-champagne" />
              <span className="eyebrow text-champagne">Maison Letters</span>
            </div>
            <h3 className="font-display text-3xl md:text-5xl leading-[1.05]">
              Private invitations,<br />
              <em className="not-italic text-champagne font-light">delivered quietly.</em>
            </h3>
          </div>
          <form className="lg:col-span-6 flex flex-col sm:flex-row gap-0 border-b border-ivory/40 pb-3">
            <input
              type="email"
              required
              placeholder="your@email.com"
              className="flex-1 bg-transparent text-ivory placeholder:text-ivory/40 py-4 outline-none text-sm tracking-wide"
            />
            <button
              type="submit"
              className="text-[11px] tracking-[0.28em] uppercase text-champagne hover:text-ivory transition-colors"
            >
              Subscribe →
            </button>
          </form>
        </div>
      </div>

      {/* Main */}
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12 py-20 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-12">
        <div className="col-span-2 lg:col-span-3">
          <div className="font-display text-2xl tracking-[0.18em] uppercase">Shri Ram</div>
          <div className="text-[10px] tracking-[0.4em] uppercase text-champagne mt-1">
            Jewellers · Since 1952
          </div>
          <p className="mt-8 text-sm text-ivory/65 leading-relaxed max-w-xs">
            A four-generation Indian Maison crafting fine jewellery for life's
            most precious moments.
          </p>
          <div className="mt-8 flex gap-5 text-ivory/70">
            <a href="#" aria-label="Instagram" className="hover:text-champagne transition-colors">
              <Instagram className="h-5 w-5 stroke-[1.2]" />
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-champagne transition-colors">
              <Facebook className="h-5 w-5 stroke-[1.2]" />
            </a>
            <a href="#" aria-label="YouTube" className="hover:text-champagne transition-colors">
              <Youtube className="h-5 w-5 stroke-[1.2]" />
            </a>
          </div>
        </div>

        {cols.map((c) => (
          <div key={c.title} className="lg:col-span-2">
            <h4 className="text-[11px] tracking-[0.32em] uppercase text-champagne mb-6">
              {c.title}
            </h4>
            <ul className="space-y-3">
              {c.links.map((l) => (
                <li key={l}>
                  <a href="#" className="text-sm text-ivory/75 hover:text-ivory transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="col-span-2 lg:col-span-3">
          <h4 className="text-[11px] tracking-[0.32em] uppercase text-champagne mb-6">
            Flagship Boutique
          </h4>
          <ul className="space-y-4 text-sm text-ivory/75">
            <li className="flex gap-3">
              <MapPin className="h-4 w-4 stroke-[1.4] mt-0.5 shrink-0 text-champagne" />
              <span>
                12, Heritage Plaza, M.I. Road<br />Jaipur, Rajasthan 302001
              </span>
            </li>
            <li className="flex gap-3">
              <Phone className="h-4 w-4 stroke-[1.4] mt-0.5 shrink-0 text-champagne" />
              +91 141 400 1952
            </li>
            <li className="flex gap-3">
              <Mail className="h-4 w-4 stroke-[1.4] mt-0.5 shrink-0 text-champagne" />
              concierge@shriramjewellers.com
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ivory/15">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12 py-6 flex flex-col md:flex-row justify-between items-center gap-3 text-[10px] tracking-[0.28em] uppercase text-ivory/50">
          <div>© 1952 — 2026 Shri Ram Jewellers. All rights reserved.</div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-ivory">Privacy</a>
            <a href="#" className="hover:text-ivory">Terms</a>
            <a href="#" className="hover:text-ivory">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
