import { CataloguePage, StoneItem } from "./CataloguePage";

const GRANITE_ITEMS: StoneItem[] = [
  {
    id: "sm-101",
    name: "Astoria",
    finish: ["Polish", "Matte", "Leather"],
    image: "/img/sm-101.png",
    thickness: '2cm, 3cm, 4cm'
  },
  {
    id: "sm-102",
    name: "Monalisa",
    finish: ["Polish", "Matte", "Leather"],
    image: "/img/sm-102.png",
    thickness: '2cm, 3cm, 4cm'
  },
  {
    id: "sm-104",
    name: "Blue Dunes",
    finish: ["Polish", "Matte", "Leather"],
    image: "/img/sm-104.png",
    thickness: '2cm, 3cm, 4cm'
  },
  {
    id: "sm-105",
    name: "Arctic White",
    finish: ["Polish", "Matte", "Leather"],
    image: "/img/sm-105.png",
    thickness: '2cm, 3cm, 4cm'
  },
  {
    id: "sm-106",
    name: "Alpinus White",
    finish: ["Polish", "Matte", "Leather"],
    image: "/img/sm-106.png",
    thickness: '2cm, 3cm, 4cm'
  },
  {
    id: "sm-107",
    name: "Aspian White",
    finish: ["Polish", "Matte", "Leather"],
    image: "/img/sm-107.png",
    thickness: '2cm, 3cm, 4cm'
  },
  {
    id: "sm-112",
    name: "Azul Nouveu",
    finish: ["Polish", "Matte", "Leather"],
    image: "/img/sm-112.png",
    thickness: '2cm, 3cm, 4cm'
  },
  {
    id: "sm-113",
    name: "Crystal Blue",
    finish: ["Polish", "Matte", "Leather"],
    image: "/img/sm-113.png",
    thickness: '2cm, 3cm, 4cm'
  },
  {
    id: "sm-114",
    name: "Black Pearl",
    finish: ["Polish", "Matte", "Leather"],
    image: "/img/sm-114.png",
    thickness: '2cm, 3cm, 4cm'
  },
  {
    id: "sm-115",
    name: "Black Forest",
    finish: ["Polish", "Matte", "Leather"],
    image: "/img/sm-115.png",
    thickness: '2cm, 3cm, 4cm'
  },
  {
    id: "sm-123",
    name: "Colonial Gold",
    finish: ["Polish", "Matte", "Leather"],
    image: "/img/sm-123.png",
    thickness: '2cm, 3cm, 4cm'
  },
  {
    id: "sm-124",
    name: "Colonial White",
    finish: ["Polish", "Matte", "Leather"],
    image: "/img/sm-124.png",
    thickness: '2cm, 3cm, 4cm'
  },
  {
    id: "sm-130",
    name: "Desert Brown",
    finish: ["Polish", "Matte", "Leather"],
    image: "/img/sm-130.png",
    thickness: '2cm, 3cm, 4cm'
  },
  {
    id: "sm-131",
    name: "Moon White",
    finish: ["Polish", "Matte", "Leather"],
    image: "/img/sm-131.png",
    thickness: '2cm, 3cm, 4cm'
  },
  {
    id: "sm-132",
    name: "Ivory Brown",
    finish: ["Polish", "Matte", "Leather"],
    image: "/img/sm-132.png",
    thickness: '2cm, 3cm, 4cm'
  },
  {
    id: "sm-134",
    name: "Desert Brown",
    finish: ["Polish", "Matte", "Leather"],
    image: "/img/sm-134.png",
    thickness: '2cm, 3cm, 4cm'
  },
  {
    id: "sm-145",
    name: "Sapphire Blue",
    finish: ["Polish", "Matte", "Leather"],
    image: "/img/sm-145.png",
    thickness: '2cm, 3cm, 4cm'
  },
  {
    id: "sm-147",
    name: "Steel Grey",
    finish: ["Polish", "Matte", "Leather"],
    image: "/img/sm-147.png",
    thickness: '2cm, 3cm, 4cm'
  },
  {
    id: "sm-148",
    name: "Thunder White",
    finish: ["Polish", "Matte", "Leather"],
    image: "/img/sm-148.png",
    thickness: '2cm, 3cm, 4cm'
  },
  {
    id: "sm-154",
    name: "Titanium Black",
    finish: ["Polish", "Matte", "Leather"],
    image: "/img/sm-154.png",
    thickness: '2cm, 3cm, 4cm'
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
      items={GRANITE_ITEMS}
    />
  );
}
