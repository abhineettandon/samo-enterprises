import { CataloguePage, StoneItem } from "./CataloguePage";

const GRANITE_ITEMS: StoneItem[] = [
  {
    id: "g1",
    name: "Black Galaxy",
    origin: "Andhra Pradesh, India",
    finish: ["Polished", "Honed"],
    use: "Countertops · Flooring",
    description: "Dense black base with golden specks — dramatic and architectural.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=500&fit=crop&auto=format&q=80",
    alt: "Black Galaxy granite with gold specks",
    featured: true,
  },
  {
    id: "g2",
    name: "Kashmir White",
    origin: "Tamil Nadu, India",
    finish: ["Polished", "Honed", "Leathered"],
    use: "Countertops · Vanities",
    description: "Creamy white background with burgundy and grey garnet inclusions.",
    image: "https://images.unsplash.com/photo-1585418336-bfaa8a4229f9?w=600&h=500&fit=crop&auto=format&q=80",
    alt: "Kashmir White granite surface",
    featured: true,
  },
  {
    id: "g3",
    name: "Absolute Black",
    origin: "Zimbabwe",
    finish: ["Polished", "Flamed", "Bush Hammered"],
    use: "Flooring · Exterior",
    description: "Pure, uniformly black granite with a flawless grain. Refined and bold.",
    image: "https://images.unsplash.com/photo-1567427361984-0cbe7396fc6c?w=600&h=500&fit=crop&auto=format&q=80",
    alt: "Absolute Black granite",
  },
  {
    id: "g4",
    name: "Tan Brown",
    origin: "Andhra Pradesh, India",
    finish: ["Polished", "Flamed"],
    use: "Flooring · Countertops",
    description: "Rich brown tones with black and burgundy crystals. Warm and grounding.",
    image: "https://images.unsplash.com/photo-1586105251261-72a756497a11?w=600&h=500&fit=crop&auto=format&q=80",
    alt: "Tan Brown granite",
  },
  {
    id: "g5",
    name: "Blue Pearl",
    origin: "Norway",
    finish: ["Polished"],
    use: "Countertops · Feature Walls",
    description: "Iridescent silvery-blue labradorite crystals on a dark base.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&h=500&fit=crop&auto=format&q=80",
    alt: "Blue Pearl granite surface",
    featured: true,
  },
  {
    id: "g6",
    name: "Steel Grey",
    origin: "Kerala, India",
    finish: ["Polished", "Honed", "Flamed"],
    use: "Flooring · Steps · Cladding",
    description: "Consistent medium-grey tones with fine crystalline texture.",
    image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=600&h=500&fit=crop&auto=format&q=80",
    alt: "Steel Grey granite",
  },
  {
    id: "g7",
    name: "Colonial White",
    origin: "Minas Gerais, Brazil",
    finish: ["Polished", "Leathered"],
    use: "Countertops · Bathrooms",
    description: "White-grey background with veins of burgundy and dark grey.",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&h=500&fit=crop&auto=format&q=80",
    alt: "Colonial White granite countertop",
  },
  {
    id: "g8",
    name: "Baltic Brown",
    origin: "Finland",
    finish: ["Polished", "Honed"],
    use: "Flooring · Countertops",
    description: "Distinctive brown, grey, and black ellipsoidal crystals on a dark matrix.",
    image: "https://images.unsplash.com/photo-1561864069-e1dc3900d1b3?w=600&h=500&fit=crop&auto=format&q=80",
    alt: "Baltic Brown granite",
  },
  {
    id: "g9",
    name: "Viscount White",
    origin: "Brazil",
    finish: ["Polished", "Leathered"],
    use: "Countertops · Islands",
    description: "Flowing grey and black movement on a bright white field.",
    image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=500&fit=crop&auto=format&q=80",
    alt: "Viscount White granite",
  },
  {
    id: "g10",
    name: "Nero Impala",
    origin: "South Africa",
    finish: ["Polished", "Flamed", "Bush Hammered"],
    use: "Exterior · Paving · Memorials",
    description: "Fine, even grain in deep charcoal — one of the world's most consistent blacks.",
    image: "https://images.unsplash.com/photo-1601987077677-5346c463575a?w=600&h=500&fit=crop&auto=format&q=80",
    alt: "Nero Impala granite",
  },
  {
    id: "g11",
    name: "River White",
    origin: "Andhra Pradesh, India",
    finish: ["Polished", "Honed"],
    use: "Countertops · Bathrooms",
    description: "Soft white with subtle crimson and dark grey veining.",
    image: "https://images.unsplash.com/photo-1615971677499-5467cbab01c0?w=600&h=500&fit=crop&auto=format&q=80",
    alt: "River White granite",
  },
  {
    id: "g12",
    name: "Giallo Ornamental",
    origin: "Brazil",
    finish: ["Polished", "Leathered"],
    use: "Countertops · Feature Walls",
    description: "Warm golden-cream tones with soft grey veining — versatile and inviting.",
    image: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=600&h=500&fit=crop&auto=format&q=80",
    alt: "Giallo Ornamental granite",
    featured: true,
  },
];

export function GranitePage() {
  return (
    <CataloguePage
      category="Granite"
      tagline="Forged deep within the earth — granite offers unrivalled durability and an endlessly varied palette."
      description="Our granite collection spans four continents, from the dramatic black galaxies of India to the iridescent blues of Norway. Each variety is selected for visual character, structural integrity, and finish quality. Available in polished, honed, leathered, flamed, and bush-hammered surfaces."
      heroImage="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&h=600&fit=crop&auto=format&q=70"
      heroAlt="Close-up of Black Galaxy granite surface"
      finishFilters={["Polished", "Honed", "Leathered", "Flamed", "Bush Hammered"]}
      items={GRANITE_ITEMS}
    />
  );
}
