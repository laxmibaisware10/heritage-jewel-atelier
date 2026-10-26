import { motion } from "motion/react";
import heroImg from "@/assets/hero-bride.jpg";
import heroImgMobile from "@/assets/hero-bride-mobile.jpg";

export function Hero() {
  return (
    <section className="relative h-[100svh] min-h-[560px] w-full overflow-hidden bg-charcoal sm:min-h-[640px] md:h-[100svh] md:min-h-[700px] lg:min-h-[720px]">
      {/* Mobile: dedicated portrait crop so the bride is never cut off */}
      <motion.img
        src={heroImgMobile}
        alt="Indian bride wearing exquisite Shri Ram Jewellers bridal jewellery"
        className="absolute inset-0 z-0 block h-full w-full object-cover object-center lg:hidden"
        initial={{ scale: 1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
      />
      {/* Laptop/desktop: original landscape composition */}
      <motion.img
        src={heroImg}
        alt="Indian bride wearing exquisite Shri Ram Jewellers bridal jewellery"
        className="absolute inset-0 z-0 hidden h-full w-full object-cover object-right lg:block"
        initial={{ scale: 1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
      />
      {/* Top scrim for header legibility */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-charcoal/70 to-transparent sm:h-48" />
      {/* Left scrim for headline legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/30 to-transparent md:bg-gradient-to-r md:from-charcoal/80 md:via-charcoal/30" />
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-charcoal/70 to-transparent" />

      <div className="relative z-10 mx-auto flex h-full max-w-[1440px] flex-col justify-end px-5 pb-12 pt-28 sm:px-6 sm:pb-16 md:pb-24 lg:px-12 lg:pb-28">

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
