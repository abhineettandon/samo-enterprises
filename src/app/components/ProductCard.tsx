import { StoneItem } from "./Catalogue"

type ProductCardProps = {
    item: StoneItem,
    category: string
}

export function ProductCard({ item, category }: Readonly<ProductCardProps>) {
    return (
        <article
            key={item.id}
            className="group overflow-hidden border border-border transition-shadow duration-300 hover:shadow-lg"
            style={{ background: "var(--card)" }}
        >
            <div className="overflow-hidden relative" style={{ height: 220 }}>
                <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <img src="/img/logo.png" alt="logo" className="absolute top-0 right-0 mt-1 mr-1 w-1/12 grayscale opacity-60" />
            </div>
            <div className="p-4">
                <div className="flex items-start justify-between mb-1">
                    <h3
                    className="text-base text-foreground leading-snug"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 500 }}
                    >
                    {item.name}
                    </h3>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed mb-4">{item.thickness}</p>
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
                    {item.id}
                    </span>
                    <a
                    href={`mailto:contact@samoenterprises.com?subject=New Enquiry | ${category}`}
                    className="text-xs text-accent hover:text-foreground transition-colors"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                    Enquire →
                    </a>
                </div>
            </div>
        </article>
    )
}