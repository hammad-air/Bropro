import { Link } from "@tanstack/react-router";
import { Instagram, Linkedin, Mail, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gradient-dark text-white mt-24">
      <div className="container-px mx-auto max-w-7xl py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-xl bg-gradient-primary grid place-items-center font-bold">P</div>
            <span className="text-xl font-semibold">Pixora</span>
          </div>
          <p className="mt-4 text-white/70 max-w-md">
            Transforming ideas into visual impact. A creative design agency crafting brand identities and digital experiences that move businesses forward.
          </p>
          <div className="mt-6 flex items-center gap-3">
            {[
              { Icon: MessageCircle, href: "https://wa.me/" , label: "WhatsApp" },
              { Icon: Instagram, href: "#", label: "Instagram" },
              { Icon: Linkedin, href: "#", label: "LinkedIn" },
              { Icon: Mail, href: "mailto:hello@pixora.studio", label: "Email" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="h-10 w-10 grid place-items-center rounded-full border border-white/15 hover:bg-primary hover:border-primary transition-smooth"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-white/60">Quick Links</h4>
          <ul className="mt-4 space-y-2">
            {[
              { to: "/", label: "Home" },
              { to: "/portfolio", label: "Portfolio" },
              { to: "/about", label: "About" },
              { to: "/book", label: "Book a Meeting" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-white/80 hover:text-white">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-white/60">Services</h4>
          <ul className="mt-4 space-y-2 text-white/80">
            <li>Brand Identity</li>
            <li>Logo Design</li>
            <li>Social Media Design</li>
            <li>Marketing Creatives</li>
            <li>UI Design</li>
            <li>Presentation Design</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-px mx-auto max-w-7xl py-6 text-sm text-white/60 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} Pixora. All Rights Reserved.</p>
          <p>Designs that make brands impossible to ignore.</p>
        </div>
      </div>
    </footer>
  );
}
