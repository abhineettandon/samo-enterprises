import { RequestSample } from "./RequestSample";
import { ProductCard } from "./ProductCard";

export type StoneItem = {
  id: string;
  name: string;
  finish: string[];
  thickness: string,
  image: string;
};

type CatalogueProps = {
  category: string;
  tagline: string;
  description: string;
  heroImage: string;
  heroAlt: string;
  items: StoneItem[];
};

export function Catalogue({
  category,
  tagline,
  description,
  heroImage,
  heroAlt,
  items,
}: Readonly<CatalogueProps>) {
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

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {items.map(item => (
            <ProductCard key={item.id} item={item} category={category} />
          ))}
        </div>
      </section>

      {/* Sample request CTA */}
      <RequestSample />
    </div>
  );
}
