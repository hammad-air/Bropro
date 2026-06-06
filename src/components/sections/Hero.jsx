import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero.jpg";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 lg:pt-44 lg:pb-32 bg-gradient-hero">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 -left-32 h-96 w-96 rounded-full bg-primary/20 blur-3xl animate-float" />
        <div className="absolute bottom-0 right-0 h-[28rem] w-[28rem] rounded-full bg-primary-glow/20 blur-3xl" />
      </div>

      <div className="container-px mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-background/60 backdrop-blur text-xs font-medium">
            <Sparkles size={14} className="text-primary" />
            Creative Design Agency
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight leading-[1.05]">
            Designs that make brands{" "}
            <span className="text-gradient">impossible to ignore.</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl">
            We help businesses grow through strategic branding, social media design, and creative visual experiences that convert.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button asChild size="lg" className="bg-gradient-primary shadow-glow rounded-full px-7 hover:opacity-90">
              <Link to="/book">
                Book a Meeting
                <ArrowRight className="ml-1" size={18} />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full px-7">
              <Link to="/portfolio">View Portfolio</Link>
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
            {[
              { k: "120+", v: "Projects" },
              { k: "60+", v: "Clients" },
              { k: "5+", v: "Years" },
            ].map((s) => (
              <div key={s.v}>
                <div className="text-2xl md:text-3xl font-semibold">{s.k}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{s.v}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative animate-fade-up">
          <div className="relative rounded-3xl overflow-hidden shadow-glow border border-border">
            <img
              src={heroImg}
              alt="Pixora creative visual"
              width={1920}
              height={1080}
              className="w-full h-auto"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden md:block rounded-2xl bg-background border border-border p-4 shadow-card w-56">
            <div className="text-xs text-muted-foreground">Avg. project</div>
            <div className="text-lg font-semibold">Delivered in 14 days</div>
          </div>
          <div className="absolute -top-6 -right-2 hidden md:block rounded-2xl bg-gradient-primary text-primary-foreground p-4 shadow-glow w-48">
            <div className="text-xs opacity-80">Rated</div>
            <div className="text-lg font-semibold">★ 5.0 by clients</div>
          </div>
        </div>
      </div>
    </section>
  );
}
