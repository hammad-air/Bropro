import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, MapPin, Video } from "lucide-react";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "Book a Meeting — Pixora" },
      { name: "description", content: "Book a free consultation with Pixora — Google Meet, Zoom, or in-person in Karachi." },
      { property: "og:title", content: "Book a Meeting — Pixora" },
      { property: "og:description", content: "Tell us about your project. We'll set up a call." },
      { property: "og:url", content: "/book" },
    ],
    links: [{ rel: "canonical", href: "/book" }],
  }),
  component: BookPage,
});

const schema = z.object({
  name: z.string().trim().min(2, "Name is required").max(80),
  company: z.string().trim().max(100).optional().or(z.literal("")),
  email: z.string().trim().email("Valid email required").max(160),
  phone: z.string().trim().min(6, "Phone is required").max(30),
  service: z.string().min(1, "Select a service"),
  meetingType: z.string().min(1, "Select a meeting type"),
  date: z.string().min(1, "Pick a preferred date"),
  details: z.string().trim().max(1000).optional().or(z.literal("")),
});

function BookPage() {
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Request received — we'll confirm your meeting within 24 hours.");
      e.currentTarget.reset();
    }, 600);
  };

  return (
    <div className="pt-32 pb-20 bg-gradient-hero">
      <div className="container-px mx-auto max-w-6xl">
        <div className="max-w-2xl mx-auto text-center">
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-3">Book a meeting</span>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">Let's talk about your project</h1>
          <p className="mt-4 text-muted-foreground">Choose a meeting type, share a few details, and we'll get back within 24 hours.</p>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-8 mt-14">
          <aside className="space-y-4">
            {[
              { Icon: Video, title: "Google Meet / Zoom", desc: "Anywhere in the world. We'll send you a link." },
              { Icon: MapPin, title: "In-person (Karachi)", desc: "Available for clients located in Karachi." },
              { Icon: Calendar, title: "Free 30-min consult", desc: "We'll explore goals, scope and timeline." },
            ].map(({ Icon, title, desc }) => (
              <div key={title} className="rounded-2xl border border-border bg-card p-5 flex gap-4">
                <div className="h-11 w-11 rounded-xl bg-accent text-primary grid place-items-center shrink-0">
                  <Icon size={20} />
                </div>
                <div>
                  <h3 className="font-semibold">{title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{desc}</p>
                </div>
              </div>
            ))}
          </aside>

          <form onSubmit={onSubmit} className="rounded-3xl border border-border bg-card p-6 lg:p-8 shadow-card space-y-5">
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Your Name"><Input name="name" required maxLength={80} placeholder="Jane Doe" /></Field>
              <Field label="Company"><Input name="company" maxLength={100} placeholder="Acme Inc." /></Field>
              <Field label="Email"><Input name="email" type="email" required maxLength={160} placeholder="jane@company.com" /></Field>
              <Field label="Phone"><Input name="phone" required maxLength={30} placeholder="+92 300 0000000" /></Field>

              <Field label="Service Required">
                <Select name="service">
                  <SelectTrigger><SelectValue placeholder="Choose a service" /></SelectTrigger>
                  <SelectContent>
                    {["Brand Identity","Logo Design","Social Media Design","Marketing Creatives","UI Design","Presentation Design","Other"].map(s => (
                      <SelectItem key={s} value={s}>{s}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </Field>
              <Field label="Meeting Type">
                <Select name="meetingType">
                  <SelectTrigger><SelectValue placeholder="Select type" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Google Meet">Google Meet</SelectItem>
                    <SelectItem value="Zoom">Zoom</SelectItem>
                    <SelectItem value="In-person (Karachi)">In-person (Karachi)</SelectItem>
                  </SelectContent>
                </Select>
              </Field>
              <Field label="Preferred Date & Time" className="sm:col-span-2">
                <Input name="date" type="datetime-local" required />
              </Field>
              <Field label="Project Details" className="sm:col-span-2">
                <Textarea name="details" rows={5} maxLength={1000} placeholder="Tell us a bit about your goals, timeline, and budget…" />
              </Field>
            </div>
            <Button type="submit" disabled={loading} size="lg" className="w-full bg-gradient-primary shadow-glow rounded-full hover:opacity-90">
              {loading ? "Sending…" : "Request Meeting"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

function Field({ label, children, className = "" }: { label: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={className}>
      <Label className="mb-2 inline-block text-sm">{label}</Label>
      {children}
    </div>
  );
}
