import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Heritage } from "@/components/site/Heritage";
import { Collections } from "@/components/site/Collections";
import { Signature } from "@/components/site/Signature";
import { Bestsellers } from "@/components/site/Bestsellers";
import { Wedding } from "@/components/site/Wedding";
import { WhyChoose } from "@/components/site/WhyChoose";
import { Store } from "@/components/site/Store";
import { Stories } from "@/components/site/Stories";
import { Gallery } from "@/components/site/Gallery";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shri Ram Jewellers — Timeless Indian Luxury Jewellery Since 1952" },
      {
        name: "description",
        content:
          "A four-generation Indian Maison crafting fine bridal, diamond, and heritage jewellery. BIS hallmarked gold, certified diamonds, lifetime exchange.",
      },
      { property: "og:title", content: "Shri Ram Jewellers — Timeless Indian Luxury Jewellery" },
      {
        property: "og:description",
        content:
          "Celebrating life's most precious moments with seven decades of craftsmanship, trust, and heritage.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="bg-ivory text-charcoal antialiased">
      <Header />
      <main>
        <Hero />
        <Heritage />
        <Collections />
        <Signature />
        <Bestsellers />
        <Wedding />
        <WhyChoose />
        <Store />
        <Stories />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}
