import { CataloguePage, StoneItem } from "./CataloguePage";

const MARBLE_ITEMS: StoneItem[] = [
  {
    id: "m1",
    name: "Carrara White",
    origin: "Tuscany, Italy",
    finish: ["Polished", "Honed", "Brushed"],
    use: "Bathrooms · Flooring · Sculpture",
    description: "The world's most revered white marble — soft white ground with delicate grey veining.",
    image: "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?w=600&h=500&fit=crop&auto=format&q=80",
    alt: "Carrara White marble with grey veins",
    featured: true,
  },
  {
    id: "m2",
    name: "Statuario",
    origin: "Tuscany, Italy",
    finish: ["Polished", "Honed"],
    use: "Feature Walls · Countertops",
    description: "Brighter white than Carrara with bold, dramatic grey and gold veining.",
    image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?w=600&h=500&fit=crop&auto=format&q=80",
    alt: "Statuario marble slab",
    featured: true,
  },
  {
    id: "m3",
    name: "Calacatta Gold",
    origin: "Apuan Alps, Italy",
    finish: ["Polished"],
    use: "Countertops · Feature Walls",
    description: "Pure white with thick golden and warm grey veins — the most prized Italian marble.",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&h=500&fit=crop&auto=format&q=80",
    alt: "Calacatta Gold marble countertop",
    featured: true,
  },
  {
    id: "m4",
    name: "Nero Marquina",
    origin: "Basque Country, Spain",
    finish: ["Polished", "Honed"],
    use: "Feature Walls · Flooring · Vanities",
    description: "Deep jet black with crisp white veining — striking and architectural.",
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=600&h=500&fit=crop&auto=format&q=80",
    alt: "Nero Marquina black marble",
  },
  {
    id: "m5",
    name: "Emperador Dark",
    origin: "Alicante, Spain",
    finish: ["Polished", "Honed"],
    use: "Flooring · Countertops",
    description: "Rich chocolate-brown marble with fine white and beige veining.",
    image: "https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?w=600&h=500&fit=crop&auto=format&q=80",
    alt: "Emperador Dark marble",
  },
  {
    id: "m6",
    name: "Crema Marfil",
    origin: "Alicante, Spain",
    finish: ["Polished", "Honed", "Brushed"],
    use: "Flooring · Walls · Bathrooms",
    description: "Warm ivory to beige tones with subtle fossil veining — endlessly versatile.",
    image: "https://images.unsplash.com/photo-1598928636135-d146006ff4be?w=600&h=500&fit=crop&auto=format&q=80",
    alt: "Crema Marfil marble",
  },
  {
    id: "m7",
    name: "Botticino Classic",
    origin: "Brescia, Italy",
    finish: ["Polished", "Honed"],
    use: "Flooring · Stairs · Vanities",
    description: "Warm beige with a fine, consistent texture and cream fossil pattern.",
    image: "https://images.unsplash.com/photo-1604177091072-04ba1e2de54e?w=600&h=500&fit=crop&auto=format&q=80",
    alt: "Botticino Classic marble",
  },
  {
    id: "m8",
    name: "Thassos White",
    origin: "Thassos Island, Greece",
    finish: ["Polished", "Honed"],
    use: "Bathrooms · Pools · Feature Walls",
    description: "Exceptionally pure crystalline white — the brightest natural marble available.",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=500&fit=crop&auto=format&q=80",
    alt: "Thassos White marble",
  },
  {
    id: "m9",
    name: "Rosso Alicante",
    origin: "Alicante, Spain",
    finish: ["Polished", "Honed"],
    use: "Feature Walls · Bar Tops",
    description: "Vivid deep red marble with cream and white fossil veining — rare and bold.",
    image: "https://images.unsplash.com/photo-1574739782594-db4ead022697?w=600&h=500&fit=crop&auto=format&q=80",
    alt: "Rosso Alicante red marble",
    featured: true,
  },
  {
    id: "m10",
    name: "Silver Wave",
    origin: "Turkey",
    finish: ["Polished", "Honed", "Brushed"],
    use: "Countertops · Flooring",
    description: "White-grey ground with flowing silver and beige wave-like movement.",
    image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=600&h=500&fit=crop&auto=format&q=80",
    alt: "Silver Wave marble surface",
  },
  {
    id: "m11",
    name: "Sahara Noir",
    origin: "Morocco",
    finish: ["Polished"],
    use: "Feature Walls · Countertops",
    description: "Black with sweeping gold veins — dramatic presence in any space.",
    image: "https://images.unsplash.com/photo-1618004912476-29818d81ae2e?w=600&h=500&fit=crop&auto=format&q=80",
    alt: "Sahara Noir marble",
  },
  {
    id: "m12",
    name: "Arabescato",
    origin: "Apuan Alps, Italy",
    finish: ["Polished", "Honed"],
    use: "Bathrooms · Countertops",
    description: "White marble with complex intersecting grey veins — rich and painterly.",
    image: "https://images.unsplash.com/photo-1564540586988-aa4e53c3d799?w=600&h=500&fit=crop&auto=format&q=80",
    alt: "Arabescato marble veining",
  },
];

export function MarblePage() {
  return (
    <CataloguePage
      category="Marble"
      tagline="Sculpted by metamorphism over millennia — marble carries an inherent elegance no other material can replicate."
      description="From the storied quarries of Carrara and the Basque country to the islands of Greece and the hills of Morocco, our marble collection represents the finest veined and toned varieties available. Each slab is selected for colour consistency, vein character, and surface quality."
      heroImage="https://images.unsplash.com/photo-1541123437800-1bb1317badc2?w=1600&h=600&fit=crop&auto=format&q=70"
      heroAlt="Carrara white marble surface close-up"
      finishFilters={["Polished", "Honed", "Brushed"]}
      items={MARBLE_ITEMS}
    />
  );
}
