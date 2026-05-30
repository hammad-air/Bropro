import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className = "",
  align = "center",
}: {
  id?: string;
  eyebrow?: string;
  title?: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
  className?: string;
  align?: "center" | "left";
}) {
  return (
    <section id={id} className={`py-20 lg:py-28 ${className}`}>
      <div className="container-px mx-auto max-w-7xl">
        {(eyebrow || title || description) && (
          <div className={`max-w-2xl mb-14 ${align === "center" ? "mx-auto text-center" : ""}`}>
            {eyebrow && (
              <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-3">
                {eyebrow}
              </span>
            )}
            {title && (
              <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">{title}</h2>
            )}
            {description && (
              <p className="mt-4 text-base md:text-lg text-muted-foreground">{description}</p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
