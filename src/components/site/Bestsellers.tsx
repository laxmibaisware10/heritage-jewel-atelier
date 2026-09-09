import { Heart, Eye } from "lucide-react";
import { Reveal } from "./Reveal";
import a from "@/assets/collection-diamond.jpg";
import b from "@/assets/collection-bridal.jpg";
import c from "@/assets/collection-new.jpg";
import d from "@/assets/collection-temple.jpg";

const products = [
  { name: "Aanya Solitaire Pendant", price: "1,24,000", img: a },
  { name: "Rajwada Polki Necklace", price: "8,75,000", img: b },
  { name: "Champagne Drop Earrings", price: "62,500", img: c },
  { name: "Lakshmi Temple Haar", price: "4,20,000", img: d },
];

export function Bestsellers() {
  return (
    <section className="bg-ivory py-16 sm:py-24 lg:py-36">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-6 lg:px-12">
        <div className="mb-10 flex flex-col gap-6 sm:mb-16 md:flex-row md:items-end md:justify-between lg:mb-20">
          <Reveal>
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="rule" />
                <span className="eyebrow">The Coveted</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-charcoal leading-[1.05]">
                Bestsellers
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <a href="#" className="luxury-link">View All Pieces</a>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-8 min-[430px]:grid-cols-2 md:gap-8 lg:grid-cols-4 lg:gap-10">
          {products.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.06}>
              <article className="group">
                <div className="img-frame relative aspect-[4/5] bg-beige">
                  <img
                    src={p.img}
                    alt={p.name}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <button
                    aria-label="Wishlist"
                    className="absolute right-3 top-3 grid h-10 w-10 place-items-center bg-ivory/90 text-charcoal transition-opacity duration-500 hover:text-champagne lg:opacity-0 lg:group-hover:opacity-100"
                  >
                    <Heart className="h-4 w-4 stroke-[1.4]" />
                  </button>
                  <button className="absolute inset-x-3 bottom-3 inline-flex items-center justify-center gap-2 bg-charcoal/95 py-3 text-[10px] uppercase tracking-[0.2em] text-ivory transition-all duration-500 hover:bg-champagne lg:translate-y-2 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100">
                    <Eye className="h-3.5 w-3.5 stroke-[1.4]" />
                    Quick View
                  </button>
                </div>
                <div className="mt-6 flex items-start justify-between gap-4">
                  <h3 className="font-display text-lg md:text-xl text-charcoal leading-tight">
                    {p.name}
                  </h3>
                </div>
                <div className="mt-2 text-[11px] tracking-[0.22em] uppercase text-charcoal/60">
                  From ₹ {p.price}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
