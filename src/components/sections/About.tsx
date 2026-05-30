import { Section } from "@/components/site/Section";
import { Check } from "lucide-react";

export function About() {
  return (
    <Section
      eyebrow="About Pixora"
      title={<>A creative studio for <span className="text-gradient">bold brands</span></>}
      description="Pixora is a creative design agency focused on helping businesses build strong visual identities and memorable brand experiences."
    >
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="aspect-square rounded-3xl bg-gradient-primary shadow-glow" />
          <div className="absolute inset-6 rounded-2xl bg-background grid place-items-center text-center p-6">
            <div>
              <div className="text-6xl font-bold text-gradient">5+</div>
              <p className="mt-2 text-muted-foreground">Years crafting brands that stand out</p>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-semibold">Strategy-led. Design-obsessed.</h3>
          <p className="mt-3 text-muted-foreground">
            We pair rigorous brand thinking with refined craft — so every logo, layout, and pixel earns its place. From startups to established brands, our work helps you look the part and lead the conversation.
          </p>
          <ul className="mt-6 space-y-3">
            {[
              "120+ projects shipped across 12 industries",
              "Trusted by startups, e-commerce, real estate & hospitality",
              "End-to-end: from research to rollout",
              "Direct, founder-led communication",
            ].map((t) => (
              <li key={t} className="flex gap-3 items-start">
                <span className="mt-1 h-5 w-5 rounded-full bg-gradient-primary grid place-items-center text-primary-foreground">
                  <Check size={12} strokeWidth={3} />
                </span>
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
