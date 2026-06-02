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
    <section id="appointment" className="bg-beige py-24 md:py-40">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        <div className="lg:col-span-6 lg:order-2">
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

        <div className="lg:col-span-6 lg:order-1">
          <Reveal>
            <div className="flex items-center gap-3 mb-8">
              <span className="rule" />
              <span className="eyebrow">The Boutique</span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-charcoal leading-[1.05]">
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
              className="mt-12 inline-flex items-center gap-3 bg-charcoal text-ivory px-9 py-4 text-[11px] tracking-[0.28em] uppercase hover:bg-champagne transition-colors duration-500"
            >
              Schedule a Private Appointment
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
