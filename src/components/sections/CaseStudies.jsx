import { Section } from "@/components/site/Section";

const cases = [
  {
    name: "Halcyon Rebrand",
    client: "Halcyon Living",
    challenge: "A dated identity that no longer reflected their premium positioning in the wellness market.",
    solution: "A refined wordmark, modular grid, and warm violet palette extended across packaging and digital.",
    result: "+38% engagement on launch announcement and 2.1× lift in DTC conversions.",
  },
  {
    name: "Orbit App UI",
    client: "Orbit Finance",
    challenge: "Onboarding drop-off due to a cluttered, finance-heavy interface.",
    solution: "Re-designed flow with progressive disclosure, micro-interactions and an approachable visual system.",
    result: "Sign-up completion improved by 54%, App Store rating jumped from 3.6 to 4.7.",
  },
];

export function CaseStudies() {
  return (
    <Section
      eyebrow="Featured work"
      title="Case studies"
      description="A closer look at how strategy and design come together for our clients."
      className="bg-surface"
    >
      <div className="grid lg:grid-cols-2 gap-6">
        {cases.map((c) => (
          <article key={c.name} className="rounded-3xl border border-border bg-card p-8 lg:p-10 shadow-card">
            <div className="aspect-[16/9] rounded-2xl bg-gradient-primary mb-6 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.3),transparent_55%)]" />
              <div className="absolute bottom-4 left-5 text-white/90 text-sm font-medium tracking-wide">{c.client}</div>
            </div>
            <h3 className="text-2xl font-semibold">{c.name}</h3>
            <div className="mt-5 space-y-4 text-sm">
              <div>
                <div className="text-xs font-semibold uppercase tracking-widest text-primary">Challenge</div>
                <p className="mt-1 text-muted-foreground">{c.challenge}</p>
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-widest text-primary">Solution</div>
                <p className="mt-1 text-muted-foreground">{c.solution}</p>
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-widest text-primary">Result</div>
                <p className="mt-1 text-foreground font-medium">{c.result}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
