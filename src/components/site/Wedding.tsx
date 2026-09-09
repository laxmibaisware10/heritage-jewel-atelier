import { Reveal } from "./Reveal";
import wedding from "@/assets/wedding-banner.jpg";

export function Wedding() {
  return (
    <section id="wedding" className="relative bg-charcoal text-ivory">
      <div className="relative min-h-[650px] w-full sm:min-h-[720px] lg:min-h-[88vh]">
        <img
          src={wedding}
          alt="Indian bride and groom in heritage haveli at golden hour"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover object-[58%_center] md:object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/40 to-charcoal/30" />

        <div className="relative z-10 mx-auto flex min-h-[650px] max-w-[1440px] flex-col justify-end px-5 pb-16 sm:min-h-[720px] sm:px-6 sm:pb-20 md:pb-24 lg:min-h-[88vh] lg:px-12 lg:pb-28">
          <div className="max-w-2xl">
            <Reveal>
              <div className="flex items-center gap-3 mb-8">
                <span className="rule bg-champagne" />
                <span className="eyebrow text-champagne">The Wedding Maison</span>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display text-4xl leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl">
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
                className="mt-9 inline-flex min-h-12 items-center justify-center gap-3 bg-ivory px-5 py-3 text-center text-[10px] uppercase tracking-[0.2em] text-charcoal transition-colors duration-500 hover:bg-champagne hover:text-ivory sm:mt-12 sm:px-9 sm:py-4 sm:text-[11px] sm:tracking-[0.28em]"
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
