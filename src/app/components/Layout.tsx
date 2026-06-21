import { Link, Outlet, useLocation } from "react-router";

const NAV_LINKS = [
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
          <a href="mailto:contact@sampenterprises.com" className="text-xs tracking-widest uppercase text-muted-foreground" style={{ fontFamily: "'DM Mono', monospace" }}>
            contact@samoenterprises.com
          </a>
          <a href="tel:+91 62399 40093" className="text-xs tracking-widest uppercase text-muted-foreground" style={{ fontFamily: "'DM Mono', monospace" }}>
            +91 62399 40093
          </a>
        </div>
      </div>

      {/* Nav */}
      <header className="border-b border-border sticky top-0 z-40 bg-background">
        <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
          <Link to="/" className="flex flex-col leading-none group">
            <img src="/img/logo.png" alt="samo-enterprises" className="object-cover w-24 h-24" />
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
              <a href="mailto:samoenterprises@gmail.com" className="text-muted-foreground block">samoenterprisest@gmail.com</a>
              <a href="tel:+91 62399 40093" className="mt-3 text-muted-foreground block">+91 62399 40093</a>
              <a href="tel:+91 62399 50093" className="text-muted-foreground block">+91 62399 50093</a>
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
