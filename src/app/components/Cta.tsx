import { Link } from "react-router"

export function Cta() {
    return (
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
    )
}