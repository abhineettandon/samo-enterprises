import { CataloguePage, StoneItem } from "./CataloguePage";

const TILES_ITEMS: StoneItem[] = [
  {
    id: "t1",
    name: "Subway Classic White",
    origin: "Ceramic · Italy",
    finish: ["Gloss", "Matte"],
    use: "Kitchen Walls · Bathrooms",
    description: "Timeless 75×150mm white ceramic subway — clean, durable, and endlessly adaptable.",
    image: "https://images.unsplash.com/photo-1615971677499-5467cbab01c0?w=600&h=500&fit=crop&auto=format&q=80",
    alt: "White subway tiles",
    featured: true,
  },
  {
    id: "t2",
    name: "Moroccan Zellige",
    origin: "Handmade · Morocco",
    finish: ["Gloss"],
    use: "Feature Walls · Splashbacks",
    description: "Hand-formed terracotta with unpredictable glaze variation — no two tiles identical.",
    image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=500&fit=crop&auto=format&q=80",
    alt: "Moroccan Zellige tile pattern",
    featured: true,
  },
  {
    id: "t3",
    name: "Herringbone Ivory",
    origin: "Porcelain · Spain",
    finish: ["Matte", "Gloss"],
    use: "Floors · Feature Walls",
    description: "Warm ivory porcelain in classic herringbone format — subtle texture, understated luxury.",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=500&fit=crop&auto=format&q=80",
    alt: "Ivory herringbone tiles",
  },
  {
    id: "t4",
    name: "Hex Black Matte",
    origin: "Porcelain · Portugal",
    finish: ["Matte"],
    use: "Bathrooms · Feature Floors",
    description: "Graphite-black hexagonal porcelain with a smooth matte finish — bold geometry.",
    image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=600&h=500&fit=crop&auto=format&q=80",
    alt: "Black hexagonal matte tiles",
  },
  {
    id: "t5",
    name: "Terracotta Square",
    origin: "Handmade · France",
    finish: ["Natural", "Sealed"],
    use: "Floors · Courtyards",
    description: "Earthy hand-pressed terracotta squares — warm, imperfect, deeply characterful.",
    image: "https://images.unsplash.com/photo-1586105251261-72a756497a11?w=600&h=500&fit=crop&auto=format&q=80",
    alt: "Terracotta floor tiles",
    featured: true,
  },
  {
    id: "t6",
    name: "Slate Grey Large Format",
    origin: "Porcelain · Italy",
    finish: ["Matte", "Structured"],
    use: "Flooring · Feature Walls",
    description: "900×900mm anthracite porcelain with a riven slate texture — modern and minimal.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&h=500&fit=crop&auto=format&q=80",
    alt: "Slate grey large format porcelain tiles",
  },
  {
    id: "t7",
    name: "Travertine Look",
    origin: "Porcelain · Spain",
    finish: ["Matte", "Polished"],
    use: "Flooring · Outdoor",
    description: "Convincing travertine texture in fade-resistant, frost-proof porcelain.",
    image: "https://images.unsplash.com/photo-1564540586988-aa4e53c3d799?w=600&h=500&fit=crop&auto=format&q=80",
    alt: "Travertine look porcelain tile",
  },
  {
    id: "t8",
    name: "Wood-Look Plank",
    origin: "Porcelain · Italy",
    finish: ["Structured"],
    use: "Flooring · Outdoor Decking",
    description: "Long-format oak-grain porcelain — the warmth of timber with tile durability.",
    image: "https://images.unsplash.com/photo-1574739782594-db4ead022697?w=600&h=500&fit=crop&auto=format&q=80",
    alt: "Wood-look porcelain plank",
  },
  {
    id: "t9",
    name: "Encaustic Cement",
    origin: "Handmade · Colombia",
    finish: ["Matte", "Sealed"],
    use: "Feature Floors · Walls",
    description: "Traditional pigmented cement tiles in geometric patterns — artisan-crafted.",
    image: "https://images.unsplash.com/photo-1604177091072-04ba1e2de54e?w=600&h=500&fit=crop&auto=format&q=80",
    alt: "Encaustic cement patterned tiles",
    featured: true,
  },
  {
    id: "t10",
    name: "Penny Round Blanc",
    origin: "Ceramic · Italy",
    finish: ["Gloss", "Matte"],
    use: "Bathroom Floors · Walls",
    description: "Classic small-format penny rounds in crisp white — refined and textural.",
    image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=600&h=500&fit=crop&auto=format&q=80",
    alt: "White penny round mosaic tiles",
  },
  {
    id: "t11",
    name: "Calacatta Porcelain",
    origin: "Porcelain · Spain",
    finish: ["Polished", "Matte"],
    use: "Countertops · Walls · Floors",
    description: "Full-body Calacatta marble replica in large-format porcelain — virtually seamless.",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&h=500&fit=crop&auto=format&q=80",
    alt: "Calacatta look porcelain tile",
  },
  {
    id: "t12",
    name: "Charcoal Brick",
    origin: "Ceramic · Portugal",
    finish: ["Matte", "Structured"],
    use: "Feature Walls · Fireplaces",
    description: "Smoky charcoal ceramic brick format — industrial warmth and textural depth.",
    image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?w=600&h=500&fit=crop&auto=format&q=80",
    alt: "Charcoal brick ceramic tiles",
  },
];

export function TilesPage() {
  return (
    <CataloguePage
      category="Tiles"
      tagline="From artisan handmade to precision-engineered large format — tiles for every surface and every vision."
      description="Our tile collection ranges from traditional Moroccan zellige and encaustic cement tiles to contemporary large-format porcelain and wood-look planks. We carry ceramic, porcelain, and natural stone tile formats suitable for floors, walls, splashbacks, and exterior applications."
      heroImage="https://images.unsplash.com/photo-1615971677499-5467cbab01c0?w=1600&h=600&fit=crop&auto=format&q=70"
      heroAlt="Geometric tile pattern arrangement"
      finishFilters={["Polished", "Matte", "Gloss", "Structured", "Natural", "Sealed"]}
      items={TILES_ITEMS}
    />
  );
}
