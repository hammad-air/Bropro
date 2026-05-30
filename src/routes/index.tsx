import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { Services } from "@/components/sections/Services";
import { Portfolio } from "@/components/sections/Portfolio";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { About } from "@/components/sections/About";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTA } from "@/components/sections/CTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pixora — Designs That Make Brands Impossible to Ignore" },
      { name: "description", content: "Pixora is a creative design agency crafting brand identity, social media design, UI, and marketing creatives that drive growth." },
      { property: "og:title", content: "Pixora — Creative Design Agency" },
      { property: "og:description", content: "Transforming ideas into visual impact. Branding, social, UI and marketing design." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <Services />
      <Portfolio compact />
      <CaseStudies />
      <About />
      <Testimonials />
      <CTA />
    </>
  );
}
