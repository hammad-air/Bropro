import { useState } from "react";
import { Section } from "@/components/site/Section";
import { ArrowUpRight } from "lucide-react";

const categories = ["All", "Branding", "Social Media", "UI Design", "Marketing"];

const projects = [
  { title: "Lumen Coffee — Identity", category: "Branding", gradient: "from-violet-500 to-fuchsia-500" },
  { title: "Orbit App UI", category: "UI Design", gradient: "from-indigo-500 to-purple-600" },
  { title: "Mosaic Campaign", category: "Marketing", gradient: "from-purple-500 to-pink-500" },
  { title: "Vertex Reels", category: "Social Media", gradient: "from-fuchsia-500 to-rose-500" },
  { title: "Halcyon Rebrand", category: "Branding", gradient: "from-purple-600 to-indigo-700" },
  { title: "Zentro Dashboard", category: "UI Design", gradient: "from-violet-600 to-purple-700" },
  { title: "Northwind Launch", category: "Marketing", gradient: "from-purple-500 to-violet-700" },
  { title: "Acme Story Set", category: "Social Media", gradient: "from-pink-500 to-purple-600" },
];

export function Portfolio({ compact = false }) {
  const [active, setActive] = useState("All");
  const items = active === "All" ? projects : projects.filter((p) => p.category === active);
  const shown = compact ? items.slice(0, 6) : items;

  return (
    <Section
      eyebrow="Selected work"
      title={<>A portfolio that <span className="text-gradient">speaks louder</span> than words</>}
      description="A handful of recent projects across branding, digital, and social."
    >
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition-smooth ${
              active === c
                ? "bg-foreground text-background border-foreground"
                : "border-border text-muted-foreground hover:text-foreground hover:border-foreground/30"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {shown.map((p) => (
          <a
            key={p.title}
            href="#"
            className="group relative block rounded-2xl overflow-hidden border border-border bg-card"
          >
            <div className={`aspect-[4/5] bg-gradient-to-br ${p.gradient} relative`}>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.25),transparent_50%)]" />
              <div className="absolute inset-0 grid place-items-center">
                <span className="text-5xl font-bold text-white/20 tracking-tight">Pixora</span>
              </div>
            </div>
            <div className="flex items-center justify-between p-5">
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">{p.category}</div>
                <h3 className="mt-1 font-semibold">{p.title}</h3>
              </div>
              <div className="h-10 w-10 grid place-items-center rounded-full bg-accent text-primary group-hover:bg-gradient-primary group-hover:text-primary-foreground transition-smooth">
                <ArrowUpRight size={18} />
              </div>
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
}
