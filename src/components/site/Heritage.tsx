import { Reveal } from "./Reveal";
import heritageImg from "@/assets/heritage-artisan.jpg";

export function Heritage() {
  return (
    <section id="heritage" className="bg-ivory py-16 sm:py-24 lg:py-36">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-10 px-5 sm:px-6 md:grid-cols-2 md:gap-12 lg:grid-cols-12 lg:gap-20 lg:px-12">
        <Reveal className="md:col-span-1 lg:col-span-6">
          <div className="img-frame relative aspect-[4/5] bg-beige">
            <img
              src={heritageImg}
              alt="A Shri Ram Jewellers artisan crafting a gold necklace"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </Reveal>

        <div className="min-w-0 md:col-span-1 lg:col-span-6 lg:pl-8">
          <Reveal>
            <div className="flex items-center gap-3 mb-8">
              <span className="rule" />
              <span className="eyebrow">Our Heritage</span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-4xl leading-[1.05] text-charcoal sm:text-5xl lg:text-6xl">
              A Legacy of Trust<br />
              <em className="not-italic text-champagne font-light">and Craftsmanship</em>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-xl leading-[1.75] text-charcoal/75 sm:mt-8 lg:mt-10">
              For four generations, the House of Shri Ram has shaped India's most
              precious moments — one ornament at a time. From a single atelier in
              the old city to a name spoken across continents, our story is woven
              from the quiet patience of master karigars, the integrity of every
              gram, and families who return to us across decades.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-9 grid max-w-md grid-cols-3 gap-3 sm:mt-12 sm:gap-6">
              {[
                { n: "72", l: "Years of Heritage" },
                { n: "4", l: "Generations" },
                { n: "60K+", l: "Families Served" },
              ].map((s) => (
                <div key={s.l} className="border-t border-charcoal/15 pt-5">
                  <div className="font-display text-2xl text-champagne sm:text-3xl lg:text-4xl">
                    {s.n}
                  </div>
                  <div className="mt-2 text-[9px] uppercase leading-relaxed tracking-[0.14em] text-charcoal/60 sm:text-[10px] sm:tracking-[0.22em]">
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
