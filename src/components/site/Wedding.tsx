import { Reveal } from "./Reveal";
import wedding from "@/assets/wedding-banner.jpg";

export function Wedding() {
  return (
    <section id="wedding" className="relative bg-charcoal text-ivory">
      <div className="relative min-h-[88vh] w-full">
        <img
          src={wedding}
          alt="Indian bride and groom in heritage haveli at golden hour"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/40 to-charcoal/30" />

        <div className="relative z-10 mx-auto max-w-[1440px] h-full min-h-[88vh] px-6 lg:px-12 flex flex-col justify-end pb-24 md:pb-32">
          <div className="max-w-2xl">
            <Reveal>
              <div className="flex items-center gap-3 mb-8">
                <span className="rule bg-champagne" />
                <span className="eyebrow text-champagne">The Wedding Maison</span>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.05]">
                Jewellery For Your<br />
                <em className="not-italic text-champagne font-light">Most Precious Moments</em>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-8 max-w-xl text-ivory/80 leading-[1.85]">
                From the first engagement ceremony to the final pheras — discover
                handcrafted bridal masterpieces, designed in private consultation
                to honour your story, your heritage, and the woman you are becoming.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <a
                href="#appointment"
                className="mt-12 inline-flex items-center gap-3 bg-ivory text-charcoal px-9 py-4 text-[11px] tracking-[0.28em] uppercase hover:bg-champagne hover:text-ivory transition-colors duration-500"
              >
                Book Bridal Consultation
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
