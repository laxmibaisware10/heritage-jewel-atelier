import { Reveal } from "./Reveal";
import signature from "@/assets/signature-showcase.jpg";

export function Signature() {
  return (
    <section className="relative bg-charcoal text-ivory overflow-hidden">
      <div className="relative aspect-video w-full md:absolute md:inset-0 md:aspect-auto">
        <img
          src={signature}
          alt="The art of fine jewellery"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover object-center opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-charcoal/10 md:bg-gradient-to-r md:from-charcoal/85 md:via-charcoal/30" />
      </div>

        <div className="relative z-10 mx-auto flex w-full max-w-[1440px] items-end px-5 py-12 sm:px-6 sm:py-16 md:min-h-[680px] md:items-center md:py-20 lg:h-[85vh] lg:px-12">
          <div className="max-w-xl">
            <Reveal>
              <div className="flex items-center gap-3 mb-8">
                <span className="rule bg-champagne" />
                <span className="eyebrow text-champagne">Signature</span>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display text-4xl leading-[1.02] sm:text-5xl md:text-6xl lg:text-7xl">
                The Art of<br />
                <em className="not-italic text-champagne font-light">Fine Jewellery</em>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-8 text-ivory/75 leading-[1.85] max-w-md">
                Each Shri Ram creation begins with a single stone — selected,
                studied, and set by hand. A quiet conversation between gem,
                metal, and the artisan's eye, refined over four generations.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <a
                href="#"
                className="mt-9 inline-flex min-h-12 items-center justify-center gap-3 border border-champagne px-5 py-3 text-center text-[10px] uppercase tracking-[0.2em] text-ivory transition-colors duration-500 hover:bg-champagne hover:text-charcoal sm:mt-12 sm:px-8 sm:py-4 sm:text-[11px] sm:tracking-[0.28em]"
              >
                View the Atelier Film
              </a>
            </Reveal>
          </div>
        </div>
    </section>
  );
}
