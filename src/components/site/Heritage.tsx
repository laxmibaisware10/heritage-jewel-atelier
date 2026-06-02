import { Reveal } from "./Reveal";
import heritageImg from "@/assets/heritage-artisan.jpg";

export function Heritage() {
  return (
    <section id="heritage" className="bg-ivory py-24 md:py-40">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        <Reveal className="lg:col-span-6">
          <div className="img-frame relative aspect-[4/5] bg-beige">
            <img
              src={heritageImg}
              alt="A Shri Ram Jewellers artisan crafting a gold necklace"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </Reveal>

        <div className="lg:col-span-6 lg:pl-8">
          <Reveal>
            <div className="flex items-center gap-3 mb-8">
              <span className="rule" />
              <span className="eyebrow">Our Heritage</span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-charcoal">
              A Legacy of Trust<br />
              <em className="not-italic text-champagne font-light">and Craftsmanship</em>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-10 text-charcoal/75 leading-[1.85] max-w-xl">
              For four generations, the House of Shri Ram has shaped India's most
              precious moments — one ornament at a time. From a single atelier in
              the old city to a name spoken across continents, our story is woven
              from the quiet patience of master karigars, the integrity of every
              gram, and families who return to us across decades.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
              {[
                { n: "72", l: "Years of Heritage" },
                { n: "4", l: "Generations" },
                { n: "60K+", l: "Families Served" },
              ].map((s) => (
                <div key={s.l} className="border-t border-charcoal/15 pt-5">
                  <div className="font-display text-3xl md:text-4xl text-champagne">
                    {s.n}
                  </div>
                  <div className="mt-2 text-[10px] tracking-[0.22em] uppercase text-charcoal/60">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.4}>
            <a href="#heritage" className="luxury-link mt-12 inline-flex">
              Discover Our Story
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
