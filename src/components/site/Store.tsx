import { Reveal } from "./Reveal";
import storeImg from "@/assets/store-interior.jpg";

const features = [
  "Elegant Marble Interiors",
  "Private Consultation Suites",
  "Dedicated Bridal Lounge",
  "Secure, Discreet Shopping",
  "In-house Jewellery Experts",
];

export function Store() {
  return (
    <section id="appointment" className="bg-beige py-16 sm:py-24 lg:py-36">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-10 px-5 sm:px-6 md:grid-cols-2 md:gap-12 lg:grid-cols-12 lg:gap-20 lg:px-12">
        <div className="md:order-2 md:col-span-1 lg:col-span-6">
          <Reveal>
            <div className="img-frame relative aspect-[5/4] bg-ivory">
              <img
                src={storeImg}
                alt="Shri Ram Jewellers flagship boutique interior"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </div>

        <div className="min-w-0 md:order-1 md:col-span-1 lg:col-span-6">
          <Reveal>
            <div className="flex items-center gap-3 mb-8">
              <span className="rule" />
              <span className="eyebrow">The Boutique</span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-4xl leading-[1.05] text-charcoal sm:text-5xl lg:text-6xl">
              An Invitation to<br />
              <em className="not-italic text-champagne font-light">Our Maison</em>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 text-charcoal/75 leading-[1.85] max-w-lg">
              Step into a space designed for unhurried discovery. Our flagship
              boutique offers private viewing rooms, a dedicated bridal lounge,
              and the quiet attention you would expect from a Maison that has
              served families for generations.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <ul className="mt-10 space-y-4 max-w-md">
              {features.map((f) => (
                <li key={f} className="flex items-center gap-4 border-b border-charcoal/15 pb-4">
                  <span className="h-1.5 w-1.5 bg-champagne rounded-full" />
                  <span className="text-sm tracking-wide text-charcoal/85">{f}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.4}>
            <a
              href="#"
              className="mt-9 inline-flex min-h-12 max-w-full items-center justify-center gap-3 bg-charcoal px-5 py-3 text-center text-[10px] uppercase tracking-[0.18em] text-ivory transition-colors duration-500 hover:bg-champagne sm:mt-12 sm:px-9 sm:py-4 sm:text-[11px] sm:tracking-[0.28em]"
            >
              Schedule a Private Appointment
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
