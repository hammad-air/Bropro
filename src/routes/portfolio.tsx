import { createFileRoute } from "@tanstack/react-router";
import { Portfolio } from "@/components/sections/Portfolio";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { CTA } from "@/components/sections/CTA";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Pixora" },
      { name: "description", content: "Selected branding, UI, social media and marketing projects by Pixora." },
      { property: "og:title", content: "Portfolio — Pixora" },
      { property: "og:description", content: "Explore our work across branding, UI and campaigns." },
      { property: "og:url", content: "/portfolio" },
    ],
    links: [{ rel: "canonical", href: "/portfolio" }],
  }),
  component: () => (
    <div className="pt-24">
      <Portfolio />
      <CaseStudies />
      <CTA />
    </div>
  ),
});
