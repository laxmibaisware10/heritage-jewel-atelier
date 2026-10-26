import { motion } from "motion/react";
import heroImg from "@/assets/hero-bride.jpg";

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] w-full flex-col overflow-hidden bg-charcoal md:block md:h-[100svh] md:min-h-[700px] lg:min-h-[720px]">
      {/* Image block: poster-style on mobile, full-bleed backdrop on desktop */}
      <div className="relative h-[54svh] min-h-[300px] w-full md:absolute md:inset-0 md:h-full md:min-h-0">
        <motion.img
          src={heroImg}
          alt="Indian bride wearing exquisite Shri Ram Jewellers bridal jewellery"
          className="absolute inset-0 z-0 block h-full w-full object-cover object-right"
          initial={{ scale: 1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
        />
        {/* Top scrim for header legibility */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-charcoal/70 to-transparent sm:h-48" />
        {/* Mobile-only fade into the dark text panel below */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-charcoal to-transparent md:hidden" />
        {/* Desktop left scrim for headline legibility */}
        <div className="absolute inset-0 hidden bg-gradient-to-r from-charcoal/80 via-charcoal/30 to-transparent md:block" />
      </div>

      {/* Text block: solid dark panel on mobile, overlay on desktop */}
      <div className="relative z-10 flex flex-1 flex-col justify-center bg-charcoal px-5 pb-12 pt-8 sm:px-6 md:absolute md:inset-x-0 md:bottom-0 md:top-0 md:mx-auto md:max-w-[1440px] md:justify-end md:bg-transparent md:px-12 md:pb-24 md:pt-28 lg:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-[42rem] text-ivory"
        >
          <h1 className="font-display text-[38px] leading-[1.04] text-ivory sm:text-[52px] md:text-[64px] lg:text-[76px] xl:text-[84px]">
            Timeless Jewellery<br />
            <em className="not-italic text-champagne font-light">Crafted For Generations</em>
          </h1>
          <p className="mt-5 max-w-xl text-sm font-light leading-relaxed text-ivory/85 sm:mt-7 sm:text-base">
            Celebrating life's most precious moments with unmatched craftsmanship,
            heritage, and the quiet trust of seven decades.
          </p>

          <div className="mt-7 grid max-w-sm grid-cols-1 gap-3 sm:mt-10 sm:flex sm:max-w-none sm:flex-wrap sm:gap-4">
            <a
              href="#collections"
              className="inline-flex min-h-12 items-center justify-center gap-3 bg-ivory px-5 py-3 text-center text-[10px] uppercase tracking-[0.2em] text-charcoal transition-colors duration-500 hover:bg-champagne hover:text-ivory sm:px-8 sm:py-4 sm:text-[11px] sm:tracking-[0.28em]"
            >
              Explore Collections
            </a>
            <a
              href="#appointment"
              className="inline-flex min-h-12 items-center justify-center gap-3 border border-ivory/70 px-5 py-3 text-center text-[10px] uppercase tracking-[0.2em] text-ivory transition-colors duration-500 hover:bg-ivory hover:text-charcoal sm:px-8 sm:py-4 sm:text-[11px] sm:tracking-[0.28em]"
            >
              Book Consultation
            </a>
          </div>
        </motion.div>
      </div>

      {/* Side label */}
      <div className="hidden md:flex absolute right-8 bottom-32 z-10 origin-bottom-right rotate-90 items-center gap-3 text-ivory/70">
        <span className="text-[10px] tracking-[0.4em] uppercase">Scroll to discover</span>
        <span className="h-px w-12 bg-ivory/50" />
      </div>
    </section>
  );
}
