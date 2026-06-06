import { Section } from "@/components/site/Section";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Sara Khan", company: "Founder, Lumen Coffee",
    text: "Pixora rebranded our entire identity in under a month. Sales lifted within weeks of launch — the system just feels right.",
  },
  {
    name: "Daniyal Ahmed", company: "CMO, Orbit Finance",
    text: "Most thoughtful design partners we've worked with. They understood the brief deeper than we did and delivered way past expectations.",
  },
  {
    name: "Maya Patel", company: "Owner, Halcyon Living",
    text: "From strategy to social templates, everything was effortless. Our brand finally looks as premium as it is.",
  },
];

export function Testimonials() {
  return (
    <Section
      eyebrow="Kind words"
      title="Loved by founders & marketers"
      className="bg-surface"
    >
      <div className="grid md:grid-cols-3 gap-6">
        {reviews.map((r) => (
          <div key={r.name} className="rounded-2xl border border-border bg-card p-7 shadow-card">
            <div className="flex gap-1 text-primary">
              {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
            </div>
            <p className="mt-4 text-foreground leading-relaxed">"{r.text}"</p>
            <div className="mt-6 flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-gradient-primary text-primary-foreground grid place-items-center font-semibold">
                {r.name[0]}
              </div>
              <div>
                <div className="font-medium">{r.name}</div>
                <div className="text-xs text-muted-foreground">{r.company}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
