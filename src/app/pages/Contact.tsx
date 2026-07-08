import { useState } from "react";

type FormState = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

export function ContactPage() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    subject: "General Enquiry",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  const offices = [
    {
      city: "New York",
      label: "Head Office & Showroom",
      address: "42 Stonecutter Lane\nNew York, NY 10013",
      phone: "+1 (800) 726 6000",
      email: "info@samoenterprises.com",
      hours: "Mon–Fri 8:30am–6pm\nSat 10am–4pm",
    },
    {
      city: "Los Angeles",
      label: "West Coast Showroom",
      address: "1180 Maple Drive\nLos Angeles, CA 90021",
      phone: "+1 (213) 555 0190",
      email: "la@samoenterprises.com",
      hours: "Mon–Fri 9am–5:30pm\nSat 10am–3pm",
    },
    {
      city: "Miami",
      label: "South Florida Distribution",
      address: "3200 NW 79th Avenue\nMiami, FL 33122",
      phone: "+1 (305) 555 0142",
      email: "miami@samoenterprises.com",
      hours: "Mon–Fri 8am–5pm",
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ height: 320, background: "#1C1814" }}>
        <img
          src="https://images.unsplash.com/photo-1541123437800-1bb1317badc2?w=1600&h=500&fit=crop&auto=format&q=50"
          alt="Marble showroom interior"
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />
        <div className="relative h-full flex flex-col justify-end max-w-7xl mx-auto px-6 pb-12">
          <p
            className="text-xs tracking-widest uppercase mb-3"
            style={{ fontFamily: "'DM Mono', monospace", color: "#8B6914" }}
          >
            Get in Touch
          </p>
          <h1
            className="text-5xl md:text-6xl"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontWeight: 500,
              lineHeight: 1.1,
              color: "#F5F0E8",
            }}
          >
            Contact Us
          </h1>
        </div>
      </section>

      {/* Main content */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-5 gap-14">
        {/* Form */}
        <div className="lg:col-span-3">
          <p
            className="text-xs tracking-widest uppercase text-muted-foreground mb-6"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            Send a Message
          </p>

          {submitted ? (
            <div className="border border-border p-10" style={{ background: "var(--card)" }}>
              <p
                className="text-2xl text-foreground mb-3"
                style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 500 }}
              >
                Thank you, {form.name.split(" ")[0]}.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                We have received your message and will be in touch within one business day. If your enquiry is urgent, please call us directly at +1 (800) 726 6000.
              </p>
              <button
                onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", subject: "General Enquiry", message: "" }); }}
                className="text-sm text-accent hover:text-foreground transition-colors"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                ← Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="name"
                    className="text-xs tracking-widest uppercase text-muted-foreground"
                    style={{ fontFamily: "'DM Mono', monospace" }}
                  >
                    Full Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Jane Smith"
                    className="border border-border bg-transparent px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="email"
                    className="text-xs tracking-widest uppercase text-muted-foreground"
                    style={{ fontFamily: "'DM Mono', monospace" }}
                  >
                    Email *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="jane@studio.com"
                    className="border border-border bg-transparent px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="phone"
                    className="text-xs tracking-widest uppercase text-muted-foreground"
                    style={{ fontFamily: "'DM Mono', monospace" }}
                  >
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+1 (212) 000 0000"
                    className="border border-border bg-transparent px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="subject"
                    className="text-xs tracking-widest uppercase text-muted-foreground"
                    style={{ fontFamily: "'DM Mono', monospace" }}
                  >
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className="border border-border bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:border-accent transition-colors appearance-none"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    <option>General Enquiry</option>
                    <option>Sample Request</option>
                    <option>Project Specification</option>
                    <option>Trade Account</option>
                    <option>Showroom Visit</option>
                    <option>Delivery & Logistics</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="message"
                  className="text-xs tracking-widest uppercase text-muted-foreground"
                  style={{ fontFamily: "'DM Mono', monospace" }}
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project, the materials you're interested in, or any questions you have…"
                  className="border border-border bg-transparent px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors resize-none"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                />
              </div>

              <button
                type="submit"
                className="px-8 py-3 text-sm tracking-widest uppercase bg-primary text-primary-foreground border border-primary transition-all duration-200 hover:bg-accent hover:border-accent"
                style={{ fontFamily: "'Inter', sans-serif", letterSpacing: "0.14em" }}
              >
                Send Message
              </button>
            </form>
          )}
        </div>

        {/* Sidebar info */}
        <div className="lg:col-span-2 flex flex-col gap-8">
          <div>
            <p
              className="text-xs tracking-widest uppercase text-muted-foreground mb-4"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              Quick Contact
            </p>
            <div className="space-y-3 text-sm">
              <a href="tel:+18007266000" className="flex items-center gap-3 text-foreground hover:text-accent transition-colors">
                <span className="text-muted-foreground" style={{ fontFamily: "'DM Mono', monospace" }}>Tel</span>
                +1 (800) 726 6000
              </a>
              <a href="mailto:info@samoenterprises.com" className="flex items-center gap-3 text-foreground hover:text-accent transition-colors">
                <span className="text-muted-foreground" style={{ fontFamily: "'DM Mono', monospace" }}>Email</span>
                info@samoenterprises.com
              </a>
              <a href="mailto:samples@samoenterprises.com" className="flex items-center gap-3 text-foreground hover:text-accent transition-colors">
                <span className="text-muted-foreground" style={{ fontFamily: "'DM Mono', monospace" }}>Samples</span>
                samples@samoenterprises.com
              </a>
            </div>
          </div>

          <div className="border-t border-border pt-8">
            <p
              className="text-xs tracking-widest uppercase text-muted-foreground mb-4"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              Trade Accounts
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Architects, interior designers, and contractors are eligible for our trade programme — including preferential pricing, priority scheduling, and dedicated account management.
            </p>
            <a
              href="mailto:trade@samoenterprises.com"
              className="mt-4 inline-block text-sm text-accent hover:text-foreground transition-colors"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Apply for a trade account →
            </a>
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="border-t border-border" style={{ background: "#EDE6D3" }}>
        <div className="max-w-7xl mx-auto px-6 py-16">
          <p
            className="text-xs tracking-widest uppercase text-muted-foreground mb-10"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            Our Locations
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map(office => (
              <div key={office.city} className="border border-border p-7" style={{ background: "#F5F0E8" }}>
                <p
                  className="text-xl text-foreground mb-1"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 500 }}
                >
                  {office.city}
                </p>
                <p className="text-xs text-accent tracking-wider uppercase mb-5" style={{ fontFamily: "'DM Mono', monospace" }}>
                  {office.label}
                </p>
                <address className="not-italic text-sm text-muted-foreground space-y-2">
                  <p style={{ whiteSpace: "pre-line" }}>{office.address}</p>
                  <p className="pt-2">
                    <a href={`tel:${office.phone.replace(/\s/g, "")}`} className="hover:text-foreground transition-colors">
                      {office.phone}
                    </a>
                  </p>
                  <p>
                    <a href={`mailto:${office.email}`} className="hover:text-foreground transition-colors">
                      {office.email}
                    </a>
                  </p>
                  <p className="pt-2 text-xs" style={{ whiteSpace: "pre-line", fontFamily: "'DM Mono', monospace" }}>
                    {office.hours}
                  </p>
                </address>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
