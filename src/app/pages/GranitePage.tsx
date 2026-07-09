import { Catalogue, StoneItem } from "../components/Catalogue";

const GRANITE_ITEMS: StoneItem[] = [
  {
    id: "sm-101",
    name: "Astoria",
    finish: ["Polish", "Matte", "Leather"],
    image: "/img/sm-101.jpg",
    thickness: '2cm, 3cm, 4cm'
  },
  {
    id: "sm-102",
    name: "Monalisa",
    finish: ["Polish", "Matte", "Leather"],
    image: "/img/sm-102.jpg",
    thickness: '2cm, 3cm, 4cm'
  },
  {
    id: "sm-104",
    name: "Blue Dunes",
    finish: ["Polish", "Matte", "Leather"],
    image: "/img/sm-104.jpg",
    thickness: '2cm, 3cm, 4cm'
  },
  {
    id: "sm-105",
    name: "Arctic White",
    finish: ["Polish", "Matte", "Leather"],
    image: "/img/sm-105.jpg",
    thickness: '2cm, 3cm, 4cm'
  },
  {
    id: "sm-106",
    name: "Alpinus White",
    finish: ["Polish", "Matte", "Leather"],
    image: "/img/sm-106.jpg",
    thickness: '2cm, 3cm, 4cm'
  },
  {
    id: "sm-107",
    name: "Aspian White",
    finish: ["Polish", "Matte", "Leather"],
    image: "/img/sm-107.jpg",
    thickness: '2cm, 3cm, 4cm'
  },
  {
    id: "sm-112",
    name: "Azul Nouveu",
    finish: ["Polish", "Matte", "Leather"],
    image: "/img/sm-112.jpg",
    thickness: '2cm, 3cm, 4cm'
  },
  {
    id: "sm-113",
    name: "Crystal Blue",
    finish: ["Polish", "Matte", "Leather"],
    image: "/img/sm-113.jpg",
    thickness: '2cm, 3cm, 4cm'
  },
  {
    id: "sm-114",
    name: "Black Pearl",
    finish: ["Polish", "Matte", "Leather"],
    image: "/img/sm-114.jpg",
    thickness: '2cm, 3cm, 4cm'
  },
  {
    id: "sm-115",
    name: "Black Forest",
    finish: ["Polish", "Matte", "Leather"],
    image: "/img/sm-115.jpg",
    thickness: '2cm, 3cm, 4cm'
  },
  {
    id: "sm-123",
    name: "Colonial Gold",
    finish: ["Polish", "Matte", "Leather"],
    image: "/img/sm-123.jpg",
    thickness: '2cm, 3cm, 4cm'
  },
  {
    id: "sm-124",
    name: "Colonial White",
    finish: ["Polish", "Matte", "Leather"],
    image: "/img/sm-124.jpg",
    thickness: '2cm, 3cm, 4cm'
  },
  {
    id: "sm-130",
    name: "Desert Brown",
    finish: ["Polish", "Matte", "Leather"],
    image: "/img/sm-130.jpg",
    thickness: '2cm, 3cm, 4cm'
  },
  {
    id: "sm-131",
    name: "Moon White",
    finish: ["Polish", "Matte", "Leather"],
    image: "/img/sm-131.jpg",
    thickness: '2cm, 3cm, 4cm'
  },
  {
    id: "sm-132",
    name: "Ivory Brown",
    finish: ["Polish", "Matte", "Leather"],
    image: "/img/sm-132.jpg",
    thickness: '2cm, 3cm, 4cm'
  },
  {
    id: "sm-134",
    name: "Desert Brown",
    finish: ["Polish", "Matte", "Leather"],
    image: "/img/sm-134.jpg",
    thickness: '2cm, 3cm, 4cm'
  },
  {
    id: "sm-145",
    name: "Sapphire Blue",
    finish: ["Polish", "Matte", "Leather"],
    image: "/img/sm-145.jpg",
    thickness: '2cm, 3cm, 4cm'
  },
  {
    id: "sm-147",
    name: "Steel Grey",
    finish: ["Polish", "Matte", "Leather"],
    image: "/img/sm-147.jpg",
    thickness: '2cm, 3cm, 4cm'
  },
  {
    id: "sm-148",
    name: "Thunder White",
    finish: ["Polish", "Matte", "Leather"],
    image: "/img/sm-148.jpg",
    thickness: '2cm, 3cm, 4cm'
  },
  {
    id: "sm-154",
    name: "Titanium Black",
    finish: ["Polish", "Matte", "Leather"],
    image: "/img/sm-154.jpg",
    thickness: '2cm, 3cm, 4cm'
  },
];

export function GranitePage() {
  return (
    <Catalogue
      category="Granite"
      tagline="Forged deep within the earth — granite offers unrivalled durability and an endlessly varied palette."
      description="Our granite collection spans four continents, from the dramatic black galaxies of India to the iridescent blues of Norway. Each variety is selected for visual character, structural integrity, and finish quality. Available in polished, honed, leathered, flamed, and bush-hammered surfaces."
      heroImage="/img/granite.jpeg"
      heroAlt="Close-up of Black Galaxy granite surface"
      items={GRANITE_ITEMS}
    />
  );
}
