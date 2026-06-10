import { useState } from "react";

export type StoneItem = {
  id: string;
  name: string;
  origin: string;
  finish: string[];
  use: string;
  description: string;
  image: string;
  alt: string;
  featured?: boolean;
};

type CataloguePageProps = {
  category: string;
  tagline: string;
  description: string;
  heroImage: string;
  heroAlt: string;
  finishFilters: string[];
  items: StoneItem[];
};

export function CataloguePage({
  category,
  tagline,
  description,
  heroImage,
  heroAlt,
  finishFilters,
  items,
}: CataloguePageProps) {
  const [activeFinish, setActiveFinish] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = items.filter(item => {
    const matchesFinish = activeFinish === "All" || item.finish.includes(activeFinish);
    const matchesSearch =
      searchQuery === "" ||
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.origin.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFinish && matchesSearch;
  });

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ height: 360, background: "#1C1814" }}>
        <img
          src={heroImage}
          alt={heroAlt}
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="relative h-full flex flex-col justify-end max-w-7xl mx-auto px-6 pb-12">
          <p
            className="text-xs tracking-widest uppercase mb-3"
            style={{ fontFamily: "'DM Mono', monospace", color: "#8B6914" }}
          >
            SAMO Enterprises · Collection
          </p>
          <h1
            className="text-5xl md:text-6xl text-primary-foreground mb-3"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontWeight: 500,
              lineHeight: 1.1,
              color: "#F5F0E8",
            }}
          >
            {category}
          </h1>
          <p className="text-sm max-w-xl" style={{ color: "#A89880" }}>
            {tagline}
          </p>
        </div>
      </section>

      {/* Description strip */}
      <section className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <p className="text-sm text-muted-foreground max-w-2xl leading-relaxed">{description}</p>
          <div className="flex-shrink-0 text-right">
            <span
              className="text-3xl text-foreground"
              style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 500 }}
            >
              {items.length}
            </span>
            <p className="text-xs text-muted-foreground tracking-widest uppercase mt-0.5" style={{ fontFamily: "'DM Mono', monospace" }}>
              Varieties Available
            </p>
          </div>
        </div>
      </section>

      {/* Filters + Search */}
      <section className="border-b border-border sticky top-[89px] z-30 bg-background">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
          <div className="flex items-center gap-2 flex-wrap">
            <span
              className="text-xs tracking-widest uppercase text-muted-foreground mr-2"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              Finish
            </span>
            {["All", ...finishFilters].map(finish => (
              <button
                key={finish}
                onClick={() => setActiveFinish(finish)}
                className={`px-4 py-1.5 text-xs tracking-wider uppercase border transition-all duration-150 ${
                  activeFinish === finish
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
                }`}
                style={{ fontFamily: "'Inter', sans-serif", letterSpacing: "0.1em" }}
              >
                {finish}
              </button>
            ))}
          </div>
          <input
            type="text"
            placeholder="Search by name or origin…"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="text-sm border border-border bg-transparent px-4 py-2 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
            style={{ fontFamily: "'Inter', sans-serif", minWidth: 220 }}
          />
        </div>
      </section>

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        {filtered.length === 0 ? (
          <div className="py-24 text-center">
            <p className="text-muted-foreground text-sm">No stones match your filters.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filtered.map(item => (
              <article
                key={item.id}
                className="group overflow-hidden border border-border transition-shadow duration-300 hover:shadow-lg"
                style={{ background: "var(--card)" }}
              >
                <div className="overflow-hidden" style={{ height: 220 }}>
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-start justify-between mb-1">
                    <h3
                      className="text-base text-foreground leading-snug"
                      style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 500 }}
                    >
                      {item.name}
                    </h3>
                    {item.featured && (
                      <span
                        className="text-xs text-accent ml-2 flex-shrink-0 mt-0.5"
                        style={{ fontFamily: "'DM Mono', monospace" }}
                      >
                        ★
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground mb-3" style={{ fontFamily: "'DM Mono', monospace" }}>
                    {item.origin}
                  </p>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-4">{item.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {item.finish.map(f => (
                      <span
                        key={f}
                        className="text-xs px-2 py-0.5 border border-border text-muted-foreground"
                        style={{ fontFamily: "'DM Mono', monospace" }}
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                  <div className="border-t border-border pt-3 flex items-center justify-between">
                    <span className="text-xs text-muted-foreground uppercase tracking-wider" style={{ fontFamily: "'DM Mono', monospace" }}>
                      {item.use}
                    </span>
                    <button
                      className="text-xs text-accent hover:text-foreground transition-colors"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      Enquire →
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* Sample request CTA */}
      <section className="border-t border-border" style={{ background: "#EDE6D3" }}>
        <div className="max-w-7xl mx-auto px-6 py-14 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h2
              className="text-2xl text-foreground mb-2"
              style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 500 }}
            >
              Request a sample
            </h2>
            <p className="text-sm text-muted-foreground">
              We send complimentary samples so you can see and feel the stone before committing.
            </p>
          </div>
          <a
            href="mailto:samples@samoenterprises.com"
            className="px-7 py-3 text-sm tracking-widest uppercase bg-primary text-primary-foreground border border-primary transition-all duration-200 hover:bg-accent hover:border-accent flex-shrink-0"
            style={{ fontFamily: "'Inter', sans-serif", letterSpacing: "0.14em" }}
          >
            Request Samples
          </a>
        </div>
      </section>
    </div>
  );
}
