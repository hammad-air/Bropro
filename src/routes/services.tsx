import { createFileRoute } from "@tanstack/react-router";
import { Services } from "@/components/sections/Services";
import { CTA } from "@/components/sections/CTA";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Pixora" },
      { name: "description", content: "Brand identity, logo, social media, UI, marketing & presentation design services by Pixora." },
      { property: "og:title", content: "Services — Pixora" },
      { property: "og:description", content: "A full creative toolkit for ambitious brands." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: () => (
    <div className="pt-24">
      <Services />
      <CTA />
    </div>
  ),
});
