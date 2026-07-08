import { RequestSample } from "../components/RequestSample";
import { Stats } from "../components/Stats";

export function AboutPage() {
  const team = [
    {
      name: "Samuel Okonkwo",
      role: "Founder & Production Manager",
      bio: "USA since 2015",
      image: "/img/sahil.png",
    },
    {
      name: "Toyesh Sondhi",
      role: "Founder & International Marketing Manager",
      bio: "Canada since 2015",
      image: "/img/toyesh.png",
    },
    {
      name: "Mohit Athia",
      role: "Founder & Operational Manager",
      bio: "India since 2015",
      image: "/img/mohit.png",
    }
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ height: 360, background: "#1C1814" }}>
        <img
          src="/img/main-hero.jpg"
          alt="Stone quarry landscape"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative h-full flex flex-col justify-end max-w-7xl mx-auto px-6 pb-14">
          <p
            className="text-xs tracking-widest uppercase mb-3"
            style={{ fontFamily: "'DM Mono', monospace", color: "#8B6914" }}
          >
            Our Story
          </p>
          <h1
            className="text-5xl md:text-6xl mb-4"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontWeight: 500,
              lineHeight: 1.1,
              color: "#F5F0E8",
            }}
          >
            About SAMO Enterprises
          </h1>
          <p className="text-sm max-w-xl" style={{ color: "#A89880" }}>
            Eleven years of stone expertise, built on direct quarry relationships and an uncompromising eye for quality.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <p
              className="text-xs tracking-widest uppercase text-muted-foreground mb-4"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              Our Mission
            </p>
            <h2
              className="text-4xl text-foreground mb-6"
              style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 500, lineHeight: 1.2 }}
            >
              Stone sourced with integrity, delivered with care
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">
              Samo Enterprises
              is a trusted name in the natural stone industry, specializing in
              the supply of high-quality marble, granite, quartz, natural stones, and tiles. Since
              its establishment in 2015, the company has earned a strong reputation for
              delivering premium materials that combine durability with aesthetic excellence.
              With a commitment to quality and craftsmanship, Samo Enterprises caters to a
              diverse clientele across India, North America, and the UAE, serving both
              residential and commercial projects
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">
              We work with architects, interior designers, contractors, and homeowners — anyone who wants to build with materials that will outlast them. Our role is to make that easy: from specification through to delivery and installation guidance.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The company aims to expand its global footprint, introduce innovative stone
              solutions, and continue to be a preferred partner for luxury construction and
              design projects
            </p>
          </div>
          <div className="overflow-hidden" style={{ height: 480 }}>
            <img
              src="/img/about-stones.png"
              alt="Close-up of natural stone texture"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </section>

      {/* Stats */}
      <Stats />

      {/* Team */}
      <section className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="mb-14">
            <p
              className="text-xs tracking-widest uppercase text-muted-foreground mb-3"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              The People
            </p>
            <h2
              className="text-4xl text-foreground"
              style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 500 }}
            >
              Our team
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
            {team.map(person => (
              <div key={person.name}>
                <div className="overflow-hidden mb-4" style={{ height: 280 }}>
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <p
                  className="text-base text-foreground mb-0.5"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 500 }}
                >
                  {person.name}
                </p>
                <p className="text-xs text-accent mb-3 tracking-wider uppercase" style={{ fontFamily: "'DM Mono', monospace" }}>
                  {person.role}
                </p>
                <p className="text-xs text-muted-foreground leading-relaxed">{person.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <RequestSample />
    </div>
  );
}
