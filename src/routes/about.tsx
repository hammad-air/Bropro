import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/components/sections/About";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTA } from "@/components/sections/CTA";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Pixora" },
      { name: "description", content: "Pixora is a creative design agency focused on strong visual identities and memorable brand experiences." },
      { property: "og:title", content: "About — Pixora" },
      { property: "og:description", content: "Strategy-led, design-obsessed. Meet Pixora." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: () => (
    <div className="pt-24">
      <About />
      <Testimonials />
      <CTA />
    </div>
  ),
});
