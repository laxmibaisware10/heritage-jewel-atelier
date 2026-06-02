import { Reveal } from "./Reveal";
import signature from "@/assets/signature-showcase.jpg";

export function Signature() {
  return (
    <section className="relative bg-charcoal text-ivory overflow-hidden">
      <div className="relative h-[85vh] min-h-[640px] w-full">
        <img
          src={signature}
          alt="The art of fine jewellery"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/85 via-charcoal/30 to-transparent" />

        <div className="relative z-10 mx-auto max-w-[1440px] h-full px-6 lg:px-12 flex items-center">
          <div className="max-w-xl">
            <Reveal>
              <div className="flex items-center gap-3 mb-8">
                <span className="rule bg-champagne" />
                <span className="eyebrow text-champagne">Signature</span>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.02]">
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
                className="mt-12 inline-flex items-center gap-3 border border-champagne text-ivory px-8 py-4 text-[11px] tracking-[0.28em] uppercase hover:bg-champagne hover:text-charcoal transition-colors duration-500"
              >
                View the Atelier Film
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
