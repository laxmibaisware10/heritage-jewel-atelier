import { useEffect, useState } from "react";
import { motion } from "motion/react";
import heroImg from "@/assets/hero-bride.jpg";

export function Hero() {
  const [y, setY] = useState(0);
  useEffect(() => {
    const onScroll = () => setY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative h-[100svh] min-h-[720px] w-full overflow-hidden bg-charcoal">
      <motion.img
        src={heroImg}
        alt="Indian bride wearing exquisite Shri Ram Jewellers bridal jewellery"
        className="absolute inset-0 h-[115%] w-full object-cover object-right"
        style={{ transform: `translate3d(0, ${y * 0.25}px, 0)` }}
        initial={{ scale: 1.08, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
      />
      {/* Top scrim for header legibility */}
      <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-charcoal/70 to-transparent" />
      {/* Left scrim for headline legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-charcoal/30 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-charcoal/70 to-transparent" />

      <div className="relative z-10 mx-auto max-w-[1440px] h-full px-6 lg:px-12 flex flex-col justify-end pb-24 md:pb-32">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl text-ivory"
        >
          <div className="flex items-center gap-3 mb-8">
            <span className="rule bg-champagne" />
            <span className="eyebrow text-champagne">Since 1952 · Crafted in India</span>
          </div>
          <h1 className="font-display text-[44px] leading-[1.05] md:text-[72px] lg:text-[88px] tracking-[-0.01em] text-ivory">
            Timeless Jewellery<br />
            <em className="not-italic text-champagne font-light">Crafted For Generations</em>
          </h1>
          <p className="mt-8 max-w-xl text-[15px] md:text-base leading-relaxed text-ivory/80 font-light">
            Celebrating life's most precious moments with unmatched craftsmanship,
            heritage, and the quiet trust of seven decades.
          </p>

          <div className="mt-12 flex flex-wrap gap-4">
            <a
              href="#collections"
              className="inline-flex items-center gap-3 bg-ivory text-charcoal px-8 py-4 text-[11px] tracking-[0.28em] uppercase hover:bg-champagne hover:text-ivory transition-colors duration-500"
            >
              Explore Collections
            </a>
            <a
              href="#appointment"
              className="inline-flex items-center gap-3 border border-ivory/70 text-ivory px-8 py-4 text-[11px] tracking-[0.28em] uppercase hover:bg-ivory hover:text-charcoal transition-colors duration-500"
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
