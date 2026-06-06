import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { z } from 'zod';
import { toast } from 'sonner';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Instagram, Linkedin, Mail, MessageCircle, Phone } from 'lucide-react';

const schema = z.object({
  name: z.string().trim().min(2).max(80),
  email: z.string().trim().email().max(160),
  phone: z.string().trim().min(6).max(30),
  message: z.string().trim().min(5).max(1000),
});

function ContactPage() {
  const [loading, setLoading] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      toast.error('Please complete all fields correctly.');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Message sent - we'll respond shortly.");
      e.currentTarget.reset();
    }, 500);
  };

  const channels = [
    { Icon: MessageCircle, label: 'WhatsApp', value: '+92 300 0000000', href: 'https://wa.me/' },
    { Icon: Mail, label: 'Email', value: 'hello@pixora.studio', href: 'mailto:hello@pixora.studio' },
    { Icon: Linkedin, label: 'LinkedIn', value: '/company/pixora', href: '#' },
    { Icon: Instagram, label: 'Instagram', value: '@pixora.studio', href: '#' },
  ];

  return (
    <>
      <Helmet>
        <title>Contact - Pixora</title>
        <meta name="description" content="Reach Pixora via WhatsApp, email, LinkedIn or Instagram, or send us a message." />
        <meta property="og:title" content="Contact - Pixora" />
        <meta property="og:description" content="Get in touch with our team." />
        <meta property="og:url" content="/contact" />
        <link rel="canonical" href="/contact" />
      </Helmet>

      <div className="pt-32 pb-20">
        <div className="container-px mx-auto max-w-6xl">
          <div className="max-w-2xl mx-auto text-center">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-3">Contact</span>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">Let's create something great</h1>
            <p className="mt-4 text-muted-foreground">Reach us through any channel below, or drop a message.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mt-14">
            <div className="space-y-3">
              {channels.map(({ Icon, label, value, href }) => (
                <a key={label} href={href} className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 hover:border-primary/40 hover:shadow-card transition-smooth">
                  <div className="h-12 w-12 rounded-xl bg-gradient-primary text-primary-foreground grid place-items-center">
                    <Icon size={20} />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground">{label}</div>
                    <div className="font-medium">{value}</div>
                  </div>
                </a>
              ))}
              <div className="rounded-2xl border border-border bg-card p-5 flex items-center gap-4">
                <div className="h-12 w-12 rounded-xl bg-accent text-primary grid place-items-center"><Phone size={20} /></div>
                <p className="text-sm text-muted-foreground">Mon-Sat · 10am - 7pm PKT</p>
              </div>
            </div>

            <form onSubmit={onSubmit} className="rounded-3xl border border-border bg-card p-6 lg:p-8 shadow-card space-y-4">
              <div>
                <Label className="mb-2 inline-block text-sm">Name</Label>
                <Input name="name" required maxLength={80} placeholder="Your full name" />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label className="mb-2 inline-block text-sm">Email</Label>
                  <Input name="email" type="email" required maxLength={160} placeholder="you@email.com" />
                </div>
                <div>
                  <Label className="mb-2 inline-block text-sm">Phone</Label>
                  <Input name="phone" required maxLength={30} placeholder="+92 300 0000000" />
                </div>
              </div>
              <div>
                <Label className="mb-2 inline-block text-sm">Message</Label>
                <Textarea name="message" rows={6} required maxLength={1000} placeholder="How can we help?" />
              </div>
              <Button type="submit" disabled={loading} size="lg" className="w-full bg-gradient-primary shadow-glow rounded-full hover:opacity-90">
                {loading ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactPage;
