import { Palette, Sparkles, Share2, Megaphone, Layout, Presentation } from "lucide-react";
import { Section } from "@/components/site/Section";

const services = [
  { Icon: Palette, title: "Brand Identity Design", desc: "Cohesive identity systems — logos, color, type, and guidelines that scale." },
  { Icon: Sparkles, title: "Logo Design", desc: "Memorable marks crafted to embody your brand's essence and stand the test of time." },
  { Icon: Share2, title: "Social Media Design", desc: "Scroll-stopping content templates and campaign visuals for every platform." },
  { Icon: Megaphone, title: "Marketing Creatives", desc: "High-performing ad creatives, banners, and launch assets that drive conversions." },
  { Icon: Layout, title: "UI Design", desc: "Modern, intuitive interfaces for websites and apps — pixel-perfect and on-brand." },
  { Icon: Presentation, title: "Presentation Design", desc: "Investor decks and brand presentations that command attention and tell your story." },
];

export function Services() {
  return (
    <Section
      eyebrow="What we do"
      title={<>Crafted services that <span className="text-gradient">elevate brands</span></>}
      description="A full creative toolkit — from foundational identity to ongoing content that keeps you visible and credible."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map(({ Icon, title, desc }) => (
          <div
            key={title}
            className="group relative rounded-2xl border border-border bg-card p-7 transition-smooth hover:-translate-y-1 hover:shadow-card hover:border-primary/30"
          >
            <div className="h-12 w-12 rounded-xl bg-accent text-primary grid place-items-center group-hover:bg-gradient-primary group-hover:text-primary-foreground transition-smooth">
              <Icon size={22} />
            </div>
            <h3 className="mt-5 text-xl font-semibold">{title}</h3>
            <p className="mt-2 text-muted-foreground text-sm leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
