import { Catalogue, StoneItem } from "../components/Catalogue";

const MARBLE_ITEMS: StoneItem[] = [
  {
    id: "sm-120",
    name: "Green Marble",
    finish: ["Polish", "Matte", "Leather"],
    image: "/img/sm-120.png",
    thickness: '6cm'
  },
  {
    id: "sm-126",
    name: "Fantasy Brown",
    finish: ["Polish", "Matte", "Leather"],
    image: "/img/sm-126.png",
    thickness: '2cm, 3cm, 4cm'
  },
  {
    id: "sm-127",
    name: "Ivory Fantasy",
    finish: ["Polish", "Matte", "Leather"],
    image: "/img/sm-127.png",
    thickness: '2cm, 3cm, 4cm'
  },
  {
    id: "sm-133",
    name: "Golden Storm",
    finish: ["Polish", "Matte", "Leather"],
    image: "/img/sm-133.png",
    thickness: '2cm, 3cm, 4cm'
  },
  {
    id: "sm-137",
    name: "River White",
    finish: ["Polish", "Matte", "Leather"],
    image: "/img/sm-137.png",
    thickness: '2cm, 3cm, 4cm'
  },
  {
    id: "sm-138",
    name: "New Viscount White",
    finish: ["Polish", "Matte", "Leather"],
    image: "/img/sm-138.png",
    thickness: '2cm, 3cm, 4cm'
  },
  {
    id: "sm-139",
    name: "Picaso White",
    finish: ["Polish", "Matte", "Leather"],
    image: "/img/sm-139.png",
    thickness: '2cm, 3cm, 4cm'
  },
  {
    id: "sm-142",
    name: "Ocean Blue",
    finish: ["Polish", "Matte", "Leather"],
    image: "/img/sm-142.png",
    thickness: '2cm, 3cm, 4cm'
  },
  {
    id: "sm-146",
    name: "Rain Forest Brown",
    finish: ["Polish", "Matte", "Leather"],
    image: "/img/sm-146.png",
    thickness: '2cm, 3cm, 4cm'
  },
  {
    id: "sm-151",
    name: "Thunder White",
    finish: ["Polish", "Matte", "Leather"],
    image: "/img/sm-151.png",
    thickness: '2cm, 3cm, 4cm'
  },
  {
    id: "sm-152",
    name: "Taj Mahal",
    finish: ["Polish", "Matte", "Leather"],
    image: "/img/sm-152.png",
    thickness: '2cm, 3cm, 4cm'
  },
  {
    id: "sm-153",
    name: "Wild Rose",
    finish: ["Polish", "Matte", "Leather"],
    image: "/img/sm-153.png",
    thickness: '2cm, 3cm, 4cm'
  },
];

export function MarblePage() {
  return (
    <Catalogue
      category="Marble"
      tagline="Sculpted by metamorphism over millennia — marble carries an inherent elegance no other material can replicate."
      description="From the storied quarries of Carrara and the Basque country to the islands of Greece and the hills of Morocco, our marble collection represents the finest veined and toned varieties available. Each slab is selected for colour consistency, vein character, and surface quality."
      heroImage="/img/marble.jpg"
      heroAlt="Carrara white marble surface close-up"
      items={MARBLE_ITEMS}
    />
  );
}
