import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import {X, Menu} from 'lucide-react'

export function Header() {
    const NAV_LINKS = [
        { to: "/", label: "Home" },
        { to: "/granite", label: "Granite" },
        { to: "/marble", label: "Marble" },
        { to: "/tiles", label: "Tiles" },
        { to: "/about", label: "About Us" }
    ];

    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);
    
    // Close menu on route change
    useEffect(() => {
        setMenuOpen(false);
    }, [location.pathname]);

    // Lock body scroll when menu is open
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [menuOpen]);

    return (
        <header className="border-b border-border sticky top-0 z-40 bg-background">
            <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex flex-col leading-none">
                <img src="/img/logo.png" alt="samo-enterprises" className="object-cover w-24 h-24" />
                </Link>

                {/* Desktop nav */}
                <nav className="hidden md:flex items-center gap-8">
                {NAV_LINKS.map(({ to, label }) => {
                    const active = location.pathname === to;
                    return (
                    <Link
                        key={to}
                        to={to}
                        className={`text-sm tracking-widest uppercase transition-colors duration-200 ${
                        active
                            ? "text-accent border-b border-accent pb-0.5"
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                        style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, letterSpacing: "0.12em" }}
                    >
                        {label}
                    </Link>
                    );
                })}
                </nav>

                {/* Burger button */}
                <button
                onClick={() => setMenuOpen(prev => !prev)}
                className="md:hidden p-2 -mr-2 text-foreground hover:text-accent transition-colors"
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                >
                {menuOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>

            {/* Mobile drawer */}
            {menuOpen && (
                <div className="md:hidden border-t border-border bg-background">
                <nav className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-1">
                    {NAV_LINKS.map(({ to, label }) => {
                    const active = location.pathname === to;
                    return (
                        <Link
                        key={to}
                        to={to}
                        className={`py-3 border-b border-border text-sm tracking-widest uppercase transition-colors duration-150 ${
                            active ? "text-accent" : "text-foreground hover:text-accent"
                        }`}
                        style={{ fontFamily: "'Inter', sans-serif", letterSpacing: "0.14em" }}
                        >
                        {label}
                        </Link>
                    );
                    })}
                    <div className="pt-5 flex flex-col gap-2 text-xs text-muted-foreground" style={{ fontFamily: "'DM Mono', monospace" }}>
                    <a href="mailto:contact@sampenterprises.com" className="text-xs tracking-widest uppercase text-muted-foreground" style={{ fontFamily: "'DM Mono', monospace" }}>
                        contact@samoenterprises.com
                    </a>
                    <a href="tel:+91 62399 40093" className="text-xs tracking-widest uppercase text-muted-foreground" style={{ fontFamily: "'DM Mono', monospace" }}>
                        +91 62399 40093
                    </a>
                    </div>
                </nav>
                </div>
            )}
        </header>
    )
}