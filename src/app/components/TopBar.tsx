export function TopBar() {
    return (
        <div className="border-b border-border hidden md:block">
            <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
            <a href="mailto:contact@sampenterprises.com" className="text-xs tracking-widest uppercase text-muted-foreground" style={{ fontFamily: "'DM Mono', monospace" }}>
                contact@samoenterprises.com
            </a>
            <a href="tel:+91 62399 40093" className="text-xs tracking-widest uppercase text-muted-foreground" style={{ fontFamily: "'DM Mono', monospace" }}>
                +91 62399 40093
            </a>
            </div>
        </div>
    )
}