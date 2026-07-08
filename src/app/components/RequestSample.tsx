export function RequestSample() {
    return (
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
                href="mailto:contact@samoenterprises.com?subject=Request Samples"
                className="px-7 py-3 text-sm tracking-widest uppercase bg-primary text-primary-foreground border border-primary transition-all duration-200 hover:bg-accent hover:border-accent flex-shrink-0"
                style={{ fontFamily: "'Inter', sans-serif", letterSpacing: "0.14em" }}
            >
                Request Samples
            </a>
            </div>
        </section>
    )
}