const brands = ["Northwind", "Acme Co", "Lumen", "Vertex", "Orbit", "Zentro", "Halcyon", "Mosaic"];

export function TrustedBy() {
  return (
    <section className="border-y border-border bg-surface/60">
      <div className="container-px mx-auto max-w-7xl py-10">
        <p className="text-center text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground">
          Trusted by ambitious brands worldwide
        </p>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6 items-center">
          {brands.map((b) => (
            <div
              key={b}
              className="text-center text-lg font-semibold text-muted-foreground/70 hover:text-foreground transition-smooth tracking-tight"
            >
              {b}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
