import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container-px mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-dark text-white px-8 lg:px-16 py-16 lg:py-20 text-center">
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 h-80 w-80 rounded-full bg-primary/40 blur-3xl" />
          <div className="relative">
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight max-w-3xl mx-auto">
              Ready to make your brand <span className="text-gradient">impossible to ignore?</span>
            </h2>
            <p className="mt-4 text-white/70 max-w-xl mx-auto">
              Book a free 30-minute consultation. We'll explore your goals and how we can help.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button asChild size="lg" className="bg-gradient-primary rounded-full px-7 shadow-glow hover:opacity-90">
                <Link to="/book">Book a Meeting <ArrowRight className="ml-1" size={18} /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full px-7 bg-transparent border-white/20 text-white hover:bg-white/10 hover:text-white">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
