import { Link } from "react-router";

const CATEGORIES = [
  {
    to: "/granite",
    label: "Granite",
    tagline: "Enduring strength, timeless beauty",
    description:
      "Quarried from the earth's depths, our granites offer unmatched durability and a spectrum of dramatic natural patterns. Ideal for countertops, flooring, and exterior cladding.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&h=1100&fit=crop&auto=format&q=80",
    alt: "Dark speckled granite stone surface",
    count: 20,
  },
  {
    to: "/marble",
    label: "Marble",
    tagline: "Refined elegance, sculpted by time",
    description:
      "From the quarries of Carrara to the hills of Turkey, our marble collection brings classical grandeur to kitchens, bathrooms, and landmark interiors.",
    image: "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?w=900&h=1100&fit=crop&auto=format&q=80",
    alt: "Luxurious white marble with veining",
    count: 12,
  },
  {
    to: "/tiles",
    label: "Tiles",
    tagline: "Versatile surfaces, infinite character",
    description:
      "A curated selection of ceramic, porcelain, and natural stone tiles spanning heritage patterns to contemporary large-format designs for walls and floors.",
    image: "https://images.unsplash.com/photo-1615971677499-5467cbab01c0?w=900&h=1100&fit=crop&auto=format&q=80",
    alt: "Geometric pattern tile arrangement",
    count: 16,
  },
];

export function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ background: "#1C1814" }}>
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=1600&h=900&fit=crop&auto=format&q=60')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 py-32 md:py-44">
          <p
            className="text-xs tracking-widest uppercase mb-6"
            style={{ fontFamily: "'DM Mono', monospace", color: "#8B6914" }}
          >
            Natural Stone · Since 2005
          </p>
          <h1
            className="text-5xl md:text-7xl leading-tight mb-8 max-w-3xl"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontWeight: 500,
              color: "#F5F0E8",
              lineHeight: 1.1,
            }}
          >
            Stone quarried from the world's finest deposits
          </h1>
          <p className="text-lg max-w-xl mb-12" style={{ color: "#A89880", fontWeight: 300 }}>
            SAMO Enterprises sources and supplies premium granite, marble, and tiles for residential and commercial projects of distinction.
          </p>
          <div className="flex flex-wrap gap-4">
            {["Granite", "Marble", "Tiles"].map(cat => (
              <Link
                key={cat}
                to={`/${cat.toLowerCase()}`}
                className="px-7 py-3 text-sm tracking-widest uppercase border transition-all duration-200 hover:bg-accent hover:border-accent hover:text-primary-foreground"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  letterSpacing: "0.14em",
                  borderColor: "rgba(245,240,232,0.3)",
                  color: "#F5F0E8",
                  background: "transparent",
                }}
              >
                {cat}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Intro strip */}
      <section className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          {[
            { label: "Stone varieties", value: "78+" },
            { label: "Countries sourced", value: "14" },
            { label: "Projects completed", value: "3,200+" },
            { label: "Years of expertise", value: "21" },
          ].map(stat => (
            <div key={stat.label} className="flex flex-col">
              <span
                className="text-3xl text-foreground"
                style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 500 }}
              >
                {stat.value}
              </span>
              <span
                className="text-xs tracking-widest uppercase text-muted-foreground mt-1"
                style={{ fontFamily: "'DM Mono', monospace" }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Collections */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="mb-14">
          <p
            className="text-xs tracking-widest uppercase text-muted-foreground mb-3"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            Our Collections
          </p>
          <h2
            className="text-4xl md:text-5xl text-foreground max-w-lg"
            style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 500, lineHeight: 1.15 }}
          >
            Three families of natural stone
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CATEGORIES.map(cat => (
            <Link
              key={cat.to}
              to={cat.to}
              className="group block overflow-hidden"
              style={{ background: "var(--card)" }}
            >
              <div className="overflow-hidden" style={{ height: 360 }}>
                <img
                  src={cat.image}
                  alt={cat.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6 border-t border-border">
                <div className="flex items-start justify-between mb-2">
                  <h3
                    className="text-2xl text-foreground"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 500 }}
                  >
                    {cat.label}
                  </h3>
                  <span
                    className="text-xs text-muted-foreground mt-1.5"
                    style={{ fontFamily: "'DM Mono', monospace" }}
                  >
                    {cat.count} varieties
                  </span>
                </div>
                <p
                  className="text-xs tracking-wider uppercase text-accent mb-3"
                  style={{ fontFamily: "'DM Mono', monospace" }}
                >
                  {cat.tagline}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">{cat.description}</p>
                <div className="mt-5 flex items-center gap-2 text-sm text-foreground group-hover:text-accent transition-colors">
                  <span style={{ fontWeight: 400, letterSpacing: "0.06em" }}>View Collection</span>
                  <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Why SAMO */}
      <section className="border-t border-border" style={{ background: "#EDE6D3" }}>
        <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p
              className="text-xs tracking-widest uppercase text-muted-foreground mb-4"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              Why SAMO
            </p>
            <h2
              className="text-4xl text-foreground mb-6"
              style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 500, lineHeight: 1.2 }}
            >
              Stone that tells the story of the earth
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              We travel to quarries across India, Italy, Brazil, Turkey, and beyond to hand-select blocks with exceptional colour, veining, and structural integrity. Each slab arrives at our warehouse bearing the character of its origin.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Our team of stone specialists advises on selection, finish, and installation — ensuring every project achieves the vision its designers intend.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { title: "Direct Sourcing", body: "We buy directly from quarry owners, removing intermediaries and ensuring provenance." },
              { title: "Custom Cutting", body: "Slabs cut and finished to your exact specifications in our on-site workshop." },
              { title: "Expert Guidance", body: "Stone consultants available for project specification and finish selection." },
              { title: "Nationwide Delivery", body: "Careful white-glove delivery with crated transport to protect every piece." },
            ].map(item => (
              <div key={item.title} className="p-5 border border-border" style={{ background: "#F5F0E8" }}>
                <p
                  className="text-sm text-foreground mb-2"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 500 }}
                >
                  {item.title}
                </p>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            <h2
              className="text-3xl md:text-4xl text-foreground mb-3"
              style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 500 }}
            >
              Ready to begin your project?
            </h2>
            <p className="text-sm text-muted-foreground">Visit our showroom or request samples from our full catalogue.</p>
          </div>
          <div className="flex gap-4 flex-shrink-0">
            <a
              href="mailto:contact@samoenterprises.com"
              className="px-7 py-3 text-sm tracking-widest uppercase bg-primary text-primary-foreground border border-primary transition-all duration-200 hover:bg-accent hover:border-accent"
              style={{ fontFamily: "'Inter', sans-serif", letterSpacing: "0.14em" }}
            >
              Get in Touch
            </a>
            <Link
              to="/granite"
              className="px-7 py-3 text-sm tracking-widest uppercase border border-border text-foreground transition-all duration-200 hover:border-accent hover:text-accent"
              style={{ fontFamily: "'Inter', sans-serif", letterSpacing: "0.14em" }}
            >
              Browse Stone
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
