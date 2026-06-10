import { Link, Outlet, useLocation } from "react-router";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/granite", label: "Granite" },
  { to: "/marble", label: "Marble" },
  { to: "/tiles", label: "Tiles" },
];

export function Layout() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Top bar */}
      <div className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <p className="text-xs tracking-widest uppercase text-muted-foreground" style={{ fontFamily: "'DM Mono', monospace" }}>
            Est. 1998 · Premium Natural Stone
          </p>
          <p className="text-xs tracking-widest uppercase text-muted-foreground" style={{ fontFamily: "'DM Mono', monospace" }}>
            +1 (800) 726 6000
          </p>
        </div>
      </div>

      {/* Nav */}
      <header className="border-b border-border sticky top-0 z-40 bg-background">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <Link to="/" className="flex flex-col leading-none group">
            <span
              className="text-2xl tracking-tight text-foreground"
              style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 600 }}
            >
              SAMO
            </span>
            <span
              className="text-xs tracking-[0.22em] uppercase text-muted-foreground mt-0.5"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
            >
              Enterprises
            </span>
          </Link>

          <nav className="flex items-center gap-8">
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
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-20">
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <p
              className="text-xl text-foreground mb-2"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              SAMO Enterprises
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Supplying premium natural stone to architects, designers, and homeowners since 1998.
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
              <p>42 Stonecutter Lane</p>
              <p>New York, NY 10013</p>
              <p className="mt-3 text-muted-foreground">info@samoenterprises.com</p>
              <p className="text-muted-foreground">+1 (800) 726 6000</p>
            </address>
          </div>
        </div>
        <div className="border-t border-border">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <p className="text-xs text-muted-foreground" style={{ fontFamily: "'DM Mono', monospace" }}>
              © 2026 SAMO Enterprises. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
