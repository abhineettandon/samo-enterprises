import { Link } from "react-router"

export function Footer() {
    return (
        <footer className="border-t border-border">
            <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="flex flex-col items-center justify-center text-center">
                <img src="/img/logo.png" alt="samo-enterprises" className="object-cover w-28 h-28" />
                <p className="text-sm text-muted-foreground leading-relaxed mt-4">
                Supplying premium natural stone to architects, designers, and homeowners since 2005.
                </p>
            </div>
            <div>
                <p className="text-xs tracking-widest uppercase text-muted-foreground mb-4" style={{ fontFamily: "'DM Mono', monospace" }}>
                Collections
                </p>
                <ul className="space-y-2">
                {["Granite", "Marble", "Tiles"].map(cat => (
                    <li key={cat}>
                    <Link
                        to={`/${cat.toLowerCase()}`}
                        className="text-sm text-foreground hover:text-accent transition-colors"
                    >
                        {cat}
                    </Link>
                    </li>
                ))}
                </ul>
            </div>
            <div>
                <p className="text-xs tracking-widest uppercase text-muted-foreground mb-4" style={{ fontFamily: "'DM Mono', monospace" }}>
                Contact
                </p>
                <address className="text-sm text-foreground not-italic space-y-1">
                <p>SCO-35, Sagar Enclave</p>
                <p>Transport Nagar, Jalandhar City, 144012</p>
                <a href="mailto:contact@samoenterprises.com" className="mt-3 text-muted-foreground block">contact@samoenterprises.com</a>
                <a href="mailto:info@samoenterprises.com" className="text-muted-foreground block">info@samoenterprises.com</a>
                <a href="mailto:sales@samoenterprises.com" className="text-muted-foreground block">sales@samoenterprises.com</a>
                <a href="mailto:samoenterprises3@gmail.com" className="text-muted-foreground block">samoenterprises3@gmail.com</a>
                <a href="tel:+91 62399 40093" className="mt-3 text-muted-foreground block">+91 62399 40093</a>
                <a href="tel:+91 62399 50093" className="text-muted-foreground block">+91 62399 50093</a>
                </address>
            </div>
            </div>
            <div className="border-t border-border">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <p className="text-xs text-muted-foreground" style={{ fontFamily: "'DM Mono', monospace" }}>
                © 2015 SAMO Enterprises. All rights reserved.
                </p>
            </div>
            </div>
        </footer>
    )
}