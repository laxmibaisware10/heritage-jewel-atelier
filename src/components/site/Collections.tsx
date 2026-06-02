import { Reveal } from "./Reveal";
import bridal from "@/assets/collection-bridal.jpg";
import diamond from "@/assets/collection-diamond.jpg";
import daily from "@/assets/collection-daily.jpg";
import temple from "@/assets/collection-temple.jpg";
import men from "@/assets/collection-men.jpg";
import arrivals from "@/assets/collection-new.jpg";

const collections = [
  { name: "Bridal Collection", desc: "Heirloom polki & kundan", img: bridal, span: "lg:col-span-7" },
  { name: "Diamond Collection", desc: "Certified brilliance", img: diamond, span: "lg:col-span-5" },
  { name: "Temple Jewellery", desc: "Antique South Indian", img: temple, span: "lg:col-span-5" },
  { name: "Daily Wear", desc: "Quiet everyday luxury", img: daily, span: "lg:col-span-7" },
  { name: "Men's Collection", desc: "Tailored for distinction", img: men, span: "lg:col-span-6" },
  { name: "New Arrivals", desc: "The latest creations", img: arrivals, span: "lg:col-span-6" },
];

export function Collections() {
  return (
    <section id="collections" className="bg-beige py-24 md:py-40">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 md:mb-24 gap-8">
          <Reveal>
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="rule" />
                <span className="eyebrow">The Maison</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-charcoal max-w-2xl leading-[1.05]">
                Shop by <em className="not-italic text-champagne font-light">Collection</em>
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-charcoal/70 max-w-sm leading-relaxed">
              Six distinct expressions of the Shri Ram aesthetic — each piece
              hand-finished in our Jaipur atelier.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
          {collections.map((c, i) => (
            <Reveal key={c.name} delay={i * 0.05} className={c.span}>
              <a
                href="#"
                className="group block img-frame relative aspect-[4/5] lg:aspect-[3/4] bg-ivory"
              >
                <img
                  src={c.img}
                  alt={c.name}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-8 md:p-10 text-ivory">
                  <div className="text-[10px] tracking-[0.32em] uppercase text-champagne mb-3">
                    {c.desc}
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl lg:text-4xl">
                    {c.name}
                  </h3>
                  <div className="mt-5 inline-flex items-center gap-3 text-[11px] tracking-[0.28em] uppercase opacity-90">
                    Explore
                    <span className="h-px w-7 bg-ivory transition-all duration-500 group-hover:w-14" />
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
