import { Reveal } from "./Reveal";
import { ShieldCheck, Gem, Repeat, Tag, Landmark, UserCheck } from "lucide-react";

const items = [
  { icon: ShieldCheck, label: "BIS Hallmarked Gold", desc: "Every gram certified to BIS purity standards." },
  { icon: Gem, label: "Certified Diamonds", desc: "GIA & IGI certificates with each stone." },
  { icon: Repeat, label: "Lifetime Exchange", desc: "Exchange any piece across our boutiques, always." },
  { icon: Tag, label: "Transparent Pricing", desc: "Live rates, itemised making — no hidden fees." },
  { icon: Landmark, label: "Trusted Heritage", desc: "Four generations of unbroken family stewardship." },
  { icon: UserCheck, label: "Personalised Service", desc: "A dedicated advisor for every family we serve." },
];

export function WhyChoose() {
  return (
    <section className="bg-ivory py-16 sm:py-24 lg:py-36">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-6 lg:px-12">
        <div className="mb-12 text-center sm:mb-16 lg:mb-20">
          <Reveal>
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="rule" />
              <span className="eyebrow">The Promise</span>
              <span className="rule" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-charcoal max-w-3xl mx-auto leading-[1.05]">
              Why Choose <em className="not-italic text-champagne font-light">Shri Ram Jewellers</em>
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 border-l border-t border-border sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <Reveal key={it.label} delay={i * 0.05}>
              <div className="group h-full border-b border-r border-border p-7 transition-colors duration-500 hover:bg-beige sm:p-9 lg:p-12">
                <it.icon className="h-7 w-7 stroke-[1] text-champagne mb-8 transition-transform duration-700 group-hover:scale-110" />
                <h3 className="font-display text-2xl text-charcoal">{it.label}</h3>
                <p className="mt-4 text-sm text-charcoal/70 leading-relaxed">
                  {it.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
