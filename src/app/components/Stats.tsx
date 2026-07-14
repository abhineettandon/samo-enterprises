export function Stats() {
    const stats = [
        { label: "Years of expertise", value: "11" },
        { label: "Stone varieties", value: "78+" },
        { label: "Countries sourced", value: "14" },
        { label: "Projects completed", value: "200+" },
    ];
    
    return (
        <section className="border-b border-border" style={{ background: "#EDE6D3" }}>
            <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-2 md:grid-cols-4 gap-10">
            {stats.map(stat => (
                <div key={stat.label}>
                <p
                    className="text-4xl text-foreground mb-1"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 500 }}
                >
                    {stat.value}
                </p>
                <p className="text-xs tracking-widest uppercase text-muted-foreground" style={{ fontFamily: "'DM Mono', monospace" }}>
                    {stat.label}
                </p>
                </div>
            ))}
            </div>
        </section>
    )
}