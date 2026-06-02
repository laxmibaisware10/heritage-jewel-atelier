import { Instagram } from "lucide-react";
import { Reveal } from "./Reveal";
import a from "@/assets/hero-bride.jpg";
import b from "@/assets/collection-bridal.jpg";
import c from "@/assets/collection-diamond.jpg";
import d from "@/assets/collection-temple.jpg";
import e from "@/assets/collection-daily.jpg";
import f from "@/assets/collection-new.jpg";

const imgs = [a, b, c, d, e, f];

export function Gallery() {
  return (
    <section className="bg-ivory pb-24 md:pb-32">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="text-center mb-14">
          <Reveal>
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="rule" />
              <span className="eyebrow">@shriramjewellers</span>
              <span className="rule" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-3xl md:text-5xl text-charcoal">
              Follow the <em className="not-italic text-champagne font-light">Maison</em>
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-1.5 md:gap-2">
          {imgs.map((img, i) => (
            <Reveal key={i} delay={i * 0.04}>
              <a href="#" className="group relative block aspect-square overflow-hidden bg-beige">
                <img
                  src={img}
                  alt={`Instagram post ${i + 1}`}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/50 transition-colors duration-500 grid place-items-center">
                  <Instagram className="h-6 w-6 text-ivory opacity-0 group-hover:opacity-100 transition-opacity duration-500 stroke-[1.2]" />
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
