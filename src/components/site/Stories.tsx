import { Reveal } from "./Reveal";

const reviews = [
  {
    quote:
      "From my mother's wedding to mine — the same house, the same hands. Shri Ram is not a jeweller, it is a family heirloom.",
    name: "Ananya Mehta",
    place: "Delhi · Bridal Client",
  },
  {
    quote:
      "The bridal consultation felt like a private atelier visit. Every stone was explained, every design considered. Quietly extraordinary.",
    name: "Ishaani & Vikram",
    place: "Mumbai · Wedding 2025",
  },
  {
    quote:
      "Three generations of my family wear pieces by Shri Ram. Their craftsmanship and integrity are simply unmatched.",
    name: "Rohan Agarwal",
    place: "Jaipur · Patron since 1994",
  },
];

export function Stories() {
  return (
    <section className="bg-ivory py-24 md:py-40">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="text-center mb-20">
          <Reveal>
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="rule" />
              <span className="eyebrow">Family Voices</span>
              <span className="rule" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-charcoal max-w-3xl mx-auto leading-[1.05]">
              Stories Worn<br />
              <em className="not-italic text-champagne font-light">Across Generations</em>
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={i * 0.08}>
              <figure className="bg-beige p-10 md:p-12 h-full flex flex-col">
                <div className="text-champagne text-sm tracking-[0.4em]">★ ★ ★ ★ ★</div>
                <blockquote className="mt-8 font-display text-2xl md:text-[26px] leading-[1.4] text-charcoal flex-1">
                  &ldquo;{r.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-10 pt-6 border-t border-charcoal/15">
                  <div className="font-display text-lg text-charcoal">{r.name}</div>
                  <div className="text-[10px] tracking-[0.28em] uppercase text-charcoal/60 mt-1">
                    {r.place}
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
